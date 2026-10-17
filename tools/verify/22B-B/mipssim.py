# Tiny MIPS interpreter for key checks (ASCII only). Programs: list of lines "label: op args" or "op args".
import re
M = 0xFFFFFFFF
REG = {'zero':0,'at':1,'v0':2,'v1':3,'a0':4,'a1':5,'a2':6,'a3':7,'t0':8,'t1':9,'t2':10,'t3':11,'t4':12,'t5':13,'t6':14,'t7':15,
       's0':16,'s1':17,'s2':18,'s3':19,'s4':20,'s5':21,'s6':22,'s7':23,'t8':24,'t9':25,'k0':26,'k1':27,'gp':28,'sp':29,'fp':30,'ra':31}
def r(x):
    x = x.strip().lstrip('$')
    return int(x) if x.isdigit() else REG[x]
def s32(v): v &= M; return v - (1 << 32) if v & 0x80000000 else v
def run(lines, regs=None, mem=None, maxsteps=100000):
    R = [0]*32
    for k, v in (regs or {}).items(): R[k] = v & M
    mem = dict(mem or {})
    prog, labels = [], {}
    for ln in lines:
        ln = ln.split('#')[0].strip()
        if not ln or ln == '@@@@@@@': continue
        while re.match(r'^\w+:', ln):
            lab, ln = ln.split(':', 1); labels[lab] = len(prog); ln = ln.strip()
        if ln: prog.append(ln)
    pc = 0; steps = 0
    while pc < len(prog) and steps < maxsteps:
        steps += 1
        op, _, rest = prog[pc].partition(' '); a = [x.strip() for x in rest.split(',')] if rest else []
        pc += 1
        if op == 'add': R[r(a[0])] = (R[r(a[1])] + R[r(a[2])]) & M
        elif op == 'sub': R[r(a[0])] = (R[r(a[1])] - R[r(a[2])]) & M
        elif op == 'and': R[r(a[0])] = R[r(a[1])] & R[r(a[2])]
        elif op == 'or': R[r(a[0])] = R[r(a[1])] | R[r(a[2])]
        elif op == 'xor': R[r(a[0])] = R[r(a[1])] ^ R[r(a[2])]
        elif op == 'slt': R[r(a[0])] = int(s32(R[r(a[1])]) < s32(R[r(a[2])]))
        elif op == 'addi': R[r(a[0])] = (R[r(a[1])] + int(a[2], 0)) & M
        elif op == 'lw':
            m = re.match(r'(-?\w+)\((.+)\)', a[1]); R[r(a[0])] = mem.get((R[r(m.group(2))] + int(m.group(1), 0)) & M, 0)
        elif op == 'sw':
            m = re.match(r'(-?\w+)\((.+)\)', a[1]); mem[(R[r(m.group(2))] + int(m.group(1), 0)) & M] = R[r(a[0])]
        elif op == 'beq':
            if R[r(a[0])] == R[r(a[1])]: pc = labels[a[2]]
        elif op == 'bne':
            if R[r(a[0])] != R[r(a[1])]: pc = labels[a[2]]
        elif op == 'j': pc = labels[a[0]]
        else: raise ValueError(op)
        R[0] = 0
    return R, mem, steps
