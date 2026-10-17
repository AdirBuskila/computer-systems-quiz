# -*- coding: utf-8 -*-
"""Generator for tools/raw/23B-B.json -- computer-systems, 2023 semester B, moed B (05.07.2023).
Run: PYTHONUTF8=1 py tools/gen/gen_23B-B.py

Source: sitting 23B-B pp.2-16 (20 MCQ x 5 pts) with the lecturer's circled options; pp.18-35 are his handwritten
solution pages. Literal MIPS register dollars in plain text are written with the section sign (reg() turns it
into an escaped dollar); inside fenced code a plain $ is literal.
Key (circled): option a in every question.
Keys checked by script (tools/verify/23B-B/check.py): Q1 Q2 Q3 Q4 Q5 Q9 Q10 Q11 Q12 Q13 Q14 Q15 Q16 Q17 Q19
recomputed and agree (15); Q6 bounds are trivial; Q7/Q8/Q18 are conceptual.
DISAGREEMENT: Q20 -- simulating the loop shows option a (bne ... lab2) skips the store when array1[i]>array2[i], so it
leaves the elementwise minimum in array2; option b (beq ... lab2) is the correct translation. The lecturer's
solution page (p.35) comments a as correct -> arbiter 2026-10-17: ship b as solved (official:false).
Handwritten Hebrew explanation text is reconstructed from the solution pages; the formulas are exact."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "23B-B.json"
IDS = "abcdef"


def opts(*vals):
    out = []
    for i, v in enumerate(vals):
        if isinstance(v, tuple):
            out.append({"id": IDS[i], "type": v[0], "value": v[1]})
        else:
            out.append({"id": IDS[i], "type": "text", "value": v})
    return out


def code(lines, tag="asm"):
    """One fenced code block (literal content)."""
    return "```" + tag + "\n" + "\n".join(lines) + "\n```"


def reg(s):
    """Section sign marks a literal register dollar; math dollars are left alone."""
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
    out = []
    for r in rows:
        out.append(r"\cdot ".join(("" if bit == "1" else r"\bar ") + v for bit, v in zip(r, "ABCD")))
    return "F=" + "+".join(out)


questions = []

# ---------------------------------------------------------------- 1
questions.append(Q(
    1, "boolean_algebra", "מי מהמשוואות הבאות לא נכונה?",
    opts(("math", r"\overline{A\oplus B}\cdot C=(\bar A\cdot C)\oplus(\bar B\cdot C)"),
         ("math", r"\overline{A\oplus B}=(\bar A\oplus B)\cdot(A\oplus\bar B)"),
         ("math", r"(A\oplus B)\oplus(A\oplus C)=\bar B\oplus\bar C"),
         ("math", r"A\oplus\overline{(C+B+A)}=\bar B\cdot\bar C+(B+C)\cdot A")),
    "a",
    r"""א: צד שמאל $\overline{A\oplus B}\cdot C=(\bar A\bar B+AB)\cdot C=\bar A\bar BC+ABC$; צד ימין $\bar AC\oplus\bar BC=\bar AC\cdot(B+\bar C)+(A+\bar C)\cdot\bar BC=\bar ABC+A\bar BC$ - שונה, לכן המשוואה אינה נכונה.
ב: $(\bar A\oplus B)\cdot(A\oplus\bar B)=\overline{A\oplus B}\cdot\overline{A\oplus B}=\overline{A\oplus B}$ - נכונה.
ג: $(A\oplus B)\oplus(A\oplus C)=A\oplus A\oplus B\oplus C=B\oplus C=\bar B\oplus\bar C$ - נכונה.
ד: $A\oplus\overline{C+B+A}=A\oplus\bar A\bar B\bar C=A+\bar B\bar C$, וגם $A(B+C)+\bar B\bar C=A+\bar B\bar C$ - נכונה."""))

# ---------------------------------------------------------------- 2
questions.append(Q(
    2, "mips_machine_code", "מה יהיה באוגר §4 אחרי ביצוע הפקודות הבאות:\n" + code([
        "lui  $4, 0x2468", "addi $4, $4, 0xFDB9", "addi $4, $4, 0x1357"]),
    opts("0x24681110", "0x24671110", "0x24683210", "0x24673210", "0x24661111", "0x24661116"), "a",
    r"""`lui §4,0x2468` נותן $§4=\texttt{0x24680000}$. `addi` מבצע הרחבת סימן: $\texttt{0xFDB9}\to\texttt{0xFFFFFDB9}$, ולכן $§4=\texttt{0x24680000}+\texttt{0xFFFFFDB9}=\texttt{0x2467FDB9}$.
לאחר מכן $+\texttt{0x00001357}$: $§4=\texttt{0x24681110}$."""))

# ---------------------------------------------------------------- 3
questions.append(Q(
    3, "floating_point",
    r"המספר $\frac{2}{9}$ בבסיס 2 הוא השבר הבינארי האינסופי: $[0.001110\ 001110\ 001110\ldots]_2$" + "\n"
    r"כיצד ייוצג המספר $333\frac{2}{9}$ בייצוג Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו-23 סיביות שבר) ?",
    opts("0x43A69C72", "0x43A69C71", "0x874D38E3", "0x874D38E4", "0x43934E38", "0x43934E39"), "a",
    r"""$333=[101001101]_2$, ולכן $333\frac{2}{9}=[101001101.001110\ 001110\ldots]_2=(-1)^0\cdot 2^8\cdot 1.01001101\ 001110\ 001110\ldots$
$E-127=8\Rightarrow E=135=10000111$, $S=0$.
השדות: סימן $0$, אקספוננט $10000111$ ושבר $01001101\ 001110\ 001110\ 0011|10\ldots$ - עיגול כלפי מעלה של הסיבית האחרונה נותן `0x43A69C72`."""))

# ---------------------------------------------------------------- 4
questions.append(Q(
    4, "number_bases", r"מהו ערכו העשרוני של השבר האינסופי $[0.23\ 10\ 10\ 10\ 10\ \ldots]_5$ בבסיס 5?",
    opts("317/600", "53/102", "319/604", "159/301", "158/299", "25/47"), "a",
    r"""$X=[0.23]_5+Y$, כאשר $Y=[0.0010\,10\,10\ldots]_5$ (הצמד $10$ חוזר החל מהמקום השלישי).
$5^2Y=[0.10\,10\ldots]_5=[0.10]_5+Y=\frac{1}{5}+Y\Rightarrow 24Y=\frac{1}{5}\Rightarrow Y=\frac{1}{120}$.
$X=\frac{2}{5}+\frac{3}{25}+\frac{1}{120}=\frac{240+72+5}{600}=\frac{317}{600}$."""))

# ---------------------------------------------------------------- 5
questions.append(Q(
    5, "signed_twos_complement",
    "$X$ הוא מספר 2's complement בן 14 סיביות מהן 7 הם מימין לנקודה הבינרית. כלומר:\n"
    r"$X=\langle X_6,X_5,X_4,X_3,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4},X_{-5},X_{-6},X_{-7}\rangle$" + "\n"
    r'סיביות $X_4$ , $X_1$ ו- $X_{-2}$ הן "1". מה לא נכון:',
    opts(r"$\langle X\rangle$ יכול להיות $-17\frac{1}{128}$",
         r"$\langle X\rangle$ יכול להיות $30\frac{7}{8}$",
         r"$\langle X\rangle$ לא יכול להיות $-1\frac{7}{8}$",
         r"$\langle X\rangle$ לא יכול להיות $42\frac{25}{64}$",
         r"$\langle X\rangle$ לא יכול להיות $-42\frac{25}{64}$",
         r"$\langle X\rangle$ יכול להיות $18\frac{33}{128}$"), "a",
    r"""בדיקת כל אפשרות לפי ייצוג 14 הסיביות:
$-17\frac{1}{128}=\langle 1101110.1111111\rangle$ - ($X_4=0$), לכן $\langle X\rangle$ **לא** יכול להיות $-17\frac{1}{128}$ - זו הטענה הלא נכונה.
$30\frac{7}{8}=\langle 0011110.1110000\rangle$ ו-$18\frac{33}{128}=\langle 0010010.0100001\rangle$ - הסיביות הנדרשות הן "1" (יכול).
$-1\frac{7}{8}=\langle 1111110.0010000\rangle$ ($X_{-2}=0$), $42\frac{25}{64}=\langle 0101010.0110010\rangle$ ($X_4=0$), $-42\frac{25}{64}=\langle 1010101.1001110\rangle$ ($X_1=0$) - לא יכולים (הטענות "לא יכול" נכונות)."""))

# ---------------------------------------------------------------- 6
questions.append(Q(
    6, "unsigned_numbers",
    r"$X$ הוא שבר unsigned עם 7 סיביות מימין לנקודה הבינרית. לפיכך אפשר להציג בו רק $2^7$ של שברים. אם מבקשים להציג שבר כלשהו ואי אפשר להציגו במדוייק, או שנקצץ סיבית מימין לסיבית השביעית או שנעגל ל-7 סיביות שבר." + "\n"
    "מה מהתשובות נכון לגבי השגיאה (עבור ערך שבר כלשהו):",
    opts(r"השגיאה בערכה המוחלט תהיה תמיד קטנה או שווה ל- $\frac{1}{256}$ אם נעגל",
         r"השגיאה בערכה המוחלט תהיה תמיד גדולה מ- $\frac{1}{256}$ אם נעגל",
         r"השגיאה בערכה המוחלט תהיה תמיד גדולה מ- $\frac{1}{128}$ אם נקצץ",
         r"השגיאה בערכה המוחלט תהיה תמיד קטנה או שווה ל- $\frac{1}{512}$ אם נעגל",
         r"השגיאה בערכה המוחלט תהיה תמיד גדולה מ- $\frac{1}{512}$ אם נקצץ"), "a",
    r"""ה-LSB הוא $\frac{1}{128}$. אם נקצץ, השגיאה נמצאת בתחום $0\le\varepsilon_T<\frac{1}{128}$; אם נעגל, השגיאה נמצאת בתחום $-\frac{1}{256}\le\varepsilon_R<\frac{1}{256}$ ולכן א נכון.
ב: שגוי כי יכולה להיות שגיאה קטנה מ-$\frac{1}{256}$ (בפרט 0). ג: שגוי כי בקיצוץ השגיאה קטנה מ-$\frac{1}{128}$. ד: שגוי כי $\frac{1}{512}<\frac{1}{256}$ והשגיאה יכולה לעלות על כך. ה: לא נכון, כי יתכן שהשגיאה בקיצוץ היא 0.""",
    note="Printed text: 'לפיכך אפשר להציג בו רק 2^7 של שברים' transcribed as printed."))

# ---------------------------------------------------------------- 7
questions.append(Q(
    7, "floating_point",
    "אנו עוסקים במספרים המיוצגים ב- Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר, Fraction). "
    "ידוע ששדה האקספוננט של מספר A גדול ב-1 משדה האקספוננט של מספר B.\n"
    "מה נכון:",
    opts("אי אפשר לדעת אם $B<A$", "בטוח שתמיד $B<A$", "$B<A$ רק אם שניהם מנורמלים",
         "$B<A$ רק אם שדה השבר של A גם הוא גדול משדה השבר של B"), "a",
    r"""השוואה בין שני מספרים תלויה גם בסימן שלהם, ושדה האקספוננט וה-Fraction אינם קובעים אותה לבדם: אם שניהם שליליים, או ש-A שלילי ו-B חיובי, אז אי אפשר להסיק ש-$B<A$. לכן א נכון, ו-ב, ג, ד אינן נכונות (לכל אחת קיימת דוגמה נגדית)."""))

# ---------------------------------------------------------------- 8
questions.append(Q(
    8, "datapath_control",
    "הוספנו למעבד ה-MIPS שמימשנו בהרצאות פקודה חדשה.\n"
    "הפקודה, `brifz` (brach register if jero), קופצת לכתובת שנמצאת באוגר Rt אם באוגר Rs יש 0. אם לא היא ממשיכה לפקודה הבאה (ב- PC+4). אלו שלבים היו מתבצעים במהלך ביצוע הפקודה הזו?",
    opts("Fetch, Decode, ALU", "Fetch, Decode, ALU, Write-Back", "Fetch, Decode, Write-Back", "Fetch, Decode",
         "Fetch, Decode, Memory Write-Back", "Fetch, Decode, Memory"), "a",
    r"""Fetch ו-Decode מתבצעים תמיד (ב-Decode קוראים את Rs ו-Rt). שלב ה-ALU נחוץ כדי לבדוק אם ב-Rs יש 0 (למשל בהשוואה/חיסור עם 0) ולהפיק את אות הבקרה. אין גישה לזיכרון הנתונים (Memory), ואין כתיבה לאוגר כללי (Write-Back): כתיבה ל-PC איננה Write-Back.""",
    note="Printed instruction description keeps the typo 'brach register if jero' (branch register if zero)."))

# ---------------------------------------------------------------- 9
questions.append(Q(
    9, "latches_flipflops",
    "לפניכם ארבעה דלגלגים (FF-ים), המחוברים בצורת אוגר הזזה (Shift Register). הכניסה משמאל (ל-D3) מחוברת דרך מהפך ליציאת שער XOR, "
    "המבצע פעולת XOR בין Q0 להיפוך של Q3. בין יציאת Q2 לכניסת D1 יש מהפך נוסף.\n"
    "הערך באוגר ההזזה הוא: [Q3, Q2, Q1, Q0] = [1, 0, 0, 1] כמצויר. מה היה הערך באוגר לפני 5 עליות שעון?",
    opts(("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,0,0,0]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,0,1,0]"),
         ("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,1,0,0]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,1,0,1]"),
         ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,1,0,0]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,1,1,1]")), "a",
    r"""$D_3=\overline{\overline{Q_3}\oplus Q_0}=Q_3\oplus Q_0$ ($D_3=1$ אם $Q_3\ne Q_0$, ואחרת $0$); $Q_3\leftarrow D_3$, $Q_2\leftarrow Q_3$, $Q_1\leftarrow\overline{Q_2}$, $Q_0\leftarrow Q_1$.
בונים את הטבלה אחורה מהמצב הנוכחי $[1,0,0,1]$: לפני עלייה 1: $[0,1,1,1]$; לפני 2: $[1,0,1,1]$; לפני 3: $[0,0,1,1]$; לפני 4: $[0,0,1,0]$; לפני 5: $[0,0,0,0]$.""",
    image="images/exams/23B-B-Q9.png"))

# ---------------------------------------------------------------- 10
questions.append(Q(
    10, "mips_assembly_c", "מהו התרגום השגוי באסמבלי לשורת ה-C:   `a = 4*a - 2*b;`",
    opts(code(["add $7, $7, $7", "add $7, $7, $7", "add $5, $5, $5", "sub $7, $7, $5"]),
         code(["add $7, $7, $7", "add $7, $7, $7", "sub $7, $7, $5", "sub $7, $7, $5"]),
         code(["add $7, $7, $7", "sub $7, $7, $5", "add $7, $7, $7"]),
         code(["sub $7, $7, $5", "add $7, $7, $7", "add $7, $7, $7", "add $7, $5, $7", "add $7, $7, $5"])), "a",
    r"""התרגום א מחשב $a=4a-2b$ אך משנה את §5 (הוא $b$): `add §5,§5,§5` מכפיל את $b$ ב-2 בתוך האוגר, ולכן $b$ אינו נשאר ללא שינוי - זהו התרגום השגוי.
ב: $4a-b-b=4a-2b$ - נכון. ג: $(2a-b)\cdot 2=4a-2b$ - נכון. ד: $a-b$; $2a-2b$; $4a-4b$; $+b\Rightarrow 4a-3b$; $+b\Rightarrow 4a-2b$ - נכון.""",
    note="Question asks which translation is WRONG; a is wrong because it overwrites $5 (b); the value computed for a is numerically right.",
    confidence="high"))

# ---------------------------------------------------------------- 11
questions.append(Q(
    11, "number_bases", "מה נכון ?",
    opts(("math", r"[1324.31]_9=[1100211.1001]_3"), ("math", r"[1324.31]_9=[11110100.1101]_3"),
         ("math", r"[1324.31]_9=[11110201.111]_3"), ("math", r"[1324.31]_9=[1102020.2001]_3"),
         ("math", r"[1324.31]_9=[110211.1001]_3"), ("math", r"[1324.31]_9=[111020.1011]_3")), "a",
    r"""כל ספרה בבסיס 9 מתורגמת לשתי ספרות בבסיס 3: $[0]_9=[00]_3$, $[1]_9=[01]_3$, $[2]_9=[02]_3$, $[3]_9=[10]_3$, $[4]_9=[11]_3$, $[5]_9=[12]_3$, $[6]_9=[20]_3$, $[7]_9=[21]_3$, $[8]_9=[22]_3$.
$1\to 01$, $3\to 10$, $2\to 02$, $4\to 11$ ו-$3\to 10$, $1\to 01$ ולכן $[1324.31]_9=[01\,10\,02\,11.10\,01]_3=[1100211.1001]_3$."""))

# ---------------------------------------------------------------- 12
questions.append(Q(
    12, "signed_twos_complement",
    "במחבר 2's Comp. של 8 ביט יש יציאה הנדלקת כאשר יש Overflow. באיזה מהחישובים הבאים לא תידלק יציאה זו?",
    opts("`01001101 + 00110001`", "`11011111 - 01110101`", "`00111001 + 01001001`",
         "`00111100 - 10110001`", "`11000110 + 10101000`"), "a",
    r"""התחום ב-8 ביט הוא $-128\le X\le 127$.
א: $77+49=126$ - אין גלישה.
ב: $(-33)-117=-150$ - יש גלישה.
ג: $57+73=130$ - יש גלישה.
ד: $60-(-79)=139$ - יש גלישה.
ה: $(-58)+(-88)=-146$ - יש גלישה."""))

# ---------------------------------------------------------------- 13
q13_opts = [
    code(["      slt $1, $2, $3", "      beq $1, $0, lab1", "      add $3, $2, $2", "lab1: slt $1, $2, $4", "      bne $1, $0, lab2", "      add $4, $2, $2", "lab2:"]),
    code(["      slt $1, $2, $3", "      bne $1, $0, lab1", "      add $3, $2, $2", "lab1: slt $1, $2, $4", "      beq $1, $0, lab2", "      add $4, $2, $2", "lab2:"]),
    code(["      slt $1, $2, $3", "      bne $1, $0, lab1", "      add $3, $3, $2", "lab1: slt $1, $2, $4", "      bne $1, $0, lab2", "      add $4, $4, $2", "lab2:"]),
    code(["      slt $1, $2, $3", "      beq $1, $0, lab1", "      add $3, $3, $2", "lab1: slt $1, $2, $4", "      bne $1, $0, lab2", "      add $4, $4, $2", "lab2:"]),
]
questions.append(Q(
    13, "mips_assembly_c",
    "הקטע הנתון בשפת C תורגם לשפת אסמבלי של ה-MIPS.\n" + code(["if(a>b)  a=2*b;", "if(c<=b)  c=2*b;"], "c") + "\nמהו התרגום הנכון?",
    opts(*q13_opts), "a",
    r"""מתאימים אוגרים: $b=§2$, $a=§3$, $c=§4$.
`slt §1,§2,§3` נותן $§1=1$ אם $b<a$ (כלומר $a>b$); אם $§1=0$ מדלגים על `add §3,§2,§2` ($a=2b$) - `beq §1,§0,lab1`.
`slt §1,§2,§4` נותן $§1=1$ אם $b<c$; אם $c>b$ מדלגים (`bne §1,§0,lab2`), אחרת ($c\le b$) מבצעים `add §4,§2,§2` ($c=2b$).
ב: שתי הקפיצות הפוכות; ג, ד: מבצעים `a=a+b` ו-`c=c+b` במקום $2b$ (ד גם עם קפיצה נכונה בחלק הראשון).""",
    note="The register-to-variable mapping (b=$2, a=$3, c=$4) is not printed in the question; it is taken from the lecturer's solution page."))

# ---------------------------------------------------------------- 14
questions.append(Q(
    14, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=A\cdot\bar B+\bar C\cdot D+A\cdot C\cdot\bar D+\bar A\cdot B\cdot\bar C"),
         ("math", r"F=A\cdot\bar B+\bar C\cdot D+\bar A\cdot B+A\cdot C\cdot\bar D"),
         ("math", r"F=A\cdot\bar B+C\cdot D+A\cdot C\cdot\bar D+\bar A\cdot B\cdot\bar C"),
         ("math", r"F=A\cdot\bar B+\bar C\cdot D+A\cdot C"),
         ("math", r"F=A\cdot\bar B+\bar C\cdot D+A\cdot C\cdot\bar D")), "a",
    r"""פיתוח לפי כניסות הנתונים של המולטיפלקסר ($ABC=000\to D$, $001\to 0$, $010\to 1$, $011\to 0$, $100\to 1$, $101\to 1$, $110\to D$, $111\to\bar D$):
$F=\bar A\bar B\bar C\cdot D+\bar A\bar BC\cdot 0+\bar AB\bar C\cdot 1+\bar ABC\cdot 0+A\bar B\bar C\cdot 1+A\bar BC\cdot 1+AB\bar C\cdot D+ABC\cdot\bar D=\Sigma(1,4,5,8,9,10,11,13,14)$,
והפישוט $A\bar B+\bar CD+AC\bar D+\bar AB\bar C$ מכסה בדיוק את אותם מינטרמים.
בדיקת האפשרויות האחרות: ב - עבור $ABCD=0110$ הביטוי שווה 1 ואילו $F=0$; ג - עבור $0001$ הביטוי שווה 0 ואילו $F=1$; ד - עבור $0100$ הביטוי שווה 0 ואילו $F=1$; ה - עבור $0100$ הביטוי שווה 0 ואילו $F=1$.""",
    image="images/exams/23B-B-Q14.png",
    note="The printed multiplexer figure lost some wires (the inputs 000/001/011/110/111 show dots without lines); the data inputs were taken from the lecturer's solution page and the key row was recomputed by script."))

# ---------------------------------------------------------------- 15
ROWS15 = {
    "a": ["0000", "0001", "0010", "0011", "0111", "1101", "1110"],
    "b": ["0000", "0001", "0010", "0011", "0101", "1101", "1110"],
    "c": ["0000", "0001", "0010", "0011", "0110", "1101", "1110"],
    "d": ["0000", "0001", "0010", "0011", "0110", "1100", "1110"],
    "e": ["0000", "0001", "0010", "0011", "0110", "1101", "1111"],
}
questions.append(Q(
    15, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(*[("math", minterms(ROWS15[k])) for k in "abcde"]), "a",
    r"""הערוצים $X$ ו-$Y$: $X=1$ כאשר $AB=10$, $Y=1$ כאשר $AB=11$, ולכן $XY=00$ כאשר $AB=00$ או $AB=01$, $XY=01$ כאשר $AB=11$, $XY=10$ כאשר $AB=10$ ו-$XY=11$ אינו מתקבל.
הכניסות הנבחרות: $XY=00\to(CD=11)+(AB=00)$; $XY=01\to(CD=01)+(CD=10)$; $XY=10\to(AB=01)$; $XY=11\to(CD=00)$.
עבור $AB=00$: $F=CD+1=1$ - המינטרמים $0,1,2,3$; עבור $AB=01$: $F=CD$ - המינטרם $7$; עבור $AB=11$: $F=\bar CD+C\bar D$ - המינטרמים $13,14$; עבור $AB=10$: $F=0$.
$F=\Sigma(0,1,2,3,7,13,14)$ - זו תשובה א.""",
    image="images/exams/23B-B-Q15.png",
    note="Option rows read at 2x zoom; the minterm set of each option was rebuilt from the printed rows and compared by script with the lecturer's set (only a matches)."))

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
    r"""מכיוון ש-$23=[10111]_2$, מחברים ארבע שורות: $A\cdot 2^0,\ A\cdot 2^1,\ A\cdot 2^2,\ A\cdot 2^4$ (השורות המתאימות לביטים השווים 1).
מתקבלים $10\times$FA ו-$5\times$HA, ויש 10 יציאות ($y_0\ldots y_9$)."""))

# ---------------------------------------------------------------- 17
questions.append(Q(
    17, "mips_machine_code", "מהו התרגום של הפקודה `slt §v1, §t8, §s4`  לשפת המכונה של ה-MIPS ?",
    opts("0x0314182A", "0x0078A02A", "0x0298182A", "0xAA981800", "0x13141800", "0x0398A800"), "a",
    r"""`slt` היא פקודת R-type: $Rd=§v1=§3$, $Rs=§t8=§24$, $Rt=§s4=§20$, ו-funct $=42=101010$.
$000000\ |\ 11000\ |\ 10100\ |\ 00011\ |\ 00000\ |\ 101010\Rightarrow\texttt{0x0314182A}$."""))

# ---------------------------------------------------------------- 18
questions.append(Q(
    18, "datapath_control",
    "במעבד ה- MIPS Single Cycle שלמדנו מי מהצירופים הרשומים מטה של אותות הבקרה נכון לפקודת add? (יש ציור של המעבד בנספח לבחינה)",
    opts("ALUOp=10 (func);  RegDst=1; MemRead=0;  RegWrite=1;  MemToReg=0",
         "ALUOp=00 (add);  RegDst=1; MemWrite=0;  RegWrite=1;  MemToReg=0",
         "ALUOp=00 (add);  RegDst=0; MemRead=0;  RegWrite=1;  MemToReg=1",
         "ALUOp=00 (add);  RegDst=1; MemRead=0;  RegWrite=1;  MemToReg=0",
         "ALUOp=10 (func);  RegDst=1; MemWrite=0;  RegWrite=0;  MemToReg=1",
         "ALUOp=10 (func);  RegDst=0; MemWrite=0;  RegWrite=1;  MemToReg=0"), "a",
    r"""`add` היא פקודת R-type: ALUOp=10 (func - הפעולה נקבעת לפי שדה ה-funct), ALUSrc=0, RegDst=1 (היעד הוא Rd), RegWrite=1, MemToReg=0, MemRead=MemWrite=0, Branch=0, Jump=0.
ב, ד: ALUOp=00 אינו מתאים ל-R-type; ג: RegDst=0 ו-MemToReg=1 (כמו lw); ה: RegWrite=0 ו-MemToReg=1; ו: RegDst=0.""",
    image="images/exams/23B-B-Q18.png",
    note="Datapath figure is a low-resolution source scan; control-signal labels in it are not legible in the source."))

# ---------------------------------------------------------------- 19
questions.append(Q(
    19, "mips_machine_code", "הפקודה `0x13DDF02A`  בשפת מכונה של ה-MIPS הינה בעצם פקודת האסמבלי הבאה:",
    opts("`beq $fp, $sp, -4054`", "`beq $sp, $fp, 0xF02A`", "`bne $sp, $fp, 0xF02A`", "`slt $fp, $fp, $sp`",
         "`slt $sp, $fp, $fp`", "`ori $sp, $fp, 0xF02A`"), "a",
    r"""`0x13DDF02A` $=\ 000100\ |\ 11110\ |\ 11101\ |\ 1111\,0000\,0010\,1010$.
opcode $=4=\text{beq}$; $Rs=30=§fp$, $Rt=29=§sp$; $\text{imm}=\texttt{0xF02A}$ ב-16 סיביות עם סימן $=-4054$.
$\Rightarrow$ `beq §fp, §sp, -4054`"""))

# ---------------------------------------------------------------- 20  (HELD: key disagrees with simulation)
C20 = ["for(i=0;i<size;i++)", "{", "        if (array1[i] > array2[i])", "           array2[i] = array1[i];", "}"]
ASM20 = ["addi $7, $0, 0", "j  lab3", "lab1: add $8, $7, $7", "      add $8, $8, $8", "      add $9, $8, $5", "      add $8, $8, $6",
         "@@@@@@@", "lab2: addi $7, $7, 1", "lab3: slt $1, $7, $4", "      bne $1, $0, lab1"]


def alt20(s1, br, lab):
    return code(["lw $10, 0($9)", "lw $11, 0($8)", f"slt $1, {s1}", f"{br} $1, $0, {lab}", "sw $10, 0($8)"])


q20 = Q(
    20, "mips_assembly_c",
    "קטע ה- C הבא תורגם לשפת הסף (אסמבלי) של מחשב MIPS. הנח כי כתובת ההתחלה של array1 נמצאת באוגר §5. כתובת ההתחלה של array2 נמצאת באוגר §6. "
    "הערך size שהוא גודל המערכים (הם זהים בגודלם) נמצא באוגר §4. המערכים הינם מערכים של מילים (Words=4 bytes). אוגרים §4, §5 ו- §6 צריכים להישאר ללא שינוי.\n"
    + code(C20, "c") + "\nלהלן התרגום:\n" + code(ASM20) + "\nמהתרגום נשמטו פקודות במקום המסומן ב- `@@@@@@@`.\nהפקודות החסרות הן:",
    opts(alt20("$11, $10", "bne", "lab2"), alt20("$11, $10", "beq", "lab2"), alt20("$10, $11", "bne", "lab2"),
         alt20("$10, $11", "beq", "lab2"), alt20("$11, $10", "bne", "lab1"), alt20("$11, $10", "beq", "lab1")),
    "b",
    r"""המפתח הרשמי סימן א, אך התשובה הנכונה היא ב כי ב-א הפקודה `bne` מדלגת על ההעתקה בדיוק כאשר `array1[i]>array2[i]`, כלומר הפוך מהתנאי שבקוד.
§8 מצביע ל-`array2[i]` ו-§9 ל-`array1[i]`; `lw §10,0(§9)` טוען את `array1[i]` ו-`lw §11,0(§8)` את `array2[i]`. הפקודה `slt §1,§11,§10` נותנת `§1=1` כאשר `array2[i]<array1[i]`, כלומר כאשר התנאי `array1[i]>array2[i]` מתקיים.
לכן יש לדלג על ההעתקה כאשר `§1=0` (`beq §1,§0,lab2`), ואחרת `sw §10,0(§8)` מבצע `array2[i]=array1[i]` - תשובה ב.
הערה: ג (`slt §1,§10,§11` עם `bne`) מעתיקה כאשר `array1[i]>=array2[i]`; היא משאירה אותו מערך כי במקרה השוויון ההעתקה אינה משנה דבר, אבל היא תרגום של `>=` ולא של `>`.""",
    answerSource="solved", official=False,
    note="Arbiter 2026-10-17: key circled a skips the store exactly when array1[i]>array2[i] (array2 ends as the minimum); b is the faithful translation. c matches b's final array only because the equal-case store is a no-op; it translates >=, so b is the unique answer (same standard as 24A-A Q20).")
questions.append(q20)

exam = {
    "examCode": "23B-B",
    "examLabel": "2023 סמסטר ב מועד ב",
    "year": 2023,
    "examDate": "5.07.2023",
    "sourceFile": "sitting 23B-B (exam pages 2-16)",
    "keyFile": "sitting 23B-B pp.2-16 (circled options) + pp.18-35 (handwritten solution)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
