from core import *
from levels import level, bank, EXAMPLES

# ============ C03 ============
EXAMPLES.append(("addi $4,$0,0\nbeq $4,$0,L\naddi $5,$0,1\nL: addi $6,$0,9", None, None, lambda R, M, s: (R[5], R[6], s), (0, 9, 3)))
q = []
q.append(trace_q("C03-Q1", "מה ערכי §6 ו-§7 בסוף הקטע?",
    "addi $4,$0,-2\naddi $5,$0,3\nslt $6,$4,$5\nslt $7,$5,$4",
    ["§6=1, §7=0", "§6=0, §7=1", "§6=1, §7=1", "§6=0, §7=0"], regs_text(6, 7), 2,
    "`slt` משווה עם סימן: -2 < 3, ולכן §6 = 1, ו-3 < -2 לא נכון ולכן §7 = 0. התשובה השנייה מתקבלת אם מתייחסים ל-(-2) כאל מספר גדול חסר סימן.",
    "slt נותן 1 כשהאוגר הראשון קטן מהשני, בהשוואה עם סימן."))
q.append(trace_q("C03-Q2", "מה ערך §6 בסוף הקטע?",
    "addi $4,$0,5\naddi $5,$0,5\nbeq $4,$5,L\naddi $6,$0,1\nL: addi $6,$6,10",
    ["10", "11", "1", "0"], reg(6), 1,
    "§4 = §5, ולכן `beq` מתקיימת וקופצת אל L. השורה `addi §6,§0,1` מדולגת, §6 נשאר 0 ואז מקבל 10. התשובה 11 מניחה שהשורה בוצעה.",
    "הסתעפות שמתקיימת מדלגת על השורות שבינה לבין התווית."))
q.append(trace_q("C03-Q3", "מה ערך §6 בסוף הקטע?",
    "addi $4,$0,3\naddi $5,$0,8\nslt $1,$4,$5\nbne $1,$0,yes\naddi $6,$0,100\nj end\nyes: addi $6,$0,200\nend:",
    ["200", "100", "300", "0"], reg(6), 3,
    "3 < 8, לכן §1 = 1 ו-`bne` קופצת אל yes, שם §6 = 200. השורות `addi §6,§0,100` ו-`j end` לא מתבצעות. 300 הוא סכום של שני המסלולים, שאי אפשר לעבור בשניהם.",
    "bne קופצת כשהאוגרים שונים, כלומר כש-§1 אינו 0."))
q.append(trace_q("C03-Q4", "כמה פקודות מתבצעות בפועל (לא כמה שורות יש בקטע)?",
    "addi $4,$0,0\nbeq $4,$0,L\naddi $5,$0,1\naddi $5,$5,1\naddi $5,$5,1\nL: addi $6,$0,9",
    ["3", "4", "5", "6"], steps_obs, 0,
    "מתבצעות `addi §4`, אחר כך `beq` שמתקיימת וקופצת, ואז `addi §6` בתווית L. שלוש השורות באמצע מדולגות. 6 הוא מספר השורות בקטע.",
    "סופרים רק שורות שבאמת הורצו."))
q.append(trace_q("C03-Q5", "מה ערך §7 בסוף הקטע?",
    "addi $4,$0,5\naddi $5,$0,5\nslt $6,$4,$5\nbeq $6,$0,L\naddi $7,$0,1\nL: addi $7,$7,2",
    ["2", "3", "1", "0"], reg(7), 1,
    "5 אינו קטן מ-5, ולכן §6 = 0. אז `beq §6,§0,L` מתקיימת (שני האוגרים 0), השורה עם `addi §7,§0,1` מדולגת ו-§7 = 0 + 2 = 2. התשובה 3 מניחה ש-slt נותן 1 גם בשוויון.",
    "slt הוא מחמיר: בשוויון התוצאה 0, ו-beq עם §0 קופצת."))
level(3, "🔀", "השוואה והסתעפות: slt, beq, bne, j",
    "אחרי השלב הזה אפשר לעקוב אחרי קטע עם קפיצות ולדעת אילו שורות מתבצעות.",
    """
<table><thead><tr><th>פקודה</th><th>משמעות</th></tr></thead><tbody>
<tr><td><code>slt §d,§s,§t</code></td><td>§d = 1 אם §s &lt; §t (עם סימן), אחרת 0</td></tr>
<tr><td><code>beq §s,§t,L</code></td><td>אם §s = §t ממשיכים מהתווית L</td></tr>
<tr><td><code>bne §s,§t,L</code></td><td>אם §s &ne; §t ממשיכים מהתווית L</td></tr>
<tr><td><code>j L</code></td><td>קופצים תמיד אל L</td></tr></tbody></table>
<p>תווית (למשל <code>L:</code> או <code>end:</code>) היא שם של שורה. הסתעפות שלא מתקיימת פשוט ממשיכה לשורה הבאה. קפיצה בלתי מותנית אפשר לכתוב גם <code>beq §0,§0,L</code>, כי §0 שווה לעצמו תמיד.</p>
<div class="lesson-rule">🔑 את התנאי "a &lt; b" בודקים בשני שלבים: <code>slt §1,a,b</code> ואז הסתעפות לפי §1. כש-§1 = 0 המשמעות היא "לא קטן", כלומר גדול או שווה.</div>
<h3>איך עוקבים</h3>
<p>מסמנים שורה נוכחית ומבצעים אותה. אם זו הסתעפות שהתקיימה, עוברים לשורת התווית, ואחרת לשורה הבאה. סופרים כל ביצוע של שורה.</p>
<div class="lesson-ex">דוגמה:
<pre>addi §4,§0,0
beq  §4,§0,L    # מתקיימת
addi §5,§0,1    # מדולגת
L: addi §6,§0,9</pre>
מתבצעות 3 פקודות, §5 נשאר 0 ו-§6 = 9.</div>
<div class="lesson-trap">⚠️ <code>slt</code> נותן 0 גם כשהערכים שווים, והוא מחשיב מספרים שליליים כקטנים ממספרים חיוביים.</div>
""", q)

# ============ C04 ============
def two_reg_test(ref, a=4, b=5):
    ins = [(x, y) for x in (-3, 0, 2, 5) for y in (-3, 0, 2, 5)]
    def test(code):
        for x, y in ins:
            R, _, _ = run(code, {a: x, b: y})
            ea, eb = ref(x, y)
            if R[a] != ea or R[b] != eb:
                return False
        return True
    return test

SK = "slt $1,$5,$4\nbeq $1,$0,end\nadd $4,$0,$0\nend:"
EXAMPLES.append((SK, {4: 2, 5: 2}, None, lambda R, M, s: R[4], 2))
EXAMPLES.append((SK, {4: 5, 5: 2}, None, lambda R, M, s: R[4], 0))
q = []
q.append(passes_q("C04-Q1", "a ב-§4 ו-b ב-§5. איזה קטע מתרגם את `if (a == b) a = a+b; else a = a-b;`?",
    ["bne $4,$5,L1\nadd $4,$4,$5\nbeq $0,$0,end\nL1: sub $4,$4,$5\nend:",
     "beq $4,$5,L1\nadd $4,$4,$5\nbeq $0,$0,end\nL1: sub $4,$4,$5\nend:",
     "bne $4,$5,L1\nadd $4,$4,$5\nL1: sub $4,$4,$5\nend:",
     "bne $4,$5,L1\nsub $4,$4,$5\nbeq $0,$0,end\nL1: add $4,$4,$5\nend:"],
    two_reg_test(lambda a, b: (a + b, b) if a == b else (a - b, b)), "right", 2,
    "קופצים אל ה-else כשהתנאי לא מתקיים, כלומר `bne`. בסוף ה-then חייבים לדלג מעל ה-else (`beq §0,§0,end`). בקטע השני התנאי הפוך, בשלישי חסר הדילוג ולכן אחרי ה-then מתבצע גם ה-else, וברביעי ה-then וה-else הוחלפו.",
    "קופצים אל ה-else בתנאי ההפוך, ובסוף ה-then מדלגים מעליו."))
q.append(passes_q("C04-Q2", "a ב-§4 ו-b ב-§5. איזה קטע מתרגם את `if (a > b) a = 0;`?",
    [SK,
     "slt $1,$4,$5\nbeq $1,$0,end\nadd $4,$0,$0\nend:",
     "slt $1,$5,$4\nbne $1,$0,end\nadd $4,$0,$0\nend:",
     "slt $1,$4,$5\nbne $1,$0,end\nadd $4,$0,$0\nend:"],
    two_reg_test(lambda a, b: (0, b) if a > b else (a, b)), "right", 0,
    "a > b זה b < a, לכן `slt §1,§5,§4`. הגוף מבוצע כש-§1 = 1, ולכן מדלגים כש-§1 = 0 (`beq`). השני בודק a < b, השלישי מדלג בדיוק כשהתנאי מתקיים, והרביעי מבצע את הגוף גם בשוויון.",
    "a > b הוא slt עם האוגרים מוחלפים, ומדלגים בהסתעפות ההפוכה."))

ASM3 = "slt $1,$4,$5\nbne $1,$0,L\nsub $4,$4,$5\nbeq $0,$0,end\nL: sub $5,$5,$4\nend:"
q.append(lam_q("C04-Q3", "a ב-§4 ו-b ב-§5. מה קוד ה-C המתאים לקטע הבא?\n" + fence(ASM3),
    ["if (a < b) b = b - a;\nelse a = a - b;", "if (a < b) a = a - b;\nelse b = b - a;", "if (a >= b) b = b - a;\nelse a = a - b;", "if (a <= b) b = b - a;\nelse a = a - b;"],
    [lambda p: (p[0], p[1] - p[0]) if p[0] < p[1] else (p[0] - p[1], p[1]),
     lambda p: (p[0] - p[1], p[1]) if p[0] < p[1] else (p[0], p[1] - p[0]),
     lambda p: (p[0], p[1] - p[0]) if p[0] >= p[1] else (p[0] - p[1], p[1]),
     lambda p: (p[0], p[1] - p[0]) if p[0] <= p[1] else (p[0] - p[1], p[1])],
    lambda p: tuple(run(ASM3, {4: p[0], 5: p[1]})[0][i] for i in (4, 5)),
    [(x, y) for x in (-3, 0, 2, 5) for y in (-3, 0, 2, 5)], 1,
    "`bne §1,§0,L` קופצת כש-a < b, ושם מבוצע b = b - a. אחרת (a >= b) מבוצע a = a - b. באפשרות השנייה הגופים מוחלפים, בשלישית התנאי הפוך, וברביעית התנאי כולל שוויון: כש-a = b הקטע המקורי מבצע a = a - b ולא b = b - a.",
    "הסתעפות על §1 שאינו אפס אומרת שתנאי ה-slt התקיים.", code_tag="c"))

def q4_test(code):
    for a in (-2, 0, 3, 6):
        for b in (-2, 0, 3, 6):
            R, _, _ = run(code, {7: a, 9: b, 5: 99})
            exp = a + b if a <= b else a - b
            if (R[7], R[9], R[5]) != (a, b, exp):
                return False
    return True
q.append(passes_q("C04-Q4", "a ב-§7, b ב-§9, c ב-§5. איזה קטע מתרגם את `if (a <= b) c = a+b; else c = a-b;`?",
    ["slt $1,$9,$7\nbne $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:",
     "slt $1,$7,$9\nbne $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:",
     "slt $1,$9,$7\nbeq $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:",
     "slt $1,$7,$9\nbeq $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:"],
    q4_test, "right", 3,
    "a <= b זה \"לא (b < a)\". לכן `slt §1,§9,§7`, וכשהוא 1 (כלומר a > b) קופצים אל ה-else. בשני הקטעים האחרונים נבדק a < b ולכן בשוויון נבחר הענף הלא נכון, ובשלישי הענפים מוחלפים.",
    "a <= b: משווים b < a וקופצים ל-else כשהתוצאה 1."))
q.append(bank("22B-B-Q13", "קוראים slt ואת כיוון ההסתעפות כדי להחזיר את התנאי המקורי."))
q.append(bank("24B-A-Q13", "הסתעפות על 0 אומרת \"התנאי לא התקיים\", וממנה מוצאים את ה-else."))
level(4, "🌿", "if ו-else בין C לאסמבלי",
    "אחרי השלב הזה אפשר לתרגם if ו-if/else מ-C לאסמבלי ובחזרה.",
    """
<table><thead><tr><th>תנאי ב-C</th><th>בדיקה</th><th>קופצים לדלג כש...</th></tr></thead><tbody>
<tr><td>a &lt; b</td><td><code>slt §1,a,b</code></td><td>§1 = 0 (<code>beq</code>)</td></tr>
<tr><td>a &gt; b</td><td><code>slt §1,b,a</code></td><td>§1 = 0 (<code>beq</code>)</td></tr>
<tr><td>a &ge; b</td><td><code>slt §1,a,b</code></td><td>§1 = 1 (<code>bne</code>)</td></tr>
<tr><td>a &le; b</td><td><code>slt §1,b,a</code></td><td>§1 = 1 (<code>bne</code>)</td></tr>
<tr><td>a == b</td><td>ישירות</td><td><code>bne a,b,skip</code></td></tr>
<tr><td>a != b</td><td>ישירות</td><td><code>beq a,b,skip</code></td></tr></tbody></table>
<div class="lesson-rule">🔑 ההסתעפות קופצת מעל הגוף כשהתנאי לא מתקיים. לכן היא תמיד ההפוכה לתנאי שכתוב ב-C.</div>
<p>מבנה של if/else:</p>
<pre>    (בדיקה, קפיצה אל else כשהתנאי לא מתקיים)
    (then)
    beq §0,§0,end
else: (else)
end:</pre>
<div class="lesson-ex">דוגמה: <code>if (a &gt; b) a = 0;</code> עם a ב-§4 ו-b ב-§5:
<pre>slt §1,§5,§4
beq §1,§0,end
add §4,§0,§0
end:</pre>
כש-a = 2 ו-b = 2 מתקבל §1 = 0, מדלגים ו-a נשאר 2. כש-a = 5 ו-b = 2, §1 = 1 ו-a הופך ל-0.</div>
<div class="lesson-trap">⚠️ שוויון: a &ge; b ו-a &gt; b שונים רק כש-a = b, ולכן תמיד בודקים את מקרה השוויון. ואל תשכחו את ה-<code>beq §0,§0,end</code> בסוף ה-then, אחרת גם ה-else מתבצע.</div>
<p>כשצריך לקרוא קוד אסמבלי ולחזור ל-C, ממפים את האוגרים למשתנים ומתרגמים את ההסתעפות ההפוכה בחזרה לתנאי.</p>
""", q)
