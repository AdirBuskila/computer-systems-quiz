import json,re
D=json.load(open('dump.json',encoding='utf8'))
Q={q['id']:q for L in D['levels'] for q in L['questions']}
names='zero at v0 v1 a0 a1 a2 a3 t0 t1 t2 t3 t4 t5 t6 t7 s0 s1 s2 s3 s4 s5 s6 s7 t8 t9 k0 k1 gp sp fp ra'.split()
R={n:i for i,n in enumerate(names)}; R['s8']=30
def reg(x):
    x=x.strip().replace(chr(92),'').lstrip('$')
    if x.isdigit(): return int(x)
    return R[x]
FN=dict(add=0x20,sub=0x22,and_=0x24,or_=0x25,xor=0x26,slt=0x2a)
OP=dict(addi=8,ori=13,lw=35,sw=43,beq=4,bne=5,j=2,lui=15,andi=12)
LENIENT=False
def num(s): return int(s,0)
def asm(line,pc=0,label=None):
    line=line.strip().replace(chr(92),''); m=line.split(None,1); op=m[0]; a=[x.strip() for x in m[1].split(',')]
    if op in('add','sub','and','or','xor','slt'):
        rd,rs,rt=map(reg,a); return (0<<26)|(rs<<21)|(rt<<16)|(rd<<11)|FN[op if op not in('and','or') else op+'_']
    if op in('addi','ori','andi'):
        rt,rs=reg(a[0]),reg(a[1]); i=num(a[2]); 
        if op=='addi': assert -32768<=i<=32767,'addi imm range'
        else:
            if LENIENT: assert -32768<=i<=65535
            else: assert 0<=i<=65535,'ori imm negative'
        return (OP[op]<<26)|(rs<<21)|(rt<<16)|(i&0xffff)
    if op in('lw','sw'):
        rt=reg(a[0]); mm=re.match(r'(-?\w+)\((.*)\)',a[1]); i=num(mm.group(1)); rs=reg(mm.group(2)); assert -32768<=i<=32767,'offset range'
        return (OP[op]<<26)|(rs<<21)|(rt<<16)|(i&0xffff)
    if op in('beq','bne'):
        rs,rt=reg(a[0]),reg(a[1]); off=(label-(pc+4))//4; return (OP[op]<<26)|(rs<<21)|(rt<<16)|(off&0xffff)
    if op=='j': return (2<<26)|((label>>2)&0x3ffffff)
    raise Exception(op)
def hexs(w): return '0x%08X'%w
def opts(qid): return {o['id']:o['value'] for o in Q['mips_enc-'+qid]['options']}
def stemcode(qid):
    return re.search(r'`([a-z]+ [^`]*)`',Q['mips_enc-'+qid]['question']).group(1)
def pick_hex(qid,w):
    g=[k for k,v in opts(qid).items() if v.strip('` ').upper().replace('0X','0x')==hexs(w).replace('0X','0x') or v.strip('` ').lower()==hexs(w).lower()]
    assert len(g)==1,(qid,hexs(w),g); return g[0]
A={}
def put(qid,v): A['mips_enc-'+qid]=v
def decode_q(qid,w,pc=0,label=None):
    g=[]
    for k,v in opts(qid).items():
        try:
            if asm(re.sub(r'^`|`$','',v.strip()),pc,label)==w: g.append(k)
        except AssertionError: pass
    assert len(g)==1,(qid,hexs(w),g); put(qid,g[0])
def stem_hex(qid): return int(re.search(r'0x[0-9A-Fa-f]{8}',Q['mips_enc-'+qid]['question']).group(0),16)
# C01
put('C01-Q1','b'); put('C01-Q2','c'); put('C01-Q3','a'); put('C01-Q4','d')
g=[k for k,v in opts('C01-Q5').items() if int(v.strip('`'),2)==reg('t2')]; assert len(g)==1; put('C01-Q5',g[0])
g=[k for k,v in opts('C01-Q6').items() if reg(v.strip('` '))==22]; assert len(g)==1; put('C01-Q6',g[0])
# C02
assert reg('t1')==9; put('C02-Q1','b')
for q in ['C02-Q2','C02-Q3','C02-Q5','C02-Q6']:
    put(q,pick_hex(q,asm(stemcode(q))))
w=(0<<26)|(9<<21)|(10<<16)|(16<<11)|(0<<6)|0x25; put('C02-Q4',pick_hex('C02-Q4',w))
# C03
for q in ['C03-Q%d'%i for i in range(1,7)]: decode_q(q,stem_hex(q))
# C04
for q in ['C04-Q1','C04-Q2','C04-Q3','C04-Q4','C04-Q5']: put(q,pick_hex(q,asm(stemcode(q))))
# Q6: word index 5 -> byte 20, sw $fp
assert asm('sw $fp, 20($t6)')==asm('sw $fp, 5*4($t6)'.replace('5*4','20')); put('C04-Q6','a')
# C05
for q in ['C05-Q1','C05-Q2','C05-Q3','C05-Q4','C05-Q5']: decode_q(q,stem_hex(q))
assert 0x8F>>2==35 ; put('C05-Q6','b')
# C06
def off(pc,L): return (L-(pc+4))//4
o=off(0x400100,0x400140); assert o==15; g=[k for k,v in opts('C06-Q1').items() if v.strip('` ')==str(o)]; put('C06-Q1',g[0])
o=off(0x400200,0x400180)&0xffff; assert o==0xFFDF; put('C06-Q2',[k for k,v in opts('C06-Q2').items() if int(v.strip('` '),16)==o][0])
put('C06-Q3',pick_hex('C06-Q3',asm('beq $s0, $s1, L',0x400400,0x400410)))
w=0x1509FFFB; imm=w&0xffff; imm-=65536*(imm>>15); t=0x400050+4+4*imm; assert w>>26==5
put('C06-Q4',[k for k,v in opts('C06-Q4').items() if int(v.strip('` '),16)==t][0])
put('C06-Q5',pick_hex('C06-Q5',asm('j L',0x400020,0x400100)))
w=0x08000340; t=((0x10000200+4)&0xF0000000)|((w&0x3ffffff)<<2); put('C06-Q6',[k for k,v in opts('C06-Q6').items() if int(v.strip('` '),16)==t][0])
# C07 (own simulator, 32-bit, addi sign-extends, flag overflow trap)
M=0xffffffff
def sx(i): return i-65536 if i&0x8000 else i
def sim(code):
    r={'$0':0}; trap=False
    for ln in code:
        op,rest=ln.split(None,1); a=[x.strip() for x in rest.split(',')]
        if op=='lui': r[a[0]]=(num(a[1])<<16)&M
        elif op=='ori': r[a[0]]=r.get(a[1],0)|(num(a[2])&0xffff)
        elif op=='addi':
            i=num(a[2]); i=sx(i&0xffff); v=r.get(a[1],0); sv=v-(1<<32) if v>>31 else v
            res=sv+i
            if not -2**31<=res<2**31: trap=True
            r[a[0]]=res&M
    return r,trap
def hx(s): return int(s.strip('` '),16)
r,t=sim(['lui $t0, 0x1234','ori $t0, $t0, 0x5678']); put('C07-Q1',[k for k,v in opts('C07-Q1').items() if hx(v)==r['$t0']][0])
r,t=sim(['addi $t1, $0, 0xAAAA']); put('C07-Q2',[k for k,v in opts('C07-Q2').items() if hx(v)==r['$t1']][0])
r,t=sim(['lui $t0, 0x00FF','addi $t0, $t0, 0x8010']); assert not t; put('C07-Q3',[k for k,v in opts('C07-Q3').items() if hx(v)==r['$t0']][0])
r,t=sim(['lui $t0, 0x00FF','ori $t0, $t0, 0x8010']); put('C07-Q4',[k for k,v in opts('C07-Q4').items() if hx(v)==r['$t0']][0])
g=[]
for k,v in opts('C07-Q5').items():
    lines=[l.strip() for l in v.replace('```asm','').replace('```','').strip().splitlines()]
    lines=[re.sub(r'\s+',' ',l) for l in lines]
    r,t=sim(lines)
    if r['$t0']==0xABCD8000 and not t: g.append(k)
assert len(g)==1; put('C07-Q5',g[0])
r,t=sim(['lui $t0, 0x8000','addi $t0, $t0, -1']); print('C07-Q6 result',hex(r['$t0']),'OVERFLOW TRAP' if t else ''); put('C07-Q6',[k for k,v in opts('C07-Q6').items() if hx(v)==r['$t0']][0])
json.dump(A,open('refute_answers.json','w'),indent=1); print(len(A))
