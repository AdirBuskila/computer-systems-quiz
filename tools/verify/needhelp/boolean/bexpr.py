"""Tiny TeX boolean-expression parser + truth-table brute force (shared by check.py / bank.py)."""
import itertools
import re

BS = "\\"
TOK = re.compile(
    r"\\overline|\\bar|\\oplus|\\cdot|\\left|\\right|\\big|\\Big|\\,|\\\\|"
    r"\\begin\{array\}\{l\}|\\end\{array\}|&|[A-Z]|[()+{}01]|\s+"
)


def tokenize(s):
    s = s.replace(BS + "left", "").replace(BS + "right", "").replace(BS + "big", "").replace(BS + "Big", "")
    out, i = [], 0
    while i < len(s):
        m = TOK.match(s, i)
        if not m:
            raise ValueError("bad token at %r" % s[i:i + 20])
        t = m.group(0)
        i = m.end()
        if t.strip() == "" or t == BS + ",":
            continue
        out.append(t)
    return out


class P:
    # precedence: NOT > AND (juxtaposition, \cdot) > XOR > OR
    def __init__(s, toks):
        s.t = toks
        s.i = 0

    def peek(s):
        return s.t[s.i] if s.i < len(s.t) else None

    def eat(s, x=None):
        t = s.peek()
        if x is not None and t != x:
            raise ValueError("expected %s got %s" % (x, t))
        s.i += 1
        return t

    def parse(s):
        e = s.or_()
        if s.peek() is not None:
            raise ValueError("trailing %r" % s.peek())
        return e

    def or_(s):
        e = s.xor()
        while s.peek() == "+":
            s.eat()
            e = ("or", e, s.xor())
        return e

    def xor(s):
        e = s.and_()
        while s.peek() == BS + "oplus":
            s.eat()
            e = ("xor", e, s.and_())
        return e

    def and_(s):
        e = s.not_()
        while True:
            t = s.peek()
            if t == BS + "cdot":
                s.eat()
                e = ("and", e, s.not_())
            elif t is not None and (t in ("(", "{", BS + "overline", BS + "bar") or re.fullmatch(r"[A-Z01]", t)):
                e = ("and", e, s.not_())
            else:
                return e

    def not_(s):
        t = s.peek()
        if t == BS + "overline":
            s.eat()
            return ("not", s.atom())
        if t == BS + "bar":
            s.eat()
            return ("not", s.atom())
        return s.atom()

    def atom(s):
        t = s.eat()
        if t == "(":
            e = s.or_()
            s.eat(")")
            return e
        if t == "{":
            e = s.or_()
            s.eat("}")
            return e
        if t in ("0", "1"):
            return ("c", int(t))
        if re.fullmatch(r"[A-Z]", t):
            return ("v", t)
        raise ValueError("atom %r" % t)


def parse(tex):
    tex = tex.replace(BS + BS, " ").replace(BS + "begin{array}{l}", "").replace(BS + "end{array}", "").replace("&", "")
    return P(tokenize(tex)).parse()


def ev(e, env):
    k = e[0]
    if k == "v":
        return env[e[1]]
    if k == "c":
        return e[1]
    if k == "not":
        return 1 - ev(e[1], env)
    a, b = ev(e[1], env), ev(e[2], env)
    return {"and": a & b, "or": a | b, "xor": a ^ b}[k]


def vars_of(e, acc=None):
    acc = set() if acc is None else acc
    if e[0] == "v":
        acc.add(e[1])
    elif e[0] != "c":
        for x in e[1:]:
            vars_of(x, acc)
    return acc


def table(tex_or_ast, vs):
    e = parse(tex_or_ast) if isinstance(tex_or_ast, str) else tex_or_ast
    return tuple(ev(e, dict(zip(vs, bits))) for bits in itertools.product((0, 1), repeat=len(vs)))


def equal(l, r):
    L, R = parse(l), parse(r)
    vs = sorted(vars_of(L) | vars_of(R))
    return table(L, vs) == table(R, vs)


def eq_tex(tex):
    """True iff every '=' separated side of a TeX equation has the same truth table."""
    parts = [p.strip() for p in tex.split("=") if p.strip()]
    return all(equal(parts[0], p) for p in parts[1:])


def minterms(tex, vs):
    return [i for i, v in enumerate(table(tex, vs)) if v]
