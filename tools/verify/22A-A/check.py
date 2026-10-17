# Recomputation of the 22A-A keys (ASCII output only). Run: PYTHONUTF8=1 py tools/verify/22A-A/check.py
from itertools import product
from fractions import Fraction as Fr
M32 = 0xFFFFFFFF
def sext16(x): return x - 0x10000 if x & 0x8000 else x
def bit(v): return v & 1
res = {}
# Q1  which equation is false
def xor(*a):
    r = 0
    for x in a: r ^= x
    return r
def n(x): return 1 - x
def ok(f):
    return all(f(*v) for v in product((0, 1), repeat=5))
A_ = lambda A,B,C,D,E: ((xor(A,B) | xor(A,C)) == xor(A, B | C))
B_ = lambda A,B,C,D,E: (xor(xor(A,B), xor(A,C)) == xor(n(B), n(C)))
C_ = lambda A,B,C,D,E: (xor(xor(A,B), xor(C,n(E)), n(xor(D,C)), xor(n(B),D)) == xor(xor(A,C), xor(n(C),E)))
D_ = lambda A,B,C,D,E: (n(D&A) | n(B&C)) == ((A & ((B & ((C & n(D)) | n(C))) | n(B))) | n(A))
res[1] = [ok(f) for f in (A_, B_, C_, D_)]
# Q2
r5 = sext16(0x8888) & M32; r3 = 0x8FFF << 16; r5 = (r5 + r5) & M32; r3 = (r5 + r3) & M32
res[2] = hex(r3)
# Q4
res[4] = (Fr(48, 124), [Fr(12,31), Fr(13,32), Fr(121,312), Fr(14,125), Fr(48,125), Fr(3,8)])
# Q5: 13-bit 2's complement, 6 fraction bits; X4, X2, X-2 = 1
def can(v):
    k = v * 64
    if k.denominator != 1: return None
    k = int(k)
    if not (-4096 <= k <= 4095): return False
    u = k & 0x1FFF
    # bit positions: X_j has weight 2^j; raw bit index = j+6
    return bool(u >> (4+6) & 1) and bool(u >> (2+6) & 1) and bool(u >> (-2+6) & 1)
res[5] = [can(Fr(v)) for v in (Fr(-42)-Fr(22,64), Fr(-3,4), Fr(-42)-Fr(43,64), Fr(121,2), Fr(-61,2), Fr(-1,64))]
# Q9
q = [0, 1, 0, 1]
for _ in range(5):
    d3 = (1 - q[0]) ^ q[3]
    q = [d3, q[0], q[1], q[2]]
res[9] = q
# Q10 / Q13 simulate numerically
def run(prog, regs):
    for op, a, b, c in prog:
        if op == 'add': regs[a] = regs[b] + regs[c]
        elif op == 'sub': regs[a] = regs[b] - regs[c]
    return regs
a, b = 7, 5
Q10 = {
 'a': [('sub',4,4,6),('add',4,4,4),('add',4,4,4),('add',4,4,6)],
 'b': [('add',4,4,4),('add',4,4,4),('sub',4,4,6),('add',6,6,6),('sub',4,4,6)],
 'c': [('sub',6,6,4)]*3+[('add',6,6,6)]*2,
 'd': [('add',6,6,6),('add',6,6,6),('sub',6,6,4),('add',4,4,4),('sub',6,6,4)]}
res[10] = {}
for k, p in Q10.items():
    r = run(p, {4: a, 6: b}); res[10][k] = (r[4] == 4*a-3*b, r[6] == 4*a-3*b)
# Q11
x = int('623', 7); s = ''; y = x
while y: s = str(y % 3) + s; y //= 3
res[11] = (x, s, [int(o, 3) for o in ('102112','211201','22112','21201','102121','121201')])
# Q12
def ovf(x, y, sub):
    xs = x - 256 if x & 128 else x; ys = y - 256 if y & 128 else y
    r = xs - ys if sub else xs + ys
    return not (-128 <= r <= 127)
res[12] = [ovf(0b10110000,0b11010111,0), ovf(0b10111000,0b10110111,0), ovf(0b01011011,0b00110101,0),
           ovf(0b01011001,0b10011011,1), ovf(0b10110010,0b10111110,0)]
# Q13
def c13(slt_args, br, first_is_a_double):
    out = []
    for av, bv in product(range(-3, 4), repeat=2):
        s1 = 1 if (av < bv if slt_args == '34' else bv < av) else 0
        take = (s1 == 0) if br == 'beq' else (s1 != 0)
        # lab1 path doubles X, fallthrough path doubles Y
        if take: nv = (2*av, bv) if first_is_a_double else (av, 2*bv)
        else: nv = (av, 2*bv) if first_is_a_double else (2*av, bv)
        exp = (2*av, bv) if av >= bv else (av, 2*bv)
        out.append(nv == exp)
    return all(out)
# a: slt 3,4 ; beq lab1 ; fallthrough doubles $4 ; lab1 doubles $3
res[13] = {'a': c13('34','beq',True), 'b': c13('34','bne',True), 'c': c13('43','bne',False), 'd': c13('34','beq',False)}
# Q14 mux
tbl = {0:'D',1:'1',2:'D',3:'1',4:'1',5:'0',6:'1',7:'0'}
def F14(A,B,C,D):
    v = tbl[A*4+B*2+C]; return D if v == 'D' else int(v)
opts14 = {
 'a': lambda A,B,C,D: (A&n(C))|(n(C)&D)|(n(A)&C),
 'b': lambda A,B,C,D: (n(C)&D)|(A&n(C))|(n(B)&C),
 'c': lambda A,B,C,D: (n(A)&n(C))|(n(C)&D)|(A&B),
 'd': lambda A,B,C,D: (A&n(C))|(n(A)&B)|(n(A)&C)}
res[14] = {k: all(f(*v) == F14(*v) for v in product((0,1),repeat=4)) for k, f in opts14.items()}
# Q15 circuit
def F15(A,B,C,D):
    dec = [int(A==0 and B==0), int(A==0 and B==1), int(A==1 and B==0), int(A==1 and B==1)]
    sel = C*2 + D
    ins = [A | dec[1], 1, dec[1], dec[0] | dec[1]]
    return ins[sel]
opts15 = {
 'a': lambda A,B,C,D: (A&n(C))|(n(A)&B)|(n(A)&D),
 'b': lambda A,B,C,D: (n(C)&D)|(B&((n(A)&B)|n(C)))|(n(A)&n(B)&C&n(D)),
 'c': lambda A,B,C,D: (n(C)&n(D))|(A&B)|(n(A)&n(B)&C&D),
 'd': lambda A,B,C,D: (n(C)&D)|(B&n(C)&n(D))|(A&D)|(n(A)&n(B)&C)}
res[15] = {k: all(f(*v) == F15(*v) for v in product((0,1),repeat=4)) for k, f in opts15.items()}
# Q16 greedy column compression of 3 shifted rows of a 5-bit input (13 = 1101)
heights = [0]*10
for sh in (0, 2, 3):
    for i in range(5): heights[sh+i] += 1
fa = ha = 0; carry = 0; outs = 0
for c in range(10):
    h = heights[c] + carry; carry = 0
    while h >= 3: fa += 1; h -= 2; carry += 1
    if h == 2: ha += 1; h -= 1; carry += 1
    if h >= 1: outs += 1
res[16] = (fa, ha, outs, heights)
# Q17
res[17] = hex((8 << 26) | (22 << 21) | (24 << 16) | (-333 & 0xFFFF))
# Q19
w = 0xAFDD0822
res[19] = (w >> 26, (w >> 21) & 31, (w >> 16) & 31, w & 0xFFFF)
for k in sorted(res): print(k, res[k])
