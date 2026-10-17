# -*- coding: utf-8 -*-
"""Generator for tools/raw/24A-A.json -- computer-systems, 2024 semester A, moed A (27.03.2024).
Run: PYTHONUTF8=1 py tools/gen/gen_24A-A.py

Source: sitting 24A-A pp.2-17 (20 MCQ x 5 pts, every question carries the lecturer's red circle on option a), pp.18-35 his
handwritten solution pages (p.34-35 are a typed solution of Q20). The two source copies differ on page 2 only by
rendering (same text, same circles), so the cs24 copy is used.
Literal MIPS register dollars in plain text are written with the section sign (reg() turns it into an escaped
dollar); inside fenced code a plain $ is literal.
Key: option a in every question.
Keys checked by script (tools/verify/24A-A/check.py): Q1 Q2 Q3 Q4 Q5 Q8 Q9 Q10 Q11 Q12 Q13 Q14 Q15 Q16 Q17 Q19 Q20
recomputed and agree (17); Q6 Q7 Q18 are derivations/conceptual. No disagreement, no holds.
Q20: option d (slt $1,$10,$11 ; bne $1,$0,lab2) is also behaviourally equivalent (it only differs when the two
elements are equal, where the store is a no-op); the key stays a, the lecturer labels d 'wrong compare'.
Handwritten Hebrew explanation text is reconstructed from the solution pages; the formulas are exact."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "24A-A.json"
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
    r"""א: צד שמאל $\overline{A\oplus B}\cdot C=(\bar A\bar B+AB)\cdot C=\bar A\bar BC+ABC$. צד ימין $\bar AC\oplus\bar BC=\overline{\bar AC}\cdot\bar BC+\bar AC\cdot\overline{\bar BC}=(A+\bar C)\bar BC+\bar AC(B+\bar C)=A\bar BC+\bar ABC$ - שונה, לכן המשוואה אינה נכונה.
ב: $\overline{A\oplus B}=\bar A\bar B+AB$, ו-$(\bar A\oplus B)\cdot(A\oplus\bar B)=(\bar A\bar B+AB)(\bar A\bar B+AB)=\bar A\bar B+AB$ - נכונה.
ג: $(A\oplus B)\oplus(A\oplus C)=A\oplus A\oplus B\oplus C=B\oplus C$, ו-$\bar B\oplus\bar C=B\oplus C$ - נכונה.
ד: $A\oplus\overline{C+B+A}=A\oplus\bar A\bar B\bar C=\bar A\cdot\bar A\bar B\bar C+A\cdot(A+B+C)=\bar A\bar B\bar C+A=A+\bar B\bar C$, וגם $A(B+C)+\bar B\bar C=A+\bar B\bar C$ - נכונה."""))

# ---------------------------------------------------------------- 2
questions.append(Q(
    2, "mips_machine_code", "מה יהיה באוגר §4 אחרי ביצוע הפקודות הבאות:\n" + code([
        "addi $4,$0,0x2468", "lui  $4,0x8765", "addi $4,$4,0x8765", "addi $4,$4,0xFDB9"]),
    opts("0x8764851E", "0x8765851E", "0x24688769", "0x2459851E", "0X8766851E", "0x24678769"), "a",
    r"""`addi §4,§0,0x2468` נותן $§4=\texttt{0x00002468}$, אך `lui §4,0x8765` דורס אותו: $§4=\texttt{0x87650000}$.
`addi` מבצע הרחבת סימן: $\texttt{0x8765}\to\texttt{0xFFFF8765}$, ולכן $§4=\texttt{0x87650000}+\texttt{0xFFFF8765}=\texttt{0x87648765}$.
`addi §4,§4,0xFDB9`: $\texttt{0xFDB9}\to\texttt{0xFFFFFDB9}$ ו-$§4=\texttt{0x87648765}+\texttt{0xFFFFFDB9}=\texttt{0x8764851E}$."""))

# ---------------------------------------------------------------- 3
questions.append(Q(
    3, "floating_point",
    r"המספר $\frac{2}{9}$ בבסיס 2 הוא השבר הבינארי האינסופי: $[0.001110\ 001110\ 001110\ldots]_2$" + "\n"
    r"כיצד ייוצג המספר $333\frac{2}{9}$ בייצוג Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו-23 סיביות שבר) ?",
    opts("0x43A69C72", "0x43A69C71", "0x874D38E3", "0x874D38E4", "0x43934E38", "0x43934E39"), "a",
    r"""$333=[101001101]_2$, ולכן $333\frac{2}{9}=[101001101.001110\ 001110\ldots]_2=(-1)^0\cdot 2^8\cdot 1.01001101\ 001110\ 001110\ldots$
$E-127=8\Rightarrow E=135=10000111$, $S=0$.
השדות: סימן $0$, אקספוננט $10000111$ ושבר $0100\ 1101\ 0011\ 1000\ 1110\ 001|1\ 10\ldots$ - הסיבית שאחרי ה-LSB היא 1, מעגלים כלפי מעלה (מוסיפים 1 ל-LSB) ומקבלים `0x43A69C72`."""))

# ---------------------------------------------------------------- 4
questions.append(Q(
    4, "number_bases", r"מהו ערכו העשרוני של השבר האינסופי $[0.34\ 20\ 20\ 20\ 20\ \ldots]_5$ בבסיס 5?",
    opts("233/300", "12/37", "21/31", "21/32", "7/25", "7/10"), "a",
    r"""$X=[0.34\ 20\ 20\ 20\ldots]_5=[0.14]_5+[0.20\ 20\ 20\ldots]_5$ (הפירוק: $[0.3\,4\,2\,0\,2\,0\ldots]_5=[0.1\,4]_5+[0.2\,0\,2\,0\,2\,0\ldots]_5$). נסמן $Y=[0.20\ 20\ 20\ldots]_5$.
$5^2Y=[20]_5+Y\Rightarrow 25Y=10+Y\Rightarrow 24Y=10\Rightarrow Y=\frac{10}{24}=\frac{5}{12}$.
$X=[0.14]_5+\frac{5}{12}=\frac{1}{5}+\frac{4}{25}+\frac{5}{12}=\frac{9}{25}+\frac{5}{12}=\frac{108+125}{300}=\frac{233}{300}$."""))

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
$17\frac{1}{128}=\langle 0010001.0000001\rangle\Rightarrow -17\frac{1}{128}=\langle 1101110.1111111\rangle$ - הסיבית $X_4$ היא 0, בניגוד לנתון, ולכן $\langle X\rangle$ **לא** יכול להיות $-17\frac{1}{128}$ - זו הטענה הלא נכונה.
$30\frac{7}{8}=\langle 0011110.1110000\rangle$ ו-$18\frac{33}{128}=\langle 0010010.0100001\rangle$ - הסיביות הנדרשות הן "1" (יכול, והטענה נכונה).
$-1\frac{7}{8}=\langle 1111110.0010000\rangle$ ($X_{-2}=0$), $42\frac{25}{64}=\langle 0101010.0110010\rangle$ ($X_4=0$), $-42\frac{25}{64}=\langle 1010101.1001110\rangle$ ($X_1=0$) - לא יכולים (הטענות "לא יכול" נכונות)."""))

# ---------------------------------------------------------------- 6
questions.append(Q(
    6, "unsigned_numbers",
    r"$X$ הוא שבר unsigned עם 7 סיביות מימין לנקודה הבינרית. לפיכך אפשר להציג בו רק $2^7$ של שברים. אם מבקשים להציג שבר כלשהו ואי אפשר להציגו במדוייק, או שנקצץ סיביות מימין לסיבית השביעית או שנעגל ל-7 סיביות שבר." + "\n"
    "מי מהתשובות נכונה ?",
    opts(r"מעגלים על ידי הוספת $\frac{1}{256}$ וקיצוץ של כל מה שמימין ל-7 הביטים של השבר",
         r"מעגלים על ידי הוספת $\frac{1}{128}$ וקיצוץ של כל מה שמימין ל-7 הביטים של השבר",
         r"אם מקצצים ולא מעגלים, בטוח שהשגיאה היא מעל ל- $\frac{1}{256}$",
         r"אם מקצצים ולא מעגלים, בטוח שהשגיאה היא מתחת ל- $\frac{1}{256}$"), "a",
    r"""$\frac{1}{128}$ הוא ה-LSB. מעגלים על ידי הוספת $\frac{\text{LSB}}{2}=\frac{1}{256}$ וקיצוץ כל מה שמימין ל-LSB - לכן א נכונה.
ב: שגויה, כי מוסיפים $\frac{1}{128}$ במקום $\frac{1}{256}$.
ג: שגויה, כי אם מקצצים, השגיאה נמצאת בתחום מ-0 ועד $\frac{1}{128}$ (לא קטן ממש), ולכן אינה בהכרח מעל $\frac{1}{256}$.
ד: שגויה, כי אם מקצצים, השגיאה יכולה לעלות על $\frac{1}{256}$ (עד $\frac{1}{128}$).""",
    note="Printed text: 'לפיכך אפשר להציג בו רק 2^7 של שברים' transcribed as printed."))

# ---------------------------------------------------------------- 7
questions.append(Q(
    7, "floating_point",
    "אנו עוסקים במספרים המיוצגים ב- Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר, Fraction). "
    "ידוע ששדה האקספוננט של מספר A גדול ב-1 משדה האקספוננט של מספר B.\n"
    "מה נכון:",
    opts("אי אפשר לדעת אם $B<A$", "בטוח ש-$B<A$", "$B<A$ רק אם שניהם מנורמלים",
         "$B<A$ רק אם שדה השבר של A גם הוא גדול משדה השבר של B"), "a",
    r"""ההשוואה תלויה גם בסימן של המספרים: אם שניהם שליליים, או ש-A שלילי ו-B חיובי, אי אפשר להסיק ש-$B<A$. שדה האקספוננט ושדה ה-Fraction לבדם אינם קובעים את הסדר. לכן א נכון, ו-ב, ג ו-ד אינן נכונות (לכל אחת קיימת דוגמה נגדית)."""))

# ---------------------------------------------------------------- 8
questions.append(Q(
    8, "number_bases", "מה לא נכון?",
    opts(("math", r"[0.44444\ldots]_6-[0.44444\ldots]_7=\frac{1}{15}"),
         ("math", r"[0.66666\ldots]_7-[0.11111\ldots]_7=\frac{5}{6}"),
         ("math", r"[0.66666\ldots]_7-[0.11111\ldots]_5=\frac{3}{4}"),
         ("math", r"[0.7777\ldots]_8-[0.11111\ldots]_4=\frac{2}{3}")), "a",
    r"""א: $X=[0.444\ldots]_6\Rightarrow 6X=4+X\Rightarrow X=\frac{4}{5}$; $Y=[0.444\ldots]_7\Rightarrow 7Y=4+Y\Rightarrow Y=\frac{4}{6}=\frac{2}{3}$; $X-Y=\frac{12-10}{15}=\frac{2}{15}\ne\frac{1}{15}$ - לא נכון.
ב: $[0.666\ldots]_7=1$, $Y=[0.111\ldots]_7=\frac{1}{6}$ ו-$1-\frac{1}{6}=\frac{5}{6}$ - נכון.
ג: $[0.666\ldots]_7=1$, $Y=[0.111\ldots]_5=\frac{1}{4}$ ו-$1-\frac{1}{4}=\frac{3}{4}$ - נכון.
ד: $[0.777\ldots]_8=1$, $Y=[0.111\ldots]_4=\frac{1}{3}$ ו-$1-\frac{1}{3}=\frac{2}{3}$ - נכון."""))

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
    image="images/exams/24A-A-Q9.png"))

# ---------------------------------------------------------------- 10
questions.append(Q(
    10, "mips_assembly_c", "מהו התרגום השגוי באסמבלי לשורת ה-C:   `a = 4*a - 2*b;`",
    opts(code(["add $7, $7, $7", "add $7, $7, $7", "add $5, $5, $5", "sub $7, $7, $5"]),
         code(["add $7, $7, $7", "add $7, $7, $7", "sub $7, $7, $5", "sub $7, $7, $5"]),
         code(["add $7, $7, $7", "sub $7, $7, $5", "add $7, $7, $7"]),
         code(["sub $7, $7, $5", "add $7, $7, $7", "add $7, $7, $7", "add $7, $5, $7", "add $7, $7, $5"])), "a",
    r"""התרגום א מחשב $a=4a-2b$ אך משנה גם את §5 (הוא $b$): `add §5,§5,§5` נותן $b=2b$, ולכן $b$ אינו נשאר ללא שינוי - זהו התרגום השגוי.
ב: $2a\to 4a\to 4a-b\to 4a-2b$ - נכון. ג: $2a\to 2a-b\to 4a-2b$ - נכון. ד: $a-b\to 2a-2b\to 4a-4b\to 4a-3b\to 4a-2b$ - נכון.""",
    note="The question asks which translation is WRONG; a is wrong because it overwrites $5 (b), although the value it computes for a is right."))

# ---------------------------------------------------------------- 11
questions.append(Q(
    11, "number_bases", "מה נכון ?",
    opts(("math", r"[1223.41]_9=[1020210.1101]_3"), ("math", r"[1223.41]_9=[1202010.1001]_3"),
         ("math", r"[1223.41]_9=[1020210.111]_3"), ("math", r"[1223.41]_9=[1020110.2001]_3"),
         ("math", r"[1223.41]_9=[1020110.1001]_3"), ("math", r"[1223.41]_9=[1010210.1011]_3")), "a",
    r"""כל ספרה בבסיס 9 שווה לשתי ספרות בבסיס 3: $[0]_9=[00]_3$, $[1]_9=[01]_3$, $[2]_9=[02]_3$, $[3]_9=[10]_3$, $[4]_9=[11]_3$, $[5]_9=[12]_3$, $[6]_9=[20]_3$, $[7]_9=[21]_3$, $[8]_9=[22]_3$.
$1\to 01$, $2\to 02$, $2\to 02$, $3\to 10$, $4\to 11$, $1\to 01$, ולכן $[1223.41]_9=[01\,02\,02\,10.11\,01]_3=[1020210.1101]_3$."""))

# ---------------------------------------------------------------- 12
questions.append(Q(
    12, "signed_twos_complement",
    "במחבר 2's Comp. של 8 ביט יש יציאה הנדלקת כאשר יש Overflow. באיזה מהחישובים הבאים לא תידלק יציאה זו?",
    opts("`01001101 + 00110001`", "`11011101 - 01110111`", "`00111101 + 01001011`",
         "`00111101 - 10110101`", "`11000100 + 10101010`"), "a",
    r"""התחום ב-8 ביט הוא $-128\le X\le 127$.
א: $77+49=126$ - אין גלישה.
ב: $(-35)-119=-154$ - יש גלישה.
ג: $61+75=136$ - יש גלישה.
ד: $61-(-75)=136$ - יש גלישה.
ה: $(-60)+(-86)=-146$ - יש גלישה.""",
    note="The lecturer's working page lists operands that differ from the printed options for b-e (e.g. 11011111-01110101 for b, 00111001+01001001 for c); the printed options were recomputed here. The conclusion (only a is overflow-free, 77+49=126) is the same."))

# ---------------------------------------------------------------- 13
q13 = [
    code(["      slt $1, $2, $3", "      beq $1, $0, lab1", "      add $3, $2, $2", "lab1: slt $1, $2, $4", "      bne $1, $0, lab2", "      add $4, $2, $2", "lab2:"]),
    code(["      slt $1, $2, $3", "      bne $1, $0, lab1", "      add $3, $2, $2", "lab1: slt $1, $2, $4", "      beq $1, $0, lab2", "      add $4, $2, $2", "lab2:"]),
    code(["      slt $1, $2, $3", "      bne $1, $0, lab1", "      add $3, $3, $2", "lab1: slt $1, $2, $4", "      bne $1, $0, lab2", "      add $4, $4, $2", "lab2:"]),
    code(["      slt $1, $2, $3", "      beq $1, $0, lab1", "      add $3, $3, $2", "lab1: slt $1, $2, $4", "      bne $1, $0, lab2", "      add $4, $4, $2", "lab2:"]),
]
questions.append(Q(
    13, "mips_assembly_c",
    "הקטע הנתון בשפת C תורגם לשפת אסמבלי של ה-MIPS.\n" + code(["if(a>b)  a=2*b;", "if(c<=b)  c=2*b;"], "c") + "\nמהו התרגום הנכון?",
    opts(*q13), "a",
    r"""מתאימים אוגרים לפי הפתרון: $b=§2$, $a=§3$, $c=§4$.
`slt §1,§2,§3` נותן $§1=1$ אם $b<a$ (כלומר $a>b$); אם לא - מדלגים על `add §3,§2,§2` ($a=2b$) באמצעות `beq §1,§0,lab1`.
`slt §1,§2,§4` נותן $§1=1$ אם $b<c$; אם $c>b$ מדלגים (`bne §1,§0,lab2`), אחרת ($c\le b$) מבצעים `add §4,§2,§2` ($c=2b$).
ב: הקפיצה הראשונה והשנייה הפוכות; ג ו-ד: מבצעים $a=a+b$ ו-$c=c+b$ במקום $2b$.""",
    note="The register-to-variable mapping (b=$2, a=$3, c=$4) is not printed in the question; it is taken from the lecturer's solution page."))

# ---------------------------------------------------------------- 14
questions.append(Q(
    14, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=A\cdot\bar B+\bar C\cdot D+B\cdot D"),
         ("math", r"F=A\cdot\bar B+\bar C\cdot D+C\cdot B"),
         ("math", r"F=A\cdot B+\bar C\cdot D+B\cdot D"),
         ("math", r"F=A\cdot\bar B+C\cdot D+C\cdot B")), "a",
    r"""פיתוח לפי כניסות הנתונים של המולטיפלקסר ($ABC=000\to D$, $001\to 0$, $010\to D$, $011\to D$, $100\to 1$, $101\to 1$, $110\to D$, $111\to D$):
$F=\bar A\bar B\bar C\cdot D+\bar A\bar BC\cdot 0+\bar AB\bar C\cdot D+\bar ABC\cdot D+A\bar B\bar C\cdot 1+A\bar BC\cdot 1+AB\bar C\cdot D+ABC\cdot D$.
$A\bar B\bar C+A\bar BC=A\bar B$; $\bar AB\bar CD+\bar ABCD+AB\bar CD+ABCD=BD$; נותר $\bar A\bar B\bar CD$. לכן $F=A\bar B+BD+\bar A\bar B\bar CD=A\bar B+BD+\bar CD$ (המכפלה $\bar A\bar B\bar CD$ יחד עם $A\bar B\bar CD$, הכלול ב-$A\bar B$, נותנת $\bar B\bar CD$; ו-$\bar CD=\bar B\bar CD+B\bar CD$ כאשר $B\bar CD$ כלול ב-$BD$).
בדיקת האפשרויות האחרות: ב - עבור $ABCD=0110$ הביטוי $CB=1$ ואילו $F=D=0$; ג - עבור $ABCD=1110$ הביטוי $AB=1$ ואילו $F=D=0$; ד - עבור $ABCD=0011$ הביטוי $CD=1$ ואילו $ABC=001$ ו-$F=0$.""",
    image="images/exams/24A-A-Q14.png"))

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
    r"""נרשום את המשוואה לפי המעגל: $X=1$ כאשר $AB=10$ ו-$Y=1$ כאשר $AB=11$, ולכן $XY=00$ כאשר $AB=00$ או $AB=01$, $XY=10$ כאשר $AB=10$, $XY=01$ כאשר $AB=11$ ו-$XY=11$ אינו מתקבל.
הכניסות הנבחרות: $XY=00\to(CD=11)+(AB=00)$; $XY=01\to(CD=01)+(CD=10)$; $XY=10\to(AB=01)$; $XY=11\to(CD=00)$.
$AB=00$: $F=CD+1=1$ - המינטרמים $0,1,2,3$; $AB=01$: $F=CD$ - המינטרם $7$; $AB=10$: $F=0$; $AB=11$: $F=\bar CD+C\bar D$ - המינטרמים $13,14$.
$F=\Sigma(0,1,2,3,7,13,14)$ - זו תשובה א. בכל אחת מהאפשרויות האחרות מינטרם אחד שונה: ב - 5 במקום 7, ג - 6 במקום 7, ד - 6 במקום 7 ו-12 במקום 13, ה - 6 במקום 7 ו-15 במקום 14.""",
    image="images/exams/24A-A-Q15.png"))

# ---------------------------------------------------------------- 16
questions.append(Q(
    16, "arithmetic_circuits",
    "בידנו מעגל הכופל את המספר השלם מטיפוס unsigned בן חמש סיביות $[a_4,a_3,a_2,a_1,a_0]_2$ במספר 19 (גם כן unsigned) המיוצג על ידי $[10011]_2$. "
    "המכפל בנוי מרכיבי HA (כלומר Half-Adder) ורכיבי FA (כלומר Full-Adder). עלינו לספור את מספר הרכיבים ומספר היציאות. "
    "אנו כמובן מעדיפים מספר מינימלי של רכיבים (במקום FA לכאורה אפשר להשתמש בשני HA. אם יש כזה מקרה – נעדיף את ה- FA הבודד)\n"
    "מה נכון?",
    opts("יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 6 רכיבי HA ו-4 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 6 רכיבי HA ו-4 רכיבי FA ויש לו 9 יציאות"), "a",
    r"""מכיוון ש-$19=[10011]_2$, מחברים שלוש שורות: $A\cdot 2^0,\ A\cdot 2^1,\ A\cdot 2^4$ (השורות המתאימות לביטים השווים 1).
מתקבלים $5\times$FA ו-$5\times$HA, ויש 10 יציאות ($y_0\ldots y_9$). בדיקה: המכפלה המקסימלית היא $19\times 31=589$, ולכן 10 ביטים מספיקים."""))

# ---------------------------------------------------------------- 17
questions.append(Q(
    17, "mips_machine_code", "מהו התרגום של הפקודה `slt §v1, §t8, §s4`  לשפת המכונה של ה-MIPS ?",
    opts("0x0314182A", "0x0078A02A", "0x0298182A", "0xAA981800", "0x13141800", "0x0398A800"), "a",
    r"""`slt` היא פקודת R-type: $Rd=§v1=§3$, $Rs=§t8=§24$, $Rt=§s4=§20$, funct $=42=101010$.
$000000\ |\ 11000\ |\ 10100\ |\ 00011\ |\ 00000\ |\ 101010\Rightarrow\texttt{0x0314182A}$."""))

# ---------------------------------------------------------------- 18
questions.append(Q(
    18, "unsigned_numbers",
    "$X$ הוא מספר בן 11 ביט מהם 4 הם מימין לנקודה הבינרית. כלומר:\n"
    r"$X=\langle X_6,X_5,X_4,X_3,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4}\rangle$" + "\n"
    "עליכם למצוא את תחום המספרים אותו ניתן להציג כמספרים לא מכוונים (unsigned) וכמספרים מכוונים (2's complement signed).",
    opts(r"כ-Signed מ- $(-2^6)$ ועד $(2^6-2^{-4})$ וכ-Unsigned מ-0 ועד $(2^7-2^{-4})$",
         r"כ-Signed מ- $(-2^6)$ ועד $(2^6-2^{-5})$ וכ-Unsigned מ-0 ועד $(2^5-2^{-5})$",
         r"כ-Signed מ- $(-2^6)$ ועד $(2^6-2^{-4})$ וכ-Unsigned מ-0 ועד $(2^6-2^{-4})$",
         r"כ-Signed מ- $(-2^6)$ ועד $(2^6-2^{-5})$ וכ-Unsigned מ-0 ועד $(2^6-2^{-5})$"), "a",
    r"""ב-$[n.m]_2=[7.4]_2$ (7 סיביות לחלק השלם ו-4 לשבר): Unsigned מ-0 עד $2^n-2^{-m}=2^7-2^{-4}$, ו-Signed מ-$-2^{n-1}=-2^6$ עד $2^{n-1}-2^{-m}=2^6-2^{-4}$. לכן תשובה א.""",
    note="Printed question text: 'X הוא מספר בן 11 ביט מהם 4 הם מימין לנקודה הבינרית. כלומר: X=X6..X0.X-1..X-4' transcribed as printed."))

# ---------------------------------------------------------------- 19
questions.append(Q(
    19, "mips_machine_code", "הפקודה `0x22CBFDE1`  בשפת מכונה של ה-MIPS הינה בעצם פקודת האסמבלי הבאה:",
    opts("`addi $t3, $s6, -543`", "`beq $t3, $s6, 0xFDE1`", "`beq $s6, $t3, 0xFDE1`", "`or $k1, $s6, $t3`", "`ori $k1, $t3, 0xFDE1`"), "a",
    r"""`0x22CBFDE1` $=\ 001000\ |\ 10110\ |\ 01011\ |\ 1111\,1101\,1110\,0001$.
opcode $=8=\text{addi}$; $Rs=22=§s6$, $Rt=11=§t3$; $\text{imm}=\texttt{0xFDE1}=-543$ (כי $543=512+31$).
$\Rightarrow$ `addi §t3, §s6, -543`"""))

# ---------------------------------------------------------------- 20
C20 = ["for(i=0;i<size;i++)", "{", "        if (array1[i] > array2[i])", "           array2[i] = array1[i];", "}"]
ASM20 = ["      addi $7, $0, 0", "      j lab3", "lab1: add $8, $7, $7", "      add $8, $8, $8", "      add $9, $8, $5", "      add $8, $8, $6",
         "@@@@@@@", "lab2: addi $7, $7, 1", "lab3: slt  $1, $7, $4", "      bne $1, $0, lab1"]


def alt20(s1, br, lab):
    return code(["lw $10, 0($9)", "lw $11, 0($8)", f"slt $1, {s1}", f"{br} $1, $0, {lab}", "sw $10, 0($8)"])


questions.append(Q(
    20, "mips_assembly_c",
    "קטע ה- C הבא תורגם לשפת הסף (אסמבלי) של מחשב MIPS. הנח כי כתובת ההתחלה של array1 נמצאת באוגר §5. כתובת ההתחלה של array2 נמצאת באוגר §6. "
    "הערך size שהוא גודל המערכים (הם זהים בגודלם) נמצא באוגר §4. המערכים הינם מערכים של מילים (Words=4 bytes). אוגרים §4, §5 ו- §6 צריכים להישאר ללא שינוי.\n"
    + code(C20, "c") + "\nלהלן התרגום:\n" + code(ASM20) + "\nמהתרגום נשמטו פקודות במקום המסומן ב- `@@@@@@@`.\nהפקודות החסרות הן:",
    opts(alt20("$11, $10", "beq", "lab2"), alt20("$11, $10", "bne", "lab2"), alt20("$10, $11", "beq", "lab2"),
         alt20("$10, $11", "bne", "lab2"), alt20("$11, $10", "bne", "lab1"), alt20("$11, $10", "beq", "lab1")), "a",
    r"""§8 מצביע ל-`array2[i]` ו-§9 ל-`array1[i]` (`# §8 = array2+4*i`, `# §9 = array1+4*i`). `lw §10,0(§9)` טוען את `array1[i]` ו-`lw §11,0(§8)` את `array2[i]`.
`slt §1,§11,§10` נותן `§1=1` אם `array2[i]<array1[i]`, כלומר אם `array1[i]>array2[i]`; אם לא - מדלגים על ההעתקה (`beq §1,§0,lab2`), אחרת `sw §10,0(§8)` (`array2[i]=array1[i]`).
ב: התנאי הפוך (`bne`, בפתרון: "wrong condition"); ג, ד: ההשוואה ב-`slt` הפוכה ("wrong compare"); ה, ו: קפיצה ל-`lab1` ("wrong label") מדלגת גם על `i++` ובדיקת תנאי הלולאה.
הערה: ד מעתיקה כאשר `array1[i]>=array2[i]` ומשאירה אותו מערך (במקרה השוויון ההעתקה אינה משנה דבר), אבל היא תרגום של `>=` ולא של `>`, ולכן התרגום הנאמן לקוד הוא רק א.""",
    note="Arbiter 2026-10-17: key a stands as the unique faithful translation. Option d (slt $1,$10,$11 ; bne ... lab2) gives the same final array as the key because it differs only when the two elements are equal (the store would copy an equal value); the lecturer's solution page still labels d 'wrong compare' and keeps a as the only answer."))

exam = {
    "examCode": "24A-A",
    "examLabel": "2024 סמסטר א מועד א",
    "year": 2024,
    "examDate": "27.3.2024",
    "sourceFile": "sitting 24A-A (exam pages 2-17)",
    "keyFile": "sitting 24A-A pp.2-17 (red-circled options) + pp.18-35 (handwritten solution)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
