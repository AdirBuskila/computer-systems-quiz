"""Brute-force every boolean_algebra bank question's key (math options only)."""
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from bexpr import eq_tex  # noqa: E402

APP = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))


def bank_report():
    q = json.load(open(os.path.join(APP, "questions.json"), encoding="utf8"))
    qs = q["questions"] if isinstance(q, dict) else q
    out = {}
    for x in qs:
        if x.get("topic") != "boolean_algebra":
            continue
        stem = x["question"]
        want_true = ("אינה" not in stem) and ("לא נכונה" not in stem)
        res = {}
        for o in x["options"]:
            if o["type"] != "math" or "$" in o["value"]:
                res[o["id"]] = "N/A"
                continue
            try:
                res[o["id"]] = eq_tex(o["value"])
            except Exception as e:  # noqa: BLE001
                res[o["id"]] = "ERR " + str(e)[:40]
        acc = x.get("acceptedIds") or [x["correctId"]]
        out[x["id"]] = (acc, want_true, res)
    return out


if __name__ == "__main__":
    for k, (acc, wt, res) in bank_report().items():
        derived = [i for i, v in res.items() if v is wt]
        print(k, "key", acc, "wantTrue" if wt else "wantFalse", "derived", derived, res)
