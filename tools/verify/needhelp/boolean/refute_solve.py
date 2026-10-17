import json, re, itertools, sys
D=json.load(open('dump.json',encoding='utf8'))
Q={q['id']:q for L in D['levels'] for q in L['questions']}
# own parser: or(+) < xor < and(.,juxt) < not
def tok(s):
    s=s.replace(r'\,','').replace(r'\ ',' ').replace(r'\cdot','*').replace(r'\oplus','^').replace(r'\Sigma','S')
    out=[];i=0
    while i<len(s):
        c=s[i]
        if c.isspace(): i+=1
        elif s.startswith(r'\bar',i):
            i+=4
            while s[i]==' ':i+=1
            if s[i]=='{': 
                j=s.index('}',i); out+=['~','(',*tok(s[i+1:j]),')'];i=j+1
            else: out+=['~',s[i]];i+=1
        elif s.startswith(r'\overline',i):
            i+=9
            d=0;j=i
            while True:
                if s[j]=='{':d+=1
                elif s[j]=='}':
                    d-=1
                    if d==0:break
                j+=1
            out+=['~','(',*tok(s[i+1:j]),')'];i=j+1
        elif c in 'ABCDE01': out.append(c);i+=1
        elif c in '+*^()=~': out.append(c);i+=1
        elif c in '{}': i+=1
        else: raise Exception('tok '+s[i:])
    return out
class P:
    def __init__(s,t): s.t=t;s.i=0
    def pk(s): return s.t[s.i] if s.i<len(s.t) else None
    def nx(s): s.i+=1;return s.t[s.i-1]
    def or_(s):
        a=s.xor()
        while s.pk()=='+': s.nx(); b=s.xor(); a=('+',a,b)
        return a
    def xor(s):
        a=s.and_()
        while s.pk()=='^': s.nx(); b=s.and_(); a=('^',a,b)
        return a
    def and_(s):
        a=s.not_()
        while s.pk()=='*' or (s.pk() is not None and s.pk() not in '+^)='):
            if s.pk()=='*': s.nx()
            b=s.not_(); a=('*',a,b)
        return a
    def not_(s):
        if s.pk()=='~': s.nx(); return ('~',s.not_())
        return s.atom()
    def atom(s):
        t=s.nx()
        if t=='(': e=s.or_(); assert s.nx()==')'; return e
        return t
def ev(e,env):
    if isinstance(e,str): return int(e) if e in '01' else env[e]
    if e[0]=='~': return 1-ev(e[1],env)
    a,b=ev(e[1],env),ev(e[2],env)
    return {'+':a|b,'*':a&b,'^':a^b}[e[0]]
def parse(s):
    t=tok(s); p=P(t); e=p.or_(); assert p.i==len(t),(s,t[p.i:]); return e
V='ABCDE'
def table(e,vs):
    return tuple(ev(e,dict(zip(vs,b))) for b in itertools.product((0,1),repeat=len(vs)))
def vars_of(*es):
    return [v for v in V if any(v in json.dumps(x) for x in es)]
def eq(a,b,vs=None):
    vs=vs or vars_of(a,b); return table(a,vs)==table(b,vs)
def stem_expr(q):
    m=re.search(r'\$(.*?)\$',q['question']); return m.group(1)
A={}
def opt(q): return {o['id']:o['value'] for o in q['options']}
def ans_equal(qid, stem=None):
    q=Q[qid]; e=parse(stem or stem_expr(q)); good=[]
    for k,v in opt(q).items():
        if eq(e,parse(v)): good.append(k)
    assert len(good)==1,(qid,good); A[qid]=good[0]
def ans_not_true(qid):
    q=Q[qid]; bad=[]
    for k,v in opt(q).items():
        l,r=v.split('=',1); 
        if not eq(parse(l),parse(r)): bad.append(k)
    assert len(bad)==1,(qid,bad); A[qid]=bad[0]
def sigma(tbl):  # minterm indices, first var high
    return [i for i,x in enumerate(tbl) if x]
def ans_sigma(qid, expr, vs):
    q=Q[qid]; want=sigma(table(parse(expr),vs)); good=[]
    for k,v in opt(q).items():
        nums=[int(x) for x in re.findall(r'\d+',v)]
        if sorted(nums)==want: good.append(k)
    assert len(good)==1,(qid,want,good); A[qid]=good[0]
# C01 (binary options: a first listed)
e=parse('A+B*C'); assert ev(e,dict(A=1,B=0,C=0))==1; A['C01-Q1']='a'
e=parse('~A+B*C'); assert ev(e,dict(A=1,B=1,C=0))==0; A['C01-Q2']='a'
e=parse('A*~B*C'); g=[k for k,v in opt(Q['C01-Q3']).items() if ev(e,dict(zip('ABC',map(int,re.findall(r'\d',v)))))==1]; assert len(g)==1; A['C01-Q3']=g[0]
A['C01-Q4']='b'; assert 2**4==16
assert sum(table(parse('A+B*C'),'ABC'))==5; A['C01-Q5']='c'
# C02
assert 1^1^1==1; A['C02-Q1']='b'
ans_equal('C02-Q2'); ans_equal('C02-Q3'); ans_equal('C02-Q4'); 
assert 1^1^1^0==1; A['C02-Q5']='b'
ans_equal('C02-Q6')
# C03
for i in range(1,7):
    if i==5: ans_not_true('C03-Q5')
    else: ans_equal(f'C03-Q{i}')
# C04
ans_equal('C04-Q1'); ans_equal('C04-Q2'); ans_equal('C04-Q3'); ans_not_true('C04-Q4'); ans_equal('C04-Q5')
l=parse('~(A^B)*C'); r=parse('~A*C^~B*C')
g=[k for k,v in opt(Q['C04-Q6']).items() if ev(l,dict(zip('ABC',map(int,re.findall(r'\d',v)))))!=ev(r,dict(zip('ABC',map(int,re.findall(r'\d',v)))))]; assert len(g)==1,g; A['C04-Q6']=g[0]
# C05
l=parse('(A^B)+(A^C)'); r=parse('A^(B+C)')
g=[k for k,v in opt(Q['C05-Q1']).items() if ev(l,dict(zip('ABC',map(int,re.findall(r'\d',v)))))!=ev(r,dict(zip('ABC',map(int,re.findall(r'\d',v)))))]; assert len(g)==1,g; A['C05-Q1']=g[0]
l=parse('A^(B*C)'); r=parse('(A^B)*(A^C)')
n=sum(a!=b for a,b in zip(table(l,'ABC'),table(r,'ABC'))); print('C05-Q2 diff count',n)
A['C05-Q2']={1:'a',2:'b',4:'c',0:'d'}[n]
n=sum(table(parse('A^B^C'),'ABC')); print('C05-Q3',n); A['C05-Q3']={3:'a',4:'b',5:'c',2:'d'}[n]
ans_not_true('C05-Q4')
# Q5: two agreeing points don't imply equivalence -> c
A['C05-Q5']='c'
# C06
assert int('101',2)==5; A['C06-Q1']='a'
ans_sigma('C06-Q2','~(A^B)','AB'); ans_sigma('C06-Q3','A^B^C','ABC'); ans_sigma('C06-Q4','A+B*C','ABC')
n=sum(table(parse('(A^B)*C'),'ABC')); print('C06-Q5',n); A['C06-Q5']={1:'a',2:'b',3:'c',4:'d'}[n]
ans_sigma('C06-Q6','~A^B','AB')
# C07
for i in (1,2,3,5): ans_equal(f'C07-Q{i}')
ans_not_true('C07-Q4'); ans_not_true('C07-Q6')
json.dump(A,open('refute_answers.json','w'),indent=1); print(len(A))
