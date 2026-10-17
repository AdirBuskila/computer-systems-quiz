# Recompute checks for sitting 24A-A (keys are the lecturer's circled option, a in every question).
import itertools, struct, random
from fractions import Fraction as Fr
M = 0xFFFFFFFF
def sx(v): v &= 0xFFFF; return v - 0x10000 if v & 0x8000 else v
def addi(r, i): return (r + sx(i)) & M
def n(a): return 1 - a
rows = lambda k: list(itertools.product((0, 1), repeat=k))

# Q1: which equation is NOT true (a expected false)
a_ok = all((n(A ^ B) & C) == ((n(A) & C) ^ (n(B) & C)) for A, B, C in rows(3))
b_ok = all(n(A ^ B) == ((n(A) ^ B) & (A ^ n(B))) for A, B, C in rows(3))
c_ok = all(((A ^ B) ^ (A ^ C)) == (n(B) ^ n(C)) for A, B, C in rows(3))
d_ok = all((A ^ n(C | B | A)) == ((n(B) & n(C)) | ((B | C) & A)) for A, B, C in rows(3))
print("Q1 a,b,c,d true?:", a_ok, b_ok, c_ok, d_ok, "(only a false expected)")

# Q2
r = (0x8765 << 16) & M; r = addi(r, 0x8765); r = addi(r, 0xFDB9)
print("Q2:", hex(r), "(option a = 0x8764851E)")

# Q3
v = struct.unpack(">I", struct.pack(">f", 333 + 2 / 9))[0]
print("Q3:", hex(v), "(option a = 0x43A69C72)")

# Q4: [0.34 20 20 ...]_5
x = Fr(3, 5) + Fr(4, 25) + (Fr(2, 125) / (1 - Fr(1, 25)))
print("Q4:", x, "(233/300 =", Fr(233, 300), ")")

# Q5: 14-bit twos complement, 7 frac bits; X4=X1=X-2=1 ; claims
def possible(val):
    if val * 128 != int(val * 128): return False
    k = int(val * 128)
    if not (-8192 <= k <= 8191): return False
    u = k & 0x3FFF
    bit = lambda i: (u >> (i + 7)) & 1
    return bit(4) == 1 and bit(1) == 1 and bit(-2) == 1
cand = {"a": -Fr(17) - Fr(1, 128), "b": Fr(30) + Fr(7, 8), "c": -Fr(1) - Fr(7, 8), "d": Fr(42) + Fr(25, 64), "e": -Fr(42) - Fr(25, 64), "f": Fr(18) + Fr(33, 128)}
claims_can = {"a": True, "b": True, "c": False, "d": False, "e": False, "f": True}
print("Q5 possible:", {k: possible(x) for k, x in cand.items()}, "false claims:", [k for k in cand if possible(cand[k]) != claims_can[k]])

# Q8
def rep(d, b): return Fr(d, b - 1)
print("Q8:", rep(4, 6) - rep(4, 7) == Fr(1, 15), rep(6, 7) - rep(1, 7) == Fr(5, 6), rep(6, 7) - rep(1, 5) == Fr(3, 4), rep(7, 8) - rep(1, 4) == Fr(2, 3), "(only a false)")

# Q9
def nxt(s):
    q3, q2, q1, q0 = s
    d1 = n(q2)
    d3 = n(n(q3) ^ q0)
    return (d3, q3, d1, q1)
cur = (1, 0, 0, 1)
for s in rows(4):
    t = s
    for _ in range(5): t = nxt(t)
    if t == cur: print("Q9: state 5 rises before =", s, "(option a = [0,0,0,0])")

# Q10: wrong translation of a = 4a - 2b ($7=a, $5=b)
def run(prog, a, b):
    reg = {7: a, 5: b}
    for op, d, x, y in prog:
        reg[d] = reg[x] + reg[y] if op == "add" else reg[x] - reg[y]
    return reg
progs = {
 "a": [("add", 7, 7, 7), ("add", 7, 7, 7), ("add", 5, 5, 5), ("sub", 7, 7, 5)],
 "b": [("add", 7, 7, 7), ("add", 7, 7, 7), ("sub", 7, 7, 5), ("sub", 7, 7, 5)],
 "c": [("add", 7, 7, 7), ("sub", 7, 7, 5), ("add", 7, 7, 7)],
 "d": [("sub", 7, 7, 5), ("add", 7, 7, 7), ("add", 7, 7, 7), ("add", 7, 5, 7), ("add", 7, 7, 5)],
}
for k, p in progs.items():
    o = run(p, 11, 3)
    print("Q10", k, "a'=", o[7], "(want", 4 * 11 - 2 * 3, ") b'=", o[5], "(b was 3)")

# Q11: [1223.41]_9 -> base 3
def to_val(s, base):
    ip, fp = s.split(".")
    v = Fr(0)
    for ch in ip: v = v * base + int(ch)
    for i, ch in enumerate(fp): v += Fr(int(ch), base ** (i + 1))
    return v
t = to_val("1223.41", 9)
print("Q11:", {k: to_val(o, 3) == t for k, o in zip("abcdef", ["1020210.1101", "1202010.1001", "1020210.111", "1020110.2001", "1020110.1001", "1010210.1011"])})

# Q12
def ov(x, y, op):
    s8 = lambda z: z - 256 if z & 128 else z
    a, b = s8(x), s8(y); v = a + b if op == "+" else a - b
    return not (-128 <= v <= 127)
c12 = [("01001101", "00110001", "+"), ("11011101", "01110111", "-"), ("00111101", "01001011", "+"), ("00111101", "10110101", "-"), ("11000100", "10101010", "+")]
print("Q12 overflow:", [ov(int(x, 2), int(y, 2), o) for x, y, o in c12], "(only a False)")

# Q13 (b=$2, a=$3, c=$4)
def run13(variant, a, b, c):
    reg = {2: b, 3: a, 4: c}
    pc = 0; labels = {"lab1": 3, "lab2": 6}
    while pc < len(variant):
        op, p, q, r_ = variant[pc]
        if op == "slt": reg[1] = 1 if reg[q] < reg[r_] else 0
        elif op == "add": reg[p] = reg[q] + reg[r_]
        elif op == "beq" and reg[1] == 0: pc = labels[r_]; continue
        elif op == "bne" and reg[1] != 0: pc = labels[r_]; continue
        pc += 1
    return reg[3], reg[4]
v13 = {
 "a": [("slt", 1, 2, 3), ("beq", 1, 0, "lab1"), ("add", 3, 2, 2), ("slt", 1, 2, 4), ("bne", 1, 0, "lab2"), ("add", 4, 2, 2)],
 "b": [("slt", 1, 2, 3), ("bne", 1, 0, "lab1"), ("add", 3, 2, 2), ("slt", 1, 2, 4), ("beq", 1, 0, "lab2"), ("add", 4, 2, 2)],
 "c": [("slt", 1, 2, 3), ("bne", 1, 0, "lab1"), ("add", 3, 3, 2), ("slt", 1, 2, 4), ("bne", 1, 0, "lab2"), ("add", 4, 4, 2)],
 "d": [("slt", 1, 2, 3), ("beq", 1, 0, "lab1"), ("add", 3, 3, 2), ("slt", 1, 2, 4), ("bne", 1, 0, "lab2"), ("add", 4, 4, 2)],
}
def spec(a, b, c): return (2 * b if a > b else a, 2 * b if c <= b else c)
tests = [(a, b, c) for a in range(-3, 5) for b in range(-3, 5) for c in range(-3, 5)]
print("Q13 equivalent to spec:", {k: all(run13(p, *t_) == spec(*t_) for t_ in tests) for k, p in v13.items()})

# Q14 mux: 000:D 001:0 010:D 011:D 100:1 101:1 110:D 111:D
D_in = {0: "D", 1: "0", 2: "D", 3: "D", 4: "1", 5: "1", 6: "D", 7: "D"}
def mux(A, B, C, D): return {"0": 0, "1": 1, "D": D}[D_in[A * 4 + B * 2 + C]]
fa = lambda A, B, C, D: (A & n(B)) | (n(C) & D) | (B & D)
fb = lambda A, B, C, D: (A & n(B)) | (n(C) & D) | (C & B)
fc = lambda A, B, C, D: (A & B) | (n(C) & D) | (B & D)
fd = lambda A, B, C, D: (A & n(B)) | (C & D) | (C & B)
print("Q14 matches mux:", [all(mux(*q) == f(*q) for q in rows(4)) for f in (fa, fb, fc, fd)])

# Q15: 00:(CD=11 + AB=00) 01:(CD=01 + CD=10) 10:(AB=01) 11:(CD=00); X<-AB=10, Y<-AB=11
def circ(A, B, C, D):
    X = 1 if (A, B) == (1, 0) else 0
    Y = 1 if (A, B) == (1, 1) else 0
    i00 = 1 if ((C, D) == (1, 1) or (A, B) == (0, 0)) else 0
    i01 = 1 if (C, D) in ((0, 1), (1, 0)) else 0
    i10 = 1 if (A, B) == (0, 1) else 0
    i11 = 1 if (C, D) == (0, 0) else 0
    return [i00, i01, i10, i11][X * 2 + Y]
sol = {A * 8 + B * 4 + C * 2 + D for A, B, C, D in rows(4) if circ(A, B, C, D)}
opt = {"a": {0, 1, 2, 3, 7, 13, 14}, "b": {0, 1, 2, 3, 5, 13, 14}, "c": {0, 1, 2, 3, 6, 13, 14}, "d": {0, 1, 2, 3, 6, 12, 14}, "e": {0, 1, 2, 3, 6, 13, 15}}
print("Q15 circuit set", sorted(sol), {k: v == sol for k, v in opt.items()})

# Q16: 19 = 10011 -> rows at shifts 0,1,4 ; 5-bit a
def count_adders(shifts, width):
    h = {}
    for s in shifts:
        for c in range(s, s + width): h[c] = h.get(c, 0) + 1
    fa_, ha_, carry, outs, c = 0, 0, 0, 0, 0
    while c <= max(h) or carry:
        items = h.get(c, 0) + carry; carry = 0
        while items > 1:
            if items >= 3: fa_ += 1; items -= 2
            else: ha_ += 1; items -= 1
            carry += 1
        outs += 1; c += 1
    return fa_, ha_, outs
print("Q16 (FA,HA,outputs):", count_adders([0, 1, 4], 5), "(option a = 5 HA, 5 FA, 10 outputs)")

# Q17
w = (24 << 21) | (20 << 16) | (3 << 11) | 42
print("Q17:", hex(w), "(option a = 0x0314182A)")

# Q18: 11 bits, 4 fractional -> [7.4]
print("Q18: unsigned 0..2^7-2^-4 ; signed -2^6..2^6-2^-4 (option a)")

# Q19
w = 0x22CBFDE1
imm = w & 0xFFFF
print("Q19: op", w >> 26, "rs", (w >> 21) & 31, "rt", (w >> 16) & 31, "imm", imm - 0x10000 if imm & 0x8000 else imm, "(addi $t3($11),$s6($22),-543)")

# Q20
def run20(kind, arr1, arr2):
    mem = {4 * i: v for i, v in enumerate(arr1)}
    mem.update({1000 + 4 * i: v for i, v in enumerate(arr2)})
    reg = {0: 0, 1: 0, 4: len(arr1), 5: 0, 6: 1000, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0}
    steps = 0
    state = "lab3"
    while steps < 5000:
        steps += 1
        if state == "lab3":
            reg[1] = 1 if reg[7] < reg[4] else 0
            if reg[1] == 0: break
            state = "lab1"; continue
        if state == "lab1":
            reg[8] = reg[7] * 4; reg[9] = reg[8] + reg[5]; reg[8] = reg[8] + reg[6]
            reg[10] = mem[reg[9]]; reg[11] = mem[reg[8]]
            if kind in ("a", "b", "e", "f"): reg[1] = 1 if reg[11] < reg[10] else 0
            else: reg[1] = 1 if reg[10] < reg[11] else 0
            br = {"a": "beq", "b": "bne", "c": "beq", "d": "bne", "e": "bne", "f": "beq"}[kind]
            lab = {"a": "lab2", "b": "lab2", "c": "lab2", "d": "lab2", "e": "lab1", "f": "lab1"}[kind]
            taken = (reg[1] == 0) if br == "beq" else (reg[1] != 0)
            if taken:
                state = "lab2" if lab == "lab2" else "lab1"
                continue
            mem[reg[8]] = reg[10]; state = "lab2"; continue
        if state == "lab2":
            reg[7] += 1; state = "lab3"; continue
    else:
        return None
    return [mem[1000 + 4 * i] for i in range(len(arr1))]
random.seed(3)
tt = [([random.randint(-9, 9) for _ in range(4)], [random.randint(-9, 9) for _ in range(4)]) for _ in range(40)]
res = {}
for k in "abcdef":
    ok = True
    for a1, a2 in tt:
        out = run20(k, a1, a2)
        if out != [max(x, y) for x, y in zip(a1, a2)]: ok = False; break
    res[k] = ok
print("Q20 equals C (array2 = max):", res)
