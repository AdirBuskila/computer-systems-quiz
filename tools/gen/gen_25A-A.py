# -*- coding: utf-8 -*-
"""Generator for tools/raw/25A-A.json -- computer-systems, 2025 semester A, moed A (18.02.2025).
Run: PYTHONUTF8=1 py tools/gen/gen_25A-A.py

Source: sitting 25A-A, 31 pages: p.1 cover, pp.2-16 the exam (20 MCQ x 5 pts, circled options), pp.17-31 the lecturer's
handwritten solution pages. Literal MIPS register dollars in plain text are written with the section sign (reg() turns it
into an escaped dollar); inside fenced code a plain $ is fine.
Key (circled): option a in every question.
Keys recomputed by script (tools/verify/25A-A/check.py): all agree except Q15 -- Q1 truth tables, Q2/Q17/Q19 encodings,
Q3 float32, Q4/Q11 base conversions, Q5 bit patterns, Q9 shift register (36 clocks), Q10/Q13/Q20 MIPS simulation, Q12
overflow, Q14 mux, Q16 FA/HA count, Q6/Q7 symbolic.
DISAGREEMENT Q15: the circuit gives F = sum(1,3,4,7,8,10,12,15), but the minterm A.Bbar.C.D (1011) is printed in the
same place in all four options where the circuit needs A.Bbar.C.Dbar (1010); the lecturer's own working lists the 1010
term. Option a is the only one matching the other seven terms. Held (see docs/ASK_ADIR.md).
Q18: the lecturer's working lists RegWrite=1 for sw (slip; sw has RegWrite=0); the key a is consistent with sw.
Handwritten Hebrew explanation text is reconstructed from the solution pages; the formulas are exact."""
import json, pathlib

OUT = pathlib.Path(__file__).resolve().parents[1] / "raw" / "25A-A.json"
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


def minterms(rows):
    out = []
    for r in rows:
        out.append(r"\cdot ".join(("" if bit == "1" else r"\bar ") + v for bit, v in zip(r, "ABCD")))
    return "F=" + "+".join(out)


def regs(*pairs):
    return [("math", r"[Q_3,Q_2,Q_1,Q_0]=[%s]" % p) for p in pairs]


questions = []

# ---------------------------------------------------------------- 1
questions.append(Q(
    1, "boolean_algebra", "מי מהמשוואות הבאות לא נכונה?",
    opts(("math", r"(A\oplus B)+(A\oplus\bar B)\cdot(\bar C\oplus D)=\bar A\cdot B+C\cdot\bar D+A\cdot\bar B+\bar C\cdot D"),
         ("math", r"(\bar A\oplus B)+(A\oplus B)\cdot(C\oplus D)=\bar A\cdot\bar B+\bar C\cdot D+A\cdot B+C\cdot\bar D"),
         ("math", r"(A\oplus\bar B)\cdot\overline{(C\oplus\bar D)}+(\bar C\oplus D)=\bar A\cdot\bar B+C\cdot D+A\cdot B+\bar C\cdot\bar D"),
         ("math", r"\overline{(\bar A\oplus B)}+(A\oplus\bar B)\cdot\overline{(C\oplus\bar D)}=\bar A\cdot B+\bar C\cdot D+A\cdot\bar B+C\cdot\bar D")),
    "a",
    r"""משתמשים ב-$X+\bar XY=X+Y$ וב-$A\oplus\bar B=\overline{A\oplus B}$.
א: $(A\oplus B)+\overline{(A\oplus B)}\cdot(\bar C\oplus D)=(A\oplus B)+(\bar C\oplus D)=\bar AB+A\bar B+\bar C\bar D+CD$, ואילו באגף הימני מופיע $C\bar D+\bar CD$ (כלומר $C\oplus D$) - לכן המשוואה אינה נכונה.
ב: $\overline{(A\oplus B)}+(A\oplus B)(C\oplus D)=\overline{A\oplus B}+(C\oplus D)=\bar A\bar B+AB+\bar CD+C\bar D$ - נכונה.
ג: $\overline{(C\oplus\bar D)}=C\oplus D$ ו-$(\bar C\oplus D)=\overline{C\oplus D}$, ולכן $\overline{A\oplus B}\cdot Z+\bar Z=\overline{A\oplus B}+\bar Z=\bar A\bar B+AB+\bar C\bar D+CD$ - נכונה.
ד: $\overline{(\bar A\oplus B)}=A\oplus B$, ולכן $(A\oplus B)+\overline{(A\oplus B)}\cdot(C\oplus D)=(A\oplus B)+(C\oplus D)=\bar AB+A\bar B+\bar CD+C\bar D$ - נכונה."""))

# ---------------------------------------------------------------- 2
questions.append(Q(
    2, "mips_machine_code",
    "מה יהיה באוגר §4 אחרי ביצוע הפקודות הבאות:\n" + fence(
        ["addi $4, $0, 0x8421", "lui  $4, 0x8421", "add  $4, $4, $4", "addi $4, $4, 0x8421", "addi $4, $4, 0x1248"]),
    opts("0x08419669", "0x08429EAB", "0x08409669", "0x84218421", "0x08428421", "0x08411248"), "a",
    r"""`addi §4,§0,0x8421` נותן $§4=\texttt{0xFFFF8421}$ (הרחבת סימן). `lui §4,0x8421` נותן $\texttt{0x84210000}$.
`add §4,§4,§4`: $\texttt{0x84210000}+\texttt{0x84210000}=\texttt{0x08420000}$ (גלישה מתעלמים ממנה).
`addi §4,§4,0x8421`: $\texttt{0x08420000}+\texttt{0xFFFF8421}=\texttt{0x08418421}$.
`addi §4,§4,0x1248`: $\texttt{0x08418421}+\texttt{0x00001248}=\texttt{0x08419669}$.""",
    note="The last digit of the printed 0x1248 is overwritten by a handwritten 8; read 0x1248 as in the solution pages."))

# ---------------------------------------------------------------- 3
questions.append(Q(
    3, "floating_point",
    r"המספר $\frac{1}{3}$ בבסיס 2 הוא השבר הבינארי האינסופי: $[0.01\ 01\ 01\ 01\ldots]_2$" + "\n"
    r"כיצד ייוצג המספר $333\frac{1}{3}$ בייצוג Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר) ?",
    opts("0x43A6AAAB", "0x43A6AAAA", "0x43D35555", "0x43D35556", "0x87A6AAAA", "0x87D35555"), "a",
    r"""$333=320+13=10\cdot 32+13=[101001101]_2$, ולכן $333\frac{1}{3}=[101001101.010101\ldots]_2=2^8\cdot 1.01001101\,0101\ldots$
$S=0$, $E=8+127=135=128+7$, $F=01001101010101010101010\,|\,101\ldots$
עיגול כלפי מעלה של הסיביות האחרונות ($1010\to 1011$): `0x43A6AAAB`."""))

# ---------------------------------------------------------------- 4
questions.append(Q(
    4, "number_bases",
    r"מהו ערכו העשרוני של השבר האינסופי $[0.13\ 63\ 13\ 13\ 13\ldots]_7$ בבסיס 7?",
    opts("1835/8232", "75/367", "651/3431", "653/3431", "71/367", "1720/8232"), "a",
    r"""$X=[0.136\,3131313\ldots]_7=[0.005]_7+Y$, כאשר $[0.005]_7=\frac{5}{7^3}$ ו-$Y=[0.131313\ldots]_7$.
$7^2Y=[13]_7+Y\Rightarrow 49Y=10+Y\Rightarrow Y=\frac{10}{48}=\frac{5}{24}$.
$X=\frac{5}{343}+\frac{5}{24}=\frac{5\cdot 24+5\cdot 343}{343\cdot 24}=\frac{120+1715}{8232}=\frac{1835}{8232}$."""))

# ---------------------------------------------------------------- 5
questions.append(Q(
    5, "signed_twos_complement",
    "$X$ הוא מספר 2's complement בן 13 סיביות מהן 6 הם מימין לנקודה הבינרית. כלומר:\n"
    r"$X=\langle X_6,X_5,X_4,X_3,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4},X_{-5},X_{-6}\rangle$" + "\n"
    r'סיביות $X_2$ , $X_4$ ו- $X_{-2}$ הן "1". מה לא נכון:',
    opts(r"$\langle X\rangle$ יכול להיות $-42\frac{22}{64}$",
         r"$\langle X\rangle$ יכול להיות $-\frac{3}{4}$",
         r"$\langle X\rangle$ יכול להיות $-42\frac{43}{64}$",
         r"$\langle X\rangle$ לא יכול להיות $60\frac{1}{2}$",
         r"$\langle X\rangle$ לא יכול להיות $-30\frac{7}{8}$",
         r"$\langle X\rangle$ לא יכול להיות $\frac{7}{64}$"), "a",
    r"""$42\frac{22}{64}=\langle 0101010.010110\rangle\Rightarrow -42\frac{22}{64}=\langle 1010101.101010\rangle$: $X_4=1$ ו-$X_2=1$ אך $X_{-2}=0$ - לכן הוא לא יכול להיות $-42\frac{22}{64}$, והטענה "יכול" לא נכונה.
$-\frac{3}{4}=\langle 1111111.010000\rangle$ ו-$-42\frac{43}{64}=\langle 1010101.010101\rangle$ - מקיימים את שלושת התנאים (יכולים).
$60\frac{1}{2}=\langle 0111100.100000\rangle$, $-30\frac{7}{8}=\langle 1100001.001000\rangle$ ו-$\frac{7}{64}=\langle 0000000.000111\rangle$ - לא מקיימים (הטענות "לא יכול" נכונות).""",
    note="The denominator of option e is overwritten by a handwritten 7/8 (the lecturer's working uses 30 7/8); transcribed as -30 7/8."))

# ---------------------------------------------------------------- 6
questions.append(Q(
    6, "unsigned_numbers",
    r"$X$ הוא מספר בינארי בו יש $n$ סיביות של שלם ו-8 סיביות של שבר. כלומר: $X=X_{n-1},\ldots,X_2,X_1,X_0\,.\,X_{-1},X_{-2},X_{-3},X_{-4},X_{-5},X_{-6},X_{-7}$." + "\n"
    "עליכם למצוא את תחום המספרים אותו ניתן להציג כמספרים ללא סימן (unsigned) וכמספרים בעלי סימן (2's complement signed).",
    opts(r"כ-Unsigned מ-0 ועד $(2^n-2^{-8})$ וכ-Signed מ- $(-2^{n-1})$ ועד $(2^{n-1}-2^{-8})$",
         r"כ-Unsigned מ-0 ועד $(2^{n-1}-2^{-8})$ וכ-Signed מ- $(-2^{n-2})$ ועד $(2^{n-2}-2^{-8})$",
         r"כ-Unsigned מ-0 ועד $(2^n-2^{-7})$ וכ-Signed מ- $(-2^{n-1})$ ועד $(2^{n-1}-2^{-7})$",
         r"כ-Unsigned מ-0 ועד $(2^{n-1}-2^{-7})$ וכ-Signed מ- $(-2^{n-2})$ ועד $(2^{n-2}-2^{-7})$"), "a",
    r"""המספר הוא $[n.8]$ ($n$ סיביות לשלם ו-8 לשבר).
Unsigned: מ-0 ועד $2^n-2^{-8}$. Signed: מ-$-2^{n-1}$ ועד $2^{n-1}-2^{-8}$ (משקל הסיבית השמאלית הוא $-2^{n-1}$).""",
    note="The printed bit list ends at X_{-7} although the stem says 8 fraction bits; transcribed as printed."))

# ---------------------------------------------------------------- 7
questions.append(Q(
    7, "floating_point",
    "אנו עוסקים בשני מספרים המיוצגים ב- Single Precision Floating Point (1 סיבית סימן, 8 סיביות אקספוננט ו- 23 סיביות שבר, Fraction). "
    "מהו היחס בין המספר החיובי הגדול ביותר עם אקספוננט נתון לבין המספר החיובי הקטן ביותר עם אותו אקספוננט אם ידוע ששדה האקספוננט של המספרים הנ\"ל הוא בין 100 ל- 200 ?",
    opts(r"$2-2^{-23}$", r"$1-2^{-23}$", "2", r"$2^{-23}$", "אין אפשרות לדעת היות והיחס תלוי בערך האקספוננט שלא נתון לנו"), "a",
    r"""(האקספוננט $E$ בתחום הנורמלי.) המספר הגדול ביותר באקספוננט הוא $2^{E-127}\cdot 1.11\ldots 1=2^{E-127}\cdot(2-2^{-23})$.
הקטן ביותר באותו אקספוננט הוא $2^{E-127}\cdot 1.00\ldots 0=2^{E-127}$.
לכן היחס ביניהם הוא $2-2^{-23}$."""))

# ---------------------------------------------------------------- 8
questions.append(Q(
    8, "datapath_control",
    "הוספנו למעבד ה-MIPS שמימשנו בהרצאות פקודה חדשה. הפקודה, beqal (branch equal and link), מתנהגת כמו פקודת beq רגילה "
    "וקופצת לכתובת של `PC+4+sext(imm)*4` אם הערך שבאוגר Rs שווה לערך שבאוגר Rt. בנוסף לזאת, אם קופצים, הערך של (PC+4) נשמר באוגר §31. "
    "אלו שלבים היו מתבצעים במהלך ביצוע הפקודה הזו כאשר קופצים?",
    opts("Fetch, Decode, ALU, Write-Back", "Fetch, Decode, Write-Back", "Fetch, Decode, ALU", "Fetch, Decode",
         "Fetch, Decode, Memory, Write-Back", "Fetch, Decode, Memory"), "a",
    r"""Fetch - קריאת הפקודה. Decode - קריאת הרגיסטרים (Rs ו-Rt). ALU - חישוב $GPR[Rs]-GPR[Rt]$ כדי לדעת אם התוצאה היא אפס (אם כן קופצים).
כאשר קופצים, נכתוב את PC+4 ל-§31: שלב Write-Back. אין גישה לזיכרון הנתונים."""))

# ---------------------------------------------------------------- 9
questions.append(Q(
    9, "latches_flipflops",
    "לפניכם ארבעה דלגלגים (FF-ים), המחוברים בצורת אוגר הזזה (Shift Register). הכניסה משמאל (ל-D3) מחוברת ליציאת שרשרת שערי XOR, "
    "המבצעים פעולת XOR בין Q3 ל Q2, אח\"כ XOR בין התוצאה לבין Q1 ואח\"כ XOR בין התוצאה לבין Q0. "
    "הערך באוגר ההזזה הוא: [Q3, Q2, Q1, Q0] = [0, 1, 0, 1] כמצויר. מה יהיה הערך באוגר אחרי 36 עליות שעון?",
    opts(*regs("0,0,1,0", "0,1,0,1", "1,0,1,0", "0,1,0,0", "0,1,1,0", "1,1,1,0")), "a",
    r"""$D_3=Q_3\oplus Q_2\oplus Q_1\oplus Q_0$: הוא 1 אם מספר ה-"1"-ים אי-זוגי, ו-0 אם הוא זוגי; שאר הדלגלגים מזיזים ימינה.
$[0,1,0,1]\to[0,0,1,0]\to[1,0,0,1]\to[0,1,0,0]\to[1,0,1,0]\to[0,1,0,1]$.
אחרי 5 עליות חוזרים למצב ההתחלתי, ולכן אחרי 35 עליות נהיה במצב ההתחלתי, ואחרי 36 עליות במצב שאחרי עלייה אחת: $[0,0,1,0]$.""",
    image="images/exams/25A-A-Q9.png",
    note="Period of the register is 5 (lecturer's table); 36 mod 5 = 1 gives [0,0,1,0]; checked by script."))

# ---------------------------------------------------------------- 10
questions.append(Q(
    10, "mips_assembly_c",
    "נתון קטע הקוד הבא הכתוב בשפת האסמבלי של מעבד ה-MIPS. מה היה הערך ההתחלתי באוגר §3 אם כאשר מגיע ל- end באוגר §8 יש את המספר 9.\n"
    + fence(["      addi $8, $0, 0", "lp:   beq  $3, $0, end", "      slt  $1, $3, $0", "      beq  $1, $0, lab1",
             "      addi $8, $8, 1", "lab1: add  $3, $3, $3", "      j    lp", "end:"]),
    opts("0x830C1406", "0x02081608", "0x930D2806", "0x8326140C", "0x00FF6000", "0x00F06048"), "a",
    r"""`slt §1,§3,§0` בודק אם הסיבית השמאלית (MSB) של §3 היא 1 (המספר שלילי); אם כן מגדילים את המונה §8.
`add §3,§3,§3` מזיז את §3 שמאלה ב-1 ובודק את הסיבית הבאה, עד ש-§3 מתאפס.
לכן §8 סופר את מספר ה-"1"-ים ב-§3. במספר `0x830C1406` יש $1+2+0+2+1+1+0+2=9$ סיביות "1" - ורק בו."""))

# ---------------------------------------------------------------- 11
questions.append(Q(
    11, "number_bases", "מה לא נכון ?",
    opts(("math", r"[4A6.67]_{16}=[652.156]_8+[2230.013]_4"), ("math", r"[83.4A]_{16}=[203.224]_8"),
         ("math", r"[203.442]_8=[2003.2101]_4"), ("math", r"[47.83]_{16}=[47.37]_8+[200.0013]_4")), "a",
    r"""א: $[4A6.67]_{16}=0100\,1010\,0110.0110\,0111$; $[652.156]_8=110\,101\,010.001\,101\,110$; $[2230.013]_4=10\,10\,11\,00.00\,01\,11$. הסכום אינו שווה לאגף השמאלי - לא נכון.
ב: $[83.4A]_{16}=10000011.01001010=[203.224]_8$ - נכון. ג: $[203.442]_8=[2003.2101]_4$ - נכון.
ד: $[47.83]_{16}=01000111.10000011=[47.37]_8+[200.0013]_4=100111.011111+100000.00000111$ - נכון."""))

# ---------------------------------------------------------------- 12
questions.append(Q(
    12, "signed_twos_complement",
    "במחבר 2's Comp. של 8 ביט יש יציאה הנדלקת כאשר יש Overflow. באיזה מהחישובים הבאים לא תידלק יציאה זו?",
    opts("`11101111 + 10011101`", "`11010011 + 10100001`", "`01001001 + 00111011`",
         "`10111011 - 01010000`", "`01000010 - 10100110`"), "a",
    r"""התחום ב-8 ביט הוא $-128\le X\le 127$ (מחוץ לו - OVF).
א: $11101111+10011101=(-17)+(-99)=-116$ - אין גלישה.
ב: $(-45)+(-95)=-140$ - OVF. ג: $73+59=132$ - OVF.
ד: $(-69)-80=-149$ - OVF. ה: $66-(-90)=156$ - OVF."""))

# ---------------------------------------------------------------- 13
questions.append(Q(
    13, "mips_assembly_c",
    "הקטע הנתון בשפת C תורגם לשפת אסמבלי של ה-MIPS.\n" + fence(["if(a <= b)  c = a+b;", "else        c = a-b;"], "c") + "\nמהו התרגום הנכון? (הנח: a ב-§9, b ב-§7, c ב-§5)",
    opts(fence(["      slt $1, $7, $9", "      beq $1, $0, lb1", "      sub $5, $9, $7", "      bne $1, $0, end",
                "lb1:  add $5, $7, $9", "end:"]),
         fence(["      slt $1, $7, $9", "      bne $1, $0, lb1", "      sub $5, $9, $7", "      beq $1, $0, end",
                "lb1:  add $5, $7, $9", "end:"]),
         fence(["      slt $1, $7, $9", "      beq $1, $0, lb1", "      add $5, $7, $9", "      bne $1, $0, end",
                "lb1:  sub $5, $9, $7", "end:"]),
         fence(["      slt $1, $7, $9", "      beq $1, $0, lb1", "      sub $5, $9, $7", "      beq $1, $0, end",
                "lb1:  add $5, $7, $9", "end:"])), "a",
    r"""כדי לבדוק $a\le b$ בודקים אם $b<a$ (אם לא - אז כן). לכן `slt §1,§7,§9` כאשר §7 הוא b ו-§9 הוא a ($§1=1$ אם $b<a$, $§1=0$ אם $a\le b$).
א: אם $§1=0$ קופצים ל-`lb1` ומבצעים $c=a+b$; אחרת $c=a-b$ ו-`bne §1,§0,end` מדלג על החיבור - נכון.
ב: התנאי ההפוך - מבצע את הפעולות הפוכות. ג: $c=a+b$ ו-$c=a-b$ הפוכים. ד: אחרי $c=a-b$ ממשיך גם ל-`lb1` (התנאי `beq` אינו קופץ ל-end) - שגוי.
הערה: הגיליון אינו מציין באילו אוגרים נמצאים a, b ו-c. ההקצאה a ב-§9, b ב-§7, c ב-§5 היא היחידה שבה אחת האפשרויות נכונה (עם a ב-§7 ו-b ב-§9 האפשרות א מחשבת $b-a$ במקום $a-b$ ואף אפשרות אינה נכונה), ולכן ההקצאה נוספה לנוסח השאלה.""",
    answerSource="solved", official=False,
    note="Arbiter 2026-10-17: the exam gives no register mapping. With a=$9,b=$7,c=$5 exactly option a is correct (b,c,d are wrong); with a=$7,b=$9 no option is (a computes b-a). Mapping added to the stem, shipped as solved/official:false."))

# ---------------------------------------------------------------- 14
questions.append(Q(
    14, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(("math", r"F=A\cdot\bar C+\bar C\cdot D+\bar A\cdot C"),
         ("math", r"F=\bar C\cdot D+A\cdot\bar C+\bar B\cdot C"),
         ("math", r"F=\bar A\cdot\bar C+\bar C\cdot D+A\cdot B"),
         ("math", r"F=A\cdot\bar C+\bar A\cdot B+\bar A\cdot C")), "a",
    r"""המולטיפלקסר: $000\to D$, $001\to 1$, $010\to D$, $011\to 1$, $100\to 1$, $101\to 0$, $110\to D+\bar D=1$, $111\to 0$.
$F=\sum(1,2,3,5,6,7,8,9,12,13)=A\bar C+\bar CD+\bar AC$.
ב: עבור $ABC=101$ המעגל נותן $F=0$ אבל בב $\bar BC=1$. ג: עבור $ABC=111$ המעגל נותן 0 ובג $AB=1$. ד: עבור $ABCD=0110$ המעגל נותן $F=D=0$ ובד $\bar AB=1$ (או $\bar AC=1$).""",
    image="images/exams/25A-A-Q14.png"))

# ---------------------------------------------------------------- 15 (HELD)
ROWS15 = {
    "a": ["0001", "0011", "1000", "1011", "0100", "0111", "1100", "1111"],
    "b": ["0001", "0011", "1000", "1011", "0101", "0110", "1100", "1111"],
    "c": ["0011", "1000", "1011", "0100", "0111", "1100", "1111"],
    "d": ["0001", "1000", "1011", "0100", "0111", "1101", "1110"],
}
q15 = Q(
    15, "decoders_muxes", "איזו מהמשוואות מתארת נכון את המעגל הבא?",
    opts(*[("math", minterms(ROWS15[k])) for k in "abcd"]),
    None,
    r"""נמצא את $XY$ לפי $AB$: $AB=00\to XY=11$, $AB=01\to XY=01$, $AB=10\to XY=00$, $AB=11\to XY=01$.
$F=\bar X\bar Y(\bar C\bar D+C\bar D)+\bar XY(\bar C\bar D+CD)+X\bar Y\cdot C+XY\cdot D$, ובפיתוח למכפלות מלאות נקבל את שבע/שמונה המכפלות של תשובה א (לפי הפתרון המודפס).""",
    image="images/exams/25A-A-Q15.png",
    hold="Official key (circled a) disagrees with recomputation: the circuit gives F = sum(1,3,4,7,8,10,12,15), but the "
         "printed term A.Bbar.C.D (1011) appears in all four options where the circuit needs A.Bbar.C.Dbar (1010). "
         "Option a matches the other seven terms; the lecturer's working lists the 1010 term.",
    note="Held: every option prints A.Bbar.C.D in the place where the circuit needs A.Bbar.C.Dbar.",
    confidence="low")
del q15["correctId"]
questions.append(q15)

# ---------------------------------------------------------------- 16
questions.append(Q(
    16, "arithmetic_circuits",
    "בידנו מעגל הכופל את המספר השלם מטיפוס unsigned בן חמש סיביות $[a_4,a_3,a_2,a_1,a_0]_2$ במספר 19 (גם כן unsigned) המיוצג על ידי $[10011]_2$. "
    "המכפל בנוי מרכיבי HA (כלומר Half-Adder) ורכיבי FA (כלומר Full-Adder). עלינו לספור את מספר הרכיבים ומספר היציאות. "
    "אנו כמובן מעדיפים מספר מינימלי של רכיבים (במקום FA לכאורה אפשר להשתמש בשני HA. אם יש כזה מקרה – נעדיף את ה- FA הבודד)\n"
    "מה נכון?",
    opts("יש במכפל 5 רכיבי HA ו-5 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 6 רכיבי HA ו-4 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 6 רכיבי HA ו-5 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 6 רכיבי HA ו-5 רכיבי FA ויש לו 11 יציאות",
         "יש במכפל 4 רכיבי HA ו-6 רכיבי FA ויש לו 10 יציאות",
         "יש במכפל 6 רכיבי HA ו-4 רכיבי FA ויש לו 9 יציאות"), "a",
    r"""$19=[10011]_2$, ולכן מחברים שלוש שורות של $A$ (מוזזות ב-0, 1 ו-4 מקומות). הרשת המתקבלת בנויה מ-$5\times$HA ו-$5\times$FA, ויש לה 10 יציאות ($19\cdot 31=589<1024$)."""))

# ---------------------------------------------------------------- 17
questions.append(Q(
    17, "mips_machine_code",
    "הפקודה הבאה כותבת את אוגר §fp ל `array[4]` בזיכרון. זה מערך של מילים (1 word = 4 bytes). "
    "מהו התרגום של הפקודה `sw §fp, array[4]` אם משתמשים באוגר §t6 כפוינטר כשבו נמצאת כתובת ההתחלה של המערך (כלומר `§t6 = &array[0]`) ?",
    opts("0xADDE0010", "0xAFCE0004", "0xADDE0016", "0xAFCE0016", "0xADDE0004", "0xAFCE0010"), "a",
    r"""הפקודה הנדרשת היא `sw §fp, 16(§t6)` (כי $4\cdot 4=16$ בתים).
$\text{OPCODE}=43=101011$; $\text{Rs}=§t6=§14=01110$; $\text{Rt}=§fp=§30=11110$; $\text{imm}=16$.
$101011\ 01110\ 11110\ 0000\,0000\,0001\,0000\Rightarrow\texttt{0xADDE0010}$."""))

# ---------------------------------------------------------------- 18
questions.append(Q(
    18, "datapath_control",
    "במעבד ה- MIPS Single Cycle שלמדנו מי מהצירופים הרשומים מטה של אותות הבקרה נכון לפקודת sw? (יש ציור נוסף של המעבד בנספח לבחינה)",
    opts("ALUOp=00 (add);  RegDst=0; MemWrite=1;  RegWrite=0;  MemToReg=1",
         "ALUOp=10 (func);  RegDst=1; MemRead=0;  RegWrite=1;  MemToReg=0",
         "ALUOp=00 (add);  RegDst=1; MemWrite=0;  RegWrite=1;  MemToReg=0",
         "ALUOp=00 (add);  RegDst=1; MemRead=0;  RegWrite=0;  Branch=1",
         "ALUOp=10 (func);  RegDst=0; MemWrite=0;  RegWrite=0;  Branch=0",
         "ALUOp=00 (add);  RegDst=0; MemWrite=0;  RegWrite=1;  Jump=0"), "a",
    r"""בפקודת sw אותות הבקרה הם: ALUSrc=1, ALUOp=00 (ADD), MemRead=0, MemWrite=1, MemToReg=X, RegDst=X, RegWrite=0, Branch=0, Jump=0.
ב: ALUOp=10 ו-RegWrite=1 - שגוי. ג: RegWrite=1 - שגוי. ד: Branch=1 - שגוי. ה: ALUOp=10 - שגוי. ו: RegWrite=1 (ו-MemWrite=0) - שגוי.
רק האפשרות א מתאימה (RegDst ו-MemToReg הם X ולכן הערכים שלהם לא משנים).""",
    image="images/exams/25A-A-Q18.png",
    note="Datapath figure is a low-resolution source scan. The lecturer's working lists RegWrite=1 for sw; sw has RegWrite=0 (slip), consistent with the circled key."))

# ---------------------------------------------------------------- 19
questions.append(Q(
    19, "mips_machine_code",
    "הפקודה `0x1795FFBF` בשפת מכונה של ה-MIPS הינה בעצם פקודת האסמבלי הבאה:",
    opts("`bne §gp, §s5, -65`", "`slt §ra, §gp, §s5`", "`bne §s5, §gp, -65`", "`slt §gp, §s5, §ra`",
         "`sw §gp, §s5, 0xFF41`", "`sw §s5, §gp, 0xFF41`"), "a",
    r"""`0x1795FFBF` $=\ 000101\ |\ 11100\ |\ 10101\ |\ 1111\,1111\,1011\,1111$.
$\text{OPCODE}=5\Rightarrow\text{BNE}$; $\text{Rs}=§28=§gp$; $\text{Rt}=§21=§s5$; $\text{imm}=\texttt{0xFFBF}$ - המספר שלילי (בהשלמה ל-2): $0000\,0000\,0100\,0001=\texttt{0x41}=65$, כלומר $-65$.
$\Rightarrow$ `bne §gp, §s5, -65`"""))

# ---------------------------------------------------------------- 20
C_CODE = ["for(i=1; i<size; I +=2)", "{", "  tmp = array[i];", "  array[i] = array[i-1];", "  array[i-1] = tmp;", "}"]
ASM = ["        addi $6, $0, 1", "        j lb2", "lb1:    add  $7, $6, $6", "        add  $7, $7, $7", "",
       "        @@@@@@@", "", "        sw   $8, -4($7)", "        addi $6, $6, 2", "lb2:    slt  $1, $6, $5",
       "        bne  $1, $0, lb1"]
questions.append(Q(
    20, "mips_assembly_c",
    "קטע ה- C הבא תורגם לשפת הסף (אסמבלי) של מחשב MIPS. הנח כי כתובת ההתחלה של array נמצאת באוגר §4. "
    "הערך size שהוא גודל המערך נמצא באוגר §5. המערך הינו מערך של מילים (1 Word = 4 bytes). אוגרים §4 ו- §5 צריכים להישאר ללא שינוי.\n"
    + fence(C_CODE, "c") + "\nלהלן התרגום:\n" + fence(ASM) + "\n"
    "מהתרגום נשמטו פקודות במקום המסומן ב- @@@@@@@.\nהפקודות החסרות הן:",
    opts(fence(["add $7, $4, $7", "lw  $8, 0($7)", "lw  $9, -4($7)", "sw  $9, 0($7)"]),
         fence(["add $7, $7, $7", "add $7, $4, $7", "lw  $8, 0($7)", "lw  $9, -4($7)", "sw  $9, 0($7)"]),
         fence(["add $7, $4, $7", "lw  $8, 0($7)", "lw  $9, 4($7)", "sw  $9, 0($7)"]),
         fence(["add $7, $4, $7", "lw  $8, 4($7)", "lw  $9, -4($7)", "sw  $9, 4($7)"]),
         fence(["add $7, $4, $7", "lw  $8, 0($7)", "lw  $9, 0($7)", "sw  $9, -4($7)"])), "a",
    r"""`add §6,§0,1`: $i=1$. `add §7,§6,§6` ($§7=2i$), `add §7,§7,§7` ($§7=4i$); החסר: `add §7,§4,§7` ($§7=§4+4i=\&\text{array}[i]$), `lw §8,0(§7)` ($§8=\text{tmp}=\text{array}[i]$), `lw §9,-4(§7)` ($§9=\text{array}[i-1]$), `sw §9,0(§7)` ($\text{array}[i]=\text{array}[i-1]$); לאחר מכן `sw §8,-4(§7)` ($\text{array}[i-1]=\text{tmp}$).
ב: מכפיל את $4i$ שוב (ל-$8i$) - שגוי. ג: קורא $\text{array}[i+1]$ במקום $\text{array}[i-1]$ - שגוי. ד: כותב ל-$\text{array}[i+1]$ במקום $\text{array}[i]$ - שגוי. ה: קורא את $\text{array}[i]$ ל-§9 - שגוי.""",
    note="The source for-header prints 'I +=2' (capital I, a typo for i); transcribed as printed."))

exam = {
    "examCode": "25A-A",
    "examLabel": "2025 סמסטר א מועד א",
    "year": 2025,
    "examDate": "18.02.2025",
    "sourceFile": "sitting 25A-A (exam pages 2-16)",
    "keyFile": "sitting 25A-A pp.2-16 (circled options) + pp.17-31 (handwritten solution)",
    "contexts": {},
    "questions": questions,
}

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(json.dumps(exam, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"wrote {OUT.name}: {len(questions)} questions")
