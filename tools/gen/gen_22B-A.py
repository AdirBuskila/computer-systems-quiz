# -*- coding: utf-8 -*-
"""Generator for tools/raw/22B-A.json -- computer-systems, 2022 semester A, moed B (03.03.2022).
Run: PYTHONUTF8=1 py tools/gen/gen_22B-A.py

Source: sitting 22B-A, 22 pages: p.1 cover/instructions, pp.2-22 one question per page (Q1..Q20, the 20th is
printed with the number "1.") with the lecturer's circled option and his handwritten working below it. The circle is
on option a in every question except Q10 (a "which is WRONG" question, no circle: the lecturer ticks b, c, d and
writes that a computes the right value but changes b). Q1 has TWO circles (a and c): the lecturer writes
"2 correct answers" next to it, and both equations are indeed false (script) -> acceptedIds.
Literal MIPS register dollars in plain text are written with the section sign (reg() escapes them); inside fenced
code a plain $ is fine.
Keys checked by script (tools/verify/22B-A/check.py): Q1 Q2 Q4 Q5 Q7 Q9 Q10 Q11 Q12 Q13 Q14 Q15 Q16 Q17 Q19 Q20
recomputed and agree; Q3 Q6 Q8 Q18 by reasoning. Handwritten Hebrew commentary is reconstructed from the solution."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "22B-A.json"
IDS = "abcdef"


def opts(*vals):
    out = []
    for i, v in enumerate(vals):
        if isinstance(v, tuple):
            out.append({"id": IDS[i], "type": v[0], "value": v[1]})
        else:
            out.append({"id": IDS[i], "type": "text", "value": v})
    return out


def fence(lines, lang="asm"):
    return "```" + lang + "\n" + "\n".join(lines) + "\n```"


def reg(s):
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

# 1
questions.append(Q(
    1, "boolean_algebra", "מי מהמשוואות הבאות אינה נכונה?",
    opts(("math", r"(A\oplus B)\cdot(A\oplus C)=A\oplus\overline{(B\oplus C)}"),
         ("math", r"(A\oplus B)\cdot\overline{(A\oplus C)}=\bar A\cdot\bar C\cdot B+\bar B\cdot C\cdot A"),
         ("math", r"(A\oplus B)\oplus(C\oplus\bar E)\oplus\overline{(D\oplus C)}\oplus(\bar B\oplus D)=(\bar A\oplus C)\oplus(\bar C\oplus E)"),
         ("math", r"\overline{B\cdot A}+\overline{D\cdot C}=A\cdot(B\cdot(C\cdot\bar D+\bar C)+\bar B)+\bar A")), "a",
    r"""א: $(A\oplus B)(A\oplus C)=(\bar AB+A\bar B)(\bar AC+A\bar C)=\bar ABC+A\bar B\bar C$, ואילו $A\oplus\overline{B\oplus C}=A\oplus(\bar B\bar C+BC)=\bar A\bar B\bar C+\bar ABC+A\bar BC+AB\bar C$ - לא שווים, לכן א אינה נכונה.
ב: $(A\oplus B)\cdot\overline{A\oplus C}=(\bar AB+A\bar B)(\bar A\bar C+AC)=\bar AB\bar C+A\bar BC$ - נכונה.
ג: אגף שמאל שווה ל-$\overline{A\oplus E}$ ואגף ימין $(\bar A\oplus C)\oplus(\bar C\oplus E)=\bar A\oplus(C\oplus\bar C)\oplus E=A\oplus E$ - לא שווים, לכן ג אינה נכונה.
ד: $\bar A+\bar B+\bar C+\bar D$ משני האגפים (לפי $X+\bar XY=X+Y$) - נכונה.""",
    acceptedIds=["a", "c"],
    note="Two circles on the printed page (a and c) and the lecturer's note '2 correct answers'; both equations are false by exhaustive check, so both are accepted."))

# 2
questions.append(Q(
    2, "mips_machine_code", "מה יהיה באוגר §9 אחרי ביצוע הפקודות הבאות:\n" +
    fence(["addi $7, $0, 0x8888", "lui  $9, 0x8888", "add  $9, $9, $7", "add  $9, $7, $9"]),
    opts("0x88871110", "0x88870888", "0x88881110", "0x88880888", "0x88891110", "0x88890888"), "a",
    r"""אחרי addi (הרחבת סימן): $§7=\texttt{0xFFFF8888}$. אחרי lui: $§9=\texttt{0x88880000}$.
אחרי ה-add הראשון: $§9=\texttt{0x88878888}$; אחרי השני: $§9=\texttt{0xFFFF8888}+\texttt{0x88878888}=\texttt{0x88871110}$."""))

# 3
questions.append(Q(
    3, "floating_point",
    "חיברנו שני מספרים המיוצגים ב- Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר). מהי התשובה השגויה?",
    opts("נקבל מספר מנורמל רק אם שני המחוברים מנורמלים",
         "אם שני המחוברים מנורמלים התוצאה לאו דווקא מנורמלת",
         "אם שני המחוברים מנורמלים והתוצאה היא מספר לא מנורמל אזי אחד מהמספרים שלילי והשני חיובי",
         "אם שני המחוברים מנורמלים ואחד מהם שלילי והשני חיובי לא ייתכן שהתוצאה היא אינסוף ($\\infty$).",
         "ייתכן שתוצאת החיבור היא 0."), "a",
    """א שגויה: אם נחבר שני מספרים לא מנורמלים הגדולים ביותר נקבל מספר מנורמל.
ב נכונה: למשל 1 + (-1) = 0, שאינו מנורמל.
ג נכונה: סכום של שני מנורמלים בעלי אותו סימן אינו יכול לקטון אל מתחת לתחום המנורמלים.
ד נכונה: בסימנים הפוכים התוצאה קטנה בערכה המוחלט ולכן אין גלישה לאינסוף.
ה נכונה (כמו ב)."""))

# 4
questions.append(Q(
    4, "number_bases",
    r"מהו ערכו העשרוני של השבר האינסופי $[0.240\ 240\ 240\ 240\ \ldots]_7$ בבסיס 7?",
    opts("7/19", "11/30", "35/97", "23/64", "13/36", "126/343"), "a",
    r"""$[0.240]_7=2\cdot\frac17+4\cdot\frac1{49}=\frac{18}{49}=\frac{126}{343}$, והמנה היא $q=\frac1{7^3}=\frac1{343}$.
$S_\infty=\frac{A_1}{1-q}=\frac{126/343}{1-1/343}=\frac{126}{342}=\frac{7}{19}$."""))

# 5
questions.append(Q(
    5, "signed_twos_complement",
    "X הוא מספר 2's complement בן 13 סיביות מהן 6 הם מימין לנקודה הבינרית. כלומר:\n"
    r"$X=\langle X_6,X_5,X_4,X_3,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4},X_{-5},X_{-6}\rangle$" + "\n"
    r'סיביות $X_4$, $X_2$ ו- $X_{-2}$ הן "1".' + "\nמה לא נכון:",
    opts(r"$\langle X\rangle$ יכול להיות $-42\frac{22}{64}$",
         r"$\langle X\rangle$ יכול להיות $-\frac{3}{4}$",
         r"$\langle X\rangle$ יכול להיות $-42\frac{43}{64}$",
         r"$\langle X\rangle$ לא יכול להיות $60\frac{1}{2}$",
         r"$\langle X\rangle$ לא יכול להיות $-30\frac{1}{2}$",
         r"$\langle X\rangle$ לא יכול להיות $\frac{7}{64}$"), "a",
    r"""א: $42\frac{22}{64}=\langle0101010.010110\rangle$, ולכן $-42\frac{22}{64}=\langle1010101.101010\rangle$ - הסיבית $X_{-2}$ היא 0, לכן המספר לא יכול להיות מייצג - הטענה לא נכונה.
ב: $-\frac34=\langle1111111.010000\rangle$ - יכול להיות.
ג: $42\frac{43}{64}=\langle0101010.101011\rangle$, ולכן $-42\frac{43}{64}=\langle1010101.010101\rangle$ - יכול להיות.
ד: $60\frac12$ מקבל $X_{-2}=0$ - לא יכול להיות (נכון).
ה: ב-$-30\frac12$ הסיבית $X_{-2}$ היא 0 - לא יכול להיות (נכון).
ו: $\frac7{64}=\langle0000000.000111\rangle$ - $X_{-2}=0$, לא יכול להיות (נכון)."""))

# 6
questions.append(Q(
    6, "signed_twos_complement",
    "X הוא מספר בן 12 סיביות מהם 5 הם משמאל לנקודה הבינרית. כלומר: "
    r"$X=X_4,X_3,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4},X_{-5},X_{-6},X_{-7}$. "
    "עליכם למצוא את תחום המספרים אותו ניתן להציג כמספרים לא מכוונים (unsigned) וכמספרים מכוונים (2's complement signed).",
    opts(r"כ-Unsigned מ-0 ועד $(2^5-2^{-7})$ וכ-Signed מ-$(-2^4)$ ועד $(2^4-2^{-7})$",
         r"כ-Unsigned מ-0 ועד $(2^5-2^{-8})$ וכ-Signed מ-$(-2^5)$ ועד $(2^4-2^{-8})$",
         r"כ-Unsigned מ-0 ועד $(2^5-2^{-7})$ וכ-Signed מ-$(-2^4)$ ועד $(2^5-2^{-7})$",
         r"כ-Unsigned מ-0 ועד $(2^4-2^{-8})$ וכ-Signed מ-$(-2^4)$ ועד $(2^4-2^{-8})$"), "a",
    r"""ב-12 סיביות: signed $-2^{11}\ \ldots\ (2^{11}-1)$ ו-unsigned $0\ \ldots\ (2^{12}-1)$. מחלקים ב-$2^7$ (7 ספרות אחרי הנקודה) ומקבלים: signed מ-$-2^4$ ועד $2^4-2^{-7}$, unsigned מ-0 ועד $2^5-2^{-7}$."""))

# 7
questions.append(Q(
    7, "floating_point",
    "ב Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר), באיזה קטע יש יותר מספרים?",
    opts(("math", r"[-1,-88]"), ("math", r"[100,352]"), ("math", r"[-100,-352]"),
         ("math", r"[25,255]"), ("math", r"[0.25,18]"), ("math", r"[0.125,10]")), "a",
    r"""מספרי ה-floating point מפוזרים באופן אחיד בלוגריתם, ולכן מספר המספרים בקטע תלוי ביחס בין קצותיו.
א: $\frac{-88}{-1}=88$; ב: $\frac{352}{100}=3.52$; ג: $\frac{-352}{-100}=3.52$; ד: $\frac{255}{25}=10.2$; ה: $\frac{18}{0.25}=72$; ו: $\frac{10}{0.125}=80$.
היחס הגדול ביותר הוא ב-א, ולכן שם יש הכי הרבה מספרים."""))

# 8
questions.append(Q(
    8, "datapath_control",
    "אילו הוספנו למעבד ה-MIPS שמימשנו בפקודת xori, שמבצעת xor בין 16 bit imm ללא sign extension, לבין התוכן של אוגר Rs וכותבת את התוצאה ל- Rt. "
    "אילו שלבים היו מתבצעים במהלך ביצוע הפקודה הזו?\n(למשל xori §9, §3, 0xF101)",
    opts("Fetch, Decode, ALU, Write-Back", "Fetch, Decode, ALU, Memory, Write-Back", "Fetch, Decode, Memory", "Fetch, Decode, ALU"), "a",
    """Fetch; Decode; ALU (שם מתבצע ה-xor); Write-Back (התוצאה נכתבת ל-Rt). אין גישה לזיכרון."""))

# 9
questions.append(Q(
    9, "latches_flipflops",
    "לפניכם שלושה דלגלגים (FF-ים), המחוברים בצורת אוגר הזזה (Shift Register). הכניסה משמאל (ל-D2) מחוברת ליציאת שער XOR, "
    "המבצע פעולת XOR בין Q0 להיפוך של Q2. הערך באוגר ההזזה הוא: [Q2, Q1, Q0] = [0, 1, 1], כמצויר. מה היה הערך לפני 8 עליות שעון?",
    opts(("math", r"[Q_2,Q_1,Q_0]=[1,1,0]"), ("math", r"[Q_2,Q_1,Q_0]=[0,0,0]"), ("math", r"[Q_2,Q_1,Q_0]=[0,1,0]"),
         ("math", r"[Q_2,Q_1,Q_0]=[1,0,0]"), ("math", r"[Q_2,Q_1,Q_0]=[0,0,1]")), "a",
    r"""$D_2=\bar Q_2\oplus Q_0$: שווה 1 אם $Q_2=Q_0$ ו-0 אם $Q_2\ne Q_0$.
הסדרה מחזורית באורך 7: $[0,1,1]\to[0,0,1]\to[0,0,0]\to[1,0,0]\to[0,1,0]\to[1,0,1]\to[1,1,0]\to[0,1,1]$. לכן 8 עליות שעון לאחור שקולות לעלייה אחת לאחור, והמצב הקודם הוא $[1,1,0]$.""",
    image="images/exams/22B-A-Q9.png"))

# 10
questions.append(Q(
    10, "mips_assembly_c", "מהו תרגום שגוי באסמבלי של ה-MIPS לשורת ה- C הבאה:\na = 3*a - 4*b;",
    opts(fence(["add $1, $5, $0", "add $5, $5, $5", "add $5, $5, $1", "add $2, $2, $2", "add $2, $2, $2", "sub $5, $5, $2"]),
         fence(["add $1, $5, $0", "sub $5, $5, $2", "add $5, $5, $5", "add $5, $5, $5", "sub $5, $5, $1"]),
         fence(["sub $1, $1, $1", "add $1, $1, $5", "add $1, $1, $5", "add $5, $1, $5", "sub $5, $5, $2",
                "sub $5, $5, $2", "sub $5, $5, $2", "sub $5, $5, $2"]),
         fence(["add $1, $5, $5", "add $1, $1, $1", "sub $1, $1, $2", "sub $1, $1, $2", "sub $1, $1, $2", "sub $1, $1, $2",
                "sub $5, $1, $5"])), "a",
    """לפי הפתרון a נמצא ב-§5 ו-b ב-§2.
א: §1=a; a=2a; a=3a; b=2b; b=4b; a=3a-4b - התוצאה המחושבת נכונה, אבל שינינו את b (§2), ולכן התרגום שגוי.
ב, ג, ד: מחשבים 3a-4b ו-b נשאר ללא שינוי - תרגומים נכונים.""",
    note="No circle on the page for this question: the lecturer ticks b, c, d and writes that the computed value of a is right but b was changed, so a is the wrong translation. Key a read from that note; script check confirms only a overwrites b."))

# 11
questions.append(Q(
    11, "number_bases",
    r"המספר הבא $[326]_7$ שהוא מספר Unsigned בבסיס 7, הומר לבסיס 3. הערך הנכון הינו:",
    opts(("math", r"[20012]_3"), ("math", r"[21002]_3"), ("math", r"[20112]_3"),
         ("math", r"[20102]_3"), ("math", r"[21012]_3"), ("math", r"[20002]_3")), "a",
    r"""$[326]_7=3\cdot49+2\cdot7+6=147+14+6=167$. חילוקים ב-3: $167=3\cdot55+2$, $55=3\cdot18+1$, $18=3\cdot6+0$, $6=3\cdot2+0$, $2=3\cdot0+2$.
לכן $[20012]_3$; בדיקה: $2\cdot81+3+2=167$."""))

# 12
questions.append(Q(
    12, "signed_twos_complement",
    "במחבר 2's Comp. של 8 ביט יש יציאה הנדלקת כאשר יש Overflow. באיזה מהחישובים הבאים לא תידלק יציאה זו?",
    opts("`10110110 + 11010001`", "`10110110 + 10111001`", "`01011111 + 00110001`",
         "`01010001 - 10010011`", "`10110110 + 10111010`"), "a",
    r"""א: $(-74)+(-47)=-121$ - אין גלישה.
ב: $(-74)+(-57)=-131$ - גלישה.
ג: $95+49=144$ - גלישה.
ד: $81-(-109)=190$ - גלישה.
ה: $(-74)+(-70)=-144$ - גלישה."""))

# 13
questions.append(Q(
    13, "mips_assembly_c",
    "רק אחד מהתרגומים הבאים בשפת אסמבלי של ה-MIPS לקטע ה-C הבא הוא נכון. מהו התרגום הנכון?\n" + fence(["if (a >= b) a = 2*a;", "else  b=2*b;"], "c"),
    opts(fence(["      slt $1, $3, $4", "      beq $1, $0, lab1", "      add $4, $4, $4", "      beq $0, $0, end", "lab1: add $3, $3, $3", "end:"]),
         fence(["      slt $1, $3, $4", "      bne $1, $0, lab1", "      add $4, $4, $4", "      beq $0, $0, end", "lab1: add $3, $3, $3", "end:"]),
         fence(["      slt $1, $4, $3", "      bne $1, $0, lab1", "      add $3, $3, $3", "      beq $0, $0, end", "lab1: add $4, $4, $4", "end:"]),
         fence(["      slt $1, $3, $4", "      beq $1, $0, lab1", "      add $3, $3, $3", "      beq $0, $0, end", "lab1: add $4, $4, $4", "end:"])), "a",
    """לפי הפתרון a הוא §3 ו-b הוא §4. `slt §1,§3,§4`: §1=1 אם a<b ו-§1=0 אם a>=b.
א: `beq §1,§0,lab1` קופץ כש-a>=b ושם a=2a; אחרת b=2b - נכון.
ב: קופץ כש-a<b ושם a=2a - שגוי. ג: בודק b<a עם bne ומכפיל את הרגיסטר הלא נכון. ד: כש-a>=b מכפיל את b ולא את a - שגוי."""))

# 14
questions.append(Q(
    14, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=\bar C\cdot D+A\cdot\bar C+\bar B\cdot C"),
         ("math", r"F=A\cdot\bar C+\bar C\cdot D+\bar A\cdot C"),
         ("math", r"F=\bar A\cdot\bar C+\bar C\cdot D+A\cdot B"),
         ("math", r"F=A\cdot\bar C+\bar A\cdot B+\bar A\cdot C")), "a",
    r"""פיתוח לפי כניסות המולטיפלקסר: $F=\bar A\bar B\bar C\cdot D+\bar A\bar BC\cdot1+\bar AB\bar C\cdot D+\bar ABC\cdot0+A\bar B\bar C\cdot1+A\bar BC\cdot1+AB\bar C\cdot1+ABC\cdot0=\bar CD+A\bar C+\bar BC$.
ב: עבור $A=0,B=C=1$ הביטוי נותן 1 ואילו במעגל 0. ג: עבור $A=B=C=1$ הביטוי $AB$ נותן 1 ואילו במעגל 0. ד: עבור $A=0,B=C=1$ הביטוי נותן 1 ואילו במעגל 0.""",
    image="images/exams/22B-A-Q14.png"))

# 15
questions.append(Q(
    15, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=B\cdot\bar C+A\cdot\bar B+\bar B\cdot D"),
         ("math", r"F=B\cdot\bar C+A\cdot B+\bar B\cdot D"),
         ("math", r"F=B\cdot\bar C+A\cdot\bar B+C\cdot D"),
         ("math", r"F=B\cdot\bar C+A\cdot\bar B+\bar A\cdot\bar B\cdot C")), "a",
    r"""מהמעגל: $F=\bar C\bar D(B+A\bar B)+\bar CD\cdot1+C\bar D(A\bar B)+CD(\bar A\bar B+A\bar B)=B\bar C+A\bar B+\bar BD$.
ב ו-ג: עבור $A=B=C=D=1$ המשוואה נותנת 1 ואילו במעגל 0. ד: עבור $A=B=D=0,\ C=1$ הביטוי $\bar A\bar BC$ נותן 1 ואילו במעגל 0.""",
    image="images/exams/22B-A-Q15.png"))

# 16
questions.append(Q(
    16, "arithmetic_circuits",
    "בידנו מעגל הכופל את המספר השלם מטיפוס unsigned בן ארבע סיביות $[a_3,a_2,a_1,a_0]_2$ במספר 29 (גם כן unsigned). "
    "המכפל בנוי מרכיבי HA (כלומר Half-Adder) ורכיבי FA (כלומר Full-Adder). עלינו לספור את מספר הרכיבים ומספר היציאות. "
    "אנו כמובן מעדיפים מספר מינימלי של רכיבים (במקום FA לכאורה אפשר להשתמש בשני HA. אם יש כזה מקרה - נעדיף את ה- FA הבודד)\n"
    "מה נכון?",
    opts("יש במכפל 3 רכיבי HA ו-7 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 3 רכיבי HA ו-7 רכיבי FA ויש לו 8 יציאות",
         "יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 8 יציאות",
         "יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 8 יציאות"), "a",
    r"""$29=[11101]_2$, ולכן מחברים ארבע שורות: $A\cdot2^0,\ A\cdot2^2,\ A\cdot2^3,\ A\cdot2^4$. מתקבלים $3\times$HA ו-$7\times$FA, ויש 9 יציאות ($y_0\ldots y_8$)."""))

# 17
questions.append(Q(
    17, "mips_machine_code",
    "התרגום של הפקודה `bne $t7, $sp, cont` שנמצאת בכתובת `0x10000100` לשפת מכונה של ה-MIPS כאשר cont היא כתובת `0x10000180` הינו:",
    opts("0x15FD001F", "0x15FD0020", "0x15FD0019", "0x17AF001F", "0x17AF0020", "0x17AF0019"), "a",
    r"""bne: opcode $=5$, $\text{Rs}=§t7=§15$, $\text{Rt}=§sp=§29$. $000101\ |\ 01111\ |\ 11101\ |\ \text{imm}$.
ההפרש: $\texttt{0x10000180}-\texttt{0x10000100}=\texttt{0x80}$ בתים $=\texttt{0x20}$ מילים. כיוון ש-$PC=PC+4+4\cdot\text{sext}(\text{imm})$, מתקבל $\text{imm}=\texttt{0x20}-1=\texttt{0x1F}$.
$\Rightarrow\texttt{0x15FD001F}$."""))

# 18
questions.append(Q(
    18, "datapath_control",
    "במעבד ה- MIPS Single Cycle שלמדנו מי מהצירופים הרשומים מטה של אותות הבקרה נכון לפקודת xor?",
    opts("ALUOp=10 (func); jump=0; MemtoReg =0; Branch=0",
         "ALUOp=01 (sub); RegDst=1; MemtoReg =0; Branch=0",
         "ALUOp=01 (sub); MemtoReg=0; RegWrite=1; Branch=0",
         "ALUOp=10 (func); jump=0; RegWrite=1; Branch=1",
         "ALUOp=01 (sub); MemtoReg=0; RegWrite=1; Branch=1",
         "ALUOp=10 (func); MemtoReg=1; RegWrite=1; Branch=0"), "a",
    """xor היא פקודת R-type: ALUOp=10 (func), ALUSrc=0, Jump=0, MemRead=MemWrite=0, MemtoReg=0, Branch=0, RegDst=1, RegWrite=1.
ב, ג, ה: ALUOp=01 (sub) אינו מתאים (שייך ל-beq). ד: Branch=1 אינו מתאים. ו: MemtoReg=1 שייך ל-lw.""",
    image="images/exams/22B-A-Q18.png",
    note="Datapath figure printed on the page; its small control-signal labels are only partly legible in the source scan."))

# 19
questions.append(Q(
    19, "mips_machine_code",
    "הפקודה `0x03DD0822` בשפת מכונה של ה-MIPS הינה בעצם פקודת האסמבלי הבאה:",
    opts("`sub $at, $fp, $sp`", "`add $sp, $fp, 0x822`", "`addi $sp, $fp, 2082`", "`and $fp, $sp, $at`",
         "`sw $sp, 0x822($fp)`", "`sub $at, $sp, $fp`"), "a",
    r"""$\texttt{0x03DD0822}=000000\ |\ 11110\ |\ 11101\ |\ 00001\ |\ 00000\ |\ 100010$.
opcode $=0$ (R-type), $\text{Rs}=§30=§fp$, $\text{Rt}=§29=§sp$, $\text{Rd}=§1=§at$, funct $=34=\text{sub}$ $\Rightarrow$ `sub §at, §fp, §sp`"""))

# 20
C20 = ["sum=0;i=0;", "do {", "    if (array[i]%2 == 1) sum += array[i];", "    i++;", "   } while(i<size)"]
ASM_A = ["    addi $6, $0, 0", "    addi $7, $0, 0", "    addi $8, $0, 1", "loop:", "    add $9,$7,$7", "    add $9,$9,$9",
         "    add $9,$9,$5", "    lw   $10,0($9)", "    @@@@@@@", "nxt: addi $7,$7,1", "    slt  $9,$7,$4", "    bne  $9,$0 loop", "cont:"]
questions.append(Q(
    20, "mips_assembly_c",
    "קטע ה- C הבא תורגם לשפת הסף (אסמבלי) של מחשב MIPS. הנח כי כתובת ההתחלה של array נמצאת באוגר §5. "
    "הערך size שהוא גודל המערך נמצא באוגר §4. המערך הינו מערך של מילים (Words=4 bytes). אוגרים §4 ו- §5 צריכים להישאר ללא שינוי.\n"
    + fence(C20, "c") + "\nלהלן התרגום:\n" + fence(ASM_A) + "\n"
    "מהתרגום נשמטו פקודות במקום המסומן ב- @@@@@@@.\nהפקודות החסרות הן:",
    opts(fence(["and $9,$10,$8", "bne $9,$8,nxt", "add $6,$10,$6"]),
         fence(["sub $11,$10,$8", "bne $11,$0,nxt", "add $6,$10,$9"]),
         fence(["and $10,$10,$8", "bne $10,$8,nxt", "add $6,$10,$6"]),
         fence(["and $9,$10,$8", "beq $9,$8, nxt", "add $6,$10,$6"])), "a",
    """§6=sum=0, §7=i=0, §8=1; §9=4i, §9=array+4i, §10=array[i]; בסוף i=i+1 וחוזרים ל-loop אם i<size.
א: §9=1 אם array[i]%2==1; אם לא - מדלגים (bne §9,§8,nxt); אחרת sum += array[i].
ב: `sub` בודק רק אם array[i] שווה ל-1 (לא אם הוא אי-זוגי), וה-`add` מוסיף ל-sum את §9 (הכתובת) במקום את §10. ג: הפקודה הראשונה מוחקת את §10 (array[i]) ולכן ל-sum יתווסף ערך שגוי. ד: beq מדלג כשהמספר אי-זוגי - הפוך.""",
    note="This question is printed with the number '1.' (it is the 20th page of the exam). The stem says array is in $5 and size in $4, matching the code."))

exam = {
    "examCode": "22B-A",
    "examLabel": "2022 סמסטר א מועד ב",
    "year": 2022,
    "examDate": "03.03.2022",
    "sourceFile": "sitting 22B-A (exam pages 2-22)",
    "keyFile": "sitting 22B-A pp.2-22 (circled options + handwritten working below each question)",
    "contexts": {},
    "questions": questions,
}
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
