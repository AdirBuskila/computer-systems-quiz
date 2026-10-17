# -*- coding: utf-8 -*-
"""Generator for courses/mips_enc/C01..C08.js. Every answer/distractor is computed with mips.py.
Writes the level files and claims.json (the spec of each computed question) that check.py re-verifies."""
import json, pathlib, sys
HERE = pathlib.Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
from mips import *

ROOT = HERE.parents[2].parent
OUT = ROOT / 'courses' / 'mips_enc'
CLAIMS = {}

H = lambda w: '0x%08X' % w


def sp(w):
    """the word split into fields (binary groups)"""
    b = format(w, '032b'); op = w >> 26
    if op == 0: return ' '.join([b[:6], b[6:11], b[11:16], b[16:21], b[21:26], b[26:]])
    if op in (2, 3): return b[:6] + ' ' + b[6:]
    return ' '.join([b[:6], b[6:11], b[11:16], b[16:]])


def n(i): return '$' + NAMES[i]


def mk(qid, q, correct, wrong, expl_core, recap, kind, spec, pos):
    """wrong = [(option text, reason)]. pos = index the correct option takes (0-3)."""
    seen = {correct}; ws = []
    for t, why in wrong:
        if t not in seen:
            seen.add(t); ws.append((t, why))
    assert len(ws) >= 3, (qid, [t for t, _ in wrong])
    ws = ws[:3]
    opts = ws[:]; opts.insert(pos, (correct, None))
    ids = 'abcd'
    expl = expl_core + ' המסיחים: ' + ' '.join('%s ← %s.' % (t, w) for t, w in ws)
    CLAIMS[qid] = dict(kind=kind, correct=correct, **spec)
    return dict(id=qid, question=q, options=[dict(id=ids[i], value=t) for i, (t, _) in enumerate(opts)],
                correctId=ids[pos], explanation=expl, recap=recap)


def build_r(rs, rt, rd, fn): return (rs << 21) | (rt << 16) | (rd << 11) | fn


OTHER = {'add': 'sub', 'sub': 'add', 'and': 'or', 'or': 'and', 'xor': 'or', 'slt': 'sub'}


def enc_r(qid, asm, pos):
    w = assemble(asm); o, a = asm.split(' ', 1); rd, rs, rt = [reg(x) for x in a.split(',')]
    fn = RFUNCT[o]
    wrong = [(H(build_r(rd, rs, rt, fn)), 'הוצבו האוגרים לפי סדר הכתיבה rd, rs, rt במקום rs, rt, rd'),
             (H(build_r(rt, rs, rd, fn)), 'rs ו-rt הוחלפו'),
             (H(build_r(rs, rt, rd, RFUNCT[OTHER[o]])), 'funct של %s ולא של %s' % (OTHER[o], o)),
             (H(build_r(rt, rd, rs, fn)), 'rd ו-rs הוחלפו'),
             (H(build_r(rs, rd, rt, fn)), 'rd ו-rt הוחלפו')]
    core = 'ב-R-type הסדר בקידוד הוא rs, rt, rd. כאן rs=%d, rt=%d, rd=%d, funct=%d: `%s` = %s.' % (rs, rt, rd, fn, sp(w), H(w))
    return mk(qid, 'מהו הקידוד בשפת מכונה של הפקודה `%s`?' % asm, H(w), wrong, core,
              'R: קידוד rs, rt, rd, funct · כתיבה rd, rs, rt', 'enc', dict(asm=asm), pos)


def dec_r(qid, asm, pos):
    w = assemble(asm); o, a = asm.split(' ', 1); rd, rs, rt = [reg(x) for x in a.split(',')]
    fn = RFUNCT[o]
    f = lambda op_, d, s, t: '`%s %s, %s, %s`' % (op_, n(d), n(s), n(t))
    wrong = [(f(o, rs, rt, rd), 'קריאת השדות לפי סדר הכתיבה (הראשון נלקח כיעד)'),
             (f(o, rd, rt, rs), 'rs ו-rt הוחלפו'),
             (f(OTHER[o], rd, rs, rt), 'funct %d הוא %s ולא %s' % (fn, o, OTHER[o])),
             (f(o, rt, rs, rd), 'rd הוצב אחרון')]
    core = '`%s` = %s. op=0 ולכן R-type, ו-funct=%d הוא %s. rs=%d (`%s`), rt=%d (`%s`), rd=%d (`%s`), והכתיבה היא rd, rs, rt.' % (
        sp(w), H(w), fn, o, rs, n(rs), rt, n(rt), rd, n(rd))
    return mk(qid, 'הפקודה `%s` בשפת מכונה היא בעצם פקודת האסמבלי:' % H(w), '`%s`' % asm, wrong, core,
              'op=0: funct קובע · rs, rt, rd ← כותבים rd, rs, rt', 'dec', dict(word=H(w)), pos)


def enc_i(qid, asm, pos):
    w = assemble(asm); o = asm.split(' ')[0]
    opc = w >> 26; rs = (w >> 21) & 31; rt = (w >> 16) & 31; imm = w & 0xFFFF; sgn = s16(imm)
    sw = lambda a, b, i, oc=opc: (oc << 26) | (a << 21) | (b << 16) | (i & 0xFFFF)
    wrong = [(H(sw(rt, rs, imm)), 'rs ו-rt הוחלפו'),
             (H(sw(rs, rt, imm, {'addi': 13, 'ori': 8, 'lw': 43, 'sw': 35}[o])), 'opcode של פקודה אחרת')]
    if sgn < 0:
        wrong.append((H(sw(rs, rt, -sgn)), 'ערך מוחלט במקום משלים ל-2'))
        wrong.append((H(sw(rs, rt, imm - 1)), 'משלים ל-2 בלי להוסיף 1 (משלים ל-1)'))
    else:
        wrong.append((H(sw(rs, rt, -sgn)), 'ה-immediate נכתב עם הסימן ההפוך'))
        wrong.append((H(sw(rs, rt, sgn * 4)), 'ה-immediate הוכפל ב-4 בלי סיבה'))
    core = 'op=%d, rs=%d, rt=%d, imm=0x%04X: `%s` = %s. הכתיבה היא rt ואז rs, והקידוד rs ואז rt.' % (opc, rs, rt, imm, sp(w), H(w))
    return mk(qid, 'מהו הקידוד בשפת מכונה של הפקודה `%s`?' % asm, H(w), wrong, core,
              'I: op, rs, rt, imm16 · שלילי: משלים ל-2 ב-16 ביט', 'enc', dict(asm=asm), pos)


def fmt_i(o, rt, rs, i):
    if o in ('lw', 'sw'): return '%s %s, %d(%s)' % (o, n(rt), i, n(rs))
    return '%s %s, %s, %d' % (o, n(rt), n(rs), i)


def dec_i(qid, asm, pos):
    w = assemble(asm); o = asm.split(' ')[0]
    opc = w >> 26; rs = (w >> 21) & 31; rt = (w >> 16) & 31; imm = w & 0xFFFF; sgn = s16(imm)
    shown = imm if o == 'ori' else sgn
    if o in ('addi', 'ori'):
        other = {'addi': 'ori', 'ori': 'addi'}[o]
        wrong = [(fmt_i(o, rs, rt, shown), 'rs ו-rt הוחלפו'),
                 (fmt_i(other, rt, rs, shown), 'opcode %d הוא %s ולא %s' % (opc, o, other)),
                 (fmt_i(o, rt, rs, sgn if o == 'ori' else imm), 'ה-immediate נקרא %s' % ('עם סימן, אבל ori מורחב באפסים' if o == 'ori' else 'בלי סימן, אבל addi מרחיב בסימן')),
                 (fmt_i(o, rt, rs, shown + 1), 'טעות בקריאת ה-immediate')]
    else:
        oo = {'lw': 'sw', 'sw': 'lw'}[o]
        wrong = [(fmt_i(o, rs, rt, sgn), 'rs ו-rt הוחלפו'), (fmt_i(oo, rt, rs, sgn), 'opcode %d הוא %s ולא %s' % (opc, o, oo)),
                 (fmt_i(o, rt, rs, imm), 'ה-offset נקרא בלי סימן'), (fmt_i(o, rt, rs, sgn * 4), 'ה-offset כבר בבתים, אין להכפיל')]
    wrong = [('`%s`' % t, why) for t, why in wrong]
    correct = '`%s`' % fmt_i(o, rt, rs, shown)
    core = '`%s` = %s. op=%d הוא %s, rs=%d (`%s`), rt=%d (`%s`), imm=0x%04X שהוא %d, כלומר %s.' % (
        sp(w), H(w), opc, o, rs, n(rs), rt, n(rt), imm, shown, correct)
    return mk(qid, 'הפקודה `%s` בשפת מכונה היא בעצם פקודת האסמבלי:' % H(w), correct, wrong, core,
              'op קובע את הפקודה · addi/lw/sw: imm עם סימן · ori: בלי סימן', 'dec', dict(word=H(w)), pos)


def sim_lines(lines, addi_zext=False, ori_sext=False, lui_low=False):
    R = {0: 0}
    g = lambda r: R.get(r, 0)
    for l in lines:
        o, a = l.split(' ', 1); a = [x.strip() for x in a.split(',')]
        if o == 'lui':
            v = int(a[1], 0); R[reg(a[0])] = (v if lui_low else v << 16) & M
        elif o in ('addi', 'ori'):
            v = int(a[2], 0) & 0xFFFF
            if o == 'addi':
                v = v if addi_zext else s16(v); R[reg(a[0])] = (g(reg(a[1])) + v) & M
            else:
                v = s16(v) & M if ori_sext else v; R[reg(a[0])] = g(reg(a[1])) | v
        elif o == 'add':
            R[reg(a[0])] = (g(reg(a[1])) + g(reg(a[2]))) & M
        R[0] = 0
    return R


def seq_q(qid, lines, target, pos):
    code = '```asm\n' + '\n'.join(lines) + '\n```'
    r = reg(target); want = run_asm(lines)[r]
    assert want == sim_lines(lines).get(r, 0)
    wrong = [(H(sim_lines(lines, addi_zext=True).get(r, 0)), 'addi הורחב באפסים, אבל addi מרחיב בסימן'),
             (H(sim_lines(lines, ori_sext=True).get(r, 0)), 'ori הורחב בסימן, אבל ori מורחב באפסים'),
             (H(sim_lines(lines, lui_low=True).get(r, 0)), 'lui הוכנס לחצי התחתון, אבל lui כותב לחצי העליון'),
             (H((want + 0x10000) & M), 'חצי עליון גדול ב-1'), (H((want - 0x10000) & M), 'חצי עליון קטן ב-1'),
             (H(want ^ 0xFFFF), 'החצי התחתון הפוך')]
    steps = []
    for i in range(1, len(lines) + 1):
        steps.append('אחרי `%s` ב-`%s` יש %s' % (lines[i - 1], target, H(run_asm(lines[:i])[r])))
    core = '; '.join(steps) + '.'
    return mk(qid, 'מה יהיה באוגר `%s` אחרי ביצוע הפקודות הבאות?\n%s' % (target, code), H(want), wrong, core,
              'lui: חצי עליון · ori: בלי סימן · addi: מרחיב בסימן', 'seq', dict(lines=lines, target=target), pos)


def fact(qid, q, correct, wrong, expl, recap, spec, pos, kind='fact'):
    return mk(qid, q, correct, wrong, expl, recap, kind, spec, pos)


def esc(s):
    out, infence = [], False
    for ln in s.split(chr(10)):
        if ln.startswith(chr(96) * 3):
            infence = not infence; out.append(ln)
        else:
            out.append(ln if infence else ln.replace(chr(36), chr(92) + chr(36)))
    return chr(10).join(out)


def escq(q):
    q = dict(q)
    for k in ('question', 'explanation', 'recap'):
        if k in q: q[k] = esc(q[k])
    if 'options' in q: q['options'] = [dict(o, value=esc(o['value'])) for o in q['options']]
    return q


def emit(fname, lid, order, icon, title, goal, lesson, qs, boss=False):
    parts = []
    for q in qs:
        if 'bankId' in q:
            parts.append('    { bankId: %s, recap: %s },' % (json.dumps(q['bankId']), json.dumps(q['recap'], ensure_ascii=False)))
        else:
            parts.append('    ' + json.dumps(escq(q), ensure_ascii=False) + ',')
    s = '/* Course mips_enc, level %s. Answers computed and checked by tools/verify/needhelp/mips_enc/check.py */\n' % lid
    s += 'COURSE_LEVEL("mips_enc", {\n  id: %s, order: %d, icon: %s, title: %s,\n' % (
        json.dumps(lid), order, json.dumps(icon, ensure_ascii=False), json.dumps(title, ensure_ascii=False))
    s += '  goal: %s,\n' % json.dumps(goal, ensure_ascii=False)
    if boss: s += '  boss: true,\n'
    assert '`' not in lesson
    s += '  source: "ai-verified",\n  lesson: { html: String.raw`' + lesson.strip('\n') + '` },\n  questions: [\n' + '\n'.join(parts) + '\n  ],\n});\n'
    (OUT / fname).write_text(s, encoding='utf-8', newline='\n')


D = '&#36;'


def code(s): return '<code>' + s.replace('$', D) + '</code>'


OUT.mkdir(parents=True, exist_ok=True)
exec(compile(open(HERE / 'levels.py', encoding='utf-8').read(), 'levels.py', 'exec'))
(HERE / 'claims.json').write_text(json.dumps(CLAIMS, ensure_ascii=False, indent=1), encoding='utf-8')
print('generated', len(CLAIMS), 'computed questions')
