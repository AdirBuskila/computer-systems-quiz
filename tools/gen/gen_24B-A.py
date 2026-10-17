# -*- coding: utf-8 -*-
"""Generator for tools/raw/24B-A.json -- computer-systems, 2024 semester A, moed B (16.4.2024).
Run: PYTHONUTF8=1 py tools/gen/gen_24B-A.py

Source: sitting 24B-A pp.2-16 (20 MCQ x 5 pts, p.1 is the cover) with the lecturer's circled options; p.17 is blank and
pp.18-33 are his handwritten solution pages (key + short working). Literal MIPS register dollars in plain text are written
with the section sign (reg() turns it into an escaped dollar); inside fenced code a plain $ is fine.
Key (circled): option a in every question.
Keys recomputed by script (tools/verify/24B-A/check.py): all 20 agree (Q1 truth tables, Q2/Q17/Q19 encodings,
Q3 float32 rounding, Q4/Q8/Q11 base conversions, Q5 bit patterns, Q9 shift-register cycle, Q10/Q13/Q20 MIPS simulation,
Q12 overflow, Q14/Q15 circuits, Q16 FA/HA count, Q18 ranges, Q6/Q7 by enumeration / mini-float model).
Slip noted in the lecturer's working: Q12 option b is written (-103)-50=-153; the exact values are -105-50=-155 (still overflow).
Handwritten Hebrew explanation text is reconstructed from the solution pages; the formulas are exact."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "24B-A.json"
IDS = "abcdef"


def opts(*vals):
    out = []
    for i, v in enumerate(vals):
        if isinstance(v, tuple):
            out.append({"id": IDS[i], "type": v[0], "value": v[1]})
        else:
            out.append({"id": IDS[i], "type": "text", "value": v})
    return out


def fence(lines, tag="asm"):
    """Fenced multi-line code block (literal; '$' stays as is)."""
    return "```" + tag + "\n" + "\n".join(lines) + "\n```"


def reg(s):
    """Section sign marks a literal register dollar (MIPS register) in plain text."""
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


questions = []

# ---------------------------------------------------------------- 1
questions.append(Q(
    1, "boolean_algebra", "מי מהמשוואות הבאות אינה נכונה?",
    opts(("math", r"(A\oplus B)\cdot(A\oplus C)=A\oplus\overline{(B\oplus C)}"),
         ("math", r"(A\oplus B)\cdot\overline{(A\oplus C)}=\bar A\cdot\bar C\cdot B+\bar B\cdot C\cdot A"),
         ("math", r"(A\oplus B)\oplus(C\oplus E)\oplus\overline{(D\oplus C)}\oplus(\bar B\oplus D)=(\bar A\oplus C)\oplus(\bar C\oplus E)"),
         ("math", r"\overline{B\cdot A}+\overline{D\cdot C}=A\cdot(B\cdot(C\cdot\bar D+\bar C)+\bar B)+\bar A")),
    "a",
    r"""א: $(A\oplus B)(A\oplus C)=(\bar AB+A\bar B)(\bar AC+A\bar C)=\bar ABC+A\bar B\bar C$, ואילו $A\oplus\overline{(B\oplus C)}=A(B\oplus C)+\bar A\,\overline{(B\oplus C)}=A\bar BC+AB\bar C+\bar A\bar B\bar C+\bar ABC$. למשל עבור $ABC=100$ האגף השמאלי הוא 1 והאגף הימני הוא 0 - המשוואה אינה נכונה.
ב: $(A\oplus B)\cdot\overline{(A\oplus C)}=(\bar AB+A\bar B)(\bar A\bar C+AC)=\bar AB\bar C+A\bar BC$ - נכונה.
ג: $A\oplus B\oplus C\oplus E\oplus\bar D\oplus C\oplus\bar B\oplus D=A\oplus(B\oplus\bar B)\oplus(C\oplus C)\oplus(D\oplus\bar D)\oplus E=A\oplus E$, וגם $\bar A\oplus C\oplus\bar C\oplus E=A\oplus E$ - נכונה.
ד: $\overline{AB}+\overline{CD}=\bar A+\bar B+\bar C+\bar D$ ומנגד $\bar A+A(\bar B+B(\bar C+C\bar D))=\bar A+\bar B+\bar C+\bar D$ (לפי $x+\bar xy=x+y$) - נכונה."""))

# ---------------------------------------------------------------- 2
questions.append(Q(
    2, "mips_machine_code",
    "מה יהיה באוגר §4 אחרי ביצוע הפקודות הבאות:\n" + fence(["lui  $4, 0x2468", "addi $4, $4, 0xFDB9", "addi $4, $4, 0x1357"]),
    opts("0x24681110", "0x24671110", "0x24683210", "0x24673210", "0x24661111", "0x24661116"), "a",
    r"""`lui` נותן $§4=\texttt{0x24680000}$. ב-`addi` הקבוע 0xFDB9 עובר הרחבת סימן ל-0xFFFFFDB9, ולכן $§4=\texttt{0x24680000}+\texttt{0xFFFFFDB9}=\texttt{0x2467FDB9}$.
לאחר מכן $\texttt{0x2467FDB9}+\texttt{0x00001357}=\texttt{0x24681110}$."""))

# ---------------------------------------------------------------- 3
questions.append(Q(
    3, "floating_point",
    r"המספר $\frac{2}{3}$ בבסיס 2 הוא השבר הבינארי האינסופי:" + "\n"
    r"$[0.10\ 10\ 10\ 10\ 10\ 10\ 10\ \ldots]_2$" + "\n"
    r"כיצד ייוצג המספר $1000\frac{2}{3}$ בייצוג Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר) ?",
    opts("0x447A2AAB", "0x447A2AAA", "0x447B2A2B", "0x447B2A2A", "0x447D1555", "0x447D1556"), "a",
    r"""$1000\frac{2}{3}=2^0\cdot 1111101000.101010\ldots_2=(-1)^0\cdot 2^9\cdot 1.111101000101010\ldots$ (כי $1000=31\cdot 32+8$).
$S=0$, $E=9+127=136$, השבר $F=111101000\,1010101010101\,010\ldots$
עיגול של 23 הסיביות כלפי מעלה (הסיביות הנגרעות הן $1010\ldots$, יותר ממחצית), ולכן הנייבל האחרון $1010$ הופך ל-$1011$:
$0\,|\,10001000\,|\,11110100010101010101011\Rightarrow\texttt{0x447A2AAB}$."""))

# ---------------------------------------------------------------- 4
questions.append(Q(
    4, "number_bases",
    r"מהו ערכו העשרוני של השבר האינסופי $[0.23\ 10\ 10\ 10\ 10\ 10\ \ldots]_5$ בבסיס 5?",
    opts("317/600", "53/102", "319/604", "159/301", "158/299", "25/47"), "a",
    r"""$X=[0.23\ 101010\ldots]_5=[0.13]_5+Y$, כאשר $Y=[0.10\ 10\ 10\ldots]_5$.
$5^2Y=[10]_5+Y\Rightarrow 25Y=5+Y\Rightarrow Y=\frac{5}{24}$.
$X=1\cdot\frac{1}{5}+3\cdot\frac{1}{25}+\frac{5}{24}=\frac{8}{25}+\frac{5}{24}=\frac{8\cdot 24+25\cdot 5}{600}=\frac{192+125}{600}=\frac{317}{600}$."""))

# ---------------------------------------------------------------- 5
questions.append(Q(
    5, "signed_twos_complement",
    "$X$ הוא מספר 2's complement בן 13 סיביות מהן 6 הם מימין לנקודה הבינרית. כלומר:\n"
    r"$X=\langle X_6,X_5,X_4,X_3,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4},X_{-5},X_{-6}\rangle$" + "\n"
    r'סיביות $X_4$ , $X_2$ ו- $X_{-2}$ הן "1". מה לא נכון:',
    opts(r"$\langle X\rangle$ יכול להיות $-42\frac{22}{64}$",
         r"$\langle X\rangle$ יכול להיות $-\frac{3}{4}$",
         r"$\langle X\rangle$ יכול להיות $-42\frac{43}{64}$",
         r"$\langle X\rangle$ לא יכול להיות $60\frac{1}{2}$",
         r"$\langle X\rangle$ לא יכול להיות $-30\frac{1}{2}$",
         r"$\langle X\rangle$ לא יכול להיות $\frac{7}{64}$"), "a",
    r"""$42\frac{22}{64}=\langle 0101010.010110\rangle\Rightarrow -42\frac{22}{64}=\langle 1010101.101010\rangle$: כאן $X_4=1$ ו-$X_2=1$ אבל $X_{-2}=0$, ולכן המספר לא יכול להיות $-42\frac{22}{64}$ - הטענה "יכול" לא נכונה.
$-\frac{3}{4}=\langle 1111111.010000\rangle$ ו-$-42\frac{43}{64}=\langle 1010101.010101\rangle$ - שניהם מקיימים את שלושת התנאים (יכולים).
$60\frac{1}{2}$, $-30\frac{1}{2}$ (שבר $.100000$) ו-$\frac{7}{64}=0.000111$ - בכולם $X_{-2}=0$, ולכן לא יכולים (הטענות "לא יכול" נכונות)."""))

# ---------------------------------------------------------------- 6
questions.append(Q(
    6, "unsigned_numbers",
    r"$X$ הוא שבר unsigned עם 7 סיביות מימין לנקודה הבינרית. לפיכך אפשר להציג בו רק $2^7$ של שברים. "
    "אם מבקשים להציג שבר כלשהו ואי אפשר להציגו במדויק, או שנקצץ סיביות מימין לסיבית השביעית או שנעגל ל-7 סיביות שבר. "
    "מה מהתשובות נכון לגבי השגיאה (עבור ערך שבר כלשהו):",
    opts(r"השגיאה בערכה המוחלט תהיה תמיד קטנה או שווה ל- $\frac{1}{256}$ אם נעגל",
         r"השגיאה בערכה המוחלט תהיה תמיד גדולה מ- $\frac{1}{256}$ אם נעגל",
         r"השגיאה בערכה המוחלט תהיה תמיד גדולה מ- $\frac{1}{128}$ אם נקצץ",
         r"השגיאה בערכה המוחלט תהיה תמיד קטנה או שווה ל- $\frac{1}{512}$ אם נעגל",
         r"השגיאה בערכה המוחלט תהיה תמיד גדולה מ- $\frac{1}{512}$ אם נקצץ"), "a",
    r"""כדי לעגל מוסיפים $\frac{1}{256}=\frac{1}{2^8}$ וקוצצים מימין לספרה השביעית, ולכן הטעות היא בתחום $[-\frac{1}{256},\frac{1}{256}]$; כלומר השגיאה בעיגול היא תמיד קטנה או שווה ל-$\frac{1}{256}$ - תשובה א נכונה.
ב: שגוי, כי השגיאה בעיגול אינה תמיד גדולה מ-$\frac{1}{256}$ (היא קטנה או שווה לו).
ג: בקיצוץ תחום השגיאה הוא $[0,\frac{1}{128})$, כלומר השגיאה יכולה להיות קטנה מ-$\frac{1}{128}$ - לכן ג שגוי.
ד: $\frac{1}{512}<\frac{1}{256}$ - הגבול הזה אינו נכון, כי השגיאה בעיגול יכולה להגיע ל-$\frac{1}{256}$.
ה: בקיצוץ השגיאה יכולה להיות 0, ולכן היא לא תמיד גדולה מ-$\frac{1}{512}$."""))

# ---------------------------------------------------------------- 7
questions.append(Q(
    7, "floating_point",
    r"אנו עוסקים במספרים המיוצגים ב- Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר, Fraction). "
    r"כמה מספרים רצופים יש שהמרחק ביניהם הוא $2^{-100}$?" + "\n" "מה נכון:",
    opts(r"יש שתי קבוצות של $2^{23}+1$ מספרים רצופים כאלה",
         r"יש קבוצה אחת של $2^{23}+1$ מספרים רצופים כאלה",
         r"יש שתי קבוצות של $2^{24}+1$ מספרים רצופים כאלה",
         r"יש קבוצה אחת של $2^{24}+1$ מספרים רצופים כאלה",
         r"יש קבוצה אחת של $2^{23}-1$ מספרים רצופים כאלה וקבוצה נוספת של $2^{23}+1$ מספרים רצופים כאלה",
         r"יש קבוצה אחת של $2^{24}-1$ מספרים רצופים כאלה וקבוצה נוספת של $2^{24}+1$ מספרים רצופים כאלה"), "a",
    r"""המרחק בין שני מספרים עם אותו אקספוננט $E$ (שאינם דנורמליים) הוא $2^{E-127}\cdot 2^{-23}=2^{E-150}$.
במקרה שלנו $2^{E-150}=2^{-100}$, ולכן $E=50$.
יש 2 קבוצות של מספרים עם $E=50$: כשהסימן הוא (+) וכשהסימן הוא (-). בכל קבוצה יש את כל הקומבינציות של $F$; ל-$F$ יש 23 סיביות, ולכן בכל קבוצה $2^{23}$ מספרים (ועוד אחד, המספר הראשון של האקספוננט הבא, באותו מרחק).
לכן התשובה הנכונה היא א.""",
    note="Printed '1+2^23' etc. read as the counts 2^23+1, 2^23-1, 2^24+1, 2^24-1 (RTL layout puts the 1 on the other side). Key a checked by mini-float enumeration (one run of 2^F+1 per sign)."))

# ---------------------------------------------------------------- 8
questions.append(Q(
    8, "number_bases",
    r"הערך של המנה של שני השברים הבאים $[0.44444\ldots]_7\ /\ [0.44444\ldots]_9$ הוא:",
    opts("4/3", "1/3", "7/8", "8/7", "1/5", "5/4"), "a",
    r"""$X=[0.444\ldots]_7\Rightarrow 7X=4+X\Rightarrow 6X=4\Rightarrow X=\frac{2}{3}$.
$Y=[0.444\ldots]_9\Rightarrow 9Y=4+Y\Rightarrow 8Y=4\Rightarrow Y=\frac{1}{2}$.
$\frac{X}{Y}=\frac{2/3}{1/2}=\frac{4}{3}$.""",
    note="The bidi layout prints the base-9 fraction on the right; read left to right as the lecturer's solution does (numerator base 7, denominator base 9); 3/4 is not an option."))

# ---------------------------------------------------------------- 9
questions.append(Q(
    9, "latches_flipflops",
    "לפניכם שלושה דלגלגים (FF-ים), המחוברים בצורת אוגר הזזה (Shift Register). הכניסה משמאל (ל-D2) מחוברת ליציאת שער XOR, "
    "המבצע פעולת XOR בין Q0 להיפוך של Q2.\n"
    "הערך באוגר ההזזה הוא: [Q2, Q1, Q0] = [0, 1, 1], כמצויר. מה היה הערך לפני 8 עליות שעון?",
    opts(("math", r"[Q_2,Q_1,Q_0]=[1,1,0]"), ("math", r"[Q_2,Q_1,Q_0]=[0,0,0]"), ("math", r"[Q_2,Q_1,Q_0]=[0,1,0]"),
         ("math", r"[Q_2,Q_1,Q_0]=[1,0,0]"), ("math", r"[Q_2,Q_1,Q_0]=[0,0,1]")), "a",
    r"""$D_2=1$ אם $Q_2=Q_0$, ו-$D_2=0$ אם $Q_2\ne Q_0$ (כלומר $D_2=Q_0\oplus\bar Q_2$); כל עלייה מזיזה: $Q_2\leftarrow D_2$, $Q_1\leftarrow Q_2$, $Q_0\leftarrow Q_1$.
בונים טבלה של המצבים העוקבים; מתקבל מחזור של 7 מצבים:
$[0,1,1]\to[0,0,1]\to[0,0,0]\to[1,0,0]\to[0,1,0]\to[1,0,1]\to[1,1,0]\to[0,1,1]$.
8 עליות שעון אחורה = (7 + 1), כלומר המצב לפני עלייה אחת: $[1,1,0]$.""",
    image="images/exams/24B-A-Q9.png"))

# ---------------------------------------------------------------- 10
questions.append(Q(
    10, "mips_assembly_c",
    "מהו התרגום השגוי באסמבלי של ה-MIPS לשורת ה-C:  `a = a - 3*b;`\nהנח שמותר להשתמש באוגר §1.",
    opts(fence(["sub $5, $5, $6", "add $6, $6, $6", "sub $5, $5, $6"]),
         fence(["sub $5, $5, $6", "sub $5, $5, $6", "sub $5, $5, $6"]),
         fence(["add $1, $6, $6", "sub $5, $5, $6", "sub $5, $5, $1"]),
         fence(["add $1, $6, $6", "add $1, $1, $1", "add $5, $5, $6", "sub $5, $5, $1"])), "a",
    r"""(ההנחה: a הוא §5 ו-b הוא §6.)
א: `sub §5,§5,§6` ($a=a-b$); `add §6,§6,§6` ($b=2b$); `sub §5,§5,§6` ($a=a-b-2b=a-3b$). הערך של a נכון, אך התרגום הרס את b (§6 הוכפל) - לכן הוא השגוי.
ב: $a=a-b-b-b=a-3b$ ✓. ג: $§1=2b$; $a=a-b$; $a=a-b-2b=a-3b$ ✓. ד: $§1=2b$, $§1=4b$; $a=a+b$; $a=a+b-4b=a-3b$ ✓."""))

# ---------------------------------------------------------------- 11
questions.append(Q(
    11, "number_bases", "מה נכון ?",
    opts(("math", r"[1324.31]_9=[1100211.1001]_3"), ("math", r"[1324.31]_9=[11110100.1101]_3"),
         ("math", r"[1324.31]_9=[11110201.111]_3"), ("math", r"[1324.31]_9=[1102020.2001]_3"),
         ("math", r"[1324.31]_9=[110211.1001]_3"), ("math", r"[1324.31]_9=[111020.1011]_3")), "a",
    r"""כל ספרה בבסיס 9 היא שתי ספרות בבסיס 3: $[0]_9=[00]_3$, $[1]_9=[01]_3$, $[2]_9=[02]_3$, $[3]_9=[10]_3$, $[4]_9=[11]_3$, ...
$[1324.31]_9=[01\ 10\ 02\ 11\ .\ 10\ 01]_3=[1100211.1001]_3$."""))

# ---------------------------------------------------------------- 12
questions.append(Q(
    12, "signed_twos_complement",
    "במחבר 2's Comp. של 8 ביט יש יציאה הנדלקת כאשר יש Overflow. באיזה מהחישובים הבאים לא תידלק יציאה זו?",
    opts("`10100111 - 00011101`", "`10010111 - 00110010`", "`10110101 + 11000101`",
         "`01001101 + 00110111`", "`01000101 - 10111010`"), "a",
    r"""התחום ב-8 ביט הוא $-128\le ASLT\le 127$ ויש Overflow אם התוצאה מחוץ לתחום.
א: $10100111-00011101=(-89)-29=-118$ - אין גלישה.
ב: $10010111-00110010=(-105)-50=-155$ - יש גלישה.
ג: $10110101+11000101=(-75)+(-59)=-134$ - יש גלישה.
ד: $01001101+00110111=77+55=132$ - יש גלישה.
ה: $01000101-10111010=69-(-70)=139$ - יש גלישה.""",
    note="In the lecturer's working option b is written (-103)-50=-153; the exact values are (-105)-50=-155. Both overflow, so the key is unaffected."))

# ---------------------------------------------------------------- 13
questions.append(Q(
    13, "mips_assembly_c",
    "רק אחד מהתרגומים הבאים בשפת אסמבלי של ה-MIPS לקטע ה-C הבא הוא נכון. מהו התרגום הנכון?\n"
    + fence(["if (a >= b) a = 2*a;", "else  b = 2*b;"], "c"),
    opts(fence(["      slt  $1, $3, $4", "      beq  $1, $0, lab1", "      add  $4, $4, $4", "      beq  $0, $0, end",
                "lab1: add  $3, $3, $3", "end:"]),
         fence(["      slt  $1, $3, $4", "      bne  $1, $0, lab1", "      add  $4, $4, $4", "      beq  $0, $0, end",
                "lab1: add  $3, $3, $3", "end:"]),
         fence(["      slt  $1, $4, $3", "      bne  $1, $0, lab1", "      add  $3, $3, $3", "      beq  $0, $0, end",
                "lab1: add  $4, $4, $4", "end:"]),
         fence(["      slt  $1, $3, $4", "      beq  $1, $0, lab1", "      add  $3, $3, $3", "      beq  $0, $0, end",
                "lab1: add  $4, $4, $4", "end:"])), "a",
    r"""(a הוא §3 ו-b הוא §4.) `slt §1,a,b` נותן $§1=1$ אם $a<b$ ו-$§1=0$ אם $a\ge b$.
א: אם $a\ge b$ (כלומר $§1=0$) קופצים ל-`lab1` ומבצעים $a=2a$; אחרת $b=2b$ - נכון.
ב: מבצע $a=2a$ כאשר $a<b$ - שגוי.
ג: `slt §1,b,a` ו-`bne` - מבצע $a=2a$ כאשר $a<b$ (ובמקרה $a>b$ מכפיל את b) - שגוי.
ד: כאשר $a\ge b$ מבצע $b=2b$ - הפוך, ולכן שגוי."""))

# ---------------------------------------------------------------- 14
questions.append(Q(
    14, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=A\cdot\bar B+\bar C\cdot D+A\cdot C\cdot\bar D+\bar A\cdot B\cdot\bar C"),
         ("math", r"F=A\cdot\bar B+\bar C\cdot D+\bar A\cdot B+A\cdot C\cdot\bar D"),
         ("math", r"F=A\cdot\bar B+C\cdot D+A\cdot C\cdot\bar D+\bar A\cdot B\cdot\bar C"),
         ("math", r"F=A\cdot\bar B+\bar C\cdot D+A\cdot C"),
         ("math", r"F=A\cdot\bar B+\bar C\cdot D+A\cdot C\cdot\bar D")), "a",
    r"""פיתוח לפי כניסות הנתונים של המולטיפלקסר ($[ABC]$ הם הבוררים):
$F=(\bar A\bar B\bar C)D+(\bar A\bar BC)\cdot 0+(\bar AB\bar C)\cdot 1+(\bar ABC)\cdot 0+(A\bar B\bar C)\cdot 1+(A\bar BC)\cdot 1+(AB\bar C)D+(ABC)\bar D$
$=\sum(1,4,5,8,9,10,11,13,14)=A\bar B+\bar CD+AC\bar D+\bar AB\bar C$.
ב: עבור $ABCD=011X$ מתקבל $F=0$ במעגל, אך בב $F=1$ (בגלל $\bar AB$). ג: עבור $ABCD=0011$ המעגל נותן 0 ובג $F=1$ (בגלל $CD$). ד: עבור $ABCD=1111$ המעגל נותן 0 ובד $F=1$ (בגלל $AC$). ה: עבור $ABCD=0100$ המעגל נותן 1 ובה $F=0$.""",
    image="images/exams/24B-A-Q14.png",
    note="In option e a stray speck sits above C in the scan; read as A*C*Dbar (the other reading A*Cbar*Dbar also differs from the circuit, so the key is unaffected)."))

# ---------------------------------------------------------------- 15
questions.append(Q(
    15, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=\bar A\cdot C+A\cdot B\cdot(\bar C\cdot D+C\cdot\bar D)+A\cdot\bar B\cdot D"),
         ("math", r"F=A\cdot\bar C+A\cdot B\cdot(\bar C\cdot D+C\cdot\bar D)+A\cdot\bar B\cdot(C\cdot D+\bar C\cdot\bar D)"),
         ("math", r"F=\bar A\cdot C+A\cdot B\cdot(\bar C\cdot D+C\cdot\bar D)+A\cdot\bar B\cdot(C\cdot D+\bar C\cdot\bar D)"),
         ("math", r"F=\bar A\cdot C+A\cdot\bar B\cdot(\bar C\cdot D+C\cdot\bar D)+\bar A\cdot B\cdot D")), "a",
    r"""מהמעגל: ערכי הבוררים לפי $AB$: $AB=00\to XY=00$, $AB=01\to XY=00$, $AB=10\to XY=10$, $AB=11\to XY=01$ (קו ה-$AB=01$ מוביל לכניסה שאינה נבחרת).
$F=(\bar A\bar B+\bar AB)\cdot C+A\bar B\cdot(\bar CD+CD)+AB\cdot(\bar CD+C\bar D)$, כאשר $\bar A\bar B+\bar AB=\bar A$ ו-$\bar CD+CD=D$.
$\Rightarrow F=\bar AC+A\bar BD+AB(\bar CD+C\bar D)$ - תשובה א.""",
    image="images/exams/24B-A-Q15.png"))

# ---------------------------------------------------------------- 16
questions.append(Q(
    16, "arithmetic_circuits",
    "בידנו מעגל הכופל את המספר השלם מטיפוס unsigned בן חמש סיביות $[a_4,a_3,a_2,a_1,a_0]_2$ במספר 23 (גם כן unsigned) המיוצג על ידי $[10111]_2$. "
    "המכפל בנוי מרכיבי HA (כלומר Half-Adder) ורכיבי FA (כלומר Full-Adder). עלינו לספור את מספר הרכיבים ומספר היציאות. "
    "אנו כמובן מעדיפים מספר מינימלי של רכיבים (במקום FA לכאורה אפשר להשתמש בשני HA. אם יש כזה מקרה – נעדיף את ה- FA הבודד)\n"
    "מה נכון?",
    opts("יש במכפל 5 רכיבי HA ו-10 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 5 רכיבי HA ו-10 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 6 רכיבי HA ו-9 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 6 רכיבי HA ו-9 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 7 רכיבי HA ו-8 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 7 רכיבי HA ו-8 רכיבי FA ויש לו 9 יציאות"), "a",
    r"""$23=[10111]_2$, ולכן מחברים ארבע שורות של $A$ (מוזזות ב-0, 1, 2 ו-4 מקומות), ומתקבלת רשת של $10$ רכיבי FA ו-$5$ רכיבי HA.
מספר היציאות: $511<23\times 31=713<1023$, ולכן 10 יציאות ($y_0\ldots y_9$)."""))

# ---------------------------------------------------------------- 17
questions.append(Q(
    17, "mips_machine_code",
    "מהו התרגום של הפקודה `addi §sp, §fp, -4120` לשפת המכונה של ה-MIPS ?",
    opts("0x23DDEFE8", "0x23DDF018", "0x23BEEFE8", "0x23BEF018", "0x23DD4120", "0x23BE4120"), "a",
    r"""$\text{ADDI}=8=001000$; $\text{Rs}=§fp=§30=11110$; $\text{Rt}=§sp=§29=11101$; $\text{imm}=-4120$.
$4120=\texttt{0x1018}$ ($4096+16+8$), ולכן $-4120=\texttt{0xEFE8}$.
$001000\ |\ 11110\ |\ 11101\ |\ 1110111111101000\Rightarrow\texttt{0x23DDEFE8}$."""))

# ---------------------------------------------------------------- 18
questions.append(Q(
    18, "signed_twos_complement",
    "$X$ הוא מספר בן 12 ביט מהם 7 הם מימין לנקודה הבינרית. כלומר:\n"
    r"$X=X_4,X_3,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4},X_{-5},X_{-6},X_{-7}$" + "\n"
    "עליכם למצוא את תחום המספרים אותו ניתן להציג כמספרים לא מכוונים (unsigned) וכמספרים מכוונים (2's complement signed).",
    opts(r"כ-Signed מ- $(-2^4)$ ועד $(2^4-2^{-7})$ וכ-Unsigned מ-0 ועד $(2^5-2^{-7})$",
         r"כ-Signed מ- $(-2^5)$ ועד $(2^5-2^{-7})$ וכ-Unsigned מ-0 ועד $(2^5-2^{-7})$",
         r"כ-Signed מ- $(-2^5)$ ועד $(2^5-2^{-8})$ וכ-Unsigned מ-0 ועד $(2^4-2^{-8})$",
         r"כ-Signed מ- $(-2^4)$ ועד $(2^4-2^{-8})$ וכ-Unsigned מ-0 ועד $(2^5-2^{-8})$"), "a",
    r"""$[n.m]=[5.7]$ (5 סיביות לחלק השלם ו-7 לשבר).
Unsigned: $0\ \ldots\ (2^n-2^{-m})=(2^5-2^{-7})$.
Signed: $-2^{n-1}\ \ldots\ (2^{n-1}-2^{-m})=-2^4\ \ldots\ (2^4-2^{-7})$."""))

# ---------------------------------------------------------------- 19
questions.append(Q(
    19, "mips_machine_code",
    "הפקודה `0x37971234` בשפת מכונה של ה-MIPS הינה בעצם פקודת האסמבלי הבאה:",
    opts("`ori $s7, $gp, 4660`", "`ori $gp, $s7, 4660`", "`ori $s7, $gp, 1234`", "`ori $gp, $s7, 1234`",
         "`addi $s7, $gp, 4660`", "`addi $gp, $s7, 1234`"), "a",
    r"""`0x37971234` $=\ 0011\,01\,|\,11100\,|\,10111\,|\,0001\,0010\,0011\,0100$.
$\text{OPCOD}=13\Rightarrow\text{ORI}$; $\text{Rs}=§28=§gp$; $\text{Rt}=§23=§s7$; $\text{imm}=\texttt{0x1234}=4096+512+48+4=4660$.
$\Rightarrow$ `ori §s7, §gp, 4660`"""))

# ---------------------------------------------------------------- 20
C_CODE = ["m = -999;", "for(i=0; i<size; i++)", "{", "if (m < array[i])   m = array[i];", "}"]
ASM = ["        addi $8, $0, -999", "        addi $7, $0, 0", "lb1:    slt  $11, $7, $5", "        beq  $11, $0, lb2",
       "        add  $9, $7, $7", "        add  $9, $9, $9", "@@@@@@@", "lb3:    addi $7, $7, 1",
       "        beq  $11, $11, lb1", "lb2:"]
questions.append(Q(
    20, "mips_assembly_c",
    "קטע ה- C הבא תורגם לשפת הסף (אסמבלי) של מחשב MIPS. הנח כי כתובת ההתחלה של array נמצאת באוגר §4. "
    "הערך size שהוא גודל המערך נמצא באוגר §5. המערך הינו מערך של מילים (1 word = 4 bytes). אוגרים §4 ו- §5 צריכים להישאר ללא שינוי.\n"
    + fence(C_CODE, "c") + "\nלהלן התרגום:\n" + fence(ASM) + "\n"
    "מהתרגום נשמטו פקודות במקום המסומן ב- @@@@@@@.\nהפקודות החסרות הן:",
    opts(fence(["add $9, $4, $9", "lw  $10, 0($9)", "slt $11, $8, $10", "beq $0, $11, lb3", "add $8, $0, $10"]),
         fence(["add $9, $4, $9", "lw  $10, 0($9)", "slt $11, $8, $10", "bne $0, $11, lb3", "add $8, $10, $0"]),
         fence(["add $9, $9, $4", "lw  $10, 0($9)", "slt $11, $8, $10", "beq $0, $11, lb3", "add $8, $10, $8"]),
         fence(["add $9, $9, $4", "lw  $10, 0($9)", "slt $11, $10, $8", "beq $0, $11, lb3", "add $8, $0, $10"]),
         fence(["add $9, $4, $9", "lw  $10, 0($9)", "slt $11, $10, $8", "beq $10, $11, lb3", "add $10, $0, $8"]),
         fence(["add $9, $4, $9", "lw  $10, 0($9)", "slt $11, $8, $10", "beq $10, $11, lb3", "add $10, $8, $0"])), "a",
    r"""התרגום: `add §9,§4,§9` ($§9=\&\text{array}[i]$ כלומר $\text{array}+4i$); `lw §10,0(§9)` ($§10=\text{array}[i]$); `slt §11,§8,§10` בודק האם $m<\text{array}[i]$; אם לא - מדלגים ל-`lb3` (`beq §0,§11,lb3`); אם כן - `add §8,§0,§10`, כלומר $m=\text{array}[i]$.
ב: התנאי הפוך (`bne` במקום `beq`), וההצבה מתבצעת כשלא צריך.
ג: `add §8,§10,§8` מציב $m=\text{array}[i]+m$ ולא $m=\text{array}[i]$.
ד: ההשוואה `slt §11,§10,§8` שמאלה הפוכה, ולכן התנאי שגוי.
ה, ו: `beq §10,§11,lb3` אינו הבדיקה הנדרשת וההצבה ל-§10 היא הפוכה ממה שצריך (צריך להציב ל-§8)."""))

exam = {
    "examCode": "24B-A",
    "examLabel": "2024 סמסטר א מועד ב",
    "year": 2024,
    "examDate": "16.4.2024",
    "sourceFile": "sitting 24B-A (exam pages 2-16)",
    "keyFile": "sitting 24B-A pp.2-16 (circled options) + pp.18-33 (handwritten solution)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
