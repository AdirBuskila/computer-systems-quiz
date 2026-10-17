"""Machine check of every stored answer in courses/ieee754/C01..C08.js.
Uses struct (real IEEE-754 binary32), exact Fractions and numpy brute force. Run: py tools/verify/needhelp/ieee754/check.py
"""
import json, os, re, struct, subprocess, sys
from fractions import Fraction as Fr
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
APP = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))
COURSE = os.path.join(APP, "courses", "ieee754")

# ---- load level files through node (COURSE_LEVEL stub) ----
NODE = r"""
const fs=require('fs'),path=require('path');const out={};
global.COURSE_LEVEL=(c,l)=>{out[l.id]=l};
for(const f of fs.readdirSync(process.argv[1]).sort()) if(/^C\d+\.js$/.test(f)) eval(fs.readFileSync(path.join(process.argv[1],f),'utf8'));
console.log(JSON.stringify(out));
"""
levels = json.loads(subprocess.check_output(["node", "-e", NODE, COURSE]).decode("utf8"))

def bits(x):  # double -> float32 word (round-to-nearest-even by hardware)
    return struct.unpack(">I", struct.pack(">f", x))[0]
def val(w):
    return struct.unpack(">f", struct.pack(">I", w))[0]
def exact(w):
    """exact value of word w as Fraction (finite only), from the field formula"""
    S, E, F = w >> 31, (w >> 23) & 255, w & 0x7FFFFF
    assert E != 255
    m = Fr(F, 2**23)
    v = (1 + m) * Fr(2) ** (E - 127) if E else m * Fr(2) ** -126
    return -v if S else v
def f32(x):
    return val(bits(x))
def H(w): return "`0x%08X`" % w
def N(x): return "$%s$" % x

# the exact decoder must agree with struct on a big random sample
rng = np.random.default_rng(1)
for w in rng.integers(0, 2**32, 20000, dtype=np.uint64).tolist():
    if (w >> 23) & 255 != 255:
        assert float(exact(w)) == val(w), hex(w)

# ---- exact encoder (independent of struct): Fraction -> word, nearest-even ----
def enc(x):
    x = Fr(x); S = 1 if x < 0 else 0; a = abs(x)
    if a == 0: return S << 31
    e = 0
    while a >= 2 ** (e + 1): e += 1
    while a < 2 ** e: e -= 1
    m = a / Fr(2) ** e                # in [1,2)
    sc = (m - 1) * 2**23              # real number of ulps
    q = sc.numerator // sc.denominator; r = sc - q
    if r > Fr(1, 2) or (r == Fr(1, 2) and q % 2 == 1): q += 1
    if q == 2**23: q = 0; e += 1
    return (S << 31) | ((e + 127) << 23) | q
for _ in range(5000):
    w = int(rng.integers(0, 2**32, dtype=np.uint64))
    if 0 < (w >> 23) & 255 < 255:
        assert enc(exact(w)) == w
for x in [Fr(1, 3), Fr(1, 10), Fr(-1, 384), Fr(-17) - Fr(1, 7), Fr(333) + Fr(2, 9), Fr(1000) + Fr(2, 3), 1 + Fr(1, 2**24), 1 + Fr(3, 2**24)]:
    assert enc(x) == bits(float(x)), x     # float(Fraction) is correctly rounded

# ---- expected correct option text for each own question ----
def fld(w): return (w >> 31, (w >> 23) & 255, w & 0x7FFFFF)
EXP = {}
# C01
EXP["C01-Q1"] = "$S=1$, המספר שלילי" if fld(0xC0D40000)[0] == 1 else None
EXP["C01-Q2"] = N(fld(0x41200000)[1]); assert fld(0x41200000)[1] == 130
EXP["C01-Q3"] = str(bin(fld(0x41200000)[2]).count("1"))
neg = [w for w in (0x3F800000, 0x40000000, 0xBF800000, 0x7F800000) if w >> 31]
assert len(neg) == 1; EXP["C01-Q4"] = H(neg[0])
EXP["C01-Q5"] = N(fld(0x40490FDB)[1])
# C02
def dec_str(w):
    v = exact(w)
    assert v.denominator in (1, 2, 4, 8, 16, 32)
    f = float(v); return N(int(f) if f == int(f) else repr(f))
EXP["C02-Q1"] = dec_str(0x40400000)
EXP["C02-Q2"] = dec_str(0xC0A00000)
EXP["C02-Q3"] = dec_str(0x3F000000)
EXP["C02-Q4"] = dec_str(0x41580000)
EXP["C02-Q5"] = dec_str(0x3E200000)
EXP["C02-Q6"] = N(100 - 127)
# C03
assert bits(-0.0) == 0x80000000 and val(0x80000000) == 0 and str(val(0x80000000)) == "-0.0"
EXP["C03-Q1"] = "$-0$, כלומר אפס (עם סימן שלילי)"
assert val(0x7F800000) == float("inf"); EXP["C03-Q2"] = "$+\\infty$"
assert val(0x7FC00000) != val(0x7FC00000); EXP["C03-Q3"] = "NaN"
assert exact(1) == Fr(1, 2**149); EXP["C03-Q4"] = "$2^{-149}$"
assert exact(0x007FFFFF) == (1 - Fr(1, 2**23)) * Fr(1, 2**126); EXP["C03-Q5"] = "$(1-2^{-23})\\cdot 2^{-126}$"
cnt = 2 * (2**23 - 1)  # E=255, F!=0, both signs; verified by direct count below
e255 = np.arange(255 << 23, 256 << 23, dtype=np.uint32)
nan_pos = int(np.isnan(e255.view(np.float32)).sum())
assert nan_pos * 2 == cnt == 2**24 - 2
EXP["C03-Q6"] = "$2^{24}-2$"
# C04
assert Fr(25, 2) == Fr(0b11001, 2**1) and Fr(25, 2) / 8 == Fr(0b11001, 16)  # 12.5 = 1.1001b * 2^3
EXP["C04-Q1"] = "$1.1001_2\\cdot 2^{3}$"
EXP["C04-Q2"] = N(3 + 127); assert (bits(12.5) >> 23) & 255 == 130
EXP["C04-Q3"] = H(enc(Fr(25, 2))); assert enc(Fr(25, 2)) == bits(12.5)
EXP["C04-Q4"] = H(enc(Fr(-3, 4))); assert enc(Fr(-3, 4)) == bits(-0.75)
EXP["C04-Q5"] = H(enc(100)); assert enc(100) == bits(100.0)
EXP["C04-Q6"] = H(enc(Fr(5, 32))); assert enc(Fr(5, 32)) == bits(0.15625)
# C05
q = Fr(1, 3) / Fr(1, 4)  # mantissa 4/3
sc = (q - 1) * 2**23; frac_part = sc - (sc.numerator // sc.denominator)
assert frac_part > Fr(1, 2) and frac_part != Fr(1, 2)   # round up, not a tie
assert sc.numerator // sc.denominator % 2 == 0           # kept ends in 0 before +1
EXP["C05-Q1"] = "למעלה, כי החתוך הוא $0.1010\\ldots$ מהיחידה האחרונה, יותר מחצי"
EXP["C05-Q2"] = H(enc(Fr(1, 3)))
EXP["C05-Q3"] = H(enc(Fr(1, 10)))
assert bits(0.1) == enc(Fr(1, 10))
# 0.1 = 1.6 * 2^-4 ; check the dropped part is >1/2
sc = (Fr(8, 5) - 1) * 2**23; assert sc - (sc.numerator // sc.denominator) > Fr(1, 2)
x = 1 + Fr(1, 2**24); assert (x - 1) * 2**23 == Fr(1, 2)           # exact tie
EXP["C05-Q4"] = H(enc(x)); assert val(enc(x)) == 1.0
x = 1 + Fr(3, 2**24); assert (x - 1) * 2**23 == Fr(3, 2)           # exact tie, 1 odd -> 2 even
EXP["C05-Q5"] = H(enc(x)); assert enc(x) == 0x3F800002
EXP["C05-Q6"] = H(enc(Fr(1, 12))); assert enc(Fr(1, 12)) == bits(1 / 12)
# C06: brute-force all words with exponent fields around 50 and 254
def gaps(E):
    w = np.arange(E << 23, (E + 1) << 23, dtype=np.uint32)  # 2^23 words, E fixed
    v = w.view(np.float32).astype(np.float64)
    nxt = np.append(w[1:], np.uint32((E + 1) << 23)).view(np.float32).astype(np.float64)
    return nxt - v
g1 = gaps(127); assert (g1 == 2.0**-23).all()
EXP["C06-Q1"] = "$2^{-23}$"
g254 = gaps(254)[:-1]; assert (g254 == 2.0**104).all() and 2.0**104 == (2.0**127 * (2 - 2.0**-23)) - (2.0**127 * (2 - 2 * 2.0**-23))
EXP["C06-Q2"] = "$2^{104}$"
ints = np.arange(2**24 - 3, 2**24 + 5, dtype=np.float64)
rt = ints.astype(np.float32).astype(np.float64)
first_bad = int(ints[rt != ints][0]); assert first_bad == 2**24 + 1
assert all(float(np.float32(n)) == n for n in range(0, 2**24 + 1, 997)) and float(np.float32(2**24)) == 2**24
EXP["C06-Q3"] = "$2^{24}+1=16777217$"
# ratio
lo = val(100 << 23); hi = val((100 << 23) | 0x7FFFFF)
assert abs(hi / lo - (2 - 2.0**-23)) < 1e-15
for E in (1, 77, 200, 254): assert val((E << 23) | 0x7FFFFF) / val(E << 23) == f32(2 - 2.0**-23)
EXP["C06-Q4"] = "$2-2^{-23}$"
# which E has gap 2^-100: scan all E
Es = [E for E in range(1, 255) if abs(float(Fr(2) ** (E - 127 - 23)) - 2.0**-100) == 0]
assert Es == [50]
assert (gaps(50) == 2.0**-100).all()
EXP["C06-Q5"] = "$E=50$"
# groups with gap 2^-100: count runs of equal gap over every positive word (vectorised by E)
run = 0
for E in range(1, 255):
    g = gaps(E)
    if (g == 2.0**-100).all(): run += 2**23
nb = val((51 << 23) + 1) - val(51 << 23)   # first gap above the chain is double
assert nb == 2.0**-99
last_gap_E49 = val(50 << 23) - val((50 << 23) - 1); assert last_gap_E49 == 2.0**-101
# so the equal-gap chain: words (50<<23) .. (51<<23) inclusive = 2^23+1 numbers, gap 2^-100 each of 2^23 steps
chain = np.arange(50 << 23, (51 << 23) + 1, dtype=np.uint32).view(np.float32).astype(np.float64)
assert len(chain) == 2**23 + 1 and (np.diff(chain) == 2.0**-100).all()
EXP["C06-Q6"] = "שתי קבוצות של $2^{23}+1$ מספרים"  # positive chain and its negative mirror
# C07
EXP["C07-Q1"] = N(int(f32(2**24 + 1))); assert f32(2**24 + 1) == 16777216
EXP["C07-Q2"] = N(int(f32(2**24 + 3))); assert f32(2**24 + 3) == 16777220
a = 0x00C00000; b = bits(-val(0x00800000))
s = exact(a) + exact(b)   # 1.5*2^-126 - 2^-126
assert s == Fr(1, 2**127)
w = 0x00400000; assert exact(w) == s and (w >> 23) == 0                    # denormal and exactly representable
x_big = val(0x7F7FFFFF); assert np.float32(x_big) + np.float32(x_big) == np.float32("inf")
assert np.float32(1.5) + np.float32(-1.5) == 0
EXP["C07-Q3"] = "אם אחד שלילי והשני חיובי, התוצאה יכולה להיות לא מנורמלת"
mn = exact(0x00800000); md = exact(0x007FFFFF)
assert mn - md == Fr(1, 2**149) == exact(1)
EXP["C07-Q4"] = "$2^{-149}$, מדויקת, והיא המספר החיובי הקטן ביותר"
f = np.float32
left = f(f(16777216) + f(1)) + f(1); right = f(16777216) + (f(1) + f(1))
assert int(left) == 16777216 and int(right) == 16777218
EXP["C07-Q5"] = "הראשון 16777216, השני 16777218"
d = exact(0x007FFFFF); assert 2 * d >= Fr(1, 2**126) and (bits(float(2 * d)) >> 23) == 1
assert val(0x007FFFFF) * 2 == val(bits(float(2 * d))) and (bits(float(2 * d)) >> 23) & 255 >= 1
EXP["C07-Q6"] = "התוצאה יכולה להיות מנורמלת"

# ---- compare against stored correct option ----
n_own = 0
for lid, lv in levels.items():
    for qn in lv["questions"]:
        if "bankId" in qn: continue
        n_own += 1
        opts = {o["id"]: o["value"] for o in qn["options"]}
        assert len(set(opts.values())) == len(opts), (qn["id"], "duplicate options")
        assert qn["correctId"] in opts
        assert qn["id"] in EXP, ("no check for", qn["id"])
        assert opts[qn["correctId"]] == EXP[qn["id"]], (qn["id"], opts[qn["correctId"]], EXP[qn["id"]])
        # every distractor differs from the correct text; hex distractors must also differ in value
        for k, v in opts.items():
            if k != qn["correctId"]: assert v != EXP[qn["id"]]
assert n_own == len(EXP), (n_own, len(EXP))

# ---- spot-verify the distractor claims quoted in explanations ----
assert val(0x41C80000) == 25 and val(0x40C80000) == 6.25 and val(0xC1480000) == -12.5
assert val(0xBF000000) == -0.5 and val(0xC0400000) == -3 and val(0x3F400000) == 0.75
assert val(0x42480000) == 50 and val(0x43480000) == 200
assert val(0x41200000) == 10 and (0x3F200000 >> 23) & 255 == 126 and (0x3D200000 >> 23) & 255 == 122
assert val(0x3F2AAAAB) == f32(2 / 3) and val(0x3E2AAAAB) == f32(1 / 6) and val(0x3EAAAAAB) == f32(1 / 3)
assert exact(0x3EAAAAAA) < Fr(1, 3) < exact(0x3EAAAAAB)
assert 12.5 * 2 == 25 and Fr(0b11001, 16) * 16 == 25
assert 0x3DCCCCCC == bits(0.1) - 1

# ---- boss: bank answers recomputed and compared with the bank's stored key ----
_b = json.load(open(os.path.join(APP, "questions.json"), encoding="utf8"))
_b = _b if isinstance(_b, list) else _b["questions"]
bank = {q["id"]: q for q in _b}
def opt(qid, k): return next(o["value"] for o in bank[qid]["options"] if o["id"] == k)
def key(qid): return opt(qid, bank[qid]["correctId"])
assert not bank["25B-A-Q3"].get("hold") and bank["25B-A-Q3"]["official"]
assert key("25B-A-Q3") == "0xBB2AAAAB" and enc(Fr(-1, 384)) == 0xBB2AAAAB
assert (enc(Fr(-1, 384)) >> 23) & 255 == 118
assert key("22B-B-Q3") == "$55\\frac{5}{16}$" and exact(0x425D4000) == Fr(885, 16) == 55 + Fr(5, 16)
assert key("24B-A-Q7") == "יש שתי קבוצות של $2^{23}+1$ מספרים רצופים כאלה"   # chain verified above, E=50, mirrored sign
assert key("25A-A-Q7") == "$2-2^{-23}$"
assert key("23B-A-Q7").startswith("התוצאה מדוייקת, לא מנורמלת ושווה למספר החיובי הקטן ביותר") and mn - md == exact(1)
assert key("24S-A-Q3") == "$2^{104}$"
for qid in ("25B-A-Q3", "22B-B-Q3", "24B-A-Q7", "25A-A-Q7", "23B-A-Q7", "24S-A-Q3"):
    assert bank[qid].get("official") and not bank[qid].get("hold"), qid
bossids = [q["bankId"] for q in levels["C08"]["questions"]]
assert bossids == ["25B-A-Q3", "22B-B-Q3", "24B-A-Q7", "25A-A-Q7", "23B-A-Q7", "24S-A-Q3"]
# extra: the other bank encoding keys also agree with the exact encoder
for qid, x in (("23A-A-Q3", -17 - Fr(1, 7)), ("23A-B-Q3", -31 - Fr(1, 5)), ("23B-A-Q3", 3 + Fr(6, 7)), ("24A-A-Q3", 333 + Fr(2, 9)), ("24B-A-Q3", 1000 + Fr(2, 3)), ("25A-A-Q3", 333 + Fr(1, 3))):
    assert key(qid).upper().replace("0X", "0x") == "0x%08X" % enc(x), qid

print("OK: %d own questions + %d bank questions verified" % (n_own, len(bossids)))
