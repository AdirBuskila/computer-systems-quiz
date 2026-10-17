/* Course mips_enc, level C01. Answers computed and checked by tools/verify/needhelp/mips_enc/check.py */
COURSE_LEVEL("mips_enc", {
  id: "C01", order: 1, icon: "🧩", title: "שלושה פורמטים ושדות",
  goal: "להכיר את שלושת הפורמטים, את רוחב השדות ואת מספרי האוגרים.",
  source: "ai-verified",
  lesson: { html: String.raw`<p>כל פקודת MIPS היא <b>מילה אחת של 32 ביטים</b>. את המילה מחלקים לשדות, ויש שלושה פורמטים:</p>
<table><thead><tr><th>פורמט</th><th>31..26</th><th>25..21</th><th>20..16</th><th>15..11</th><th>10..6</th><th>5..0</th></tr></thead><tbody>
<tr><td>R</td><td>op = 0</td><td>rs</td><td>rt</td><td>rd</td><td>shamt</td><td>funct</td></tr>
<tr><td>I</td><td>op</td><td>rs</td><td>rt</td><td colspan="3">imm (16 ביט)</td></tr>
<tr><td>J</td><td>op</td><td colspan="6">target (26 ביט)</td></tr></tbody></table>
<p>כל שדה של אוגר הוא <b>5 ביטים</b>, כי יש 32 אוגרים. שדה op הוא 6 ביטים, והוא תמיד הראשון משמאל.</p>
<div class="lesson-rule">🔑 פקודות חישוב בין אוגרים (<code>add, sub, and, or, xor, slt</code>) הן R. פקודות עם קבוע או זיכרון או הסתעפות (<code>addi, ori, lui, lw, sw, beq, bne</code>) הן I. הקפיצות (<code>j, jal</code>) הן J.</div>
<h3>מספרי האוגרים</h3>
<table><thead><tr><th>שמות</th><th>מספרים</th></tr></thead><tbody>
<tr><td><code>&#36;zero</code></td><td>0</td></tr><tr><td><code>&#36;at</code></td><td>1</td></tr><tr><td><code>&#36;v0, &#36;v1</code></td><td>2, 3</td></tr>
<tr><td><code>&#36;a0-&#36;a3</code></td><td>4-7</td></tr><tr><td><code>&#36;t0-&#36;t7</code></td><td>8-15</td></tr><tr><td><code>&#36;s0-&#36;s7</code></td><td>16-23</td></tr>
<tr><td><code>&#36;t8, &#36;t9</code></td><td>24, 25</td></tr><tr><td><code>&#36;gp, &#36;sp, &#36;fp, &#36;ra</code></td><td>28, 29, 30, 31</td></tr></tbody></table>
<div class="lesson-ex">דוגמה: <code>&#36;t3</code> הוא 8 + 3 = 11, ובחמישה ביטים 01011. ו-<code>&#36;s2</code> הוא 16 + 2 = 18 = 10010.</div>
<div class="lesson-trap">⚠️ אוגר אפשר לכתוב גם במספר (<code>&#36;11</code> הוא <code>&#36;t3</code>). בקידוד תמיד עובדים עם המספר.</div>` },
  questions: [
    {"id": "mips_enc-C01-Q1", "question": "כמה ביטים תופס שדה rs (או rt) בקידוד פקודה?", "options": [{"id": "a", "value": "4 ביטים"}, {"id": "b", "value": "5 ביטים"}, {"id": "c", "value": "6 ביטים"}, {"id": "d", "value": "16 ביטים"}], "correctId": "b", "explanation": "יש 32 אוגרים, ו-5 ביטים מספיקים לכתוב את המספרים 0 עד 31. המסיחים: 4 ביטים ← מספיקים רק ל-16 אוגרים. 6 ביטים ← זה גודל שדה ה-op וה-funct. 16 ביטים ← זה גודל ה-immediate.", "recap": "שדה אוגר = 5 ביטים"},
    {"id": "mips_enc-C01-Q2", "question": "איזו מהפקודות הבאות היא פקודת R-type?", "options": [{"id": "a", "value": "`ori`"}, {"id": "b", "value": "`lw`"}, {"id": "c", "value": "`xor`"}, {"id": "d", "value": "`j`"}], "correctId": "c", "explanation": "`xor` עובדת על שלושה אוגרים בלבד, ולכן היא R-type עם op=0. המסיחים: `ori` ← יש בה immediate של 16 ביט, לכן I. `lw` ← גישה לזיכרון עם offset של 16 ביט, לכן I. `j` ← יש בה שדה target של 26 ביט, לכן J.", "recap": "R: שלושה אוגרים, op=0"},
    {"id": "mips_enc-C01-Q3", "question": "איזו מהפקודות הבאות היא פקודת I-type?", "options": [{"id": "a", "value": "`sw`"}, {"id": "b", "value": "`slt`"}, {"id": "c", "value": "`sub`"}, {"id": "d", "value": "`j`"}], "correctId": "a", "explanation": "`sw` כוללת אוגר בסיס, אוגר לשמירה ו-offset של 16 ביט, ולכן I-type. המסיחים: `slt` ← עובדת על שלושה אוגרים, לכן R. `sub` ← עובדת על שלושה אוגרים, לכן R. `j` ← יש בה שדה target ללא אוגרים, לכן J.", "recap": "I: אוגר(ים) ו-imm של 16 ביט"},
    {"id": "mips_enc-C01-Q4", "question": "לאיזו פקודה יש שדה target של 26 ביט?", "options": [{"id": "a", "value": "`beq`"}, {"id": "b", "value": "`sub`"}, {"id": "c", "value": "`lui`"}, {"id": "d", "value": "`j`"}], "correctId": "d", "explanation": "רק פקודות J (`j` ו-`jal`) מקודדות כתובת של 26 ביט. המסיחים: `beq` ← משתמשת ב-imm של 16 ביט. `sub` ← פקודת R, בלי שדה כזה. `lui` ← משתמשת ב-imm של 16 ביט.", "recap": "J: op + target (26 ביט)"},
    {"id": "mips_enc-C01-Q5", "question": "מהו המספר של האוגר `\\$t2` בחמישה ביטים?", "options": [{"id": "a", "value": "`00010`"}, {"id": "b", "value": "`01010`"}, {"id": "c", "value": "`10010`"}, {"id": "d", "value": "`01100`"}], "correctId": "b", "explanation": "`\\$t0` הוא 8, ולכן `\\$t2` הוא 10, ובחמישה ביטים 01010. המסיחים: `00010` ← זה המספר של `\\$v0`, בלי להוסיף את ההיסט 8. `10010` ← זה המספר 18, כלומר `\\$s2`. `01100` ← זה המספר 12, כלומר `\\$t4`.", "recap": "t0 = 8, ואז מוסיפים את המספר"},
    {"id": "mips_enc-C01-Q6", "question": "לאיזה אוגר יש מספר 22?", "options": [{"id": "a", "value": "`\\$t6`"}, {"id": "b", "value": "`\\$s7`"}, {"id": "c", "value": "`\\$s6`"}, {"id": "d", "value": "`\\$t8`"}], "correctId": "c", "explanation": "`\\$s0` הוא 16, ולכן 22 הוא `\\$s6`. המסיחים: `\\$t6` ← `\\$t6` הוא 14. `\\$s7` ← `\\$s7` הוא 23. `\\$t8` ← `\\$t8` הוא 24.", "recap": "s0 = 16, t0 = 8, a0 = 4"},
  ],
});
