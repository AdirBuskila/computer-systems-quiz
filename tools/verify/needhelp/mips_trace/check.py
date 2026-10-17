"""Machine check for the mips_trace course.
1. Rebuilds every level from the specs (build.py): each stored answer is chosen by the MIPS simulator, and the build
   asserts that the authored correct option is the unique simulated answer.
2. Re-runs the worked examples of the lessons.
3. Simulates the pulled bank questions (boss + pulls): the bank key must be the unique correct option.
4. Compares the stored courses/mips_trace/*.js answer keys (via node course_dump --claims) with the rebuilt ones."""
import json
import os
import re
import subprocess
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import build  # noqa: E402
from core import APP, run, words, read_words, s32  # noqa: E402

# ---- 2. lesson examples
for code, regs, mem, obs, exp in build.levels.EXAMPLES:
    R, M, st = run(code, regs, mem)
    got = obs(R, M, st)
    assert str(got) == str(exp), (code, got, exp)
print("examples ok:", len(build.levels.EXAMPLES))

# ---- 3. bank pulls
BANK = {q["id"]: q for q in json.load(open(os.path.join(APP, "questions.json"), encoding="utf8"))["questions"]}


def code_of(v):
    v = v.replace("\\$", "$")
    if "```" in v:
        body = v.split("```")[1]
        body = body.split("\n", 1)[1] if "\n" in body else body
        return [l for l in body.split("\n") if l.strip()]
    return [l.strip().strip("`").strip() for l in v.split("\n") if l.strip()]


def opt(q, i):
    return code_of(q["options"][i]["value"])


def key(q):
    return [o["id"] for o in q["options"]].index(q["correctId"])


def unique(qid, flags, want):
    idx = [i for i, f in enumerate(flags) if f]
    assert idx == [want], (qid, idx, want)


def prog(lines):
    return "\n".join(lines)


def stem_listing(q):
    s = q["question"].replace("\\$", "$")
    blocks = re.findall(r"```asm\n(.*?)```", s, re.S)
    if blocks:
        return blocks[-1]
    return "\n".join(l.strip("`").strip() for l in s.split("\n") if l.startswith("`"))


grid = [(x, y) for x in (-3, 0, 2, 5) for y in (-3, 0, 2, 5)]

# 24S-A-Q10: a = 2a - 2b, a=$6, b=$4, b must stay
q = BANK["24S-A-Q10"]
flags = []
for i in range(4):
    ok = True
    for x in (-5, -1, 0, 2, 7):
        for y in (-3, 0, 4, 9):
            R, _, _ = run(prog(opt(q, i)), {6: x, 4: y})
            ok &= R[6] == 2 * x - 2 * y and R[4] == y
    flags.append(ok)
unique("24S-A-Q10", flags, key(q))


def check_if(qid, ref, regs_out, ins):
    q = BANK[qid]
    flags = []
    for i in range(len(q["options"])):
        ok = True
        for inp in ins:
            R, _, _ = run(prog(opt(q, i)), dict(inp))
            if tuple(R[r] for r in regs_out) != ref(inp):
                ok = False
        flags.append(ok)
    unique(qid, flags, key(q))


# 24B-A-Q13: if (a>=b) a=2a else b=2b ; a=$3, b=$4
check_if("24B-A-Q13", lambda d: (2 * d[3], d[4]) if d[3] >= d[4] else (d[3], 2 * d[4]), (3, 4), [{3: x, 4: y} for x, y in grid])


# 23B-B-Q13: if(a>b) a=2b; if(c<=b) c=2b ; b=$2 a=$3 c=$4
def r23(d):
    b, a, c = d[2], d[3], d[4]
    if a > b:
        a = 2 * b
    if c <= b:
        c = 2 * b
    return (a, b, c)


check_if("23B-B-Q13", r23, (3, 2, 4), [{2: b, 3: a, 4: c} for a in (-1, 2, 5) for b in (-1, 2, 5) for c in (-1, 2, 5)])

# 23A-A-Q13: asm -> C, a=$5, b=$4. asm == if (a>=b) a=a-b; else b=b-a;
q = BANK["23A-A-Q13"]
asm = "slt $1,$5,$4\nbeq $1,$0,lab1\nsub $4,$4,$5\nbne $0,$1,end\nlab1: sub $5,$5,$4\nend:"
fns = [lambda a, b: (a - b, b) if a >= b else (a, b - a), lambda a, b: (a - b, b) if a < b else (a, b - a),
       lambda a, b: (b - a, b) if a >= b else (a, a - b), None, None]
flags = [f is not None and all(f(a, b) == (run(asm, {5: a, 4: b})[0][5], run(asm, {5: a, 4: b})[0][4]) for a, b in grid) for f in fns]
print("23A-A-Q13 flags", flags, "key", key(q))
unique("23A-A-Q13", flags, key(q))

# asm -> C: 22B-B-Q13 (a=$3,b=$4), options a..d ; option d is not valid C ("=<")
q = BANK["22B-B-Q13"]
asm = "slt $1,$3,$4\nbeq $1,$0,lab1\nadd $4,$4,$4\nbeq $0,$0,end\nlab1: add $3,$3,$3\nend:"
fns = [lambda a, b: (2 * a, b) if a >= b else (a, 2 * b), lambda a, b: (2 * a, b) if a < b else (a, 2 * b),
       lambda a, b: (2 * b, b) if a >= b else (a, 2 * a), None]
flags = [f is not None and all(f(a, b) == (run(asm, {3: a, 4: b})[0][3], run(asm, {3: a, 4: b})[0][4]) for a, b in grid) for f in fns]
unique("22B-B-Q13", flags, key(q))

# 23B-A-Q13: a=$5, b=$4. asm == while (a<b) {a++; b--;}
q = BANK["23B-A-Q13"]
asm = "slt $1,$5,$4\nlb1: beq $1,$0,lb2\naddi $5,$5,1\naddi $4,$4,-1\nslt $1,$5,$4\nj lb1\nlb2:"


def loop(cond, dowhile):
    def f(a, b):
        n = 0
        if dowhile:
            a, b = a + 1, b - 1
        while cond(a, b):
            a, b = a + 1, b - 1
            n += 1
            if n > 200:
                return None
        return (a, b)
    return f


fns = [loop(lambda a, b: a < b, False), loop(lambda a, b: a >= b, False), loop(lambda a, b: a < b, True), loop(lambda a, b: a >= b, True)]
inputs = [(0, 6), (3, 4), (5, 5), (7, 2), (-2, 3), (0, 1)]
flags = []
for f in fns:
    flags.append(all(f(a, b) == (run(asm, {5: a, 4: b})[0][5], run(asm, {5: a, 4: b})[0][4]) for a, b in inputs))
unique("23B-A-Q13", flags, key(q))

# traces
q = BANK["23A-A-Q10"]
R = run(stem_listing(q))[0]
assert R[4] == 455 == 0x1C7
unique("23A-A-Q10", [o["value"] == "0x1C7" for o in q["options"]], key(q))
q = BANK["23B-A-Q10"]
R = run(stem_listing(q))[0]
assert R[6] == 19
unique("23B-A-Q10", [o["value"] == "19" for o in q["options"]], key(q))
q = BANK["25A-A-Q10"]
flags = [run(stem_listing(q), {3: int(o["value"], 16)})[0][8] == 9 for o in q["options"]]
unique("25A-A-Q10", flags, key(q))
q = BANK["25B-A-Q10"]
flags = [run(stem_listing(q), {3: int(o["value"], 16)})[0][8] == 17 for o in q["options"]]
unique("25B-A-Q10", flags, key(q))

# 25B-A-Q13: tmp = array[4*i]; i=$3 tmp=$4 array=$2
q = BANK["25B-A-Q13"]
flags = []
for i in range(4):
    ok = True
    for idx in range(4):
        mem = words(1000, list(range(100, 100 + 4 * 4 * 4 + 4)))
        R, _, _ = run(prog(opt(q, i)), {3: idx, 2: 1000}, mem)
        ok &= R[4] == 100 + 4 * idx
    flags.append(ok)
unique("25B-A-Q13", flags, key(q))

# 24B-A-Q20 max
q = BANK["24B-A-Q20"]
arrs = [[], [5], [3, -2, 9, 7], [-1000, -2000], [4, 4, 8, -1]]
flags = []
for i in range(6):
    p = stem_listing(q).replace("@@@@@@@", prog(opt(q, i)))
    ok = True
    for arr in arrs:
        try:
            R, M, _ = run(p, {4: 4000, 5: len(arr)}, words(4000, arr))
        except Exception:
            ok = False
            break
        ok &= R[8] == max([-999] + arr) and R[4] == 4000 and R[5] == len(arr)
    flags.append(ok)
unique("24B-A-Q20", flags, key(q))

# 22B-A-Q20: do { if (array[i]%2==1) sum += array[i]; i++; } while (i<size); array=$5, size=$4, sum=$6
q = BANK["22B-A-Q20"]
flags = []
for i in range(len(q["options"])):
    p = stem_listing(q).replace("$0 loop", "$0,loop").replace("@@@@@@@", prog(opt(q, i)))
    ok = True
    for arr in ([1], [2], [3, 1, 4, 1, 5], [2, 4, 6], [7, 8, 9, -3, 10]):
        try:
            R, M, _ = run(p, {5: 4000, 4: len(arr)}, words(4000, arr))
        except Exception:
            ok = False
            break
        ok &= R[6] == sum(v for v in arr if v % 2 == 1)
    flags.append(ok)
print("22B-A-Q20 flags", flags, "key", key(q))
unique("22B-A-Q20", flags, key(q))
print("bank pulls verified: 24S-A-Q10 22B-B-Q13 24B-A-Q13 23A-A-Q10 25B-A-Q13 25B-A-Q10 24B-A-Q20 23B-A-Q13 23A-A-Q13 23B-A-Q10 25A-A-Q10 22B-A-Q20 23B-B-Q13")

# ---- 4. stored course vs rebuilt
subprocess.run(["node", "tools/course_dump.js", "mips_trace", "--claims"], cwd=APP, check=True, stdout=subprocess.DEVNULL)
claims = json.load(open(os.path.join(APP, "tools", "raw", "_claims_course_mips_trace.json"), encoding="utf8"))["answers"]
n = 0
for L in build.LV:
    for q in L["questions"]:
        if "bankId" in q:
            b = BANK[q["bankId"]]
            assert b["topic"] == "mips_assembly_c" and b["official"] is True, q["bankId"]
            continue
        assert claims[q["id"]]["correctId"] == q["correctId"], q["id"]
        n += 1
assert n == len(claims)
print("stored answer keys match the simulation-built keys:", n)
print("ALL OK")
