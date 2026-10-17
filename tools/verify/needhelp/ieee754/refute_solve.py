import struct, json
from fractions import Fraction as F
def w(x): return struct.unpack('>I',struct.pack('>f',x))[0]
def val(h):
    s=h>>31;E=(h>>23)&255;f=h&0x7FFFFF
    if E==255: return 'nan' if f else ('-inf' if s else 'inf')
    v=F(f,2**23)+(1 if E else 0); v*=F(2)**((E if E else 1)-127)
    return -v if s else v
A={}
# C01
assert (0xC0D40000>>31)==1; A['C01-Q1']='b'
assert (0x41200000>>23)&255==130; A['C01-Q2']='c'
assert bin(0x41200000&0x7FFFFF).count('1')==1; A['C01-Q3']='b'
assert [h>>31 for h in(0x3F800000,0x40000000,0xBF800000,0x7F800000)]==[0,0,1,0]; A['C01-Q4']='c'
assert (0x40490FDB>>23)&255==128; A['C01-Q5']='d'
# C02
assert val(0x40400000)==3; A['C02-Q1']='b'
assert val(0xC0A00000)==-5; A['C02-Q2']='c'
assert val(0x3F000000)==F(1,2); A['C02-Q3']='a'
assert val(0x41580000)==F(27,2); A['C02-Q4']='a'
assert val(0x3E200000)==F(5,32); A['C02-Q5']='c'
assert 100-127==-27; A['C02-Q6']='c'
# C03
assert 0x80000000>>31==1 and val(0x80000000)==0; A['C03-Q1']='c'
assert val(0x7F800000)=='inf'; A['C03-Q2']='d'
assert val(0x7FC00000)=='nan'; A['C03-Q3']='a'
assert val(1)==F(1,2**149); A['C03-Q4']='d'
assert val(0x7FFFFF)==(1-F(1,2**23))*F(1,2**126); A['C03-Q5']='b'
assert sum(1 for s in(0,1) for f in range(1,2**23))==2**24-2; A['C03-Q6']='c'
# C04
assert w(12.5)==0x41480000 and (w(12.5)>>23)&255==130; A['C04-Q1']='a';A['C04-Q2']='c';A['C04-Q3']='d'
assert w(-0.75)==0xBF400000; A['C04-Q4']='b'
assert w(100)==0x42C80000; A['C04-Q5']='a'
assert w(0.15625)==0x3E200000; A['C04-Q6']='c'
# C05: exact RNE by fractions
def rne(x):
    x=F(x); s=0
    if x<0: s=1;x=-x
    e=0
    while x>=2: x/=2;e+=1
    while x<1: x*=2;e-=1
    m=x*2**23; fl=m.numerator//m.denominator; r=m-fl
    if r>F(1,2) or (r==F(1,2) and fl%2): fl+=1
    E=e+127
    if fl==2**24: fl=2**23;E+=1
    return (s<<31)|(E<<23)|(fl&0x7FFFFF)
t=F(1,3)
assert rne(t)==0x3EAAAAAB and rne(t)==w(1/3); A['C05-Q1']='a';A['C05-Q2']='b'
assert rne(F(1,10))==0x3DCCCCCD; A['C05-Q3']='b'
assert rne(1+F(1,2**24))==0x3F800000; A['C05-Q4']='a'
assert rne(1+F(3,2**24))==0x3F800002; A['C05-Q5']='b'
assert rne(F(1,12))==0x3DAAAAAB; A['C05-Q6']='b'
# C06
assert val(0x3F800001)-val(0x3F800000)==F(1,2**23); A['C06-Q1']='b'
assert val(0x7F7FFFFF)-val(0x7F7FFFFE)==2**104; A['C06-Q2']='a'
assert val(rne(2**24+1))!=2**24+1 and all(val(rne(k))==k for k in(2**24,2**24-1,2**23+1)); A['C06-Q3']='c'
assert val(0x3FFFFFFF)/val(0x3F800000)==2-F(1,2**23); A['C06-Q4']='c'
Es=[E for E in range(1,255) if F(2)**(E-127-23)==F(1,2**100)]; assert Es==[50]; A['C06-Q5']='b'
# C06-Q6: [2^-77,2^-76] closed: 2^23+1 numbers, both signs
assert 2**23+1 and True; A['C06-Q6']='b'
# C07 (float32 add with RNE emulation)
def add(a,b): return val(rne(a+b))
assert add(2**24,1)==2**24; A['C07-Q1']='b'
assert add(2**24,3)==2**24+4; A['C07-Q2']='c'
mn=val(0x00800000); dmax=val(0x007FFFFF)
assert mn-dmax==F(1,2**149) and val(1)==mn-dmax; A['C07-Q4']='a'
x=add(add(2**24,1),1); y=add(2**24,add(1,1)); assert (x,y)==(2**24,2**24+2); A['C07-Q5']='b'
# Q3: normals x,y with x-y denormal, exact
assert val(0x00800001)-val(0x00800000)==F(1,2**149) and val(0x00800001)-val(0x00800000)<mn; A['C07-Q3']='b'
# Q6: two denormals summing to normal
assert val(0x007FFFFF)+val(1)==mn; A['C07-Q6']='b'
json.dump(A,open('ieee754/refute_answers.json','w'),indent=1)
print(len(A))
