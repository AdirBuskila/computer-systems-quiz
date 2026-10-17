# Recomputation of the 22B-B keys (ASCII output only). Run: PYTHONUTF8=1 py tools/verify/22B-B/check.py
import sys, os, struct
from itertools import product
from fractions import Fraction as Fr
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from mipssim import run
M32 = 0xFFFFFFFF
def n(x): return 1 - x
def xor(*a):
    r = 0
    for x in a: r ^= x
    return r
res = {}
# Q1: which equation is false (3 vars)
def eq(f, g): return all(f(*v) == g(*v) for v in product((0,1), repeat=3))
res[1] = [
 eq(lambda A,B,C: xor(n(A),B,n(C)), lambda A,B,C: (n(A)&n(B)&C)|(n(A)&B&n(C))|(A&n(B)&C)|(A&B&C)),
 eq(lambda A,B,C: n(xor(n(A),B,n(C))), lambda A,B,C: (A&n(B)&C)|(A&B&n(C))|(n(A)&B&C)|(n(A)&n(B)&n(C))),
 eq(lambda A,B,C: xor(A, C|B|A), lambda A,B,C: (n(A)&B)|((A|n(B))&C&n(A))),
 eq(lambda A,B,C: xor(A, n(C|B|A)), lambda A,B,C: (n(B)&n(C))|((B|C)&A))]
# Q2
r5 = 0x18180000
sx = (0x8181 - 0x10000) & M32
r5 = (r5 + sx) & M32; r5 = (r5 + sx) & M32
res[2] = hex(r5)
# Q3
b = 0x425D4000
s = -1 if b >> 31 else 1; E = (b >> 23) & 255; f = b & 0x7FFFFF
val = s * (1 + Fr(f, 1 << 23)) * Fr(2) ** (E - 127)
res[3] = (val, [Fr(55) + Fr(5,16), Fr(23) + Fr(5,16), Fr(27) + Fr(21,32), Fr(23) + Fr(21,32)])
# Q4
X = Fr(1*36 + 2*6 + 2, 215)
res[4] = (X, [Fr(10,43), Fr(1,4), Fr(122,215), Fr(122,216), Fr(61,107), Fr(11,47)])
# Q5
def can(v):
    k = v * 64
    if k.denominator != 1: return None
    k = int(k)
    if not (-4096 <= k <= 4095): return False
    u = k & 0x1FFF
    return bool(u >> 10 & 1) and bool(u >> 8 & 1) and bool(u >> 4 & 1)
res[5] = [can(Fr(v)) for v in (Fr(-42)-Fr(22,64), Fr(-3,4), Fr(-42)-Fr(43,64), Fr(121,2), Fr(-61,2), Fr(-1,64))]
# Q7: spacing of floats = 4 -> exponent
def spacing(E): return Fr(2) ** (E - 127 - 23)
res[7] = [spacing(e) for e in (152, 150, 129)]
# Q9: [Q3,Q2,Q1,Q0]; D3 = ~(~Q3 xor Q0); Q2'=Q3; Q1'=~Q2; Q0'=Q1
def step(q):
    q3, q2, q1, q0 = q
    return (n(xor(n(q3), q0)), q3, n(q2), q1)
q = (1, 0, 0, 1)
for _ in range(5): q = step(q)
res[9] = q
# Q10: wrong translation of a = 5*b - 4*a; a=$5, b=$4
Q10 = {
 'a': ["add $5,$5,$5","add $5,$5,$5","sub $5,$4,$5","add $4,$4,$4","add $4,$4,$4","add $5,$5,$4"],
 'b': ["sub $5,$4,$5","add $5,$5,$5","add $5,$5,$5","add $5,$4,$5"],
 'c': ["add $1,$4,$4","add $1,$1,$1","add $1,$4,$1","add $5,$5,$5","add $5,$5,$5","sub $5,$1,$5"],
 'd': ["add $5,$5,$5","add $5,$5,$5","sub $5,$4,$5","add $5,$4,$5","add $5,$5,$4","add $5,$4,$5","add $5,$5,$4"]}
res[10] = {}
for k, p in Q10.items():
    Rr, _, _ = run(p, {5: 7, 4: 3})
    res[10][k] = (Rr[5] == (5*3 - 4*7) & M32, Rr[4] == 3)
# Q11
x = int('1285', 9); s_ = ''; y = x
while y: s_ = str(y % 5) + s_; y //= 5
res[11] = (x, s_, [int(o, 5) for o in ('12333','13233','13232','12323','4233','22333')])
# Q12
def ovf(x, y, sub):
    xs = x - 256 if x & 128 else x; ys = y - 256 if y & 128 else y
    r_ = xs - ys if sub else xs + ys
    return not (-128 <= r_ <= 127)
res[12] = [ovf(0b10011100,0b11101011,0), ovf(0b10110101,0b10101011,0), ovf(0b00110111,0b01011001,0),
           ovf(0b01011101,0b10011111,1), ovf(0b10111110,0b10110010,0)]
# Q13: given asm; which C matches
asm = ["slt $1,$3,$4","beq $1,$0,lab1","add $4,$4,$4","beq $0,$0,end","lab1: add $3,$3,$3","end:"]
Cs = {'a': lambda a,b: (2*a,b) if a >= b else (a,2*b),
      'b': lambda a,b: (2*a,b) if a < b else (a,2*b),
      'c': lambda a,b: (a,2*b) if a >= b else (2*a,b)}
res[13] = {}
for k, f in Cs.items():
    ok = True
    for a_, b_ in product(range(-3,4), repeat=2):
        Rr, _, _ = run(asm, {3: a_, 4: b_})
        got = (Rr[3] - (1 << 32) if Rr[3] >> 31 else Rr[3], Rr[4] - (1 << 32) if Rr[4] >> 31 else Rr[4])
        ok &= (got == f(a_, b_))
    res[13][k] = ok
# Q14 mux: 000:0 001:D 010:D 011:D 100:1 101:1 110:D 111:D
tbl = {0:'0',1:'D',2:'D',3:'D',4:'1',5:'1',6:'D',7:'D'}
def F14(A,B,C,D):
    v = tbl[A*4+B*2+C]; return D if v == 'D' else int(v)
o14 = {'a': lambda A,B,C,D: (B&D)|(C&D)|(A&n(B)),
       'b': lambda A,B,C,D: (B&D)|(n(C)&D)|(A&n(B)),
       'c': lambda A,B,C,D: (B&D)|(C&n(D))|(A&n(B)),
       'd': lambda A,B,C,D: (n(B)&D)|(C&D)|(n(A)&B)}
res[14] = {k: all(f(*v) == F14(*v) for v in product((0,1),repeat=4)) for k, f in o14.items()}
# Q15: inputs 00=B, 01=(AB=01)|(AB=11)=B, 10=1, 11=(AB=10)|(AB=11)=A
def F15(A,B,C,D):
    d = {(0,0):0,(0,1):1,(1,0):2,(1,1):3}[(A,B)]
    dec = [int(d==i) for i in range(4)]
    ins = [B, dec[1]|dec[3], 1, dec[2]|dec[3]]
    return ins[C*2+D]
o15 = {'a': lambda A,B,C,D: (B&n(C))|(A&C)|(C&n(D)),
       'b': lambda A,B,C,D: (n(A)&n(C))|(A&B)|(C&n(D)),
       'c': lambda A,B,C,D: (B&n(C))|(A&C)|(C&D),
       'd': lambda A,B,C,D: (n(A)&n(B)&n(C))|(A&n(C))|(C&n(D))}
res[15] = {k: all(f(*v) == F15(*v) for v in product((0,1),repeat=4)) for k, f in o15.items()}
# Q16: 5-bit input times 11 = 1011 -> rows shifted 0,1,3
heights = [0]*10
for sh in (0, 1, 3):
    for i in range(5): heights[sh+i] += 1
fa = ha = 0; carry = 0; outs = 0
for c in range(10):
    h = heights[c] + carry; carry = 0
    while h >= 3: fa += 1; h -= 2; carry += 1
    if h == 2: ha += 1; h -= 1; carry += 1
    if h >= 1: outs += 1
res[16] = (fa, ha, outs)
# Q17
imm = -567 & 0xFFFF
res[17] = (hex((8 << 26) | (7 << 21) | (21 << 16) | imm), hex(imm), hex(567))
# Q19
w = 0x038BC024
res[19] = (w >> 26, (w >> 21) & 31, (w >> 16) & 31, (w >> 11) & 31, w & 63)
# Q20: array==16 -> double. array in $4, size in $5
head = ["addi $6,$0,0","addi $7,$0,0x10","iflp:","slt $8,$6,$5","beq $8,$0,end","add $8,$6,$6","add $8,$8,$8","add $8,$8,$4","lw $9,0($8)"]
tail = ["j iflp","end:"]
opts = {'a': ["bne $9,$7,skip","add $9,$9,$9","sw $9,0($8)","skip: addi $6,$6,1"],
        'b': ["beq $9,$7,skip","add $9,$9,$9","sw $9,0($8)","skip: addi $6,$6,1"],
        'c': ["slt $10,$9,$7","beq $10,$0,skip","addi $9,$9,-1","skip: sw $9,0($8)","addi $6,$6,1"],
        'd': ["slt $10,$7,$9","bne $10,$0,skip","addi $9,$9,-1","skip: sw $9,0($8)","addi $6,$6,1"]}
arr = [3, 16, 7, 16, 20, 15]
base = 0x1000
res[20] = {}
for k, mid in opts.items():
    mem = {base + 4*i: v for i, v in enumerate(arr)}
    Rr, m2, _ = run(head + mid + tail, {4: base, 5: len(arr)}, mem)
    res[20][k] = [m2.get(base + 4*i, 0) for i in range(len(arr))] == [32 if v == 16 else v for v in arr]
for k in sorted(res): print(k, res[k])
