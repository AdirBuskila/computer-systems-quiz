# -*- coding: utf-8 -*-
"""Generator for tools/raw/23A-B.json -- computer-systems, 2023 semester B, moed A (15.06.2023).
Run: PYTHONUTF8=1 py tools/gen/gen_23A-B.py

Source: sitting 23A-B pp.2-17 (20 MCQ x 5 pts) with the lecturer's circled options; pp.18-37 are his handwritten
solution pages. Literal MIPS register dollars in plain text are written with the section sign (reg() turns it
into an escaped dollar); inside fenced code a plain $ is literal.
Key (circled and confirmed on the solution pages): option a in every question.
Keys checked by script (tools/verify/23A-B/check.py): Q1 Q2 Q3 Q4 Q5 Q9 Q11 Q12 Q13 Q14 Q15 Q16 Q17 Q19 recomputed
and agree (14); Q6 range is trivial.
DISAGREEMENT: Q10 -- simulation gives $9 = 0x200 = 512 (option d); the key circles a (0x100) and the lecturer's own
working (p.27) reads the loop as stopping one doubling early -> arbiter 2026-10-17: ship d as solved (official:false).
Q12 -- printed option b (a subtraction) is also overflow-free -> arbiter 2026-10-17: acceptedIds a+b (official:false).
Handwritten Hebrew explanation text is reconstructed from the solution pages; the formulas are exact."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "23A-B.json"
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
    opts(("math", r"(A\oplus B)\oplus(C+D)=(A+B)\oplus(C\oplus D)"),
         ("math", r"(A+B)\oplus(C+D)=\bar A\cdot\bar B\cdot C+\bar D\cdot\bar C\cdot A+\bar D\cdot\bar C\cdot B+\bar A\cdot\bar B\cdot D"),
         r"$\overline{(\bar A\oplus B)+(C\oplus\bar D)}=$" + "\n"
         r"$=\bar A\cdot B\cdot\bar C\cdot D+\bar A\cdot B\cdot C\cdot\bar D+A\cdot\bar B\cdot\bar C\cdot D+A\cdot\bar B\cdot C\cdot\bar D$",
         r"$(\bar A\oplus B)\cdot(C\oplus\bar D)=$" + "\n"
         r"$=\bar A\cdot\bar B\cdot\bar C\cdot\bar D+A\cdot B\cdot C\cdot D+\bar A\cdot\bar B\cdot C\cdot D+A\cdot B\cdot\bar C\cdot\bar D$"),
    "a",
    r"""א: עבור $A=B=0$ צד שמאל הוא $0\oplus(C+D)=C+D$ וצד ימין הוא $0\oplus(C\oplus D)=C\oplus D$; שני הצדדים שונים כאשר $C=D=1$ (שמאל $1$, ימין $0$) - המשוואה אינה נכונה.
ב: $(A+B)\oplus(C+D)=\bar A\bar B(C+D)+(A+B)\bar C\bar D=\bar A\bar B C+\bar A\bar B D+A\bar C\bar D+B\bar C\bar D$ - נכונה.
ג: $\overline{(\bar A\oplus B)+(C\oplus\bar D)}=(A\oplus B)\cdot(C\oplus D)$ ומתקבלים ארבעה המכפלות המלאות המופיעות בצד ימין - נכונה.
ד: $(\bar A\oplus B)\cdot(C\oplus\bar D)=\overline{A\oplus B}\cdot\overline{C\oplus D}$ ומתקבלים ארבעה המכפלות המלאות המופיעות בצד ימין - נכונה."""))

# ---------------------------------------------------------------- 2
questions.append(Q(
    2, "mips_machine_code", "איזה קטע קוד לא יכניס את הערך 65,535 לאוגר §3 ?",
    opts(code(["addi $3, $0, 0xFFF", "addi $3, $3, 0x7000", "addi $3, $3, 0x8000"]),
         code(["lui  $3, 1", "addi $3, $3, 0xFFFF"]),
         code(["lui  $3, 1", "addi $3, $3, 0x5555", "addi $3, $3, 0xAAAA"]),
         code(["addi $1, $0, 0x7000", "add  $1, $1, $1", "addi $3, $0, 0xFFFF", "add  $3, $3, $1", "addi $3, $3, 0x2000"]),
         code(["addi $3, $0, 0x5555", "addi $3, $3, 0x5555", "addi $3, $3, 0x5555"])),
    "a",
    r"""א: $§3=\texttt{0x00000FFF}$; לאחר $+\texttt{0x7000}$ נקבל $\texttt{0x00007FFF}$; `addi` מבצע הרחבת סימן, ולכן $\texttt{0x8000}$ הופך ל-$\texttt{0xFFFF8000}$ והתוצאה $\texttt{0xFFFFFFFF}\ne\texttt{0xFFFF}=65{,}535$ - לא מכניס את הערך.
ב: $\texttt{0x00010000}+\texttt{0xFFFFFFFF}=\texttt{0x0000FFFF}$ - מכניס. ג: $\texttt{0x00015555}+\texttt{0xFFFFAAAA}=\texttt{0x0000FFFF}$ - מכניס.
ד: $§1=\texttt{0xE000}$, $§3=\texttt{0xFFFFFFFF}+\texttt{0x0000E000}=\texttt{0x0000DFFF}$, ולאחר $+\texttt{0x2000}$: $\texttt{0x0000FFFF}$ - מכניס. ה: $3\cdot\texttt{0x5555}=\texttt{0xFFFF}$ - מכניס."""))

# ---------------------------------------------------------------- 3
questions.append(Q(
    3, "floating_point",
    r"המספר $\frac{1}{5}$ בבסיס 2 הוא השבר הבינארי האינסופי $[0.0011\ 0011\ 0011\ldots]_2$." + "\n"
    r"כיצד ייוצג המספר $-31\frac{1}{5}$ בייצוג Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו-23 סיביות שבר) ?",
    opts("0xC1F9999A", "0xC1C99999", "0xC1C9999A", "0xC1FE6666", "0xC279999A", "0xC2799999"), "a",
    r"""$31\frac{1}{5}=[11111.0011\ 0011\ldots]_2=(-1)^1\cdot 2^4\cdot 1.1111\ 0011\ 0011\ 0011\ldots$
$E-127=4\Rightarrow E=131=10000011$, $S=1$.
23 סיביות השבר הן $1111\ 0011\ 0011\ 0011\ 0011\ 001|1\ 0011\ldots$ - עיגול כלפי מעלה של הסיבית האחרונה נותן `0xC1F9999A`."""))

# ---------------------------------------------------------------- 4
questions.append(Q(
    4, "number_bases", "מה לא נכון ?",
    opts(("math", r"[0.21212121\ldots]_3:7=[0.3333\ldots]_9"),
         ("math", r"[0.9999\ldots]_{16}:4=[0.021212121\ldots]_4"),
         ("math", r"[0.4444\ldots]_9:2=[0.02020202\ldots]_3"),
         ("math", r"[0.25252525\ldots]_7\times 24=9.5")), "a",
    r"""א: $X=[0.2121\ldots]_3\Rightarrow 9X=[21]_3+X\Rightarrow 8X=7\Rightarrow X=\frac{7}{8}$, ולכן $X:7=\frac{1}{8}$. $Y=[0.333\ldots]_9\Rightarrow 9Y=3+Y\Rightarrow Y=\frac{3}{8}$. $\frac{1}{8}\ne\frac{3}{8}$ - לא נכון.
ב: $[0.999\ldots]_{16}=[0.1001\,1001\ldots]_2$; לאחר חילוק ב-4 מתקבל $[0.0010\,0110\,0110\ldots]_2=[0.0\,2\,1\,2\,1\,2\ldots]_4$ - נכון.
ג: $X=[0.444\ldots]_9=\frac{1}{2}$, ולכן $X:2=\frac{1}{4}$; $Y=[0.0202\ldots]_3$, $9Y=2+Y\Rightarrow Y=\frac{1}{4}$ - נכון.
ד: $X=[0.2525\ldots]_7$, $49X=[25]_7+X=19+X\Rightarrow X=\frac{19}{48}$, ו-$X\cdot 24=\frac{19}{2}=9.5$ - נכון."""))

# ---------------------------------------------------------------- 5
questions.append(Q(
    5, "signed_twos_complement",
    "$X$ הוא מספר 2's complement בן 13 סיביות מהן 6 הם מימין לנקודה הבינרית. כלומר:\n"
    r"$X=\langle X_6,X_5,X_4,X_3,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4},X_{-5},X_{-6}\rangle$" + "\n"
    r'סיביות $X_0$ , $X_4$ ו- $X_{-2}$ הן "1". מה לא נכון:',
    opts(r"$\langle X\rangle$ לא יכול להיות $-42\frac{5}{8}$",
         r"$\langle X\rangle$ לא יכול להיות $44\frac{1}{4}$",
         r"$\langle X\rangle$ יכול להיות $31\frac{15}{16}$",
         r"$\langle X\rangle$ לא יכול להיות $17\frac{47}{64}$",
         r"$\langle X\rangle$ לא יכול להיות $-14\frac{31}{32}$",
         r"$\langle X\rangle$ יכול להיות $-\frac{1}{32}$"), "a",
    r"""בדיקת כל אפשרות לפי ייצוג 13 הסיביות:
$-42\frac{5}{8}=\langle 1010101.011000\rangle$ - הסיביות $X_0,X_4,X_{-2}$ הן אכן "1", כלומר $\langle X\rangle$ **יכול** להיות $-42\frac{5}{8}$ - לכן א היא הטענה הלא נכונה.
$44\frac{1}{4}=\langle 0101100.010000\rangle$, $17\frac{47}{64}=\langle 0010001.101111\rangle$, $-14\frac{31}{32}=\langle 1110001.000010\rangle$ - הסיביות הנדרשות אינן "1" (הטענות "לא יכול" נכונות).
$31\frac{15}{16}=\langle 0011111.111100\rangle$ ו-$-\frac{1}{32}=\langle 1111111.111110\rangle$ - הסיביות הנדרשות הן "1" (יכול)."""))

# ---------------------------------------------------------------- 6
questions.append(Q(
    6, "signed_twos_complement",
    r"כדי להציג את תחום המספרים מ- $(-2^{15})$ ועד $(2^{15}-\frac{1}{128})$ צריך מספר בינארי המוצג בשיטת המשלים ל-2 שבו יש:",
    opts("16 סיביות לחלק השלם ו-7 סיביות לשבר", "16 סיביות לחלק השלם ו-6 סיביות לשבר",
         "17 סיביות לחלק השלם ו-7 סיביות לשבר", "17 סיביות לחלק השלם ו-6 סיביות לשבר",
         "15 סיביות לחלק השלם ו-7 סיביות לשבר", "15 סיביות לחלק השלם ו-6 סיביות לשבר"), "a",
    r"""המשקל $-2^{15}$ הוא של ה-MSB (סיבית הסימן), ולכן יש סיביות מ-0 ועד 15 - כלומר 16 סיביות לחלק השלם. ה-LSB הוא $\frac{1}{128}=2^{-7}$, ולכן 7 סיביות לשבר ($\langle 16.7\rangle$, כלומר 23 ספרות). בטווח המבוקש: $-2^{15}\le X\le 2^{15}-2^{-7}$, לכן התשובה הנכונה היא א."""))

# ---------------------------------------------------------------- 7
questions.append(Q(
    7, "floating_point",
    "חיברנו שני מספרים המיוצגים ב- Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו-23 סיביות שבר, Fraction). "
    "ידוע ששני המספרים מנורמלים ושהאקספוננט של אחד מהם גדול ב-1 מהאקספוננט של השני. אם אין שגיאת עיגול בתוצאה היא נחשבת תוצאה מדוייקת.\n"
    "מה נכון:",
    opts("החיבור של שני מספרים כאלה לא ייתן תמיד תוצאה מדוייקת",
         "החיבור של שני המספרים ייתן תוצאה מדוייקת רק אם שניהם חיוביים",
         "החיבור של שני המספרים ייתן תוצאה מדוייקת רק אם אחד חיובי והשני שלילי",
         "החיבור של שני מספרים כאלה ייתן תמיד תוצאה מדוייקת"), "a",
    r"""המספרים באקספוננטים $E$ ו-$E+1$: מרווח השנתות באקספוננט $E$ הוא $\frac{\Delta}{2}$ ובאקספוננט $E+1$ הוא $\Delta$.
אם הסיבית הנמוכה (LSB) של המספר הקטן היא "1", הסכום נופל באמצע בין שתי שנתות של $E+1$ (הוא "משהו" $+\frac{\Delta}{2}$) ולכן אינו מדוייק; אם ה-LSB הוא 0, הסכום נופל בדיוק על שנת של $E+1$ והתוצאה מדוייקת.
לכן החיבור של שני מספרים כאלה לא ייתן תמיד תוצאה מדוייקת - תשובה א. ב, ג ו-ד אינן נכונות: התוצאה אינה תלויה בסימנים אלא ב-LSB, ואין התוצאה מדוייקת תמיד."""))

# ---------------------------------------------------------------- 8
questions.append(Q(
    8, "datapath_control",
    "אילו הוספנו למעבד ה-MIPS שמימשנו בהרצאות פקודת jalr, שקופצת לכתובת שנמצאת באוגר Rs וגם רושמת את PC+4 לאוגר §31 (§ra), אילו שלבים היו מתבצעים במהלך ביצוע הפקודה הזו?\n"
    "(למשל `jalr $5` בכתובת 0x400020 שאמורה לבצע PC= GPR[5] ו- GPR[31]=PC+4) הנח שפקודה זו אינה פקודת Rtype.",
    opts("Fetch, Decode, Write-Back", "Fetch, Decode", "Fetch, Decode, Memory Write-Back", "Fetch, Decode, Memory",
         "Fetch, Decode, ALU", "Fetch, Decode, ALU, Write-Back"), "a",
    r"""Fetch ו-Decode מתבצעים תמיד. אין צורך ב-ALU (הכתובת ב-Rs ניתנת ל-PC ישירות), ואין גישה לזיכרון הנתונים (Memory). בשלב Write-Back נכתב PC+4 ל-§31 (ה-PC עצמו מתעדכן בלי WB). לכן: Fetch, Decode, Write-Back."""))

# ---------------------------------------------------------------- 9
questions.append(Q(
    9, "latches_flipflops",
    "לפניכם ארבעה דלגלגים (FF-ים), המחוברים בצורת אוגר הזזה (Shift Register). הכניסה משמאל (ל-D3) מחוברת ליציאת שער XOR, "
    "המבצע פעולת XOR בין Q0 להיפוך של Q2.\n"
    "הערך באוגר ההזזה הוא: [Q3, Q2, Q1, Q0] = [0, 1, 0, 1] כמצויר. מה היה הערך באוגר לפני 4 עליות שעון?",
    opts(("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,1,0,1]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,1,1,0]"),
         ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,0,1,0]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,0,0,1]"),
         ("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,1,1,1]")), "a",
    r"""$D_3=\overline{Q_2}\oplus Q_0=\overline{Q_2\oplus Q_0}$ (שאר הדלגלגים מזיזים ימינה): $D_3=0$ אם $Q_2\ne Q_0$, ו-$D_3=1$ אם $Q_2=Q_0$.
בונים את הטבלה אחורה מהמצב הנוכחי $[0,1,0,1]$: לפני עלייה אחת $[1,0,1,1]$; לפני 2: $[0,1,1,1]$; לפני 3: $[1,1,1,0]$; לפני 4: $[1,1,0,1]$.""",
    image="images/exams/23A-B-Q9.png"))

# ---------------------------------------------------------------- 10  (arbiter 2026-10-17: key a wrong, d solved)
questions.append(Q(
    10, "mips_assembly_c", "נתון קטע הקוד הבא הכתוב בשפת אסמבלי של מעבד MIPS. מה יהיה הערך של אוגר §9 כשנגיע ל- end?\n"
    + code(["addi $7, $0, -1", "addi $8, $0, 0x156", "addi $9, $0, 0x1",
            "lp:  slt  $1, $8, $9", "     bne  $1, $0, end", "     add  $9, $9, $9", "     addi $7, $7, 1", "     j    lp", "end:"]),
    opts("0x100", "7", "342", "512", "0x80"),
    "d",
    r"""המפתח הרשמי סימן א ($\texttt{0x100}=256$), אך התשובה הנכונה היא ד ($512$) כי כאשר $§9=256$ הבדיקה $342<256$ שקרית, ולכן §9 מוכפל פעם נוספת ל-$512$ ורק אז הלולאה נעצרת.
§8 מכיל $\texttt{0x156}=342$ ו-§9 מתחיל ב-1 ומוכפל ב-2 בכל סיבוב; הלולאה נעצרת כאשר $§8<§9$.
§9 עובר את הערכים $1,2,4,\ldots,256$ - בכולם $342\ge §9$ וממשיכים; ב-$§9=512$ מתקיים $342<512$ וקופצים ל-end. (בפתרון המרצה $§7=8$, כלומר $256=2^8\le 342$, אבל §9 עצמו כבר הוכפל ל-$2^9=512$.)""",
    answerSource="solved", official=False,
    note="Arbiter 2026-10-17: key circled a = 0x100 is a reading slip (p.27 confuses $7=8 with $9); simulation gives $9 = 512, option d."))

# ---------------------------------------------------------------- 11
questions.append(Q(
    11, "number_bases", "מה לא נכון ?",
    opts(("math", r"[311F]_{16}=([A]_{16}+1)\times 16+12{,}303"),
         ("math", r"[311F]_{16}=([31]_{16}\times 7+49\times 9)\times 16+31"),
         ("math", r"[311F]_{16}=17\times 16+15+[1000]_{16}+8{,}192"),
         ("math", r"[311F]_{16}=[4000]_{16}-(14\times 17\times[10]_{16}+1)")), "a",
    r"""$[311F]_{16}=3\cdot 4096+256+16+15=12{,}575$.
א: $([A]_{16}+1)\times 16+12{,}303=11\cdot 16+12{,}303=12{,}479\ne 12{,}575$ - לא נכון.
ב: $[31]_{16}\times(7+9)=[31]_{16}\times 16=[310]_{16}$, כלומר $[3100]_{16}+31=[3100]_{16}+[1F]_{16}=[311F]_{16}$ - נכון.
ג: $17\times16+15+[1000]_{16}+2\cdot 4096=[110]_{16}+[F]_{16}+[3000]_{16}=[311F]_{16}$ - נכון.
ד: $14\cdot17\cdot16+1=[EE0]_{16}+1=[EE1]_{16}$ ו-$[4000]_{16}-[EE1]_{16}=[311F]_{16}$ - נכון."""))

# ---------------------------------------------------------------- 12  (arbiter 2026-10-17: a and b both accepted)
questions.append(Q(
    12, "signed_twos_complement",
    "במחבר 2's Comp. של 8 ביט יש יציאה הנדלקת כאשר יש Overflow. באיזה מהחישובים הבאים לא תידלק יציאה זו?",
    opts("`01111000 + 10011100`", "`01111000 - 01100100`", "`10111010 + 10110000`",
         "`01011010 - 11001001`", "`11100010 - 01100011`"),
    "a",
    r"""שתי תשובות נכונות: א ו-ב. אופרטור החיסור באפשרות ב מודפס כך בגיליון, והחישוב כפי שהודפס אינו גולש (המפתח הרשמי סימן רק את א).
התחום ב-8 ביט הוא $-128\le X\le 127$.
א: $120+(-100)=20$ - אין גלישה.
ב: כפי שהודפס $120-100=20$ - אין גלישה (בפתרון המרצה מחושב $120+100=220$ - יש גלישה).
ג: $(-70)+(-80)=-150$ - יש גלישה.
ד: $90-(-55)=145$ - יש גלישה.
ה: $(-30)-99=-129$ - יש גלישה.""",
    acceptedIds=["a", "b"], answerSource="solved", official=False,
    note="Arbiter 2026-10-17: printed option b (01111000 - 01100100 = 20) has no overflow, same as the key a; the solution page evaluates b as an addition. Both accepted."))

# ---------------------------------------------------------------- 13
questions.append(Q(
    13, "mips_assembly_c",
    "הקטע הנתון בשפת אסמבלי של ה-MIPS הוא תרגום לקטע בשפת C. מהו התרגום הנכון?\n"
    + code(["    slt $1, $2, $3", "    bne $1, $0, lab1", "    sub $3, $3, $2", "    j cont", "lab1: add $3, $3, $2", "cont:"]),
    opts("```c\nif(a>=b) b=b-a;\nelse   b=b+a;\n```", "```c\nif(a<b) b=b-a;\nelse   b=b+a;\n```",
         "```c\nif(a>=b) a=a-b;\nelse   a=a+b;\n```", "```c\nif(a<b) a=a-b;\nelse   a=a+b;\n```"), "a",
    r"""`slt §1,§2,§3` בודק $a<b$ (§2=a, §3=b): $\$1=1$ אם $a<b$ ו-$\$1=0$ אם $a\ge b$. אם $a<b$ קופצים ל-`lab1` ומבצעים `add §3,§3,§2` ($b=b+a$); אחרת ($a\ge b$) ממשיכים ל-`sub §3,§3,§2` ($b=b-a$) וקופצים ל-`cont`.
לכן: `if (a>=b) b=b-a; else b=b+a;` - תשובה א (ב: התנאי הפוך; ג, ד: המשתנה המעודכן הוא a במקום b)."""))

# ---------------------------------------------------------------- 14
questions.append(Q(
    14, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=\bar A\cdot B+C\cdot D+A\cdot\bar B\cdot\bar C"),
         ("math", r"F=A\cdot B+C\cdot D+A\cdot\bar B\cdot\bar C"),
         ("math", r"F=\bar A\cdot\bar B+C\cdot D+A\cdot\bar B\cdot\bar C"),
         ("math", r"F=\bar A\cdot B+C\cdot D+A\cdot B\cdot C"),
         ("math", r"F=\bar A\cdot B+C\cdot D+A\cdot B+A\cdot\bar B\cdot\bar C")), "a",
    r"""פיתוח לפי כניסות הנתונים של המולטיפלקסר:
$F=\bar A\bar B\bar C\cdot 0+\bar A\bar B C\cdot D+\bar A B\bar C\cdot 1+\bar A BC\cdot 1+A\bar B\bar C\cdot 1+A\bar B C\cdot D+AB\bar C\cdot 0+ABC\cdot D$.
$=\bar A B+CD+A\bar B\bar C$ (הצירופים $\bar A\bar BC\,D$, $\bar ABC\,D$, $A\bar BC\,D$, $ABC\,D$ נאספים ל-$CD$).
בדיקת האפשרויות האחרות: ב - עבור $ABC=110$ הביטוי שווה 1 ואילו $F=0$; ג - עבור $ABC=000$ הביטוי שווה 1 ואילו $F=0$; ד - עבור $ABC=100$ הביטוי שווה 0 ואילו $F=1$; ה - עבור $ABC=110$ הביטוי שווה 1 ואילו $F=0$.""",
    image="images/exams/23A-B-Q14.png"))

# ---------------------------------------------------------------- 15
ROWS15 = {
    "a": ["0010", "1101", "0100", "1000", "0111", "1011"],
    "b": ["0010", "1110", "0100", "1000", "0111", "1011"],
    "c": ["0000", "1101", "0100", "1000", "0111", "1011"],
    "d": ["0010", "1101", "0101", "1000", "0111", "1011"],
    "e": ["0010", "1101", "0100", "1000", "0111", "1001"],
}
questions.append(Q(
    15, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(*[("math", minterms(sorted(ROWS15[k], key=lambda s: int(s, 2)))) for k in "abcde"]), "a",
    r"""המולטיפלקסר בוחר לפי $XY$: $XY=10$ כאשר $AB=00$, $XY=01$ כאשר $AB=11$, ו-$XY=00$ כאשר $AB=01$ או $AB=10$ (כלומר $\bar AB+A\bar B$); $XY=11$ לא מתקבל.
הכניסות הנבחרות: $XY=10\to CD=10$ ($C\bar D$); $XY=01\to CD=01$ ($\bar CD$); $XY=00\to CD=00$ או $CD=11$ ($\bar C\bar D+CD$).
$F=\bar A\bar B\cdot C\bar D+AB\cdot\bar CD+(\bar AB+A\bar B)\cdot(\bar C\bar D+CD)=\Sigma(2,4,7,8,11,13)$ - זו תשובה א; בכל אחת מהאפשרויות האחרות מינטרם אחד שונה""",
    image="images/exams/23A-B-Q15.png",
    note="Option rows were read at 2x zoom; the minterm set of each option was rebuilt from the printed rows and compared by script with the set derived from the lecturer's solution (only a matches)."))

# ---------------------------------------------------------------- 16
questions.append(Q(
    16, "arithmetic_circuits",
    "בידנו מעגל הכופל את המספר השלם מטיפוס unsigned בן חמש סיביות $[a_4,a_3,a_2,a_1,a_0]_2$ במספר 25 (גם כן unsigned) המיוצג על ידי $[11001]_2$. "
    "המכפל בנוי מרכיבי HA (כלומר Half-Adder) ורכיבי FA (כלומר Full-Adder). עלינו לספור את מספר הרכיבים ומספר היציאות. "
    "אנו כמובן מעדיפים מספר מינימלי של רכיבים (במקום FA לכאורה אפשר להשתמש בשני HA. אם יש כזה מקרה – נעדיף את ה- FA הבודד)\n"
    "מה נכון?",
    opts("יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 6 רכיבי HA ו-4 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 6 רכיבי HA ו-4 רכיבי FA ויש לו 9 יציאות"), "a",
    r"""מכיוון ש-$25=[11001]_2$, מחברים שלוש שורות: $A\cdot 2^0,\ A\cdot 2^3,\ A\cdot 2^4$ (השורות המתאימות לביטים השווים 1).
מתקבלים $5\times$FA ו-$5\times$HA, ויש 10 יציאות ($y_0\ldots y_9$)."""))

# ---------------------------------------------------------------- 17
questions.append(Q(
    17, "mips_machine_code",
    "ידוע שהפקודה `bne §gp, §s5, loop` נמצאת בכתובת 0x400300 והכתובת loop היא הכתובת 0x400200. "
    "מהו התרגום של הפקודה `bne §gp, §s5, loop` לשפת המכונה של ה-MIPS ?",
    opts("0x1795FFBF", "0x1795FFC0", "0x16BCFFBF", "0x16BCFFC0", "0x1795FF3F", "0x16BCFF40"), "a",
    r"""$\text{bne}$ היא פקודת I-type: $\text{PC}\leftarrow\text{PC}+4+4\cdot\text{imm}$ כאשר $\text{GPR}[Rs]\ne\text{GPR}[Rt]$, כלומר $\text{imm}+1$ מילים קדימה.
צריך לקפוץ מ-$\texttt{0x400300}$ ל-$\texttt{0x400200}$: $-\texttt{0x100}$ בתים, כלומר $-\texttt{0x40}$ מילים; מכיוון שה-PC כבר הוגדל ב-4, $\text{imm}=-\texttt{0x41}=\texttt{0xFFBF}$.
opcode $=5=000101$, $Rs=§gp=§28=11100$, $Rt=§s5=§21=10101$: $0001\ 0111\ 1001\ 0101\ \texttt{FFBF}\Rightarrow\texttt{0x1795FFBF}$."""))

# ---------------------------------------------------------------- 18
questions.append(Q(
    18, "datapath_control",
    "במעבד ה- MIPS Single Cycle שלמדנו מי מהצירופים הרשומים מטה של אותות הבקרה נכון לפקודת sub? (יש ציור של המעבד בנספח לבחינה)",
    opts("ALUOp=10 (func);  RegDst=1; MemWrite=0;  RegWrite=1;  MemToReg=0",
         "ALUOp=01 (sub);  RegDst=1; MemWrite=0;  RegWrite=1;  MemToReg=0",
         "ALUOp=01 (sub);  RegDst=0; MemWrite=0;  RegWrite=1;  MemToReg=1",
         "ALUOp=01 (sub);  RegDst=1; MemRead=0;  RegWrite=1;  MemToReg=0",
         "ALUOp=10 (func);  RegDst=1; MemWrite=0;  RegWrite=0;  MemToReg=1",
         "ALUOp=10 (func);  RegDst=0; MemWrite=0;  RegWrite=1;  MemToReg=0"), "a",
    r"""`sub` היא פקודת R-type: ALUOp=10 (func - הפעולה נקבעת לפי שדה ה-funct), RegDst=1 (היעד הוא Rd), RegWrite=1, MemToReg=0, MemRead=MemWrite=0, ALUSrc=0, Branch=0, Jump=0.
ב, ג, ד שגויות כי ALUOp אינו 01 (sub) ל-R-type; ג גם משנה RegDst ו-MemToReg; ה: RegWrite=0 ו-MemToReg=1; ו: RegDst=0.""",
    image="images/exams/23A-B-Q18.png",
    note="Datapath figure is a low-resolution source scan; control-signal labels in it are not legible in the source."))

# ---------------------------------------------------------------- 19
questions.append(Q(
    19, "mips_machine_code",
    "הפקודה `0x35730123` בשפת מכונה של ה-MIPS הינה בעצם פקודת האסמבלי הבאה:",
    opts("`ori $s3, $t3, 291`", "`ori $t3, $s3, 291`", "`ori $s3, $t3, 123`", "`ori $t3, $s3, 123`",
         "`lui $s3, 0x123`", "`lui $t3, 0x123`"), "a",
    r"""`0x35730123` $=\ 001101\ |\ 01011\ |\ 10011\ |\ 0000\,0001\,0010\,0011$.
opcode $=13=\text{ori}$ (I-type); $Rs=11=§t3$, $Rt=19=§s3$, $\text{imm}=\texttt{0x123}=291$.
$\Rightarrow$ `ori §s3, §t3, 291`""",
    note="No circle is visible on this question page; the key (option a) is read from the lecturer's worked page and recomputed by script."))

# ---------------------------------------------------------------- 20
C20 = ["for(i=1;i<size;i++)", "{", "    tmp1=array[i];", "    tmp2=array[i-1];", "    if(tmp1>tmp2)", "    {",
       "        array[i]=tmp2;", "        array[i-1]=tmp1;", "    }", "}"]
ASM20 = ["addi $7, $0, 1", "j lab3", "lab1: add $8, $7, $7", "      add $8, $8, $8", "      add $8, $8, $4",
         "@@@@@@@", "      sw $10, 0($8)", "      sw $9, -4($8)", "lab2: addi $7, $7, 1", "lab3: slt $1, $7, $5", "      bne $1, $0, lab1", "cont:"]


def alt20(s1, br, lab):
    return code(["lw $9, 0($8)", "lw $10, -4($8)", f"slt $1, {s1}", f"{br} $1, $0, {lab}"])


questions.append(Q(
    20, "mips_assembly_c",
    "קטע ה- C הבא תורגם לשפת הסף (אסמבלי) של מחשב MIPS. הנח כי כתובת ההתחלה של array נמצאת באוגר §4. הערך size שהוא גודל המערך נמצא באוגר §5. "
    "המערך הינו מערך של מילים (Words=4 bytes). אוגרים §4 ו- §5 צריכים להישאר ללא שינוי.\n"
    + code(C20, "c") + "\nלהלן התרגום:\n" + code(ASM20) + "\nמהתרגום נשמטו פקודות במקום המסומן ב- `@@@@@@@`.\nהפקודות החסרות הן:",
    opts(alt20("$10, $9", "beq", "lab2"), alt20("$9, $10", "beq", "lab2"), alt20("$10, $9", "bne", "lab2"),
         alt20("$9, $10", "bne", "lab2"), alt20("$10, $9", "beq", "lab1"), alt20("$9, $10", "bne", "lab1")), "a",
    """`lw §9,0(§8)` טוען את `tmp1=array[i]` ו-`lw §10,-4(§8)` את `tmp2=array[i-1]`. הפקודה `slt §1,§10,§9` נותנת `§1=1` אם `tmp2<tmp1` (כלומר `tmp1>tmp2`); אם `§1==0` מדלגים על ההחלפה (`beq §1,§0,lab2`), אחרת מבצעים `sw` (SWAP).
ב: ההשוואה הפוכה; ג: התנאי של הקפיצה הפוך (bne); ד: ההשוואה הפוכה והתנאי הפוך; ה: קפיצה ל-`lab1` מדלגת גם על `i++` ובדיקת התנאי; ו: ההשוואה הפוכה וגם קפיצה ל-lab1 - לא נכון."""))

exam = {
    "examCode": "23A-B",
    "examLabel": "2023 סמסטר ב מועד א",
    "year": 2023,
    "examDate": "15.06.2023",
    "sourceFile": "sitting 23A-B (exam pages 2-17)",
    "keyFile": "sitting 23A-B pp.2-17 (circled options) + pp.18-37 (handwritten solution)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
