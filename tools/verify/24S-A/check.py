# -*- coding: utf-8 -*-
"""Recomputation of the 24S-A keys. Run: PYTHONUTF8=1 py tools/verify/24S-A/check.py"""
import itertools, random, sys, pathlib
from collections import Counter
from fractions import Fraction as F
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from mipsim import run, s32

out = {}
n = lambda v: 1 - v
T3 = list(itertools.product((0, 1), repeat=3))
T4 = list(itertools.product((0, 1), repeat=4))

# Q1 which equation is false
a = all((n(A ^ B) & C) == ((n(A) & C) ^ (C & n(B))) for A, B, C in T3)
b = all((A | n(A | (B | (n(B) & C)))) == ((n(C) & n(B)) | A) for A, B, C in T3)
c = all(((n(A) ^ B) & (A ^ n(B))) == n(B ^ A) for A, B, C in T3)
d = all((A | (n(A) & (B | (n(B) & (C | (n(C) & D)))))) == (D | B | A | C) for A, B, C, D in T4)
out[1] = ("false eq", [k for k, v in zip("abcd", (a, b, c, d)) if not v], "key a")

# Q2
r = (0x1F1F << 16) & 0xFFFFFFFF
r = (r + 0xFFFFF1F1) & 0xFFFFFFFF
r = (r + 0x1F1F) & 0xFFFFFFFF
out[2] = ("$4", hex(r), "key 0x1F1F1110")

# Q3 largest finite float has E=254; gap = 2^(254-127-23)
out[3] = ("gap exponent", 254 - 127 - 23, "key 2^104")

# Q4 [0.123 123 ...]_5
v = sum(F(25 + 10 + 3, 125) / F(125) ** k for k in range(60))
out[4] = ("val", float(v), "opts", {k: float(F(x, y)) for k, (x, y) in zip("abcdef", [(19, 62), (38, 125), (21, 69), (39, 125), (21, 68), (38, 123)])},
          "exact", F(38, 124))

# Q5 12-bit 2c, 6 frac bits, X-2=X-1=X3=1
vals = []
for N in range(-2048, 2048):
    bits = N & 0xFFF
    bit = lambda i: (bits >> (i + 6)) & 1
    if bit(-1) and bit(-2) and bit(3):
        vals.append(F(N, 64))
o5 = {"a": all(v_ > -25 for v_ in vals),
      "b": all(v_ < F(-1, 32) for v_ in vals if v_ < 0),
      "c": all(v_ > 9 for v_ in vals if v_ > 0),
      "d": all(v_ < 30 for v_ in vals),
      "e": all(abs(v_) < 30 for v_ in vals),
      "f": all(abs(v_) >= 8 for v_ in vals)}
out[5] = ("min", min(vals), "max neg", max(v_ for v_ in vals if v_ < 0), "min pos", min(v_ for v_ in vals if v_ > 0),
          "max", max(vals), "true options", [k for k, t in o5.items() if t])

# Q6 [6.7]
out[6] = ("unsigned max", F(2) ** 6 - F(1, 128), "signed", -F(2) ** 5, F(2) ** 5 - F(1, 128), "key a")

# Q7 mini-float (eb=5, fb=4): count the numbers sharing the most common spacing, both signs
eb, fb = 5, 4
bias = (1 << (eb - 1)) - 1
pos = set()
for E in range((1 << eb) - 1):
    for fr in range(1 << fb):
        pos.add(F(fr, 1 << fb) * F(2) ** (1 - bias) if E == 0 else (1 + F(fr, 1 << fb)) * F(2) ** (E - bias))
allv = sorted(pos | {-x for x in pos})
cnt = Counter(allv[i] - allv[i - 1] for i in range(1, len(allv)))
sp, k_ = cnt.most_common(1)[0]
idx = [i for i in range(1, len(allv)) if allv[i] - allv[i - 1] == sp]
contiguous = idx[-1] - idx[0] + 1 == len(idx)
out[7] = ("gaps at the most common spacing", k_, "contiguous", contiguous, "expect 2^(fb+2)=", 2 ** (fb + 2), "-> about 2^25 for fb=23")

# Q8 which is false
def rep(d_, base): return F(d_, base - 1)
o8 = {"a": rep(4, 6) - rep(4, 7) == F(1, 15), "b": rep(6, 7) - rep(1, 7) == F(5, 6),
      "c": rep(6, 7) - rep(1, 5) == F(3, 4), "d": rep(7, 8) - rep(1, 4) == F(2, 3)}
out[8] = ("false", [k for k, t in o8.items() if not t], "a-value", rep(4, 6) - rep(4, 7), "key a")


# Q9 shift register, 4 clocks from [0,1,1]
def step(s):
    q2, q1, q0 = s
    return (q0 ^ (1 - q2), q2, q1)


s = (0, 1, 1)
seq = [s]
for _ in range(4):
    s = step(s)
    seq.append(s)
out[9] = ("sequence", seq, "key [0,1,0]")

# Q10 a = 2a-2b ; a=$6 b=$4
o10 = {"a": ["sub $6, $6, $4", "add $6, $6, $6"],
       "b": ["add $4, $4, $4", "add $6, $6, $6", "sub $6, $6, $4"],
       "c": ["sub $6, $6, $4", "sub $6, $6, $4", "add $6, $6, $6"],
       "d": ["add $6, $6, $6", "add $4, $4, $4", "sub $6, $6, $4"]}
res = {}
for k, prog in o10.items():
    val_ok = keep_ok = True
    for _ in range(40):
        A, B = random.randrange(-500, 500), random.randrange(-500, 500)
        R, _m = run(prog, {6: A, 4: B})
        if s32(R[6]) != 2 * A - 2 * B:
            val_ok = False
        if s32(R[4]) != B:
            keep_ok = False
    res[k] = (val_ok, keep_ok)
out[10] = ("(value ok, b kept)", res, "key a = the only one with both")

# Q11 [20211]_3 -> base 7
v = int("20211", 3)
dg, x = [], v
while x:
    dg.append(x % 7)
    x //= 7
out[11] = ("value", v, "base7", "".join(map(str, dg[::-1])), "key 352")


# Q12 overflow lights
def s8(bv):
    return bv - 256 if bv & 128 else bv


o12 = {"a": s8(0b10011100) + s8(0b11011111), "b": s8(0b01011110) + s8(0b00010100), "c": s8(0b11011111) + s8(0b11110101),
       "d": s8(0b00011110) - s8(0b01110101), "e": s8(0b11110111) + s8(0b11101010)}
out[12] = ("overflow", [k for k, t in o12.items() if not -128 <= t <= 127], o12)

# Q13 wrong translation; $3/$4 may be b/a in either order (the stem fixes none)
o13 = {"a": ["slt $1, $3, $4", "beq $1, $0, lab1", "add $4, $4, $4", "beq $0, $0, end", "lab1: add $3, $3, $3", "end:"],
       "b": ["slt $1, $3, $4", "bne $1, $0, lab1", "add $4, $4, $4", "beq $0, $0, end", "lab1: add $3, $3, $3", "end:"],
       "c": ["slt $1, $4, $3", "bne $1, $0, lab1", "add $3, $3, $3", "beq $0, $0, end", "lab1: add $4, $4, $4", "end:"],
       "d": ["slt $1, $3, $4", "beq $1, $0, lab1", "add $3, $3, $3", "beq $0, $0, end", "lab1: add $4, $4, $4", "end:"]}
res = {}
for k, prog in o13.items():
    ok_map = []
    for rb, ra in ((3, 4), (4, 3)):
        ok = True
        for av, bv in itertools.product(range(-3, 4), repeat=2):
            R, _m = run(prog, {ra: av, rb: bv})
            exp = (av, 2 * bv) if bv < av else (2 * av, bv)
            if (s32(R[ra]), s32(R[rb])) != exp:
                ok = False
        ok_map.append(ok)
    res[k] = ok_map
out[13] = ("correct under (b=$3,a=$4),(b=$4,a=$3)", res, "key a = wrong under both")


# Q14 mux: ABC: 000 D, 001 D, 010 1, 011 1, 100 0, 101 0, 110 Dbar, 111 1
def f14(A, B, C, D):
    return [D, D, 1, 1, 0, 0, 1 - D, 1][A * 4 + B * 2 + C]


o14 = {"a": lambda A, B, C, D: (B & n(D)) | (n(A) & D) | (C & B),
       "b": lambda A, B, C, D: (B & n(D)) | (n(A) & D) | (C & n(B)),
       "c": lambda A, B, C, D: (A & n(D)) | (n(A) & D) | (C & B),
       "d": lambda A, B, C, D: (A & n(D)) | (n(A) & D) | (n(A) & C)}
out[14] = ("matching", [k for k, f in o14.items() if all(f(*t) == f14(*t) for t in T4)], "key a")


# Q15 inputs: 00: B+dec00, 01: A, 10: 0, 11: dec00+dec11 ; select = CD
def f15(A, B, C, D):
    d00 = int(A == 0 and B == 0)
    d11 = int(A == 1 and B == 1)
    return {(0, 0): B | d00, (0, 1): A, (1, 0): 0, (1, 1): d00 | d11}[(C, D)]


o15 = {"a": lambda A, B, C, D: ((n(A) | B) & n(C) & n(D)) | (A & D & (B | n(C))) | (n(A) & n(B) & C & D),
       "b": lambda A, B, C, D: (n(C) & n(D)) | (A & D & (B | n(C))) | (n(A) & n(B) & C & D),
       "c": lambda A, B, C, D: ((n(A) | B) & n(C) & n(D)) | (A & B) | (n(A) & n(B) & C & D),
       "d": lambda A, B, C, D: (B & n(C) & n(D)) | (A & D & (B | n(C))) | (n(A) & n(B) & C)}
out[15] = ("matching", [k for k, f in o15.items() if all(f(*t) == f15(*t) for t in T4)], "key a")

# Q16 4x4 multiplier by 15=1111: rows shifted 0..3 ; greedy compression
cols = {}
for sh in range(4):
    for i in range(4):
        cols[sh + i] = cols.get(sh + i, 0) + 1
FA = HA = outs = carry = 0
for c_ in range(0, 12):
    bits = cols.get(c_, 0) + carry
    carry = 0
    while bits >= 3:
        FA += 1; bits -= 2; carry += 1
    if bits == 2:
        HA += 1; bits -= 1; carry += 1
    if bits >= 1:
        outs += 1
out[16] = ("FA", FA, "HA", HA, "outputs", outs, "225 needs bits", (225).bit_length(), "key d: 4 HA, 8 FA, 8 outputs")

# Q17 xor $s3,$t5,$t9
w = (13 << 21) | (25 << 16) | (19 << 11) | 38
out[17] = ("xor $s3,$t5,$t9", hex(w), "key 0x01B99826")


# Q18 [1223.41]_9 -> base 3
def val(s_, base):
    ip, _, fp = s_.partition(".")
    v_ = F(int(ip, base))
    for i, ch in enumerate(fp):
        v_ += F(int(ch, base), base ** (i + 1))
    return v_


x = val("1223.41", 9)
o18 = {"a": "1020210.1101", "b": "1202010.1001", "c": "1020210.111", "d": "1020110.2001", "e": "1020110.1001", "f": "1010210.1011"}
out[18] = ("true", [k for k, s_ in o18.items() if val(s_, 3) == x], "key a")

# Q19 0x21278000
w = 0x21278000
imm = w & 0xFFFF
out[19] = ("op", w >> 26, "rs", (w >> 21) & 31, "rt", (w >> 16) & 31, "imm signed", imm - 65536 if imm & 0x8000 else imm, "(8=addi, 9=t1, 7=a3)")

# Q20 sum loop (typos corrected: addi $7,$7,$10 -> add ; add1 -> addi). array in $5, size in $4
head = ["addi $7, $0, 0", "addi $8, $0, 0", "addi $9, $0, 300", "loop: slt $10, $8, $4", "beq $10, $0, end"]
tail = ["lw $10, 0($6)", "add $7, $7, $10", "slt $10, $9, $7", "beq $10, $0, cont", "add $7, $7, $9",
        "cont: addi $8, $8, 1", "j loop", "end:"]
o20 = {"a": ["add $6, $8, $8", "add $6, $6, $6", "add $6, $6, $5"], "b": ["add $6, $5, $8"],
       "c": ["add $6, $0, $5", "add $6, $6, $8"], "d": ["add $8, $8, $8", "add $8, $8, $8", "add $6, $8, $5"]}
good = []
for k, blk in o20.items():
    ok = True
    for _ in range(30):
        size = random.randrange(0, 6)
        arr = [random.randrange(-100, 200) for _ in range(size)]
        base = 0x2000
        mem = {base + 4 * i: v_ & 0xFFFFFFFF for i, v_ in enumerate(arr)}
        sm = 0
        for v_ in arr:
            sm += v_
            if sm > 300:
                sm += 300
        try:
            R, _m = run(head + blk + tail, {4: size, 5: base}, mem)
        except Exception:
            ok = False
            break
        if s32(R[7]) != sm or R[4] != size or R[5] != base:
            ok = False
            break
    if ok:
        good.append(k)
out[20] = ("correct", good, "key a")

for k in sorted(out):
    print("Q%d" % k, *out[k])
