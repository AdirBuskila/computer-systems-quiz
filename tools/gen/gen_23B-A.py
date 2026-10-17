# -*- coding: utf-8 -*-
"""Generator for tools/raw/23B-A.json -- computer-systems, 2023 semester A, moed B (02.03.2023).
Run: PYTHONUTF8=1 py tools/gen/gen_23B-A.py

Source: sitting 23B-A (20 MCQ x 5 pts; every printed page carries the lecturer's circled option and handwritten
working in the same PDF). Literal MIPS register dollars in plain text are written with the section sign (reg()
turns it into an escaped dollar); inside fenced code a plain $ is literal.
Key: option a in every question (circled on the pages; Q16 and Q19 carry no circle, the lecturer's worked page gives
a). Two source copies differ on page 4 (Q2): the cs24 copy prints the last instruction as `addi $3,$3,0x8765`, the other
copy has the corrected line `addi $5,$5,0x8765` pasted over it. The corrected line is the only reading consistent with
the key (0x110F0FED), so it is used.
Keys checked by script (tools/verify/23B-A/check.py): Q1 Q2 Q3 Q4 Q5 Q9 Q10 Q11 Q12 Q13 Q14 Q15 Q16 Q17 Q19 Q20
recomputed and agree (16); Q6 is a range derivation, Q7 and Q8 are conceptual, Q18 is the control-signal table for lw.
No disagreements, no holds.
Handwritten Hebrew explanation text is reconstructed from the solution pages; the formulas are exact."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "23B-A.json"
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


questions = []

# ---------------------------------------------------------------- 1
questions.append(Q(
    1, "boolean_algebra", "מי מהמשוואות הבאות נכונה?",
    opts(("math", r"\begin{array}{l}(A\oplus B)+(B\oplus\bar A)\cdot\big((C\oplus D)+(D\oplus\bar C)\cdot(F\oplus E)\big)\\ =\overline{(\bar A\oplus B)\cdot(\bar C\oplus D)\cdot(\bar E\oplus F)}\end{array}"),
         ("math", r"(A\oplus B)\cdot(A\oplus C)=A\oplus(B+C)"),
         ("math", r"(A\oplus B)+(A\oplus C)=A\oplus(B\cdot C)"),
         ("math", r"\begin{array}{l}(A\oplus B)+(\bar A\oplus\bar B)\cdot\big((C\oplus D)+(\bar C\oplus D)\cdot(F\oplus E)\big)\\ =(A\oplus B)+(C\oplus D)+(E\oplus F)\end{array}")),
    "a",
    r"""א: $B\oplus\bar A=\overline{A\oplus B}$ ו-$D\oplus\bar C=\overline{C\oplus D}$, ולכן מכלל הבליעה $X+\bar XY=X+Y$ צד שמאל שווה $(A\oplus B)+(C\oplus D)+(F\oplus E)$. צד ימין: $\overline{(\bar A\oplus B)\cdot(\bar C\oplus D)\cdot(\bar E\oplus F)}=(A\oplus B)+(C\oplus D)+(E\oplus F)$ (כי $\overline{\bar A\oplus B}=A\oplus B$) - המשוואה נכונה.
ב: $(A\oplus B)(A\oplus C)=\bar ABC+A\bar B\bar C$, ואילו $A\oplus(B+C)=\bar A(B+C)+A\bar B\bar C$ - שונה, כי $BC\ne B+C$.
ג: $(A\oplus B)+(A\oplus C)=\bar A(B+C)+A(\bar B+\bar C)$, ואילו $A\oplus(BC)=\bar ABC+A(\bar B+\bar C)$ - שונה, כי $BC\ne B+C$.
ד: $\bar A\oplus\bar B=A\oplus B$, לכן צד שמאל הוא $A\oplus B$ בלבד, ואינו שווה לצד ימין.""",
    note="Printed option a: the long overline spans the whole product on the right-hand side; the second line of a and of d carries an ink blot over D, read as D."))

# ---------------------------------------------------------------- 2
questions.append(Q(
    2, "mips_machine_code", "מה יהיה באוגר §5 אחרי ביצוע הפקודות הבאות:\n" + code([
        "addi $5, $0, 0x8888", "lui  $5, 0x8888", "add  $5, $5, $5", "addi $5, $5, 0x8888", "addi $5, $5, 0x8765"]),
    opts("0x110F0FED", "0x11100FED", "0x88878765", "0x88888765", "0x111F0FED", "0x11108765"), "a",
    r"""הפקודה הראשונה לא משנה, כי הפקודה השנייה (`lui`) מכניסה $\texttt{0x88880000}$ ל-§5.
`add`: $\texttt{0x88880000}+\texttt{0x88880000}=\texttt{0x11100000}$ (נשמט נשא).
`addi` הראשון: הרחבת סימן של $\texttt{0x8888}$ היא $\texttt{0xFFFF8888}$, ולכן $§5=\texttt{0x11100000}+\texttt{0xFFFF8888}=\texttt{0x110F8888}$.
`addi` השני: $\texttt{0x8765}\to\texttt{0xFFFF8765}$ ו-$§5=\texttt{0x110F8888}+\texttt{0xFFFF8765}=\texttt{0x110F0FED}$.""",
    note="Source copies differ on this page: one prints the last instruction as 'addi $3, $3, 0x8765' (does not touch $5, so no option would match), the other has the correction 'addi $5, $5, 0x8765' pasted in. The corrected line is used; it reproduces the official key."))

# ---------------------------------------------------------------- 3
questions.append(Q(
    3, "floating_point",
    r"המספר $\frac{1}{7}$ בבסיס 2 הוא השבר הבינארי האינסופי $[0.001\ 001\ 001\ldots]_2$." + "\n"
    r"כיצד ייוצג המספר $3\frac{6}{7}$ בייצוג Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו-23 סיביות שבר) ?",
    opts("0x4076DB6E", "0x00F6DB6D", "0x00F6DB6E", "0x40766666", "0x4076DB6D", "0x40766667"), "a",
    r"""$\frac{6}{7}=1-\frac{1}{7}=[0.110\ 110\ 110\ldots]_2$ ($1=[0.111\ldots]_2$), ולכן $3\frac{6}{7}=[11.110\ 110\ 110\ldots]_2=2^1\cdot 1.1110\ 1101\ 1011\ 0110\ldots$
$E-127=1\Rightarrow E=128=10000000$, $S=0$.
23 סיביות השבר הן $111\ 0110\ 1101\ 1011\ 0110\ 110|1\ 0110\ldots$ - הסיבית הבאה היא 1 ולכן מעגלים כלפי מעלה (מוסיפים 1 ל-LSB) ומקבלים `0x4076DB6E`."""))

# ---------------------------------------------------------------- 4
questions.append(Q(
    4, "number_bases", r"מהו ערכו העשרוני של השבר האינסופי (שנתון בבסיס 5): $[0.203\ 03\ 03\ 03\ \ldots]_5$ ?",
    opts("51/120", "5/12", "13/30", "103/240", "3/5", "1/40"), "a",
    r"""$X=[0.2\,03\,03\,03\ldots]_5=[0.2]_5+Y$, כאשר $Y=[0.003\,03\,03\ldots]_5$.
$Y=[0.003]_5+[0.003]_5\cdot\frac{1}{5^2}+[0.003]_5\cdot\frac{1}{(5^2)^2}+\ldots$ - טור הנדסי עם $A_1=\frac{3}{125}$ ו-$q=\frac{1}{25}$:
$Y=\frac{A_1}{1-q}=\frac{3/125}{24/25}=\frac{3}{120}=\frac{1}{40}$.
$X=\frac{2}{5}+\frac{1}{40}=\frac{17}{40}=\frac{51}{120}$."""))

# ---------------------------------------------------------------- 5
questions.append(Q(
    5, "signed_twos_complement",
    "$X$ הוא מספר 2's complement בן 13 סיביות מהן 6 הם מימין לנקודה הבינרית. כלומר:\n"
    r"$X=\langle X_6,X_5,X_4,X_3,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4},X_{-5},X_{-6}\rangle$" + "\n"
    r'סיביות $X_3$ ו- $X_2$ הן "1" ו- $X_{-1}$ היא "0". מה נכון:',
    opts(r"$\langle X\rangle$ יכול להיות $-51\frac{39}{64}$",
         r"$\langle X\rangle$ יכול להיות $-52\frac{5}{8}$",
         r"$\langle X\rangle$ יכול להיות $55\frac{13}{32}$",
         r"$\langle X\rangle$ לא יכול להיות $45\frac{21}{64}$",
         r"$\langle X\rangle$ לא יכול להיות $-\frac{3}{4}$",
         r"$\langle X\rangle$ יכול להיות $-\frac{1}{16}$"), "a",
    r"""בדיקת כל אפשרות לפי ייצוג 13 הסיביות:
$51\frac{39}{64}=\langle 0110011.100111\rangle\Rightarrow -51\frac{39}{64}=\langle 1001100.011001\rangle$ - הסיביות $X_3,X_2$ הן "1" ו-$X_{-1}=0$: אכן יכול להיות. לכן א נכונה.
ב: $-52\frac{5}{8}=\langle 1001011.011000\rangle$ - $X_2=0$, לא יכול להיות. ג: $55\frac{13}{32}=\langle 0110111.011010\rangle$ - $X_3=0$, לא יכול להיות.
ד: $45\frac{21}{64}=\langle 0101101.010101\rangle$ - הסיביות מתאימות, כלומר כן יכול להיות. ה: $-\frac{3}{4}=\langle 1111111.010000\rangle$ - יכול להיות. ו: $-\frac{1}{16}=\langle 1111111.111100\rangle$ - $X_{-1}=1$, לא יכול להיות."""))

# ---------------------------------------------------------------- 6
questions.append(Q(
    6, "unsigned_numbers",
    "ב-32 סיביות, מהן $n$ סיביות הן עבור השבר והשאר לשלם אפשר להציג:",
    opts(r"כ- Unsigned מ-0 עד $2^{(32-n)}-2^{-n}$ וכ- Signed מ- $-2^{(31-n)}$ עד $2^{(31-n)}-2^{-n}$",
         r"כ- Unsigned מ-0 עד $2^{(31-n)}-2^{-n}$ וכ- Signed מ- $-2^{(32-n)}$ עד $2^{(32-n)}-2^{-n}$",
         r"כ- Unsigned מ-0 עד $2^{(32-n)}-2^{-(n-1)}$ וכ- Signed מ- $-2^{(31-n)}$ עד $2^{(31-n)}-2^{-n}$",
         r"כ- Unsigned מ-0 עד $2^{(32-n)}-2^{-(n-1)}$ וכ- Signed מ- $-2^{(32-n)}$ עד $2^{(32-n)}-2^{-n}$"), "a",
    r"""ב-32 סיביות בשיטה הבינארית הרגילה: כ-Unsigned ניתן להציג מ-0 עד $2^{32}-1$, וכ-Signed מ-$-2^{31}$ עד $2^{31}-1$.
כאשר $n$ הסיביות מימין הן שבר, מחלקים את הערכים ב-$2^n$ ומקבלים: Unsigned מ-0 עד $2^{(32-n)}-2^{-n}$, ו-Signed מ-$-2^{(31-n)}$ עד $2^{(31-n)}-2^{-n}$."""))

# ---------------------------------------------------------------- 7
questions.append(Q(
    7, "floating_point",
    "מהמספר המנורמל החיובי הקטן ביותר חיסרנו את המספר החיובי הלא מנורמל הגדול ביותר. מה נכון:",
    opts("התוצאה מדוייקת, לא מנורמלת ושווה למספר החיובי הקטן ביותר שניתן להציג",
         "התוצאה לא מדוייקת ולא מנורמלת",
         "התוצאה מדוייקת ומנורמלת",
         "התוצאה שווה למספר החיובי הקטן ביותר שניתן להציג אך לא מדוייקת",
         "התוצאה מנורמלת ושווה למספר החיובי הקטן ביותר שניתן להציג",
         "התוצאה במקרה זה הינה 0"), "a",
    r"""המספר המנורמל החיובי הקטן ביותר הוא $2^{1-127}\cdot 1.0$. המספר הלא מנורמל החיובי הגדול ביותר הוא $2^{1-127}\cdot 0.111\ldots1=2^{1-127}\cdot(1-2^{-23})$.
ההפרש: $2^{1-127}\cdot 2^{-23}=2^{-149}$, כלומר $2^{1-127}\cdot 0.000\ldots001$ - זהו המספר החיובי הקטן ביותר שניתן להציג (לא מנורמל, שונה מ-0), והחישוב כמובן מדוייק."""))

# ---------------------------------------------------------------- 8
questions.append(Q(
    8, "datapath_control",
    "אילו הוספנו למעבד ה-MIPS שמימשנו בהרצאות פקודת jalr, שקופצת לכתובת שנמצאת באוגר Rs וגם שומרת את PC+4 באוגר §31, אילו שלבים היו מתבצעים במהלך ביצוע הפקודה הזו?\n"
    "(למשל `jalr $5` שבכתובת 0x400020 שאמורה לבצע PC= GPR[5] וגם GPR[31]= 0x400024) הנח שפקודה זו אינה פקודת Rtype.",
    opts("Fetch, Decode, Write-Back", "Fetch, Decode", "Fetch, Decode, Memory", "Fetch, Decode, ALU",
         "Fetch, Decode, ALU, Write-Back", "Fetch, Decode, Memory, Write-Back"), "a",
    r"""Fetch הוא שלב חובה; ב-Decode צריך לקרוא את הרגיסטר, כדי שיהיה זמין ל-GPR[Rs]. ה-ALU אינו נחוץ: ה-Adder הנפרד מחשב את PC+4, ו-GPR[Rs] עובר ישירות ל-PC (זה אינו Write-Back). נחוץ Write-Back כדי לכתוב את PC+4 ל-GPR[31] (כתיבה לקובץ האוגרים).
לכן: Fetch, Decode, Write-Back."""))

# ---------------------------------------------------------------- 9
questions.append(Q(
    9, "latches_flipflops",
    "לפניכם ארבעה דלגלגים (FF-ים), המחוברים בצורת אוגר הזזה (Shift Register) כאשר יש מהפך בין Q2 ל- D1. הכניסה משמאל (ל-D3) מחוברת ליציאת שער XOR, המבצע פעולת XOR בין Q0 להיפוך של D1.\n"
    "הערך באוגר ההזזה הוא: [Q3, Q2, Q1, Q0] = [0, 1, 0, 1] כמצויר. מה יהיה הערך באוגר אחרי 11 עליות שעון?",
    opts(("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,1,1,1]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,1,0,1]"),
         ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,0,1,0]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,0,0,0]"),
         ("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,1,1,1]")), "a",
    r"""$D_1=\overline{Q_2}$, ולכן $D_3=Q_0\oplus\overline{D_1}=Q_0\oplus Q_2$: $D_3=1$ אם $Q_2\ne Q_0$, ו-$D_3=0$ אם $Q_2=Q_0$.
מצב התחלה $[0,1,0,1]$; הטבלה מראה שאחרי 6 עליות שעון חוזרים ל-$[0,1,0,1]$, ולכן אחרי 12 עליות שוב נחזור אליו, ואחרי 11 עליות הערך הוא המצב שלפני $[0,1,0,1]$, כלומר $[1,1,1,1]$.""",
    image="images/exams/23B-A-Q9.png"))

# ---------------------------------------------------------------- 10
questions.append(Q(
    10, "mips_assembly_c", "נתון קטע הקוד הבא הכתוב בשפת אסמבלי של מעבד MIPS. מה יהיה הערך של אוגר §6 כשנגיע ל- end?\n"
    + code(["      addi $5, $0, 0x25", "      sub  $6, $6, $6", "lp:   slt  $1, $0, $5", "      beq  $1, $0, end",
            "      and  $2, $1, $5", "      add  $6, $6, $2", "      addi $5, $5, -1", "      bne  $1, $0, lp", "end:"]),
    opts("19", "38", "18", "36", "20", "40"), "a",
    r"""§5 מתחיל ב-37 ($\texttt{0x25}$), §6 מתאפס. כל עוד $§5>0$ ($§1=1$): `and §2,§1,§5` נותן $§2=1$ אם §5 אי-זוגי (והוא 0 אם זוגי), ‏`add §6,§6,§2` מוסיף את התוצאה, §5 קטן ב-1, וחוזרים ל-`lp`.
בסיבוב הראשון §5 הוא 37 (אי-זוגי), לכן נוסף 1 ל-§6; בסיבוב השני §5=36 (זוגי) ונוסף 0; בשלישי §5=35 ונוסף 1, וכן הלאה.
בין 37 ל-1 (כולל) יש 19 מספרים אי-זוגיים, ולכן כשנגיע ל-`end` יהיה ב-§6 המספר 19."""))

# ---------------------------------------------------------------- 11
questions.append(Q(
    11, "number_bases", r"השבר הבא $[0.F299]_{16}$ שהוא שבר Unsigned בבסיס 16, הומר לבסיס 8. הערך הנכון הינו:",
    opts(("math", r"[0.745144]_8"), ("math", r"[0.745141]_8"), ("math", r"[0.171231]_8"),
         ("math", r"[0.76445]_8"), ("math", r"[0.171233]_8"), ("math", r"[0.171243]_8")), "a",
    r"""נעביר את $[0.F299]_{16}$ לבינארי: $[0.1111\ 0010\ 1001\ 1001]_2$.
עכשיו נהפוך כל 3 סיביות לספרה בבסיס 8 (מוסיפים 2 אפסים מימין): $[0.111\ 100\ 101\ 001\ 100\ 100]_2=[0.745144]_8$."""))

# ---------------------------------------------------------------- 12
questions.append(Q(
    12, "signed_twos_complement",
    "במחבר 2's Comp. של 8 ביט יש יציאה הנדלקת כאשר יש Overflow. באיזה מהחישובים הבאים לא תידלק יציאה זו?",
    opts("`10110111 + 11001110`", "`11100011 - 01100100`", "`00100011 - 10100001`",
         "`11001111 + 10101100`", "`01010111 + 00111001`"), "a",
    r"""התחום המותר הוא $-128\le X\le 127$.
א: $(-73)+(-50)=-123$ - אין גלישה.
ב: $(-29)-100=-129$ - יש גלישה.
ג: $35-(-95)=130$ - יש גלישה.
ד: $(-49)+(-84)=-133$ - יש גלישה.
ה: $87+57=144$ - יש גלישה."""))

# ---------------------------------------------------------------- 13
questions.append(Q(
    13, "mips_assembly_c",
    "הקטע הנתון בשפת אסמבלי של ה-MIPS הוא תרגום של קטע בשפת C.\n" + code([
        "      slt  $1, $5, $4", "lb1:  beq  $1, $0, lb2", "      addi $5, $5, 1", "      addi $4, $4, -1",
        "      slt  $1, $5, $4", "      j    lb1", "lb2:"]) + "\nמהו הקטע הנכון בשפת C?",
    opts(code(["while (a < b) {", "    a++;", "    b--; } ;"], "c"),
         code(["while (a >= b) {", "    a++;", "    b--; } ;"], "c"),
         code(["do{  a++;", "     b--; }  while (a < b);"], "c"),
         code(["do{  a++;", "     b--; }  while (a >= b);"], "c")), "a",
    r"""מתאימים אוגרים: $a=§5$, $b=§4$. ‏`slt §1,§5,§4`: אם $a<b$ אז $§1=1$, אחרת יוצאים (`beq §1,§0,lb2` קופץ ל-`lb2` כש-$§1=0$).
גוף הלולאה: `a++` ו-`b--`, ולאחר מכן שוב `slt §1,§5,§4` (בדיקת התנאי) ו-`j lb1` - חזרה לבדיקה בראש הלולאה.
זו לולאת `while (a<b)` (ב: התנאי הפוך; ג, ד: לולאות do-while שמבצעות את הגוף לפחות פעם אחת, בניגוד לקוד הנתון)."""))

# ---------------------------------------------------------------- 14
questions.append(Q(
    14, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=\bar A\cdot B+\bar A\cdot D+A\cdot\bar B\cdot C\cdot\bar D"),
         ("math", r"F=\bar A\cdot B+\bar A\cdot C+\bar B\cdot C"),
         ("math", r"F=\bar A\cdot B+\bar A\cdot C+\bar C\cdot\bar D"),
         ("math", r"F=A\cdot B+\bar A\cdot C+C\cdot D")), "a",
    r"""לפי המעגל: $F=(\bar A\bar B\bar C)\cdot D+(\bar A\bar BC)\cdot D+(\bar AB\bar C)+(\bar ABC)+(A\bar BC)\cdot\bar D$ (שאר הכניסות הן 0).
נבדוק את משוואה א: $\bar AB+\bar AD+A\bar BC\bar D$. הפיתוח למכפלות מלאות של $\bar AB$ ושל $\bar AD$ נותן בדיוק את המכפלות של $F$ שמכילות $\bar A$, ובנוסף $A\bar BC\bar D$ - לכן המשוואה שווה ל-$F$.
המשוואות האחרות אינן שוות: עבור $ABCD=0010$ המעגל נותן $F=D=0$ ($ABC=001$), ואילו בתשובות ב, ג ו-ד מופיע $\bar AC=1$.""",
    image="images/exams/23B-A-Q14.png"))

# ---------------------------------------------------------------- 15
q15 = [
    r"F=(\bar A\cdot\bar B+A\cdot B)\cdot D+\bar A\cdot B\cdot(\bar C\cdot D+C\cdot\bar D)+A\cdot\bar B\cdot(\bar C\cdot\bar D+C\cdot D)",
    r"F=B\cdot D+A\cdot\bar B\cdot(\bar C\cdot D+C\cdot\bar D)",
    r"F=\bar A\cdot D\cdot(\bar C\cdot D+C\cdot\bar D)+A\cdot B\cdot(\bar C\cdot\bar D+C\cdot D)",
    r"F=(\bar A\cdot\bar B+A\cdot B)\cdot D+\bar A\cdot B\cdot(\bar C\cdot\bar D+C\cdot D)+A\cdot\bar B\cdot(\bar C\cdot D+C\cdot\bar D)",
    r"F=\bar A\cdot\bar B\cdot D+\bar A\cdot B\cdot(\bar C\cdot D+C\cdot\bar D)+A\cdot\bar B\cdot(\bar C\cdot\bar D+C\cdot D)",
]
questions.append(Q(
    15, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(*[("math", t) for t in q15]), "a",
    r"""נמצא את המשוואה מהמעגל: מפענח ה-AB יוצר $X=1$ כאשר $AB=01$ ו-$Y=1$ כאשר $AB=10$.
$AB=00\Rightarrow XY=00\Rightarrow F=D$; $AB=01\Rightarrow XY=10\Rightarrow F=\bar CD+C\bar D$; $AB=10\Rightarrow XY=01\Rightarrow F=\bar C\bar D+CD$; $AB=11\Rightarrow XY=00\Rightarrow F=D$.
$\Rightarrow F=(\bar A\bar B+AB)\cdot D+\bar AB\cdot(\bar CD+C\bar D)+A\bar B\cdot(\bar C\bar D+CD)$ - זו תשובה א.
בכל אחת מהאפשרויות האחרות מתקבל ערך שונה מהמעגל בצירוף כלשהו (הוחלפו הצירופים של $\bar AB$ ו-$A\bar B$ או שחסרים/שונים הגורמים של $AB$ ו-$\bar A\bar B$).""",
    image="images/exams/23B-A-Q15.png",
    note="Option expressions were read at 2x zoom and every option was checked by script against the circuit (only a matches)."))

# ---------------------------------------------------------------- 16
questions.append(Q(
    16, "arithmetic_circuits",
    "בידנו מעגל הכופל את המספר השלם מטיפוס unsigned בן ארבע סיביות $[a_3,a_2,a_1,a_0]_2$ במספר 29 (גם כן unsigned) המיוצג על ידי $[11101]_2$. "
    "המכפל בנוי מרכיבי HA (כלומר Half-Adder) ורכיבי FA (כלומר Full-Adder). עלינו לספור את מספר הרכיבים ומספר היציאות. "
    "אנו כמובן מעדיפים מספר מינימלי של רכיבים (במקום FA לכאורה אפשר להשתמש בשני HA. אם יש כזה מקרה – נעדיף את ה- FA הבודד)\n"
    "מה נכון?",
    opts("יש במכפל 3 רכיבי HA ו-7 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 3 רכיבי HA ו-7 רכיבי FA ויש לו 8 יציאות",
         "יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 8 יציאות",
         "יש במכפל 4 רכיבי HA ו-7 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 8 יציאות"), "a",
    r"""מכיוון ש-$29=[11101]_2$, מחברים ארבע שורות: $A\cdot 2^0,\ A\cdot 2^2,\ A\cdot 2^3,\ A\cdot 2^4$ (השורות המתאימות לביטים השווים 1).
מתקבלים $3\times$HA ו-$7\times$FA, ויש 9 יציאות ($y_0\ldots y_8$).""",
    note="No circle is visible on the option list of this question; the key (option a) is read from the lecturer's worked page (3xHA + 7xFA, 9 outputs) and the counts were recomputed by script."))

# ---------------------------------------------------------------- 17
questions.append(Q(
    17, "mips_machine_code", "התרגום של הפקודה `addi §gp, §sp, -400`  לשפת המכונה של ה-MIPS הינו:",
    opts("0x23BCFE70", "0x23BCF400", "0x239DFE70", "0x239DF400", "0x239D0190", "0x23BC0190"), "a",
    r"""התחביר: `addi §Rt, §Rs, imm`. opcode של `addi` הוא $8=001000$, $Rs=§sp=§29=11101$, $Rt=§gp=§28=11100$.
$400=256+128+16=[0000\,0001\,1001\,0000]_2$, ולכן $-400=\langle 1111\,1110\,0111\,0000\rangle=\texttt{0xFE70}$.
$001000\ |\ 11101\ |\ 11100\ |\ \texttt{FE70}\Rightarrow\texttt{0x23BCFE70}$."""))

# ---------------------------------------------------------------- 18
questions.append(Q(
    18, "datapath_control",
    "במעבד ה- MIPS Single Cycle שלמדנו מי מהצירופים הרשומים מטה של אותות הבקרה נכון לפקודת lw? (יש ציור של המעבד בנספח לבחינה)",
    opts("ALUOp=00 (add);  MemRead=1;  RegWrite=1;  RegDst=0",
         "ALUOp=00 (add);  MemWrite=1;  RegWrite=0;  RegDst=0",
         "ALUOp=10 (func);  MemRead=1;  RegWrite=1;  RegDst=0",
         "ALUOp=10 (func);  MemRead=1;  RegWrite=0;  RegDst=1",
         "ALUOp=00 (add);  MemRead=1;  RegWrite=1;  RegDst=1",
         "ALUOp=10 (func);  MemRead=1;  RegWrite=1;  RegDst=1"), "a",
    r"""בפקודת `lw` הפקודה מחשבת כתובת (ALUOp=00, חיבור), MemRead=1, MemWrite=0, MemToReg=1, RegDst=0 (היעד הוא Rt), RegWrite=1, Branch=0, Jump=0.
רק האפשרות א מתאימה: ב כוללת MemWrite=1 ו-RegWrite=0; ג, ד, ו משתמשות ב-ALUOp=10 (func); ה ו-ו משתמשות ב-RegDst=1.""",
    image="images/exams/23B-A-Q18.png",
    note="Datapath figure is a low-resolution source scan; control-signal labels in it are not legible in the source. Only the control signals used by the options are named in the explanation."))

# ---------------------------------------------------------------- 19
questions.append(Q(
    19, "mips_machine_code", "הפקודה `0x03F5182A` בשפת מכונה של ה-MIPS הינה בעצם פקודת האסמבלי הבאה:",
    opts("`slt $v1, $ra, $s5`", "`slt $ra, $s5, $v1`", "`add $v1, $ra, $s5`", "`add $v1, $ra, $s5`",
         "`beq $ra, $s5, 0x182A`", "`bne $ra, $s5, 0x182A`"), "a",
    r"""`0x03F5182A` $=\ 000000\ |\ 11111\ |\ 10101\ |\ 00011\ |\ 00000\ |\ 101010$.
opcode $=0\Rightarrow$ R-type; $Rs=31=§ra$, $Rt=21=§s5$, $Rd=3=§v1$, shamt $=0$, funct $=\texttt{0x2A}=42=\text{slt}$.
$\Rightarrow$ `slt §v1, §ra, §s5`""",
    note="Options c and d are printed identically ('add $v1, $ra, $s5'); transcribed as printed. No circle on this page; the key is read from the lecturer's worked page and recomputed by script."))

# ---------------------------------------------------------------- 20
C20 = ["ptr = &array[0];", "a= *ptr;", "for(i=0;i<size-1;i++);", " {", "  ptr++;", "  if (*ptr > a) a += *ptr;", "}"]
ASM20 = ["      add  $7, $0, $4", "      lw   $8, 0($7)", "      addi $6, $0, 0", "      addi $10, $5, -1", "lp:   slt  $9, $6, $10",
         "      beq  $9, $0, lb1", "      addi $7, $7, 4", "      lw   $9, 0($7)", "      slt  $11, $8, $9", "@@@@@@@"]
O20 = [
    ["      beq  $11, $0, lb2", "      add  $8, $9, $8", "lb2:  addi $6, $6, 1", "      j    lp", "lb1:"],
    ["      bne  $11, $0, lb2", "      add  $8, $9, $8", "lb2:  addi $6, $6, 1", "      j    lp", "lb1:"],
    ["      bne  $0, $11, lb2", "      add  $8, $9, $8", "lb1:  addi $6, $6, 1", "      j    lp", "lb2:"],
    ["      beq  $0, $11, lb2", "      add  $8, $9, $8", "lb1:  addi $6, $6, 1", "      j    lp", "lb2:"],
    ["      slt  $1, $11, $0", "      bne  $1, $0, lp", "      add  $8, $9, $8", "      addi $6, $6, 1", "      j    lp", "lb1:"],
    ["      slt  $1, $11, $0", "      bne  $1, $0, lb1", "      add  $8, $9, $8", "      addi $6, $6, 1", "      j    lp", "lb1:"],
]
questions.append(Q(
    20, "mips_assembly_c",
    "קטע ה- C הבא תורגם לשפת הסף (אסמבלי) של מחשב MIPS. הנח כי כתובת ההתחלה של array נמצאת באוגר §4. הערך size שהוא גודל המערך נמצא באוגר §5. "
    "המערך הינו מערך של מילים (Words=4 bytes). אוגרים §4 ו- §5 צריכים להישאר ללא שינוי.\n"
    + code(C20, "c") + "\nלהלן התרגום:\n" + code(ASM20) + "\nסוף התרגום, במקום המסומן ב- `@@@@@@@`, חסר. מהו הקטע החסר?",
    opts(*[code(o) for o in O20]), "a",
    r"""התרגום: §7 הוא `ptr`, §8 הוא `a`, §6 הוא `i`, §10 הוא `size-1`; `slt §9,§6,§10` בודק `i<size-1` ואם לא - יוצאים ל-`lb1`. בגוף: `ptr++` ו-`§9=*ptr`, ו-`slt §11,§8,§9` נותן `§11=1` אם `*ptr>a`.
הקטע החסר: `beq §11,§0,lb2` - אם `§11=0` מדלגים; אחרת `add §8,§9,§8` (`a += *ptr`); ‏`lb2: addi §6,§6,1` (`i++`) ו-`j lp` (חזרה לבדיקה).
ב: התנאי הפוך; ג, ד: התנאי הפוך והוחלפו `lb1` ו-`lb2` (וקפיצה ל-`lb2` יוצאת מהלולאה); ה, ו: התנאי כאן לא רלוונטי (`§11` הוא 0 או 1, ולכן `slt §1,§11,§0` תמיד נותן 0) ותמיד נקפוץ/לא נקפוץ בצורה שגויה.""",
    note="The printed C code has a stray ';' after the for header, kept as printed (it does not affect the key, which follows the lecturer's reading of the loop body)."))

exam = {
    "examCode": "23B-A",
    "examLabel": "2023 סמסטר א מועד ב",
    "year": 2023,
    "examDate": "2.03.2023",
    "sourceFile": "sitting 23B-A (20 MCQ pages with circled options)",
    "keyFile": "sitting 23B-A (circled options and handwritten working on the same pages)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
