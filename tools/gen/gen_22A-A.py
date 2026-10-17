# -*- coding: utf-8 -*-
"""Generator for tools/raw/22A-A.json -- computer-systems, 2022 semester A, moed A (21.06.2022).
Run: PYTHONUTF8=1 py tools/gen/gen_22A-A.py

Source: sitting 22A-A pp.2-11 (20 MCQ x 5 pts) with the lecturer's circled options; pp.12-24 are his handwritten
solution pages. The circle is on the first option (a) in every question. Literal MIPS register dollars in plain text
are written with the section sign (reg() turns it into an escaped dollar); inside fenced code a plain $ is fine.
Keys checked by script (tools/verify/22A-A/check.py): Q1 Q2 Q4 Q5 Q9 Q10 Q11 Q12 Q13 Q14 Q15 Q16 Q17 Q19 recomputed
and agree; Q6 Q7 Q8 Q18 Q20 by reasoning. Handwritten Hebrew commentary is reconstructed from the solution pages."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "22A-A.json"
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
    opts(("math", r"(A\oplus B)+(A\oplus C)=A\oplus(B+C)"),
         ("math", r"(A\oplus B)\oplus(A\oplus C)=\bar B\oplus\bar C"),
         ("math", r"(A\oplus B)\oplus(C\oplus\bar E)\oplus\overline{(D\oplus C)}\oplus(\bar B\oplus D)=(A\oplus C)\oplus(\bar C\oplus E)"),
         ("math", r"\overline{D\cdot A}+\overline{B\cdot C}=A\cdot(B\cdot(C\cdot\bar D+\bar C)+\bar B)+\bar A")), "a",
    r"""א: $(A\oplus B)+(A\oplus C)=\bar AB+A\bar B+\bar AC+A\bar C=\bar AB+\bar AC+A(\bar B+\bar C)$, ואילו $A\oplus(B+C)=\bar A(B+C)+A\cdot\overline{(B+C)}=\bar AB+\bar AC+A\bar B\bar C$. מכיוון ש-$\bar B\bar C\ne\bar B+\bar C$ - המשוואה אינה נכונה.
ב: $(A\oplus B)\oplus(A\oplus C)=B\oplus C=\bar B\oplus\bar C$ - נכונה.
ג: שני הצדדים שווים ל-$\overline{A\oplus E}$ - נכונה.
ד: $\bar A+\bar D+\bar B+\bar C=\bar A+\bar B+\bar C+\bar D$, וגם אגף ימין מצטמצם לאותו ביטוי (לפי $X+\bar XY=X+Y$) - נכונה."""))

# 2
questions.append(Q(
    2, "mips_machine_code", "מה יהיה באוגר §3 אחרי ביצוע הפקודות הבאות:\n" +
    fence(["addi $5, $0, 0x8888", "lui  $3, 0x8FFF", "add  $5, $5, $5", "add  $3, $5, $3"]),
    opts("0x8FFE1110", "0X1FFE8FFE", "0x80001110", "0X0FFF1FFE", "0X0FFF8FFE", "0x8FFE8FFE"), "a",
    r"""אחרי addi: $§5=\texttt{0xFFFF8888}$ (הרחבת סימן). אחרי lui: $§3=\texttt{0x8FFF0000}$.
אחרי ה-add הראשון: $§5=\texttt{0xFFFF1110}$; אחרי ה-add השני: $§3=\texttt{0xFFFF1110}+\texttt{0x8FFF0000}=\texttt{0x8FFE1110}$."""))

# 3
questions.append(Q(
    3, "floating_point",
    "חיברנו שני מספרים המיוצגים ב- Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר). מהי התשובה השגויה?",
    opts("אם שני המחוברים מנורמלים אז בטוח שנקבל מספר מנורמל",
         "אם שני המחוברים מנורמלים ייתכן שהתוצאה היא אינסוף",
         "אם שני המחוברים לא מנורמלים ייתכן שהתוצאה היא מספר מנורמל",
         "אם אחד המחוברים מנורמל והשני לא, ייתכן שהתוצאה היא מספר לא מנורמל",
         "ייתכן שתוצאת החיבור היא 0."), "a",
    """א שגויה: כששני המחוברים מנורמלים אפשר לקבל 0 (למשל x ועוד מינוס x), ו-0 אינו מספר מנורמל.
ב נכונה: סכום של שני מספרים גדולים יכול לגלוש לאינסוף.
ג נכונה: שני מספרים לא מנורמלים (דנורמליים) יכולים לתת סכום שהוא כבר מנורמל.
ד, ה נכונות."""))

# 4
questions.append(Q(
    4, "number_bases",
    r"מהו ערכו העשרוני של השבר האינסופי $[0.143\ 143\ 143\ 143\ldots]_5$ בבסיס 5?",
    opts("12/31", "13/32", "121/312", "14/125", "48/125", "3/8"), "a",
    r"""$X=[0.143\ 143\ \ldots]_5$. $5^3X-X=[143]_5=1\cdot25+4\cdot5+3=48$, ולכן $X=\frac{48}{124}=\frac{12}{31}$."""))

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
    r"""א: $42\frac{22}{64}=0101010.010110$, ולכן $-42\frac{22}{64}=1010101.101010$ - כאן $X_{-2}=0$ ולא "1", ולכן $\langle X\rangle$ לא יכול להיות המספר הזה - הטענה לא נכונה.
ב: $-\frac34=1111111.010000$ - הסיביות $X_4,X_2,X_{-2}$ הן "1": יכול להיות.
ג: $-42\frac{43}{64}=1010101.010101$ - יכול להיות.
ד: $60\frac12=0111100.100000$ - $X_2=1$, $X_4=1$ אך $X_{-2}=0$ - לא יכול להיות (הטענה נכונה).
ה: $-30\frac12=1100001.100000$ - לא יכול להיות (הטענה נכונה).
ו: $-\frac1{64}=1111111.111111$ - יכול להיות."""))

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
    r"""ב-12 סיביות, 7 מהן אחרי הנקודה: unsigned $0\ \ldots\ (2^{12}-1)\cdot2^{-7}=2^5-2^{-7}$; signed מ-$-2^{11}\cdot2^{-7}=-2^4$ ועד $2^4-2^{-7}$. כלומר תשובה א.""",
    note="Stem sentence transcribed as printed ('כמספרים לא מכוונים וכמספרים מכוונים')."))

# 7
questions.append(Q(
    7, "floating_point",
    "ב Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר), כמה מספרים רצופים שהמרחק ביניהם הינו 4 קיימים?",
    opts(r"יש שתי קבוצות של $2^{23}+1$ מספרים רצופים שהמרחק ביניהם הוא 4",
         r"יש ארבע קבוצות של $2^{23}+1$ מספרים רצופים שהמרחק ביניהם הוא 4",
         r"יש רק קבוצה אחת של $2^{23}+1$ מספרים רצופים שהמרחק ביניהם הוא 4",
         r"יש שתי קבוצות של $2^{24}+1$ מספרים רצופים שהמרחק ביניהם הוא 4",
         r"יש ארבע קבוצות של $2^{24}+1$ מספרים רצופים שהמרחק ביניהם הוא 4",
         r"יש רק קבוצה אחת של $2^{24}+1$ מספרים רצופים שהמרחק ביניהם הוא 4"), "a",
    r"""המרחק בין מספרים סמוכים ב-floating point תלוי באקספוננט: $\Delta=2^{E-127}\cdot2^{-23}$. המרחק 4 מתקבל רק עבור אקספוננט אחד, ובו $2^{23}+1$ מספרים רצופים (כולל הקצה של הקבוצה).
יש שתי קבוצות כאלה (סימן חיובי וסימן שלילי) - תשובה א."""))

# 8
questions.append(Q(
    8, "datapath_control",
    "אילו הוספנו למעבד ה-MIPS שמימשנו בהרצאות פקודת bge, שקופצת ל- PC+4+imm*4 אם הערך שבאוגר Rs גדול או שווה לערך שבאוגר Rt, אילו שלבים היו מתבצעים במהלך ביצוע הפקודה הזו?\n"
    "(למשל bge §8, §2, 0x101 שאמורה לבצע PC=PC+0x408 אם GPR[8]>=GPR[2] ו- PC=PC+4 אם לא)",
    opts("Fetch, Decode, ALU", "Fetch, Decode, ALU, Memory, Write-Back", "Fetch, Decode, Memory",
         "Fetch, Decode, ALU, Write-Back"), "a",
    """פקודת bge מתנהגת כמו beq: Fetch, Decode, ALU (לשם ההשוואה). אין גישה לזיכרון (Memory) ואין כתיבה לאוגר (Write-Back), כי התוצאה נכנסת ל-PC ולא ל-GPR."""))

# 9
questions.append(Q(
    9, "latches_flipflops",
    "לפניכם ארבעה דלגלגים (FF-ים), המחוברים בצורת אוגר הזזה (Shift Register). הכניסה משמאל (ל-D3) מחוברת ליציאת שער XOR, "
    "המבצע פעולת XOR בין Q0 להיפוך של Q3. הערך באוגר ההזזה הוא: [Q3, Q2, Q1, Q0] = [0, 1, 0, 1] כמצויר. מה יהיה הערך אחרי 5 עליות שעון?",
    opts(("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,0,1,1]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,1,1,0]"),
         ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,0,1,0]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,1,0,1]"),
         ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,1,0,1]")), "a",
    r"""$D_3=\bar Q_3\oplus Q_0$ (שווה 1 כש-$Q_3=Q_0$ ו-0 כשהם שונים); שאר הדלגלגים מזיזים ימינה.
$[0,1,0,1]\to[0,0,1,0]\to[1,0,0,1]\to[1,1,0,0]\to[0,1,1,0]\to[1,0,1,1]$. אחרי 5 עליות: $[1,0,1,1]$.""",
    image="images/exams/22A-A-Q9.png"))

# 10
questions.append(Q(
    10, "mips_assembly_c", "מהו תרגום נכון באסמבלי של ה-MIPS לשורת ה-C: a = 4*a - 3*b;",
    opts(fence(["sub $4, $4, $6", "add $4, $4, $4", "add $4, $4, $4", "add $4, $4, $6"]),
         fence(["add $4, $4, $4", "add $4, $4, $4", "sub $4, $4, $6", "add $6, $6, $6", "sub $4, $4, $6"]),
         fence(["sub $6, $6, $4", "sub $6, $6, $4", "sub $6, $6, $4", "add $6, $6, $6", "add $6, $6, $6"]),
         fence(["add $6, $6, $6", "add $6, $6, $6", "sub $6, $6, $4", "add $4, $4, $4", "sub $6, $6, $4"])), "a",
    """א (a ב-§4, b ב-§6): sub §4,§4,§6 (a=a-b); add §4,§4,§4 (a=2a-2b); add §4,§4,§4 (a=4a-4b); add §4,§4,§6 (a=4a-3b) - נכון, ו-b נשאר ללא שינוי.
ב, ד: מכפילים את b (b=2b) באמצע - b נהרס, ולכן אין זה תרגום נכון.
ג: מתקבל 4a-12b.""",
    confidence="med",
    note="The stem prints no register mapping (the solution page assigns a and b per option). By script, options b and d also end with 4a-3b but overwrite b; the lecturer rejects them for that. Official key a kept."))

# 11
questions.append(Q(
    11, "number_bases",
    r"המספר הבא $[623]_7$ שהוא מספר Unsigned בבסיס 7, הומר לבסיס 3. מהו הערך הנכון?",
    opts(("math", r"[102112]_3"), ("math", r"[211201]_3"), ("math", r"[22112]_3"),
         ("math", r"[21201]_3"), ("math", r"[102121]_3"), ("math", r"[121201]_3")), "a",
    r"""$[623]_7=6\cdot49+2\cdot7+3=311$. חילוקים ב-3: $311=3\cdot103+2$, $103=3\cdot34+1$, $34=3\cdot11+1$, $11=3\cdot3+2$, $3=3\cdot1+0$, $1=3\cdot0+1$.
לכן $[102112]_3$; בדיקה: $243+54+9+3+2=311$."""))

# 12
questions.append(Q(
    12, "signed_twos_complement",
    "במחבר 2's Comp. של 8 ביט יש יציאה הנדלקת כאשר יש Overflow. באיזה מהחישובים הבאים לא תידלק יציאה זו?",
    opts("`10110000 + 11010111`", "`10111000 + 10110111`", "`01011011 + 00110101`",
         "`01011001 - 10011011`", "`10110010 + 10111110`"), "a",
    r"""התחום ב-8 ביט הוא $-128\le X\le127$.
א: $(-80)+(-41)=-121$ - אין גלישה.
ב: $(-72)+(-73)=-145$ - גלישה.
ג: $91+53=134$ - גלישה.
ד: $89-(-101)=190$ - גלישה.
ה: $(-78)+(-66)=-144$ - גלישה."""))

# 13
questions.append(Q(
    13, "mips_assembly_c",
    "אחד מהתרגומים הבאים בשפת אסמבלי של ה-MIPS לקטע ה-C הבא נכון. מהו התרגום הנכון?\n" + fence(["if (a >= b) a = 2*a;", "else b=2*b;"], "c"),
    opts(fence(["      slt $1, $3, $4", "      beq $1, $0, lab1", "      add $4, $4, $4", "      beq $0, $0, end", "lab1: add $3, $3, $3", "end:"]),
         fence(["      slt $1, $3, $4", "      bne $1, $0, lab1", "      add $4, $4, $4", "      beq $0, $0, end", "lab1: add $3, $3, $3", "end:"]),
         fence(["      slt $1, $4, $3", "      bne $1, $0, lab1", "      add $3, $3, $3", "      beq $0, $0, end", "lab1: add $4, $4, $4", "end:"]),
         fence(["      slt $1, $3, $4", "      beq $1, $0, lab1", "      add $3, $3, $3", "      beq $0, $0, end", "lab1: add $4, $4, $4", "end"])), "a",
    """לפי הפתרון a הוא §3 ו-b הוא §4.
`slt §1,§3,§4`: §1=1 אם a<b ו-§1=0 אם a>=b. `beq §1,§0,lab1` קופץ ל-lab1 כש-a>=b ושם a=2a (`add §3,§3,§3`); אחרת מבצעים b=2b ו-`beq §0,§0,end` קופץ לסוף.
ב: ההפך (bne) - שגוי. ג: slt בין §4 ל-§3 עם bne מחליף את הפעולות. ד: בענף ה-a>=b מכפילים את b ולא את a - שגוי."""))

# 14
questions.append(Q(
    14, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=A\cdot\bar C+\bar C\cdot D+\bar A\cdot C"),
         ("math", r"F=\bar C\cdot D+A\cdot\bar C+\bar B\cdot C"),
         ("math", r"F=\bar A\cdot\bar C+\bar C\cdot D+A\cdot B"),
         ("math", r"F=A\cdot\bar C+\bar A\cdot B+\bar A\cdot C")), "a",
    r"""פיתוח לפי כניסות הנתונים של המולטיפלקסר: $F=\bar A\bar B\bar C\cdot D+\bar A\bar BC\cdot1+\bar AB\bar C\cdot D+\bar ABC\cdot1+A\bar B\bar C\cdot1+A\bar BC\cdot0+AB\bar C\cdot1+ABC\cdot0=A\bar C+\bar CD+\bar AC$.
ב: המכפלה $\bar BC$ נותנת "1" עבור $A\bar BC$, אך במעגל הכניסה 101 היא 0. ג: המכפלה $AB$ נותנת "1" עבור $ABC=111$, אך הכניסה במעגל היא 0. ד: עבור $ABCD=0100$ הביטוי $\bar AB$ הוא 1 אך $F=D=0$.""",
    image="images/exams/22A-A-Q14.png"))

# 15
questions.append(Q(
    15, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=A\cdot\bar C+\bar A\cdot B+\bar A\cdot D"),
         ("math", r"F=\bar C\cdot D+B\cdot(\bar A\cdot B+\bar C)+\bar A\cdot\bar B\cdot C\cdot\bar D"),
         ("math", r"F=\bar C\cdot\bar D+A\cdot B+\bar A\cdot\bar B\cdot C\cdot D"),
         ("math", r"F=\bar C\cdot D+B\cdot\bar C\cdot\bar D+A\cdot D+\bar A\cdot\bar B\cdot C")), "a",
    r"""מהמעגל: $F=\bar C\bar D(A+\bar AB)+\bar CD\cdot1+C\bar D(\bar AB)+CD(\bar A\bar B+\bar AB)$, ובפיתוח למכפלות מלאות מתקבל $A\bar C+\bar AB+\bar AD$.
ב: עבור $ABCD=0010$ המכפלה $\bar A\bar BC\bar D$ נותנת "1" אך במעגל $F=0$. ג: עבור $A=B=C=D=0$ המכפלה $\bar C\bar D$ נותנת "1" אך $F=0$. ד: עבור $ABCD=0010$ המכפלה $\bar A\bar BC$ נותנת "1" אך $F=0$.""",
    image="images/exams/22A-A-Q15.png"))

# 16
questions.append(Q(
    16, "arithmetic_circuits",
    "בידנו מעגל הכופל את המספר השלם מטיפוס unsigned בן חמש סיביות $[a_4,a_3,a_2,a_1,a_0]_2$ במספר 13 (גם כן unsigned). "
    "המכפל בנוי מרכיבי HA (כלומר Half-Adder) ורכיבי FA (כלומר Full-Adder). עלינו לספור את מספר הרכיבים ומספר היציאות. "
    "אנו כמובן מעדיפים מספר מינימלי של רכיבים (במקום FA לכאורה אפשר להשתמש בשני HA. אם יש כזה מקרה - נעדיף את ה- FA הבודד)\n"
    "מה נכון?",
    opts("יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 8 יציאות",
         "יש במכפל 6 רכיבי HA ו-4 רכיבי FA ויש לו 8 יציאות",
         "יש במכפל 6 רכיבי HA ו-4 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 8 יציאות"), "a",
    r"""$13=[1101]_2$, ולכן מחברים שלוש שורות: $A\cdot2^0,\ A\cdot2^2,\ A\cdot2^3$. מתקבלים $6\times$FA ו-$4\times$HA, ויש 9 יציאות ($y_0\ldots y_8$)."""))

# 17
questions.append(Q(
    17, "mips_machine_code",
    "התרגום של הפקודה `addi $t8, $s6, -333` לשפת מכונה של ה-MIPS הינו:",
    opts("0x22D8FEB3", "0x22D8F333", "0x2316FEB3", "0x2316F333"), "a",
    r"""opcode של addi הוא 8, $\text{Rt}=§t8=§24$, $\text{Rs}=§s6=§22$. $333=\texttt{0x14D}$, ולכן $-333=\texttt{0xFEB3}$.
$001000\ |\ 10110\ |\ 11000\ |\ 1111\,1110\,1011\,0011\Rightarrow\texttt{0x22D8FEB3}$."""))

# 18
questions.append(Q(
    18, "datapath_control",
    "במעבד ה- MIPS Single Cycle שלמדנו מי מהצירופים הרשומים מטה של אותות הבקרה נכון לפקודת slt? (יש ציור של המעבד בנספח לבחינה)",
    opts("ALUOp=10 (func); jump=0; RegWrite=1; Branch=0",
         "ALUOp=01 (sub); RegDst=1; RegWrite=1; Branch=0",
         "ALUOp=01 (sub); MemtoReg=0; RegWrite=1; Branch=1",
         "ALUOp=10 (func); jump=0; RegWrite=0; Branch=1",
         "ALUOp=01 (sub); MemtoReg=0; RegWrite=1; Branch=0",
         "ALUOp=10 (func); MemtoReg=1; RegWrite=1; Branch=0"), "a",
    """slt היא פקודת R-type: ALUOp=10 (func), ALUSrc=0, MemRead=MemWrite=0, RegDst=1, RegWrite=1, MemtoReg=0, Jump=0, Branch=0.
ב, ה: ALUOp=01 שייך ל-beq. ג, ד: Branch=1 או RegWrite=0 אינם מתאימים. ו: MemtoReg=1 שייך ל-lw.""",
    image="images/exams/22A-A-Q18.png",
    note="Datapath figure is a low-resolution source scan; control-signal labels in it are not legible."))

# 19
questions.append(Q(
    19, "mips_machine_code",
    "הפקודה `0xAFDD0822` בשפת מכונה של ה-MIPS הינה בעצם פקודת האסמבלי הבאה:",
    opts("`sw $sp, 0x822($fp)`", "`sub $at, $fp, $sp`", "`addi $sp, $fp, 0x822`", "`addi $sp, $fp, 2082`",
         "`and $fp, $sp, $at`", "`and $at, $fp, $sp`"), "a",
    r"""$\texttt{0xAFDD0822}=101011\ |\ 11110\ |\ 11101\ |\ 0000\,1000\,0010\,0010$.
opcode $=43=\text{sw}$, $\text{Rs}=§30=§fp$, $\text{Rt}=§29=§sp$, imm $=\texttt{0x822}$ $\Rightarrow$ `sw §sp, 0x822(§fp)`""",
    note="Options c (0x822) and d (2082) are the same immediate written two ways, both addi; transcribed as printed."))

# 20
C20 = ["for(i=0;i<size;i++);", " {", "  if (array[i]>99) array[i] -= 1;", " }"]
ASM_A = ["    addi $6, $0, 0", "    addi $7, $0, 99", "loop:", "    slt  $8,$6,$5", "    beq  $8,$0,cont", "    add  $8,$6,$6",
         "    add  $8,$8,$8", "    add  $8,$8,$4", "    lw   $9,0($8)"]
ASM_B = ["nxt: addi $6,$6,1", "     j    loop", "cont:"]
questions.append(Q(
    20, "mips_assembly_c",
    "קטע ה- C הבא תורגם לשפת הסף (אסמבלי) של מחשב MIPS. הנח כי כתובת ההתחלה של array נמצאת באוגר §4. "
    "הערך size שהוא גודל המערך נמצא באוגר §5. המערך הינו מערך של מילים (Words=4 bytes). אוגרים §4 ו- §5 צריכים להישאר ללא שינוי.\n"
    + fence(C20, "c") + "\nלהלן התרגום:\n" + fence(ASM_A + ["@@@@@@@"] + ASM_B) + "\n"
    "מהתרגום נשמטו פקודות במקום המסומן ב- @@@@@@@.\nהפקודות החסרות הן:",
    opts(fence(["slt   $10, $7, $9", "beq   $10, $0, nxt", "addi  $9, $9, -1", "sw    $9, 0($8)"]),
         fence(["slt   $10, $7, $9", "bne   $10, $0, nxt", "addi  $9, $9, -1", "sw    $9, 0($8)"]),
         fence(["slt   $10, $9, $7", "beq   $10, $0, nxt", "addi  $9, $9, -1", "sw    $9, 0($8)"]),
         fence(["slt   $8, $7, $9", "beq   $8, $0, nxt", "addi  $9, $9, -1", "sw    $9, 0($8)"])), "a",
    """§6 הוא i ו-§7=99. `slt §10,§7,§9` נותן §10=1 אם 99<array[i]; אם §10=0 מדלגים (`beq §10,§0,nxt`), אחרת array[i]=array[i]-1 ונכתב חזרה.
ב: מדלג כשצריך לבצע (הפוך). ג: בודק array[i]<99 ולא >99. ד: דורס את §8 שהוא כתובת האיבר, ולכן ה-sw כותב לכתובת לא נכונה.""",
    note="The printed C line ends 'i++);' with a stray semicolon after the for header; transcribed as printed."))

exam = {
    "examCode": "22A-A",
    "examLabel": "2022 סמסטר א מועד א",
    "year": 2022,
    "examDate": "21.06.2022",
    "sourceFile": "sitting 22A-A (exam pages 2-11)",
    "keyFile": "sitting 22A-A pp.2-11 (circled options) + pp.12-24 (handwritten solution)",
    "contexts": {},
    "questions": questions,
}
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
