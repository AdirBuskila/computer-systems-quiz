"""Builds courses/mips_trace/C0N.js from the verified specs. Every correct answer was decided by simulation."""
import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import levels, part3, part5, part7  # noqa: F401  (import order = level order)
from core import APP

LV = sorted(levels.LEVELS, key=lambda l: l["order"])


def emit():
    out = os.path.join(APP, "courses", "mips_trace")
    os.makedirs(out, exist_ok=True)
    for L in LV:
        head = {k: L[k] for k in ("id", "order", "icon", "title", "goal", "boss")}
        qs = json.dumps(L["questions"], ensure_ascii=False, indent=2)
        js = ("/* mips_trace, level %d: generated from tools/verify/needhelp/mips_trace (answers decided by a MIPS simulator) */\n" % L["order"]
              + 'COURSE_LEVEL("mips_trace", {\n'
              + "".join("  %s: %s,\n" % (k, json.dumps(v, ensure_ascii=False)) for k, v in head.items())
              + '  source: "ai-verified",\n'
              + "  lesson: { html: String.raw`%s` },\n" % L["lesson"].strip()
              + "  questions: " + qs.replace("\n", "\n  ") + ",\n});\n")
        with open(os.path.join(out, L["id"] + ".js"), "w", encoding="utf8", newline="\n") as f:
            f.write(js)
    return len(LV)


if __name__ == "__main__":
    n = emit()
    print(n, "levels;", sum(len(L["questions"]) for L in LV), "questions")
