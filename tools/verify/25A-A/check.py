# -*- coding: utf-8 -*-
"""Recomputation of the 25A-A keys. Run: PYTHONUTF8=1 py tools/verify/25A-A/check.py"""
import itertools, random, sys, pathlib
from fractions import Fraction as F
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from mipsim import run, s32

out = {}
n = lambda v: 1 - v
T3 = list(itertools.product((0, 1), repeat=3))
T4 = list(itertools.product((0, 1), repeat=4))
X = lambda *v: sum(v) % 2

# Q1 which is not true (A=A, B=B ...)
def q1():
    rhs_a = lambda A, B, C, D: (n(A) & B) | (C & n(D)) | (A & n(B)) | (n(C) & D)
    rhs_b = lambda A, B, C, D: (n(A) & n(B)) | (n(C) & D) | (A & B) | (C & n(D))
    rhs_c = lambda A, B, C, D: (n(A) & n(B)) | (C & D) | (A & B) | (n(C) & n(D))
    rhs_d = lambda A, B, C, D: (n(A) & B) | (n(C) & D) | (A & n(B)) | (C & n(D))
    lhs_a = lambda A, B, C, D: (A ^ B) | ((A ^ n(B)) & (n(C) ^ D))
    lhs_b = lambda A, B, C, D: (n(A) ^ B) | ((A ^ B) & (C ^ D))
    lhs_c = lambda A, B, C, D: ((A ^ n(B)) & n(C ^ n(D))) | (n(C) ^ D)
    lhs_d = lambda A, B, C, D: n(n(A) ^ B) | ((A ^ n(B)) & n(C ^ n(D)))
    res = []
    for k, l, r in zip("abcd", (lhs_a, lhs_b, lhs_c, lhs_d), (rhs_a, rhs_b, rhs_c, rhs_d)):
        if any(l(*t) != r(*t) for t in T4):
            res.append(k)
    return res
out[1] = ("false", q1(), "key a")

# Q2
M = 0xFFFFFFFF
r = 0xFFFF8421
r = (0x84210000) & M
r = (r + r) & M
r = (r + 0xFFFF8421) & M
r = (r + 0x1248) & M
out[2] = ("$4", hex(r), "key 0x08419669")


# Q3 float32 of 333+1/3
def f32(x):
    x = F(x); s = 0
    if x < 0: s, x = 1, -x
    e = 0
    while x >= 2: x /= 2; e += 1
    while x < 1: x *= 2; e -= 1
    m = (x - 1) * (1 << 23); q = m.numerator // m.denominator; rem = m - q
    if rem > F(1, 2) or (rem == F(1, 2) and q & 1): q += 1
    if q == 1 << 23: q = 0; e += 1
    return (s << 31) | ((e + 127) << 23) | q
out[3] = ("fp32", hex(f32(F(1000, 3))), "key 0x43A6AAAB")

# Q4 [0.13 63 13 13 ...]_7
v = F(1, 7) + F(3, 49) + F(6, 343) + F(3, 7 ** 4) + sum(F(1, 7 ** (5 + 2 * k)) * 7 ** 0 * 0 for k in range(1))
v = F(1, 7) + F(3, 49) + F(6, 343) + F(3, 2401) + sum(F(1 * 7 + 3, 7 ** (2 * k + 2)) / F(7 ** 3) for k in range(1, 80))
# digits: 1,3,6,3,1,3,1,3,...
dg = [1, 3, 6, 3] + [1, 3] * 80
v = sum(F(d, 7 ** (i + 1)) for i, d in enumerate(dg))
out[4] = ("val", float(v), "opts", {k: float(F(a, b)) for k, (a, b) in zip("abcdef", [(1835, 8232), (75, 367), (651, 3431), (653, 3431), (71, 367), (1720, 8232)])},
          "exact", F(5, 343) + F(5, 24))


# Q5 13-bit 2c, 6 frac bits, X4=X2=X-2=1
def possible(val):
    N = F(val) * 64
    if N.denominator != 1: return False
    N = int(N)
    if not -4096 <= N <= 4095: return False
    bits = N & 0x1FFF
    bit = lambda i: (bits >> (i + 6)) & 1
    return bit(4) == 1 and bit(2) == 1 and bit(-2) == 1
q5 = {"a": (-(42 + F(22, 64)), True), "b": (-F(3, 4), True), "c": (-(42 + F(43, 64)), True),
      "d": (60 + F(1, 2), False), "e": (-(30 + F(7, 8)), False), "f": (F(7, 64), False)}
out[5] = ("statement true?", {k: possible(v_) == c_ for k, (v_, c_) in q5.items()}, "false one should be a")

# Q6 [n.8] -- symbolic check with n=5
nn = 5
out[6] = ("n=5 unsigned max", F(2) ** nn - F(1, 256), "signed", -F(2) ** (nn - 1), F(2) ** (nn - 1) - F(1, 256), "key a")

# Q7 ratio max/min with same normal exponent
out[7] = ("ratio", (2 - F(1, 2 ** 23)), "key a = 2-2^-23 (exact: (2-2^-23)*2^e / 2^e)")

# Q8: beqal needs Fetch, Decode, ALU(subtract/compare), Write-Back ($31 <- PC+4): by the lecturer's working
out[8] = ("stages", "Fetch, Decode, ALU, Write-Back", "key a")


# Q9 4-bit shift register: D3 = Q3^Q2^Q1^Q0, shift right
def step(s):
    q3, q2, q1, q0 = s
    return (q3 ^ q2 ^ q1 ^ q0, q3, q2, q1)
s = (0, 1, 0, 1)
for _ in range(36): s = step(s)
out[9] = ("after 36", s, "key [0,0,1,0]")

# Q10 counter loop with $3 initial value
prog = ["addi $8, $0, 0", "lp: beq $3, $0, end", "slt $1, $3, $0", "beq $1, $0, lab1", "addi $8, $8, 1",
        "lab1: add $3, $3, $3", "j lp", "end:"]
good = []
for h in ["830C1406", "02081608", "930D2806", "8326140C", "00FF6000", "00F06048"]:
    R, _m = run(prog, {3: int(h, 16)})
    good.append((h, R[8]))
out[10] = ("$8 per option", good, "key a (9)")


# Q11 base conversions
def val(s_, base):
    ip, _, fp = s_.partition(".")
    v_ = F(int(ip, base))
    for i, ch in enumerate(fp):
        v_ += F(int(ch, base), base ** (i + 1))
    return v_
o11 = {"a": val("4A6.67", 16) == val("652.156", 8) + val("2230.013", 4),
       "b": val("83.4A", 16) == val("203.224", 8),
       "c": val("203.442", 8) == val("2003.2101", 4),
       "d": val("47.83", 16) == val("47.37", 8) + val("200.0013", 4)}
out[11] = ("true", [k for k, t in o11.items() if t], "false", [k for k, t in o11.items() if not t], "key a")


# Q12 no overflow
def s8(b): return b - 256 if b & 128 else b
o12 = {"a": s8(0b11101111) + s8(0b10011101), "b": s8(0b11010011) + s8(0b10100001), "c": s8(0b01001001) + s8(0b00111011),
       "d": s8(0b10111011) - s8(0b01010000), "e": s8(0b01000010) - s8(0b10100110)}
out[12] = ("no overflow", [k for k, t in o12.items() if -128 <= t <= 127], o12)

# Q13 if (a<=b) c=a+b else c=a-b ; b=$7 a=$9 c=$5 (and the swapped reading)
o13 = {"a": ["slt $1, $7, $9", "beq $1, $0, lb1", "sub $5, $9, $7", "bne $1, $0, end", "lb1: add $5, $7, $9", "end:"],
       "b": ["slt $1, $7, $9", "bne $1, $0, lb1", "sub $5, $9, $7", "beq $1, $0, end", "lb1: add $5, $7, $9", "end:"],
       "c": ["slt $1, $7, $9", "beq $1, $0, lb1", "add $5, $7, $9", "bne $1, $0, end", "lb1: sub $5, $9, $7", "end:"],
       "d": ["slt $1, $7, $9", "beq $1, $0, lb1", "sub $5, $9, $7", "beq $1, $0, end", "lb1: add $5, $7, $9", "end:"]}
res = {}
for k, prog in o13.items():
    ok = []
    for ra, rb in ((9, 7), (7, 9)):
        good_ = True
        for av, bv in itertools.product(range(-3, 4), repeat=2):
            R, _m = run(prog, {ra: av, rb: bv})
            exp = av + bv if av <= bv else av - bv
            if s32(R[5]) != exp: good_ = False
        ok.append(good_)
    res[k] = ok
out[13] = ("correct under (a=$9,b=$7),(a=$7,b=$9)", res, "key a")

# Q14 mux: 000 D; 001 1; 010 D; 011 1; 100 1; 101 0; 110 D+Dbar=1; 111 0
def f14(A, B, C, D):
    return [D, 1, D, 1, 1, 0, 1, 0][A * 4 + B * 2 + C]
o14 = {"a": lambda A, B, C, D: (A & n(C)) | (n(C) & D) | (n(A) & C),
       "b": lambda A, B, C, D: (n(C) & D) | (A & n(C)) | (n(B) & C),
       "c": lambda A, B, C, D: (n(A) & n(C)) | (n(C) & D) | (A & B),
       "d": lambda A, B, C, D: (A & n(C)) | (n(A) & B) | (n(A) & C)}
out[14] = ("minterms", [i for i, t in enumerate(T4) if f14(*t)], "matching", [k for k, f in o14.items() if all(f(*t) == f14(*t) for t in T4)], "key a")


# Q15 CD decoder -> ORs ; mux 00=d00|d10 ; 01=d00|d11 ; 10=C ; 11=D ; selects X=dec(AB=00), Y=not dec(AB=10)
def f15(A, B, C, D):
    d = lambda k: int(C * 2 + D == k)
    X = int(A == 0 and B == 0)
    Y = n(int(A == 1 and B == 0))
    ins = {(0, 0): d(0) | d(2), (0, 1): d(0) | d(3), (1, 0): C, (1, 1): D}
    return ins[(X, Y)]
tru = [int("".join(map(str, t)), 2) for t in T4 if f15(*t)]
ROWS = {"a": ["0001", "0011", "1000", "1011", "0100", "0111", "1100", "1111"],
        "a-with-1010": ["0001", "0011", "1000", "1010", "0100", "0111", "1100", "1111"],
        "b": ["0001", "0011", "1000", "1011", "0101", "0110", "1100", "1111"],
        "c": ["0011", "1000", "1011", "0100", "0111", "1100", "1111"],
        "d": ["0001", "1000", "1011", "0100", "0111", "1101", "1110"]}
out[15] = ("circuit minterms", tru, "options", {k: sorted(int(r_, 2) for r_ in v_) for k, v_ in ROWS.items()},
           "matching exactly", [k for k, v_ in ROWS.items() if sorted(int(r_, 2) for r_ in v_) == sorted(tru)])

# Q16 5-bit x 19 (10011): rows shifted 0,1,4
cols = {}
for sh in (0, 1, 4):
    for i in range(5):
        cols[sh + i] = cols.get(sh + i, 0) + 1
FA = HA = outs = carry = 0
for c_ in range(0, 14):
    bits = cols.get(c_, 0) + carry
    carry = 0
    while bits >= 3:
        FA += 1; bits -= 2; carry += 1
    if bits == 2:
        HA += 1; bits -= 1; carry += 1
    if bits >= 1:
        outs += 1
out[16] = ("greedy FA", FA, "HA", HA, "outputs", outs, "19*31=589 bits", (589).bit_length(), "key a: 5 HA, 5 FA, 10 outputs")

# Q17 sw $fp,16($t6)
w = (43 << 26) | (14 << 21) | (30 << 16) | 16
out[17] = ("sw $fp,16($t6)", hex(w), "key 0xADDE0010")
out[18] = ("sw: MemWrite=1, RegWrite=0, ALUOp=00; only option a has ALUOp=00,MemWrite=1,RegWrite=0 (RegDst/MemToReg are X)", "key a")

# Q19
w = 0x1795FFBF
imm = w & 0xFFFF
out[19] = ("op", w >> 26, "rs", (w >> 21) & 31, "rt", (w >> 16) & 31, "imm", imm - 65536 if imm & 0x8000 else imm, "(5=bne, 28=gp, 21=s5)")

# Q20 swap loop: array $4, size $5; i in $6
head = ["addi $6, $0, 1", "j lb2", "lb1: add $7, $6, $6", "add $7, $7, $7"]
tail = ["sw $8, -4($7)", "addi $6, $6, 2", "lb2: slt $1, $6, $5", "bne $1, $0, lb1"]
o20 = {"a": ["add $7, $4, $7", "lw $8, 0($7)", "lw $9, -4($7)", "sw $9, 0($7)"],
       "b": ["add $7, $7, $7", "add $7, $4, $7", "lw $8, 0($7)", "lw $9, -4($7)", "sw $9, 0($7)"],
       "c": ["add $7, $4, $7", "lw $8, 0($7)", "lw $9, 4($7)", "sw $9, 0($7)"],
       "d": ["add $7, $4, $7", "lw $8, 4($7)", "lw $9, -4($7)", "sw $9, 4($7)"],
       "e": ["add $7, $4, $7", "lw $8, 0($7)", "lw $9, 0($7)", "sw $9, -4($7)"]}
good = []
random.seed(2)
for k, blk in o20.items():
    ok = True
    for _ in range(30):
        size = random.randrange(0, 8)
        arr = [random.randrange(1, 100) for _ in range(max(size, 1) + 2)]
        base = 0x3000
        mem = {base + 4 * i: v_ for i, v_ in enumerate(arr)}
        exp = list(arr)
        i = 1
        while i < size:
            exp[i], exp[i - 1] = exp[i - 1], exp[i]
            i += 2
        try:
            R, m2 = run(head + blk + tail, {4: base, 5: size}, mem)
        except Exception:
            ok = False
            break
        got = [m2.get(base + 4 * i, 0) for i in range(len(arr))]
        if got != exp or R[4] != base or R[5] != size:
            ok = False
            break
    if ok:
        good.append(k)
out[20] = ("correct", good, "key a")

for k in sorted(out):
    print("Q%d" % k, *out[k])
