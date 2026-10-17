# -*- coding: utf-8 -*-
"""Generator for tools/raw/24S-A.json -- computer-systems, 2024 semester A, special sitting (2.6.2024).
Run: PYTHONUTF8=1 py tools/gen/gen_24S-A.py

Source: sitting 24S-A, 21 pages: p.1 cover, pp.2-21 one question per page (20 MCQ x 5 pts) with the lecturer's red
circle on the key and his handwritten working under each question. Literal MIPS register dollars in plain text are
written with the section sign (reg() turns it into an escaped dollar); inside fenced code a plain $ is fine.
Keys (red circle): a in every question except Q7 (e) and Q16 (d).
Keys recomputed by script (tools/verify/24S-A/check.py): all 20 agree (Q1 truth tables, Q2/Q17/Q19 encodings, Q3 gap
exponent, Q4/Q8/Q11/Q18 base conversions, Q5 enumeration of the 12-bit patterns, Q6 ranges, Q7 mini-float model,
Q9 shift register, Q10/Q13/Q20 MIPS simulation, Q12 overflow, Q14/Q15 circuits, Q16 FA/HA count).
Q20 prints 'addi $7, $7,$10' and 'add1 $8,$8,1' in the translation; transcribed as printed (typos of the source).
Handwritten Hebrew explanation text is reconstructed from the working pages; the formulas are exact."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "24S-A.json"
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
    return "```" + tag + "\n" + "\n".join(lines) + "\n```"


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


def regs(*pairs):
    """MIPS register values as option math: [Q2,Q1,Q0]=[x,y,z]."""
    return [("math", r"[Q_2,Q_1,Q_0]=[%s]" % p) for p in pairs]


questions = []

# ---------------------------------------------------------------- 1
questions.append(Q(
    1, "boolean_algebra", "מי מהמשוואות הבאות אינה נכונה?",
    opts(("math", r"\overline{A\oplus B}\cdot C=(\bar A\cdot C)\oplus(C\cdot\bar B)"),
         ("math", r"A+\overline{A+(B+\bar B\cdot C)}=\bar C\cdot\bar B+A"),
         ("math", r"(\bar A\oplus B)\cdot(A\oplus\bar B)=\overline{B\oplus A}"),
         ("math", r"A+\bar A\cdot(B+\bar B\cdot(C+\bar C\cdot D))=D+B+A+C")),
    "a",
    r"""א: $\overline{A\oplus B}\cdot C=\bar A\bar BC+ABC$. מנגד $(\bar AC)\oplus(C\bar B)=(\bar AC)(\bar C+B)+\overline{(\bar AC)}(C\bar B)=\ldots=A\bar BC+\bar ABC$. האגפים שונים (למשל עבור $ABC=111$ האגף השמאלי 1 והימני 0) - המשוואה אינה נכונה.
ב: $A+\overline{A+B+C}=A+\bar A\bar B\bar C=A+\bar B\bar C$ - נכונה.
ג: $\bar A\oplus B=\overline{A\oplus B}$ וגם $A\oplus\bar B=\overline{A\oplus B}$, ולכן המכפלה היא $\overline{A\oplus B}=\overline{B\oplus A}$ - נכונה.
ד: $A+\bar A(B+\bar B(C+\bar CD))=A+B+C+D$ (לפי $x+\bar xy=x+y$) - נכונה."""))

# ---------------------------------------------------------------- 2
questions.append(Q(
    2, "mips_machine_code",
    "מה יהיה באוגר §4 אחרי ביצוע 3 הפקודות הבאות:\n" + fence(["lui  $4, 0x1F1F", "addi $4, $4, 0xF1F1", "addi $4, $4, 0x1F1F"]),
    opts("0x1F1F1110", "0x1F1F0000", "0x1F201110", "0x111E1110", "0x0001302F"), "a",
    r"""אחרי `lui` האוגר §4 הוא $\texttt{0x1F1F0000}$. ה-`addi` הראשון מוסיף את 0xF1F1 בהרחבת סימן, כלומר $\texttt{0xFFFFF1F1}$, ומתקבל $\texttt{0x1F1EF1F1}$.
ה-`addi` השני מוסיף $\texttt{0x00001F1F}$ ונקבל $\texttt{0x1F1F1110}$."""))

# ---------------------------------------------------------------- 3
questions.append(Q(
    3, "floating_point",
    r"מה ההפרש בין שני המספרים החיוביים הגדולים ביותר שמתחת ל- $\infty$ ב- Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו-23 סיביות שבר)?",
    opts(r"$2^{104}$", r"$2^{231}$", r"$2^{23}$", r"$2^{150}$", r"$2^{127}$"), "a",
    r"""במקרה הכללי המרחק בין 2 מספרים עם אותו אקספוננט בשיטה הוא $2^{E-\text{BIAS}}\cdot 2^{-23}$ (בין שני אקספוננטים סמוכים, כשהם נורמליים, אין חריגה).
האקספוננט הגדול ביותר שאינו $\infty$ הוא $254$, ולכן $2^{E-\text{BIAS}}=2^{254-127}=2^{127}$.
לפיכך המרחק בין 2 המספרים הגדולים ביותר הוא $2^{127}\cdot 2^{-23}=2^{104}$."""))

# ---------------------------------------------------------------- 4
questions.append(Q(
    4, "number_bases",
    r"מהו ערכו העשרוני של השבר האינסופי $[0.123\ 123\ 123\ 123\ \ldots]_5$ בבסיס 5 ?",
    opts("19/62", "38/125", "21/69", "39/125", "21/68", "38/123"), "a",
    r"""זו סכום של סדרה הנדסית אינסופית: האיבר הראשון $A_1=[0.123]_5=\frac{1}{5}+\frac{2}{25}+\frac{3}{125}=\frac{25+10+3}{125}=\frac{38}{125}$, והמנה $q=\frac{1}{125}$.
$S_\infty=\frac{A_1}{1-q}=\frac{38/125}{124/125}=\frac{38}{124}=\frac{19}{62}$."""))

# ---------------------------------------------------------------- 5
questions.append(Q(
    5, "signed_twos_complement",
    "$X$ הוא מספר 2's complement בן 12 סיביות מהן 6 הם מימין לנקודה הבינרית. כלומר:\n"
    r"$X=\langle X_5,X_4,X_3,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4},X_{-5},X_{-6}\rangle$" + "\n"
    r'סיביות $X_{-2}$ , $X_{-1}$ ו- $X_3$ הן "1". מה נכון:',
    opts(r"$\langle X\rangle$ גדול מ- $(-25)$",
         r"אם $\langle X\rangle$ קטן מ- 0 אזי הוא קטן מ- $(-1/32)$",
         r"אם $\langle X\rangle$ גדול מ- 0 אזי הוא גדול מ- 9",
         r"$\langle X\rangle$ קטן מ- 30",
         r"$30>|X|$",
         r"$8\le|X|$"), "a",
    r"""אם $X_5=0$: המספר הגדול ביותר האפשרי הוא $\langle 011111.111111\rangle=31\frac{63}{64}$ והקטן ביותר $\langle 001000.110000\rangle=8\frac{3}{4}$.
אם $X_5=1$: הגדול ביותר $\langle 111111.111111\rangle=-\frac{1}{64}$ והקטן ביותר $\langle 101000.110000\rangle=-32+8+\frac{3}{4}=-23\frac{1}{4}$.
כלומר $-23\frac{1}{4}\le\langle X\rangle\le-\frac{1}{64}$ או $8\frac{3}{4}\le\langle X\rangle\le 31\frac{63}{64}$.
א: $-23\frac{1}{4}>-25$ - נכון.
ב: $-\frac{1}{32}<-\frac{1}{64}$, ולכן המספר השלילי יכול להיות גדול מ-$-\frac{1}{32}$ - לא נכון.
ג: $9>8\frac{3}{4}$ - לא נכון (גם $8\frac{3}{4}$ אפשרי).
ד, ה: המספר יכול להיות 31 - לא נכון. ו: $|X|$ יכול להיות $\frac{1}{64}$ - לא נכון."""))

# ---------------------------------------------------------------- 6
questions.append(Q(
    6, "signed_twos_complement",
    "$X$ הוא מספר בן 13 ביט מהם 7 הם מימין לנקודה הבינרית.\n"
    r"כלומר: $X=X_5,X_4,X_3,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4},X_{-5},X_{-6},X_{-7}$." + "\n"
    "עליכם למצוא את תחום המספרים אותו ניתן להציג כמספרים לא מכוונים (unsigned) וכמספרים מכוונים (2's complement signed).",
    opts(r"כ-Unsigned מ-0 ועד $(2^6-2^{-7})$ וכ-Signed מ- $(-2^5)$ ועד $(2^5-2^{-7})$",
         r"כ-Unsigned מ-0 ועד $(2^7-2^{-6})$ וכ-Signed מ- $(-2^6)$ ועד $(2^6-2^{-6})$",
         r"כ-Unsigned מ-0 ועד $(2^5-2^{-7})$ וכ-Signed מ- $(-2^6)$ ועד $(2^6-2^{-7})$",
         r"כ-Unsigned מ-0 ועד $(2^7-2^{-8})$ וכ-Signed מ- $(-2^5)$ ועד $(2^5-2^{-6})$"), "a",
    r"""ב-13 הסיביות, 6 לפני הנקודה ו-7 אחריה. כ-Unsigned מ-0 ועד $2^6-2^{-7}$ (כל 13 הסיביות הן 1).
כ-2's complement: מ-$-2^{5}$ ועד $2^5-2^{-7}$ (הסיבית השמאלית מייצגת את הסימן, ולכן יש 5 סיביות חיוביות לפני הנקודה)."""))

# ---------------------------------------------------------------- 7
questions.append(Q(
    7, "floating_point",
    "ב- Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר), המרחק בין ערכים סמוכים תלוי בעצם בחזקה. "
    "כמה מספרים רצופים שהמרחק ביניהם שווה יש לכל היותר?",
    opts(r"כ- $2^{26}$", r"כ- $2^{24}$", r"כ- $2^{23}$", r"כ- $2^{22}$", r"כ- $2^{25}$"), "e",
    r"""באקספוננט 0 וב-1 החזקה שמשתמשים בה היא $2^{-126}$, כלומר באקספוננט 0 ובאקספוננט 1 המרחק בין הערכים שווה (כ-$2^{-126}\cdot 2^{-23}$); לכן אפשר לחבר את שתי הקבוצות הללו.
בכל אקספוננט יש כ-$2^{23}$ מספרים, ויש 4 קבוצות כאלה ($E=1$ ו-$E=0$, בסימן שלילי ובסימן חיובי) ברצף אחד, שהמרחק בהן שווה (באקספוננטים האחרים המרחק שונה).
סך הכול כ-$2^{25}$ מספרים שהמרחק ביניהם שווה."""))

# ---------------------------------------------------------------- 8
questions.append(Q(
    8, "number_bases", "מה לא נכון?",
    opts(("math", r"[0.44444\ldots]_6-[0.44444\ldots]_7=1/15"),
         ("math", r"[0.66666\ldots]_7-[0.11111\ldots]_7=5/6"),
         ("math", r"[0.66666\ldots]_7-[0.11111\ldots]_5=3/4"),
         ("math", r"[0.7777\ldots]_8-[0.11111\ldots]_4=2/3")), "a",
    r"""א: $X=[0.444\ldots]_6\Rightarrow 6X=4+X\Rightarrow X=\frac{4}{5}$; $Y=[0.444\ldots]_7\Rightarrow 7Y=4+Y\Rightarrow Y=\frac{2}{3}$. $\frac{4}{5}-\frac{2}{3}=\frac{12-10}{15}=\frac{2}{15}\ne\frac{1}{15}$ - לכן א לא נכון.
ב: $[0.666\ldots]_7=1$, $[0.111\ldots]_7=\frac{1}{6}$: $1-\frac{1}{6}=\frac{5}{6}$ - נכון.
ג: $[0.111\ldots]_5=\frac{1}{4}$: $1-\frac{1}{4}=\frac{3}{4}$ - נכון.
ד: $[0.777\ldots]_8=1$, $[0.111\ldots]_4=\frac{1}{3}$: $1-\frac{1}{3}=\frac{2}{3}$ - נכון."""))

# ---------------------------------------------------------------- 9
questions.append(Q(
    9, "latches_flipflops",
    "לפניכם שלושה דלגלגים (FF-ים), המחוברים בצורת אוגר הזזה (Shift Register). הכניסה משמאל (ל-D2) מחוברת ליציאת שער XOR, "
    "המבצע פעולת XOR בין Q0 להיפוך של Q2.\n"
    "הערך ההתחלתי באוגר ההזזה הוא: [Q2, Q1, Q0] = [0, 1, 1], כמצויר. מה יהיה הערך לאחר 4 עליות שעון?",
    opts(*regs("0,1,0", "0,0,0", "1,0,0", "1,1,0", "0,0,1")), "a",
    r"""$D_2=\bar Q_2\oplus Q_0=1$ אם $Q_2=Q_0$, ו-$D_2=0$ אם $Q_2\ne Q_0$.
התחלה $[0,1,1]$: $Q_2\ne Q_0\Rightarrow D_2=0$; אחרי עלייה 1: $[0,0,1]$ ($Q_2\ne Q_0\Rightarrow D_2=0$); אחרי 2: $[0,0,0]$ ($Q_2=Q_0\Rightarrow D_2=1$); אחרי 3: $[1,0,0]$ ($Q_2\ne Q_0\Rightarrow D_2=0$); אחרי 4: $[0,1,0]$.""",
    image="images/exams/24S-A-Q9.png"))

# ---------------------------------------------------------------- 10
questions.append(Q(
    10, "mips_assembly_c",
    "מהו תרגום נכון באסמבלי של ה-MIPS לשורת ה-C:  `a = 2*a - 2*b;`",
    opts(fence(["sub $6, $6, $4", "add $6, $6, $6"]),
         fence(["add $4, $4, $4", "add $6, $6, $6", "sub $6, $6, $4"]),
         fence(["sub $6, $6, $4", "sub $6, $6, $4", "add $6, $6, $6"]),
         fence(["add $6, $6, $6", "add $4, $4, $4", "sub $6, $6, $4"])), "a",
    r"""(בפתרון a הוא §6 ו-b הוא §4.)
א: $a=a-b$; $a=2a=2a-2b$ - נכון.
ב: מכפיל את b (§4) - הרסנו את b, ולכן אינו נכון (אף ש-$a=2a-2b$).
ג: $a=a-b-b=a-2b$ ואחר כך $a=2a-4b$ - שגוי.
ד: גם כאן הרסנו את b (§4 הוכפל), ולכן אינו נכון."""))

# ---------------------------------------------------------------- 11
questions.append(Q(
    11, "number_bases",
    r"המספר הבא $[20211]_3$ שהוא מספר Unsigned בבסיס 3, הומר לבסיס 7. הערך הנכון הינו:",
    opts(("math", r"[352]_7"), ("math", r"[326]_7"), ("math", r"[623]_7"), ("math", r"[253]_7"), ("math", r"[422]_7")), "a",
    r"""המרה לעשרוני: $[20211]_3=2\cdot 81+0\cdot 27+2\cdot 9+1\cdot 3+1\cdot 1=184$.
המרה לבסיס 7: $184:7=26\ (2)$; $26:7=3\ (5)$; $3:7=0\ (3)$, כלומר $[352]_7$.
בדיקה: $3\cdot 49+5\cdot 7+2\cdot 1=184$ ✓."""))

# ---------------------------------------------------------------- 12
questions.append(Q(
    12, "signed_twos_complement",
    "במחבר 2's Comp. של 8 ביט יש יציאה הנדלקת כאשר יש Overflow. באיזה מהחישובים הבאים תידלק יציאה זו?",
    opts("`10011100 + 11011111`", "`01011110 + 00010100`", "`11011111 + 11110101`",
         "`00011110 - 01110101`", "`11110111 + 11101010`"), "a",
    r"""התחום שבו אין גלישה הוא $-128\le X\le 127$ (תוצאה מחוץ לו - Overflow).
א: $10011100+11011111=(-100)+(-33)=-133$ - Overflow.
ב: $94+20=114$ - אין. ג: $(-33)+(-11)=-44$ - אין.
ד: $30-117=-87$ - אין. ה: $(-9)+(-22)=-31$ - אין."""))

# ---------------------------------------------------------------- 13
questions.append(Q(
    13, "mips_assembly_c",
    "אחד מהתרגומים הבאים בשפת אסמבלי של ה-MIPS לקטע ה-C הבא אינו נכון. מהו התרגום השגוי?\n"
    + fence(["if (b<a) b = 2*b;", "else  a=2*a;"], "c"),
    opts(fence(["      slt  $1, $3, $4", "      beq  $1, $0, lab1", "      add  $4, $4, $4", "      beq  $0, $0, end",
                "lab1: add  $3, $3, $3", "end:"]),
         fence(["      slt  $1, $3, $4", "      bne  $1, $0, lab1", "      add  $4, $4, $4", "      beq  $0, $0, end",
                "lab1: add  $3, $3, $3", "end:"]),
         fence(["      slt  $1, $4, $3", "      bne  $1, $0, lab1", "      add  $3, $3, $3", "      beq  $0, $0, end",
                "lab1: add  $4, $4, $4", "end:"]),
         fence(["      slt  $1, $3, $4", "      beq  $1, $0, lab1", "      add  $3, $3, $3", "      beq  $0, $0, end",
                "lab1: add  $4, $4, $4", "end:"])), "a",
    r"""(בכל תרגום מסומנים a ו-b לפי האוגרים שב-`slt`; הנתון בשאלה הוא התנאי $b<a$.)
א: `slt §1,§3,§4` נותן $§1=1$ אם $b<a$. אם $b<a$ ממשיכים ומבצעים $a=2a$, ואם לא קופצים ל-`lab1` ומבצעים $b=2b$ - הפוך מהנדרש, ולכן שגוי.
ב, ג, ד: בכל אחד מהם, כאשר $b<a$ מתבצע $b=2b$ (קפיצה ל-`lab1` או המשך), וכאשר לא - $a=2a$ - נכונים."""))

# ---------------------------------------------------------------- 14
questions.append(Q(
    14, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=B\cdot\bar D+\bar A\cdot D+C\cdot B"),
         ("math", r"F=B\cdot\bar D+\bar A\cdot D+C\cdot\bar B"),
         ("math", r"F=A\cdot\bar D+\bar A\cdot D+C\cdot B"),
         ("math", r"F=A\cdot\bar D+\bar A\cdot D+\bar A\cdot C")), "a",
    r"""פיתוח לפי כניסות הנתונים של המולטיפלקסר ($[ABC]$ הם הבוררים):
$F=(\bar A\bar B\bar C)D+(\bar A\bar BC)D+(\bar AB\bar C)\cdot 1+(\bar ABC)\cdot 1+(A\bar B\bar C)\cdot 0+(A\bar BC)\cdot 0+(AB\bar C)\bar D+(ABC)\cdot 1$.
קיבוץ המכפלות: $\bar AD$ (מארבע המכפלות עם $\bar A$), $B\bar D$ ו-$BC$, ולכן $F=B\bar D+\bar AD+CB$ - תשובה א.""",
    image="images/exams/24S-A-Q14.png"))

# ---------------------------------------------------------------- 15
questions.append(Q(
    15, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=(\bar A+B)\cdot\bar C\cdot\bar D+A\cdot D\cdot(B+\bar C)+\bar A\cdot\bar B\cdot C\cdot D"),
         ("math", r"F=\bar C\cdot\bar D+A\cdot D\cdot(B+\bar C)+\bar A\cdot\bar B\cdot C\cdot D"),
         ("math", r"F=(\bar A+B)\cdot\bar C\cdot\bar D+A\cdot B+\bar A\cdot\bar B\cdot C\cdot D"),
         ("math", r"F=B\cdot\bar C\cdot\bar D+A\cdot D\cdot(B+\bar C)+\bar A\cdot\bar B\cdot C")), "a",
    r"""מהמעגל: כניסה $00$ של המולטיפלקסר היא $B+\overline{AB}$ של המפענח, כלומר $B+\bar A\bar B=\bar A+B$; כניסה $01$ היא $A$; כניסה $10$ היא "0"; כניסה $11$ היא $\bar A\bar B+AB$.
$F=(\bar A\bar B+B)\cdot\bar C\bar D+A\cdot\bar CD+(\bar A\bar B+AB)\cdot CD$
$=(\bar A+B)\bar C\bar D+A\bar CD+ABCD+\bar A\bar BCD$, כאשר $A\bar CD+ABCD=AD(\bar C+B)$.
$\Rightarrow F=(\bar A+B)\bar C\bar D+AD(B+\bar C)+\bar A\bar BCD$ - תשובה א.""",
    image="images/exams/24S-A-Q15.png"))

# ---------------------------------------------------------------- 16
questions.append(Q(
    16, "arithmetic_circuits",
    "בידנו מעגל הכופל את המספר השלם מטיפוס unsigned בן ארבע סיביות $[a_3,a_2,a_1,a_0]_2$ במספר 15 (גם כן unsigned). "
    "המכפל בנוי מרכיבי HA (כלומר Half-Adder) ורכיבי FA (כלומר Full-Adder). עלינו לספור את מספר הרכיבים ומספר היציאות. "
    "אנו כמובן מעדיפים מספר מינימלי של רכיבים (במקום FA לכאורה אפשר להשתמש בשני HA. אם יש כזה מקרה – נעדיף את ה- FA הבודד)\n"
    "מה נכון?",
    opts("יש במכפל 6 רכיבי HA ו-6 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 8 רכיבי HA ו-4 רכיבי FA ויש לו 8 יציאות",
         "יש במכפל 6 רכיבי HA ו-6 רכיבי FA ויש לו 8 יציאות",
         "יש במכפל 4 רכיבי HA ו-8 רכיבי FA ויש לו 8 יציאות",
         "יש במכפל 6 רכיבי HA ו-6 רכיבי FA ויש לו 7 יציאות"), "d",
    r"""$15=[1111]_2$, ולכן מחברים ארבע שורות של $A$ (מוזזות ב-0, 1, 2 ו-3 מקומות). הרשת המתקבלת בנויה מ-$8$ רכיבי FA ו-$4\times$HA, ויש בה 8 יציאות ($y_0\ldots y_7$), כי $15\cdot 15=225<256$."""))

# ---------------------------------------------------------------- 17
questions.append(Q(
    17, "mips_machine_code",
    "התרגום של הפקודה `xor §s3, §t5, §t9` לשפת מכונה של ה-MIPS הינו:",
    opts("0x01B99826", "0x026DC826", "0x02796826", "0x026DC824"), "a",
    r"""פקודת R-TYPE, $\text{FUNC}=38$ (xor); $\text{Rd}=§s3=§19$, $\text{Rs}=§t5=§13$, $\text{Rt}=§t9=§25$.
$000000\ |\ 01101\ |\ 11001\ |\ 10011\ |\ 00000\ |\ 100110\Rightarrow\texttt{0x01B99826}$."""))

# ---------------------------------------------------------------- 18
questions.append(Q(
    18, "number_bases", "מה נכון ?",
    opts(("math", r"[1223.41]_9=[1020210.1101]_3"), ("math", r"[1223.41]_9=[1202010.1001]_3"),
         ("math", r"[1223.41]_9=[1020210.111]_3"), ("math", r"[1223.41]_9=[1020110.2001]_3"),
         ("math", r"[1223.41]_9=[1020110.1001]_3"), ("math", r"[1223.41]_9=[1010210.1011]_3")), "a",
    r"""כל ספרה בבסיס 9 שווה לשתי ספרות בבסיס 3: $[0]_9=[00]_3$, $[1]_9=[01]_3$, $[2]_9=[02]_3$, $[3]_9=[10]_3$, $[4]_9=[11]_3$, ...
$[1223.41]_9=[01\ 02\ 02\ 10\ .\ 11\ 01]_3=[1020210.1101]_3$."""))

# ---------------------------------------------------------------- 19
questions.append(Q(
    19, "mips_machine_code",
    "הפקודה `0x21278000` בשפת מכונה של ה-MIPS הינה בעצם פקודת האסמבלי הבאה:",
    opts("`addi $a3, $t1, -32768`", "`add $s0, $a3, $t1`", "`addi $a3, $t1, 32768`", "`add $s0, $t1, $a3`",
         "`addi $t1, $a3, 32768`", "`addi $t1, $a3, -32768`"), "a",
    r"""`0x21278000` $=\ 001000\ |\ 01001\ |\ 00111\ |\ 1000\,0000\,0000\,0000$.
$\text{OPCODE}=8\Rightarrow\text{addi}$; $\text{Rs}=9=§t1$; $\text{Rt}=7=§a3$; $\text{Imm}=\texttt{0x8000}=-32768$ (הרחבת סימן).
`addi §Rt, §Rs, Imm` $\Rightarrow$ `addi §a3, §t1, -32768`"""))

# ---------------------------------------------------------------- 20
C_CODE = ["i=0; sum=0;", "for (i=0;i<size;i++)", "{", " sum += array[i];", " if (sum > 300) sum += 300;", "", "}"]
ASM = ["        addi $7, $0, 0", "        addi $8, $0, 0", "        addi $9, $0, 300", "loop:",
       "        slt $10,$8,$4", "        beq $10,$0 end", "        @@@@@@@", "        lw $10,0($6)",
       "        addi $7, $7,$10", "        slt $10,$9,$7", "        beq $10,$0, cont", "        add $7,$7,$9",
       "cont: add1 $8,$8,1", "        j loop", "end:"]
questions.append(Q(
    20, "mips_assembly_c",
    "קטע ה- C הבא תורגם לשפת הסף (אסמבלי) של מחשב MIPS. הנח כי כתובת ההתחלה של array נמצאת באוגר §5. "
    "הערך size שהוא גודל המערך נמצא באוגר §4. המערך הינו מערך של מילים (Words=4 bytes). אוגרים §4 ו- §5 צריכים להישאר ללא שינוי.\n"
    + fence(C_CODE, "c") + "\nלהלן התרגום:\n" + fence(ASM) + "\n"
    "מהתרגום נשמטו פקודות במקום המסומן ב- @@@@@@@.\nהפקודות החסרות הן:",
    opts(fence(["add $6,$8,$8", "add $6,$6,$6", "add $6,$6,$5"]),
         fence(["add $6,$5,$8"]),
         fence(["add $6,$0,$5", "add $6,$6,$8"]),
         fence(["add $8,$8,$8", "add $8,$8,$8", "add $6,$8,$5"])), "a",
    r"""חסר חישוב הכתובת של `array[i]` באוגר §6, לפני ה-`lw`:
א: `add §6,§8,§8` ($§6=2i$); `add §6,§6,§6` ($§6=4i$); `add §6,§6,§5` ($§6=\text{array}+4i$) - מציג את הכתובת הנכונה.
ב: $§6=\text{array}+i$ - שגוי, כי המערך הוא של מילים (4 בתים).
ג: $§6=\text{array}$ ואחר כך $§6=\text{array}+i$ - שגוי, אותה טעות.
ד: משנים את $i$ (§8: $i=2i$, $i=4i$) - שגוי, כי $i$ צריך להישאר ללא שינוי.""",
    note="The printed translation contains two typos of the source ('addi $7, $7,$10' and 'add1 $8,$8,1'); transcribed as printed. The simulation uses add / addi. Also the stem says array is in $5 and size in $4, matching 'slt $10,$8,$4' and the key's final 'add $6,$6,$5'."))

exam = {
    "examCode": "24S-A",
    "examLabel": "2024 סמסטר א מועד מיוחד",
    "year": 2024,
    "examDate": "2.6.2024",
    "sourceFile": "sitting 24S-A (pages 2-21)",
    "keyFile": "sitting 24S-A pp.2-21 (red-circled options + handwritten working under each question)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
