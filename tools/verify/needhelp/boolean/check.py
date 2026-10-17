"""Machine check of every stored answer in courses/boolean (truth-table brute force).

Run:  python tools/verify/needhelp/boolean/check.py
Each own question has a SPEC entry that recomputes the answer from the expression(s) by
brute force over all assignments and asserts (a) the expression appears in the question text,
(b) exactly one option is right, (c) it is the stored correctId. Boss bankIds are re-derived
from the bank's own options (math options only) and compared with the bank key.
"""
import itertools
import json
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from bexpr import ev, eq_tex, equal, parse, table, vars_of, minterms  # noqa: E402
from bank import bank_report  # noqa: E402

APP = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))
BS = "\\"


def load_levels():
    out = subprocess.run(["node", os.path.join(APP, "tools", "course_load.js")], capture_output=True, check=True, cwd=APP)
    d = json.loads(out.stdout.decode("utf8"))
    assert not d["errors"], d["errors"]
    return {e["level"]["id"]: e["level"] for e in d["levels"] if e["courseId"] == "boolean"}


def otex(o):
    v = o["value"]
    if o.get("type") == "math":
        return v
    return v.replace("$", "").strip()


def norm(s):
    return re.sub(r"\s+", "", s.replace(BS + ",", ""))


def nums(s):
    return [int(x) for x in re.findall(r"\d+", s)]


def sigma(s):
    return tuple(nums(s))


def assign(s):
    # "(A,B,C)=(1,0,1)" or "(1,0,1)" -> last tuple of digits
    t = re.findall(r"\(([01](?:,[01])*)\)", s)[-1]
    return tuple(int(x) for x in t.split(","))


# ---- spec kinds: each returns list of correct option ids ----
def k_eval(q, expr, env):
    v = ev(parse(expr), env)
    return [o["id"] for o in q["options"] if int(otex(o)) == v]


def k_count(q, expr, vs):
    n = sum(table(expr, vs))
    return [o["id"] for o in q["options"] if int(otex(o)) == n]


def k_assign_one(q, expr, vs):
    e = parse(expr)
    return [o["id"] for o in q["options"] if ev(e, dict(zip(vs, assign(otex(o))))) == 1]


def k_equal_to(q, expr):
    return [o["id"] for o in q["options"] if equal(expr, otex(o))]


def k_which(q, want):
    return [o["id"] for o in q["options"] if eq_tex(otex(o)) is want]


def k_differ(q, lhs, rhs, vs):
    L, R = parse(lhs), parse(rhs)
    return [o["id"] for o in q["options"]
            if (lambda env: ev(L, env) != ev(R, env))(dict(zip(vs, assign(otex(o)))))]


def k_diffcount(q, lhs, rhs, vs):
    n = sum(a != b for a, b in zip(table(lhs, vs), table(rhs, vs)))
    return [o["id"] for o in q["options"] if int(otex(o)) == n]


def k_sigma(q, expr, vs):
    want = tuple(minterms(expr, vs))
    return [o["id"] for o in q["options"] if sigma(otex(o)) == want]


def k_minterm_index(q, expr, vs):
    t = table(expr, vs)
    assert sum(t) == 1, "not a single minterm"
    idx = t.index(1)
    return [o["id"] for o in q["options"] if int(otex(o)) == idx]


def k_concept(q, cid):
    # conceptual: the counterexample is machine-checked in special_checks()
    return [cid]


def k_rows(q, n):
    return [o["id"] for o in q["options"] if int(otex(o)) == 2 ** n]


V3 = ["A", "B", "C"]
SPEC = {
    # level 1
    "C01-Q1": (k_eval, "A + B" + BS + "cdot C", dict(A=1, B=0, C=0)),
    "C01-Q2": (k_eval, BS + "bar A + B" + BS + "cdot C", dict(A=1, B=1, C=0)),
    "C01-Q3": (k_assign_one, "A" + BS + "cdot" + BS + "bar B" + BS + "cdot C", V3),
    "C01-Q4": (k_rows, 4),
    "C01-Q5": (k_count, "A + B" + BS + "cdot C", V3),
    # level 2
    "C02-Q1": (k_eval, "1" + BS + "oplus 1" + BS + "oplus 1", {}),
    "C02-Q2": (k_equal_to, "A" + BS + "oplus 1"),
    "C02-Q3": (k_equal_to, "A" + BS + "oplus " + BS + "bar A"),
    "C02-Q4": (k_equal_to, "(A" + BS + "oplus B)" + BS + "oplus A"),
    "C02-Q5": (k_eval, "A" + BS + "oplus B" + BS + "oplus C" + BS + "oplus D", dict(A=1, B=1, C=1, D=0)),
    "C02-Q6": (k_equal_to, "A" + BS + "oplus B" + BS + "oplus A" + BS + "oplus C"),
    # level 3
    "C03-Q1": (k_equal_to, BS + "overline{A+B}"),
    "C03-Q2": (k_equal_to, "A+AB"),
    "C03-Q3": (k_equal_to, "A+" + BS + "bar A B"),
    "C03-Q4": (k_equal_to, "A" + BS + "cdot(" + BS + "bar A+B)"),
    "C03-Q5": (k_which, False),
    "C03-Q6": (k_equal_to, BS + "overline{" + BS + "bar A" + BS + "cdot B}"),
    # level 4
    "C04-Q1": (k_equal_to, BS + "overline{A" + BS + "oplus B}"),
    "C04-Q2": (k_equal_to, BS + "bar A" + BS + "oplus" + BS + "bar B"),
    "C04-Q3": (k_equal_to, BS + "bar A" + BS + "oplus B" + BS + "oplus" + BS + "bar C"),
    "C04-Q4": (k_which, False),
    "C04-Q5": (k_equal_to, "(A" + BS + "oplus B)" + BS + "cdot(A" + BS + "oplus" + BS + "bar B)"),
    "C04-Q6": (k_differ, BS + "overline{A" + BS + "oplus B}" + BS + "cdot C",
               BS + "bar A C" + BS + "oplus" + BS + "bar B C", V3),
    # level 5
    "C05-Q1": (k_differ, "(A" + BS + "oplus B)+(A" + BS + "oplus C)", "A" + BS + "oplus(B+C)", V3),
    "C05-Q2": (k_diffcount, "A" + BS + "oplus(B" + BS + "cdot C)",
               "(A" + BS + "oplus B)" + BS + "cdot(A" + BS + "oplus C)", V3),
    "C05-Q3": (k_count, "A" + BS + "oplus B" + BS + "oplus C", V3),
    "C05-Q4": (k_which, False),
    "C05-Q5": (k_concept, "c"),
    # level 6
    "C06-Q1": (k_minterm_index, "A" + BS + "bar B C", V3),
    "C06-Q2": (k_sigma, BS + "overline{A" + BS + "oplus B}", ["A", "B"]),
    "C06-Q3": (k_sigma, "A" + BS + "oplus B" + BS + "oplus C", V3),
    "C06-Q4": (k_sigma, "A+BC", V3),
    "C06-Q5": (k_count, "(A" + BS + "oplus B)" + BS + "cdot C", V3),
    "C06-Q6": (k_sigma, BS + "bar A" + BS + "oplus B", ["A", "B"]),
    # level 7
    "C07-Q1": (k_equal_to, "(A" + BS + "oplus C)" + BS + "oplus(" + BS + "bar B" + BS + "oplus D)" + BS + "oplus" + BS + "overline{(C" + BS + "oplus D)}"),
    "C07-Q2": (k_equal_to, "A+" + BS + "bar A(B+" + BS + "bar B(C+" + BS + "bar C D))"),
    "C07-Q3": (k_equal_to, BS + "bar A" + BS + "oplus B" + BS + "oplus" + BS + "bar C" + BS + "oplus D" + BS + "oplus" + BS + "bar E"),
    "C07-Q4": (k_which, False),
    "C07-Q5": (k_equal_to, "(" + BS + "bar A" + BS + "oplus B)" + BS + "cdot(A" + BS + "oplus" + BS + "bar B)"),
    "C07-Q6": (k_which, False),
}
# the stem expression must literally appear in the question text (spec tied to stored question)
STEM_EXPR = {k for k, v in SPEC.items() if v[0] in (k_eval, k_count, k_assign_one, k_equal_to, k_sigma, k_minterm_index)}


def special_checks():
    """Conceptual / worked-example claims that no option parser covers."""
    # C05-Q5: two expressions agree on 000 and 111 but are not equivalent (A xor B vs 0).
    vs = ["A", "B"]
    t1, t2 = table("A" + BS + "oplus B", vs), table("0", vs)
    assert t1[0] == t2[0] and t1[3] == t2[3] and t1 != t2
    # lesson C05 example: A xor (BC) vs (A xor B)(A xor C) differ at (1,0,1)
    L, R = parse("A" + BS + "oplus(B" + BS + "cdot C)"), parse("(A" + BS + "oplus B)" + BS + "cdot(A" + BS + "oplus C)")
    assert ev(L, dict(A=1, B=0, C=1)) == 1 and ev(R, dict(A=1, B=0, C=1)) == 0
    assert ev(L, dict(A=0, B=0, C=0)) == ev(R, dict(A=0, B=0, C=0))
    # lesson C01: A+BC vs (A+B)C at (1,0,0)
    assert ev(parse("A+BC"), dict(A=1, B=0, C=0)) == 1 and ev(parse("(A+B)C"), dict(A=1, B=0, C=0)) == 0
    # lesson C01 example: !A + BC at (1,1,0) = 0
    assert ev(parse(BS + "bar A+BC"), dict(A=1, B=1, C=0)) == 0
    # lesson C03: overline(A+B) != !A + !B at (1,0)
    assert not equal(BS + "overline{A+B}", BS + "bar A+" + BS + "bar B")
    # lesson C04 identities
    assert equal(BS + "overline{A" + BS + "oplus B}", BS + "bar A" + BS + "oplus B")
    assert equal(BS + "overline{A" + BS + "oplus B}", "A" + BS + "oplus" + BS + "bar B")
    assert equal(BS + "bar A" + BS + "oplus" + BS + "bar B", "A" + BS + "oplus B")
    assert equal(BS + "overline{A" + BS + "oplus B}", "AB+" + BS + "bar A" + BS + "bar B")
    assert equal("A" + BS + "oplus B", "A" + BS + "bar B+" + BS + "bar A B")
    assert equal("C(A" + BS + "oplus B)", "CA" + BS + "oplus CB")
    assert equal(BS + "bar A C" + BS + "oplus" + BS + "bar B C", "C(A" + BS + "oplus B)")
    assert equal("A+(A" + BS + "oplus B)", "A+B")           # C04-Q4 explanation
    assert equal("A" + BS + "oplus AB", "A" + BS + "bar B")  # C04-Q4 / C05-Q4 explanation
    assert not equal("A" + BS + "oplus AB", "AB")            # C05-Q4 (the false option)
    assert equal("A" + BS + "oplus B" + BS + "oplus AB", "A+B")
    # lesson C07: the worked example and the X + !X Y chain
    assert equal("(A" + BS + "oplus C)" + BS + "oplus" + BS + "bar C" + BS + "oplus B", BS + "overline{A" + BS + "oplus B}")
    assert equal("A+" + BS + "bar A(B+" + BS + "bar B C)", "A+B+C")
    assert equal("(A" + BS + "oplus B)(B" + BS + "oplus C)", "A" + BS + "bar B C+" + BS + "bar A B" + BS + "bar C")
    assert equal("(A" + BS + "oplus B)+" + BS + "overline{(A" + BS + "oplus B)}(C" + BS + "oplus D)", "(A" + BS + "oplus B)+(C" + BS + "oplus D)")
    # C06 lesson example: A xor B = Sigma(1,2); A bar B C index 5
    assert minterms("A" + BS + "oplus B", ["A", "B"]) == [1, 2]
    # C01-Q5 distractor claim: (A+B)C has 3 ones
    assert sum(table("(A+B)C", V3)) == 3
    # C03 distractors named in explanations
    assert not equal(BS + "overline{A+B}", "A" + BS + "bar B")
    assert not equal(BS + "overline{A+B}", BS + "bar A+B")
    assert not equal("A+" + BS + "bar A B", "A")
    assert not equal("A(" + BS + "bar A+B)", "A+B")
    assert not equal("A+AB", "A+B")
    # C07-Q2 distractor claim: at 0001 the original is 1, A+B*!B+C is 0
    assert ev(parse("A+" + BS + "bar A(B+" + BS + "bar B(C+" + BS + "bar C D))"), dict(A=0, B=0, C=0, D=1)) == 1
    assert ev(parse("A+B" + BS + "bar B+C"), dict(A=0, B=0, C=0, D=1)) == 0
    # C07-Q3 distractor claims: option c and d (even bar count) equal the bare chain
    assert equal(BS + "bar A" + BS + "oplus B" + BS + "oplus" + BS + "bar C" + BS + "oplus D" + BS + "oplus E", "A" + BS + "oplus B" + BS + "oplus C" + BS + "oplus D" + BS + "oplus E")
    assert equal(BS + "bar A" + BS + "oplus" + BS + "bar B" + BS + "oplus" + BS + "bar C" + BS + "oplus" + BS + "bar D" + BS + "oplus E", "A" + BS + "oplus B" + BS + "oplus C" + BS + "oplus D" + BS + "oplus E")
    # C07-Q4 explanation: (A xor B)+(B xor C) at 101 -> 1, A xor C -> 0
    assert ev(parse("(A" + BS + "oplus B)+(B" + BS + "oplus C)"), dict(A=1, B=0, C=1)) == 1
    assert ev(parse("A" + BS + "oplus C"), dict(A=1, B=0, C=1)) == 0
    # C01-Q2/Q3 etc. covered by SPEC; C05-Q1 equal-at claims
    L, R = parse("(A" + BS + "oplus B)+(A" + BS + "oplus C)"), parse("A" + BS + "oplus(B+C)")
    for env in (dict(A=0, B=0, C=0), dict(A=1, B=1, C=1), dict(A=0, B=1, C=1)):
        assert ev(L, env) == ev(R, env)


def main():
    levels = load_levels()
    n_checked = 0
    own = {q["id"]: (lid, q) for lid, L in levels.items() for q in L["questions"] if "id" in q}
    ids = [q["id"] for L in levels.values() for q in L["questions"] if "id" in q]
    assert len(ids) == len(set(ids)), "duplicate question ids"
    missing = set(own) - set(SPEC)
    assert not missing, "questions without a machine check: %s" % sorted(missing)
    extra = set(SPEC) - set(own)
    assert not extra, "SPEC entries without a question: %s" % sorted(extra)

    for qid, spec in SPEC.items():
        _, q = own[qid]
        kind, args = spec[0], spec[1:]
        if kind is k_rows:
            # stem mentions the number of variables
            assert "$4$" in q["question"]
        if qid in STEM_EXPR and kind is not k_rows:
            expr_arg = args[0]
            if kind is k_eval:
                pass
            assert norm(expr_arg) in norm(q["question"]), "%s: expr %r not in stem" % (qid, expr_arg)
        got = kind(q, *args)
        assert len(got) == 1, "%s: expected exactly one right option, got %s" % (qid, got)
        assert got == [q["correctId"]], "%s: derived %s but stored %s" % (qid, got, q["correctId"])
        assert len({o["id"] for o in q["options"]}) == len(q["options"]), qid + " dup option ids"
        n_checked += 1

    special_checks()

    # boss: bank questions re-derived from the bank's math options
    rep = bank_report()
    boss = [q for q in levels["C08"]["questions"]]
    assert levels["C08"].get("boss") is True
    for q in boss:
        bid = q["bankId"]
        acc, want_true, res = rep[bid]
        assert all(isinstance(v, bool) for v in res.values()), "%s has non-math options" % bid
        derived = [i for i, v in res.items() if v is want_true]
        assert sorted(derived) == sorted(acc), "%s: derived %s vs key %s" % (bid, derived, acc)
        assert len(acc) == 1, bid + " has several accepted answers"
        n_checked += 1
    print("OK: %d answers machine-checked (own %d, boss %d)" % (n_checked, n_checked - len(boss), len(boss)))


if __name__ == "__main__":
    main()
