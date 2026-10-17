# Recompute checks for sitting 23A-B (keys are the lecturer's circled option, a in every question).
import itertools, struct
from fractions import Fraction as Fr
M = 0xFFFFFFFF
def sx(v): v &= 0xFFFF; return v - 0x10000 if v & 0x8000 else v
def addi(r, i): return (r + sx(i)) & M
def X(a, b): return a ^ b
def n(a): return 1 - a
rows = list(itertools.product((0, 1), repeat=4))

# Q1: which equation is false (a expected false; b,c,d true)
a_ok = all(X(X(A, B), C | D) == X(A | B, X(C, D)) for A, B, C, D in rows)
b_rhs = lambda A, B, C, D: (n(A) & n(B) & C) | (n(D) & n(C) & A) | (n(D) & n(C) & B) | (n(A) & n(B) & D)
b_ok = all(X(A | B, C | D) == b_rhs(A, B, C, D) for A, B, C, D in rows)
c_ok = all(n(X(n(A), B) | X(C, n(D))) == ((n(A) & B & n(C) & D) | (n(A) & B & C & n(D)) | (A & n(B) & n(C) & D) | (A & n(B) & C & n(D))) for A, B, C, D in rows)
d_ok = all((X(n(A), B) & X(C, n(D))) == ((n(A) & n(B) & n(C) & n(D)) | (A & B & C & D) | (n(A) & n(B) & C & D) | (A & B & n(C) & n(D))) for A, B, C, D in rows)
print("Q1 a,b,c,d true?:", a_ok, b_ok, c_ok, d_ok, "-> false is a" if (not a_ok and b_ok and c_ok and d_ok) else "-> MISMATCH")

# Q2: which snippet does not leave 65535 in $3
def s1(): r = addi(0, 0xFFF); r = addi(r, 0x7000); return addi(r, 0x8000)
def s2(): r = (1 << 16) & M; return addi(r, 0xFFFF)
def s3(): r = (1 << 16) & M; r = addi(r, 0x5555); return addi(r, 0xAAAA)
def s4(): r1 = addi(0, 0x7000); r1 = (r1 + r1) & M; r3 = addi(0, 0xFFFF); r3 = (r3 + r1) & M; return addi(r3, 0x2000)
def s5(): r = addi(0, 0x5555); r = addi(r, 0x5555); return addi(r, 0x5555)
fl = [f() == 0xFFFF for f in (s1, s2, s3, s4, s5)]
print("Q2:", [hex(f()) for f in (s1, s2, s3, s4, s5)], "-> only a != 0xFFFF" if fl == [False, True, True, True, True] else "MISMATCH")

# Q3: -31 1/5 single precision
v = struct.unpack(">I", struct.pack(">f", -31.2))[0]
print("Q3:", hex(v), "(option a = 0xC1F9999A)")

# Q4: which is false
def frac(rep, pre, base):
    p = Fr(0); k = 1
    for d in pre: p += Fr(int(d, base), base ** k); k += 1
    L = len(rep); r = Fr(0)
    for i, d in enumerate(rep): r += Fr(int(d, base), base ** (i + 1))
    return p + r / base ** (k - 1) / (1 - Fr(1, base ** L))
q4a = (frac("21", "", 3) / 7, frac("3", "", 9))
q4b = (frac("9", "", 16) / 4, frac("21", "0", 4))
q4c = (frac("4", "", 9) / 2, frac("02", "", 3))
q4d = frac("25", "", 7) * 24
print("Q4:", q4a, q4b, q4c, q4d, "-> a false" if (q4a[0] != q4a[1] and q4b[0] == q4b[1] and q4c[0] == q4c[1] and q4d == Fr(19, 2)) else "MISMATCH")

# Q5: 13-bit 2's complement, 6 fractional bits; X4=X0=X-2=1 (printed: X0, X4 and X-2)
def possible(val):
    if val * 64 != int(val * 64): return False
    k = int(val * 64)
    if not (-4096 <= k <= 4095): return False
    u = k & 0x1FFF
    bit = lambda i: (u >> (i + 6)) & 1
    return bit(0) == 1 and bit(4) == 1 and bit(-2) == 1
cand = {"a": -Fr(42) - Fr(5, 8), "b": Fr(44) + Fr(1, 4), "c": Fr(31) + Fr(15, 16), "d": Fr(17) + Fr(47, 64), "e": -Fr(14) - Fr(31, 32), "f": -Fr(1, 32)}
claims_can = {"a": False, "b": False, "c": True, "d": False, "e": False, "f": True}
print("Q5 possible:", {k: possible(x) for k, x in cand.items()}, "false claims:", [k for k in cand if possible(cand[k]) != claims_can[k]])

# Q10: simulate
r = {7: M, 8: 0x156, 9: 1}
while not (r[8] < r[9]):
    r[9] = (r[9] * 2) & M; r[7] = (r[7] + 1) & M
print("Q10: $9 at end =", hex(r[9]), r[9], "(official key 0x100 = option a)", "-> MISMATCH, hold" if r[9] != 0x100 else "ok")

# Q11
t = 0x311F
o11 = {"a": (0xA + 1) * 16 + 12303, "b": (0x31 * 7 + 49 * 9) * 16 + 31, "c": 17 * 16 + 15 + 0x1000 + 8192, "d": 0x4000 - (14 * 17 * 0x10 + 1)}
print("Q11 equals 0x311F:", {k: v == t for k, v in o11.items()}, "(false should be only a)")

# Q12 overflow
def ov(x, y, op):
    s8 = lambda z: z - 256 if z & 128 else z
    a, b = s8(x), s8(y); v = a + b if op == "+" else a - b
    return not (-128 <= v <= 127)
cases12 = [("01111000", "10011100", "+"), ("01111000", "01100100", "-"), ("10111010", "10110000", "+"), ("01011010", "11001001", "-"), ("11100010", "01100011", "-")]
print("Q12 overflow:", [ov(int(x, 2), int(y, 2), o) for x, y, o in cases12], "(only a should be False)")

# Q13
def asm13(a, b): return (b + a) if a < b else (b - a)
def optA(a, b): return b - a if a >= b else b + a
def optB(a, b): return b - a if a < b else b + a
tests = [(a, b) for a in range(-3, 4) for b in range(-3, 4)]
print("Q13 a==asm:", all(asm13(a, b) == optA(a, b) for a, b in tests), " b==asm:", all(asm13(a, b) == optB(a, b) for a, b in tests))

# Q14 mux
D_in = {0: "0", 1: "D", 2: "1", 3: "1", 4: "1", 5: "D", 6: "0", 7: "D"}
def mux(A, B, C, D):
    s = D_in[A * 4 + B * 2 + C]; return {"0": 0, "1": 1, "D": D}[s]
fa = lambda A, B, C, D: (n(A) & B) | (C & D) | (A & n(B) & n(C))
fb = lambda A, B, C, D: (A & B) | (C & D) | (A & n(B) & n(C))
fc = lambda A, B, C, D: (n(A) & n(B)) | (C & D) | (A & n(B) & n(C))
fd = lambda A, B, C, D: (n(A) & B) | (C & D) | (A & B & C)
fe = lambda A, B, C, D: (n(A) & B) | (C & D) | (A & B) | (A & n(B) & n(C))
print("Q14 matches mux:", [all(mux(*q) == f(*q) for q in rows) for f in (fa, fb, fc, fd, fe)])

# Q15 minterm sets of the printed options
def mset(t):
    t = t.replace(" ", ""); bits = ""; i = 0
    while i < len(t):
        if t[i] == "~": bits += "0"; i += 2
        else: bits += "1"; i += 1
    return int(bits, 2)
opt15 = {
 "a": ["~A~B C~D", "AB~C D", "~A B~C~D", "A~B~C~D", "~A B C D", "A~B C D"],
 "b": ["~A~B C~D", "A B C~D", "~A B~C~D", "A~B~C~D", "~A B C D", "A~B C D"],
 "c": ["~A~B~C~D", "AB~C D", "~A B~C~D", "A~B~C~D", "~A B C D", "A~B C D"],
 "d": ["~A~B C~D", "AB~C D", "~A B~C D", "A~B~C~D", "~A B C D", "A~B C D"],
 "e": ["~A~B C~D", "AB~C D", "~A B~C~D", "A~B~C~D", "~A B C D", "A~B~C D"],
}
sets = {k: {mset(t) for t in v} for k, v in opt15.items()}
sol = set()
for A, B, C, D in rows:
    f = (n(A) & n(B) & C & n(D)) | (A & B & n(C) & D) | (((n(A) & B) | (A & n(B))) & ((n(C) & n(D)) | (C & D)))
    if f: sol.add(A * 8 + B * 4 + C * 2 + D)
print("Q15 solution set", sorted(sol), {k: v == sol for k, v in sets.items()})

# Q16 multiplier: 25 = 11001 -> rows at shifts 0,3,4 ; 5-bit a
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
print("Q16 (FA,HA,outputs):", count_adders([0, 3, 4], 5), "expect (5,5,10)")

# Q17 bne $gp($28),$s5($21) at 0x400300 -> loop 0x400200
off = (0x400200 - (0x400300 + 4)) // 4
w = (5 << 26) | (28 << 21) | (21 << 16) | (off & 0xFFFF)
print("Q17:", hex(w), "(option a = 0x1795FFBF)")

# Q19 decode 0x35730123
w = 0x35730123
print("Q19: op", w >> 26, "rs", (w >> 21) & 31, "rt", (w >> 16) & 31, "imm", w & 0xFFFF, "(ori $s3,$t3,291: rs=11=$t3, rt=19=$s3)")

# Q9: state shown is after 4 clock rises; find the state 4 rises earlier. next([q3,q2,q1,q0]) = [~q2^q0, q3, q2, q1]
def nxt(s):
    q3, q2, q1, q0 = s
    return ((1 - q2) ^ q0, q3, q2, q1)
cur = (0, 1, 0, 1)
for s in itertools.product((0, 1), repeat=4):
    t = s
    for _ in range(4): t = nxt(t)
    if t == cur: print("Q9: state 4 rises before =", s, "(option a = [1,1,0,1])")
