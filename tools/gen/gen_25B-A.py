# -*- coding: utf-8 -*-
"""Generator for tools/raw/25B-A.json -- computer-systems, 2025 semester A, moed B (18.03.2025).
Run: PYTHONUTF8=1 py tools/gen/gen_25B-A.py

Source: sitting 25B-A pp.2-17 (20 MCQ x 5 pts) with the lecturer's circled options; pp.18-33 are his
handwritten solution pages (key + worked proofs). Literal MIPS register dollars are written with the
section sign in plain text (reg() turns it into an escaped dollar); inside code() a plain $ is fine.
Key (circled): option a in every question.
Keys checked by script (tools/tmp_transcriber_25B-A_check.py, throwaway): Q1 Q3 Q4 Q5 Q9 Q10 Q11 Q12 Q14 Q15
Q17 Q19 recomputed and agree (12); Q16 FA/HA count by column reduction agrees; Q6 range is trivial.
DISAGREEMENT: Q2 -- recomputation gives 0xFFFF0000, no option matches; the lecturer's own working
(p.19) has the slip 0xFFFEFFFE + 2 = 0xFFFE0000 -> held (see docs/ASK_ADIR.md).
Handwritten Hebrew explanation text is reconstructed from the solution pages; the formulas are exact."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "25B-A.json"
IDS = "abcdef"


def opts(*vals):
    out = []
    for i, v in enumerate(vals):
        if isinstance(v, tuple):
            out.append({"id": IDS[i], "type": v[0], "value": v[1]})
        else:
            out.append({"id": IDS[i], "type": "text", "value": v})
    return out


def code(lines):
    """Multi-line code block: one backtick span per line, joined by line breaks. '$' is escaped."""
    return "\n".join("`" + l.replace("$", "\\$") + "`" for l in lines)


def reg(s):
    """Section sign marks a literal register dollar (MIPS register); math dollars are left alone."""
    return s.replace("§", "\\$")


def Q(num, topic, question, options, correct, explanation="", **kw):
    question, explanation = reg(question), reg(explanation)
    for o in options:
        if o["type"] == "text":
            o["value"] = reg(o["value"])
    q = {"num": num, "topic": topic, "question": question, "options": options,
         "correctId": correct, "answerSource": "solution-pdf", "official": True,
         "confidence": "high", "explanation": explanation}
    q.update(kw)
    return q


def minterms(rows):
    """Sum of 4-variable minterms from bit strings 'ABCD'."""
    out = []
    for r in rows:
        out.append(r"\cdot ".join(("" if bit == "1" else r"\bar ") + v for bit, v in zip(r, "ABCD")))
    return "F=" + "+".join(out)


questions = []

# ---------------------------------------------------------------- 1
questions.append(Q(
    1, "boolean_algebra", "מי מהמשוואות הבאות לא נכונה?",
    opts(("math", r"((\bar A\oplus B)+(A\oplus C))\cdot(C\oplus\bar B)=\overline{\bar B\oplus C}"),
         ("math", r"(A\oplus B)\cdot((\bar A\oplus B)+(A\oplus\bar C))=\bar A\cdot B\cdot\bar C+A\cdot\bar B\cdot C"),
         ("math", r"(A\oplus\bar B)\cdot((A\oplus B)+(A\oplus C))=\bar A\cdot\bar B\cdot C+A\cdot B\cdot\bar C"),
         ("math", r"((A\oplus B)+(A\oplus C))\cdot(C\oplus B)=\overline{\bar B\cdot\bar C+B\cdot C}")),
    "a",
    r"""א: $((\bar A\oplus B)+(A\oplus C))\cdot(C\oplus\bar B)=\bar B\bar C+BC=\overline{B\oplus C}$, ואילו $\overline{\bar B\oplus C}=B\oplus C=\bar B C+B\bar C$ - לכן המשוואה אינה נכונה.
ב: $(A\oplus B)\cdot(\overline{A\oplus B}+\overline{A\oplus C})=(A\oplus B)\cdot\overline{A\oplus C}=(\bar A B+A\bar B)(\bar A\bar C+AC)=\bar A B\bar C+A\bar B C$ - נכונה.
ג: $\overline{A\oplus B}\cdot((A\oplus B)+(A\oplus C))=\overline{A\oplus B}\cdot(A\oplus C)=\bar A\bar B C+AB\bar C$ - נכונה.
ד: $((A\oplus B)+(A\oplus C))\cdot(C\oplus B)=B\oplus C=\overline{\bar B\bar C+BC}$ - נכונה.""",
    note="Option d RHS: a long overline spans the whole sum; read as overline of (B-bar C-bar + B C)."))

# ---------------------------------------------------------------- 2  (HELD: key disagrees with recomputation)
q2 = Q(
    2, "mips_machine_code", "מה יהיה באוגר §5 אחרי ביצוע הפקודות הבאות:\n" + code([
        "addi $1, $0, 0xAAAA", "add  $1, $1, $1", "addi $5, $1, 0xAAAA", "addi $5, $5, 0x0002"]),
    opts("0xFFFE0000", "0xFFFFFFFF", "0x0001FFFF", "0x00020001", "0x00000001", "0xFFFFFFF2"),
    None,
    r"""addi מבצע הרחבת סימן: $§1=\texttt{0xFFFFAAAA}$; לאחר החיבור $§1=\texttt{0xFFFF5554}$; $§5=\texttt{0xFFFEFFFE}$, ולאחר החיבור האחרון (2) הפתרון המודפס מסיים ב-0xFFFE0000.""",
    hold="Official key (circled a, 0xFFFE0000; p.19 working ends 0xFFFEFFFE + 2 = 0xFFFE0000) disagrees with recomputation: "
         "0xFFFEFFFE + 2 = 0xFFFF0000, which is not among the options. Lecturer arithmetic slip or misprinted option.",
    note="Held: key circled a = 0xFFFE0000 but 0xFFFEFFFE+2 = 0xFFFF0000.",
    confidence="low")
del q2["correctId"]
questions.append(q2)

# ---------------------------------------------------------------- 3
questions.append(Q(
    3, "floating_point",
    r"המספר $\frac{1}{3}$ בבסיס 2 הוא השבר הבינארי האינסופי: $[0.01\ 01\ 01\ 01\ldots]_2$" + "\n"
    r"כיצד ייוצג המספר $-\frac{1}{384}$ בייצוג Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו-23 סיביות שבר) ?",
    opts("0xBB2AAAAB", "0xBB2AAAAA", "0xF6555555", "0xF6555556", "0xF02AAAAA", "0xBC555556"), "a",
    r"""$-\frac{1}{384}=\frac{1}{128}\cdot\left(-\frac{1}{3}\right)=(-1)^1\cdot 2^{-7}\cdot 0.010101\ldots=(-1)^1\cdot 2^{-9}\cdot 1.0101010\ldots$
$E-127=-9\Rightarrow E=127-9=118$, $S=1$.
השדות: סימן $1$, אקספוננט $01110110$, שבר $01010101010101010101010|101\ldots$ - עיגול כלפי מעלה של הסיבית האחרונה נותן `0xBB2AAAAB`."""))

# ---------------------------------------------------------------- 4
questions.append(Q(
    4, "number_bases",
    r"מהו ערכו העשרוני של השבר האינסופי $[0.22\ 21\ 21\ 21\ 21\ldots]_5$ בבסיס 5?",
    opts("299/600", "1395/3000", "1493/3000", "13/24", "11/24", "251/600"), "a",
    r"""$X=[0.22\ 21\ 21\ 21\ldots]_5=[0.01]_5+[0.212121\ldots]_5$, כאשר $[0.01]_5=\frac{1}{25}$ ו-$Y=[0.212121\ldots]_5$.
$5^2Y=[21]_5+Y\Rightarrow 24Y=11\Rightarrow Y=\frac{11}{24}$.
$X=\frac{1}{25}+\frac{11}{24}=\frac{24+11\cdot 25}{25\cdot 24}=\frac{24+275}{600}=\frac{299}{600}$."""))

# ---------------------------------------------------------------- 5
questions.append(Q(
    5, "signed_twos_complement",
    "$X$ הוא מספר 2's complement בן 13 סיביות מהן 6 הם מימין לנקודה הבינרית. כלומר:\n"
    r"$X=\langle X_6,X_5,X_4,X_3,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4},X_{-5},X_{-6}\rangle$" + "\n"
    r'ידוע שסיביות $X_4$ ו-$X_2$ הן "1", וסיבית $X_{-2}$ היא "0". מה לא נכון:',
    opts(r"$\langle X\rangle$ יכול להיות $51\frac{39}{64}$",
         r"$\langle X\rangle$ לא יכול להיות $-4\frac{14}{32}$",
         r"$\langle X\rangle$ לא יכול להיות $-49\frac{27}{64}$",
         r"$\langle X\rangle$ יכול להיות $63\frac{9}{16}$",
         r"$\langle X\rangle$ יכול להיות $-33\frac{15}{32}$",
         r"$\langle X\rangle$ לא יכול להיות $-46\frac{11}{32}$"), "a",
    r"""בדיקת כל אפשרות לפי ייצוג 13 הסיביות:
$51\frac{39}{64}=\langle 0110011.100111\rangle$ - הסיביות $X_4,X_2,X_{-2}$ אינן מתאימות ($X_2=0$), לכן $\langle X\rangle$ לא יכול להיות $51\frac{39}{64}$ - זו הטענה הלא נכונה.
$-4\frac{14}{32}=\langle 1111011.100100\rangle$, $-49\frac{27}{64}=\langle 1001110.100101\rangle$ ו-$-46\frac{11}{32}=\langle 1010001.101010\rangle$ - לא יכולים (הטענות "לא יכול" נכונות).
$63\frac{9}{16}=\langle 0111111.100100\rangle$ ו-$-33\frac{15}{32}=\langle 1011110.100010\rangle$ - יכולים."""))

# ---------------------------------------------------------------- 6
questions.append(Q(
    6, "signed_twos_complement",
    r"כדי להציג את תחום המספרים מ- $(-2^{14})$ ועד $(2^{14}-\frac{1}{64})$ צריך מספר בינארי בשיטת המשלים ל-2 בו יש:",
    opts("21 ספרות מהן 15 לחלק השלם.", "22 ספרות מהן 14 לחלק השלם.", "21 ספרות מהן 14 לחלק השלם.",
         "20 ספרות מהן 14 לחלק השלם.", "22 ספרות מהן 16 לחלק השלם.", "20 ספרות מהן 15 לחלק השלם."), "a",
    r"""המשקל $-2^{14}$ הוא של ה-MSB (סיבית הסימן), ולכן יש סיביות מ-0 ועד 14, כלומר 15 סיביות לחלק השלם.
ל-$\frac{1}{64}$ נדרשות 6 סיביות שבר. לכן מדובר ב-$\langle m.n\rangle=\langle 15.6\rangle$, כלומר 21 ספרות מהן 15 לחלק השלם."""))

# ---------------------------------------------------------------- 7
questions.append(Q(
    7, "floating_point",
    "אנו עוסקים בשני מספרים המיוצגים ב- Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו-23 סיביות שבר, Fraction). "
    "מהו היחס בין המספר החיובי הגדול ביותר עם אקספוננט נתון לבין המספר החיובי הקטן ביותר עם אותו אקספוננט?",
    opts(r"או $(2-2^{-23})$ או $(2^{23}-1)$",
         r"או $2$ או $(2-2^{-23})$",
         r"$2-2^{-23}$",
         r"$1-2^{-23}$",
         r"או $(2-2^{-23})$ או $2^{-23}$",
         "אין אפשרות לדעת היות והיחס תלוי בערך האקספוננט שלא נתון לנו"), "a",
    r"""יש להבדיל בין שני המספרים החיוביים עם $E=0$ (דנורמליים) והחיוביים עם $E$ בתחום $1\ldots 254$.
במצב רגיל ($E\ne 0$): מינימום $=2^{E-127}\cdot 1.00\ldots 0$, מקסימום $=2^{E-127}\cdot 1.11\ldots 1=2^{E-127}\cdot(2-2^{-23})$, והיחס בינהם הוא כמובן $(2-2^{-23})$.
במצב שבו האקספוננט הוא 0: $\text{eps}=2^{-23}\cdot 2^{-126}$, $\text{MAX}_0=2^{-126}\cdot(1-2^{-23})$, והיחס בינהם $\frac{1-2^{-23}}{2^{-23}}=2^{23}-1$.
לכן התשובה היא $(2^{23}-1)$ או $(2-2^{-23})$.""",
    note="Options a, b and e each print a leading 'או' (the printed line reads 'או X או Y' in the RTL layout); transcribed as printed. The lecturer's solution answer is '(2^23-1) או (2-2^-23)'."))

# ---------------------------------------------------------------- 8
questions.append(Q(
    8, "datapath_control",
    "הוספנו למעבד ה-MIPS שמימשנו בהרצאות פקודה חדשה. הפקודה, blt (branch less than) פקודה זו קופצת לכתובת של "
    "`PC+4+sext(imm)*4` אם הערך שבאוגר Rs קטן מהערך שבאוגר Rt. אם לא, אזי נמשיך לפקודה הבאה. "
    "אלו שלבים היו מתבצעים במהלך ביצוע הפקודה הזו?",
    opts("Fetch, Decode, ALU", "Fetch, Decode, Write-Back", "Fetch, Decode, ALU, Write-Back", "Fetch, Decode",
         "Fetch, Decode, Memory, Write-Back", "Fetch, Decode, Memory"), "a",
    r"""פקודה זו מתבצעת בדומה ל-beq, אלא שה-ALU מבצע פעולת SLT (במקום חיסור) ונתייחס לתוצאה.
Fetch $\to$ Decode $\to$ ALU, ולפי תוצאת ה-ALU נכניס את כתובת ה-BRANCH ל-PC או את PC+4 - בדיוק כמו ב-beq."""))

# ---------------------------------------------------------------- 9
questions.append(Q(
    9, "latches_flipflops",
    "לפניכם ארבעה דלגלגים (FF-ים), המחוברים בצורת אוגר הזזה (Shift Register). הכניסה משמאל (ל-D3) מחוברת ליציאת שרשרת של 2 שערי XOR, "
    "המבצעים פעולת XOR בין Q3 ל Q2, ואח\"כ XOR בין התוצאה לבין Q0. הערך באוגר ההזזה הוא: [Q3, Q2, Q1, Q0] = [0, 1, 0, 1] כמצויר. "
    "מה יהיה הערך באוגר אחרי 5 עליות שעון?",
    opts(("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,1,1,0]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,1,0,0]"),
         ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,1,0,1]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,0,0,0]"),
         ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,0,0,1]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,0,1,1]")), "a",
    r"""$D_3=Q_3\oplus Q_2\oplus Q_0$ (שאר הדלגלגים מזיזים ימינה).
מצב התחלה $[0,1,0,1]$ (5); אחרי עלייה 1: $[0,0,1,0]$ (2); אחרי 2: $[0,0,0,1]$ (1); אחרי 3: $[1,0,0,0]$ (8); אחרי 4: $[1,1,0,0]$ (12); אחרי 5: $[0,1,1,0]$ (6).""",
    image="images/exams/25B-A-Q9.png"))

# ---------------------------------------------------------------- 10
questions.append(Q(
    10, "mips_assembly_c",
    "נתון קטע הקוד הבא הכתוב בשפת האסמבלי של מעבד ה-MIPS. מה היה הערך ההתחלתי באוגר §3, אם כאשר נגיע ל-end, באוגר §8 יש את המספר 17.\n"
    + code(["addi $7, $0, 1", "addi $8, $0, 0", "lp:    beq  $0, $7, end", "       and  $10, $7, $3",
            "       bne  $10, $0, lab1", "       addi $8, $8, 1", "lab1:  add  $7, $7, $7", "       j    lp", "end:"]),
    opts("0x830F14F6", "0xF2FF16F8", "0x93FE28FE", "0x8326140C", "0x00FF6000", "0xE0FF6348"), "a",
    """`§7` הוא ה-MASK ומתחיל ב-`0x00000001`; בכל סיבוב הוא מוזז שמאלה ב-1 ולכן עובר על כל 32 הביטים, ויוצאים כאשר `§7==0`.
כל פעם מבצעים AND בין ה-MASK ל-`§3`: אם הביט הוא "1" מדלגים (אין `§8++`), אם הביט הוא "0" מבצעים `§8++`.
לכן בסוף `§8` סופר את מספר האפסים (הביטים שערכם "0") שיש במספר שב-`§3`. 17 אפסים משמעו 15 אחדים - רק בתשובה א יש 15 אחדים."""))

# ---------------------------------------------------------------- 11
questions.append(Q(
    11, "number_bases", "מה לא נכון ?",
    opts(("math", r"[1011.1101]_2=[12.4]_8+[1.01]_4"),
         ("math", r"[1A7]_{16}=2\times[266]_8+[323]_4"),
         ("math", r"[2201.125]_{10}=[4231.1]_8"),
         ("math", r"[187]_9=[7]_8+9\times[122]_3")), "a",
    r"""א: $[12.4]_8=[001010.100]_2$ ו-$[1.01]_4=[01.0001]_2$; הסכום הוא $[1011.1001]_2$ (ולא $[1011.1101]_2$) - לכן הטענה לא נכונה.
ב: $[266]_8=[010110110]_2$, $[323]_4=[111011]_2$, $2\times[266]_8+[323]_4=[110100111]_2=[1A7]_{16}$ - נכון.
ג: $[2201.125]_{10}=[100010011001.001]_2=[4231.1]_8$ - נכון.
ד: $[187]_9=[012221]_3$; $9\times[122]_3=[12200]_3$, $[7]_8=7=[21]_3$, והסכום $[12221]_3$ - נכון."""))

# ---------------------------------------------------------------- 12
questions.append(Q(
    12, "signed_twos_complement",
    "במחבר 2's Comp. של 8 ביט יש יציאה הנדלקת כאשר יש Overflow. באיזה מהחישובים הבאים לא תידלק יציאה זו?",
    opts("`10100011 - 00011001`", "`01011111 - 11001001`", "`10101111 + 10111001`",
         "`11000101 - 01100100`", "`01001111 - 11000011`"), "a",
    r"""התחום ב-8 ביט הוא $-128\le X\le 127$.
א: $10100011-00011001=(-93)-25=-118$ - אין גלישה.
ב: $01011111-11001001=95-(-55)=150$ - יש גלישה.
ג: $10101111+10111001=(-81)+(-71)=-152$ - יש גלישה.
ד: $11000101-01100100=(-59)-100=-159$ - יש גלישה.
ה: $01001111-11000011=79-(-61)=140$ - יש גלישה."""))

# ---------------------------------------------------------------- 13
questions.append(Q(
    13, "mips_assembly_c",
    "שורת ה- C הבאה תורגמה לשפת האסמבלי של ה-MIPS.\n`tmp = array[4*i];`\n"
    "ידוע ש- i הוא §3, ש- tmp הוא §4, ושכתובת ההתחלה של array נמצאת ב- §2. מהו התרגום הנכון?",
    opts(code(["add $5, $3, $3", "add $5, $5, $5", "add $5, $5, $5", "add $5, $5, $5", "add $5, $5, $2", "lw  $4, 0($5)"]),
         code(["add $5, $3, $3", "add $5, $5, $5", "add $5, $5, $5", "add $5, $5, $2", "lw  $4, 0($5)"]),
         code(["add $5, $3, $3", "add $5, $5, $5", "add $5, $5, $2", "lw  $4, 0($5)"]),
         code(["add $5, $3, $3", "add $5, $5, $5", "add $5, $5, $5", "add $5, $5, $5", "add $5, $5, $5", "add $5, $5, $2", "lw  $4, 0($5)"])),
    "a",
    r"""הכתובת של `array[4*i]` היא $4\cdot(4\cdot i)+\text{array}=16i+§2$:
`add §5,§3,§3` ($§5=2i$); `add §5,§5,§5` ($4i$); `add §5,§5,§5` ($8i$); `add §5,§5,§5` ($16i$); `add §5,§5,§2` ($§5=§2+16i=\&\text{array}[4i]$); `lw §4,0(§5)` ($\text{tmp}=\text{array}[4i]$)."""))

# ---------------------------------------------------------------- 14
questions.append(Q(
    14, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=\bar C\cdot\bar D+B\cdot\bar D+A\cdot D"),
         ("math", r"F=\bar C\cdot\bar D+B"),
         ("math", r"F=\bar C\cdot\bar D+A+B\cdot\bar D"),
         ("math", r"F=\bar C\cdot D+B\cdot\bar D+A\cdot D")), "a",
    r"""פיתוח לפי כניסות הנתונים של המולטיפלקסר:
$F=\bar A\bar B\bar C\cdot\bar D+\bar A\bar B C\cdot 0+\bar A B\bar C\cdot\bar D+\bar A B C\cdot\bar D+A\bar B\bar C(\bar D+D)+A\bar B C\cdot D+AB\bar C(\bar D+D)+ABC(\bar D+D)=\bar C\bar D+B\bar D+AD$.
בדיקת האפשרויות האחרות: ב - עבור $[A,B,C,D]=[0,1,1,1]$ הביטוי $\bar C\bar D+B$ שווה 1 ואילו $F=0$; ג - עבור $[1,0,1,0]$ הביטוי שווה 1 ואילו $F=0$; ד - עבור $[0,0,0,1]$ הביטוי שווה 1 ואילו $F=0$.""",
    image="images/exams/25B-A-Q14.png"))

# ---------------------------------------------------------------- 15
ROWS15 = {
    "a": ["0000", "0010", "1001", "1011", "0100", "0101", "1100", "1101"],
    "b": ["0001", "0010", "1000", "1011", "0100", "0101", "1100", "1101"],
    "c": ["0000", "0010", "1001", "1011", "0100", "0111", "1100", "1101"],
    "d": ["0000", "0010", "1000", "1011", "0100", "0101", "1100", "1111"],
}
questions.append(Q(
    15, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(*[("math", minterms(ROWS15[k])) for k in "abcd"]), "a",
    r"""נמצא את משוואת $F$ מהמעגל; תחילה נחשב את הקשר בין $AB$ ל-$XY$:
$AB=00\to XY=00$, $AB=01\to XY=10$, $AB=10\to XY=11$, $AB=11\to XY=10$.
$F=(\bar X\bar Y)\cdot(\bar C\bar D+C\bar D)+(X\bar Y)\cdot\bar C+(XY)\cdot D$ (אין מצב $\bar X Y$).
$\Rightarrow F=\bar A\bar B(\bar C\bar D+C\bar D)+(\bar A B+AB)\cdot\bar C\cdot(\bar D+D)+A\bar B(\bar C+C)\cdot D$, ובפיתוח למכפלות מלאות מתקבלת תשובה א.""",
    image="images/exams/25B-A-Q15.png",
    note="Option rows read at 4x zoom; the minterm sets were rebuilt from the printed rows and the key row a recomputed from the circuit by script."))

# ---------------------------------------------------------------- 16
questions.append(Q(
    16, "arithmetic_circuits",
    "בידנו מעגל הכופל את המספר השלם מטיפוס unsigned בן ארבע סיביות $[a_3,a_2,a_1,a_0]_2$ במספר 27 (גם כן unsigned) המיוצג על ידי $[11011]_2$. "
    "המכפל בנוי מרכיבי HA (כלומר Half-Adder) ורכיבי FA (כלומר Full-Adder). עלינו לספור את מספר הרכיבים ומספר היציאות. "
    "אנו כמובן מעדיפים מספר מינימלי של רכיבים (במקום FA לכאורה אפשר להשתמש בשני HA. אם יש כזה מקרה – נעדיף את ה- FA הבודד)\n"
    "מה נכון?",
    opts("יש במכפל 4 רכיבי HA ו-7 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 6 רכיבי HA ו-6 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 6 רכיבי HA ו-4 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 6 רכיבי HA ו-5 רכיבי FA ויש לו 8 יציאות",
         "יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 5 רכיבי HA ו-4 רכיבי FA ויש לו 8 יציאות"), "a",
    r"""מכיוון ש-$27=[11011]_2$, מחברים את ארבע השורות $A\cdot 2^0,\ A\cdot 2^1,\ A\cdot 2^3,\ A\cdot 2^4$ (השורות המתאימות לביטים השווים 1).
מתקבלים $7\times$FA ו-$4\times$HA, ויש 9 יציאות ($y_0\ldots y_8$)."""))

# ---------------------------------------------------------------- 17
questions.append(Q(
    17, "mips_machine_code",
    "הפקודה `beq §s3, §a1, lab1` נמצאת בכתובת `0x400330`. הכתובת של lab1 היא `0x400550`.\n"
    "מהו התרגום הנכון שלה לשפת המכונה של מעבד ה-MIPS?",
    opts("0x12650087", "0x10B3021F", "0x12650088", "0x10B30088", "0x12650219", "0x12650220"), "a",
    r"""$\text{beq}\Rightarrow$ opcode $=4$, $\text{Rs}=§s3=§19$, $\text{Rt}=§a1=§5$.
ההפרש בין הכתובות: $\texttt{0x400550}-\texttt{0x400330}=\texttt{0x220}$ בתים, כלומר $\texttt{0x88}$ מילים. צריך לקפוץ $\texttt{0x88}$ מילים קדימה אך מכיוון שה-PC כבר הוגדל ב-4, ה-imm הוא $\texttt{0x87}$.
$000100\ |\ 10011\ |\ 00101\ |\ 0000\,0000\,1000\,0111\Rightarrow\texttt{0x12650087}$."""))

# ---------------------------------------------------------------- 18
questions.append(Q(
    18, "datapath_control",
    "במעבד ה- MIPS Single Cycle שלמדנו מי מהצירופים הרשומים מטה של אותות הבקרה נכון לפקודת beq? (יש ציור נוסף של המעבד בנספח לבחינה)",
    opts("ALUOp=01 (sub);  RegDst=0; ALUSrc=0;  RegWrite=0;  Jump=0",
         "ALUOp=10 (func);  RegDst=1; MemRead=0;  RegWrite=1;  Branch=1",
         "ALUOp=01 (sub);  RegDst=1; MemWrite=0;  Jump=1;  Branch=1",
         "ALUOp=00 (add);  RegDst=1; MemRead=0;  RegWrite=0;  Branch=1",
         "ALUOp=10 (func);  RegDst=0; ALUSrc=0;  RegWrite=0;  Branch=1",
         "ALUOp=01 (sub);  RegDst=0; MemWrite=0;  RegWrite=1;  Jump=0"), "a",
    r"""בפקודת beq אותות הבקרה הם: ALUSrc=0, ALUOp=01 (SUB), MemRead=0, MemWrite=0, MemtoReg=X, RegDst=X, RegWrite=0, Branch=1, Jump=0.
רק האפשרות א מתאימה.""",
    image="images/exams/25B-A-Q18.png",
    note="Datapath figure is a low-resolution source scan; control-signal labels in it are not legible in the source."))

# ---------------------------------------------------------------- 19
questions.append(Q(
    19, "mips_machine_code",
    "הפקודה `0x03DD082A` בשפת מכונה של ה-MIPS הינה בעצם פקודת האסמבלי הבאה:",
    opts(code(["slt $at, $fp, $sp"]), code(["slt $fp, $sp, $at"]), code(["beq $fp, $sp, 0x082A"]),
         code(["bne $sp, $fp, 2378"]), code(["xor $fp, $sp, $at"]), code(["xor $fp, $sp, $t1"])), "a",
    r"""`0x03DD082A` $=\ 000000\ |\ 11110\ |\ 11101\ |\ 00001\ |\ 00000\ |\ 101010$.
opcode $=0\Rightarrow$ R-type; $\text{Rs}=§30=§fp$, $\text{Rt}=§29=§sp$, $\text{Rd}=§1=§at$, funct $=42=\text{slt}$.
$\Rightarrow$ `slt §at, §fp, §sp`"""))

# ---------------------------------------------------------------- 20
C_CODE = ["ptr = &array[0];", "a = *ptr;", "b = a;", "for(i=0; i<size; i++)", "  {", "    if (*ptr>a)  a = *ptr;",
          "    if (*ptr<b)  b = *ptr;", "    ptr++;", "  }"]
ASM_1 = ["add $6, $0, $4", "lw  $7, 0($6)", "addi $8, $7, 0", "addi $9, $0, 0", "j lb4", "lb1: lw  $11, 0($6)", "slt  $1, $7, $11"]
ASM_2 = ["addi $9, $9, 1", "lb4: slt  $1, $9, $5", "bne  $1, $0, lb1"]


def alt20(b1, s1, b2, step):
    return code([f"{b1}  $1, $0, lb2", "add  $7, $11, $0", f"lb2: slt  $1, {s1}", f"{b2}  $1, $0, lb3",
                 "sub  $8, $11, $0", f"lb3: addi $6, $6, {step}"])


questions.append(Q(
    20, "mips_assembly_c",
    "קטע ה- C הבא תורגם לשפת הסף (אסמבלי) של מחשב MIPS. הנח כי כתובת ההתחלה של array נמצאת באוגר §4. "
    "הערך size שהוא גודל המערך נמצא באוגר §5. המערך הינו מערך של מילים (1 Word = 4 bytes). אוגרים §4 ו- §5 צריכים להישאר ללא שינוי.\n"
    + code(C_CODE) + "\nלהלן התרגום:\n" + code(ASM_1) + "\n`@@@@@@@`\n" + code(ASM_2) + "\n"
    "מהתרגום נשמטו פקודות במקום המסומן ב- @@@@@@@. הפקודות החסרות הן:",
    opts(alt20("beq", "$11, $8", "beq", "4"),
         alt20("bne", "$11, $8", "bne", "4"),
         alt20("beq", "$8, $11", "beq", "4"),
         alt20("beq", "$8, $11", "bne", "4"),
         alt20("beq", "$11, $8", "beq", "1"),
         alt20("bne", "$11, $8", "bne", "1")), "a",
    """התרגום: `slt §1,§7,§11` בודק `if (*ptr>a)`; אם `§1==0` מדלגים על `a = *ptr` (`beq §1,§0,lb2`), אחרת `add §7,§11,§0`.
`lb2: slt §1,§11,§8` בודק `if (*ptr<b)`; אם `§1==0` מדלגים (`beq §1,§0,lb3`), אחרת `sub §8,§11,§0` (`b = *ptr`); `lb3: addi §6,§6,4` מקדם את `ptr` למילה הבאה.
ב, ו: תנאי הפוך (bne במקום beq); ג: ההשוואה ב-slt הפוכה; ד: ההשוואה הפוכה והתנאי הפוך (מתקבל `if (*ptr<=b) b=*ptr`); ה: `ptr` מקודם ב-1 ולא ב-4."""))

exam = {
    "examCode": "25B-A",
    "examLabel": "2025 סמסטר א מועד ב",
    "year": 2025,
    "examDate": "18.03.2025",
    "sourceFile": "sitting 25B-A (exam pages 2-17)",
    "keyFile": "sitting 25B-A pp.2-17 (circled options) + pp.18-33 (handwritten solution)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
