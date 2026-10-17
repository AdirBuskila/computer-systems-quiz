# -*- coding: utf-8 -*-
"""Tiny MIPS assembler / disassembler / machine-code executor (ASCII only), used to verify the mips_enc course.
Written for this course (sign-extending addi, zero-extending ori, lui, branches/jumps relative to PC+4)."""
import re
M = 0xFFFFFFFF
NAMES = ['zero','at','v0','v1','a0','a1','a2','a3','t0','t1','t2','t3','t4','t5','t6','t7',
         's0','s1','s2','s3','s4','s5','s6','s7','t8','t9','k0','k1','gp','sp','fp','ra']
REG = {n: i for i, n in enumerate(NAMES)}
RFUNCT = {'add': 32, 'sub': 34, 'and': 36, 'or': 37, 'xor': 38, 'slt': 42}
IOP = {'lw': 35, 'sw': 43, 'beq': 4, 'bne': 5, 'addi': 8, 'ori': 13, 'lui': 15}
JOP = {'j': 2, 'jal': 3}

def reg(x):
    x = x.strip().lstrip('$')
    return int(x) if x.isdigit() else REG[x]

def s16(v): v &= 0xFFFF; return v - 0x10000 if v & 0x8000 else v
def s32(v): v &= M; return v - (1 << 32) if v & 0x80000000 else v

def assemble(line, pc=0, labels=None):
    """one instruction -> 32-bit word. branch/jump targets: label or absolute number."""
    labels = labels or {}
    op, _, rest = line.strip().partition(' ')
    op = op.lower()
    a = [x.strip() for x in rest.split(',')] if rest else []
    def tgt(t):
        return labels[t] if t in labels else int(t, 0)
    if op in RFUNCT:
        rd, rs, rt = reg(a[0]), reg(a[1]), reg(a[2])
        return (rs << 21) | (rt << 16) | (rd << 11) | RFUNCT[op]
    if op in ('addi', 'ori'):
        rt, rs, imm = reg(a[0]), reg(a[1]), int(a[2], 0)
        assert -32768 <= imm <= 65535, line
        return (IOP[op] << 26) | (rs << 21) | (rt << 16) | (imm & 0xFFFF)
    if op == 'lui':
        imm = int(a[1], 0); assert 0 <= imm <= 0xFFFF
        return (15 << 26) | (reg(a[0]) << 16) | imm
    if op in ('lw', 'sw'):
        m = re.match(r'(-?\w+)\((.+)\)$', a[1])
        imm = int(m.group(1), 0); assert -32768 <= imm <= 32767
        return (IOP[op] << 26) | (reg(m.group(2)) << 21) | (reg(a[0]) << 16) | (imm & 0xFFFF)
    if op in ('beq', 'bne'):
        d = tgt(a[2]) - (pc + 4); assert d % 4 == 0
        off = d // 4; assert -32768 <= off <= 32767
        return (IOP[op] << 26) | (reg(a[0]) << 21) | (reg(a[1]) << 16) | (off & 0xFFFF)
    if op in JOP:
        t = tgt(a[0]); assert t % 4 == 0 and (t >> 28) == ((pc + 4) >> 28)
        return (JOP[op] << 26) | ((t >> 2) & 0x3FFFFFF)
    raise ValueError(line)

def disassemble(w, pc=0):
    """word -> (op, fields dict, text). branch text shows signed word offset and the target address."""
    opc, rs, rt, rd, sh, fn, imm = w >> 26, (w >> 21) & 31, (w >> 16) & 31, (w >> 11) & 31, (w >> 6) & 31, w & 63, w & 0xFFFF
    n = lambda i: '$' + NAMES[i]
    if opc == 0:
        for k, v in RFUNCT.items():
            if v == fn:
                return k, dict(rs=rs, rt=rt, rd=rd), f'{k} {n(rd)}, {n(rs)}, {n(rt)}'
        raise ValueError(hex(w))
    for k, v in IOP.items():
        if v == opc:
            if k in ('addi',): return k, dict(rs=rs, rt=rt, imm=s16(imm)), f'{k} {n(rt)}, {n(rs)}, {s16(imm)}'
            if k == 'ori': return k, dict(rs=rs, rt=rt, imm=imm), f'{k} {n(rt)}, {n(rs)}, {imm}'
            if k == 'lui': return k, dict(rt=rt, imm=imm), f'{k} {n(rt)}, {imm}'
            if k in ('lw', 'sw'): return k, dict(rs=rs, rt=rt, imm=s16(imm)), f'{k} {n(rt)}, {s16(imm)}({n(rs)})'
            return k, dict(rs=rs, rt=rt, imm=s16(imm), target=pc + 4 + 4 * s16(imm)), f'{k} {n(rs)}, {n(rt)}, {s16(imm)}'
    for k, v in JOP.items():
        if v == opc:
            t = ((pc + 4) & 0xF0000000) | ((w & 0x3FFFFFF) << 2)
            return k, dict(target=t), f'{k} {t:#x}'
    raise ValueError(hex(w))

def run_words(words, regs=None, mem=None, base=0, maxsteps=10000):
    """execute machine code words (decoded from bits). returns regs list."""
    R = [0] * 32
    for k, v in (regs or {}).items(): R[k] = v & M
    mem = dict(mem or {})
    pc = base; steps = 0
    while 0 <= (pc - base) // 4 < len(words) and steps < maxsteps:
        steps += 1
        w = words[(pc - base) // 4]
        op, f, _ = disassemble(w, pc)
        npc = pc + 4
        if op in RFUNCT:
            x, y = R[f['rs']], R[f['rt']]
            R[f['rd']] = {'add': x + y, 'sub': x - y, 'and': x & y, 'or': x | y, 'xor': x ^ y, 'slt': int(s32(x) < s32(y))}[op] & M
        elif op == 'addi': R[f['rt']] = (R[f['rs']] + f['imm']) & M
        elif op == 'ori': R[f['rt']] = R[f['rs']] | f['imm']
        elif op == 'lui': R[f['rt']] = (f['imm'] << 16) & M
        elif op == 'lw': R[f['rt']] = mem.get((R[f['rs']] + f['imm']) & M, 0)
        elif op == 'sw': mem[(R[f['rs']] + f['imm']) & M] = R[f['rt']]
        elif op == 'beq':
            if R[f['rs']] == R[f['rt']]: npc = f['target']
        elif op == 'bne':
            if R[f['rs']] != R[f['rt']]: npc = f['target']
        elif op == 'j': npc = f['target']
        else: raise ValueError(op)
        R[0] = 0; pc = npc
    return R

def run_asm(lines, regs=None):
    return run_words([assemble(l) for l in lines], regs)

if __name__ == '__main__':
    assert assemble('add $t0, $s1, $s2') == 0x02324020
    assert disassemble(0x8D090004)[2] == 'lw $t1, 4($t0)'
    assert assemble('beq $t0, $t1, 0x400040', 0x400020) == 0x11090007
    assert run_asm(['lui $2, 0x1234', 'addi $2, $2, 0x8000'])[2] == 0x12338000
    print('mips.py ok')
