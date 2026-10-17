"""Independent re-check of every bank question whose MIPS code uses addi with a negative immediate or a 16-bit hex
immediate >= 0x8000 (sign-extended). Own simulator: addi/slti sign-extend the 16-bit field, lw/sw offsets are signed.
Run from the app root:  PYTHONUTF8=1 py tools/verify/bank_mips_recheck.py
Prints, per question, the option(s) the simulation selects and the stored key; a CHANGE line when they differ."""
import json, re, random, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[2]
M = 0xFFFFFFFF
def s32(v):
    v &= M
    return v - (1 << 32) if v >> 31 else v
def s16(v):
    v &= 0xFFFF
    return v - 65536 if v >> 15 else v
def parse(code):
    prog, labels = [], {}
    for ln in code.splitlines():
        ln = ln.split('#')[0].strip()
        if not ln or ln == '@@@@@@@': continue
        while True:
            m = re.match(r'^(\w+):\s*(.*)$', ln)
            if not m: break
            labels[m.group(1)] = len(prog); ln = m.group(2)
        if ln: prog.append(ln)
    return prog, labels
def run(code, regs=None, mem=None, maxsteps=200000):
    prog, labels = parse(code); r = [0] * 32
    for k, v in (regs or {}).items(): r[k] = v & M
    mem = dict(mem or {}); pc = 0; n = 0
    R = lambda x: int(x.strip().lstrip('$'))
    while pc < len(prog):
        n += 1
        if n > maxsteps: raise RuntimeError('loop')
        ln = prog[pc]; op, _, rest = ln.partition(' '); op = op.lower()
        a = [x.strip() for x in rest.split(',')] if rest else []; pc += 1
        def W(i, v):
            if i: r[i] = v & M
        if op == 'add': W(R(a[0]), r[R(a[1])] + r[R(a[2])])
        elif op == 'sub': W(R(a[0]), r[R(a[1])] - r[R(a[2])])
        elif op == 'and': W(R(a[0]), r[R(a[1])] & r[R(a[2])])
        elif op == 'or': W(R(a[0]), r[R(a[1])] | r[R(a[2])])
        elif op == 'slt': W(R(a[0]), int(s32(r[R(a[1])]) < s32(r[R(a[2])])))
        elif op == 'addi': W(R(a[0]), r[R(a[1])] + s16(int(a[2], 0)))
        elif op == 'lui': W(R(a[0]), (int(a[1], 0) & 0xFFFF) << 16)
        elif op == 'ori': W(R(a[0]), r[R(a[1])] | (int(a[2], 0) & 0xFFFF))
        elif op == 'beq':
            if r[R(a[0])] == r[R(a[1])]: pc = labels[a[2]]
        elif op == 'bne':
            if r[R(a[0])] != r[R(a[1])]: pc = labels[a[2]]
        elif op == 'j': pc = labels[a[0]]
        elif op in ('lw', 'sw'):
            m = re.match(r'(-?\w+)\(\$(\d+)\)', a[1]); addr = (r[int(m.group(2))] + s16(int(m.group(1), 0))) & M
            if op == 'lw': W(R(a[0]), mem.get(addr, 0))
            else: mem[addr] = r[R(a[0])]
        else: raise RuntimeError(op)
    return r, mem
def blocks(t): return re.findall(r'```(?:asm|c)\n(.*?)```', t, re.S)
def load(ex):
    d = json.load(open(ROOT / 'tools' / 'raw' / f'{ex}.json', encoding='utf8'))
    return {q['num']: q for q in d['questions']}
def opts(q): return {o['id']: o['value'] for o in q['options']}
def hx(v): return int(v.strip().strip('`'), 16)
out = []
def report(ex, n, picked, q):
    key = q.get('correctId'); acc = q.get('acceptedIds') or [key]
    ok = picked == [key] or (set(picked) == set(acc))
    print(f"{ex} Q{n}: sim={picked} key={key} {'OK' if ok else '*** CHANGE ***'}")
    out.append((ex, n, picked, key, ok))
# --- value questions: final register of the stem code
VAL = {'22A-A': (2, 3), '22B-A': (2, 9), '22B-B': (2, 5), '23A-A': (2, 3), '23B-A': (2, 5), '23B-B': (2, 4),
       '24A-A': (2, 4), '24B-A': (2, 4), '24S-A': (2, 4), '25A-A': (2, 4)}
for ex, (n, reg) in VAL.items():
    q = load(ex)[n]; code = blocks(q['question'])[0]
    r, _ = run(code)
    picked = [k for k, v in opts(q).items() if hx(v) == r[reg]]
    report(ex, n, picked, q)
# --- 23A-B Q2: which snippet does NOT put 65535 into $3
q = load('23A-B')[2]; picked = []
for k, v in opts(q).items():
    r, _ = run(blocks(v)[0])
    if r[3] != 65535: picked.append(k)
report('23A-B', 2, picked, q)
# --- loop value questions
def numopt(q, val):
    res = []
    for k, v in opts(q).items():
        t = v.strip()
        x = int(t, 16) if t.lower().startswith('0x') else int(t)
        if x == val: res.append(k)
    return res
q = load('23A-A')[10]; r, _ = run(blocks(q['question'])[0]); report('23A-A', 10, numopt(q, r[4]), q)
q = load('23B-A')[10]; r, _ = run(blocks(q['question'])[0]); report('23B-A', 10, numopt(q, r[6]), q)
q = load('23A-B')[10]; r, _ = run(blocks(q['question'])[0]); report('23A-B', 10, numopt(q, r[9]), q)
# --- 23B-A Q13: C equivalent of the loop (a=$5, b=$4)
q = load('23B-A')[13]; code = blocks(q['question'])[0]
def asm13(a, b):
    r, _ = run(code, {5: a, 4: b}); return s32(r[5]), s32(r[4])
def wh(cond):
    def f(a, b):
        k = 0
        while cond(a, b):
            a += 1; b -= 1; k += 1
            if k > 500: return None
        return a, b
    return f
def dw(cond):
    def f(a, b):
        k = 0
        while True:
            a += 1; b -= 1; k += 1
            if not cond(a, b): break
            if k > 500: return None
        return a, b
    return f
mods = {'a': wh(lambda a, b: a < b), 'b': wh(lambda a, b: a >= b), 'c': dw(lambda a, b: a < b), 'd': dw(lambda a, b: a >= b)}
pts = [(x, y) for x in range(-4, 5) for y in range(-4, 5)]
txt = {k: blocks(v)[0] for k, v in opts(q).items()}
assert 'while (a < b)' in txt['a'] and 'while (a >= b)' in txt['b'] and 'while (a < b)' in txt['c'] and 'while (a >= b)' in txt['d']
picked = [k for k, f in mods.items() if all(f(a, b) == asm13(a, b) for a, b in pts)]
report('23B-A', 13, picked, q)
# --- code-selection questions: fill the hole, compare to the C semantics on random arrays
def fill(q, c): return blocks(q['question'])[1].replace('@@@@@@@', c.strip())
def select(ex, n, setup, spec, trials):
    q = load(ex)[n]; picked = []
    for k, v in opts(q).items():
        good = True
        for arr in trials:
            regs, mem = setup(arr)
            try: r, m2 = run(fill(q, blocks(v)[0]), regs, mem)
            except Exception: good = False; break
            if not spec(arr, r, m2): good = False; break
        if good: picked.append(k)
    report(ex, n, picked, q)
rnd = [[random.randint(95, 105) for _ in range(random.randint(1, 6))] for _ in range(80)]
rnd2 = [[random.randint(-9, 9) for _ in range(random.randint(2, 7))] for _ in range(80)]
st = lambda arr: ({4: 4000, 5: len(arr)}, {4000 + 4 * i: v & M for i, v in enumerate(arr)})
rd = lambda m, n: [s32(m.get(4000 + 4 * i, 0)) for i in range(n)]
select('22A-A', 20, st, lambda arr, r, m: rd(m, len(arr)) == [x - 1 if x > 99 else x for x in arr], rnd)
def spec23b20(arr, r, m):
    a = arr[0]
    for x in arr[1:]:
        if x > a: a += x
    return s32(r[8]) == a
select('23B-A', 20, st, spec23b20, rnd2)
select('24B-A', 20, st, lambda arr, r, m: s32(r[8]) == max([-999] + arr), rnd2)
def spec25a20(arr, r, m):
    out = list(arr)
    for i in range(1, len(arr), 2): out[i], out[i - 1] = out[i - 1], out[i]
    return rd(m, len(arr)) == out
select('25A-A', 20, st, spec25a20, rnd2)
def spec23ab20(arr, r, m):
    out = list(arr)
    for i in range(1, len(arr)):
        t1, t2 = out[i], out[i - 1]
        if t1 > t2: out[i], out[i - 1] = t2, t1
    return rd(m, len(arr)) == out
# 23A-B Q20 has its own code layout (hole sits before the two stores) -- same fill() works
select('23A-B', 20, st, spec23ab20, rnd2)
bad = [o for o in out if not o[4]]
print('\nchecked', len(out), 'questions;', len(bad), 'differ from the stored key:', [(e, n, p, k) for e, n, p, k, _ in bad])
