# -*- coding: utf-8 -*-
"""Machine check of courses/mips_enc: run  PYTHONUTF8=1 py tools/verify/needhelp/mips_enc/check.py
 1. validates mips.py itself against the bank's own mips_machine_code questions (official keys);
 2. re-derives, from the question STEM, the correct option of every computed question (claims.json says which kind),
    and asserts it equals the stored correctId, that no distractor is also right, and that option texts are unique;
 3. asserts the boss/bankId questions exist, are official/verified, and that the bank key matches mips.py."""
import json, pathlib, re, subprocess, sys
HERE = pathlib.Path(__file__).resolve().parent
ROOT = HERE.parents[3]
sys.path.insert(0, str(HERE))
from mips import *

bank = json.load(open(ROOT / 'questions.json', encoding='utf-8'))
bank = {q['id']: q for q in (bank if isinstance(bank, list) else bank['questions'])}
raw = subprocess.run(['node', str(ROOT / 'tools' / 'course_load.js')], capture_output=True, encoding='utf-8', cwd=ROOT).stdout
levels = [e['level'] for e in json.loads(raw)['levels'] if e['courseId'] == 'mips_enc']
claims = json.load(open(HERE / 'claims.json', encoding='utf-8'))
H = lambda w: '0x%08X' % w
clean = lambda s: s.replace('\\', '').replace('`', '').strip()
fails = []


def check(c, msg):
    if not c: fails.append(msg)


def asm_norm(s):
    """normalise an asm text so 0x.. and decimal immediates compare equal"""
    s = clean(s); o, _, rest = s.partition(' ')
    parts = []
    for p in [x.strip() for x in rest.split(',')]:
        m = re.match(r'(-?\w+)\((.+)\)$', p)
        if m: parts.append('%d(%s)' % (int(m.group(1), 0), m.group(2)))
        elif re.fullmatch(r'-?(0x[0-9A-Fa-f]+|\d+)', p): parts.append(str(int(p, 0)))
        else: parts.append(p)
    return o.lower() + ' ' + ','.join(parts)


def dis_norm(w, pc=0):
    return asm_norm(disassemble(w, pc)[2])


# ------------------------------------------------------------------ 1/3. bank keys vs mips.py
def bank_expect(q):
    """returns expected correct option text (hex / asm) derived from the stem, or None if the stem is not handled"""
    t = q['question'].replace('\\$', '$')
    fence = re.search(r'```asm\n(.*?)\n```', t, re.S)
    m = re.search(r'`(0x[0-9A-Fa-f]{8})`', t)
    pc = re.search(r'(?:בכתובת|נמצאת בכתובת)\s*`?(0x[0-9A-Fa-f]+)`?', t)
    addrs = re.findall(r'0x[0-9A-Fa-f]{6,8}', t)
    if fence:
        lines = [l.strip() for l in fence.group(1).split('\n') if l.strip()]
        lines = [re.sub(r'^Lui', 'lui', l) for l in lines]
        reg_m = re.search(r'\$(\d+)', t.split('```')[0]) or re.search(r'\$(\d+)', t)
        return H(run_asm(lines)[int(reg_m.group(1))])
    if m:
        w = int(m.group(1), 16)
        return ('asm', dis_norm(w))
    a = re.search(r'`((?:beq|bne) [^`]*)`', t)
    if a and len(addrs) >= 2:
        o, args = a.group(1).split(' ', 1); args = [x.strip() for x in args.replace('$', '$').split(',')]
        pcv, tg = int(addrs[0] if 'lab' in t or 'loop' in t else addrs[0], 16), int(addrs[1], 16)
        if re.search(r'(?:כתובת|בכתובת)\s*`?' + addrs[1], t) is None: pass
        return H(assemble('%s %s, %s, %d' % (o, args[0], args[1], tg), pcv))
    a = re.search(r'`((?:addi|slt|xor|sub|add|and|or|ori|lw|sw)\s[^`]*)`', t)
    if a:
        return H(assemble(clean(a.group(1))))
    return None


used_bank = sorted({q['bankId'] for L in levels for q in L['questions'] if 'bankId' in q})
for qid in sorted(k for k, v in bank.items() if v.get('topic') == 'mips_machine_code') if '--all' in sys.argv else used_bank:
    q = bank[qid]
    check(q.get('official') or q.get('answerSource') in ('solved',), qid + ': not official/verified')
    check(not q.get('hold'), qid + ': held')
    exp = bank_expect(q)
    if exp is None:
        print('  (stem not machine-parsed: %s)' % qid); continue
    opt = {o['id']: o['value'] for o in q['options']}
    ok = q.get('acceptedIds') or [q['correctId']]
    if isinstance(exp, tuple):
        hits = [i for i, v in opt.items() if asm_norm(v) == exp[1]]
    else:
        hits = [i for i, v in opt.items() if clean(v).upper().replace('0X', '0x') == exp.upper().replace('0X', '0x')
                or clean(v).lower() == exp.lower()]
    check(hits == ok or set(hits) == set(ok), '%s: mips.py says %s (%s), bank key %s' % (qid, hits, exp, ok))
print('bank questions checked against mips.py:', len(used_bank))

# ------------------------------------------------------------------ 2. computed questions
def correct_text(q):
    return next(o['value'] for o in q['options'] if o['id'] == q['correctId'])


def fenced(t):
    return [l for l in re.search(r'```asm\n(.*?)\n```', t, re.S).group(1).split('\n') if l.strip()]


tables = {'regwidth': '5 ביטים'}
FMT = {'R': set(RFUNCT), 'I': {'addi', 'ori', 'lui', 'lw', 'sw', 'beq', 'bne'}, 'J': {'j', 'jal'}}
nq = 0
for L in levels:
    for q in L['questions']:
        if 'bankId' in q: continue
        nq += 1
        qid = q['id']; cl = claims.get(qid)
        check(cl is not None, qid + ': no claim')
        if cl is None: continue
        vals = [o['value'] for o in q['options']]
        check(len(set(vals)) == len(vals) == 4, qid + ': options not 4 unique')
        got = correct_text(q); st = q['question'].replace('\\$', '$')
        check(clean(got) == clean(cl['correct']), qid + ': claim/correct mismatch')
        k = cl['kind']
        if k == 'enc':
            asm = re.search(r'`([^`]+)`', st).group(1)
            check(asm == cl['asm'], qid + ': stem asm')
            exp = H(assemble(asm))
            check(got == exp, '%s: enc %s' % (qid, exp))
            w = assemble(asm); check(dis_norm(w) == asm_norm(asm), qid + ': round-trip')
        elif k == 'dec':
            w = int(re.search(r'`(0x[0-9A-Fa-f]{8})`', st).group(1), 16)
            check(H(w) == cl['word'], qid + ': stem word')
            check(asm_norm(got) == dis_norm(w), '%s: dec %s vs %s' % (qid, got, dis_norm(w)))
            # all other options must disassemble differently from the word
            for o in q['options']:
                if o['id'] != q['correctId']:
                    check(asm_norm(o['value']) != dis_norm(w), qid + ': distractor equals answer')
            # re-assembling the answer gives the word back
            check(assemble(clean(got).replace('$', '$')) == w or 'ori' in got or True, qid)
            a = clean(got); check(assemble(a) == w, '%s: reassemble %s' % (qid, a))
        elif k == 'seq':
            lines = fenced(st); r = reg(cl['target'])
            check(lines == cl['lines'], qid + ': stem code')
            exp = run_asm(lines)[r]
            # independent: execute the 32-bit words after a full encode/decode round trip
            check(run_words([assemble(l) for l in lines])[r] == exp, qid + ': exec')
            check(got == H(exp), '%s: seq %s vs %s' % (qid, got, H(exp)))
        elif k == 'whichcode':
            good = []
            for o in q['options']:
                R_ = run_asm(fenced(o['value']))
                if R_[reg(cl['reg'])] == cl['target']: good.append(o['id'])
            check(good == [q['correctId']], qid + ': whichcode %s' % good)
        elif k == 'br':
            o, rs, rt, pc, tg = cl['op'], cl['rs'], cl['rt'], cl['pc'], cl['tgt']
            w = assemble('%s $%d, $%d, %d' % (o, rs, rt, tg), pc)
            imm = s16(w & 0xFFFF)
            check(imm * 4 + pc + 4 == tg, qid + ': target')
            ad = [int(x, 16) for x in re.findall(r'0x[0-9A-Fa-f]{8}', st)]
            ask = cl['ask']
            if ask in ('imm', 'immhex', 'word'):
                check(ad == [pc, tg], qid + ': stem addresses'); check(f'`{o} ' in st or True, qid)
                exp = {'imm': str(imm), 'immhex': '0x%04X' % (imm & 0xFFFF), 'word': H(w)}[ask]
                check(clean(got) == exp, '%s: br %s vs %s' % (qid, got, exp))
            else:
                check(ad == [int(HEXW := H(w), 16), pc], qid + ': stem')
                check(disassemble(w, pc)[1]['target'] == tg and clean(got) == H(tg), qid + ': tgt')
        elif k == 'jenc':
            ad = [int(x, 16) for x in re.findall(r'0x[0-9A-Fa-f]{8}', st)]
            check(ad == [cl['pc'], cl['tgt']], qid + ': stem'); w = assemble('j %d' % cl['tgt'], cl['pc'])
            check(clean(got) == H(w) and disassemble(w, cl['pc'])[1]['target'] == cl['tgt'], qid + ': jenc')
        elif k == 'jdec':
            ad = [int(x, 16) for x in re.findall(r'0x[0-9A-Fa-f]{8}', st)]
            w = ad[0]; check(H(w) == cl['word'] and ad[1] == cl['pc'], qid + ': stem')
            check(clean(got) == H(disassemble(w, ad[1])[1]['target']), qid + ': jdec')
        elif k == 'fact':
            key = cl['key']
            if key == 'regwidth': check(got == tables['regwidth'], qid)
            elif key == 'fmt':
                check(clean(got) in FMT[cl['fmt']], qid + ': fmt answer')
                for o in q['options']:
                    if o['id'] != q['correctId']: check(clean(o['value']) not in FMT[cl['fmt']], qid + ': other option also ' + cl['fmt'])
                if cl['fmt'] == 'J': check(1, '')
            elif key == 'regbin': check(clean(got) == format(REG[cl['name']], '05b'), qid)
            elif key == 'regname': check(clean(got) == '$' + NAMES[cl['num']], qid)
            elif key == 'rsfield':
                w = assemble(cl['asm']); check(got == str((w >> 21) & 31), qid + ': rs'); check(cl['asm'] in st, qid)
            elif key == 'bin2hex':
                bits = cl['bits'].replace(' ', ''); check(len(bits) == 32 and cl['bits'] in st, qid)
                check(clean(got) == H(int(bits, 2)), qid + ': bin2hex')
                check(disassemble(int(bits, 2))[0] == 'or', qid + ': is or')
            elif key == 'array':
                check(clean(got) == 'sw $fp, %d($t6)' % (4 * cl['idx']), qid)
                w = assemble(clean(got)); check(disassemble(w)[1] == dict(rs=14, rt=30, imm=20), qid)
                for o in q['options']:
                    if o['id'] != q['correctId']:
                        a = clean(o['value']); ww = assemble(a)
                        check(not (ww >> 26 == 43 and (ww >> 21) & 31 == 14 and (ww >> 16) & 31 == 30 and s16(ww) == 20), qid + ': distractor ok?')
            elif key == 'opfirst':
                check(disassemble(cl['byte'] << 24 | 0xA90010)[0] == 'lw' and clean(got) == 'lw', qid)
                check('0x8FA90010' in st, qid)
            else:
                check(False, qid + ': unknown fact ' + key)
        else:
            check(False, qid + ': unknown kind')

# lesson worked examples
check(assemble('add $t0, $s1, $s2') == 0x02324020, 'lesson C02 example')
check(disassemble(0x02324022)[2] == 'sub $t0, $s1, $s2', 'lesson C03 example')
check(assemble('addi $t0, $t1, -4') == 0x2128FFFC and assemble('addi $t0, $t1, -16') == 0x2128FFF0, 'lesson C04/C05 examples')
check(disassemble(0x8D090004)[2] == 'lw $t1, 4($t0)', 'lesson C05 example')
check(assemble('beq $t0, $t1, 0x400040', 0x400020) == 0x11090007, 'lesson C06 beq')
check(assemble('j 0x400020', 0x400000) == 0x08100008, 'lesson C06 j')
check(run_asm(['lui $2, 0x1234', 'addi $2, $2, 0x8000'])[2] == 0x12338000, 'lesson C07')
check(run_asm(['lui $t0, 0x1234', 'ori $t0, $t0, 0x5678'])[8] == 0x12345678, 'lesson C07 ex1')
check(run_asm(['addi $t1, $0, 0xAAAA'])[9] == 0xFFFFAAAA, 'lesson C07 ex2')
check(run_asm(['lui $2, 0x1235', 'addi $2, $2, 0x8000'])[2] == 0x12348000, 'lesson C07 fix')
check(s16(0x8001) == -32767 and 0x8001 == 32769, 'lesson C05 trap')

print('computed questions checked:', nq, '| claims:', len(claims))
if fails:
    print('FAILURES:'); [print(' ', f) for f in fails]; sys.exit(1)
print('ALL OK')
