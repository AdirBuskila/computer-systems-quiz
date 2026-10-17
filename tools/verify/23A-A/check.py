# Recomputation of the 23A-A keys (ASCII output only). Run: PYTHONUTF8=1 py tools/verify/23A-A/check.py
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
def eq3(f, g): return all(f(*v) == g(*v) for v in product((0,1), repeat=3))
res[1] = [
 eq3(lambda A,B,C: xor(A,B)&xor(B,C)&xor(C,A), lambda A,B,C: xor(A, xor(A,B,xor(B,n(xor(C,n(C))))))),
 eq3(lambda A,B,C: xor(A,B,C), lambda A,B,C: xor(A,B)&xor(A,C)),
 eq3(lambda A,B,C: xor(A,B|C), lambda A,B,C: xor(A,B)|xor(A,C)),
 eq3(lambda A,B,C: xor(A,B&C), lambda A,B,C: xor(A,B)&xor(A,C))]
res[2] = hex((0x12480000 + M32 + 0x1248 + 0xFFFF8421) & M32)
v = -(17 + Fr(1,7)); bits = struct.unpack('>I', struct.pack('>f', float(v)))[0]
res[3] = hex(bits)
x = Fr(1,3) + Fr(5,24)
res[4] = (x, [Fr(13,24), Fr(27,50), Fr(5,24), Fr(5,8), Fr(23,24), Fr(23,25)])
def can(v):
    k = v * 64
    if k.denominator != 1: return None
    k = int(k)
    if not (-4096 <= k <= 4095): return False
    u = k & 0x1FFF
    return bool(u >> 10 & 1) and bool(u >> 7 & 1) and bool(u >> 3 & 1)
res[5] = [can(Fr(40) + Fr(15,64)), can(Fr(59) + Fr(3,16)), can(-(Fr(36) + Fr(1,8))), can(-(Fr(34) + Fr(5,8))), can(Fr(57) + Fr(3,4)), can(Fr(-1,32))]
def f32(h): return struct.unpack('>f', struct.pack('>I', h))[0]
import numpy as np
A = np.float32(f32(0x327FFFFF)); B = np.float32(f32(0x197F0000))
R = np.float32(A + B)
exact = Fr(float(A)) + Fr(float(B))
err = exact - Fr(float(R))
res[7] = (R == A, err == Fr(float(B)), float(B) < float(A))
q = [0, 1, 0, 1]
for _ in range(12):
    d3 = n(xor(q[1], q[3])); q = [d3, q[0], q[1], q[2]]
res[9] = q
Rr, _, _ = run(["addi $4,$0,0","addi $5,$0,0x7","addi $6,$0,0x41","lp: slt $7,$0,$6","beq $0,$7,end","add $4,$4,$5","addi $6,$6,-1","j lp","end:"])
res[10] = (Rr[4], hex(Rr[4]))
x = Fr(1,9) + Fr(2,81) + Fr(8,729); dg = ''; y = x
for _ in range(6): y *= 3; dg += str(int(y)); y -= int(y)
res[11] = (x, dg, y == 0)
def ovf(x, y, sub):
    xs = x - 256 if x & 128 else x; ys = y - 256 if y & 128 else y
    r_ = xs - ys if sub else xs + ys
    return not (-128 <= r_ <= 127)
res[12] = [ovf(0b11011101,0b01001000,1), ovf(0b11001001,0b10011101,0), ovf(0b01000010,0b10011100,1), ovf(0b11010101,0b10101000,0), ovf(0b01101111,0b00100101,0)]
asm = ["slt $1,$5,$4","beq $1,$0,lab1","sub $4,$4,$5","bne $0,$1,end","lab1: sub $5,$5,$4","end:"]
Cs = {'a': lambda a,b: (a-b,b) if a >= b else (a,b-a), 'b': lambda a,b: (a-b,b) if a < b else (a,b-a),
      'c': lambda a,b: (b-a,b) if a >= b else (a,a-b), 'd': lambda a,b: (a-b,b) if a <= b else (a,b-a)}
def s32(v): return v - (1 << 32) if v >> 31 else v
res[13] = {}
for k, f in Cs.items():
    ok = True
    for a_, b_ in product(range(-3,4), repeat=2):
        Rr, _, _ = run(asm, {5: a_, 4: b_}); ok &= ((s32(Rr[5]), s32(Rr[4])) == f(a_, b_))
    res[13][k] = ok
def F14(A,B,C,D):
    t = [D, D, 0, n(D), 1, 1, 0, 0]; return t[A*4+B*2+C]
o14 = {'a': lambda A,B,C,D: (A&n(B))|(n(B)&D)|(n(A)&B&C&n(D)),
       'b': lambda A,B,C,D: (A&n(B))|(n(B)&C)|(n(A)&C),
       'c': lambda A,B,C,D: (A&n(B))|(n(B)&C)|(n(C)&n(D)),
       'd': lambda A,B,C,D: (A&B)|(n(B)&C)|(C&D)}
res[14] = {k: all(f(*v) == F14(*v) for v in product((0,1),repeat=4)) for k, f in o14.items()}
def F15(A,B,C,D):
    d = {(0,0):0,(0,1):1,(1,0):2,(1,1):3}[(A,B)]
    X = int(d == 1); Y = int(d == 2)
    dc = {(0,0):0,(0,1):1,(1,0):2,(1,1):3}[(C,D)]
    ins = [D, int(dc == 1 or dc == 2), int(dc == 0 or dc == 3), B]
    return ins[X*2 + Y]
o15 = {'a': lambda A,B,C,D: ((n(A)&n(B))|(A&B))&D | (n(A)&B&((n(C)&n(D))|(C&D))) | (A&n(B)&((n(C)&D)|(C&n(D)))),
       'b': lambda A,B,C,D: (B&D)|(A&n(B)&((n(C)&D)|(C&n(D)))),
       'c': lambda A,B,C,D: (n(A)&D&((n(C)&n(D))|(C&D))) | (A&B&((n(C)&D)|(C&n(D)))),
       'd': lambda A,B,C,D: (n(A)&D)|(A&B&((C&D)|(n(C)&n(D))))}
res[15] = {k: all(f(*v) == F15(*v) for v in product((0,1),repeat=4)) for k, f in o15.items()}
heights = [0]*10
for sh in (0, 1, 2, 4):
    for i in range(4): heights[sh+i] += 1
fa = ha = 0; carry = 0; outs = 0
for c in range(10):
    h = heights[c] + carry; carry = 0
    while h >= 3: fa += 1; h -= 2; carry += 1
    if h == 2: ha += 1; h -= 1; carry += 1
    if h >= 1: outs += 1
res[16] = (fa, ha, outs)
res[17] = hex((30 << 21) | (29 << 16) | (1 << 11) | 42)
w = 0x231CC024; res[19] = (w >> 26, (w >> 21) & 31, (w >> 16) & 31, hex(w & 0xFFFF))
head = ["add $6,$4,$0","lw $7,0($6)","addi $8,$0,0","addi $9,$0,1","lp:","slt $10,$8,$5","beq $10,$0,lb2","lw $10,0($6)","slt $11,$7,$10"]
tail = ["lb1: addi $6,$6,4","addi $8,$8,1","j lp","lb2:"]
opts = {'a': ["beq $11,$0,lb1","and $11,$10,$9","beq $11,$0,lb1","add $7,$0,$10"],
        'b': ["bne $11,$0,lb1","and $11,$10,$9","bne $11,$0,lb1","add $7,$0,$10"],
        'c': ["beq $11,$0,lb1","and $11,$10,$9","bne $11,$0,lb1","add $10,$0,$7"],
        'd': ["bne $11,$0,lb1","and $11,$10,$9","beq $11,$0,lb1","add $7,$0,$10"],
        'e': ["beq $11,$0,lb1","and $11,$10,$9","beq $11,$0,lb1","add $10,$0,$7"]}
import random
random.seed(1); res[20] = {}
tests = [[random.randint(0, 9) for _ in range(6)] for _ in range(40)]
for k, mid in opts.items():
    ok = True
    for arr in tests:
        mem = {0x1000 + 4*i: v for i, v in enumerate(arr)}
        Rr, _, _ = run(head + mid + tail, {4: 0x1000, 5: len(arr)}, mem)
        a = arr[0]
        for v in arr:
            if a < v and v % 2 == 1: a = v
        ok &= (Rr[7] == a)
    res[20][k] = ok
for k in sorted(res): print(k, res[k])
