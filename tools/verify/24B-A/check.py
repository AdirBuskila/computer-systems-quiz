# -*- coding: utf-8 -*-
"""Recomputation of the 24B-A keys. Run: PYTHONUTF8=1 py tools/verify/24B-A/check.py"""
import itertools, random, sys, pathlib
from fractions import Fraction as F
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from mipsim import run, s32

out = {}
n = lambda v: 1 - v
T4 = list(itertools.product((0, 1), repeat=4))


# Q1 which equation is false
def q1():
    T3 = list(itertools.product((0, 1), repeat=3))
    T5 = list(itertools.product((0, 1), repeat=5))
    a = all((A ^ B) & (A ^ C) == A ^ n(B ^ C) for A, B, C in T3)
    b = all((A ^ B) & n(A ^ C) == (n(A) & n(C) & B) | (n(B) & C & A) for A, B, C in T3)
    c = all(((A ^ B) ^ (C ^ E) ^ n(D ^ C) ^ (n(B) ^ D)) == ((n(A) ^ C) ^ (n(C) ^ E)) for A, B, C, D, E in T5)
    d = all((n(B & A) | n(D & C)) == ((A & ((B & ((C & n(D)) | n(C))) | n(B))) | n(A)) for A, B, C, D in T4)
    return [k for k, v in zip("abcd", (a, b, c, d)) if not v]


out[1] = ("false eq", q1(), "key a")

# Q2
r = (0x2468 << 16) & 0xFFFFFFFF
r = (r + (0xFDB9 - 0x10000)) & 0xFFFFFFFF
r = (r + 0x1357) & 0xFFFFFFFF
out[2] = ("$4", hex(r), "key 0x24681110")


# Q3 1000+2/3 -> binary32, exact round-to-nearest-even
def f32(x):
    x = F(x)
    s = 0
    if x < 0:
        s, x = 1, -x
    e = 0
    while x >= 2:
        x /= 2; e += 1
    while x < 1:
        x *= 2; e -= 1
    m = (x - 1) * (1 << 23)
    q = m.numerator // m.denominator
    rem = m - q
    if rem > F(1, 2) or (rem == F(1, 2) and q & 1):
        q += 1
    if q == 1 << 23:
        q = 0; e += 1
    return (s << 31) | ((e + 127) << 23) | q


out[3] = ("fp32", hex(f32(F(3002, 3))), "key 0x447A2AAB")

# Q4 [0.23 10 10 10 ...]_5
v = F(2, 5) + F(3, 25) + sum(F(1, 5 ** (3 + 2 * k)) for k in range(80))
out[4] = ("val", float(v), [float(F(a, b)) for a, b in [(317, 600), (53, 102), (319, 604), (159, 301), (158, 299), (25, 47)]],
          "exact", F(8, 25) + F(5, 24))


# Q5 -- which statement is false (X: 13-bit 2c, 6 frac bits, X4=X2=X-2=1)
def possible(val):
    N = F(val) * 64
    if N.denominator != 1:
        return False
    N = int(N)
    if not -4096 <= N <= 4095:
        return False
    bits = N & 0x1FFF
    bit = lambda i: (bits >> (i + 6)) & 1
    return bit(4) == 1 and bit(2) == 1 and bit(-2) == 1


q5 = {"a": (-(42 + F(22, 64)), True), "b": (-F(3, 4), True), "c": (-(42 + F(43, 64)), True),
      "d": (60 + F(1, 2), False), "e": (-(30 + F(1, 2)), False), "f": (F(7, 64), False)}
out[5] = ("statement true?", {k: possible(v_) == c_ for k, (v_, c_) in q5.items()}, "false one should be a")

# Q6 rounding / truncation error, 7 fractional bits
errs_r, errs_t = [], []
for k in range(0, 4096):
    x = F(k, 4096)
    t = F(int(x * 128), 128)
    r_ = F(int(x * 128 + F(1, 2)), 128)
    errs_t.append(x - t)
    errs_r.append(abs(x - r_))
out[6] = ("max rounding err", max(errs_r), "max trunc err", max(errs_t), "min trunc", min(errs_t),
          "round<=1/256", max(errs_r) <= F(1, 256), "round<=1/512", max(errs_r) <= F(1, 512))


# Q7 mini-float model (5 exponent bits, 4 fraction bits): runs of consecutive floats at one exponent's spacing
def minifloat_values(eb=5, fb=4):
    bias = (1 << (eb - 1)) - 1
    vals = []
    for E in range(0, (1 << eb) - 1):
        for fr in range(1 << fb):
            if E == 0:
                v_ = F(fr, 1 << fb) * F(2) ** (1 - bias)
            else:
                v_ = (1 + F(fr, 1 << fb)) * F(2) ** (E - bias)
            vals.append(v_)
    return sorted(set(vals)), bias


vals, bias = minifloat_values()
target = F(2) ** (10 - bias - 4)
runs, cur = [], 1
for i in range(1, len(vals)):
    if vals[i] - vals[i - 1] == target:
        cur += 1
    else:
        if cur > 1:
            runs.append(cur)
        cur = 1
if cur > 1:
    runs.append(cur)
out[7] = ("mini-float runs at spacing of E=10 (positive side)", runs, "expect 2^4+1=17 per sign; two groups overall")

# Q8
out[8] = ("ratio", F(4, 6) / F(4, 8), "key 4/3")


# Q9 shift register: D2 = Q0 xor not Q2 ; Q2<-D2 ; Q1<-Q2 ; Q0<-Q1
def step(s):
    q2, q1, q0 = s
    return (q0 ^ (1 - q2), q2, q1)


sols = []
for s0 in itertools.product((0, 1), repeat=3):
    s = s0
    for _ in range(8):
        s = step(s)
    if s == (0, 1, 1):
        sols.append(s0)
out[9] = ("state 8 clocks before [0,1,1]", sols, "key [1,1,0]")

# Q10 wrong translation of a = a - 3*b ($5=a, $6=b, $1 free)
opts10 = {
    "a": ["sub $5, $5, $6", "add $6, $6, $6", "sub $5, $5, $6"],
    "b": ["sub $5, $5, $6", "sub $5, $5, $6", "sub $5, $5, $6"],
    "c": ["add $1, $6, $6", "sub $5, $5, $6", "sub $5, $5, $1"],
    "d": ["add $1, $6, $6", "add $1, $1, $1", "add $5, $5, $6", "sub $5, $5, $1"]}
bad10 = []
for k, prog in opts10.items():
    ok = True
    for _ in range(50):
        a, b = random.randrange(-1000, 1000), random.randrange(-1000, 1000)
        R, _m = run(prog, {5: a, 6: b})
        if s32(R[5]) != a - 3 * b or s32(R[6]) != b:
            ok = False
    if not ok:
        bad10.append(k)
out[10] = ("translations that fail (value or clobber b)", bad10, "key a (clobbers $6)")


# Q11 base conversion
def val(s, base):
    ip, _, fp = s.partition(".")
    v_ = F(int(ip, base))
    for i, ch in enumerate(fp):
        v_ += F(int(ch, base), base ** (i + 1))
    return v_


x = val("1324.31", 9)
o11 = {"a": "1100211.1001", "b": "11110100.1101", "c": "11110201.111", "d": "1102020.2001", "e": "110211.1001", "f": "111020.1011"}
out[11] = ("true options", [k for k, s in o11.items() if val(s, 3) == x], "key a")


# Q12 overflow in 8-bit 2c
def s8(b):
    return b - 256 if b & 128 else b


o12 = {"a": s8(0b10100111) - s8(0b00011101), "b": s8(0b10010111) - s8(0b00110010), "c": s8(0b10110101) + s8(0b11000101),
       "d": s8(0b01001101) + s8(0b00110111), "e": s8(0b01000101) - s8(0b10111010)}
out[12] = ("no overflow", [k for k, v_ in o12.items() if -128 <= v_ <= 127], o12)

# Q13 if (a>=b) a=2a else b=2b ; $3=a $4=b
opts13 = {
    "a": ["slt $1, $3, $4", "beq $1, $0, lab1", "add $4, $4, $4", "beq $0, $0, end", "lab1: add $3, $3, $3", "end:"],
    "b": ["slt $1, $3, $4", "bne $1, $0, lab1", "add $4, $4, $4", "beq $0, $0, end", "lab1: add $3, $3, $3", "end:"],
    "c": ["slt $1, $4, $3", "bne $1, $0, lab1", "add $3, $3, $3", "beq $0, $0, end", "lab1: add $4, $4, $4", "end:"],
    "d": ["slt $1, $3, $4", "beq $1, $0, lab1", "add $3, $3, $3", "beq $0, $0, end", "lab1: add $4, $4, $4", "end:"]}
good13 = []
for k, prog in opts13.items():
    ok = True
    for a, b in itertools.product(range(-3, 4), repeat=2):
        R, _m = run(prog, {3: a, 4: b})
        exp = (2 * a, b) if a >= b else (a, 2 * b)
        if (s32(R[3]), s32(R[4])) != exp:
            ok = False
    if ok:
        good13.append(k)
out[13] = ("correct translations", good13, "key a")


# Q14 mux circuit; mux inputs by ABC: 000:D 001:0 010:1 011:0 100:1 101:1 110:D 111:Dbar
def f14(A, B, C, D):
    return [D, 0, 1, 0, 1, 1, D, 1 - D][A * 4 + B * 2 + C]


mins14 = [i for i, t in enumerate(T4) if f14(*t)]
o14 = {"a": lambda A, B, C, D: (A & n(B)) | (n(C) & D) | (A & C & n(D)) | (n(A) & B & n(C)),
       "b": lambda A, B, C, D: (A & n(B)) | (n(C) & D) | (n(A) & B) | (A & C & n(D)),
       "c": lambda A, B, C, D: (A & n(B)) | (C & D) | (A & C & n(D)) | (n(A) & B & n(C)),
       "d": lambda A, B, C, D: (A & n(B)) | (n(C) & D) | (A & C),
       "e": lambda A, B, C, D: (A & n(B)) | (n(C) & D) | (A & C & n(D)),
       "e-alt-reading(Cbar)": lambda A, B, C, D: (A & n(B)) | (n(C) & D) | (A & n(C) & n(D))}
out[14] = ("minterms", mins14, "matching", [k for k, f in o14.items() if all(f(*t) == f14(*t) for t in T4)])


# Q15 circuit: dec(CD), dec(AB), mux sel XY. XY from AB: 00->00, 01->00, 10->10, 11->01
def f15(A, B, C, D):
    cd = lambda k: int(C * 2 + D == k)
    xy = {(0, 0): (0, 0), (0, 1): (0, 0), (1, 0): (1, 0), (1, 1): (0, 1)}[(A, B)]
    ins = {(0, 0): C, (0, 1): cd(1) | cd(2), (1, 0): cd(1) | cd(3), (1, 1): cd(3) | int(A * 2 + B == 1)}
    return ins[xy]


o15 = {"a": lambda A, B, C, D: (n(A) & C) | (A & B & ((n(C) & D) | (C & n(D)))) | (A & n(B) & D),
       "b": lambda A, B, C, D: (A & n(C)) | (A & B & ((n(C) & D) | (C & n(D)))) | (A & n(B) & ((C & D) | (n(C) & n(D)))),
       "c": lambda A, B, C, D: (n(A) & C) | (A & B & ((n(C) & D) | (C & n(D)))) | (A & n(B) & ((C & D) | (n(C) & n(D)))),
       "d": lambda A, B, C, D: (n(A) & C) | (A & n(B) & ((n(C) & D) | (C & n(D)))) | (n(A) & B & D)}
out[15] = ("matching", [k for k, f in o15.items() if all(f(*t) == f15(*t) for t in T4)], "key a")

# Q16 5x5 multiplier by constant 23=10111 -> row shifts 0,1,2,4; greedy column compression (3->FA, 2->HA)
cols = {}
for sh in (0, 1, 2, 4):
    for i in range(5):
        cols[sh + i] = cols.get(sh + i, 0) + 1
FA = HA = outs = carry = 0
for c in range(0, 12):
    bits = cols.get(c, 0) + carry
    carry = 0
    while bits >= 3:
        FA += 1; bits -= 2; carry += 1
    if bits == 2:
        HA += 1; bits -= 1; carry += 1
    if bits >= 1:
        outs += 1
out[16] = ("FA", FA, "HA", HA, "outputs", outs, "bits for 23*31=713:", (23 * 31).bit_length())

# Q17 addi $sp,$fp,-4120
w = (8 << 26) | (30 << 21) | (29 << 16) | (-4120 & 0xFFFF)
out[17] = ("addi $sp,$fp,-4120", hex(w), "key 0x23DDEFE8")

# Q18 [n.m]=[5.7]
n_, m_ = 5, 7
out[18] = ("unsigned 0..", F(2) ** n_ - F(1, 2 ** m_), "signed", -F(2) ** (n_ - 1), F(2) ** (n_ - 1) - F(1, 2 ** m_),
           "key a: 2^5-2^-7 and -2^4..2^4-2^-7")

# Q19 decode 0x37971234
w = 0x37971234
out[19] = ("op", w >> 26, "rs", (w >> 21) & 31, "rt", (w >> 16) & 31, "imm", w & 0xFFFF, "(ori=13, 28=gp, 23=s7)")

# Q20 which missing block is correct. $4 array base, $5 size, array of words
head = ["addi $8, $0, -999", "addi $7, $0, 0", "lb1: slt $11, $7, $5", "beq $11, $0, lb2", "add $9, $7, $7", "add $9, $9, $9"]
tail = ["lb3: addi $7, $7, 1", "beq $11, $11, lb1", "lb2:"]
blocks20 = {
    "a": ["add $9, $4, $9", "lw $10, 0($9)", "slt $11, $8, $10", "beq $0, $11, lb3", "add $8, $0, $10"],
    "b": ["add $9, $4, $9", "lw $10, 0($9)", "slt $11, $8, $10", "bne $0, $11, lb3", "add $8, $10, $0"],
    "c": ["add $9, $9, $4", "lw $10, 0($9)", "slt $11, $8, $10", "beq $0, $11, lb3", "add $8, $10, $8"],
    "d": ["add $9, $9, $4", "lw $10, 0($9)", "slt $11, $10, $8", "beq $0, $11, lb3", "add $8, $0, $10"],
    "e": ["add $9, $4, $9", "lw $10, 0($9)", "slt $11, $10, $8", "beq $10, $11, lb3", "add $10, $0, $8"],
    "f": ["add $9, $4, $9", "lw $10, 0($9)", "slt $11, $8, $10", "beq $10, $11, lb3", "add $10, $8, $0"]}
good20 = []
random.seed(1)
for k, blk in blocks20.items():
    ok = True
    for _ in range(40):
        size = random.randrange(1, 6)
        arr = [random.randrange(-50, 50) for _ in range(size)]
        base = 0x1000
        mem = {base + 4 * i: v_ & 0xFFFFFFFF for i, v_ in enumerate(arr)}
        try:
            R, _m = run(head + blk + tail, {4: base, 5: size}, mem)
        except Exception:
            ok = False
            break
        if s32(R[8]) != max([-999] + arr) or R[4] != base or R[5] != size:
            ok = False
            break
    if ok:
        good20.append(k)
out[20] = ("correct blocks", good20, "key a")

for k in sorted(out):
    print("Q%d" % k, *out[k])
