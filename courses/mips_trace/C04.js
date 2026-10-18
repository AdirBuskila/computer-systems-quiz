/* mips_trace, level 4: generated from tools/verify/needhelp/mips_trace (answers decided by a MIPS simulator) */
COURSE_LEVEL("mips_trace", {
  id: "C04",
  order: 4,
  icon: "🌿",
  title: "if ו-else בין C לאסמבלי",
  goal: "אחרי השלב הזה אפשר לתרגם if ו-if/else מ-C לאסמבלי ובחזרה.",
  boss: false,
  source: "ai-verified",
  lesson: { html: String.raw`<table><thead><tr><th>תנאי ב-C</th><th>בדיקה</th><th>קופצים לדלג כש...</th></tr></thead><tbody>
<tr><td>a &lt; b</td><td><code>slt &#36;1,a,b</code></td><td>&#36;1 = 0 (<code>beq</code>)</td></tr>
<tr><td>a &gt; b</td><td><code>slt &#36;1,b,a</code></td><td>&#36;1 = 0 (<code>beq</code>)</td></tr>
<tr><td>a &ge; b</td><td><code>slt &#36;1,a,b</code></td><td>&#36;1 = 1 (<code>bne</code>)</td></tr>
<tr><td>a &le; b</td><td><code>slt &#36;1,b,a</code></td><td>&#36;1 = 1 (<code>bne</code>)</td></tr>
<tr><td>a == b</td><td>ישירות</td><td><code>bne a,b,skip</code></td></tr>
<tr><td>a != b</td><td>ישירות</td><td><code>beq a,b,skip</code></td></tr></tbody></table>
<div class="lesson-rule">🔑 ההסתעפות קופצת מעל הגוף כשהתנאי לא מתקיים. לכן היא תמיד ההפוכה לתנאי שכתוב ב-C.</div>
<p>מבנה של if/else:</p>
<pre>    (בדיקה, קפיצה אל else כשהתנאי לא מתקיים)
    (then)
    beq &#36;0,&#36;0,end
else: (else)
end:</pre>
<div class="lesson-ex">דוגמה: <code>if (a &gt; b) a = 0;</code> עם a ב-&#36;4 ו-b ב-&#36;5:
<pre>slt &#36;1,&#36;5,&#36;4
beq &#36;1,&#36;0,end
add &#36;4,&#36;0,&#36;0
end:</pre>
כש-a = 2 ו-b = 2 מתקבל &#36;1 = 0, מדלגים ו-a נשאר 2. כש-a = 5 ו-b = 2, &#36;1 = 1 ו-a הופך ל-0.</div>
<div class="lesson-trap">⚠️ שוויון: a &ge; b ו-a &gt; b שונים רק כש-a = b, ולכן תמיד בודקים את מקרה השוויון. ואל תשכחו את ה-<code>beq &#36;0,&#36;0,end</code> בסוף ה-then, אחרת גם ה-else מתבצע.</div>
<p>כשצריך לקרוא קוד אסמבלי ולחזור ל-C, ממפים את האוגרים למשתנים ומתרגמים את ההסתעפות ההפוכה בחזרה לתנאי.</p>` },
  questions: [
    {
      "id": "C04-Q1",
      "question": "a ב-\\$4 ו-b ב-\\$5. איזה קטע מתרגם את `if (a == b) a = a+b; else a = a-b;`?",
      "options": [
        {
          "id": "a",
          "value": "```asm\nbeq $4,$5,L1\nadd $4,$4,$5\nbeq $0,$0,end\nL1: sub $4,$4,$5\nend:\n```"
        },
        {
          "id": "b",
          "value": "```asm\nbne $4,$5,L1\nadd $4,$4,$5\nL1: sub $4,$4,$5\nend:\n```"
        },
        {
          "id": "c",
          "value": "```asm\nbne $4,$5,L1\nadd $4,$4,$5\nbeq $0,$0,end\nL1: sub $4,$4,$5\nend:\n```"
        },
        {
          "id": "d",
          "value": "```asm\nbne $4,$5,L1\nsub $4,$4,$5\nbeq $0,$0,end\nL1: add $4,$4,$5\nend:\n```"
        }
      ],
      "correctId": "c",
      "explanation": "קופצים אל ה-else כשהתנאי לא מתקיים, כלומר `bne`. בסוף ה-then חייבים לדלג מעל ה-else (`beq \\$0,\\$0,end`). בקטע שנפתח ב-`beq \\$4,\\$5,L1` התנאי הפוך, בקטע שחסר בו `beq \\$0,\\$0,end` חסר הדילוג ולכן אחרי ה-then מתבצע גם ה-else, ובקטע ש-`sub` בו קודם ל-`add` ה-then וה-else הוחלפו.",
      "recap": "קופצים אל ה-else בתנאי ההפוך, ובסוף ה-then מדלגים מעליו."
    },
    {
      "id": "C04-Q2",
      "question": "a ב-\\$4 ו-b ב-\\$5. איזה קטע מתרגם את `if (a > b) a = 0;`?",
      "options": [
        {
          "id": "a",
          "value": "```asm\nslt $1,$5,$4\nbeq $1,$0,end\nadd $4,$0,$0\nend:\n```"
        },
        {
          "id": "b",
          "value": "```asm\nslt $1,$4,$5\nbeq $1,$0,end\nadd $4,$0,$0\nend:\n```"
        },
        {
          "id": "c",
          "value": "```asm\nslt $1,$5,$4\nbne $1,$0,end\nadd $4,$0,$0\nend:\n```"
        },
        {
          "id": "d",
          "value": "```asm\nslt $1,$4,$5\nbne $1,$0,end\nadd $4,$0,$0\nend:\n```"
        }
      ],
      "correctId": "a",
      "explanation": "a > b זה b < a, לכן `slt \\$1,\\$5,\\$4`. הגוף מבוצע כש-\\$1 = 1, ולכן מדלגים כש-\\$1 = 0 (`beq`). הקטע `slt \\$1,\\$4,\\$5` עם `beq` בודק a < b, הקטע `slt \\$1,\\$5,\\$4` עם `bne` מדלג בדיוק כשהתנאי מתקיים, והקטע `slt \\$1,\\$4,\\$5` עם `bne` מבצע את הגוף גם בשוויון.",
      "recap": "a > b הוא slt עם האוגרים מוחלפים, ומדלגים בהסתעפות ההפוכה."
    },
    {
      "id": "C04-Q3",
      "question": "a ב-\\$4 ו-b ב-\\$5. מה קוד ה-C המתאים לקטע הבא?\n```asm\nslt $1,$4,$5\nbne $1,$0,L\nsub $4,$4,$5\nbeq $0,$0,end\nL: sub $5,$5,$4\nend:\n```",
      "options": [
        {
          "id": "a",
          "value": "```c\nif (a < b) a = a - b;\nelse b = b - a;\n```"
        },
        {
          "id": "b",
          "value": "```c\nif (a < b) b = b - a;\nelse a = a - b;\n```"
        },
        {
          "id": "c",
          "value": "```c\nif (a >= b) b = b - a;\nelse a = a - b;\n```"
        },
        {
          "id": "d",
          "value": "```c\nif (a <= b) b = b - a;\nelse a = a - b;\n```"
        }
      ],
      "correctId": "b",
      "explanation": "`bne \\$1,\\$0,L` קופצת כש-a < b, ושם מבוצע b = b - a. אחרת (a >= b) מבוצע a = a - b. באפשרות `if (a < b) a = a - b; else b = b - a;` הגופים מוחלפים, באפשרות `if (a >= b) b = b - a; else a = a - b;` התנאי הפוך, ובאפשרות `if (a <= b) b = b - a; else a = a - b;` התנאי כולל שוויון: כש-a = b הקטע המקורי מבצע a = a - b ולא b = b - a.",
      "recap": "הסתעפות על \\$1 שאינו אפס אומרת שתנאי ה-slt התקיים."
    },
    {
      "id": "C04-Q4",
      "question": "a ב-\\$7, b ב-\\$9, c ב-\\$5. איזה קטע מתרגם את `if (a <= b) c = a+b; else c = a-b;`?",
      "options": [
        {
          "id": "a",
          "value": "```asm\nslt $1,$7,$9\nbne $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:\n```"
        },
        {
          "id": "b",
          "value": "```asm\nslt $1,$9,$7\nbeq $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:\n```"
        },
        {
          "id": "c",
          "value": "```asm\nslt $1,$7,$9\nbeq $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:\n```"
        },
        {
          "id": "d",
          "value": "```asm\nslt $1,$9,$7\nbne $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:\n```"
        }
      ],
      "correctId": "d",
      "explanation": "a <= b זה \"לא (b < a)\". לכן `slt \\$1,\\$9,\\$7`, וכשהוא 1 (כלומר a > b) קופצים אל ה-else. בקטעים עם `slt \\$1,\\$7,\\$9` נבדק a < b ולכן בשוויון נבחר הענף הלא נכון, ובקטע `slt \\$1,\\$9,\\$7` עם `beq` הענפים מוחלפים.",
      "recap": "a <= b: משווים b < a וקופצים ל-else כשהתוצאה 1."
    },
    {
      "bankId": "22B-B-Q13",
      "recap": "קוראים slt ואת כיוון ההסתעפות כדי להחזיר את התנאי המקורי."
    },
    {
      "bankId": "24B-A-Q13",
      "recap": "הסתעפות על 0 אומרת \"התנאי לא התקיים\", וממנה מוצאים את ה-else."
    }
  ],
});
