import itertools
from fractions import Fraction as F
import struct
M=0xFFFFFFFF
res={}
def sx16(v): return v-0x10000 if v&0x8000 else v
# Q1
def xor(a,b): return a^b
def n(a): return 1-a
def opts1():
    A=lambda a,b,c:(((xor(n(a),b)|xor(a,c)) & xor(c,n(b))), n(xor(n(b),c)))
    B=lambda a,b,c:((xor(a,b)&(xor(n(a),b)|xor(a,n(c)))), (n(a)&b&n(c))|(a&n(b)&c))
    C=lambda a,b,c:((xor(a,n(b))&(xor(a,b)|xor(a,c))), (n(a)&n(b)&c)|(a&b&n(c)))
    D=lambda a,b,c:(((xor(a,b)|xor(a,c))&xor(c,b)), n((n(b)&n(c))|(b&c)))
    bad=[]
    for name,f in zip("abcd",(A,B,C,D)):
        if any(f(*t)[0]!=f(*t)[1] for t in itertools.product((0,1),repeat=3)): bad.append(name)
    return bad
res[1]=("false eq", opts1(), ["a"])
# Q2
r1=sx16(0xAAAA)&M; r1=(r1+r1)&M; r5=(r1+(sx16(0xAAAA)&M))&M; r5=(r5+2)&M
res[2]=("$5", hex(r5), "options FFFE0000 key a")
# Q3
x=-F(1,384)
b=struct.unpack('>I',struct.pack('>f',float(x)))[0]
res[3]=("fp32", hex(b), "BB2AAAAB")
# Q4
y=F(0); 
# 0.22 21 21...5
v=F(2,5)+F(2,25)+sum(F(2,5**(3+2*k))+F(1,5**(4+2*k)) for k in range(60))
res[4]=("val", float(v), float(F(299,600)), [float(F(a,b)) for a,b in [(299,600),(1395,3000),(1493,3000),(13,24),(11,24),(251,600)]])
# Q5
def possible(num):  # value=num as Fraction; X 13-bit 2c with 6 frac bits
    N=num*64
    if N.denominator!=1: return False
    N=int(N)
    if not -4096<=N<=4095: return False
    bits=N&0x1FFF  # bit k of bits = X_(k-6)
    X=lambda i: (bits>>(i+6))&1
    return X(4)==1 and X(2)==1 and X(-2)==0
q5=[F(51)+F(39,64),-(4+F(14,32)),-(49+F(27,64)),63+F(9,16),-(33+F(15,32)),-(46+F(11,32))]
res[5]=("possible", [possible(v) for v in q5])
# Q6: -2^14 .. 2^14-1/64 : N from -2^20 to 2^20-1 -> 21 bits total, 15 int, 6 frac
res[6]=("bits",21,15)
# Q9
q=[0,1,0,1]
for i in range(5):
    d=q[0]^q[1]^q[3]
    q=[d]+q[:3]  # Q3<-D3, Q2<-Q3,... wait shift direction
res9=q
# D3 = Q3^Q2^Q0 ; Q2<-Q3? chain: D3 input at left; Q3 -> D2 -> Q2 ... shift right
q=[0,1,0,1]
for i in range(5):
    d=q[0]^q[1]^q[3]
    q=[d,q[0],q[1],q[2]]
res[9]=("Q3..Q0",q,"[0,1,1,0]")
# Q10
for h in ["830F14F6","F2FF16F8","93FE28FE","8326140C","00FF6000","E0FF6348"]:
    ones=bin(int(h,16)).count("1")
    print("Q10",h,"ones",ones,"zeros",32-ones)
# Q11
def b(s,base):
    ip,_,fp=s.partition('.')
    v=F(int(ip,base)) if ip else F(0)
    for i,ch in enumerate(fp): v+=F(int(ch,base),base**(i+1))
    return v
q11={
 "a": (b("1011.1101",2), b("12.4",8)+b("1.01",4)),
 "b": (b("1A7",16), 2*b("266",8)+b("323",4)),
 "c": (b("2201.125",10), b("4231.1",8)),
 "d": (b("187",9), b("7",8)+9*b("122",3)),
}
res[11]=("equal?",{k:v[0]==v[1] for k,v in q11.items()},{k:(float(v[0]),float(v[1])) for k,v in q11.items()})
# Q12
def s8(v): return v-256 if v&128 else v
q12={"a":s8(0b10100011)-s8(0b00011001),"b":s8(0b01011111)-s8(0b11001001),"c":s8(0b10101111)+s8(0b10111001),"d":s8(0b11000101)-s8(0b01100100),"e":s8(0b01001111)-s8(0b11000011)}
res[12]=("noovf",[k for k,v in q12.items() if -128<=v<=127],q12)
# Q14
def f14(a,bb,c,d):
    nd=1-d
    inp=[nd,0,nd,nd,1,d,1,1]   # 000..111 ; wiring read from figure
    return inp[a*4+bb*2+c]
def ev(fn):
    return [fn(a,bb,c,d) for a,bb,c,d in itertools.product((0,1),repeat=4)]
base=ev(lambda a,bb,c,d: f14(a,bb,c,d))
O={"a":lambda a,b_,c,d: (n(c)&n(d))|(b_&n(d))|(a&d),"b":lambda a,b_,c,d:(n(c)&n(d))|b_,"c":lambda a,b_,c,d:(n(c)&n(d))|a|(b_&n(d)),"d":lambda a,b_,c,d:(n(c)&d)|(b_&n(d))|(a&d)}
res[14]=("match",[k for k,fn in O.items() if ev(fn)==base])
# Q15
def f15(a,bb,c,d):
    ab=a*2+bb
    X,Y={0:(0,0),1:(1,0),2:(1,1),3:(1,0)}[ab]
    # mux inputs per figure: wiring per solution
    cd=c*2+d
    # derived from solution: F=(X'Y')(C'D'+CD')+(XY')C'+(XY)D
    return None
def sol15(a,bb,c,d):
    # solution handwritten: AB=00: XY=00 -> F= (C'D'+CD')= D'; AB=01 or 11: XY=10 -> C'; AB=10: XY=11 -> D
    ab=a*2+bb
    if ab==0: return n(d)
    if ab in (1,3): return n(c)
    return d
tt=ev(sol15)
rows={
"a":["0000","0010","1001","1011","0100","0101","1100","1101"],
"b":["0001","0010","1000","1011","0100","0101","1100","1101"],
"c":["0000","0010","1001","1011","0100","0111","1100","1101"],
"d":["0000","0010","1000","1011","0100","0101","1100","1111"],
}
for k,r in rows.items():
    mt={int(x,2) for x in r}
    print("Q15",k,[i for i in range(16) if (i in mt)!=bool(tt[i])])
# Q17
pc=0x400330; tgt=0x400550
off=(tgt-(pc+4))>>2
ins=(4<<26)|(19<<21)|(5<<16)|(off&0xFFFF)
res[17]=("beq",hex(ins),off)
# Q19
w=0x03DD082A
print("Q19",w>>26,(w>>21)&31,(w>>16)&31,(w>>11)&31,(w>>6)&31,w&63)
for k,v in res.items(): print("Q",k,v)
