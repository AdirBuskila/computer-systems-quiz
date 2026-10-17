# -*- coding: utf-8 -*-
"""Generator for tools/raw/23A-A.json -- computer-systems, 2023 semester A, moed A (06.02.2023).
Run: PYTHONUTF8=1 py tools/gen/gen_23A-A.py

Source: sitting 23A-A, 25 pages: p.1 cover (lecturer names there are NOT copied), pp.2-25 one question per page
(Q14, Q15 and Q20 continue onto the next page) with the lecturer's circled option and handwritten working. The circle is
on option a in every question. Literal MIPS register dollars in plain text are written with the section sign (reg()
escapes them); inside fenced code a plain $ is fine.
Keys checked by script (tools/verify/23A-A/check.py): Q1 Q2 Q3 Q4 Q5 Q7 Q9 Q10 Q11 Q12 Q13 Q14 Q15 Q16 Q17 Q19 Q20
recomputed and agree; Q6 Q8 Q18 by reasoning. Handwritten Hebrew commentary is reconstructed from the solution pages."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "23A-A.json"
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
    1, "boolean_algebra", "מי מהמשוואות הבאות נכונה?",
    opts(("math", r"(A\oplus B)\cdot(B\oplus C)\cdot(C\oplus A)=A\oplus\left(A\oplus B\oplus\left(B\oplus\left(\overline{C\oplus\bar C}\right)\right)\right)"),
         ("math", r"A\oplus B\oplus C=(A\oplus B)\cdot(A\oplus C)"),
         ("math", r"A\oplus(B+C)=(A\oplus B)+(A\oplus C)"),
         ("math", r"A\oplus(B\cdot C)=(A\oplus B)\cdot(A\oplus C)")), "a",
    r"""א: אגף שמאל: $(A\oplus B)(B\oplus C)(C\oplus A)=(\bar AB\bar C+A\bar BC)(\bar AC+A\bar C)=0$. אגף ימין: $C\oplus\bar C=1$, ולכן $\overline{C\oplus\bar C}=0$, ו-$A\oplus(A\oplus B\oplus B\oplus0)=A\oplus A=0$ - שני האגפים שווים ל-0, נכונה.
ב: $A\oplus B\oplus C=\bar ABC+A\bar B\bar C+\bar AB\bar C+ABC$, ואילו $(A\oplus B)(A\oplus C)=\bar ABC+A\bar B\bar C$ - שגויה.
ג: $A\oplus(B+C)=\bar AB+\bar AC+A\bar B\bar C$, ואילו $(A\oplus B)+(A\oplus C)=\bar AB+\bar AC+A(\bar B+\bar C)$ - שגויה.
ד: $A\oplus(BC)=\bar ABC+A(\bar B+\bar C)$, ואילו $(A\oplus B)(A\oplus C)=\bar ABC+A\bar B\bar C$ - שגויה.""",
    note="Stem asks which equation is TRUE (נכונה). In option a the overline spans the whole (C xor C-bar) term; read as printed."))

# 2
questions.append(Q(
    2, "mips_machine_code", "מה יהיה באוגר §3 אחרי ביצוע הפקודות הבאות:\n" +
    fence(["lui   $3, 0x1248", "addi  $3, $3, 0xFFFF", "addi  $3, $3, 0x1248", "addi  $3, $3, 0x8421"]),
    opts("0x12479668", "0x12479667", "0x12497658", "0x12497657", "0x12497659", "0x12481267"), "a",
    r"""אחרי lui: $§3=\texttt{0x12480000}$. הפקודה addi מרחיבה בסימן: $\texttt{0xFFFF}\to\texttt{0xFFFFFFFF}$ ולכן $§3=\texttt{0x1247FFFF}$.
הוספת $\texttt{0x00001248}$: $§3=\texttt{0x12481247}$. הוספת $\texttt{0xFFFF8421}$ (הרחבת סימן): $§3=\texttt{0x12479668}$."""))

# 3
questions.append(Q(
    3, "floating_point",
    r"המספר $\frac{1}{7}$ בבסיס 2 הוא השבר הבינארי האינסופי $[0.001\ 001\ 001\ldots]_2$." + "\n"
    r"כיצד ייוצג המספר $-17\frac{1}{7}$ בייצוג Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר) ?",
    opts("0xC1892492", "0xC1892493", "0xC1892491", "0x82892492", "0x82892493", "0x82892491"), "a",
    r"""$17\frac17=[10001.001001001\ldots]_2=2^4\cdot1.0001\,001001001\ldots$. $E-127=4\Rightarrow E=131$, והסימן הוא 1.
השדות: $1\ |\ 10000011\ |\ 000\,1001\,0010\,0100\,1001\,0010$ (הסיביות הבאות $001\ldots$ ולכן מעגלים כלפי מטה) $\Rightarrow\texttt{0xC1892492}$."""))

# 4
questions.append(Q(
    4, "number_bases",
    r"מהו ערכו העשרוני של השבר האינסופי $[0.112\ 12\ 12\ 12\ \ldots]_3$ בבסיס 3?",
    opts("13/24", "27/50", "5/24", "5/8", "23/24", "23/25"), "a",
    r"""$X=[0.1\,12\,12\,12\ldots]_3=[0.1]_3+Y=\frac13+Y$, כאשר $Y=[0.0\,12\,12\,12\ldots]_3$.
$3^2Y=[1.2\,12\,12\ldots]_3=1\frac23+Y\Rightarrow9Y=\frac53+Y\Rightarrow8Y=\frac53\Rightarrow Y=\frac5{24}$.
$X=\frac13+\frac5{24}=\frac8{24}+\frac5{24}=\frac{13}{24}$."""))

# 5
questions.append(Q(
    5, "signed_twos_complement",
    "X הוא מספר 2's complement בן 13 סיביות מהן 6 הם מימין לנקודה הבינרית. כלומר:\n"
    r"$X=\langle X_6,X_5,X_4,X_3,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4},X_{-5},X_{-6}\rangle$" + "\n"
    r'סיביות $X_4$, $X_1$ ו- $X_{-3}$ הן "1". מה לא נכון:',
    opts(r"$\langle X\rangle$ יכול להיות $40\frac{15}{64}$",
         r"$\langle X\rangle$ יכול להיות $59\frac{3}{16}$",
         r"$\langle X\rangle$ יכול להיות $-36\frac{1}{8}$",
         r"$\langle X\rangle$ לא יכול להיות $-34\frac{5}{8}$",
         r"$\langle X\rangle$ לא יכול להיות $57\frac{3}{4}$",
         r"$\langle X\rangle$ יכול להיות $-\frac{1}{32}$"), "a",
    r"""א: $40\frac{15}{64}=\langle0101000.001111\rangle$ - $X_4=0$ ו-$X_1=0$ (בניגוד לנדרש), לכן לא יכול להיות - הטענה לא נכונה.
ב: $59\frac3{16}=\langle0111011.001100\rangle$ - יכול להיות.
ג: $-36\frac18=\langle1011011.111000\rangle$ (מ-$36\frac18=\langle0100100.001000\rangle$) - יכול להיות.
ד: $-34\frac58=\langle1011101.011000\rangle$ - $X_{-3}=0$, לא יכול להיות (נכון).
ה: $57\frac34=\langle0111001.110000\rangle$ - $X_{-3}=0$, לא יכול להיות (נכון).
ו: $-\frac1{32}=\langle1111111.111110\rangle$ - יכול להיות."""))

# 6
questions.append(Q(
    6, "signed_twos_complement",
    r"כדי להציג את תחום המספרים מ- $(-2^{16})$ ועד $(2^{16}-\frac{1}{64})$ צריך מספר בינארי המיוצג בשיטת המשלים ל-2 שבו יש:",
    opts("17 סיביות לחלק השלם ו-6 סיביות לשבר", "17 סיביות לחלק השלם ו-5 סיביות לשבר",
         "15 סיביות לחלק השלם ו-6 סיביות לשבר", "15 סיביות לחלק השלם ו-5 סיביות לשבר",
         "16 סיביות לחלק השלם ו-5 סיביות לשבר", "16 סיביות לחלק השלם ו-6 סיביות לשבר"), "a",
    r"""המשקל $-2^{16}$ הוא של ה-MSB, ולכן נדרשות סיביות 0 עד 16: $0+16$ ועוד אחת, כלומר 17 סיביות לחלק השלם.
$\frac1{64}=2^{-6}$ ולכן נדרשות 6 סיביות לשבר."""))

# 7
questions.append(Q(
    7, "floating_point",
    "חיברנו את המספר A=0x327FFFFF ואת המספר B=0x197F0000, שניהם מיוצגים ב- Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר, Fraction). "
    "נסמן את התוצאה המתקבלת, גם היא ב- Single Precision Floating Point, באות R ואת השגיאה ב- [R-(A+B)]. כלומר, השגיאה היא ההפרש בין התוצאה המדוייקת שהיתה מתקבלת בדיוק אינסופי וללא עיגול, ובין מה שמתקבל כשהתוצאה מעוגלת לייצוג של Single Precision Floating Point.\n"
    "מה נכון:",
    opts("השגיאה המתקבלת שווה למחובר הקטן מבין השניים",
         "השגיאה המתקבלת קטנה בערכה המוחלט מהמחובר הקטן מבין השניים",
         "השגיאה המתקבלת גדולה בערכה המוחלט מהמחובר הקטן מבין השניים",
         "במקרה האמור השגיאה המתקבלת היא 0",
         "במקרה הכללי, אם שני המחוברים חיוביים השגיאה תהיה תמיד חיובית או 0",
         "במקרה הכללי, אם שני המחוברים חיוביים השגיאה תהיה תמיד שלילית או 0"), "a",
    r"""A: $E=100$, כלומר $2^{100-127}=2^{-27}$. B: $E=50$, כלומר $2^{50-127}=2^{-77}$.
ב-A יחידת הסיבית האחרונה היא $2^{-27-23}=2^{-50}$, וב-B המספר הוא כ-$2^{-76}$, הרבה פחות מחצי ביט אחרון ($2^{-51}$). לכן $R=\text{round}(A+B)=A$, וה-B "נעלם" לחלוטין.
השגיאה שווה בערכה ל-B, המחובר הקטן מבין השניים - תשובה א.
ה, ו: במקרה הכללי השגיאה יכולה להיות חיובית, שלילית או 0 - לכן אינן נכונות.""",
    note="The lecturer's working states the magnitude of the error equals the smaller addend (R=A). Options e and f are marked by him as incorrect (the error can be positive, negative or 0)."))

# 8
questions.append(Q(
    8, "datapath_control",
    "אילו הוספנו למעבד ה-MIPS שמימשנו בהרצאות פקודת jr, שקופצת לכתובת שנמצאת באוגר Rs, אילו שלבים היו מתבצעים במהלך ביצוע הפקודה הזו? "
    "(למשל jr §5 בכתובת 0x400020 שאמורה לבצע PC= GPR[5]) הנח שפקודה זו אינה פקודת Rtype.",
    opts("Fetch, Decode", "Fetch, Decode, Write-Back", "Fetch, Decode, Memory", "Fetch, Decode, ALU", "Fetch, Decode, ALU, Write-Back"), "a",
    """בפקודת JUMP REGISTER אין צורך ב-ALU ואין כתיבה ל-GPR (WB).
ב-DECODE קוראים את האוגר Rs (GPR[Rs]) מקובץ האוגרים, וכותבים את ערכו ל-PC. אין עוד שלבים לאחר מכן, ולכן יש רק Fetch ו-Decode."""))

# 9
questions.append(Q(
    9, "latches_flipflops",
    "לפניכם ארבעה דלגלגים (FF-ים), המחוברים בצורת אוגר הזזה (Shift Register). הכניסה משמאל (ל-D3) מחוברת ליציאת שער XOR, "
    "המבצע פעולת XOR בין Q0 להיפוך של Q2. הערך באוגר ההזזה הוא: [Q3, Q2, Q1, Q0] = [0, 1, 0, 1] כמצויר. מה יהיה הערך אחרי 12 עליות שעון?",
    opts(("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,1,0,1]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,1,1,1]"),
         ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,0,1,0]"), ("math", r"[Q_3,Q_2,Q_1,Q_0]=[1,0,0,0]"),
         ("math", r"[Q_3,Q_2,Q_1,Q_0]=[0,1,1,1]")), "a",
    r"""$D_3=\bar Q_2\oplus Q_0$: שווה 1 אם $Q_2=Q_0$ ו-0 אם $Q_2\ne Q_0$. שאר הדלגלגים מזיזים ימינה.
$[0,1,0,1]\to[1,0,1,0]\to[1,1,0,1]\to[1,1,1,0]\to[0,1,1,1]\to[1,0,1,1]\to[0,1,0,1]$. אחרי 6 עליות שעון חוזרים למצב ההתחלתי, ולכן גם אחרי 12 עליות שעון: $[0,1,0,1]$.""",
    image="images/exams/23A-A-Q9.png"))

# 10
questions.append(Q(
    10, "mips_assembly_c", "נתון קטע הקוד הבא הכתוב בשפת אסמבלי של מעבד MIPS. מה יהיה הערך של אוגר §4 כשנגיע ל-end?\n" +
    fence(["      addi $4, $0, 0", "      addi $5, $0, 0x7", "      addi $6, $0, 0x41", "lp:   slt  $7, $0, $6",
           "      beq  $0, $7, end", "      add  $4, $4, $5", "      addi $6, $6, -1", "      j    lp", "end:"]),
    opts("0x1C7", "0x1C2", "287", "280"), "a",
    """§4 הוא סכום (sum) ומתחיל ב-0; §5=7; §6=0x41=65.
הלולאה רצה כל עוד §6>0 ובכל סיבוב מבצעת sum+=7 ו-§6--, ולכן 65 סיבובים.
§4 = 7*65 = 455 = 0x1C7."""))

# 11
questions.append(Q(
    11, "number_bases",
    r"השבר הבא $[0.128]_9$ שהוא שבר Unsigned בבסיס 9, הומר לבסיס 3. הערך הנכון הינו:",
    opts(("math", r"[0.010222]_3"), ("math", r"[0.011222]_3"), ("math", r"[0.010212]_3"),
         ("math", r"[0.010211]_3"), ("text", r"$[0.0102\ 0102\ 0102\ldots]_3$ (שבר מחזורי אינסופי)"), ("math", r"[0.010221]_3")), "a",
    r"""שיטה I: כל ספרה בבסיס 9 היא שתי ספרות בבסיס 3: $1=[01]_3$, $2=[02]_3$, $8=[22]_3$ - מתקבל $[0.010222]_3$.
שיטה II: $X=[0.128]_9=\frac19+\frac2{81}+\frac8{729}=\frac{81+18+8}{729}=\frac{107}{729}$. הכפלות ב-3: $\frac{321}{729}\to0$; $\frac{963}{729}=1\frac{234}{729}\to1$; $\frac{702}{729}\to0$; $\frac{2106}{729}=2\frac{648}{729}\to2$; $2\frac{486}{729}\to2$; $2\to2$.
לכן $X=[0.010222]_3$."""))

# 12
questions.append(Q(
    12, "signed_twos_complement",
    "במחבר 2's Comp. של 8 ביט יש יציאה הנדלקת כאשר יש Overflow. באיזה מהחישובים הבאים לא תידלק יציאה זו?",
    opts("`11011101 - 01001000`", "`11001001 + 10011101`", "`01000010 - 10011100`",
         "`11010101 + 10101000`", "`01101111 + 00100101`"), "a",
    r"""התחום ב-8 ביט הוא $-128\le X\le127$.
א: $11011101=-35$ ו-$01001000=72$: $-35-72=-107$ - אין גלישה.
ב: $-55+(-99)=-154$ - גלישה.
ג: $66-(-100)=166$ - גלישה.
ד: $-43+(-88)=-131$ - גלישה.
ה: $111+37=148$ - גלישה.""",
    note="Page 14: the first byte of option a is smudged by a pen mark and the last digit of option c is covered by a dot; the lecturer's working fixes them as 11011101 and 10011100. Script confirms the key with these readings."))

# 13
questions.append(Q(
    13, "mips_assembly_c",
    "הקטע הנתון בשפת אסמבלי של ה-MIPS הוא תרגום לקטע בשפת C. מהו התרגום הנכון?\n" +
    fence(["      slt $1, $5, $4", "      beq $1, $0, lab1", "      sub $4, $4, $5", "      bne $0, $1, end", "lab1: sub $5, $5, $4", "end:"]) +
    "\n(האוגר §5 הוא a והאוגר §4 הוא b)",
    opts(fence(["if (a >= b) a=a-b;", "else  b=b-a;"], "c"),
         fence(["if (a < b) a=a-b;", "else  b=b-a;"], "c"),
         fence(["if (a >= b) a=b-a;", "else  b=a-b;"], "c"),
         fence(["if (a =< b) a=a-b;", "else  b=b-a;"], "c")), "a",
    """§5=a ו-§4=b. `slt §1,§5,§4`: §1=1 אם a<b ו-§1=0 אם a>=b.
`beq §1,§0,lab1` קופץ ל-lab1 אם a>=b, ושם `sub §5,§5,§4` כלומר a=a-b. אחרת מבצעים `sub §4,§4,§5` כלומר b=b-a, ו-`bne §0,§1,end` קופץ לסוף.
לכן: if (a>=b) a=a-b; else b=b-a.""",
    note="The stem's register mapping (a=$5, b=$4) is written by the lecturer above the code (arrows a, b); added to the stem in parentheses."))

# 14
questions.append(Q(
    14, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=A\cdot\bar B+\bar B\cdot D+\bar A\cdot B\cdot C\cdot\bar D"),
         ("math", r"F=A\cdot\bar B+\bar B\cdot C+\bar A\cdot C"),
         ("math", r"F=A\cdot\bar B+\bar B\cdot C+\bar C\cdot\bar D"),
         ("math", r"F=A\cdot B+\bar B\cdot C+C\cdot D")), "a",
    r"""כניסות המולטיפלקסר לפי $ABC$: $000\to D$; $001\to D$; $010\to0$; $011\to\bar D$; $100\to1$; $101\to1$; $110\to0$; $111\to0$.
$F=\bar A\bar B\bar C D+\bar A\bar BCD+\bar ABC\bar D+A\bar B\bar C+A\bar BC=\bar A\bar BD+\bar ABC\bar D+A\bar B=A\bar B+\bar BD+\bar ABC\bar D$.
ב: עבור $ABCD=0010$ הביטוי $\bar AC$ נותן 1 אך במעגל $F=0$ (הקלט 001 נותן $D=0$). ג: עבור $ABCD=0100$ ($\bar C\bar D$) הביטוי נותן 1 אך במעגל $F=0$. ד: עבור $ABCD=1111$ הביטוי $CD$ נותן 1 אך במעגל ($ABC=111$) $F=0$.""",
    image="images/exams/23A-A-Q14.png"))

# 15
questions.append(Q(
    15, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=(\bar A\cdot\bar B+A\cdot B)\cdot D+\bar A\cdot B\cdot(\bar C\cdot\bar D+C\cdot D)+A\cdot\bar B\cdot(\bar C\cdot D+C\cdot\bar D)"),
         ("math", r"F=B\cdot D+A\cdot\bar B\cdot(\bar C\cdot D+C\cdot\bar D)"),
         ("math", r"F=\bar A\cdot D\cdot(\bar C\cdot\bar D+C\cdot D)+A\cdot B\cdot(\bar C\cdot D+C\cdot\bar D)"),
         ("math", r"F=\bar A\cdot D+A\cdot B\cdot(C\cdot D+\bar C\cdot\bar D)")), "a",
    r"""לפי המעגל: $AB=00\Rightarrow XY=00\Rightarrow F=D$; $AB=01\Rightarrow XY=10\Rightarrow F=\bar C\bar D+CD$; $AB=10\Rightarrow XY=01\Rightarrow F=\bar CD+C\bar D$; $AB=11\Rightarrow XY=00\Rightarrow F=D$.
לכן $F=(\bar A\bar B+AB)\cdot D+\bar AB\cdot(\bar C\bar D+CD)+A\bar B\cdot(\bar CD+C\bar D)$ - זו משוואה א.
ב: עבור $AB=01$ מתקבל $F=D$ במקום $\bar C\bar D+CD$. ג: עבור $AB=11$ מתקבל $\bar CD+C\bar D$ ולא $D$. ד: עבור $A=B=1$ ו-$C=0$ מתקבל $F=\bar D$ במקום $F=D$.""",
    image="images/exams/23A-A-Q15.png"))

# 16
questions.append(Q(
    16, "arithmetic_circuits",
    "בידנו מעגל הכופל את המספר השלם מטיפוס unsigned בן ארבע סיביות $[a_3,a_2,a_1,a_0]_2$ במספר 23 (גם כן unsigned) המיוצג על ידי $[10111]_2$. "
    "המכפל בנוי מרכיבי HA (כלומר Half-Adder) ורכיבי FA (כלומר Full-Adder). עלינו לספור את מספר הרכיבים ומספר היציאות. "
    "אנו כמובן מעדיפים מספר מינימלי של רכיבים (במקום FA לכאורה אפשר להשתמש בשני HA. אם יש כזה מקרה - נעדיף את ה- FA הבודד)\n"
    "מה נכון?",
    opts("יש במכפל 4 רכיבי HA ו-7 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 4 רכיבי HA ו-7 רכיבי FA ויש לו 8 יציאות",
         "יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 8 יציאות",
         "יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 9 יציאות",
         "יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 8 יציאות"), "a",
    r"""$23=[10111]_2$, ולכן מחברים ארבע שורות: $A\cdot2^0,\ A\cdot2^1,\ A\cdot2^2,\ A\cdot2^4$. מתקבלים $4\times$HA ו-$7\times$FA, ויש 9 יציאות ($y_0\ldots y_8$)."""))

# 17
questions.append(Q(
    17, "mips_machine_code",
    "התרגום של הפקודה `slt $at, $fp, $sp` לשפת המכונה של ה-MIPS הינו:",
    opts("0x03DD082A", "0x003FE82A", "0x03BE082A", "0x03BE0822"), "a",
    r"""R-type: opcode $=0$, $\text{Rs}=§fp=§30$, $\text{Rt}=§sp=§29$, $\text{Rd}=§at=§1$, shamt $=0$, funct $=42$.
$000000\ |\ 11110\ |\ 11101\ |\ 00001\ |\ 00000\ |\ 101010\Rightarrow\texttt{0x03DD082A}$."""))

# 18
questions.append(Q(
    18, "datapath_control",
    "במעבד ה- MIPS Single Cycle שלמדנו מי מהצירופים הרשומים מטה של אותות הבקרה נכון לפקודת sw? (יש ציור של המעבד בנספח לבחינה)",
    opts("ALUOp=00 (add); MemWrite=1; RegWrite=0; Branch=0",
         "ALUOp=00 (add); Jump=0; RegWrite=1; Branch=1",
         "ALUOp=10 (func); MemWrite =1; RegWrite=0; Branch=0",
         "ALUOp=10 (func); MemRead=1; RegWrite=0; Branch=1",
         "ALUOp=10 (func); MemRead=1; RegWrite=0; Branch=0",
         "ALUOp=01 (sub); MemtoReg=1; RegWrite=0; Jump=0"), "a",
    """בפקודת sw: ALUSrc=1, ALUOp=00 (add, חישוב הכתובת), MemWrite=1, MemRead=0, RegWrite=0, Branch=0, Jump=0, RegDst=X, MemtoReg=X.
ב: RegWrite=1 ו-Branch=1 שגויים. ג: ALUOp=10 שגוי. ד, ה: ALUOp=10 ו-MemRead=1 שגויים. ו: ALUOp=01 שייך ל-beq.""",
    image="images/exams/23A-A-Q18.png",
    note="Datapath figure is a low-resolution source scan; control-signal labels in it are not legible."))

# 19
questions.append(Q(
    19, "mips_machine_code",
    "הפקודה `0x231CC024` בשפת מכונה של ה-MIPS הינה בעצם פקודת האסמבלי הבאה:",
    opts("`addi $gp, $t8, 0xC024`", "`and $t8, $gp, $t3`", "`sub $gp, $t3, $t8`", "`addi $t8, $gp, 0xC024`",
         "`add $gp, $t3, $t8`", "`xor $t8, $gp, $t3`"), "a",
    r"""$\texttt{0x231CC024}=001000\ |\ 11000\ |\ 11100\ |\ 1100\,0000\,0010\,0100$.
opcode $=8=\text{addi}$, $\text{Rs}=§24=§t8$, $\text{Rt}=§28=§gp$, imm $=\texttt{0xC024}$ $\Rightarrow$ `addi §gp, §t8, 0xC024` (בפורמט addi Rt, Rs, imm)."""))

# 20
C20 = ["ptr = &array[0];", "a= *ptr;", "for(i=0;i<size;i++);", " {", "  if ((a < *ptr)&&((*ptr)%2==1)) a = *ptr;", "  ptr++;", " }"]
ASM = ["      add  $6, $4, $0      # ptr = &array[0];", "      lw   $7, 0($6)       # a= *ptr", "      addi $8, $0, 0       # i=0",
       "      addi $9, $0, 1       # $9=1", "lp:", "      slt  $10,$8,$5       # if i<size, $10=1",
       "      beq  $10,$0,lb2      # else goto end (lb2)", "      lw   $10, 0($6)      # $10=*ptr",
       "      slt  $11, $7, $10    # if a<*ptr, $11=1", "      @@@@@@@", "lb1:  addi $6, $6, 4", "      addi $8, $8, 1", "      j    lp", "lb2:"]
questions.append(Q(
    20, "mips_assembly_c",
    "קטע ה- C הבא תורגם לשפת הסף (אסמבלי) של מחשב MIPS. הנח כי כתובת ההתחלה של array נמצאת באוגר §4. "
    "הערך size שהוא גודל המערך נמצא באוגר §5. המערך הינו מערך של מילים (Words=4 bytes). אוגרים §4 ו- §5 צריכים להישאר ללא שינוי.\n"
    + fence(C20, "c") + "\nלהלן התרגום:\n" + fence(ASM) + "\n"
    "מהתרגום נשמטו פקודות במקום המסומן ב- @@@@@@@.\nהפקודות החסרות הן:",
    opts(fence(["beq  $11, $0, lb1", "and  $11, $10, $9", "beq  $11, $0, lb1", "add  $7, $0, $10"]),
         fence(["bne  $11, $0, lb1", "and  $11, $10, $9", "bne  $11, $0, lb1", "add  $7, $0, $10"]),
         fence(["beq  $11, $0, lb1", "and  $11, $10, $9", "bne  $11, $0, lb1", "add  $10, $0, $7"]),
         fence(["bne  $11, $0, lb1", "and  $11, $10, $9", "beq  $11, $0, lb1", "add  $7, $0, $10"]),
         fence(["beq  $11, $0, lb1", "and  $11, $10, $9", "beq  $11, $0, lb1", "add  $10, $0, $7"])), "a",
    """§6=ptr, §7=a, §8=i, §10=*ptr, §11=1 אם a<*ptr.
א: אם §11==0 (לא מתקיים a<*ptr) מדלגים ל-lb1; אחרת `and §11,§10,§9` בודק את הסיבית התחתונה (*ptr%2==1), ואם §11==0 מדלגים; אם שני התנאים מתקיימים - `add §7,§0,§10` כלומר a=*ptr.
ב, ד: תנאי הפוך (bne במקום beq). ג, ה: ההשמה הפוכה (`add §10,§0,§7` כותבת את a ל-§10 במקום *ptr ל-a).""",
    note="In the solution PDF the options carry typed annotations ('wrong condition', 'wrong assignment') and the lecturer's remarks; these are not part of the printed options and are folded into the explanation. The handwritten ptr++/i++ comments after lb1 are omitted. The printed C line ends 'i++);' with a stray semicolon."))

exam = {
    "examCode": "23A-A",
    "examLabel": "2023 סמסטר א מועד א",
    "year": 2023,
    "examDate": "06.02.2023",
    "sourceFile": "sitting 23A-A (exam pages 2-25)",
    "keyFile": "sitting 23A-A pp.2-25 (circled options + handwritten working on the same pages)",
    "contexts": {},
    "questions": questions,
}
OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
