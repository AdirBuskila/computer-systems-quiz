/* Boolean algebra course, level 3: De Morgan, absorption, X + X'Y = X + Y */
COURSE_LEVEL("boolean", {
  id: "C03", order: 3, icon: "🧩", title: "דה מורגן, בליעה ופישוט",
  goal: "להשתמש בדה מורגן ובחוקי הבליעה כדי לפשט ביטוי עם AND, OR ו-NOT.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>ארבעה חוקים מספיקים לרוב הפישוטים:</p>
<table>
<thead><tr><th>חוק</th><th>נוסחה</th></tr></thead>
<tbody>
<tr><td>דה מורגן</td><td>$\overline{A+B}=\bar A\,\bar B$ &nbsp;ו-&nbsp; $\overline{AB}=\bar A+\bar B$</td></tr>
<tr><td>בליעה</td><td>$A+AB=A$ &nbsp;ו-&nbsp; $A(A+B)=A$</td></tr>
<tr><td>הפשטת משלים</td><td>$A+\bar A B=A+B$</td></tr>
<tr><td>פילוג כפול</td><td>$A+BC=(A+B)(A+C)$</td></tr>
</tbody></table>
<div class="lesson-rule">🔑 <strong>דה מורגן:</strong> מורידים את הקו הארוך, מחליפים AND ב-OR (ולהפך), ומציבים קו על כל משתנה.</div>
<div class="lesson-ex">דוגמה: $A+\bar A B$. אם $A=1$ הביטוי $1$, ואם $A=0$ הוא $B$. לכן הוא שווה $A+B$ (שווה $1$ כשאחד מהם $1$).</div>
<div class="lesson-trap">⚠️ <strong>קו על ביטוי שלם איננו קו על כל משתנה.</strong> $\overline{A+B}\ne\bar A+\bar B$: ב-$A=1,B=0$ משמאל $0$ ומימין $1$. שוברים את הקו רק יחד עם החלפת הפעולה.</div>
<div class="lesson-trap">⚠️ <strong>בליעה רק עם AND ו-OR.</strong> $A+AB=A$ נכון, אבל כשמופיע $\oplus$ אין בליעה.</div>
` },
  questions: [
    { id: "C03-Q1", question: "הביטוי $\\overline{A+B}$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "\\bar A+\\bar B" },
        { id: "b", type: "math", value: "A\\cdot\\bar B" },
        { id: "c", type: "math", value: "\\bar A\\cdot\\bar B" },
        { id: "d", type: "math", value: "\\bar A+B" }],
      correctId: "c",
      explanation: "לפי דה מורגן OR הופך ל-AND וכל משתנה מקבל קו: $\\bar A\\cdot\\bar B$. התשובה $\\bar A+\\bar B$ שוכחת להפוך את הפעולה (זה $\\overline{AB}$). שתי האחרות אינן שקולות: ב-$A=0,B=0$ הביטוי המקורי $1$ ואילו $A\\bar B=0$; וב-$A=0,B=1$ הוא $0$ ואילו $\\bar A+B=1$.",
      recap: "$\\overline{A+B}=\\bar A\\bar B$" },
    { id: "C03-Q2", question: "הביטוי $A+AB$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "A" },
        { id: "b", type: "math", value: "B" },
        { id: "c", type: "math", value: "AB" },
        { id: "d", type: "math", value: "A+B" }],
      correctId: "a",
      explanation: "בליעה: $A+AB=A(1+B)=A$. כש-$A=1$ הביטוי $1$, וכש-$A=0$ הוא $0$, בדיוק כמו $A$. הביטוי $A+B$ שונה ב-$A=0,B=1$, שם הוא $1$ ואילו $A+AB=0$.",
      recap: "בליעה: $A+AB=A$" },
    { id: "C03-Q3", question: "הביטוי $A+\\bar A B$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "A\\cdot B" },
        { id: "b", type: "math", value: "A+B" },
        { id: "c", type: "math", value: "A" },
        { id: "d", type: "math", value: "\\bar A B" }],
      correctId: "b",
      explanation: "אם $A=1$ התוצאה $1$; אם $A=0$ התוצאה $B$. זהו בדיוק $A+B$. הביטוי $A$ לא נכון ב-$A=0,B=1$ (שם התוצאה $1$), ו-$AB$ ו-$\\bar A B$ שווים $0$ ב-$A=1,B=0$ ו-$A=1$ בהתאמה, בעוד שהמקור $1$.",
      recap: "$A+\\bar A B=A+B$" },
    { id: "C03-Q4", question: "הביטוי $A\\cdot(\\bar A+B)$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "A\\cdot B" },
        { id: "b", type: "math", value: "A+B" },
        { id: "c", type: "math", value: "\\bar A" },
        { id: "d", type: "math", value: "A" }],
      correctId: "a",
      explanation: "מפזרים: $A\\bar A+AB=0+AB=AB$. הביטוי $A$ היה נכון לו הסוגריים הכילו $A$ (בליעה $A(A+B)=A$), אבל כאן יש $\\bar A$. ב-$A=1,B=0$ המקור $0$ ו-$A+B=1$.",
      recap: "$A\\bar A=0$, ולכן $A(\\bar A+B)=AB$" },
    { id: "C03-Q5", question: "איזו מהמשוואות הבאות **אינה** נכונה?",
      options: [
        { id: "a", type: "math", value: "\\overline{AB}=\\bar A+\\bar B" },
        { id: "b", type: "math", value: "A+BC=(A+B)(A+C)" },
        { id: "c", type: "math", value: "\\overline{A+B}=\\bar A+\\bar B" },
        { id: "d", type: "math", value: "A+\\bar A B=A+B" }],
      correctId: "c",
      explanation: "$\\overline{A+B}=\\bar A\\bar B$, לא $\\bar A+\\bar B$: ב-$A=1,B=0$ משמאל $0$ ומימין $1$. שלוש האחרות נכונות: דה מורגן ל-AND, פילוג כפול, והפשטת משלים.",
      recap: "מספיקה הצבה אחת כדי לפסול משוואה" },
    { id: "C03-Q6", question: "הביטוי $\\overline{\\bar A\\cdot B}$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "A\\cdot\\bar B" },
        { id: "b", type: "math", value: "A+\\bar B" },
        { id: "c", type: "math", value: "\\bar A+B" },
        { id: "d", type: "math", value: "\\bar A\\cdot B" }],
      correctId: "b",
      explanation: "דה מורגן: $\\overline{\\bar A B}=\\overline{\\bar A}+\\bar B=A+\\bar B$ (שני קווים על $A$ מתבטלים). התשובה $A\\bar B$ הופכת רק את המשתנים בלי להחליף את הפעולה. התשובה $\\bar A+B$ משאירה את $A$ בלי קו. התשובה $\\bar A B$ היא הביטוי המקורי ללא הקו.",
      recap: "דה מורגן, ואז שני קווים על אותו משתנה מתבטלים" },
  ],
});
