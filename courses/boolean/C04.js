/* Boolean algebra course, level 4: complement of XOR (XNOR), expanding XOR, the AND-with-complement trap */
COURSE_LEVEL("boolean", {
  id: "C04", order: 4, icon: "🔁", title: "משלים של XOR (XNOR)",
  goal: "לטפל בקווים על XOR: להפוך, לבטל זוגות של משלימים, ולפתוח XOR לשני מחוברים.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p>מכיוון ש-$X\oplus 1=\bar X$, כל קו על משתנה בשרשרת XOR הוא XOR עם $1$. מכאן:</p>
<div class="lesson-formula">$\overline{A\oplus B}=\bar A\oplus B=A\oplus\bar B$ &nbsp;ו-&nbsp; $\bar A\oplus\bar B=A\oplus B$</div>
<ul>
<li>קו על <b>כל</b> הביטוי: מספיק להעביר אותו על <b>אחד</b> האופרנדים.</li>
<li>שני קווים על שני אופרנדים <b>מתבטלים</b> ($1\oplus1=0$).</li>
<li>בשרשרת: ספרו את הקווים. מספר זוגי של קווים לא משנה דבר, ומספר אי זוגי שקול לקו אחד על כל השרשרת.</li>
</ul>
<h3>פתיחת XOR</h3>
<p>$A\oplus B=A\bar B+\bar A B$. מכאן $\overline{A\oplus B}=AB+\bar A\bar B$ (שווה $1$ כשהקלטים זהים, ולכן קוראים לו XNOR). וגם: AND מתפזר על XOR, $C(A\oplus B)=CA\oplus CB$.</p>
<div class="lesson-ex">דוגמה: $\bar A\oplus B\oplus\bar C$. שני קווים (על $A$ ועל $C$) מתבטלים, ולכן הביטוי שווה $A\oplus B\oplus C$.</div>
<div class="lesson-trap">⚠️ <strong>$\overline{A\oplus B}\ne\bar A\oplus\bar B$.</strong> בצד ימין שני הקווים מתבטלים, והוא שווה $A\oplus B$ ללא קו.</div>
<div class="lesson-trap">⚠️ <strong>הקו לא "נכנס" לתוך AND.</strong> $\overline{A\oplus B}\cdot C$ שונה מ-$\bar A C\oplus\bar B C$, כי $\bar A C\oplus\bar B C=C\cdot(\bar A\oplus\bar B)=C\cdot(A\oplus B)$.</div>
` },
  questions: [
    { id: "C04-Q1", question: "הביטוי $\\overline{A\\oplus B}$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "\\bar A\\oplus\\bar B" },
        { id: "b", type: "math", value: "A\\oplus B" },
        { id: "c", type: "math", value: "A\\cdot\\bar B" },
        { id: "d", type: "math", value: "\\bar A\\oplus B" }],
      correctId: "d",
      explanation: "קו על XOR שקול לקו על אופרנד אחד: $\\overline{A\\oplus B}=\\bar A\\oplus B$. התשובה $\\bar A\\oplus\\bar B$ מכילה שני קווים שמתבטלים, והיא שווה $A\\oplus B$ (ההפך מהנדרש). התשובה $A\\oplus B$ היא הביטוי ללא הקו. $A\\bar B$ הוא רק חצי מהפתיחה של XOR.",
      recap: "קו על XOR = קו על אופרנד אחד" },
    { id: "C04-Q2", question: "הביטוי $\\bar A\\oplus\\bar B$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "\\overline{A\\oplus B}" },
        { id: "b", type: "math", value: "A\\oplus B" },
        { id: "c", type: "math", value: "AB+\\bar A\\bar B" },
        { id: "d", type: "math", value: "\\bar A\\cdot\\bar B" }],
      correctId: "b",
      explanation: "שני קווים מתבטלים: $\\bar A\\oplus\\bar B=(A\\oplus1)\\oplus(B\\oplus1)=A\\oplus B$. התשובות $\\overline{A\\oplus B}$ ו-$AB+\\bar A\\bar B$ הן אותו XNOR, ולכן שגויות. $\\bar A\\bar B$ שווה $1$ רק כששניהם $0$, בעוד ש-$\\bar A\\oplus\\bar B$ שווה $0$ שם.",
      recap: "שני קווים על שני אופרנדים מתבטלים" },
    { id: "C04-Q3", question: "הביטוי $\\bar A\\oplus B\\oplus\\bar C$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "\\overline{A\\oplus B\\oplus C}" },
        { id: "b", type: "math", value: "\\bar A\\oplus B\\oplus C" },
        { id: "c", type: "math", value: "A\\oplus B\\oplus C" },
        { id: "d", type: "math", value: "A\\oplus B\\oplus\\bar C" }],
      correctId: "c",
      explanation: "יש שני קווים (על $A$ ועל $C$), מספר זוגי, והם מתבטלים: $A\\oplus B\\oplus C$. כל אחת מהאחרות מכילה מספר אי זוגי של קווים (אחד), ולכן שקולה ל-$\\overline{A\\oplus B\\oplus C}$ ולא למקור.",
      recap: "מספר זוגי של קווים בשרשרת XOR מתבטל" },
    { id: "C04-Q4", question: "איזו מהמשוואות הבאות **אינה** נכונה?",
      options: [
        { id: "a", type: "math", value: "A\\cdot(B\\oplus C)=A B\\oplus A C" },
        { id: "b", type: "math", value: "A+(A\\oplus B)=A" },
        { id: "c", type: "math", value: "\\overline{A\\oplus B}=A\\oplus B\\oplus 1" },
        { id: "d", type: "math", value: "A\\oplus A B=A\\cdot\\bar B" }],
      correctId: "b",
      explanation: "ב-$A=0,B=1$ משמאל $0+1=1$ ומימין $0$, ולכן $A+(A\\oplus B)=A$ אינה נכונה: בליעה אינה חלה על XOR ($A+(A\\oplus B)=A+B$). האחרות נכונות: פילוג AND על XOR, $\\overline{X}=X\\oplus1$, ו-$A\\oplus AB=A(1\\oplus B)=A\\bar B$.",
      recap: "אין בליעה עם XOR" },
    { id: "C04-Q5", question: "הביטוי $(A\\oplus B)\\cdot(A\\oplus\\bar B)$ שווה ל:",
      options: [
        { id: "a", type: "math", value: "1" },
        { id: "b", type: "math", value: "A\\oplus B" },
        { id: "c", type: "math", value: "0" },
        { id: "d", type: "math", value: "A" }],
      correctId: "c",
      explanation: "$A\\oplus\\bar B=\\overline{A\\oplus B}$, כלומר המשלים של הגורם הראשון. מכפלת ביטוי במשלימו היא $X\\cdot\\bar X=0$. התשובה $A\\oplus B$ הייתה נכונה לו הגורמים היו זהים.",
      recap: "$A\\oplus\\bar B$ הוא משלים של $A\\oplus B$, ו-$X\\bar X=0$" },
    { id: "C04-Q6", question: "הביטוי $\\overline{A\\oplus B}\\cdot C$ לא שווה ל-$\\bar A C\\oplus\\bar B C$. באיזו הצבה של $(A,B,C)$ הם שונים?",
      options: [
        { id: "a", value: "$(1,1,0)$" },
        { id: "b", value: "$(0,1,1)$" },
        { id: "c", value: "$(0,0,0)$" },
        { id: "d", value: "$(0,1,0)$" }],
      correctId: "b",
      explanation: "ב-$(0,1,1)$: משמאל $\\overline{0\\oplus1}\\cdot1=0$. מימין $(\\bar A C)\\oplus(\\bar B C)=(1)\\oplus(0)=1$. שונים. בשלוש ההצבות האחרות $C=0$, ושני הצדדים $0$ (כל מכפלה ב-$C$ מתאפסת).",
      recap: "פוסלים משוואה בהצבה אחת; כש-$C=0$ שני הצדדים תמיד שווים" },
  ],
});
