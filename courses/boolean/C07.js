/* Boolean algebra course, level 7: exam-style long equations */
COURSE_LEVEL("boolean", {
  id: "C07", order: 7, icon: "🧠", title: "משוואות ארוכות כמו במבחן",
  goal: "לפשט שרשראות XOR ארוכות ושרשראות של $X+\\bar X Y$, ולתפוס את המשוואה השגויה בין ארבע.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>במבחן המשוואות ארוכות, אבל נפתרות בשני צעדים קבועים.</p>
<h3>שרשרת XOR</h3>
<ol>
<li>מפרקים כל קו ל-$\oplus 1$ וכל XOR מקונן לשרשרת אחת (קיבוץ וחילוף מותרים).</li>
<li>מבטלים זוגות: כל משתנה שמופיע פעמיים, וכל $1$ שמופיע פעמיים. מה שנשאר הוא התשובה.</li>
</ol>
<div class="lesson-ex">דוגמה: $(A\oplus C)\oplus\bar C\oplus B$. הקו הוא $\oplus1$, ולכן: $A\oplus C\oplus C\oplus1\oplus B = A\oplus1\oplus B=\overline{A\oplus B}$.</div>
<h3>שרשרת של $X+\bar X Y$</h3>
<p>הכלל $X+\bar X Y=X+Y$ מופעל שוב ושוב מבחוץ פנימה:</p>
<div class="lesson-formula">$A+\bar A\,(B+\bar B\,C)=A+B+\bar B C=A+B+C$</div>
<div class="lesson-rule">🔑 <strong>גם ביטוי שלם יכול להיות ה-$X$:</strong> $(A\oplus B)+\overline{(A\oplus B)}\cdot Z=(A\oplus B)+Z$.</div>
<div class="lesson-trap">⚠️ <strong>לא כל זהות "דומה" נכונה.</strong> $(A\oplus B)+(B\oplus C)$ אינו $A\oplus C$ (OR אינו XOR). לפני שמאשרים משוואה, פשטו או בדקו הצבה.</div>
` },
  questions: [
    { id: "C07-Q1", question: "הביטוי $(A\\oplus C)\\oplus(\\bar B\\oplus D)\\oplus\\overline{(C\\oplus D)}$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "\\overline{A\\oplus B}" },
        { id: "b", type: "math", value: "A\\oplus B\\oplus C\\oplus D" },
        { id: "c", type: "math", value: "A\\oplus D" },
        { id: "d", type: "math", value: "A\\oplus B" }],
      correctId: "d",
      explanation: "פותחים: $A\\oplus C\\oplus B\\oplus1\\oplus D\\oplus C\\oplus D\\oplus1$. מבטלים $C$ עם $C$, $D$ עם $D$, ו-$1$ עם $1$: נשאר $A\\oplus B$. התשובה $\\overline{A\\oplus B}$ מתקבלת מספירת קו אחד בלבד, בעוד שיש שניים, ו-$A\\oplus B\\oplus C\\oplus D$ מתקבלת מאי ביטול הזוגות.",
      recap: "קו = $\\oplus1$; מבטלים זוגות של משתנים ושל $1$" },
    { id: "C07-Q2", question: "הביטוי $A+\\bar A\\,(B+\\bar B\\,(C+\\bar C D))$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "A+B+C+D" },
        { id: "b", type: "math", value: "A+B\\bar B+C" },
        { id: "c", type: "math", value: "ABCD" },
        { id: "d", type: "math", value: "A+\\bar A BCD" }],
      correctId: "a",
      explanation: "מבפנים החוצה: $C+\\bar C D=C+D$, אחר כך $B+\\bar B(C+D)=B+C+D$, ולבסוף $A+\\bar A(B+C+D)=A+B+C+D$. התשובה $ABCD$ מחליפה בטעות OR ב-AND; האחרות אינן שקולות (ב-$A=0,B=0,C=0,D=1$ המקור $1$ ואילו $A+B\\bar B+C=0$).",
      recap: "$X+\\bar X Y=X+Y$ מבפנים החוצה" },
    { id: "C07-Q3", question: "הביטוי $\\bar A\\oplus B\\oplus\\bar C\\oplus D\\oplus\\bar E$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "A\\oplus B\\oplus C\\oplus D\\oplus E" },
        { id: "b", type: "math", value: "\\overline{A\\oplus B\\oplus C\\oplus D\\oplus E}" },
        { id: "c", type: "math", value: "\\bar A\\oplus B\\oplus\\bar C\\oplus D\\oplus E" },
        { id: "d", type: "math", value: "\\bar A\\oplus\\bar B\\oplus\\bar C\\oplus\\bar D\\oplus E" }],
      correctId: "b",
      explanation: "יש שלושה קווים (על $A$, $C$, $E$): זוג מהם מתבטל והשלישי נשאר, כלומר שקול לקו אחד על כל השרשרת. $\\overline{A\\oplus B\\oplus C\\oplus D\\oplus E}$ הוא התשובה. הראשונה היא התוצאה אילו מספר הקווים היה זוגי. בשלישית יש שני קווים ובאחרונה ארבעה, מספר זוגי, ולכן שתיהן שקולות ל-$A\\oplus B\\oplus C\\oplus D\\oplus E$ בלי קו.",
      recap: "מספר אי זוגי של קווים = קו אחד על כל השרשרת" },
    { id: "C07-Q4", question: "איזו מהמשוואות הבאות **אינה** נכונה?",
      options: [
        { id: "a", type: "math", value: "(A\\oplus B)+\\overline{(A\\oplus B)}\\cdot(C\\oplus D)=(A\\oplus B)+(C\\oplus D)" },
        { id: "b", type: "math", value: "(A\\oplus B)\\oplus(B\\oplus C)\\oplus(C\\oplus A)=0" },
        { id: "c", type: "math", value: "(A\\oplus B)\\cdot(B\\oplus C)=A\\bar B C+\\bar A B\\bar C" },
        { id: "d", type: "math", value: "(A\\oplus B)+(B\\oplus C)=A\\oplus C" }],
      correctId: "d",
      explanation: "ב-$(1,0,1)$: משמאל $1+1=1$, ומימין $1\\oplus1=0$. הצדדים שונים. האחרות נכונות: (א) לפי $X+\\bar XY=X+Y$; (ב) כל משתנה מופיע פעמיים ומתבטל; (ג) כש-$B=1$ המכפלה היא $\\bar A\\cdot\\bar C$, וכש-$B=0$ היא $A C$, כלומר $\\bar A B\\bar C+A\\bar B C$.",
      recap: "OR אינו XOR: $(A\\oplus B)+(B\\oplus C)\\ne A\\oplus C$" },
    { id: "C07-Q5", question: "הביטוי $(\\bar A\\oplus B)\\cdot(A\\oplus\\bar B)$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "A\\oplus B" },
        { id: "b", type: "math", value: "\\overline{A\\oplus B}" },
        { id: "c", type: "math", value: "0" },
        { id: "d", type: "math", value: "\\bar A\\bar B" }],
      correctId: "b",
      explanation: "שני הגורמים שווים $\\overline{A\\oplus B}$ (קו אחד על אופרנד אחד בכל אחד). מכפלה $X\\cdot X=X$, לכן התוצאה $\\overline{A\\oplus B}$. התשובה $0$ הייתה נכונה לו אחד הגורמים היה משלים של השני.",
      recap: "$X\\cdot X=X$; קו על אופרנד אחד = קו על כל ה-XOR" },
    { id: "C07-Q6", question: "איזו מהמשוואות הבאות **אינה** נכונה?",
      options: [
        { id: "a", type: "math", value: "(A\\oplus B)\\cdot C=A C\\oplus B C" },
        { id: "b", type: "math", value: "\\overline{A\\oplus B}\\cdot C=\\bar A C\\oplus\\bar B C" },
        { id: "c", type: "math", value: "\\overline{A\\oplus B}\\cdot C=C\\cdot(\\bar A\\oplus B)" },
        { id: "d", type: "math", value: "A+\\overline{A+B}=A+\\bar B" }],
      correctId: "b",
      explanation: "ב-$(0,1,1)$: משמאל $\\overline{0\\oplus1}\\cdot1=0$, ומימין $\\bar A C\\oplus\\bar B C=1\\oplus0=1$. הצדדים שונים. הסיבה: $\\bar AC\\oplus\\bar BC=C(A\\oplus B)$, בעוד שמשמאל יש XNOR. האחרות נכונות: (א) פילוג; (ג) קו אחד על אופרנד; (ד) $A+\\bar A\\bar B=A+\\bar B$.",
      recap: "הקו אינו נכנס פנימה דרך מכפלה" },
  ],
});
