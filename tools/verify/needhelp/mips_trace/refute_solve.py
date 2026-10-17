import json,re,random
D=json.load(open('dump.json',encoding='utf8'))
Q={q['id']:q for L in D['levels'] for q in L['questions']}
M=0xffffffff
def s32(v):
    v&=M
    return v-(1<<32) if v>>31 else v
class Trap(Exception): pass
def parse(code):
    prog=[];labels={}
    for ln in code.strip().splitlines():
        ln=ln.strip()
        if not ln: continue
        while True:
            m=re.match(r'^(\w+):\s*(.*)$',ln)
            if not m: break
            labels[m.group(1)]=len(prog); ln=m.group(2)
        if ln: prog.append(ln)
    return prog,labels
def run(code,regs=None,mem=None,maxsteps=100000,strict=False):
    prog,labels=parse(code); r=[0]*32
    for k,v in (regs or {}).items(): r[k]=v&M
    mem=dict(mem or {}); pc=0; n=0
    def R(x): return int(x.strip().lstrip('$'))
    while pc<len(prog):
        n+=1
        if n>maxsteps: raise Exception('loop')
        ln=prog[pc]; op,rest=(ln.split(None,1)+[''])[:2]; a=[x.strip() for x in rest.split(',')]; npc=pc+1
        def W(i,v):
            if i!=0: r[i]=v&M
        if op in('add','sub'):
            x,y=s32(r[R(a[1])]),s32(r[R(a[2])]); v=x+y if op=='add' else x-y
            if strict and not -2**31<=v<2**31: raise Trap(ln)
            W(R(a[0]),v)
        elif op=='addi':
            x=s32(r[R(a[1])]); v=x+int(a[2],0)
            if strict and not -2**31<=v<2**31: raise Trap(ln)
            W(R(a[0]),v)
        elif op=='and': W(R(a[0]),r[R(a[1])]&r[R(a[2])])
        elif op=='slt': W(R(a[0]),1 if s32(r[R(a[1])])<s32(r[R(a[2])]) else 0)
        elif op=='beq':
            if r[R(a[0])]==r[R(a[1])]: npc=labels[a[2]]
        elif op=='bne':
            if r[R(a[0])]!=r[R(a[1])]: npc=labels[a[2]]
        elif op=='j': npc=labels[a[0]]
        elif op in('lw','sw'):
            m=re.match(r'(-?\d+)\(\$(\d+)\)',a[1]); addr=(r[int(m.group(2))]+int(m.group(1)))&M
            assert addr%4==0
            if op=='lw': W(R(a[0]),mem.get(addr,0))
            else: mem[addr]=r[R(a[0])]
        else: raise Exception(op)
        pc=npc
    return r,mem,n
def blocks(txt): return re.findall(r'```(?:asm|c)\n(.*?)```',txt,re.S)
def qcode(qid): return blocks(Q[qid]['question'])[0]
def opts(qid): return {o['id']:o['value'] for o in Q[qid]['options']}
def optcode(qid): return {k:blocks(v)[0] for k,v in opts(qid).items()}
A={}
def put(q,v): A[q]=v
def numopt(qid,val):
    g=[k for k,v in opts(qid).items() if re.fullmatch(r'-?\d+',v.strip()) and int(v)==val]
    assert len(g)==1,(qid,val,g)
    return g[0]
def pairopt(qid,st):
    g=[k for k,v in opts(qid).items() if tuple(map(int,re.findall(r'=(-?\d+)',v)))==tuple(st)]
    assert len(g)==1,(qid,st,g)
    return g[0]
# C01
r,_,_=run(qcode('C01-Q1')); put('C01-Q1',numopt('C01-Q1',s32(r[6])))
r,_,_=run(qcode('C01-Q2')); put('C01-Q2',numopt('C01-Q2',s32(r[5])))
r,_,_=run(qcode('C01-Q3'),{4:6,5:2}); put('C01-Q3',pairopt('C01-Q3',(s32(r[4]),s32(r[5]))))
r,_,_=run(qcode('C01-Q4'),{4:10}); put('C01-Q4',numopt('C01-Q4',s32(r[5])))
r,_,_=run(qcode('C01-Q5')); put('C01-Q5',numopt('C01-Q5',s32(r[6])))
# C02
def sel(qid,spec,want_fail=False):
    ok=[]
    for k,c in optcode(qid).items():
        good=True
        for _ in range(40):
            a,b=random.randint(-1000,1000),random.randint(-1000,1000)
            r,_,_=run(c,{4:a,5:b})
            if not spec(a,b,r): good=False;break
        ok.append((k,good))
    g=[k for k,x in ok if x!=want_fail]
    assert len(g)==1,(qid,ok)
    put(qid,g[0])
sel('C02-Q1',lambda a,b,r:s32(r[4])==4*a)
sel('C02-Q2',lambda a,b,r:s32(r[4])==2*a+b and s32(r[5])==b)
sel('C02-Q3',lambda a,b,r:s32(r[4])==3*a-b and s32(r[5])==b)
sel('C02-Q4',lambda a,b,r:s32(r[4])==2*a-2*b and s32(r[5])==b,want_fail=True)
sel('C02-Q5',lambda a,b,r:s32(r[4])==5*a)
# C03
r,_,_=run(qcode('C03-Q1')); put('C03-Q1',pairopt('C03-Q1',(r[6],r[7])))
r,_,_=run(qcode('C03-Q2')); put('C03-Q2',numopt('C03-Q2',r[6]))
r,_,_=run(qcode('C03-Q3')); put('C03-Q3',numopt('C03-Q3',r[6]))
r,_,n=run(qcode('C03-Q4')); put('C03-Q4',numopt('C03-Q4',n))
r,_,_=run(qcode('C03-Q5')); put('C03-Q5',numopt('C03-Q5',r[7]))
# C04
def sel2(qid,spec):
    ok=[]
    for k,c in optcode(qid).items():
        good=True
        for a,b in [(random.randint(-9,9),random.randint(-9,9)) for _ in range(60)]+[(3,3),(0,0),(-2,-2)]:
            r,_,_=run(c,{4:a,5:b,7:a,9:b})
            if not spec(a,b,r): good=False;break
        ok.append((k,good))
    g=[k for k,x in ok if x]
    assert len(g)==1,(qid,ok)
    put(qid,g[0])
sel2('C04-Q1',lambda a,b,r:s32(r[4])==(a+b if a==b else a-b))
sel2('C04-Q2',lambda a,b,r:s32(r[4])==(0 if a>b else a))
sel2('C04-Q4',lambda a,b,r:s32(r[5])==(a+b if a<=b else a-b))
def asm3(a,b):
    r,_,_=run(qcode('C04-Q3'),{4:a,5:b}); return s32(r[4]),s32(r[5])
Cm={'a':lambda a,b:(a-b,b) if a<b else (a,b-a),
    'b':lambda a,b:(a,b-a) if a<b else (a-b,b),
    'c':lambda a,b:(a,b-a) if a>=b else (a-b,b),
    'd':lambda a,b:(a,b-a) if a<=b else (a-b,b)}
txt={k:blocks(v)[0] for k,v in opts('C04-Q3').items()}
assert 'if (a < b) a = a - b' in txt['a'] and 'if (a < b) b = b - a' in txt['b'] and 'if (a >= b) b = b - a' in txt['c'] and 'if (a <= b) b = b - a' in txt['d']
pts=[(x,y) for x in range(-3,4) for y in range(-3,4)]
g=[k for k,f in Cm.items() if all(f(a,b)==asm3(a,b) for a,b in pts)]
assert len(g)==1,g
put('C04-Q3',g[0])
# C05
r,_,_=run(qcode('C05-Q1')); put('C05-Q1',numopt('C05-Q1',r[4]))
r,_,n=run(qcode('C05-Q1')); put('C05-Q2',numopt('C05-Q2',n))
c3=qcode('C05-Q3')
for n in range(0,8):
    r,_,_=run(c3,{6:n}); assert r[4]==2**n
assert opts('C05-Q3')['c'].replace(' ','').endswith('$2^n$')
put('C05-Q3','c')
c4=qcode('C05-Q4')
def asm4(n):
    r,_,_=run(c4,{5:n}); return s32(r[4]),s32(r[5])
def cdw(cond):
    def f(n):
        x=0;k=0
        while True:
            x+=2;n-=1;k+=1
            if not cond(n): break
            if k>1000: return ('inf',)
        return x,n
    return f
def cw(n):
    x=0
    while n>0:
        x+=2;n-=1
    return x,n
models={'a':cdw(lambda n:n>0),'b':cw,'c':cdw(lambda n:n>=0),'d':cdw(lambda n:n!=0)}
for k,t in {'a':'while (n > 0)','b':'while (n > 0) {','c':'while (n >= 0)','d':'while (n != 0)'}.items(): assert t in blocks(opts('C05-Q4')[k])[0]
g=[k for k,f in models.items() if all(f(n)==asm4(n) for n in range(-3,6))]
assert len(g)==1,g
put('C05-Q4',g[0])
r,_,_=run(qcode('C05-Q5')); put('C05-Q5',numopt('C05-Q5',r[7]))
# C06
base=1000; mem={base+4*i:v for i,v in enumerate([10,20,30,40,50])}
r,_,_=run(qcode('C06-Q1'),{4:base},mem); put('C06-Q1',numopt('C06-Q1',r[8]))
ok=[]
for k,c in optcode('C06-Q2').items():
    good=True
    for i in range(0,4):
        arr=[7,11,13,17,19,23]; m={4000+4*j:v for j,v in enumerate(arr)}
        try: r,m2,_=run(c,{4:4000,6:i},m)
        except AssertionError:
            good=False; continue
        exp=dict(m); exp[4000+4*i]+=1
        if m2!=exp: good=False
    ok.append((k,good))
g=[k for k,x in ok if x]
assert len(g)==1,ok
put('C06-Q2',g[0])
c6=qcode('C06-Q3'); m={2000+4*i:v for i,v in enumerate([3,1,4,1,5])}
r,_,n=run(c6,{4:2000,5:5},m); put('C06-Q3',numopt('C06-Q3',r[2])); put('C06-Q4',numopt('C06-Q4',n))
ok=[]
for k,c in optcode('C06-Q5').items():
    m={4000:100,4004:200,4008:300}
    try: r,_,_=run(c,{6:4000},m); ok.append((k,r[7]==100 and r[8]==200 and r[6]==4004))
    except AssertionError: ok.append((k,False))
g=[k for k,x in ok if x]
assert len(g)==1,ok
put('C06-Q5',g[0])
# C07
r,_,_=run(qcode('C07-Q1')); put('C07-Q1',numopt('C07-Q1',r[6]))
r,_,_=run(qcode('C07-Q2')); put('C07-Q2',numopt('C07-Q2',r[6]))
c=qcode('C07-Q3'); r,_,n=run(c); put('C07-Q3',numopt('C07-Q3',r[9]))
try: run(c,strict=True); print('C07-Q3 no trap')
except Trap as e: print('C07-Q3 strict add TRAPS at',e)
c=qcode('C07-Q4'); r,_,_=run(c,{3:0x00FF00F0}); put('C07-Q4',numopt('C07-Q4',r[8]))
try: run(c,{3:0x00FF00F0},strict=True); print('C07-Q4 no trap')
except Trap as e: print('C07-Q4 strict add TRAPS at',e)
g=[]
for k,v in opts('C07-Q5').items():
    x=int(v,16); r,_,_=run(c,{3:x})
    if r[8]==30: g.append(k)
assert len(g)==1,g
put('C07-Q5',g[0])
# C08
def fill(qid,opt_code): return qcode(qid).replace('@@@@@@@',opt_code.strip())
def sel8(qid,setup,spec,trials):
    ok=[]
    for k,c in optcode(qid).items():
        good=True
        for arr in trials:
            code=fill(qid,c); regs,m=setup(arr)
            try: r,m2,_=run(code,regs,m)
            except Exception: good=False;break
            if not spec(arr,r,m2): good=False;break
        ok.append((k,good))
    g=[k for k,x in ok if x]
    assert len(g)==1,(qid,ok)
    put(qid,g[0])
rnd=[[random.randint(-5,9) for _ in range(random.randint(1,6))] for _ in range(60)]+[[0,5,6,7,-1],[5,5,6]]
def st3(arr): return {4:4000,5:len(arr)},{4000+4*i:v&M for i,v in enumerate(arr)}
sel8('C08-Q1',st3,lambda arr,r,m:r[7]==sum(1 for x in arr if x>0),rnd)
sel8('C08-Q2',st3,lambda arr,r,m:s32(r[2])==sum(x for x in arr if x>5),rnd)
sel8('C08-Q3',st3,lambda arr,r,m:s32(r[7])==min(arr),rnd)
def spec4(arr,r,m):
    out=list(arr)
    for i in range(1,len(arr)): out[i]=out[i]+out[i-1]
    return [s32(m.get(4000+4*i,0)) for i in range(len(arr))]==out
sel8('C08-Q4',st3,spec4,rnd)
r,_,_=run(qcode('C08-Q5'),{4:4000,5:5},{4000+4*i:v for i,v in enumerate([4,7,10,3,8])}); put('C08-Q5',numopt('C08-Q5',r[7]))
json.dump(A,open('refute_answers.json','w'),indent=1); print(len(A))
