# Recompute checks for sitting 23B-B (keys are the lecturer's circled option, a in every question).
import itertools, struct
from fractions import Fraction as Fr
M = 0xFFFFFFFF
def sx(v): v &= 0xFFFF; return v - 0x10000 if v & 0x8000 else v
def addi(r, i): return (r + sx(i)) & M
def n(a): return 1 - a
rows3 = list(itertools.product((0, 1), repeat=3))

# Q1: which equation is false (a expected false; b,c,d true)
a_ok = all((n(A ^ B) & C) == (((n(A) & C) ^ (n(B) & C))) for A, B, C in rows3)
b_ok = all(n(A ^ B) == ((n(A) ^ B) & (A ^ n(B))) for A, B, C in rows3)
c_ok = all(((A ^ B) ^ (A ^ C)) == (n(B) ^ n(C)) for A, B, C in rows3)
d_ok = all((A ^ n(C | B | A)) == ((n(B) & n(C)) | ((B | C) & A)) for A, B, C in rows3)
print("Q1 a,b,c,d true?:", a_ok, b_ok, c_ok, d_ok, "-> false is a" if (not a_ok and b_ok and c_ok and d_ok) else "-> MISMATCH")

# Q2
r = (0x2468 << 16) & M; r = addi(r, 0xFDB9); r = addi(r, 0x1357)
print("Q2:", hex(r), "(option a = 0x24681110)")

# Q3: 333 2/9
v = struct.unpack(">I", struct.pack(">f", 333 + 2 / 9))[0]
print("Q3:", hex(v), "(option a = 0x43A69C72)")

# Q4: [0.23 10 10 10 ...]_5
def frac(rep, pre, base):
    p = Fr(0); k = 1
    for d in pre: p += Fr(int(d, base), base ** k); k += 1
    L = len(rep); r_ = Fr(0)
    for i, d in enumerate(rep): r_ += Fr(int(d, base), base ** (i + 1))
    return p + r_ / base ** (k - 1) / (1 - Fr(1, base ** L))
x4 = frac("10", "23", 5)
print("Q4:", x4, "(option a = 317/600)", [Fr(53, 102), Fr(319, 604), Fr(159, 301), Fr(158, 299), Fr(25, 47)])

# Q5: 14-bit 2's complement, 7 fractional bits, X1=X4=X-2=1
def possible(val):
    if val * 128 != int(val * 128): return False
    k = int(val * 128)
    if not (-8192 <= k <= 8191): return False
    u = k & 0x3FFF
    bit = lambda i: (u >> (i + 7)) & 1
    return bit(1) == 1 and bit(4) == 1 and bit(-2) == 1
cand = {"a": -Fr(17) - Fr(1, 128), "b": Fr(30) + Fr(7, 8), "c": -Fr(1) - Fr(7, 8), "d": Fr(42) + Fr(25, 64), "e": -Fr(42) - Fr(25, 64), "f": Fr(18) + Fr(33, 128)}
claims_can = {"a": True, "b": True, "c": False, "d": False, "e": False, "f": True}
print("Q5 possible:", {k: possible(x) for k, x in cand.items()}, "false claims:", [k for k in cand if possible(cand[k]) != claims_can[k]])

# Q6: unsigned fraction with 7 bits: step 2^-7 = 1/128; rounding error <= 1/256, truncation error < 1/128
print("Q6: round error max =", Fr(1, 256), "trunc error max <", Fr(1, 128), "-> a true (<=1/256 when rounding); d claims <=1/512 (false); b,e say 'always greater' (false)")

# Q9: D3 = NOT(XOR(NOT Q3, Q0)); D2=Q3; D1 = NOT Q2; D0 = Q1; state shown is after 5 rises
def nxt(s):
    q3, q2, q1, q0 = s
    return (n((n(q3)) ^ q0), q3, n(q2), q1)
cur = (1, 0, 0, 1)
for s in itertools.product((0, 1), repeat=4):
    t = s
    for _ in range(5): t = nxt(t)
    if t == cur: print("Q9: state 5 rises before =", s, "(option a = [0,0,0,0])")

# Q10: which translation of a = 4*a - 2*b is wrong ($7=a, $5=b)
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
    out = run(p, 11, 3)
    print("Q10", k, "a'=", out[7], "(want", 4 * 11 - 2 * 3, ") b'=", out[5], "(b was 3)")

# Q11: [1324.31]_9 -> base 3 (each base-9 digit = two base-3 digits)
def b9_to_val(s):
    ip, fp = s.split(".")
    v = Fr(0)
    for ch in ip: v = v * 9 + int(ch)
    for i, ch in enumerate(fp): v += Fr(int(ch), 9 ** (i + 1))
    return v
def b3_to_val(s):
    ip, fp = s.split(".")
    v = Fr(0)
    for ch in ip: v = v * 3 + int(ch)
    for i, ch in enumerate(fp): v += Fr(int(ch), 3 ** (i + 1))
    return v
t = b9_to_val("1324.31")
print("Q11:", {k: b3_to_val(o) == t for k, o in zip("abcdef", ["1100211.1001", "11110100.1101", "11110201.111", "1102020.2001", "110211.1001", "111020.1011"])})

# Q12 overflow
def ov(x, y, op):
    s8 = lambda z: z - 256 if z & 128 else z
    a, b = s8(x), s8(y); v = a + b if op == "+" else a - b
    return not (-128 <= v <= 127)
cases12 = [("01001101", "00110001", "+"), ("11011111", "01110101", "-"), ("00111001", "01001001", "+"), ("00111100", "10110001", "-"), ("11000110", "10101000", "+")]
print("Q12 overflow:", [ov(int(x, 2), int(y, 2), o) for x, y, o in cases12], "(only a should be False)")

# Q13: if(a>b) a=2*b; if(c<=b) c=2*b ; b=$2, a=$3, c=$4
def run13(variant, a, b, c):
    reg = {2: b, 3: a, 4: c}
    # variant: list of ("slt",d,x,y) / ("beq|bne", 1, 0, label) / ("add",d,x,y) with labels
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
# labels: lab1 -> index 3 (the second slt), lab2 -> index 6 (end)
def spec(a, b, c): return (2 * b if a > b else a, 2 * b if c <= b else c)
tests = [(a, b, c) for a in range(-3, 5) for b in range(-3, 5) for c in range(-3, 5)]
print("Q13 equivalent to spec:", {k: all(run13(p, *t) == spec(*t) for t in tests) for k, p in v13.items()})

# Q14: mux 000:D 001:0 010:1 011:0 100:1 101:1 110:D 111:~D
D_in = {0: "D", 1: "0", 2: "1", 3: "0", 4: "1", 5: "1", 6: "D", 7: "nD"}
def mux(A, B, C, D):
    s = D_in[A * 4 + B * 2 + C]; return {"0": 0, "1": 1, "D": D, "nD": n(D)}[s]
fa = lambda A, B, C, D: (A & n(B)) | (n(C) & D) | (A & C & n(D)) | (n(A) & B & n(C))
fb = lambda A, B, C, D: (A & n(B)) | (n(C) & D) | (n(A) & B) | (A & C & n(D))
fc = lambda A, B, C, D: (A & n(B)) | (C & D) | (A & C & n(D)) | (n(A) & B & n(C))
fd = lambda A, B, C, D: (A & n(B)) | (n(C) & D) | (A & C)
fe = lambda A, B, C, D: (A & n(B)) | (n(C) & D) | (A & C & n(D))
rows4 = list(itertools.product((0, 1), repeat=4))
print("Q14 matches mux:", [all(mux(*q) == f(*q) for q in rows4) for f in (fa, fb, fc, fd, fe)])

# Q15 option rows vs solution set (solution: Sigma(0,1,2,3,7,13,14))
def mterm(t):
    t = t.replace(" ", ""); bits = ""; i = 0
    while i < len(t):
        if t[i] == "~": bits += "0"; i += 2
        else: bits += "1"; i += 1
    return int(bits, 2)
opt15 = {
 "a": ["~A~B~C~D", "~A~B~C D", "~A~B C~D", "~A~B C D", "~A B C D", "AB~C D", "ABC~D"],
 "b": ["~A~B~C~D", "~A~B~C D", "~A~B C~D", "~A~B C D", "~A B~C~D", "AB~C D", "ABC~D"],
 "c": ["~A~B~C~D", "~A~B~C D", "~A~B C~D", "~A~B C D", "~A B C~D", "AB~C D", "ABC~D"],
 "d": ["~A~B~C~D", "~A~B~C D", "~A~B C~D", "~A~B C D", "~A B C~D", "AB~C~D", "ABC~D"],
 "e": ["~A~B~C~D", "~A~B~C D", "~A~B C~D", "~A~B C D", "~A B C~D", "AB~C D", "ABCD"],
}
sol = {0, 1, 2, 3, 7, 13, 14}
print("Q15 vs sol set:", {k: {mterm(t) for t in v} == sol for k, v in opt15.items()}, {k: sorted({mterm(t) for t in v}) for k, v in opt15.items()})

# Q16: 23 = 10111 -> rows at shifts 0,1,2,4 ; 5-bit a
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
print("Q16 (FA,HA,outputs):", count_adders([0, 1, 2, 4], 5), "official figure: 10 FA + 5 HA, 10 outputs (option a = 5 HA, 10 FA, 10 outputs)")

# Q17: slt $v1,$t8,$s4 -> rd=3 rs=24 rt=20
w = (24 << 21) | (20 << 16) | (3 << 11) | 42
print("Q17:", hex(w), "(option a = 0x0314182A)")

# Q19: 0x13DDF02A
w = 0x13DDF02A
imm = w & 0xFFFF
print("Q19: op", w >> 26, "rs", (w >> 21) & 31, "rt", (w >> 16) & 31, "imm", imm - 0x10000 if imm & 0x8000 else imm, "(beq $fp($30),$sp($29),-4054)")

# Q20: simulate the MIPS loop with each option's missing instructions against the C semantics
import random
def run20(opt, a1, a2):
    # regs: $4=size, $5=&array1 (base 0), $6=&array2 (base 1000); memory dict
    mem = {}
    for i, v in enumerate(a1): mem[0 + 4 * i] = v
    for i, v in enumerate(a2): mem[1000 + 4 * i] = v
    reg = {0: 0, 1: 0, 4: len(a1), 5: 0, 6: 1000, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0}
    slt_args, br, lab = opt
    # addi $7,$0,0 ; j lab3
    reg[7] = 0
    state = "lab3"
    steps = 0
    while steps < 10000:
        steps += 1
        if state == "lab3":
            reg[1] = 1 if reg[7] < reg[4] else 0
            if reg[1] != 0: state = "lab1"; continue
            break
        if state == "lab1":
            reg[8] = reg[7] + reg[7]; reg[8] = reg[8] + reg[8]; reg[9] = reg[8] + reg[5]; reg[8] = reg[8] + reg[6]
            reg[10] = mem[reg[9]]; reg[11] = mem[reg[8]]
            x, y = slt_args
            reg[1] = 1 if reg[x] < reg[y] else 0
            taken = (reg[1] == 0) if br == "beq" else (reg[1] != 0)
            if taken:
                if lab == "lab1": state = "lab1"; continue   # jumps to loop body start (skips i++ and the loop test)
                state = "lab2"  # fall to i++
            else:
                mem[reg[8]] = reg[10]; state = "lab2"
            continue
        if state == "lab2":
            reg[7] += 1; state = "lab3"; continue
    return [mem[1000 + 4 * i] for i in range(len(a1))]
def spec20(a1, a2): return [x if x > y else y for x, y in zip(a1, a2)] if False else [x if x > y else y for x, y in zip(a1, a2)]
opts20 = {"a": ((11, 10), "bne", "lab2"), "b": ((11, 10), "beq", "lab2"), "c": ((10, 11), "bne", "lab2"), "d": ((10, 11), "beq", "lab2"), "e": ((11, 10), "bne", "lab1"), "f": ((11, 10), "beq", "lab1")}
random.seed(1)
tests = [([random.randint(-9, 9) for _ in range(4)], [random.randint(-9, 9) for _ in range(4)]) for _ in range(40)]
ok = {}
for k, o in opts20.items():
    good = True
    for a1, a2 in tests:
        try:
            r_ = run20(o, a1, a2)
        except Exception:
            good = False; break
        # C: if (array1[i] > array2[i]) array2[i] = array1[i]  -> array2 becomes elementwise max
        if r_ != [max(x, y) for x, y in zip(a1, a2)]: good = False; break
    ok[k] = good
print("Q20 equivalent to C (lab1-jump options may loop forever and are counted wrong):", ok, "(official key a)")
