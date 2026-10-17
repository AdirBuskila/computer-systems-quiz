# Recomputation of the 22B-A keys (ASCII output only). Run: PYTHONUTF8=1 py tools/verify/22B-A/check.py
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
def ok(f): return all(f(*v) for v in product((0, 1), repeat=5))
res = {}
# Q1 (which equations are TRUE: a and c should be False)
A_ = lambda A,B,C,D,E: ((xor(A,B) & xor(A,C)) == xor(A, n(xor(B,C))))
B_ = lambda A,B,C,D,E: ((xor(A,B) & n(xor(A,C))) == ((n(A)&n(C)&B) | (n(B)&C&A)))
C_ = lambda A,B,C,D,E: (xor(xor(A,B), xor(C,n(E)), n(xor(D,C)), xor(n(B),D)) == xor(xor(n(A),C), xor(n(C),E)))
D_ = lambda A,B,C,D,E: (n(B&A) | n(D&C)) == ((A & ((B & ((C & n(D)) | n(C))) | n(B))) | n(A))
res[1] = [ok(f) for f in (A_, B_, C_, D_)]
# Q2
R, _, _ = run(["addi $7,$0,0x8888", "lui9", "add $9,$9,$7", "add $9,$7,$9"], {}) if False else (None, None, None)
r7 = (0x8888 - 0x10000) & M32; r9 = 0x88880000; r9 = (r9 + r7) & M32; r9 = (r7 + r9) & M32
res[2] = hex(r9)
res[4] = (Fr(2*7+4, 49) / (1 - Fr(1, 343)), [Fr(7,19), Fr(11,30), Fr(35,97), Fr(23,64), Fr(13,36), Fr(126,343)])
def can(v):
    k = v * 64
    if k.denominator != 1: return None
    k = int(k)
    if not (-4096 <= k <= 4095): return False
    u = k & 0x1FFF
    return bool(u >> 10 & 1) and bool(u >> 8 & 1) and bool(u >> 4 & 1)
res[5] = [can(Fr(v)) for v in (Fr(-42)-Fr(22,64), Fr(-3,4), Fr(-42)-Fr(43,64), Fr(121,2), Fr(-61,2), Fr(7,64))]
# Q7: number of float32 values (finite, incl. both zeros not double counted) in each interval
def key(x):
    b = struct.unpack('>I', struct.pack('>f', x))[0]
    return -(b & 0x7FFFFFFF) if b >> 31 else (b & 0x7FFFFFFF)
def cnt(lo, hi):
    lo, hi = min(lo, hi), max(lo, hi); return key(hi) - key(lo) + 1
ivs = [(-1,-88), (100,352), (-100,-352), (25,255), (0.25,18), (0.125,10)]
res[7] = [cnt(*iv) for iv in ivs]
# Q9: state before 8 clocks
def step(s):
    q2, q1, q0 = s; return ((1 if q2 == q0 else 0), q2, q1)
pre = [s for s in product((0,1), repeat=3) if (lambda x: [x := step(x) for _ in range(8)][-1])(s) == (0,1,1)]
res[9] = pre
# Q10 : each option, a=$5, b=$2 : value of $5 and whether $2 preserved
Q10 = {
 'a': ["add $1,$5,$0","add $5,$5,$5","add $5,$5,$1","add $2,$2,$2","add $2,$2,$2","sub $5,$5,$2"],
 'b': ["add $1,$5,$0","sub $5,$5,$2","add $5,$5,$5","add $5,$5,$5","sub $5,$5,$1"],
 'c': ["sub $1,$1,$1","add $1,$1,$5","add $1,$1,$5","add $5,$1,$5","sub $5,$5,$2","sub $5,$5,$2","sub $5,$5,$2","sub $5,$5,$2"],
 'd': ["add $1,$5,$5","add $1,$1,$1","sub $1,$1,$2","sub $1,$1,$2","sub $1,$1,$2","sub $1,$1,$2","sub $5,$1,$5"]}
res[10] = {}
for k, p in Q10.items():
    Rr, _, _ = run(p, {5: 11, 2: 3})
    res[10][k] = (Rr[5] == 3*11 - 4*3, Rr[2] == 3)
# Q11
x = int('326', 7); s = ''; y = x
while y: s = str(y % 3) + s; y //= 3
res[11] = (x, s, [int(o, 3) for o in ('20012','21002','20112','20102','21012','20002')])
# Q12
def ovf(x, y, sub):
    xs = x - 256 if x & 128 else x; ys = y - 256 if y & 128 else y
    r_ = xs - ys if sub else xs + ys
    return not (-128 <= r_ <= 127)
res[12] = [ovf(0b10110110,0b11010001,0), ovf(0b10110110,0b10111001,0), ovf(0b01011111,0b00110001,0),
           ovf(0b01010001,0b10010011,1), ovf(0b10110110,0b10111010,0)]
# Q13
def c13(slt_args, br, first_is_a_double):
    out = []
    for av, bv in product(range(-3, 4), repeat=2):
        s1 = 1 if (av < bv if slt_args == '34' else bv < av) else 0
        take = (s1 == 0) if br == 'beq' else (s1 != 0)
        if take: nv = (2*av, bv) if first_is_a_double else (av, 2*bv)
        else: nv = (av, 2*bv) if first_is_a_double else (2*av, bv)
        exp = (2*av, bv) if av >= bv else (av, 2*bv)
        out.append(nv == exp)
    return all(out)
res[13] = {'a': c13('34','beq',True), 'b': c13('34','bne',True), 'c': c13('43','bne',False), 'd': c13('34','beq',False)}
# Q14
tbl = {0:'D',1:'1',2:'D',3:'0',4:'1',5:'1',6:'1',7:'0'}
def F14(A,B,C,D):
    v = tbl[A*4+B*2+C]; return D if v == 'D' else int(v)
o14 = {'a': lambda A,B,C,D: (n(C)&D)|(A&n(C))|(n(B)&C),
       'b': lambda A,B,C,D: (A&n(C))|(n(C)&D)|(n(A)&C),
       'c': lambda A,B,C,D: (n(A)&n(C))|(n(C)&D)|(A&B),
       'd': lambda A,B,C,D: (A&n(C))|(n(A)&B)|(n(A)&C)}
res[14] = {k: all(f(*v) == F14(*v) for v in product((0,1),repeat=4)) for k, f in o14.items()}
# Q15
def F15(A,B,C,D):
    dec = [int(A==0 and B==0), int(A==0 and B==1), int(A==1 and B==0), int(A==1 and B==1)]
    ins = [B | dec[2], 1, dec[2], dec[0] | dec[2]]
    return ins[C*2 + D]
o15 = {'a': lambda A,B,C,D: (B&n(C))|(A&n(B))|(n(B)&D),
       'b': lambda A,B,C,D: (B&n(C))|(A&B)|(n(B)&D),
       'c': lambda A,B,C,D: (B&n(C))|(A&n(B))|(C&D),
       'd': lambda A,B,C,D: (B&n(C))|(A&n(B))|(n(A)&n(B)&C)}
res[15] = {k: all(f(*v) == F15(*v) for v in product((0,1),repeat=4)) for k, f in o15.items()}
# Q16: 4-bit input times 29 = 11101 -> rows shifted by 0,2,3,4
heights = [0]*12
for sh in (0, 2, 3, 4):
    for i in range(4): heights[sh+i] += 1
fa = ha = 0; carry = 0; outs = 0
for c in range(12):
    h = heights[c] + carry; carry = 0
    while h >= 3: fa += 1; h -= 2; carry += 1
    if h == 2: ha += 1; h -= 1; carry += 1
    if h >= 1: outs += 1
res[16] = (fa, ha, outs)
# Q17 bne $t7,$sp,cont  at 0x10000100 -> 0x10000180
imm = (0x10000180 - 0x10000100 - 4) // 4
res[17] = hex((5 << 26) | (15 << 21) | (29 << 16) | (imm & 0xFFFF))
# Q19
w = 0x03DD0822
res[19] = (w >> 26, (w >> 21) & 31, (w >> 16) & 31, (w >> 11) & 31, w & 63)
# Q20: sum of odd elements; array in $5, size in $4
head = ["addi $6,$0,0","addi $7,$0,0","addi $8,$0,1","loop:","add $9,$7,$7","add $9,$9,$9","add $9,$9,$5","lw $10,0($9)"]
tail = ["nxt: addi $7,$7,1","slt $9,$7,$4","bne $9,$0,loop"]
opts = {'a': ["and $9,$10,$8","bne $9,$8,nxt","add $6,$10,$6"],
        'b': ["sub $11,$10,$8","bne $11,$0,nxt","add $6,$10,$9"],
        'c': ["and $10,$10,$8","bne $10,$8,nxt","add $6,$10,$6"],
        'd': ["and $9,$10,$8","beq $9,$8,nxt","add $6,$10,$6"]}
arr = [3, 4, 7, 10, 5, 8]
base = 0x1000
mem = {base + 4*i: v for i, v in enumerate(arr)}
res[20] = {}
for k, mid in opts.items():
    Rr, _, st = run(head + mid + tail, {4: len(arr), 5: base}, mem)
    res[20][k] = (Rr[6] == sum(v for v in arr if v % 2), Rr[6], Rr[4] == len(arr) and Rr[5] == base)
for k in sorted(res): print(k, res[k])
