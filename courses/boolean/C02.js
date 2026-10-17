/* Boolean algebra course, level 2: XOR */
COURSE_LEVEL("boolean", {
  id: "C02", order: 2, icon: "⊕", title: "XOR: ההגדרה והחוקים",
  goal: "לחשב XOR של כמה ביטים, ולהשתמש בחוקי XOR כדי לצמצם שרשרת.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>$A\oplus B$ (XOR, "או מוציא") שווה $1$ כשהקלטים <b>שונים</b>: $0\oplus 0=0$, $0\oplus 1=1$, $1\oplus 0=1$, $1\oplus 1=0$.</p>
<p>שרשרת XOR של כמה ביטים שווה $1$ כשמספר ה-$1$-ים בה <b>אי זוגי</b>. אפשר גם לסדר מחדש כרצוננו.</p>
<table>
<thead><tr><th>חוק</th><th>משמעות</th></tr></thead>
<tbody>
<tr><td>$X\oplus 0 = X$</td><td>XOR עם $0$ לא משנה</td></tr>
<tr><td>$X\oplus 1 = \bar X$</td><td>XOR עם $1$ הופך</td></tr>
<tr><td>$X\oplus X = 0$</td><td>שני זהים מתבטלים</td></tr>
<tr><td>$X\oplus \bar X = 1$</td><td>משתנה ומשלימו נותנים $1$</td></tr>
<tr><td>$X\oplus Y = Y\oplus X$</td><td>חילוף</td></tr>
<tr><td>$(X\oplus Y)\oplus Z = X\oplus(Y\oplus Z)$</td><td>קיבוץ</td></tr>
</tbody></table>
<div class="lesson-rule">🔑 <strong>שרשרת XOR מצמצמים בזוגות:</strong> מסדרים כך שאותו משתנה יופיע פעמיים, ושני עותקים מתבטלים ($X\oplus X=0$ ו-$0\oplus Y=Y$).</div>
<div class="lesson-ex">דוגמה: $(A\oplus B)\oplus A$. מסדרים מחדש: $A\oplus A\oplus B = 0\oplus B = B$.</div>
<div class="lesson-trap">⚠️ <strong>XOR אינו OR.</strong> ב-OR מתקיים $1+1=1$, וב-XOR מתקיים $1\oplus 1=0$.</div>
` },
  questions: [
    { id: "C02-Q1", question: "מה ערך הביטוי $1\\oplus 1\\oplus 1$?",
      options: [{ id: "a", value: "0" }, { id: "b", value: "1" }],
      correctId: "b",
      explanation: "$1\\oplus 1 = 0$, ואז $0\\oplus 1 = 1$. שלושה $1$-ים הם מספר אי זוגי, ולכן התוצאה $1$. התשובה $0$ מתקבלת אם מזווגים שני $1$-ים ושוכחים את השלישי.",
      recap: "XOR שווה 1 כשמספר ה-1-ים אי זוגי" },
    { id: "C02-Q2", question: "הביטוי $A\\oplus 1$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "A" },
        { id: "b", type: "math", value: "\\bar A" },
        { id: "c", type: "math", value: "0" },
        { id: "d", type: "math", value: "1" }],
      correctId: "b",
      explanation: "XOR עם $1$ הופך: $0\\oplus1=1$ ו-$1\\oplus1=0$, כלומר $\\bar A$. התשובה $A$ היא התוצאה של $A\\oplus 0$. התשובות הקבועות שגויות, כי התוצאה תלויה ב-$A$.",
      recap: "$X\\oplus 1=\\bar X$" },
    { id: "C02-Q3", question: "הביטוי $A\\oplus \\bar A$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "0" },
        { id: "b", type: "math", value: "A" },
        { id: "c", type: "math", value: "\\bar A" },
        { id: "d", type: "math", value: "1" }],
      correctId: "d",
      explanation: "$A$ ו-$\\bar A$ תמיד שונים, ו-XOR של שני ביטים שונים הוא $1$. התשובה $0$ היא של $A\\oplus A$.",
      recap: "$X\\oplus\\bar X=1$ ו-$X\\oplus X=0$" },
    { id: "C02-Q4", question: "הביטוי $(A\\oplus B)\\oplus A$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "A" },
        { id: "b", type: "math", value: "A\\oplus B\\oplus A\\oplus A" },
        { id: "c", type: "math", value: "0" },
        { id: "d", type: "math", value: "B" }],
      correctId: "d",
      explanation: "$A\\oplus A\\oplus B = 0\\oplus B = B$. התשובה $A$ מתקבלת מביטול $B$ במקום $A$. התשובה $0$ מתקבלת אם מבטלים את שניהם. האפשרות $A\\oplus B\\oplus A\\oplus A$ שווה ל-$A\\oplus B$ (שניים מתוך שלושת ה-$A$ מתבטלים), ולכן אינה $B$.",
      recap: "זוגות זהים מתבטלים: $X\\oplus X=0$" },
    { id: "C02-Q5", question: "בהצבה $A=1,\\ B=1,\\ C=1,\\ D=0$, מה ערך $A\\oplus B\\oplus C\\oplus D$?",
      options: [{ id: "a", value: "0" }, { id: "b", value: "1" }],
      correctId: "b",
      explanation: "יש שלושה $1$-ים, מספר אי זוגי, ולכן התוצאה $1$. בדרך אחרת: $1\\oplus1=0$, $0\\oplus1=1$, $1\\oplus 0=1$. התשובה $0$ היא של ארבעה $1$-ים או שניים.",
      recap: "סופרים 1-ים: אי זוגי נותן 1" },
    { id: "C02-Q6", question: "הביטוי $A\\oplus B\\oplus A\\oplus C$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "B\\oplus C" },
        { id: "b", type: "math", value: "A\\oplus B\\oplus C" },
        { id: "c", type: "math", value: "A\\oplus C" },
        { id: "d", type: "math", value: "B+C" }],
      correctId: "a",
      explanation: "שני ה-$A$ מתבטלים: $A\\oplus A=0$, ונשאר $B\\oplus C$. התשובה $A\\oplus B\\oplus C$ שוכחת לבטל. $B+C$ הוא OR, שונה מ-XOR כש-$B=C=1$ ($1$ מול $0$).",
      recap: "מבטלים משתנים שמופיעים בזוגות" },
  ],
});
