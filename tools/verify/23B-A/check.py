# Recompute checks for sitting 23B-A (keys are the lecturer's circled option, a in every question).
import itertools, struct, random
from fractions import Fraction as Fr
M = 0xFFFFFFFF
def sx(v): v &= 0xFFFF; return v - 0x10000 if v & 0x8000 else v
def addi(r, i): return (r + sx(i)) & M
def n(a): return 1 - a
rows = lambda k: list(itertools.product((0, 1), repeat=k))

# Q1: which equation is TRUE (a expected true)
def eqa(A, B, C, D, E, F):
    L = (A ^ B) | ((B ^ n(A)) & ((C ^ D) | ((D ^ n(C)) & (F ^ E))))
    R = n((n(A) ^ B) & (n(C) ^ D) & (n(E) ^ F))
    return L == R
eqb = lambda A, B, C: ((A ^ B) & (A ^ C)) == (A ^ (B | C))
eqc = lambda A, B, C: ((A ^ B) | (A ^ C)) == (A ^ (B & C))
def eqd(A, B, C, D, E, F):
    L = (A ^ B) | ((n(A) ^ n(B)) & ((C ^ D) | ((n(C) ^ D) & (F ^ E))))
    R = (A ^ B) | (C ^ D) | (E ^ F)
    return L == R
print("Q1 a,b,c,d true?:", all(eqa(*r) for r in rows(6)), all(eqb(*r) for r in rows(3)), all(eqc(*r) for r in rows(3)), all(eqd(*r) for r in rows(6)), "(only a true expected)")

# Q2 (printed in the A-tree copy as addi $3,$3 for the last line; the key needs $5)
r = addi(0, 0x8888); r = (0x8888 << 16) & M; r = (r + r) & M; r = addi(r, 0x8888); r5 = addi(r, 0x8765)
print("Q2:", hex(r5), "(option a = 0x110F0FED); last line on $3 would leave $5 =", hex(r))

# Q3: 3 6/7
v = struct.unpack(">I", struct.pack(">f", 3 + 6 / 7))[0]
print("Q3:", hex(v), "(option a = 0x4076DB6E)")

# Q4: [0.203 03 03 ...]_5
x = Fr(2, 5) + Fr(3, 125) / (1 - Fr(1, 25))
print("Q4:", x, "(51/120 =", Fr(51, 120), ")")

# Q5: 13-bit 2's complement, 6 fractional; X3=X2=1, X-1=0
def possible(val):
    if val * 64 != int(val * 64): return False
    k = int(val * 64)
    if not (-4096 <= k <= 4095): return False
    u = k & 0x1FFF
    bit = lambda i: (u >> (i + 6)) & 1
    return bit(3) == 1 and bit(2) == 1 and bit(-1) == 0
cand = {"a": -Fr(51) - Fr(39, 64), "b": -Fr(52) - Fr(5, 8), "c": Fr(55) + Fr(13, 32), "d": Fr(45) + Fr(21, 64), "e": -Fr(3, 4), "f": -Fr(1, 16)}
claims_can = {"a": True, "b": True, "c": True, "d": False, "e": False, "f": True}
print("Q5 possible:", {k: possible(x) for k, x in cand.items()}, "true claims:", [k for k in cand if possible(cand[k]) == claims_can[k]])

# Q9: D3 = Q0 xor not(D1) where D1 = not Q2 ; Q2<-Q3? chain: Q3<-D3, Q2<-Q3, Q1<-D1(=not Q2), Q0<-Q1
def nxt(s):
    q3, q2, q1, q0 = s
    d1 = n(q2)
    d3 = q0 ^ n(d1)
    return (d3, q3, d1, q1)
s = (0, 1, 0, 1)
seen = [s]
for _ in range(11): s = nxt(s); seen.append(s)
print("Q9: after 11 clocks:", s, "(option a = (1,1,1,1)); period check", seen[6] == (0, 1, 0, 1))

# Q10
r = {5: 0x25, 6: 0}
while True:
    r[1] = 1 if 0 < r[5] else 0
    if r[1] == 0: break
    r[2] = r[1] & r[5]; r[6] += r[2]; r[5] -= 1
print("Q10: $6 =", r[6], "(option a = 19)")

# Q11: 0.F299_16 -> base 8
bits = "".join(f"{int(c, 16):04b}" for c in "F299")
bits += "0" * (-len(bits) % 3)
print("Q11:", "".join(str(int(bits[i:i + 3], 2)) for i in range(0, len(bits), 3)), "(option a = 745144)")

# Q12 overflow
def ov(x, y, op):
    s8 = lambda z: z - 256 if z & 128 else z
    a, b = s8(x), s8(y); v = a + b if op == "+" else a - b
    return not (-128 <= v <= 127)
c12 = [("10110111", "11001110", "+"), ("11100011", "01100100", "-"), ("00100011", "10100001", "-"), ("11001111", "10101100", "+"), ("01010111", "00111001", "+")]
print("Q12 overflow:", [ov(int(x, 2), int(y, 2), o) for x, y, o in c12], "(only a False)")

# Q13: slt $1,$5,$4 ; lb1: beq $1,$0,lb2 ; a++ ; b-- ; slt $1,$5,$4 ; j lb1   (a=$5, b=$4)
def asm13(a, b):
    r1 = 1 if a < b else 0
    while r1 != 0:
        a += 1; b -= 1; r1 = 1 if a < b else 0
    return a, b
def w_lt(a, b):
    while a < b: a += 1; b -= 1
    return a, b
def w_ge(a, b):
    while a >= b:
        a += 1; b -= 1
        if abs(a) > 50: break
    return a, b
def do_lt(a, b):
    while True:
        a += 1; b -= 1
        if not (a < b): break
    return a, b
tests = [(a, b) for a in range(-4, 6) for b in range(-4, 6)]
print("Q13 a(while a<b):", all(asm13(*t) == w_lt(*t) for t in tests), "c(do-while):", all(asm13(*t) == do_lt(*t) for t in tests))

# Q14 mux: 000:D 001:D 010:1 011:1 100:0 101:~D 110:0 111:0
D_in = {0: "D", 1: "D", 2: "1", 3: "1", 4: "0", 5: "nD", 6: "0", 7: "0"}
def mux(A, B, C, D):
    return {"0": 0, "1": 1, "D": D, "nD": n(D)}[D_in[A * 4 + B * 2 + C]]
fa = lambda A, B, C, D: (n(A) & B) | (n(A) & D) | (A & n(B) & C & n(D))
fb = lambda A, B, C, D: (n(A) & B) | (n(A) & C) | (n(B) & C)
fc = lambda A, B, C, D: (n(A) & B) | (n(A) & C) | (n(C) & n(D))
fd = lambda A, B, C, D: (A & B) | (n(A) & C) | (C & D)
print("Q14 matches mux:", [all(mux(*q) == f(*q) for q in rows(4)) for f in (fa, fb, fc, fd)])

# Q15: mux 00:D ; 01: CD=00 or CD=11 ; 10: CD=01 or CD=10 ; 11: B.  X from AB=01, Y from AB=10
def circ(A, B, C, D):
    X = 1 if (A, B) == (0, 1) else 0
    Y = 1 if (A, B) == (1, 0) else 0
    cd = (C, D)
    d00 = D
    d01 = 1 if cd in ((0, 0), (1, 1)) else 0
    d10 = 1 if cd in ((0, 1), (1, 0)) else 0
    d11 = B
    return [d00, d01, d10, d11][X * 2 + Y]
f15 = {
 "a": lambda A, B, C, D: ((n(A) & n(B)) | (A & B)) & D | (n(A) & B & ((n(C) & D) | (C & n(D)))) | (A & n(B) & ((n(C) & n(D)) | (C & D))),
 "b": lambda A, B, C, D: (B & D) | (A & n(B) & ((n(C) & D) | (C & n(D)))),
 "c": lambda A, B, C, D: (n(A) & D & ((n(C) & D) | (C & n(D)))) | (A & B & ((n(C) & n(D)) | (C & D))),
 "d": lambda A, B, C, D: ((n(A) & n(B)) | (A & B)) & D | (n(A) & B & ((n(C) & n(D)) | (C & D))) | (A & n(B) & ((n(C) & D) | (C & n(D)))),
 "e": lambda A, B, C, D: (n(A) & n(B) & D) | (n(A) & B & ((n(C) & D) | (C & n(D)))) | (A & n(B) & ((n(C) & n(D)) | (C & D))),
}
print("Q15 matches circuit:", {k: all(int(bool(f(*q))) == circ(*q) for q in rows(4)) for k, f in f15.items()})

# Q16: 29 = 11101 -> rows at shifts 0,2,3,4 ; 4-bit a
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
print("Q16 (FA,HA,outputs):", count_adders([0, 2, 3, 4], 4), "(option a = 7 FA, 3 HA, 9 outputs; the lecturer's figure has 7 FA and 3 HA)")

# Q17 addi $gp,$sp,-400 : rs=$sp=29 rt=$gp=28
w = (8 << 26) | (29 << 21) | (28 << 16) | ((-400) & 0xFFFF)
print("Q17:", hex(w), "(option a = 0x23BCFE70)")

# Q19 decode 0x03F5182A
w = 0x03F5182A
print("Q19: op", w >> 26, "rs", (w >> 21) & 31, "rt", (w >> 16) & 31, "rd", (w >> 11) & 31, "funct", w & 63, "(slt $v1($3),$ra($31),$s5($21))")

# Q20: simulate with each option's missing instructions. $4=&array, $5=size
def run20(opt, arr):
    mem = {4 * i: v for i, v in enumerate(arr)}
    reg = {0: 0, 1: 0, 4: 0, 5: len(arr), 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0}
    kind = opt
    reg[7] = 0; reg[8] = mem[0]; reg[6] = 0; reg[10] = reg[5] - 1
    steps = 0
    while steps < 2000:
        steps += 1
        reg[9] = 1 if reg[6] < reg[10] else 0
        if reg[9] == 0: return reg[8]            # lb1 (exit)
        reg[7] += 4; reg[9] = mem[reg[7]]
        reg[11] = 1 if reg[8] < reg[9] else 0
        if kind == "a":
            if reg[11] != 0: reg[8] = reg[9] + reg[8]
            reg[6] += 1
        elif kind == "b":
            if reg[11] == 0: reg[8] = reg[9] + reg[8]
            reg[6] += 1
        elif kind == "c":   # bne $0,$11,lb2(end=exit)
            if reg[0] != reg[11]: return reg[8]
            reg[8] = reg[9] + reg[8]; reg[6] += 1
        elif kind == "d":   # beq $0,$11,lb2(end=exit)
            if reg[0] == reg[11]: return reg[8]
            reg[8] = reg[9] + reg[8]; reg[6] += 1
        elif kind in ("e", "f"):   # slt $1,$11,$0 -> 0 always (11 is 0/1); bne $1,$0 never taken
            reg[1] = 1 if reg[11] < 0 else 0
            if reg[1] != 0: return None
            reg[8] = reg[9] + reg[8]; reg[6] += 1
    return None
def ref20(arr):
    a = arr[0]
    for i in range(len(arr) - 1):
        if arr[i + 1] > a: a += arr[i + 1]
    return a
random.seed(2)
tt = [[random.randint(-9, 9) for _ in range(random.randint(2, 6))] for _ in range(60)]
print("Q20 equals C:", {k: all(run20(k, t) == ref20(t) for t in tt) for k in "abcdef"})
