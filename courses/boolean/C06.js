/* Boolean algebra course, level 6: minterms and sum-of-minterms form */
COURSE_LEVEL("boolean", {
  id: "C06", order: 6, icon: "📋", title: "מינטרמים וסכום מכפלות",
  goal: "לכתוב פונקציה כסכום מינטרמים ולמצוא את אינדקס המינטרם מתוך טבלת האמת.",
  source: "ai-verified",
  lesson: { html: String.raw`
<p><b>מינטרם</b> הוא מכפלה שבה מופיעים <b>כל</b> המשתנים, כל אחד פעם אחת, עם קו או בלי. הוא שווה $1$ בהצבה <b>אחת</b> בדיוק. כל פונקציה היא סכום המינטרמים של השורות שבהן היא $1$.</p>
<p><b>אינדקס:</b> קוראים את ההצבה כמספר בינארי כש-$A$ הספרה הגבוהה. משתנה בלי קו הוא $1$, משתנה עם קו הוא $0$. למשל עבור $(A,B,C)$: $A\bar B C$ הוא ההצבה $101$, כלומר מינטרם $m_5$.</p>
<div class="lesson-rule">🔑 <strong>מתכון:</strong> (1) בונים טבלת אמת. (2) מסמנים את השורות שבהן הפונקציה $1$. (3) כותבים את האינדקסים שלהן ב-$\Sigma(\dots)$.</div>
<div class="lesson-ex">דוגמה: $A\oplus B$ שווה $1$ ב-$(0,1)$ וב-$(1,0)$, כלומר האינדקסים $1$ ו-$2$: $\Sigma(1,2)=\bar A B+A\bar B$.</div>
<div class="lesson-trap">⚠️ <strong>המשתנה הראשון הוא הספרה הגבוהה.</strong> עבור $(A,B)$ ההצבה $(1,0)$ היא אינדקס $2$ ולא $1$.</div>
` },
  questions: [
    { id: "C06-Q1", question: "מהו אינדקס המינטרם $A\\bar B C$ במשתנים $(A,B,C)$, כש-$A$ הספרה הגבוהה?",
      options: [{ id: "a", value: "5" }, { id: "b", value: "3" }, { id: "c", value: "6" }, { id: "d", value: "2" }],
      correctId: "a",
      explanation: "$A\\bar B C$ שווה $1$ ב-$(1,0,1)$, ובינארי $101=5$. התשובה $3$ היא $011$ ($\\bar A B C$), $6$ היא $110$ ($A B\\bar C$), ו-$2$ היא $010$ ($\\bar A B\\bar C$).",
      recap: "משתנה בלי קו = 1, עם קו = 0; $A$ הספרה הגבוהה" },
    { id: "C06-Q2", question: "הפונקציה $\\overline{A\\oplus B}$ במשתנים $(A,B)$ שווה:",
      options: [
        { id: "a", type: "math", value: "\\Sigma(1,2)" },
        { id: "b", type: "math", value: "\\Sigma(0,3)" },
        { id: "c", type: "math", value: "\\Sigma(0,1)" },
        { id: "d", type: "math", value: "\\Sigma(3)" }],
      correctId: "b",
      explanation: "$\\overline{A\\oplus B}$ שווה $1$ כשהקלטים זהים: $(0,0)$ ו-$(1,1)$, אינדקסים $0$ ו-$3$. הסכום $\\Sigma(1,2)$ הוא $A\\oplus B$ עצמו. הסכום $\\Sigma(3)$ הוא $AB$ בלבד ושוכח את $(0,0)$.",
      recap: "XNOR = $\\Sigma(0,3)$ ו-XOR = $\\Sigma(1,2)$" },
    { id: "C06-Q3", question: "הפונקציה $A\\oplus B\\oplus C$ במשתנים $(A,B,C)$ שווה:",
      options: [
        { id: "a", type: "math", value: "\\Sigma(0,3,5,6)" },
        { id: "b", type: "math", value: "\\Sigma(1,2,4,7)" },
        { id: "c", type: "math", value: "\\Sigma(1,2,3,4)" },
        { id: "d", type: "math", value: "\\Sigma(1,4,7)" }],
      correctId: "b",
      explanation: "הפונקציה $1$ כשמספר ה-$1$-ים אי זוגי: $001=1$, $010=2$, $100=4$, $111=7$. התשובה $\\Sigma(0,3,5,6)$ היא המשלים (מספר זוגי של $1$-ים). התשובה $\\Sigma(1,4,7)$ מחסירה את $2$.",
      recap: "XOR של שלושה משתנים: אינדקסים עם מספר אי זוגי של ביטים דולקים" },
    { id: "C06-Q4", question: "הפונקציה $A+BC$ במשתנים $(A,B,C)$ שווה:",
      options: [
        { id: "a", type: "math", value: "\\Sigma(3,4,5,6,7)" },
        { id: "b", type: "math", value: "\\Sigma(4,5,6,7)" },
        { id: "c", type: "math", value: "\\Sigma(1,3,5,7)" },
        { id: "d", type: "math", value: "\\Sigma(3,5,6,7)" }],
      correctId: "a",
      explanation: "כש-$A=1$ (אינדקסים $4$ עד $7$) הפונקציה $1$. כש-$A=0$ היא $BC$, כלומר $011=3$. סך הכול $\\Sigma(3,4,5,6,7)$. התשובה $\\Sigma(4,5,6,7)$ שוכחת את $3$.",
      recap: "מפרקים לפי המשתנה הגבוה" },
    { id: "C06-Q5", question: "כמה מינטרמים יש בסכום המינטרמים של $(A\\oplus B)\\cdot C$ במשתנים $(A,B,C)$?",
      options: [{ id: "a", value: "1" }, { id: "b", value: "2" }, { id: "c", value: "3" }, { id: "d", value: "4" }],
      correctId: "b",
      explanation: "נדרש $C=1$ ו-$A\\ne B$: ההצבות $(0,1,1)$ ו-$(1,0,1)$, כלומר $\\Sigma(3,5)$. אפשר לטעות ולספור את $4$ הצבות של $A\\oplus B$ בלי להגביל ל-$C=1$.",
      recap: "ספירת מינטרמים = ספירת הצבות שבהן הפונקציה 1" },
    { id: "C06-Q6", question: "הפונקציה $\\bar A\\oplus B$ במשתנים $(A,B)$ שווה:",
      options: [
        { id: "a", type: "math", value: "\\Sigma(1,2)" },
        { id: "b", type: "math", value: "\\Sigma(0,3)" },
        { id: "c", type: "math", value: "\\Sigma(0,2)" },
        { id: "d", type: "math", value: "\\Sigma(1,3)" }],
      correctId: "b",
      explanation: "$\\bar A\\oplus B=\\overline{A\\oplus B}$, שהוא $1$ כשהקלטים זהים: $\\Sigma(0,3)$. בבדיקה ישירה: $(0,0)$ נותן $1\\oplus0=1$, $(1,1)$ נותן $0\\oplus1=1$, ו-$(0,1)$ נותן $1\\oplus1=0$.",
      recap: "קו אחד על אופרנד של XOR הופך אותו ל-XNOR" },
  ],
});
