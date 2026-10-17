# -*- coding: utf-8 -*-
"""Tiny MIPS interpreter for the exam snippets (add sub slt addi lw sw beq bne j and or xor lui ori sll)."""
import re
M = 0xFFFFFFFF
NAMES = {"zero": 0, "at": 1, "v0": 2, "v1": 3, "a0": 4, "a1": 5, "a2": 6, "a3": 7, "gp": 28, "sp": 29, "fp": 30, "ra": 31}
for i in range(8):
    NAMES["t%d" % i] = 8 + i
    NAMES["s%d" % i] = 16 + i
NAMES["t8"], NAMES["t9"] = 24, 25


def reg(tok):
    tok = tok.strip().lstrip("$")
    return int(tok) if tok.isdigit() else NAMES[tok]


def s32(v):
    v &= M
    return v - (1 << 32) if v & 0x80000000 else v


def run(lines, regs=None, mem=None, maxsteps=100000):
    R = [0] * 32
    for k, v in (regs or {}).items():
        R[k] = v & M
    mem = dict(mem or {})
    prog, labels = [], {}
    for ln in lines:
        ln = ln.split("#")[0].strip()
        if not ln:
            continue
        m = re.match(r"^(\w+):\s*(.*)$", ln)
        while m:
            labels[m.group(1)] = len(prog)
            ln = m.group(2).strip()
            m = re.match(r"^(\w+):\s*(.*)$", ln)
        if ln:
            prog.append(ln)
    pc, steps = 0, 0
    while pc < len(prog) and steps < maxsteps:
        steps += 1
        ins = prog[pc]
        op, _, rest = ins.partition(" ")
        a = [x.strip() for x in rest.split(",")] if rest.strip() else []
        pc += 1
        if op in ("add", "sub", "slt", "and", "or", "xor"):
            x, y = R[reg(a[1])], R[reg(a[2])]
            v = {"add": x + y, "sub": x - y, "and": x & y, "or": x | y, "xor": x ^ y,
                 "slt": int(s32(x) < s32(y))}[op]
            R[reg(a[0])] = v & M
        elif op in ("addi", "ori", "andi"):
            imm = int(a[2], 0)
            x = R[reg(a[1])]
            if op == "addi":
                v = x + imm
            elif op == "ori":
                v = x | (imm & 0xFFFF)
            else:
                v = x & (imm & 0xFFFF)
            R[reg(a[0])] = v & M
        elif op == "lui":
            R[reg(a[0])] = (int(a[1], 0) << 16) & M
        elif op == "sll":
            R[reg(a[0])] = (R[reg(a[1])] << int(a[2], 0)) & M
        elif op == "lw":
            m2 = re.match(r"(-?\w+)\((\$?\w+)\)", a[1])
            addr = (R[reg(m2.group(2))] + int(m2.group(1), 0)) & M
            R[reg(a[0])] = mem.get(addr, 0) & M
        elif op == "sw":
            m2 = re.match(r"(-?\w+)\((\$?\w+)\)", a[1])
            mem[(R[reg(m2.group(2))] + int(m2.group(1), 0)) & M] = R[reg(a[0])]
        elif op in ("beq", "bne"):
            eq = R[reg(a[0])] == R[reg(a[1])]
            if eq == (op == "beq"):
                pc = labels[a[2]]
        elif op == "j":
            pc = labels[a[0]]
        else:
            raise ValueError("unknown op " + ins)
        R[0] = 0
    if steps >= maxsteps:
        raise RuntimeError("no halt")
    return R, mem
