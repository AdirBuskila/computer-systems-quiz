# -*- coding: utf-8 -*-
"""Generator for tools/raw/22B-B.json -- computer-systems, 2022 semester B, moed B (21.07.2022).
Run: PYTHONUTF8=1 py tools/gen/gen_22B-B.py

Source: sitting 22B-B, 30 pages: p.1 instructions, pp.2-16 the exam (20 MCQ x 5 pts, two questions per page, with the
lecturer's circled option), pp.17-21 and 23-29 his handwritten solutions for Q1-Q9 and Q11-Q19, p.22 a repeat of Q10
with his per-option working, p.30 the rest of Q20. The circle is on option a in every question. Literal MIPS
register dollars in plain text are written with the section sign (reg() escapes them); inside fenced code a plain $
is fine.
Keys checked by script (tools/verify/22B-B/check.py): Q1 Q2 Q3 Q4 Q5 Q9 Q10 Q11 Q12 Q13 Q14 Q15 Q16 Q17 Q19 Q20
recomputed and agree; Q6 Q7 Q8 Q18 by reasoning. Handwritten Hebrew commentary is reconstructed from the solution."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "22B-B.json"
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
    opts(("math", r"\bar A\oplus B\oplus\bar C=\bar A\cdot\bar B\cdot C+\bar A\cdot B\cdot\bar C+A\cdot\bar B\cdot C+A\cdot B\cdot C"),
         ("math", r"\overline{\bar A\oplus B\oplus\bar C}=A\cdot\bar B\cdot C+A\cdot B\cdot\bar C+\bar A\cdot B\cdot C+\bar A\cdot\bar B\cdot\bar C"),
         ("math", r"A\oplus(C+B+A)=\bar A\cdot B+(A+\bar B)\cdot C\cdot\bar A"),
         ("math", r"A\oplus\overline{(C+B+A)}=\bar B\cdot\bar C+(B+C)\cdot A")), "a",
    r"""א: $\bar A\oplus B\oplus\bar C=A\oplus B\oplus C=\bar A(\bar B C+B\bar C)+A(\bar B\bar C+BC)=\bar A\bar BC+\bar AB\bar C+A\bar B\bar C+ABC$. המכפלה השלישית היא $A\bar B\bar C$ ולא $A\bar BC$ - לכן המשוואה לא נכונה.
ב: המשלים של סכום המכפלות לעיל - נכונה.
ג: $A\oplus(A+B+C)=\bar A(A+B+C)+A\cdot\bar A\bar B\bar C=\bar AB+\bar AC$; אגף ימין: $\bar AB+(A+\bar B)C\bar A=\bar AB+\bar B C\bar A$, ולפי $X+\bar XY=X+Y$ מתקבל $\bar AB+\bar AC$ - נכונה.
ד: $A\oplus\overline{A+B+C}=\bar A\bar B\bar C+A(A+B+C)=\bar B\bar C+A$ (לפי $X+\bar XY=X+Y$), ואגף ימין $\bar B\bar C+(B+C)A=\bar B\bar C+A$ - נכונה."""))

# 2
questions.append(Q(
    2, "mips_machine_code", "מה יהיה באוגר §5 אחרי ביצוע הפקודות הבאות:\n" +
    fence(["Lui   $5, 0x1818", "addi  $5, $5, 0x8181", "addi  $5, $5, 0x8181"]),
    opts("0X18170302", "0X17170302", "0X17180302", "0X18170202", "0X17170202", "0X17180202"), "a",
    r"""אחרי lui: $§5=\texttt{0x18180000}$. הקבוע $\texttt{0x8181}$ מורחב בסימן ל-$\texttt{0xFFFF8181}$.
אחרי ה-addi הראשון: $\texttt{0x18180000}+\texttt{0xFFFF8181}=\texttt{0x18178181}$; אחרי השני: $\texttt{0x18178181}+\texttt{0xFFFF8181}=\texttt{0x18170302}$."""))

# 3
questions.append(Q(
    3, "floating_point",
    "מה ערכו בבסיס 10 של המספר 0x425D4000 המיוצג ב- Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר) ?",
    opts(r"$55\frac{5}{16}$", r"$23\frac{5}{16}$", r"$27\frac{21}{32}$", r"$23\frac{21}{32}$"), "a",
    r"""$\texttt{0x425D4000}=0\ |\ 10000100\ |\ 101\,1101\,0100\,0000\,0000\,0000$: סימן $0$, אקספוננט $E=132$, שבר $1011101010\ldots$.
$X=(-1)^0\cdot2^{132-127}\cdot1.1011101\,01=2^5\cdot1.101110101=110111.0101_2=55\frac{5}{16}$."""))

# 4
questions.append(Q(
    4, "number_bases",
    r"מהו ערכו העשרוני של השבר האינסופי $[0.122\ 122\ 122\ 122\ \ldots]_6$ בבסיס 6?",
    opts("10/43", "1/4", "122/215", "122/216", "61/107", "11/47"), "a",
    r"""$X=[0.122\ 122\ \ldots]_6$. $6^3X=216X=[122.122122\ldots]_6$, ולכן $216X-X=[122]_6=36+2\cdot6+2=50$.
$215X=50\Rightarrow X=\frac{50}{215}=\frac{10}{43}$."""))

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
         r"$\langle X\rangle$ יכול להיות $-\frac{1}{64}$"), "a",
    r"""א: $42\frac{22}{64}=\langle0101010.010110\rangle$, ולכן $-42\frac{22}{64}=\langle1010101.101010\rangle$ - הסיבית $X_{-2}$ היא 0, לכן המספר לא יכול להיות מייצג - הטענה לא נכונה.
ב: $-\frac34=\langle1111111.010000\rangle$ - יכול להיות.
ג: $42\frac{43}{64}=\langle0101010.101011\rangle$, ולכן $-42\frac{43}{64}=\langle1010101.010101\rangle$ - יכול להיות.
ד: $60\frac12=\langle0111100.100000\rangle$ - הסיבית $X_{-2}$ היא 0, לא יכול להיות (נכון).
ה: $-30\frac12=\langle1100001.100000\rangle$ - $X_{-2}=0$ ו-$X_2=0$, לא יכול להיות (נכון).
ו: $-\frac1{64}=\langle1111111.111111\rangle$ - כל הסיביות 1, יכול להיות."""))

# 6
questions.append(Q(
    6, "signed_twos_complement",
    "X הוא מספר בן 13 סיביות מהם 7 הם משמאל לנקודה הבינרית. כלומר: "
    r"$X=X_6,X_5,X_4,X_3,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4},X_{-5},X_{-6}$. "
    "עליכם למצוא את תחום המספרים אותו ניתן להציג כמספרים לא מכוונים (unsigned) וכמספרים מכוונים (2's complement signed).",
    opts(r"כ-Unsigned מ-0 ועד $(2^7-2^{-6})$ וכ-Signed מ-$(-2^6)$ ועד $(2^6-2^{-6})$",
         r"כ-Unsigned מ-0 ועד $(2^7-2^{-7})$ וכ-Signed מ-$(-2^6)$ ועד $(2^6-2^{-7})$",
         r"כ-Unsigned מ-0 ועד $(2^7-2^{-6})$ וכ-Signed מ-$(-2^7)$ ועד $(2^7-2^{-6})$",
         r"כ-Unsigned מ-0 ועד $(2^7-2^{-7})$ וכ-Signed מ-$(-2^7)$ ועד $(2^7-2^{-7})$"), "a",
    r"""ב-13 סיביות: signed מ-$-2^{12}$ ועד $2^{12}-1$ ו-unsigned מ-0 ועד $2^{13}-1$. מחלקים ב-$2^6$ (6 ספרות אחרי הנקודה) ומקבלים: signed מ-$-2^6$ ועד $2^6-2^{-6}$, unsigned מ-0 ועד $2^7-2^{-6}$."""))

# 7
questions.append(Q(
    7, "floating_point",
    "ב- Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר, Fraction), במספר בעל הערך הקטן ביותר שהמרחק ממנו למספר שלידו הוא 4 מתקיים:",
    opts('שדה האקספוננט הוא 152 ושדה ה-Fraction הוא כולו "1"-ים',
         'שדה האקספוננט הוא 150 ושדה ה-Fraction הוא כולו "1"-ים',
         'שדה האקספוננט הוא 129 ושדה ה-Fraction הוא כולו "1"-ים',
         'שדה האקספוננט הוא 152 ושדה ה-Fraction הוא כולו "0"-ים',
         'שדה האקספוננט הוא 150 ושדה ה-Fraction הוא כולו "0"-ים',
         'שדה האקספוננט הוא 129 ושדה ה-Fraction הוא כולו "0"-ים'), "a",
    r"""המרחק בין שני מספרים סמוכים הוא $2^{E-127}\cdot2^{-23}$. עבור מרחק 4: $2^{E-127}\cdot2^{-23}=2^2\Rightarrow E=127+23+2=152$.
המספר בעל הערך הקטן ביותר באקספוננט זה הוא השלילי ביותר: הסימן הוא 1 וה-Fraction כולו "1"-ים (בצד השלילי המספר הקטן ביותר הוא הגדול ביותר בערכו המוחלט).""",
    note="Stem wording transcribed as printed; the lecturer's note says E=152, the sign bit is 1 and the fraction is all ones."))

# 8
questions.append(Q(
    8, "datapath_control",
    "אילו הוספנו למעבד ה-MIPS שמימשנו בהרצאות פקודת jal, שקופצת לכתובת המילה שמופיעה בפקודה וגם שומרת את PC+4 ברגיסטר §31, אילו שלבים היו מתבצעים במהלך ביצוע הפקודה הזו?\n"
    "(למשל jal, 0x111000 בכתובת 0x400020 שאמורה לבצע PC= 0x444000 ולרשום 0x400024 לרגיסטר §31)",
    opts("Fetch, Decode, Write-Back", "Fetch, Decode, ALU, Memory, Write-Back", "Fetch, Decode, Memory",
         "Fetch, Decode, ALU", "Fetch, Decode, ALU, Write-Back"), "a",
    """פקודת jal משתמשת בבקרת JUMP הקיימת, ולכן אין צורך ב-ALU. יש רק כתיבה חזרה (Write-Back) של PC+4 לרגיסטר §31.
Fetch, Decode, Write-Back."""))

# 9
questions.append(Q(
    9, "latches_flipflops",
    "לפניכם ארבעה דלגלגים (FF-ים), המחוברים בצורת אוגר הזזה (Shift Register). הכניסה משמאל (ל-D3) מחוברת דרך מהפך ליציאת שער XOR, "
    "המבצע פעולת XOR בין Q0 להיפוך של Q3. כמו כן, בין יציאת Q2 לכניסת D1 יש מהפך נוסף. "
    "הערך באוגר ההזזה הוא: [Q3, Q2, Q1, Q0] = [1, 0, 0, 1], כמצויר. מה יהיה הערך באוגר אחרי 5 עליות שעון?",
    opts(("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,1,0,1]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,1,1,1]"),
         ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,0,1,0]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,0,0,0]"),
         ("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,1,1,1]")), "a",
    r"""$D_3=\overline{\bar Q_3\oplus Q_0}=Q_3\oplus Q_0$ (שווה 1 אם $Q_3\ne Q_0$ ו-0 אם $Q_3=Q_0$). $Q_2\leftarrow Q_3$, $Q_1\leftarrow\bar Q_2$, $Q_0\leftarrow Q_1$.
$[1,0,0,1]\to[0,1,1,0]\to[0,0,0,1]\to[1,0,1,0]\to[1,1,1,1]\to[0,1,0,1]$. אחרי 5 עליות שעון: $[0,1,0,1]$.""",
    image="images/exams/22B-B-Q9.png"))

# 10
questions.append(Q(
    10, "mips_assembly_c", "מהו תרגום שגוי באסמבלי של ה-MIPS לשורת ה-C: a = 5*b - 4*a;",
    opts(fence(["add $5, $5, $5", "add $5, $5, $5", "sub $5, $4, $5", "add $4, $4, $4", "add $4, $4, $4", "add $5, $5, $4"]),
         fence(["sub $5, $4, $5", "add $5, $5, $5", "add $5, $5, $5", "add $5, $4, $5"]),
         fence(["add $1, $4, $4", "add $1, $1, $1", "add $1, $4, $1", "add $5, $5, $5", "add $5, $5, $5", "sub $5, $1, $5"]),
         fence(["add $5, $5, $5", "add $5, $5, $5", "sub $5, $4, $5", "add $5, $4, $5", "add $5, $5, $4", "add $5, $4, $5", "add $5, $5, $4"])), "a",
    """לפי הפתרון a נמצא ב-§5 ו-b ב-§4.
א: a=2a; a=4a; a=b-4a; b=2b; b=4b; a=5b-4a - התוצאה בתוך a נכונה, אבל התרגום משנה את b (§4), ולכן הוא שגוי.
ב: a=b-a; a=2b-2a; a=4b-4a; a=5b-4a - נכון.
ג: §1=2b; §1=4b; §1=5b; a=2a; a=4a; a=5b-4a - נכון.
ד: מתקבל בסוף a=5b-4a ו-b נשאר ללא שינוי - נכון.""",
    note="Wrong-translation question: option a is the one circled; it leaves a=5b-4a but overwrites b ($4), which the lecturer marks as the reason it is wrong. Script-checked: only a overwrites b."))

# 11
questions.append(Q(
    11, "number_bases",
    r"המספר הבא $[1285]_9$ שהוא מספר Unsigned בבסיס 9, הומר לבסיס 5. הערך הנכון הינו:",
    opts(("math", r"[12333]_5"), ("math", r"[13233]_5"), ("math", r"[13232]_5"),
         ("math", r"[12323]_5"), ("math", r"[4233]_5"), ("math", r"[22333]_5")), "a",
    r"""$[1285]_9=1\cdot729+2\cdot81+8\cdot9+5=729+162+72+5=968$. חילוקים ב-5: $968=5\cdot193+3$, $193=5\cdot38+3$, $38=5\cdot7+3$, $7=5\cdot1+2$, $1=5\cdot0+1$.
לכן $[12333]_5$; בדיקה: $625+250+75+15+3=968$."""))

# 12
questions.append(Q(
    12, "signed_twos_complement",
    "במחבר 2's Comp. של 8 ביט יש יציאה הנדלקת כאשר יש Overflow. באיזה מהחישובים הבאים לא תידלק יציאה זו?",
    opts("`10011100 + 11101011`", "`10110101 + 10101011`", "`00110111 + 01011001`",
         "`01011101 - 10011111`", "`10111110 + 10110010`"), "a",
    r"""התחום ב-8 ביט הוא $-128\le X\le127$.
א: $(-100)+(-21)=-121$ - אין גלישה.
ב: $(-75)+(-85)=-160$ - גלישה.
ג: $55+89=144$ - גלישה.
ד: $93-(-97)=190$ - גלישה.
ה: $(-66)+(-78)=-144$ - גלישה.""",
    note="The lecturer's handwritten value for option b reads (-71)+(-83)=-154 (differs from the printed bit string); by script the printed b also overflows, so the key is unchanged."))

# 13
questions.append(Q(
    13, "mips_assembly_c",
    "הקטע הנתון בשפת אסמבלי של ה-MIPS הוא תרגום לקטע בשפת C. מהו התרגום הנכון?\n" +
    fence(["      slt $1, $3, $4", "      beq $1, $0, lab1", "      add $4, $4, $4", "      beq $0, $0, end", "lab1: add $3, $3, $3", "end:"]),
    opts(fence(["if (a >= b) a = 2*a;", "else  b=2*b"], "c"),
         fence(["if (a < b) a = 2*a;", "else  b=2*b"], "c"),
         fence(["if (a >= b) a = 2*b;", "else  b=2*a"], "c"),
         fence(["if (a =< b) a = 2*a;", "else  b=2*b"], "c")), "a",
    """לפי הפתרון a הוא §3 ו-b הוא §4. `slt §1,§3,§4`: §1=1 אם a<b, §1=0 אם a>=b.
`beq §1,§0,lab1` קופץ ל-lab1 אם a>=b, ושם a=2a (`add §3,§3,§3`); אחרת b=2b ואז `beq §0,§0,end` קופץ לסוף.
לכן: if (a>=b) a=2*a; else b=2*b - תשובה א."""))

# 14
questions.append(Q(
    14, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=B\cdot D+C\cdot D+A\cdot\bar B"),
         ("math", r"F=B\cdot D+\bar C\cdot D+A\cdot\bar B"),
         ("math", r"F=B\cdot D+C\cdot\bar D+A\cdot\bar B"),
         ("math", r"F=\bar B\cdot D+C\cdot D+\bar A\cdot B")), "a",
    r"""כניסות המולטיפלקסר לפי $ABC$: $000\to0$; $001,010,011,110,111\to D$; $100,101\to1$.
$F=D\cdot(\bar A\bar BC+\bar AB\bar C+\bar ABC+AB\bar C+ABC)+A\bar B=D\cdot(\bar AC+B)+A\bar B$, וזה שווה ל-$BD+CD+A\bar B$ (המכפלה $A\bar BCD$ כלולה ב-$A\bar B$).
ב: עבור $ABC=001,\ D=1$ המעגל נותן 1 אך הביטוי $BD+\bar CD+A\bar B$ נותן 0. ג: עבור $ABC=001,\ D=1$ הביטוי $BD+C\bar D+A\bar B$ נותן 0 והמעגל 1. ד: עבור $ABC=100,\ D=0$ הביטוי נותן 0 והמעגל 1.""",
    image="images/exams/22B-B-Q14.png"))

# 15
questions.append(Q(
    15, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=B\cdot\bar C+A\cdot C+C\cdot\bar D"),
         ("math", r"F=\bar A\cdot\bar C+A\cdot B+C\cdot\bar D"),
         ("math", r"F=B\cdot\bar C+A\cdot C+C\cdot D"),
         ("math", r"F=\bar A\cdot\bar B\cdot\bar C+A\cdot\bar C+C\cdot\bar D")), "a",
    r"""כניסות המולטיפלקסר: $00\to B$; $01\to(AB{=}01)+(AB{=}11)=B$; $10\to1$; $11\to(AB{=}10)+(AB{=}11)=A$.
$F=\bar C\bar D\cdot B+\bar CD\cdot B+C\bar D\cdot1+CD\cdot A=B\bar C+C\bar D+ACD=B\bar C+C\bar D+AC$.
ב: עבור $A=B=C=0$ הביטוי $\bar A\bar C$ נותן 1 אך במעגל $F=B=0$. ג: עבור $C=1,D=0,A=0$ הביטוי נותן 0 אך במעגל $F=1$. ד: עבור $A=1,B=C=0$ הביטוי $A\bar C$ נותן 1 אך במעגל $F=B=0$.""",
    image="images/exams/22B-B-Q15.png"))

# 16
questions.append(Q(
    16, "arithmetic_circuits",
    "בידנו מעגל הכופל את המספר השלם מטיפוס unsigned בן חמש סיביות $[a_4,a_3,a_2,a_1,a_0]_2$ במספר 11 (גם כן unsigned). "
    "המכפל בנוי מרכיבי HA (כלומר Half-Adder) ורכיבי FA (כלומר Full-Adder). עלינו לספור את מספר הרכיבים ומספר היציאות. "
    "אנו כמובן מעדיפים מספר מינימלי של רכיבים (במקום FA לכאורה אפשר להשתמש בשני HA. אם יש כזה מקרה - נעדיף את ה- FA הבודד)\n"
    "מה נכון?",
    opts("יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 8 יציאות",
         "יש במכפל 6 רכיבי HA ו-4 רכיבי FA ויש לו 8 יציאות",
         "יש במכפל 6 רכיבי HA ו-4 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 8 יציאות"), "a",
    r"""$11=[1011]_2$, ולכן מחברים שלוש שורות: $A\cdot2^0,\ A\cdot2^1,\ A\cdot2^3$. מתקבלים $4\times$HA ו-$6\times$FA, ויש 9 יציאות ($y_0\ldots y_8$).""",
    note="The lecturer's page shows 4xHA (arrow label) and writes '6xFA + 4xHA', 9 outputs, matching option a."))

# 17
questions.append(Q(
    17, "mips_machine_code",
    "התרגום של הפקודה `addi $s5, $a3, -567` לשפת מכונה של ה-MIPS הינו:",
    opts("0x20F5FDC9", "0x20F58237", "0x22A7FEB3", "0x22A78236"), "a",
    r"""opcode של addi הוא 8, $\text{Rt}=§s5=§21$, $\text{Rs}=§a3=§7$. $567=\texttt{0x237}$, ולכן $-567=\texttt{0xFDC9}$.
$001000\ |\ 00111\ |\ 10101\ |\ 1111\,1101\,1100\,1001\Rightarrow\texttt{0x20F5FDC9}$."""))

# 18
questions.append(Q(
    18, "datapath_control",
    "במעבד ה- MIPS Single Cycle שלמדנו מי מהצירופים הרשומים מטה של אותות הבקרה נכון לפקודת beq? (יש ציור של המעבד בנספח לבחינה)",
    opts("ALUOp=01 (sub); MemWrite=0; RegWrite=0; Branch=1",
         "ALUOp=01 (sub); Jump=1; RegWrite=0; Branch=1",
         "ALUOp=10 (func); Jump=1; RegWrite=0; Branch=1",
         "ALUOp=10 (func); jump=0; RegWrite=0; Branch=1",
         "ALUOp=01 (sub); MemtoReg=0; RegWrite=1; Branch=1",
         "ALUOp=10 (func); MemtoReg=1; RegWrite=0; Jump=1"), "a",
    """בפקודת beq: ALUOp=01 (sub), MemRead=MemWrite=RegWrite=0, Jump=0, Branch=1, MemtoReg=X, RegDst=X.
ב: Jump=1 שגוי. ג: ALUOp=10 ו-Jump=1 שגויים. ד: ALUOp=10 שגוי. ה: RegWrite=1 שגוי. ו: ALUOp=10 ו-Jump=1 שגויים.""",
    image="images/exams/22B-B-Q18.png",
    note="Datapath figure is a low-resolution source scan; control-signal labels in it are not legible."))

# 19
questions.append(Q(
    19, "mips_machine_code",
    "הפקודה `0x038BC024` בשפת מכונה של ה-MIPS הינה בעצם פקודת האסמבלי הבאה:",
    opts("`and $t8, $gp $t3`", "`sub $gp, $t3, $t8`", "`addi $t8, $gp, 0xC024`", "`addi $gp, $t8, 0xC024`",
         "`add $gp, $t3, $t8`", "`xor $t8, $gp $t3`"), "a",
    r"""$\texttt{0x038BC024}=000000\ |\ 11100\ |\ 01011\ |\ 11000\ |\ 00000\ |\ 100100$.
opcode $=0$ (R-type), $\text{Rs}=§28=§gp$, $\text{Rt}=§11=§t3$, $\text{Rd}=§24=§t8$, funct $=36=\text{and}$ $\Rightarrow$ `and §t8, §gp, §t3`""",
    note="Options a and f print '$gp $t3' without a comma, as printed."))

# 20
C20 = ["for(i=0;i<size;i++);", " {", "  if (array[i]==16) array[i] *= 2;", " }"]
ASM_A = ["    addi $6, $0, 0", "    addi $7, $0, 0x0010", "iflp:", "    slt  $8,$6,$5", "    beq  $8,$0,end", "    add  $8,$6,$6",
         "    add  $8,$8,$8", "    add  $8,$8,$4", "    lw   $9,0($8)", "    @@@@@@@", "    j    iflp", "end:"]
questions.append(Q(
    20, "mips_assembly_c",
    "קטע ה- C הבא תורגם לשפת הסף (אסמבלי) של מחשב MIPS. הנח כי כתובת ההתחלה של array נמצאת באוגר §4. "
    "הערך size שהוא גודל המערך נמצא באוגר §5. המערך הינו מערך של מילים (Words=4 bytes). אוגרים §4 ו- §5 צריכים להישאר ללא שינוי.\n"
    + fence(C20, "c") + "\nלהלן התרגום:\n" + fence(ASM_A) + "\n"
    "מהתרגום נשמטו פקודות במקום המסומן ב- @@@@@@@.\nהפקודות החסרות הן:",
    opts(fence(["bne   $9,$7, skip", "addi  $9,$9,$9", "sw    $9,0($8)", "skip: addi $6,$6,1"]),
         fence(["beq   $9,$7, skip", "add   $9,$9,$9", "sw    $9,0($8)", "skip: addi $6,$6,1"]),
         fence(["slt   $10,$9,$7", "beq   $10,$0,skip", "add   $9,$9,-1", "skip: sw $9,0($8)", "      addi $6,$6,1"]),
         fence(["slt   $10,$7,$9", "bne   $10,$0,skip", "add   $9,$9,-1", "skip: sw $9,0($8)", "      addi $6,$6,1"])), "a",
    """§6=i, §7=16, §8=כתובת array[i], §9=array[i].
א: אם array[i] שונה מ-16 מדלגים (`bne §9,§7,skip`); אחרת array[i]*2 נכתב חזרה (הקוד מודפס `addi §9,§9,§9` ויש לקרוא אותו כ-`add §9,§9,§9`).
ב: מדלג כש-array[i]==16 - הפוך. ג, ד: קוד שמחסיר 1 ובודק גדול/קטן במקום שוויון - לא מתאים.""",
    note="Option a prints 'addi $9,$9,$9' (a typo for add $9,$9,$9; option b prints 'add'); transcribed as printed. Options c and d print 'add $9,$9,-1' as printed. The printed C line ends 'i++);' with a stray semicolon."))

exam = {
    "examCode": "22B-B",
    "examLabel": "2022 סמסטר ב מועד ב",
    "year": 2022,
    "examDate": "21.07.2022",
    "sourceFile": "sitting 22B-B (exam pages 2-16, 22 and 30)",
    "keyFile": "sitting 22B-B pp.2-16 (circled options) + pp.17-30 (handwritten solution)",
    "contexts": {},
    "questions": questions,
}
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
