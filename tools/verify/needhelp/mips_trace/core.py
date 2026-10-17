"""Shared helpers for the mips_trace course: simulator wrapper, rich-text conversion, MCQ builder.
All answers are decided by SIMULATION (the sim picks the correct option); the authored first option is
asserted to be the one the simulation picks."""
import importlib.util
import os
import re

HERE = os.path.dirname(os.path.abspath(__file__))
APP = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))
_spec = importlib.util.spec_from_file_location("mipssim", os.path.join(APP, "tools", "verify", "22B-B", "mipssim.py"))
mipssim = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(mipssim)
s32 = mipssim.s32


def run(code, regs=None, mem=None, maxsteps=20000):
    """code: str with one instruction per line. regs: {n: value}. Returns (R, mem, steps); raises if it did not stop."""
    lines = [l for l in code.strip().split("\n")]
    R, M, steps = mipssim.run(lines, regs, mem, maxsteps)
    if steps >= maxsteps:
        raise RuntimeError("program did not stop")
    return [s32(x) for x in R], M, steps


def fence(code, tag="asm"):
    return "```" + tag + "\n" + code.strip("\n") + "\n```"


def rich(s):
    """'§' stands for a literal dollar sign in prose; fenced blocks are left alone."""
    parts = s.split("```")
    for i in range(0, len(parts), 2):
        parts[i] = parts[i].replace("§", "\$")
    return "```".join(parts)


def html(s):
    assert "`" not in s and "${" not in s and "\\" not in s
    return s.replace("§", "&#36;")


def mcq(qid, stem, opts, truth, pos, expl, recap):
    """opts[0] is the authored correct option. truth = index the simulation chose (must be 0).
    pos = 0-based position of the correct option in the shown list."""
    assert truth == 0, f"{qid}: authored option 0 is not the verified answer (sim says {truth})"
    assert len(set(opts)) == len(opts), f"{qid}: duplicate options"
    assert 0 <= pos < len(opts)
    rest = opts[1:]
    shown = rest[:pos] + [opts[0]] + rest[pos:]
    ids = "abcdefgh"
    return {"id": qid, "question": rich(stem),
            "options": [{"id": ids[i], "value": rich(v)} for i, v in enumerate(shown)],
            "correctId": ids[pos], "explanation": rich(expl), "recap": rich(recap)}


def only(idx_list, qid, what="matches"):
    assert len(idx_list) == 1, f"{qid}: expected exactly one option that {what}, got {idx_list}"
    return idx_list[0]


# ---- observation based questions -------------------------------------------------------
def trace_q(qid, stem, code, opts, obs, pos, expl, recap, regs=None, mem=None, show=True):
    """obs(R, mem, steps) -> text. The option equal to the observation must be opts[0], and be unique."""
    R, M, steps = run(code, regs, mem)
    o = obs(R, M, steps)
    hits = [i for i, v in enumerate(opts) if v == o]
    only(hits, qid, f"equals the simulated result {o!r}")
    full = stem + ("\n" + fence(code) if show else "")
    return mcq(qid, full, opts, hits[0], pos, expl, recap)


def reg(n):
    return lambda R, M, s: str(R[n])


def regs_text(*ns):
    return lambda R, M, s: ", ".join(f"§{n}={R[n]}" for n in ns)


def steps_obs(R, M, s):
    return str(s)


# ---- behaviour based questions ---------------------------------------------------------
def passes_q(qid, stem, codes, test, mode, pos, expl, recap, extra_opts=None):
    """codes: asm snippets (opts[0] authored correct, or authored wrong one for mode 'wrong').
    test(code)->bool says whether a snippet is a correct translation. mode 'right': exactly one passes;
    mode 'wrong': exactly one fails. The unique one must be codes[0]."""
    res = [bool(test(c)) for c in codes]
    if mode == "right":
        idx = only([i for i, r in enumerate(res) if r], qid, "passes")
    else:
        idx = only([i for i, r in enumerate(res) if not r], qid, "fails")
    return mcq(qid, stem, [fence(c) for c in codes], idx, pos, expl, recap)


def lam_q(qid, stem, texts, fns, asm_fn, inputs, pos, expl, recap, code_tag=None):
    """texts[i] is the option text, fns[i] a python function with the same behaviour as option i (None = never
    matches, e.g. invalid C). asm_fn(inp) is the simulated behaviour of the asm. Exactly one fn must agree on all inputs."""
    hits = []
    for i, f in enumerate(fns):
        if f is None:
            continue
        ok = True
        for inp in inputs:
            try:
                if f(inp) != asm_fn(inp):
                    ok = False
                    break
            except Exception:
                ok = False
                break
        if ok:
            hits.append(i)
    idx = only(hits, qid, "agrees with the asm on all inputs")
    opts = [fence(t, code_tag) if code_tag else t for t in texts]
    return mcq(qid, stem, opts, idx, pos, expl, recap)


def fill_q(qid, stem, skeleton, codes, ref, inputs, setup, pos, expl, recap, tag="asm"):
    """skeleton contains a line '@@@@@@@'. For each input, setup(inp)->(regs, mem); ref(inp)->predicate on (R, mem)."""
    assert "@@@@@@@" in skeleton
    hits = []
    for i, c in enumerate(codes):
        ok = True
        for inp in inputs:
            regs, mem = setup(inp)
            prog = skeleton.replace("@@@@@@@", c)
            try:
                R, M, _ = run(prog, regs, mem)
            except Exception:
                ok = False
                break
            if not ref(inp, R, M):
                ok = False
                break
        if ok:
            hits.append(i)
    idx = only(hits, qid, "completes the program correctly")
    return mcq(qid, stem + "\n" + fence(skeleton), [fence(c) for c in codes], idx, pos, expl, recap)


def words(base, arr):
    return {base + 4 * i: v & 0xFFFFFFFF for i, v in enumerate(arr)}


def read_words(M, base, n):
    return [s32(M.get(base + 4 * i, 0)) for i in range(n)]
