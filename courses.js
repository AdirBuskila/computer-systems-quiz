window.COURSES = {
 "boolean": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🔌",
    "title": "AND, OR, NOT וטבלת אמת",
    "goal": "לחשב ערך של ביטוי בוליאני בהצבה, לדעת מה סדר הפעולות, ולספור שורות בטבלת אמת.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>משתנה בוליאני הוא ביט אחד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>. שלוש פעולות בסיס:</p>\n<table>\n<thead><tr><th>פעולה</th><th>כתיבה</th><th>מתי התוצאה 1</th></tr></thead>\n<tbody>\n<tr><td>NOT (משלים)</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A</annotation></semantics></math></span></td><td>כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=0</annotation></semantics></math></span></td></tr>\n<tr><td>AND (כפל)</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\cdot B</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">AB</annotation></semantics></math></span></td><td>כששניהם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span></td></tr>\n<tr><td>OR (חיבור)</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A+B</annotation></semantics></math></span></td><td>כשלפחות אחד מהם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span></td></tr>\n</tbody></table>\n<div class=\"lesson-rule\">🔑 <strong>סדר פעולות:</strong> קודם NOT, אחר כך AND, ובסוף OR. לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A+BC</annotation></semantics></math></span> פירושו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mo stretchy=\"false\">(</mo><mi>B</mi><mo>⋅</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">A+(B\\cdot C)</annotation></semantics></math></span> ולא <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>⋅</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">(A+B)\\cdot C</annotation></semantics></math></span>.</span></div>\n<h3>טבלת אמת</h3>\n<p>טבלת אמת מונה את כל הצירופים של המשתנים. עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> משתנים יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n</annotation></semantics></math></span> שורות: שני משתנים נותנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> שורות, שלושה נותנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span>, ארבעה נותנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">16</annotation></semantics></math></span>. מחשבים את הביטוי בכל שורה, ומשווים שני ביטויים שורה אחר שורה.</p>\n<div class=\"lesson-ex\">דוגמה: הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mi>B</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A + BC</annotation></semantics></math></span> בהצבה <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>B</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>C</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=1,\\ B=1,\\ C=0</annotation></semantics></math></span>.</span><br>\n<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">\\bar A = 0</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mi>C</mi><mo>=</mo><mn>1</mn><mo>⋅</mo><mn>0</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">BC = 1\\cdot 0 = 0</annotation></semantics></math></span>, לכן <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>+</mo><mn>0</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0 + 0 = 0</annotation></semantics></math></span>.</span></div>\n<div class=\"lesson-trap\">⚠️ <strong>לא מחליפים את סדר הפעולות.</strong> בהצבה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>B</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>C</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=1,\\ B=0,\\ C=0</annotation></semantics></math></span> מתקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mi>C</mi><mo>=</mo><mn>1</mn><mo>+</mo><mn>0</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A+BC = 1+0 = 1</annotation></semantics></math></span>, ואילו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mi>C</mi><mo>=</mo><mn>1</mn><mo>⋅</mo><mn>0</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">(A+B)C = 1\\cdot 0 = 0</annotation></semantics></math></span>. אלה שני ביטויים שונים.</div>\n"
    },
    "questions": [
     {
      "id": "C01-Q1",
      "question": "מה ערך הביטוי $A + B\\cdot C$ בהצבה $A=1,\\ B=0,\\ C=0$?",
      "options": [
       {
        "id": "a",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "b",
        "value": "0",
        "type": "text",
        "html": "0"
       }
      ],
      "correctId": "a",
      "explanation": "AND קודם: $B\\cdot C = 0\\cdot 0 = 0$, ואז $A + 0 = 1$. התשובה $0$ מתקבלת אם מחברים קודם ($A+B=1$) וכופלים אחר כך ב-$C$, כלומר קוראים את הביטוי כ-$(A+B)\\cdot C$ בניגוד לסדר הפעולות.",
      "recap": "AND קודם ל-OR: $A+BC=A+(BC)$",
      "questionHtml": "מה ערך הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mo>⋅</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A + B\\cdot C</annotation></semantics></math></span> בהצבה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>B</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>C</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=1,\\ B=0,\\ C=0</annotation></semantics></math></span>?",
      "explanationHtml": "AND קודם: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>⋅</mo><mi>C</mi><mo>=</mo><mn>0</mn><mo>⋅</mo><mn>0</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">B\\cdot C = 0\\cdot 0 = 0</annotation></semantics></math></span>, ואז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mn>0</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A + 0 = 1</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> מתקבלת אם מחברים קודם (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A+B=1</annotation></semantics></math></span>) וכופלים אחר כך ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">C</annotation></semantics></math></span>, כלומר קוראים את הביטוי כ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>⋅</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">(A+B)\\cdot C</annotation></semantics></math></span> בניגוד לסדר הפעולות.",
      "recapHtml": "AND קודם ל-OR: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mi>C</mi><mo>=</mo><mi>A</mi><mo>+</mo><mo stretchy=\"false\">(</mo><mi>B</mi><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">A+BC=A+(BC)</annotation></semantics></math></span>"
     },
     {
      "id": "C01-Q2",
      "question": "בהצבה $A=1,\\ B=1,\\ C=0$, מה ערך הביטוי $\\bar A + B\\cdot C$?",
      "options": [
       {
        "id": "a",
        "value": "0",
        "type": "text",
        "html": "0"
       },
       {
        "id": "b",
        "value": "1",
        "type": "text",
        "html": "1"
       }
      ],
      "correctId": "a",
      "explanation": "$\\bar A = 0$ ו-$B\\cdot C = 1\\cdot 0 = 0$, ולכן $0+0=0$. התשובה $1$ מתקבלת מקריאה של $\\bar A$ כ-$A$ (שוכחים את המשלים).",
      "recap": "קודם משלימים, אחר כך מכפילים, בסוף מחברים",
      "questionHtml": "בהצבה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>B</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>C</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=1,\\ B=1,\\ C=0</annotation></semantics></math></span>, מה ערך הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mi>B</mi><mo>⋅</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A + B\\cdot C</annotation></semantics></math></span>?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">\\bar A = 0</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>⋅</mo><mi>C</mi><mo>=</mo><mn>1</mn><mo>⋅</mo><mn>0</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">B\\cdot C = 1\\cdot 0 = 0</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>+</mo><mn>0</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0+0=0</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> מתקבלת מקריאה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A</annotation></semantics></math></span> כ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> (שוכחים את המשלים).",
      "recapHtml": "קודם משלימים, אחר כך מכפילים, בסוף מחברים"
     },
     {
      "id": "C01-Q3",
      "question": "באיזו הצבה של $(A,B,C)$ הביטוי $A\\cdot\\bar B\\cdot C$ שווה $1$?",
      "options": [
       {
        "id": "a",
        "value": "$(A,B,C)=(1,1,1)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B,C)=(1,1,1)</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$(A,B,C)=(0,0,1)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B,C)=(0,0,1)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$(A,B,C)=(1,0,1)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B,C)=(1,0,1)</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$(A,B,C)=(1,0,0)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B,C)=(1,0,0)</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "מכפלה שווה $1$ רק כשכל גורם שווה $1$: $A=1$, $\\bar B=1$ (כלומר $B=0$) ו-$C=1$. זו ההצבה $(1,0,1)$. ב-$(1,1,1)$ הגורם $\\bar B$ הוא $0$; ב-$(0,0,1)$ הגורם $A$ הוא $0$; ב-$(1,0,0)$ הגורם $C$ הוא $0$.",
      "recap": "AND שווה 1 רק כשכל הגורמים 1; גורם עם קו שווה 1 כשהמשתנה 0",
      "questionHtml": "באיזו הצבה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B,C)</annotation></semantics></math></span> הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>⋅</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\cdot\\bar B\\cdot C</annotation></semantics></math></span> שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>?",
      "explanationHtml": "מכפלה שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> רק כשכל גורם שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\bar B=1</annotation></semantics></math></span> (כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">B=0</annotation></semantics></math></span>) ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C=1</annotation></semantics></math></span>. זו ההצבה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0,1)</annotation></semantics></math></span>. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,1,1)</annotation></semantics></math></span> הגורם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar B</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>; ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,0,1)</annotation></semantics></math></span> הגורם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>; ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0,0)</annotation></semantics></math></span> הגורם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">C</annotation></semantics></math></span> הוא <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>.</span>",
      "recapHtml": "AND שווה 1 רק כשכל הגורמים 1; גורם עם קו שווה 1 כשהמשתנה 0"
     },
     {
      "id": "C01-Q4",
      "question": "בטבלת אמת של ביטוי עם $4$ משתנים, כמה שורות יש?",
      "options": [
       {
        "id": "a",
        "value": "8",
        "type": "text",
        "html": "8"
       },
       {
        "id": "b",
        "value": "16",
        "type": "text",
        "html": "16"
       },
       {
        "id": "c",
        "value": "4",
        "type": "text",
        "html": "4"
       },
       {
        "id": "d",
        "value": "32",
        "type": "text",
        "html": "32"
       }
      ],
      "correctId": "b",
      "explanation": "כל משתנה מכפיל את מספר הצירופים ב-$2$, ולכן $2^4=16$. הערך $8$ הוא מספר השורות של $3$ משתנים, $4$ של שניים, ו-$32$ של חמישה.",
      "recap": "$n$ משתנים: $2^n$ שורות",
      "questionHtml": "בטבלת אמת של ביטוי עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> משתנים, כמה שורות יש?",
      "explanationHtml": "כל משתנה מכפיל את מספר הצירופים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>4</mn></msup><mo>=</mo><mn>16</mn></mrow><annotation encoding=\"application/x-tex\">2^4=16</annotation></semantics></math></span>. הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> הוא מספר השורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> משתנים, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> של שניים, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>32</mn></mrow><annotation encoding=\"application/x-tex\">32</annotation></semantics></math></span> של חמישה.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">n</annotation></semantics></math></span> משתנים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n</annotation></semantics></math></span> שורות"
     },
     {
      "id": "C01-Q5",
      "question": "בטבלת אמת של הביטוי $A + B\\cdot C$ עם שלושה משתנים, בכמה מתוך $8$ השורות הביטוי שווה $1$?",
      "options": [
       {
        "id": "a",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "b",
        "value": "4",
        "type": "text",
        "html": "4"
       },
       {
        "id": "c",
        "value": "5",
        "type": "text",
        "html": "5"
       },
       {
        "id": "d",
        "value": "6",
        "type": "text",
        "html": "6"
       }
      ],
      "correctId": "c",
      "explanation": "כש-$A=1$ (ארבע שורות: $B,C$ חופשיים) הביטוי $1$. כש-$A=0$ הוא שווה $BC$, שהוא $1$ רק ב-$B=C=1$, שורה אחת. סך הכול $4+1=5$. התשובה $4$ שוכחת את השורה שבה $BC=1$; התשובה $3$ היא מספר השורות של $(A+B)C$, כלומר קריאה בניגוד לסדר הפעולות; התשובה $6$ נובעת מספירה שגויה.",
      "recap": "סופרים שורות לפי פירוק לפי $A$: $A=1$ כל הארבע, ו-$A=0$ לפי $BC$",
      "questionHtml": "בטבלת אמת של הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mo>⋅</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A + B\\cdot C</annotation></semantics></math></span> עם שלושה משתנים, בכמה מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> השורות הביטוי שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>?",
      "explanationHtml": "כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=1</annotation></semantics></math></span> (ארבע שורות: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">B,C</annotation></semantics></math></span> חופשיים) הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>. כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=0</annotation></semantics></math></span> הוא שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">BC</annotation></semantics></math></span>, שהוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> רק ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>=</mo><mi>C</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">B=C=1</annotation></semantics></math></span>, שורה אחת. סך הכול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">4+1=5</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> שוכחת את השורה שבה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mi>C</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">BC=1</annotation></semantics></math></span>; התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> היא מספר השורות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">(A+B)C</annotation></semantics></math></span>, כלומר קריאה בניגוד לסדר הפעולות; התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> נובעת מספירה שגויה.",
      "recapHtml": "סופרים שורות לפי פירוק לפי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=1</annotation></semantics></math></span> כל הארבע, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=0</annotation></semantics></math></span> לפי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">BC</annotation></semantics></math></span>"
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "⊕",
    "title": "XOR: ההגדרה והחוקים",
    "goal": "לחשב XOR של כמה ביטים, ולהשתמש בחוקי XOR כדי לצמצם שרשרת.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span> (XOR, \"או מוציא\") שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> כשהקלטים <b>שונים</b>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>⊕</mo><mn>0</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0\\oplus 0=0</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>⊕</mo><mn>1</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">0\\oplus 1=1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mn>0</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus 0=1</annotation></semantics></math></span>, <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus 1=0</annotation></semantics></math></span>.</span></p>\n<p>שרשרת XOR של כמה ביטים שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> כשמספר ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>-ים בה <b>אי זוגי</b>. אפשר גם לסדר מחדש כרצוננו.</p>\n<table>\n<thead><tr><th>חוק</th><th>משמעות</th></tr></thead>\n<tbody>\n<tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>⊕</mo><mn>0</mn><mo>=</mo><mi>X</mi></mrow><annotation encoding=\"application/x-tex\">X\\oplus 0 = X</annotation></semantics></math></span></td><td>XOR עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> לא משנה</td></tr>\n<tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>⊕</mo><mn>1</mn><mo>=</mo><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">X\\oplus 1 = \\bar X</annotation></semantics></math></span></td><td>XOR עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> הופך</td></tr>\n<tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>⊕</mo><mi>X</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">X\\oplus X = 0</annotation></semantics></math></span></td><td>שני זהים מתבטלים</td></tr>\n<tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>⊕</mo><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">X\\oplus \\bar X = 1</annotation></semantics></math></span></td><td>משתנה ומשלימו נותנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span></td></tr>\n<tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>⊕</mo><mi>Y</mi><mo>=</mo><mi>Y</mi><mo>⊕</mo><mi>X</mi></mrow><annotation encoding=\"application/x-tex\">X\\oplus Y = Y\\oplus X</annotation></semantics></math></span></td><td>חילוף</td></tr>\n<tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>X</mi><mo>⊕</mo><mi>Y</mi><mo stretchy=\"false\">)</mo><mo>⊕</mo><mi>Z</mi><mo>=</mo><mi>X</mi><mo>⊕</mo><mo stretchy=\"false\">(</mo><mi>Y</mi><mo>⊕</mo><mi>Z</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(X\\oplus Y)\\oplus Z = X\\oplus(Y\\oplus Z)</annotation></semantics></math></span></td><td>קיבוץ</td></tr>\n</tbody></table>\n<div class=\"lesson-rule\">🔑 <strong>שרשרת XOR מצמצמים בזוגות:</strong> מסדרים כך שאותו משתנה יופיע פעמיים, ושני עותקים מתבטלים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>⊕</mo><mi>X</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">X\\oplus X=0</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>⊕</mo><mi>Y</mi><mo>=</mo><mi>Y</mi></mrow><annotation encoding=\"application/x-tex\">0\\oplus Y=Y</annotation></semantics></math></span>).</div>\n<div class=\"lesson-ex\">דוגמה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>⊕</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">(A\\oplus B)\\oplus A</annotation></semantics></math></span>. מסדרים מחדש: <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>=</mo><mn>0</mn><mo>⊕</mo><mi>B</mi><mo>=</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus A\\oplus B = 0\\oplus B = B</annotation></semantics></math></span>.</span></div>\n<div class=\"lesson-trap\">⚠️ <strong>XOR אינו OR.</strong> ב-OR מתקיים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1+1=1</annotation></semantics></math></span>, וב-XOR מתקיים <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus 1=0</annotation></semantics></math></span>.</span></div>\n"
    },
    "questions": [
     {
      "id": "C02-Q1",
      "question": "מה ערך הביטוי $1\\oplus 1\\oplus 1$?",
      "options": [
       {
        "id": "a",
        "value": "0",
        "type": "text",
        "html": "0"
       },
       {
        "id": "b",
        "value": "1",
        "type": "text",
        "html": "1"
       }
      ],
      "correctId": "b",
      "explanation": "$1\\oplus 1 = 0$, ואז $0\\oplus 1 = 1$. שלושה $1$-ים הם מספר אי זוגי, ולכן התוצאה $1$. התשובה $0$ מתקבלת אם מזווגים שני $1$-ים ושוכחים את השלישי.",
      "recap": "XOR שווה 1 כשמספר ה-1-ים אי זוגי",
      "questionHtml": "מה ערך הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mn>1</mn><mo>⊕</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus 1\\oplus 1</annotation></semantics></math></span>?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus 1 = 0</annotation></semantics></math></span>, ואז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>⊕</mo><mn>1</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">0\\oplus 1 = 1</annotation></semantics></math></span>. שלושה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>-ים הם מספר אי זוגי, ולכן התוצאה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> מתקבלת אם מזווגים שני <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>-ים ושוכחים את השלישי.",
      "recapHtml": "XOR שווה 1 כשמספר ה-1-ים אי זוגי"
     },
     {
      "id": "C02-Q2",
      "question": "הביטוי $A\\oplus 1$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "A",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "\\bar A",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "0",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "1",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "XOR עם $1$ הופך: $0\\oplus1=1$ ו-$1\\oplus1=0$, כלומר $\\bar A$. התשובה $A$ היא התוצאה של $A\\oplus 0$. התשובות הקבועות שגויות, כי התוצאה תלויה ב-$A$.",
      "recap": "$X\\oplus 1=\\bar X$",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A\\oplus 1</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "XOR עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> הופך: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>⊕</mo><mn>1</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">0\\oplus1=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus1=0</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> היא התוצאה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A\\oplus 0</annotation></semantics></math></span>. התשובות הקבועות שגויות, כי התוצאה תלויה ב-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>.</span>",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>⊕</mo><mn>1</mn><mo>=</mo><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">X\\oplus 1=\\bar X</annotation></semantics></math></span>"
     },
     {
      "id": "C02-Q3",
      "question": "הביטוי $A\\oplus \\bar A$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "0",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "\\bar A",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "1",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
       }
      ],
      "correctId": "d",
      "explanation": "$A$ ו-$\\bar A$ תמיד שונים, ו-XOR של שני ביטים שונים הוא $1$. התשובה $0$ היא של $A\\oplus A$.",
      "recap": "$X\\oplus\\bar X=1$ ו-$X\\oplus X=0$",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A\\oplus \\bar A</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A</annotation></semantics></math></span> תמיד שונים, ו-XOR של שני ביטים שונים הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> היא של <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus A</annotation></semantics></math></span>.</span>",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>⊕</mo><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">X\\oplus\\bar X=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>⊕</mo><mi>X</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">X\\oplus X=0</annotation></semantics></math></span>"
     },
     {
      "id": "C02-Q4",
      "question": "הביטוי $(A\\oplus B)\\oplus A$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "A",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A\\oplus B\\oplus A\\oplus A",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>A</mi><mo>⊕</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus A\\oplus A</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "0",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span>"
       }
      ],
      "correctId": "d",
      "explanation": "$A\\oplus A\\oplus B = 0\\oplus B = B$. התשובה $A$ מתקבלת מביטול $B$ במקום $A$. התשובה $0$ מתקבלת אם מבטלים את שניהם. האפשרות $A\\oplus B\\oplus A\\oplus A$ שווה ל-$A\\oplus B$ (שניים מתוך שלושת ה-$A$ מתבטלים), ולכן אינה $B$.",
      "recap": "זוגות זהים מתבטלים: $X\\oplus X=0$",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>⊕</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">(A\\oplus B)\\oplus A</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>=</mo><mn>0</mn><mo>⊕</mo><mi>B</mi><mo>=</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus A\\oplus B = 0\\oplus B = B</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> מתקבלת מביטול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span> במקום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> מתקבלת אם מבטלים את שניהם. האפשרות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>A</mi><mo>⊕</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus A\\oplus A</annotation></semantics></math></span> שווה ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span> (שניים מתוך שלושת ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> מתבטלים), ולכן אינה <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span>.</span>",
      "recapHtml": "זוגות זהים מתבטלים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>⊕</mo><mi>X</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">X\\oplus X=0</annotation></semantics></math></span>"
     },
     {
      "id": "C02-Q5",
      "question": "בהצבה $A=1,\\ B=1,\\ C=1,\\ D=0$, מה ערך $A\\oplus B\\oplus C\\oplus D$?",
      "options": [
       {
        "id": "a",
        "value": "0",
        "type": "text",
        "html": "0"
       },
       {
        "id": "b",
        "value": "1",
        "type": "text",
        "html": "1"
       }
      ],
      "correctId": "b",
      "explanation": "יש שלושה $1$-ים, מספר אי זוגי, ולכן התוצאה $1$. בדרך אחרת: $1\\oplus1=0$, $0\\oplus1=1$, $1\\oplus 0=1$. התשובה $0$ היא של ארבעה $1$-ים או שניים.",
      "recap": "סופרים 1-ים: אי זוגי נותן 1",
      "questionHtml": "בהצבה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>B</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>C</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mtext> </mtext><mi>D</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=1,\\ B=1,\\ C=1,\\ D=0</annotation></semantics></math></span>, מה ערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi><mo>⊕</mo><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus C\\oplus D</annotation></semantics></math></span>?",
      "explanationHtml": "יש שלושה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>-ים, מספר אי זוגי, ולכן התוצאה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>. בדרך אחרת: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus1=0</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>⊕</mo><mn>1</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">0\\oplus1=1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mn>0</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus 0=1</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> היא של ארבעה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>-ים או שניים.",
      "recapHtml": "סופרים 1-ים: אי זוגי נותן 1"
     },
     {
      "id": "C02-Q6",
      "question": "הביטוי $A\\oplus B\\oplus A\\oplus C$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "B\\oplus C",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">B\\oplus C</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A\\oplus B\\oplus C",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus C</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "A\\oplus C",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus C</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "B+C",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>+</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">B+C</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "שני ה-$A$ מתבטלים: $A\\oplus A=0$, ונשאר $B\\oplus C$. התשובה $A\\oplus B\\oplus C$ שוכחת לבטל. $B+C$ הוא OR, שונה מ-XOR כש-$B=C=1$ ($1$ מול $0$).",
      "recap": "מבטלים משתנים שמופיעים בזוגות",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>A</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus A\\oplus C</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "שני ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> מתבטלים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>A</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A\\oplus A=0</annotation></semantics></math></span>, ונשאר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">B\\oplus C</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus C</annotation></semantics></math></span> שוכחת לבטל. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>+</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">B+C</annotation></semantics></math></span> הוא OR, שונה מ-XOR כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>=</mo><mi>C</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">B=C=1</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> מול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>).",
      "recapHtml": "מבטלים משתנים שמופיעים בזוגות"
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "🧩",
    "title": "דה מורגן, בליעה ופישוט",
    "goal": "להשתמש בדה מורגן ובחוקי הבליעה כדי לפשט ביטוי עם AND, OR ו-NOT.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>ארבעה חוקים מספיקים לרוב הפישוטים:</p>\n<table>\n<thead><tr><th>חוק</th><th>נוסחה</th></tr></thead>\n<tbody>\n<tr><td>דה מורגן</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow></mrow><mo>=</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mtext> </mtext><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\overline{A+B}=\\bar A\\,\\bar B</annotation></semantics></math></span> &nbsp;ו-&nbsp; <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mi>B</mi></mrow></mrow><mo>=</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\overline{AB}=\\bar A+\\bar B</annotation></semantics></math></span></td></tr>\n<tr><td>בליעה</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>A</mi><mi>B</mi><mo>=</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A+AB=A</annotation></semantics></math></span> &nbsp;ו-&nbsp; <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A(A+B)=A</annotation></semantics></math></span></td></tr>\n<tr><td>הפשטת משלים</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A+\\bar A B=A+B</annotation></semantics></math></span></td></tr>\n<tr><td>פילוג כפול</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mi>C</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>+</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">A+BC=(A+B)(A+C)</annotation></semantics></math></span></td></tr>\n</tbody></table>\n<div class=\"lesson-rule\">🔑 <strong>דה מורגן:</strong> מורידים את הקו הארוך, מחליפים AND ב-OR (ולהפך), ומציבים קו על כל משתנה.</div>\n<div class=\"lesson-ex\">דוגמה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A+\\bar A B</annotation></semantics></math></span>. אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=1</annotation></semantics></math></span> הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, ואם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=0</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span>. לכן הוא שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A+B</annotation></semantics></math></span> (שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> כשאחד מהם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>).</div>\n<div class=\"lesson-trap\">⚠️ <strong>קו על ביטוי שלם איננו קו על כל משתנה.</strong> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow></mrow><mo mathvariant=\"normal\">≠</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\overline{A+B}\\ne\\bar A+\\bar B</annotation></semantics></math></span>: ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=1,B=0</annotation></semantics></math></span> משמאל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> ומימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>. שוברים את הקו רק יחד עם החלפת הפעולה.</div>\n<div class=\"lesson-trap\">⚠️ <strong>בליעה רק עם AND ו-OR.</strong> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>A</mi><mi>B</mi><mo>=</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A+AB=A</annotation></semantics></math></span> נכון, אבל כשמופיע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>⊕</mo></mrow><annotation encoding=\"application/x-tex\">\\oplus</annotation></semantics></math></span> אין בליעה.</div>\n"
    },
    "questions": [
     {
      "id": "C03-Q1",
      "question": "הביטוי $\\overline{A+B}$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "\\bar A+\\bar B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A+\\bar B</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A\\cdot\\bar B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A\\cdot\\bar B</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "\\bar A\\cdot\\bar B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⋅</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A\\cdot\\bar B</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "\\bar A+B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A+B</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "לפי דה מורגן OR הופך ל-AND וכל משתנה מקבל קו: $\\bar A\\cdot\\bar B$. התשובה $\\bar A+\\bar B$ שוכחת להפוך את הפעולה (זה $\\overline{AB}$). שתי האחרות אינן שקולות: ב-$A=0,B=0$ הביטוי המקורי $1$ ואילו $A\\bar B=0$; וב-$A=0,B=1$ הוא $0$ ואילו $\\bar A+B=1$.",
      "recap": "$\\overline{A+B}=\\bar A\\bar B$",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A+B}</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "לפי דה מורגן OR הופך ל-AND וכל משתנה מקבל קו: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⋅</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A\\cdot\\bar B</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A+\\bar B</annotation></semantics></math></span> שוכחת להפוך את הפעולה (זה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{AB}</annotation></semantics></math></span>). שתי האחרות אינן שקולות: ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=0,B=0</annotation></semantics></math></span> הביטוי המקורי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> ואילו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A\\bar B=0</annotation></semantics></math></span>; וב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mi>B</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=0,B=1</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> ואילו <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mi>B</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\bar A+B=1</annotation></semantics></math></span>.</span>",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow></mrow><mo>=</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\overline{A+B}=\\bar A\\bar B</annotation></semantics></math></span>"
     },
     {
      "id": "C03-Q2",
      "question": "הביטוי $A+AB$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "A",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "AB",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">AB</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "A+B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A+B</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "בליעה: $A+AB=A(1+B)=A$. כש-$A=1$ הביטוי $1$, וכש-$A=0$ הוא $0$, בדיוק כמו $A$. הביטוי $A+B$ שונה ב-$A=0,B=1$, שם הוא $1$ ואילו $A+AB=0$.",
      "recap": "בליעה: $A+AB=A$",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>A</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A+AB</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "בליעה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>A</mi><mi>B</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A+AB=A(1+B)=A</annotation></semantics></math></span>. כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=1</annotation></semantics></math></span> הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, וכש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=0</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>, בדיוק כמו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>. הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A+B</annotation></semantics></math></span> שונה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mi>B</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=0,B=1</annotation></semantics></math></span>, שם הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> ואילו <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>A</mi><mi>B</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A+AB=0</annotation></semantics></math></span>.</span>",
      "recapHtml": "בליעה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>A</mi><mi>B</mi><mo>=</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A+AB=A</annotation></semantics></math></span>"
     },
     {
      "id": "C03-Q3",
      "question": "הביטוי $A+\\bar A B$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "A\\cdot B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\cdot B</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A+B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A+B</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "A",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "\\bar A B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A B</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "אם $A=1$ התוצאה $1$; אם $A=0$ התוצאה $B$. זהו בדיוק $A+B$. הביטוי $A$ לא נכון ב-$A=0,B=1$ (שם התוצאה $1$), ו-$AB$ ו-$\\bar A B$ שווים $0$ ב-$A=1,B=0$ ו-$A=1$ בהתאמה, בעוד שהמקור $1$.",
      "recap": "$A+\\bar A B=A+B$",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A+\\bar A B</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=1</annotation></semantics></math></span> התוצאה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>; אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=0</annotation></semantics></math></span> התוצאה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">B</annotation></semantics></math></span>. זהו בדיוק <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A+B</annotation></semantics></math></span>. הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> לא נכון ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mi>B</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=0,B=1</annotation></semantics></math></span> (שם התוצאה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>), ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">AB</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A B</annotation></semantics></math></span> שווים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=1,B=0</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=1</annotation></semantics></math></span> בהתאמה, בעוד שהמקור <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>.</span>",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A+\\bar A B=A+B</annotation></semantics></math></span>"
     },
     {
      "id": "C03-Q4",
      "question": "הביטוי $A\\cdot(\\bar A+B)$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "A\\cdot B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\cdot B</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A+B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A+B</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "\\bar A",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "A",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "מפזרים: $A\\bar A+AB=0+AB=AB$. הביטוי $A$ היה נכון לו הסוגריים הכילו $A$ (בליעה $A(A+B)=A$), אבל כאן יש $\\bar A$. ב-$A=1,B=0$ המקור $0$ ו-$A+B=1$.",
      "recap": "$A\\bar A=0$, ולכן $A(\\bar A+B)=AB$",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><mo stretchy=\"false\">(</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mi>B</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">A\\cdot(\\bar A+B)</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "מפזרים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mi>A</mi><mi>B</mi><mo>=</mo><mn>0</mn><mo>+</mo><mi>A</mi><mi>B</mi><mo>=</mo><mi>A</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\bar A+AB=0+AB=AB</annotation></semantics></math></span>. הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> היה נכון לו הסוגריים הכילו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> (בליעה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A(A+B)=A</annotation></semantics></math></span>), אבל כאן יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A</annotation></semantics></math></span>. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=1,B=0</annotation></semantics></math></span> המקור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> ו-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A+B=1</annotation></semantics></math></span>.</span>",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A\\bar A=0</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo stretchy=\"false\">(</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A(\\bar A+B)=AB</annotation></semantics></math></span>"
     },
     {
      "id": "C03-Q5",
      "question": "איזו מהמשוואות הבאות **אינה** נכונה?",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "\\overline{AB}=\\bar A+\\bar B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mi>B</mi></mrow></mrow><mo>=</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\overline{AB}=\\bar A+\\bar B</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A+BC=(A+B)(A+C)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mi>C</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>+</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">A+BC=(A+B)(A+C)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "\\overline{A+B}=\\bar A+\\bar B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow></mrow><mo>=</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\overline{A+B}=\\bar A+\\bar B</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "A+\\bar A B=A+B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A+\\bar A B=A+B</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "$\\overline{A+B}=\\bar A\\bar B$, לא $\\bar A+\\bar B$: ב-$A=1,B=0$ משמאל $0$ ומימין $1$. שלוש האחרות נכונות: דה מורגן ל-AND, פילוג כפול, והפשטת משלים.",
      "recap": "מספיקה הצבה אחת כדי לפסול משוואה",
      "questionHtml": "איזו מהמשוואות הבאות <strong>אינה</strong> נכונה?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow></mrow><mo>=</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\overline{A+B}=\\bar A\\bar B</annotation></semantics></math></span>, לא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A+\\bar B</annotation></semantics></math></span>: ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=1,B=0</annotation></semantics></math></span> משמאל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> ומימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>. שלוש האחרות נכונות: דה מורגן ל-AND, פילוג כפול, והפשטת משלים.",
      "recapHtml": "מספיקה הצבה אחת כדי לפסול משוואה"
     },
     {
      "id": "C03-Q6",
      "question": "הביטוי $\\overline{\\bar A\\cdot B}$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "A\\cdot\\bar B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A\\cdot\\bar B</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A+\\bar B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A+\\bar B</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "\\bar A+B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A+B</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "\\bar A\\cdot B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⋅</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A\\cdot B</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "דה מורגן: $\\overline{\\bar A B}=\\overline{\\bar A}+\\bar B=A+\\bar B$ (שני קווים על $A$ מתבטלים). התשובה $A\\bar B$ הופכת רק את המשתנים בלי להחליף את הפעולה. התשובה $\\bar A+B$ משאירה את $A$ בלי קו. התשובה $\\bar A B$ היא הביטוי המקורי ללא הקו.",
      "recap": "דה מורגן, ואז שני קווים על אותו משתנה מתבטלים",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⋅</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{\\bar A\\cdot B}</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "דה מורגן: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi></mrow></mrow><mo>=</mo><mrow class=\"ovl\"><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover></mrow><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>=</mo><mi>A</mi><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\overline{\\bar A B}=\\overline{\\bar A}+\\bar B=A+\\bar B</annotation></semantics></math></span> (שני קווים על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> מתבטלים). התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A\\bar B</annotation></semantics></math></span> הופכת רק את המשתנים בלי להחליף את הפעולה. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A+B</annotation></semantics></math></span> משאירה את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> בלי קו. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A B</annotation></semantics></math></span> היא הביטוי המקורי ללא הקו.",
      "recapHtml": "דה מורגן, ואז שני קווים על אותו משתנה מתבטלים"
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "🔁",
    "title": "משלים של XOR (XNOR)",
    "goal": "לטפל בקווים על XOR: להפוך, לבטל זוגות של משלימים, ולפתוח XOR לשני מחוברים.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>מכיוון ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>⊕</mo><mn>1</mn><mo>=</mo><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">X\\oplus 1=\\bar X</annotation></semantics></math></span>, כל קו על משתנה בשרשרת XOR הוא XOR עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>. מכאן:</p>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow><mo>=</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>B</mi><mo>=</mo><mi>A</mi><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}=\\bar A\\oplus B=A\\oplus\\bar B</annotation></semantics></math></span> &nbsp;ו-&nbsp; <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>=</mo><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus\\bar B=A\\oplus B</annotation></semantics></math></span></div>\n<ul>\n<li>קו על <b>כל</b> הביטוי: מספיק להעביר אותו על <b>אחד</b> האופרנדים.</li>\n<li>שני קווים על שני אופרנדים <b>מתבטלים</b> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus1=0</annotation></semantics></math></span>).</li>\n<li>בשרשרת: ספרו את הקווים. מספר זוגי של קווים לא משנה דבר, ומספר אי זוגי שקול לקו אחד על כל השרשרת.</li>\n</ul>\n<h3>פתיחת XOR</h3>\n<p><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>=</mo><mi>A</mi><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B=A\\bar B+\\bar A B</annotation></semantics></math></span>. מכאן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow><mo>=</mo><mi>A</mi><mi>B</mi><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}=AB+\\bar A\\bar B</annotation></semantics></math></span> (שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> כשהקלטים זהים, ולכן קוראים לו XNOR). וגם: AND מתפזר על XOR, <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>C</mi><mi>A</mi><mo>⊕</mo><mi>C</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">C(A\\oplus B)=CA\\oplus CB</annotation></semantics></math></span>.</span></p>\n<div class=\"lesson-ex\">דוגמה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus B\\oplus\\bar C</annotation></semantics></math></span>. שני קווים (על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> ועל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">C</annotation></semantics></math></span>) מתבטלים, ולכן הביטוי שווה <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus C</annotation></semantics></math></span>.</span></div>\n<div class=\"lesson-trap\">⚠️ <strong><span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow><mo mathvariant=\"normal\">≠</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}\\ne\\bar A\\oplus\\bar B</annotation></semantics></math></span>.</span></strong> בצד ימין שני הקווים מתבטלים, והוא שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span> ללא קו.</div>\n<div class=\"lesson-trap\">⚠️ <strong>הקו לא \"נכנס\" לתוך AND.</strong> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow><mo>⋅</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}\\cdot C</annotation></semantics></math></span> שונה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>C</mi><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A C\\oplus\\bar B C</annotation></semantics></math></span>, כי <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>C</mi><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mi>C</mi><mo>=</mo><mi>C</mi><mo>⋅</mo><mo stretchy=\"false\">(</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo stretchy=\"false\">)</mo><mo>=</mo><mi>C</mi><mo>⋅</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\bar A C\\oplus\\bar B C=C\\cdot(\\bar A\\oplus\\bar B)=C\\cdot(A\\oplus B)</annotation></semantics></math></span>.</span></div>\n"
    },
    "questions": [
     {
      "id": "C04-Q1",
      "question": "הביטוי $\\overline{A\\oplus B}$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "\\bar A\\oplus\\bar B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus\\bar B</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A\\oplus B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "A\\cdot\\bar B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A\\cdot\\bar B</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "\\bar A\\oplus B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus B</annotation></semantics></math></span>"
       }
      ],
      "correctId": "d",
      "explanation": "קו על XOR שקול לקו על אופרנד אחד: $\\overline{A\\oplus B}=\\bar A\\oplus B$. התשובה $\\bar A\\oplus\\bar B$ מכילה שני קווים שמתבטלים, והיא שווה $A\\oplus B$ (ההפך מהנדרש). התשובה $A\\oplus B$ היא הביטוי ללא הקו. $A\\bar B$ הוא רק חצי מהפתיחה של XOR.",
      "recap": "קו על XOR = קו על אופרנד אחד",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "קו על XOR שקול לקו על אופרנד אחד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow><mo>=</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}=\\bar A\\oplus B</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus\\bar B</annotation></semantics></math></span> מכילה שני קווים שמתבטלים, והיא שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span> (ההפך מהנדרש). התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span> היא הביטוי ללא הקו. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A\\bar B</annotation></semantics></math></span> הוא רק חצי מהפתיחה של XOR.",
      "recapHtml": "קו על XOR = קו על אופרנד אחד"
     },
     {
      "id": "C04-Q2",
      "question": "הביטוי $\\bar A\\oplus\\bar B$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "\\overline{A\\oplus B}",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A\\oplus B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "AB+\\bar A\\bar B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>B</mi><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">AB+\\bar A\\bar B</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "\\bar A\\cdot\\bar B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⋅</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A\\cdot\\bar B</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "שני קווים מתבטלים: $\\bar A\\oplus\\bar B=(A\\oplus1)\\oplus(B\\oplus1)=A\\oplus B$. התשובות $\\overline{A\\oplus B}$ ו-$AB+\\bar A\\bar B$ הן אותו XNOR, ולכן שגויות. $\\bar A\\bar B$ שווה $1$ רק כששניהם $0$, בעוד ש-$\\bar A\\oplus\\bar B$ שווה $0$ שם.",
      "recap": "שני קווים על שני אופרנדים מתבטלים",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus\\bar B</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "שני קווים מתבטלים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>=</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>⊕</mo><mo stretchy=\"false\">(</mo><mi>B</mi><mo>⊕</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus\\bar B=(A\\oplus1)\\oplus(B\\oplus1)=A\\oplus B</annotation></semantics></math></span>. התשובות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>B</mi><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">AB+\\bar A\\bar B</annotation></semantics></math></span> הן אותו XNOR, ולכן שגויות. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A\\bar B</annotation></semantics></math></span> שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> רק כששניהם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>, בעוד ש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus\\bar B</annotation></semantics></math></span> שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> שם.",
      "recapHtml": "שני קווים על שני אופרנדים מתבטלים"
     },
     {
      "id": "C04-Q3",
      "question": "הביטוי $\\bar A\\oplus B\\oplus\\bar C$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "\\overline{A\\oplus B\\oplus C}",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B\\oplus C}</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "\\bar A\\oplus B\\oplus C",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus B\\oplus C</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "A\\oplus B\\oplus C",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus C</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "A\\oplus B\\oplus\\bar C",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus\\bar C</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "יש שני קווים (על $A$ ועל $C$), מספר זוגי, והם מתבטלים: $A\\oplus B\\oplus C$. כל אחת מהאחרות מכילה מספר אי זוגי של קווים (אחד), ולכן שקולה ל-$\\overline{A\\oplus B\\oplus C}$ ולא למקור.",
      "recap": "מספר זוגי של קווים בשרשרת XOR מתבטל",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus B\\oplus\\bar C</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "יש שני קווים (על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> ועל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">C</annotation></semantics></math></span>), מספר זוגי, והם מתבטלים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus C</annotation></semantics></math></span>. כל אחת מהאחרות מכילה מספר אי זוגי של קווים (אחד), ולכן שקולה ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B\\oplus C}</annotation></semantics></math></span> ולא למקור.",
      "recapHtml": "מספר זוגי של קווים בשרשרת XOR מתבטל"
     },
     {
      "id": "C04-Q4",
      "question": "איזו מהמשוואות הבאות **אינה** נכונה?",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "A\\cdot(B\\oplus C)=A B\\oplus A C",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⋅</mo><mo stretchy=\"false\">(</mo><mi>B</mi><mo>⊕</mo><mi>C</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi><mi>B</mi><mo>⊕</mo><mi>A</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\cdot(B\\oplus C)=A B\\oplus A C</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A+(A\\oplus B)=A",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A+(A\\oplus B)=A</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "\\overline{A\\oplus B}=A\\oplus B\\oplus 1",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow><mo>=</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}=A\\oplus B\\oplus 1</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "A\\oplus A B=A\\cdot\\bar B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>A</mi><mi>B</mi><mo>=</mo><mi>A</mi><mo>⋅</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A\\oplus A B=A\\cdot\\bar B</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "ב-$A=0,B=1$ משמאל $0+1=1$ ומימין $0$, ולכן $A+(A\\oplus B)=A$ אינה נכונה: בליעה אינה חלה על XOR ($A+(A\\oplus B)=A+B$). האחרות נכונות: פילוג AND על XOR, $\\overline{X}=X\\oplus1$, ו-$A\\oplus AB=A(1\\oplus B)=A\\bar B$.",
      "recap": "אין בליעה עם XOR",
      "questionHtml": "איזו מהמשוואות הבאות <strong>אינה</strong> נכונה?",
      "explanationHtml": "ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mi>B</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=0,B=1</annotation></semantics></math></span> משמאל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">0+1=1</annotation></semantics></math></span> ומימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A+(A\\oplus B)=A</annotation></semantics></math></span> אינה נכונה: בליעה אינה חלה על XOR (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A+(A\\oplus B)=A+B</annotation></semantics></math></span>). האחרות נכונות: פילוג AND על XOR, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mi>X</mi></mrow><mo>=</mo><mi>X</mi><mo>⊕</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\overline{X}=X\\oplus1</annotation></semantics></math></span>, ו-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>A</mi><mi>B</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A\\oplus AB=A(1\\oplus B)=A\\bar B</annotation></semantics></math></span>.</span>",
      "recapHtml": "אין בליעה עם XOR"
     },
     {
      "id": "C04-Q5",
      "question": "הביטוי $(A\\oplus B)\\cdot(A\\oplus\\bar B)$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "1",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A\\oplus B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "0",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "A",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "$A\\oplus\\bar B=\\overline{A\\oplus B}$, כלומר המשלים של הגורם הראשון. מכפלת ביטוי במשלימו היא $X\\cdot\\bar X=0$. התשובה $A\\oplus B$ הייתה נכונה לו הגורמים היו זהים.",
      "recap": "$A\\oplus\\bar B$ הוא משלים של $A\\oplus B$, ו-$X\\bar X=0$",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>⋅</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A\\oplus B)\\cdot(A\\oplus\\bar B)</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>=</mo><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">A\\oplus\\bar B=\\overline{A\\oplus B}</annotation></semantics></math></span>, כלומר המשלים של הגורם הראשון. מכפלת ביטוי במשלימו היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>⋅</mo><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">X\\cdot\\bar X=0</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span> הייתה נכונה לו הגורמים היו זהים.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A\\oplus\\bar B</annotation></semantics></math></span> הוא משלים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span>, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">X\\bar X=0</annotation></semantics></math></span>"
     },
     {
      "id": "C04-Q6",
      "question": "הביטוי $\\overline{A\\oplus B}\\cdot C$ לא שווה ל-$\\bar A C\\oplus\\bar B C$. באיזו הצבה של $(A,B,C)$ הם שונים?",
      "options": [
       {
        "id": "a",
        "value": "$(1,1,0)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,1,0)</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$(0,1,1)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,1,1)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$(0,0,0)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,0,0)</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$(0,1,0)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,1,0)</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "ב-$(0,1,1)$: משמאל $\\overline{0\\oplus1}\\cdot1=0$. מימין $(\\bar A C)\\oplus(\\bar B C)=(1)\\oplus(0)=1$. שונים. בשלוש ההצבות האחרות $C=0$, ושני הצדדים $0$ (כל מכפלה ב-$C$ מתאפסת).",
      "recap": "פוסלים משוואה בהצבה אחת; כש-$C=0$ שני הצדדים תמיד שווים",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow><mo>⋅</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}\\cdot C</annotation></semantics></math></span> לא שווה ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>C</mi><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A C\\oplus\\bar B C</annotation></semantics></math></span>. באיזו הצבה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B,C)</annotation></semantics></math></span> הם שונים?",
      "explanationHtml": "ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,1,1)</annotation></semantics></math></span>: משמאל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mn>0</mn><mo>⊕</mo><mn>1</mn></mrow></mrow><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">\\overline{0\\oplus1}\\cdot1=0</annotation></semantics></math></span>. מימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>C</mi><mo stretchy=\"false\">)</mo><mo>⊕</mo><mo stretchy=\"false\">(</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mi>C</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>⊕</mo><mo stretchy=\"false\">(</mo><mn>0</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">(\\bar A C)\\oplus(\\bar B C)=(1)\\oplus(0)=1</annotation></semantics></math></span>. שונים. בשלוש ההצבות האחרות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">C=0</annotation></semantics></math></span>, ושני הצדדים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> (כל מכפלה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">C</annotation></semantics></math></span> מתאפסת).",
      "recapHtml": "פוסלים משוואה בהצבה אחת; כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">C=0</annotation></semantics></math></span> שני הצדדים תמיד שווים"
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "🔍",
    "title": "בדיקת שקילות והצבה פוסלת",
    "goal": "להכריע אם משוואה בוליאנית נכונה: לפסול אותה בהצבה אחת, או לאשר אותה בטבלת אמת שלמה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p>שאלת הפתיחה של כמעט כל מבחן: \"איזו משוואה <b>אינה</b> נכונה\". שני כלים:</p>\n<ol>\n<li><b>פסילה:</b> מספיקה הצבה <b>אחת</b> שבה שני הצדדים שונים. אז המשוואה לא נכונה.</li>\n<li><b>אישור:</b> כדי להוכיח שמשוואה נכונה צריך לבדוק <b>כל</b> השורות (עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> משתנים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> שורות), או לפשט אלגברית עד ששני הצדדים זהים.</li>\n</ol>\n<div class=\"lesson-rule\">🔑 <strong>סדר עבודה:</strong> מנסים הצבות מעורבות כמו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0,0)</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0,1)</annotation></semantics></math></span> וגם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,0,0)</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,1,1)</annotation></semantics></math></span>. ברוב המשוואות הכוזבות ההצבה הפוסלת היא מעורבת, כי הצבות אחידות מסתירות הבדלים.</div>\n<div class=\"lesson-ex\">דוגמה: האם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mo stretchy=\"false\">(</mo><mi>B</mi><mi>C</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">A\\oplus(BC)=(A\\oplus B)(A\\oplus C)</annotation></semantics></math></span>?<br>\nב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,0,0)</annotation></semantics></math></span> משני הצדדים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> ולכן אין הכרעה. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0,1)</annotation></semantics></math></span>: משמאל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mn>0</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus0=1</annotation></semantics></math></span>; מימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo>⊕</mo><mn>0</mn><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>⊕</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo>⋅</mo><mn>0</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">(1\\oplus0)(1\\oplus1)=1\\cdot0=0</annotation></semantics></math></span>. הצדדים שונים, ולכן המשוואה אינה נכונה.</div>\n<div class=\"lesson-trap\">⚠️ <strong>הצבה אחת שבה הצדדים שווים לא מוכיחה שקילות.</strong> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> שווים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,0)</annotation></semantics></math></span> וגם ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,1)</annotation></semantics></math></span>, אבל לא ב-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0)</annotation></semantics></math></span>.</span></div>\n"
    },
    "questions": [
     {
      "id": "C05-Q1",
      "question": "המשוואה $(A\\oplus B)+(A\\oplus C)=A\\oplus(B+C)$ אינה נכונה. באיזו הצבה של $(A,B,C)$ הצדדים שונים?",
      "options": [
       {
        "id": "a",
        "value": "$(0,0,0)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,0,0)</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$(1,1,1)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,1,1)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$(0,1,1)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,1,1)</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$(1,0,1)$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0,1)</annotation></semantics></math></span>"
       }
      ],
      "correctId": "d",
      "explanation": "ב-$(1,0,1)$: משמאל $(1\\oplus0)+(1\\oplus1)=1+0=1$; מימין $1\\oplus(0+1)=1\\oplus1=0$. שונים. ב-$(0,0,0)$ וב-$(1,1,1)$ שני הצדדים שווים ($0$ בשתיהן), וב-$(0,1,1)$ שניהם $1$.",
      "recap": "ההצבה הפוסלת בדרך כלל מעורבת",
      "questionHtml": "המשוואה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>C</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi><mo>⊕</mo><mo stretchy=\"false\">(</mo><mi>B</mi><mo>+</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A\\oplus B)+(A\\oplus C)=A\\oplus(B+C)</annotation></semantics></math></span> אינה נכונה. באיזו הצבה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B,C)</annotation></semantics></math></span> הצדדים שונים?",
      "explanationHtml": "ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0,1)</annotation></semantics></math></span>: משמאל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo>⊕</mo><mn>0</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>⊕</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mn>0</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">(1\\oplus0)+(1\\oplus1)=1+0=1</annotation></semantics></math></span>; מימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mo stretchy=\"false\">(</mo><mn>0</mn><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo>⊕</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus(0+1)=1\\oplus1=0</annotation></semantics></math></span>. שונים. ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,0,0)</annotation></semantics></math></span> וב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,1,1)</annotation></semantics></math></span> שני הצדדים שווים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> בשתיהן), וב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,1,1)</annotation></semantics></math></span> שניהם <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>.</span>",
      "recapHtml": "ההצבה הפוסלת בדרך כלל מעורבת"
     },
     {
      "id": "C05-Q2",
      "question": "המשוואה $A\\oplus(BC)=(A\\oplus B)(A\\oplus C)$ אינה נכונה. בכמה מתוך $8$ הצבות של $(A,B,C)$ שני הצדדים שונים?",
      "options": [
       {
        "id": "a",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "b",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "c",
        "value": "4",
        "type": "text",
        "html": "4"
       },
       {
        "id": "d",
        "value": "0",
        "type": "text",
        "html": "0"
       }
      ],
      "correctId": "b",
      "explanation": "כש-$A=0$ שני הצדדים שווים $BC$. כש-$A=1$ משמאל $\\overline{BC}$ ומימין $\\bar B\\bar C$. הם שונים כאשר בדיוק אחד מ-$B,C$ שווה $1$: ההצבות $(1,0,1)$ ו-$(1,1,0)$. סך הכול $2$.",
      "recap": "מפרקים לפי משתנה אחד ובודקים כל חלק בנפרד",
      "questionHtml": "המשוואה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mo stretchy=\"false\">(</mo><mi>B</mi><mi>C</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">A\\oplus(BC)=(A\\oplus B)(A\\oplus C)</annotation></semantics></math></span> אינה נכונה. בכמה מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> הצבות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B,C)</annotation></semantics></math></span> שני הצדדים שונים?",
      "explanationHtml": "כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=0</annotation></semantics></math></span> שני הצדדים שווים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">BC</annotation></semantics></math></span>. כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=1</annotation></semantics></math></span> משמאל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>B</mi><mi>C</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{BC}</annotation></semantics></math></span> ומימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar B\\bar C</annotation></semantics></math></span>. הם שונים כאשר בדיוק אחד מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">B,C</annotation></semantics></math></span> שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>: ההצבות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0,1)</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,1,0)</annotation></semantics></math></span>. סך הכול <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>.</span>",
      "recapHtml": "מפרקים לפי משתנה אחד ובודקים כל חלק בנפרד"
     },
     {
      "id": "C05-Q3",
      "question": "בכמה מתוך $8$ ההצבות של $(A,B,C)$ הביטוי $A\\oplus B\\oplus C$ שווה $1$?",
      "options": [
       {
        "id": "a",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "b",
        "value": "4",
        "type": "text",
        "html": "4"
       },
       {
        "id": "c",
        "value": "5",
        "type": "text",
        "html": "5"
       },
       {
        "id": "d",
        "value": "2",
        "type": "text",
        "html": "2"
       }
      ],
      "correctId": "b",
      "explanation": "הביטוי $1$ כשמספר ה-$1$-ים אי זוגי: אחד ($3$ הצבות) או שלושה (הצבה אחת). סך הכול $4$, כלומר בדיוק חצי מהשורות.",
      "recap": "XOR של $n\\ge1$ משתנים שווה $1$ בחצי מהשורות",
      "questionHtml": "בכמה מתוך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>8</mn></mrow><annotation encoding=\"application/x-tex\">8</annotation></semantics></math></span> ההצבות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B,C)</annotation></semantics></math></span> הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus C</annotation></semantics></math></span> שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>?",
      "explanationHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> כשמספר ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>-ים אי זוגי: אחד (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> הצבות) או שלושה (הצבה אחת). סך הכול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span>, כלומר בדיוק חצי מהשורות.",
      "recapHtml": "XOR של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n\\ge1</annotation></semantics></math></span> משתנים שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> בחצי מהשורות"
     },
     {
      "id": "C05-Q4",
      "question": "איזו מהמשוואות הבאות **אינה** נכונה?",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "A\\oplus B=B\\oplus A",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>=</mo><mi>B</mi><mo>⊕</mo><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B=B\\oplus A</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A\\oplus A B=A B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>A</mi><mi>B</mi><mo>=</mo><mi>A</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus A B=A B</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "\\overline{A\\oplus B}=\\bar A\\bar B+AB",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow><mo>=</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>+</mo><mi>A</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}=\\bar A\\bar B+AB</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "A\\oplus B\\oplus AB=A+B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>A</mi><mi>B</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus AB=A+B</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "ב-$(A,B)=(1,0)$: משמאל $1\\oplus(1\\cdot0)=1\\oplus0=1$, ומימין $A B=0$. שונים. למעשה $A\\oplus AB=A(1\\oplus B)=A\\bar B$ ולא $AB$. שלוש האחרות נכונות: חילוף, פתיחת XNOR כ-$\\bar A\\bar B+AB$, והזהות $A\\oplus B\\oplus AB=A+B$ (OR הוא XOR ועוד AND).",
      "recap": "מצאו הצבה אחת שבה הצדדים שונים",
      "questionHtml": "איזו מהמשוואות הבאות <strong>אינה</strong> נכונה?",
      "explanationHtml": "ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B)=(1,0)</annotation></semantics></math></span>: משמאל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>⋅</mo><mn>0</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mn>1</mn><mo>⊕</mo><mn>0</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus(1\\cdot0)=1\\oplus0=1</annotation></semantics></math></span>, ומימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>B</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A B=0</annotation></semantics></math></span>. שונים. למעשה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>A</mi><mi>B</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A\\oplus AB=A(1\\oplus B)=A\\bar B</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">AB</annotation></semantics></math></span>. שלוש האחרות נכונות: חילוף, פתיחת XNOR כ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>+</mo><mi>A</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A\\bar B+AB</annotation></semantics></math></span>, והזהות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>A</mi><mi>B</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus AB=A+B</annotation></semantics></math></span> (OR הוא XOR ועוד AND).",
      "recapHtml": "מצאו הצבה אחת שבה הצדדים שונים"
     },
     {
      "id": "C05-Q5",
      "question": "שני ביטויים שווים ב-$(0,0,0)$ וגם ב-$(1,1,1)$. האם אפשר להסיק שהם שקולים?",
      "options": [
       {
        "id": "a",
        "value": "כן, כי שתי הצבות קיצוניות מכסות את כל המקרים",
        "type": "text",
        "html": "כן, כי שתי הצבות קיצוניות מכסות את כל המקרים"
       },
       {
        "id": "b",
        "value": "כן, אבל רק אם אין בהם XOR",
        "type": "text",
        "html": "כן, אבל רק אם אין בהם XOR"
       },
       {
        "id": "c",
        "value": "לא, ייתכן שהם שונים בהצבה מעורבת",
        "type": "text",
        "html": "לא, ייתכן שהם שונים בהצבה מעורבת"
       },
       {
        "id": "d",
        "value": "לא, כי שני ביטויים בוליאניים אף פעם אינם שקולים",
        "type": "text",
        "html": "לא, כי שני ביטויים בוליאניים אף פעם אינם שקולים"
       }
      ],
      "correctId": "c",
      "explanation": "שקילות דורשת שוויון בכל $2^n$ השורות. דוגמה נגדית (בשני משתנים): $A\\oplus B$ מול $0$ שווים ב-$(0,0)$ וב-$(1,1)$ אבל לא ב-$(1,0)$. התשובה הראשונה שגויה כי הצבות קיצוניות לא מכסות הצבות מעורבות; השנייה שגויה כי XOR אינו מה שמונע את המסקנה; והרביעית שגויה כי ביטויים רבים שקולים (למשל דה מורגן).",
      "recap": "שוויון בכמה הצבות אינו הוכחת שקילות",
      "questionHtml": "שני ביטויים שווים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,0,0)</annotation></semantics></math></span> וגם ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,1,1)</annotation></semantics></math></span>. האם אפשר להסיק שהם שקולים?",
      "explanationHtml": "שקילות דורשת שוויון בכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n</annotation></semantics></math></span> השורות. דוגמה נגדית (בשני משתנים): <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span> מול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> שווים ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,0)</annotation></semantics></math></span> וב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,1)</annotation></semantics></math></span> אבל לא ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0)</annotation></semantics></math></span>. התשובה הראשונה שגויה כי הצבות קיצוניות לא מכסות הצבות מעורבות; השנייה שגויה כי XOR אינו מה שמונע את המסקנה; והרביעית שגויה כי ביטויים רבים שקולים (למשל דה מורגן).",
      "recapHtml": "שוויון בכמה הצבות אינו הוכחת שקילות"
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "📋",
    "title": "מינטרמים וסכום מכפלות",
    "goal": "לכתוב פונקציה כסכום מינטרמים ולמצוא את אינדקס המינטרם מתוך טבלת האמת.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n<p><b>מינטרם</b> הוא מכפלה שבה מופיעים <b>כל</b> המשתנים, כל אחד פעם אחת, עם קו או בלי. הוא שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> בהצבה <b>אחת</b> בדיוק. כל פונקציה היא סכום המינטרמים של השורות שבהן היא <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>.</span></p>\n<p><b>אינדקס:</b> קוראים את ההצבה כמספר בינארי כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> הספרה הגבוהה. משתנה בלי קו הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>, משתנה עם קו הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>. למשל עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B,C)</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\bar B C</annotation></semantics></math></span> הוא ההצבה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>101</mn></mrow><annotation encoding=\"application/x-tex\">101</annotation></semantics></math></span>, כלומר מינטרם <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mi>m</mi><mn>5</mn></msub></mrow><annotation encoding=\"application/x-tex\">m_5</annotation></semantics></math></span>.</span></p>\n<div class=\"lesson-rule\">🔑 <strong>מתכון:</strong> (1) בונים טבלת אמת. (2) מסמנים את השורות שבהן הפונקציה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>. (3) כותבים את האינדקסים שלהן ב-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mo>…</mo><mtext> </mtext><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(\\dots)</annotation></semantics></math></span>.</span></div>\n<div class=\"lesson-ex\">דוגמה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span> שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,1)</annotation></semantics></math></span> וב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0)</annotation></semantics></math></span>, כלומר האינדקסים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>: <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo><mo>=</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi><mo>+</mo><mi>A</mi><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\Sigma(1,2)=\\bar A B+A\\bar B</annotation></semantics></math></span>.</span></div>\n<div class=\"lesson-trap\">⚠️ <strong>המשתנה הראשון הוא הספרה הגבוהה.</strong> עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B)</annotation></semantics></math></span> ההצבה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0)</annotation></semantics></math></span> היא אינדקס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> ולא <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>.</span></div>\n"
    },
    "questions": [
     {
      "id": "C06-Q1",
      "question": "מהו אינדקס המינטרם $A\\bar B C$ במשתנים $(A,B,C)$, כש-$A$ הספרה הגבוהה?",
      "options": [
       {
        "id": "a",
        "value": "5",
        "type": "text",
        "html": "5"
       },
       {
        "id": "b",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "c",
        "value": "6",
        "type": "text",
        "html": "6"
       },
       {
        "id": "d",
        "value": "2",
        "type": "text",
        "html": "2"
       }
      ],
      "correctId": "a",
      "explanation": "$A\\bar B C$ שווה $1$ ב-$(1,0,1)$, ובינארי $101=5$. התשובה $3$ היא $011$ ($\\bar A B C$), $6$ היא $110$ ($A B\\bar C$), ו-$2$ היא $010$ ($\\bar A B\\bar C$).",
      "recap": "משתנה בלי קו = 1, עם קו = 0; $A$ הספרה הגבוהה",
      "questionHtml": "מהו אינדקס המינטרם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\bar B C</annotation></semantics></math></span> במשתנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B,C)</annotation></semantics></math></span>, כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> הספרה הגבוהה?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\bar B C</annotation></semantics></math></span> שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0,1)</annotation></semantics></math></span>, ובינארי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>101</mn><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">101=5</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span> היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>011</mn></mrow><annotation encoding=\"application/x-tex\">011</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A B C</annotation></semantics></math></span>), <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span> היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>110</mn></mrow><annotation encoding=\"application/x-tex\">110</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>B</mi><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A B\\bar C</annotation></semantics></math></span>), ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span> היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>010</mn></mrow><annotation encoding=\"application/x-tex\">010</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A B\\bar C</annotation></semantics></math></span>).",
      "recapHtml": "משתנה בלי קו = 1, עם קו = 0; <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span> הספרה הגבוהה"
     },
     {
      "id": "C06-Q2",
      "question": "הפונקציה $\\overline{A\\oplus B}$ במשתנים $(A,B)$ שווה:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "\\Sigma(1,2)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(1,2)</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "\\Sigma(0,3)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(0,3)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "\\Sigma(0,1)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(0,1)</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "\\Sigma(3)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(3)</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "$\\overline{A\\oplus B}$ שווה $1$ כשהקלטים זהים: $(0,0)$ ו-$(1,1)$, אינדקסים $0$ ו-$3$. הסכום $\\Sigma(1,2)$ הוא $A\\oplus B$ עצמו. הסכום $\\Sigma(3)$ הוא $AB$ בלבד ושוכח את $(0,0)$.",
      "recap": "XNOR = $\\Sigma(0,3)$ ו-XOR = $\\Sigma(1,2)$",
      "questionHtml": "הפונקציה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}</annotation></semantics></math></span> במשתנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B)</annotation></semantics></math></span> שווה:",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}</annotation></semantics></math></span> שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> כשהקלטים זהים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,0)</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,1)</annotation></semantics></math></span>, אינדקסים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>. הסכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(1,2)</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span> עצמו. הסכום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(3)</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">AB</annotation></semantics></math></span> בלבד ושוכח את <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,0)</annotation></semantics></math></span>.</span>",
      "recapHtml": "XNOR = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(0,3)</annotation></semantics></math></span> ו-XOR = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(1,2)</annotation></semantics></math></span>"
     },
     {
      "id": "C06-Q3",
      "question": "הפונקציה $A\\oplus B\\oplus C$ במשתנים $(A,B,C)$ שווה:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "\\Sigma(0,3,5,6)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(0,3,5,6)</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "\\Sigma(1,2,4,7)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(1,2,4,7)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "\\Sigma(1,2,3,4)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(1,2,3,4)</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "\\Sigma(1,4,7)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(1,4,7)</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "הפונקציה $1$ כשמספר ה-$1$-ים אי זוגי: $001=1$, $010=2$, $100=4$, $111=7$. התשובה $\\Sigma(0,3,5,6)$ היא המשלים (מספר זוגי של $1$-ים). התשובה $\\Sigma(1,4,7)$ מחסירה את $2$.",
      "recap": "XOR של שלושה משתנים: אינדקסים עם מספר אי זוגי של ביטים דולקים",
      "questionHtml": "הפונקציה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus C</annotation></semantics></math></span> במשתנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B,C)</annotation></semantics></math></span> שווה:",
      "explanationHtml": "הפונקציה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> כשמספר ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>-ים אי זוגי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>001</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">001=1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>010</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">010=2</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">100=4</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>111</mn><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">111=7</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(0,3,5,6)</annotation></semantics></math></span> היא המשלים (מספר זוגי של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>-ים). התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(1,4,7)</annotation></semantics></math></span> מחסירה את <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>.</span>",
      "recapHtml": "XOR של שלושה משתנים: אינדקסים עם מספר אי זוגי של ביטים דולקים"
     },
     {
      "id": "C06-Q4",
      "question": "הפונקציה $A+BC$ במשתנים $(A,B,C)$ שווה:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "\\Sigma(3,4,5,6,7)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(3,4,5,6,7)</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "\\Sigma(4,5,6,7)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(4,5,6,7)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "\\Sigma(1,3,5,7)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(1,3,5,7)</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "\\Sigma(3,5,6,7)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(3,5,6,7)</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "כש-$A=1$ (אינדקסים $4$ עד $7$) הפונקציה $1$. כש-$A=0$ היא $BC$, כלומר $011=3$. סך הכול $\\Sigma(3,4,5,6,7)$. התשובה $\\Sigma(4,5,6,7)$ שוכחת את $3$.",
      "recap": "מפרקים לפי המשתנה הגבוה",
      "questionHtml": "הפונקציה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A+BC</annotation></semantics></math></span> במשתנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B,C)</annotation></semantics></math></span> שווה:",
      "explanationHtml": "כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=1</annotation></semantics></math></span> (אינדקסים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">7</annotation></semantics></math></span>) הפונקציה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>. כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A=0</annotation></semantics></math></span> היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">BC</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>011</mn><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">011=3</annotation></semantics></math></span>. סך הכול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(3,4,5,6,7)</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>4</mn><mo separator=\"true\">,</mo><mn>5</mn><mo separator=\"true\">,</mo><mn>6</mn><mo separator=\"true\">,</mo><mn>7</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(4,5,6,7)</annotation></semantics></math></span> שוכחת את <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>.</span>",
      "recapHtml": "מפרקים לפי המשתנה הגבוה"
     },
     {
      "id": "C06-Q5",
      "question": "כמה מינטרמים יש בסכום המינטרמים של $(A\\oplus B)\\cdot C$ במשתנים $(A,B,C)$?",
      "options": [
       {
        "id": "a",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "b",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "c",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "d",
        "value": "4",
        "type": "text",
        "html": "4"
       }
      ],
      "correctId": "b",
      "explanation": "נדרש $C=1$ ו-$A\\ne B$: ההצבות $(0,1,1)$ ו-$(1,0,1)$, כלומר $\\Sigma(3,5)$. אפשר לטעות ולספור את $4$ הצבות של $A\\oplus B$ בלי להגביל ל-$C=1$.",
      "recap": "ספירת מינטרמים = ספירת הצבות שבהן הפונקציה 1",
      "questionHtml": "כמה מינטרמים יש בסכום המינטרמים של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>⋅</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">(A\\oplus B)\\cdot C</annotation></semantics></math></span> במשתנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo separator=\"true\">,</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B,C)</annotation></semantics></math></span>?",
      "explanationHtml": "נדרש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C=1</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo mathvariant=\"normal\">≠</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\ne B</annotation></semantics></math></span>: ההצבות <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,1,1)</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0,1)</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>3</mn><mo separator=\"true\">,</mo><mn>5</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(3,5)</annotation></semantics></math></span>. אפשר לטעות ולספור את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">4</annotation></semantics></math></span> הצבות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span> בלי להגביל ל-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C=1</annotation></semantics></math></span>.</span>",
      "recapHtml": "ספירת מינטרמים = ספירת הצבות שבהן הפונקציה 1"
     },
     {
      "id": "C06-Q6",
      "question": "הפונקציה $\\bar A\\oplus B$ במשתנים $(A,B)$ שווה:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "\\Sigma(1,2)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(1,2)</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "\\Sigma(0,3)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(0,3)</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "\\Sigma(0,2)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(0,2)</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "\\Sigma(1,3)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(1,3)</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "$\\bar A\\oplus B=\\overline{A\\oplus B}$, שהוא $1$ כשהקלטים זהים: $\\Sigma(0,3)$. בבדיקה ישירה: $(0,0)$ נותן $1\\oplus0=1$, $(1,1)$ נותן $0\\oplus1=1$, ו-$(0,1)$ נותן $1\\oplus1=0$.",
      "recap": "קו אחד על אופרנד של XOR הופך אותו ל-XNOR",
      "questionHtml": "הפונקציה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus B</annotation></semantics></math></span> במשתנים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo separator=\"true\">,</mo><mi>B</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A,B)</annotation></semantics></math></span> שווה:",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>B</mi><mo>=</mo><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus B=\\overline{A\\oplus B}</annotation></semantics></math></span>, שהוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> כשהקלטים זהים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">Σ</mi><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>3</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\Sigma(0,3)</annotation></semantics></math></span>. בבדיקה ישירה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>0</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,0)</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mn>0</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus0=1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,1)</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn><mo>⊕</mo><mn>1</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">0\\oplus1=1</annotation></semantics></math></span>, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,1)</annotation></semantics></math></span> נותן <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus1=0</annotation></semantics></math></span>.</span>",
      "recapHtml": "קו אחד על אופרנד של XOR הופך אותו ל-XNOR"
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "🧠",
    "title": "משוואות ארוכות כמו במבחן",
    "goal": "לפשט שרשראות XOR ארוכות ושרשראות של $X+\\bar X Y$, ולתפוס את המשוואה השגויה בין ארבע.",
    "source": "ai-verified",
    "boss": false,
    "goalHtml": "לפשט שרשראות XOR ארוכות ושרשראות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>+</mo><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover><mi>Y</mi></mrow><annotation encoding=\"application/x-tex\">X+\\bar X Y</annotation></semantics></math></span>, ולתפוס את המשוואה השגויה בין ארבע.",
    "lesson": {
     "html": "\n<p>במבחן המשוואות ארוכות, אבל נפתרות בשני צעדים קבועים.</p>\n<h3>שרשרת XOR</h3>\n<ol>\n<li>מפרקים כל קו ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>⊕</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\oplus 1</annotation></semantics></math></span> וכל XOR מקונן לשרשרת אחת (קיבוץ וחילוף מותרים).</li>\n<li>מבטלים זוגות: כל משתנה שמופיע פעמיים, וכל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> שמופיע פעמיים. מה שנשאר הוא התשובה.</li>\n</ol>\n<div class=\"lesson-ex\">דוגמה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>C</mi><mo stretchy=\"false\">)</mo><mo>⊕</mo><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">(A\\oplus C)\\oplus\\bar C\\oplus B</annotation></semantics></math></span>. הקו הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>⊕</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\oplus1</annotation></semantics></math></span>, ולכן: <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>C</mi><mo>⊕</mo><mi>C</mi><mo>⊕</mo><mn>1</mn><mo>⊕</mo><mi>B</mi><mo>=</mo><mi>A</mi><mo>⊕</mo><mn>1</mn><mo>⊕</mo><mi>B</mi><mo>=</mo><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">A\\oplus C\\oplus C\\oplus1\\oplus B = A\\oplus1\\oplus B=\\overline{A\\oplus B}</annotation></semantics></math></span>.</span></div>\n<h3>שרשרת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>+</mo><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover><mi>Y</mi></mrow><annotation encoding=\"application/x-tex\">X+\\bar X Y</annotation></semantics></math></span></h3>\n<p>הכלל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>+</mo><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover><mi>Y</mi><mo>=</mo><mi>X</mi><mo>+</mo><mi>Y</mi></mrow><annotation encoding=\"application/x-tex\">X+\\bar X Y=X+Y</annotation></semantics></math></span> מופעל שוב ושוב מבחוץ פנימה:</p>\n<div class=\"lesson-formula\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mtext> </mtext><mo stretchy=\"false\">(</mo><mi>B</mi><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mtext> </mtext><mi>C</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mi>C</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo>+</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A+\\bar A\\,(B+\\bar B\\,C)=A+B+\\bar B C=A+B+C</annotation></semantics></math></span></div>\n<div class=\"lesson-rule\">🔑 <strong>גם ביטוי שלם יכול להיות ה-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi></mrow><annotation encoding=\"application/x-tex\">X</annotation></semantics></math></span>:</span></strong> <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mrow class=\"ovl\"><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo></mrow></mrow><mo>⋅</mo><mi>Z</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mi>Z</mi></mrow><annotation encoding=\"application/x-tex\">(A\\oplus B)+\\overline{(A\\oplus B)}\\cdot Z=(A\\oplus B)+Z</annotation></semantics></math></span>.</span></div>\n<div class=\"lesson-trap\">⚠️ <strong>לא כל זהות \"דומה\" נכונה.</strong> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mo stretchy=\"false\">(</mo><mi>B</mi><mo>⊕</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A\\oplus B)+(B\\oplus C)</annotation></semantics></math></span> אינו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus C</annotation></semantics></math></span> (OR אינו XOR). לפני שמאשרים משוואה, פשטו או בדקו הצבה.</div>\n"
    },
    "questions": [
     {
      "id": "C07-Q1",
      "question": "הביטוי $(A\\oplus C)\\oplus(\\bar B\\oplus D)\\oplus\\overline{(C\\oplus D)}$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "\\overline{A\\oplus B}",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A\\oplus B\\oplus C\\oplus D",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi><mo>⊕</mo><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus C\\oplus D</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "A\\oplus D",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus D</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "A\\oplus B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span>"
       }
      ],
      "correctId": "d",
      "explanation": "פותחים: $A\\oplus C\\oplus B\\oplus1\\oplus D\\oplus C\\oplus D\\oplus1$. מבטלים $C$ עם $C$, $D$ עם $D$, ו-$1$ עם $1$: נשאר $A\\oplus B$. התשובה $\\overline{A\\oplus B}$ מתקבלת מספירת קו אחד בלבד, בעוד שיש שניים, ו-$A\\oplus B\\oplus C\\oplus D$ מתקבלת מאי ביטול הזוגות.",
      "recap": "קו = $\\oplus1$; מבטלים זוגות של משתנים ושל $1$",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>C</mi><mo stretchy=\"false\">)</mo><mo>⊕</mo><mo stretchy=\"false\">(</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>D</mi><mo stretchy=\"false\">)</mo><mo>⊕</mo><mrow class=\"ovl\"><mrow><mo stretchy=\"false\">(</mo><mi>C</mi><mo>⊕</mo><mi>D</mi><mo stretchy=\"false\">)</mo></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">(A\\oplus C)\\oplus(\\bar B\\oplus D)\\oplus\\overline{(C\\oplus D)}</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "פותחים: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>C</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mn>1</mn><mo>⊕</mo><mi>D</mi><mo>⊕</mo><mi>C</mi><mo>⊕</mo><mi>D</mi><mo>⊕</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A\\oplus C\\oplus B\\oplus1\\oplus D\\oplus C\\oplus D\\oplus1</annotation></semantics></math></span>. מבטלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">C</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">C</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">D</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">D</annotation></semantics></math></span>, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>: נשאר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}</annotation></semantics></math></span> מתקבלת מספירת קו אחד בלבד, בעוד שיש שניים, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi><mo>⊕</mo><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus C\\oplus D</annotation></semantics></math></span> מתקבלת מאי ביטול הזוגות.",
      "recapHtml": "קו = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>⊕</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\oplus1</annotation></semantics></math></span>; מבטלים זוגות של משתנים ושל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
     },
     {
      "id": "C07-Q2",
      "question": "הביטוי $A+\\bar A\\,(B+\\bar B\\,(C+\\bar C D))$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "A+B+C+D",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mo>+</mo><mi>C</mi><mo>+</mo><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">A+B+C+D</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "A+B\\bar B+C",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>+</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A+B\\bar B+C</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "ABCD",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>B</mi><mi>C</mi><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">ABCD</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "A+\\bar A BCD",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi><mi>C</mi><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">A+\\bar A BCD</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "מבפנים החוצה: $C+\\bar C D=C+D$, אחר כך $B+\\bar B(C+D)=B+C+D$, ולבסוף $A+\\bar A(B+C+D)=A+B+C+D$. התשובה $ABCD$ מחליפה בטעות OR ב-AND; האחרות אינן שקולות (ב-$A=0,B=0,C=0,D=1$ המקור $1$ ואילו $A+B\\bar B+C=0$).",
      "recap": "$X+\\bar X Y=X+Y$ מבפנים החוצה",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mtext> </mtext><mo stretchy=\"false\">(</mo><mi>B</mi><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mtext> </mtext><mo stretchy=\"false\">(</mo><mi>C</mi><mo>+</mo><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover><mi>D</mi><mo stretchy=\"false\">)</mo><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">A+\\bar A\\,(B+\\bar B\\,(C+\\bar C D))</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "מבפנים החוצה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo>+</mo><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover><mi>D</mi><mo>=</mo><mi>C</mi><mo>+</mo><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">C+\\bar C D=C+D</annotation></semantics></math></span>, אחר כך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo stretchy=\"false\">(</mo><mi>C</mi><mo>+</mo><mi>D</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>B</mi><mo>+</mo><mi>C</mi><mo>+</mo><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">B+\\bar B(C+D)=B+C+D</annotation></semantics></math></span>, ולבסוף <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo stretchy=\"false\">(</mo><mi>B</mi><mo>+</mo><mi>C</mi><mo>+</mo><mi>D</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo>+</mo><mi>C</mi><mo>+</mo><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">A+\\bar A(B+C+D)=A+B+C+D</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>B</mi><mi>C</mi><mi>D</mi></mrow><annotation encoding=\"application/x-tex\">ABCD</annotation></semantics></math></span> מחליפה בטעות OR ב-AND; האחרות אינן שקולות (ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mi>B</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mi>C</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mi>D</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">A=0,B=0,C=0,D=1</annotation></semantics></math></span> המקור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> ואילו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>+</mo><mi>C</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">A+B\\bar B+C=0</annotation></semantics></math></span>).",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>+</mo><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover><mi>Y</mi><mo>=</mo><mi>X</mi><mo>+</mo><mi>Y</mi></mrow><annotation encoding=\"application/x-tex\">X+\\bar X Y=X+Y</annotation></semantics></math></span> מבפנים החוצה"
     },
     {
      "id": "C07-Q3",
      "question": "הביטוי $\\bar A\\oplus B\\oplus\\bar C\\oplus D\\oplus\\bar E$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "A\\oplus B\\oplus C\\oplus D\\oplus E",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi><mo>⊕</mo><mi>D</mi><mo>⊕</mo><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus C\\oplus D\\oplus E</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "\\overline{A\\oplus B\\oplus C\\oplus D\\oplus E}",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi><mo>⊕</mo><mi>D</mi><mo>⊕</mo><mi>E</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B\\oplus C\\oplus D\\oplus E}</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "\\bar A\\oplus B\\oplus\\bar C\\oplus D\\oplus E",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>D</mi><mo>⊕</mo><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus B\\oplus\\bar C\\oplus D\\oplus E</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "\\bar A\\oplus\\bar B\\oplus\\bar C\\oplus\\bar D\\oplus E",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>⊕</mo><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover><mo>⊕</mo><mover accent=\"true\"><mi>D</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus\\bar B\\oplus\\bar C\\oplus\\bar D\\oplus E</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "יש שלושה קווים (על $A$, $C$, $E$): זוג מהם מתבטל והשלישי נשאר, כלומר שקול לקו אחד על כל השרשרת. $\\overline{A\\oplus B\\oplus C\\oplus D\\oplus E}$ הוא התשובה. הראשונה היא התוצאה אילו מספר הקווים היה זוגי. בשלישית יש שני קווים ובאחרונה ארבעה, מספר זוגי, ולכן שתיהן שקולות ל-$A\\oplus B\\oplus C\\oplus D\\oplus E$ בלי קו.",
      "recap": "מספר אי זוגי של קווים = קו אחד על כל השרשרת",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>D</mi><mo>⊕</mo><mover accent=\"true\"><mi>E</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A\\oplus B\\oplus\\bar C\\oplus D\\oplus\\bar E</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "יש שלושה קווים (על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi></mrow><annotation encoding=\"application/x-tex\">A</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">C</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span>): זוג מהם מתבטל והשלישי נשאר, כלומר שקול לקו אחד על כל השרשרת. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi><mo>⊕</mo><mi>D</mi><mo>⊕</mo><mi>E</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B\\oplus C\\oplus D\\oplus E}</annotation></semantics></math></span> הוא התשובה. הראשונה היא התוצאה אילו מספר הקווים היה זוגי. בשלישית יש שני קווים ובאחרונה ארבעה, מספר זוגי, ולכן שתיהן שקולות ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi><mo>⊕</mo><mi>C</mi><mo>⊕</mo><mi>D</mi><mo>⊕</mo><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B\\oplus C\\oplus D\\oplus E</annotation></semantics></math></span> בלי קו.",
      "recapHtml": "מספר אי זוגי של קווים = קו אחד על כל השרשרת"
     },
     {
      "id": "C07-Q4",
      "question": "איזו מהמשוואות הבאות **אינה** נכונה?",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "(A\\oplus B)+\\overline{(A\\oplus B)}\\cdot(C\\oplus D)=(A\\oplus B)+(C\\oplus D)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mrow class=\"ovl\"><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo></mrow></mrow><mo>⋅</mo><mo stretchy=\"false\">(</mo><mi>C</mi><mo>⊕</mo><mi>D</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mo stretchy=\"false\">(</mo><mi>C</mi><mo>⊕</mo><mi>D</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A\\oplus B)+\\overline{(A\\oplus B)}\\cdot(C\\oplus D)=(A\\oplus B)+(C\\oplus D)</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "(A\\oplus B)\\oplus(B\\oplus C)\\oplus(C\\oplus A)=0",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>⊕</mo><mo stretchy=\"false\">(</mo><mi>B</mi><mo>⊕</mo><mi>C</mi><mo stretchy=\"false\">)</mo><mo>⊕</mo><mo stretchy=\"false\">(</mo><mi>C</mi><mo>⊕</mo><mi>A</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">(A\\oplus B)\\oplus(B\\oplus C)\\oplus(C\\oplus A)=0</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "(A\\oplus B)\\cdot(B\\oplus C)=A\\bar B C+\\bar A B\\bar C",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>⋅</mo><mo stretchy=\"false\">(</mo><mi>B</mi><mo>⊕</mo><mi>C</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mi>C</mi><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">(A\\oplus B)\\cdot(B\\oplus C)=A\\bar B C+\\bar A B\\bar C</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "(A\\oplus B)+(B\\oplus C)=A\\oplus C",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mo stretchy=\"false\">(</mo><mi>B</mi><mo>⊕</mo><mi>C</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mi>A</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">(A\\oplus B)+(B\\oplus C)=A\\oplus C</annotation></semantics></math></span>"
       }
      ],
      "correctId": "d",
      "explanation": "ב-$(1,0,1)$: משמאל $1+1=1$, ומימין $1\\oplus1=0$. הצדדים שונים. האחרות נכונות: (א) לפי $X+\\bar XY=X+Y$; (ב) כל משתנה מופיע פעמיים ומתבטל; (ג) כש-$B=1$ המכפלה היא $\\bar A\\cdot\\bar C$, וכש-$B=0$ היא $A C$, כלומר $\\bar A B\\bar C+A\\bar B C$.",
      "recap": "OR אינו XOR: $(A\\oplus B)+(B\\oplus C)\\ne A\\oplus C$",
      "questionHtml": "איזו מהמשוואות הבאות <strong>אינה</strong> נכונה?",
      "explanationHtml": "ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(1,0,1)</annotation></semantics></math></span>: משמאל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1+1=1</annotation></semantics></math></span>, ומימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⊕</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">1\\oplus1=0</annotation></semantics></math></span>. הצדדים שונים. האחרות נכונות: (א) לפי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>+</mo><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover><mi>Y</mi><mo>=</mo><mi>X</mi><mo>+</mo><mi>Y</mi></mrow><annotation encoding=\"application/x-tex\">X+\\bar XY=X+Y</annotation></semantics></math></span>; (ב) כל משתנה מופיע פעמיים ומתבטל; (ג) כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">B=1</annotation></semantics></math></span> המכפלה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⋅</mo><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A\\cdot\\bar C</annotation></semantics></math></span>, וכש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">B=0</annotation></semantics></math></span> היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">A C</annotation></semantics></math></span>, כלומר <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>B</mi><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover><mo>+</mo><mi>A</mi><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">\\bar A B\\bar C+A\\bar B C</annotation></semantics></math></span>.</span>",
      "recapHtml": "OR אינו XOR: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mo stretchy=\"false\">(</mo><mi>B</mi><mo>⊕</mo><mi>C</mi><mo stretchy=\"false\">)</mo><mo mathvariant=\"normal\">≠</mo><mi>A</mi><mo>⊕</mo><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">(A\\oplus B)+(B\\oplus C)\\ne A\\oplus C</annotation></semantics></math></span>"
     },
     {
      "id": "C07-Q5",
      "question": "הביטוי $(\\bar A\\oplus B)\\cdot(A\\oplus\\bar B)$ שווה ל:",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "A\\oplus B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow><annotation encoding=\"application/x-tex\">A\\oplus B</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "\\overline{A\\oplus B}",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "0",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "\\bar A\\bar B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\bar A\\bar B</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "שני הגורמים שווים $\\overline{A\\oplus B}$ (קו אחד על אופרנד אחד בכל אחד). מכפלה $X\\cdot X=X$, לכן התוצאה $\\overline{A\\oplus B}$. התשובה $0$ הייתה נכונה לו אחד הגורמים היה משלים של השני.",
      "recap": "$X\\cdot X=X$; קו על אופרנד אחד = קו על כל ה-XOR",
      "questionHtml": "הביטוי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>⋅</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(\\bar A\\oplus B)\\cdot(A\\oplus\\bar B)</annotation></semantics></math></span> שווה ל:",
      "explanationHtml": "שני הגורמים שווים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}</annotation></semantics></math></span> (קו אחד על אופרנד אחד בכל אחד). מכפלה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>⋅</mo><mi>X</mi><mo>=</mo><mi>X</mi></mrow><annotation encoding=\"application/x-tex\">X\\cdot X=X</annotation></semantics></math></span>, לכן התוצאה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> הייתה נכונה לו אחד הגורמים היה משלים של השני.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>⋅</mo><mi>X</mi><mo>=</mo><mi>X</mi></mrow><annotation encoding=\"application/x-tex\">X\\cdot X=X</annotation></semantics></math></span>; קו על אופרנד אחד = קו על כל ה-XOR"
     },
     {
      "id": "C07-Q6",
      "question": "איזו מהמשוואות הבאות **אינה** נכונה?",
      "options": [
       {
        "id": "a",
        "type": "math",
        "value": "(A\\oplus B)\\cdot C=A C\\oplus B C",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>⋅</mo><mi>C</mi><mo>=</mo><mi>A</mi><mi>C</mi><mo>⊕</mo><mi>B</mi><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">(A\\oplus B)\\cdot C=A C\\oplus B C</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "type": "math",
        "value": "\\overline{A\\oplus B}\\cdot C=\\bar A C\\oplus\\bar B C",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow><mo>⋅</mo><mi>C</mi><mo>=</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>C</mi><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}\\cdot C=\\bar A C\\oplus\\bar B C</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "type": "math",
        "value": "\\overline{A\\oplus B}\\cdot C=C\\cdot(\\bar A\\oplus B)",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow><mo>⋅</mo><mi>C</mi><mo>=</mo><mi>C</mi><mo>⋅</mo><mo stretchy=\"false\">(</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\overline{A\\oplus B}\\cdot C=C\\cdot(\\bar A\\oplus B)</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "type": "math",
        "value": "A+\\overline{A+B}=A+\\bar B",
        "html": "<span class=\"math-inline opt-math\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mrow class=\"ovl\"><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow></mrow><mo>=</mo><mi>A</mi><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A+\\overline{A+B}=A+\\bar B</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "ב-$(0,1,1)$: משמאל $\\overline{0\\oplus1}\\cdot1=0$, ומימין $\\bar A C\\oplus\\bar B C=1\\oplus0=1$. הצדדים שונים. הסיבה: $\\bar AC\\oplus\\bar BC=C(A\\oplus B)$, בעוד שמשמאל יש XNOR. האחרות נכונות: (א) פילוג; (ג) קו אחד על אופרנד; (ד) $A+\\bar A\\bar B=A+\\bar B$.",
      "recap": "הקו אינו נכנס פנימה דרך מכפלה",
      "questionHtml": "איזו מהמשוואות הבאות <strong>אינה</strong> נכונה?",
      "explanationHtml": "ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>0</mn><mo separator=\"true\">,</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(0,1,1)</annotation></semantics></math></span>: משמאל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mrow class=\"ovl\"><mrow><mn>0</mn><mo>⊕</mo><mn>1</mn></mrow></mrow><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">\\overline{0\\oplus1}\\cdot1=0</annotation></semantics></math></span>, ומימין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>C</mi><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mi>C</mi><mo>=</mo><mn>1</mn><mo>⊕</mo><mn>0</mn><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\bar A C\\oplus\\bar B C=1\\oplus0=1</annotation></semantics></math></span>. הצדדים שונים. הסיבה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mi>C</mi><mo>⊕</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mi>C</mi><mo>=</mo><mi>C</mi><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">\\bar AC\\oplus\\bar BC=C(A\\oplus B)</annotation></semantics></math></span>, בעוד שמשמאל יש XNOR. האחרות נכונות: (א) פילוג; (ג) קו אחד על אופרנד; (ד) <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>A</mi><mo>+</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover><mo>=</mo><mi>A</mi><mo>+</mo><mover accent=\"true\"><mi>B</mi><mo>ˉ</mo></mover></mrow><annotation encoding=\"application/x-tex\">A+\\bar A\\bar B=A+\\bar B</annotation></semantics></math></span>.</span>",
      "recapHtml": "הקו אינו נכנס פנימה דרך מכפלה"
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "🏆",
    "title": "מבחן גמר: שאלות מהמבחנים",
    "goal": "לפתור שאלות אמיתיות של \"איזו משוואה נכונה / אינה נכונה\" בלי רמזים.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "\n<p>אלה חמש שאלות אמיתיות מהמבחנים. כלי העבודה שלכם:</p>\n<ul>\n<li>קו על XOR: מספיק על אופרנד אחד, ושני קווים מתבטלים.</li>\n<li>שרשרת XOR: מפרקים קווים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>⊕</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">\\oplus1</annotation></semantics></math></span> ומבטלים זוגות.</li>\n<li><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>+</mo><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover><mi>Y</mi><mo>=</mo><mi>X</mi><mo>+</mo><mi>Y</mi></mrow><annotation encoding=\"application/x-tex\">X+\\bar X Y=X+Y</annotation></semantics></math></span>, דה מורגן, ובליעה (רק ל-AND ו-OR).</li>\n<li>כדי לפסול משוואה, מוצאים הצבה אחת שבה הצדדים שונים; כדי לאשר, בודקים את כל השורות או מפשטים.</li>\n</ul>\n<div class=\"lesson-rule\">🔑 שימו לב אם השאלה מבקשת משוואה <b>נכונה</b> או <b>אינה</b> נכונה, ועברו על כל ארבע האפשרויות.</div>\n"
    },
    "questions": [
     {
      "bankId": "22A-A-Q1",
      "recap": "$(A\\oplus B)+(A\\oplus C)\\ne A\\oplus(B+C)$; OR אינו XOR",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>B</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mo stretchy=\"false\">(</mo><mi>A</mi><mo>⊕</mo><mi>C</mi><mo stretchy=\"false\">)</mo><mo mathvariant=\"normal\">≠</mo><mi>A</mi><mo>⊕</mo><mo stretchy=\"false\">(</mo><mi>B</mi><mo>+</mo><mi>C</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(A\\oplus B)+(A\\oplus C)\\ne A\\oplus(B+C)</annotation></semantics></math></span>; OR אינו XOR"
     },
     {
      "bankId": "23A-A-Q1",
      "recap": "אגף ימין מתפרק: $C\\oplus\\bar C=1$, והכול מתבטל ל-$0$",
      "recapHtml": "אגף ימין מתפרק: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi><mo>⊕</mo><mover accent=\"true\"><mi>C</mi><mo>ˉ</mo></mover><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">C\\oplus\\bar C=1</annotation></semantics></math></span>, והכול מתבטל ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>"
     },
     {
      "bankId": "23B-A-Q1",
      "recap": "$B\\oplus\\bar A=\\overline{A\\oplus B}$ ו-$X+\\bar X Y=X+Y$",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>B</mi><mo>⊕</mo><mover accent=\"true\"><mi>A</mi><mo>ˉ</mo></mover><mo>=</mo><mrow class=\"ovl\"><mrow><mi>A</mi><mo>⊕</mo><mi>B</mi></mrow></mrow></mrow><annotation encoding=\"application/x-tex\">B\\oplus\\bar A=\\overline{A\\oplus B}</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>+</mo><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover><mi>Y</mi><mo>=</mo><mi>X</mi><mo>+</mo><mi>Y</mi></mrow><annotation encoding=\"application/x-tex\">X+\\bar X Y=X+Y</annotation></semantics></math></span>"
     },
     {
      "bankId": "24S-A-Q1",
      "recap": "הקו על XOR לא נכנס פנימה דרך המכפלה ב-$C$",
      "recapHtml": "הקו על XOR לא נכנס פנימה דרך המכפלה ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>C</mi></mrow><annotation encoding=\"application/x-tex\">C</annotation></semantics></math></span>"
     },
     {
      "bankId": "25B-A-Q1",
      "recap": "$X+\\bar X Y=X+Y$ ואחר כך קו על אופרנד אחד של XOR",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>+</mo><mover accent=\"true\"><mi>X</mi><mo>ˉ</mo></mover><mi>Y</mi><mo>=</mo><mi>X</mi><mo>+</mo><mi>Y</mi></mrow><annotation encoding=\"application/x-tex\">X+\\bar X Y=X+Y</annotation></semantics></math></span> ואחר כך קו על אופרנד אחד של XOR"
     }
    ]
   }
  ]
 },
 "ieee754": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🧱",
    "title": "מבנה 32 הביטים",
    "goal": "לפרק מילה של 32 ביטים (הקסה) לשלושת השדות: סימן, אקספוננט ושבר.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n    <p>מספר נקודה צפה בדיוק יחיד (Single Precision) הוא מילה של <b>32 ביטים</b>, שמחולקת לשלושה שדות לפי הסדר משמאל לימין:</p>\n    <table><thead><tr><th>שדה</th><th>שם</th><th>כמה ביטים</th></tr></thead>\n    <tbody><tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">S</annotation></semantics></math></span></td><td>סימן (Sign)</td><td>1 (ביט 31)</td></tr>\n    <tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span></td><td>אקספוננט (Exponent)</td><td>8 (ביטים 30..23)</td></tr>\n    <tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span></td><td>שבר (Fraction)</td><td>23 (ביטים 22..0)</td></tr></tbody></table>\n    <p>המילה נכתבת בדרך כלל בהקסה: כל ספרה הקסדצימלית היא בדיוק <b>4 ביטים</b>, כך ש-8 ספרות הקסה הן 32 ביטים. כדי לפרק, כותבים כל ספרה ב-4 ביטים וקוראים: הביט הראשון הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">S</annotation></semantics></math></span>, 8 הבאים הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span>, ו-23 האחרונים הם <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span>.</span></p>\n    <div class=\"lesson-ex\">דוגמה: <code>0x41200000</code>. הספרות: 4=0100, 1=0001, 2=0010, 0=0000, ...<br>\n    הביטים: <code>0100 0001 0010 0000 ...</code>. מקבצים 1+8+23: <code>0 | 10000010 | 01000000000000000000000</code>.<br>\n    לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">S=0</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><msub><mn>10000010</mn><mn>2</mn></msub><mo>=</mo><mn>130</mn></mrow><annotation encoding=\"application/x-tex\">E=10000010_2=130</annotation></semantics></math></span>, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span> מתחיל ב-<code>01</code>.</div>\n    <div class=\"lesson-rule\">🔑 את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span> קוראים כמספר <b>לא מכוונן</b> (unsigned) מ-0 עד 255. אם הספרה הראשונה בהקסה היא 8 או יותר, הסימן הוא 1 (המספר שלילי).</div>\n    <div class=\"lesson-trap\">⚠️ ביט הסימן הוא הביט הראשון בלבד. הביט השני של הספרה הראשונה כבר שייך ל-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span>.</span></div>"
    },
    "questions": [
     {
      "id": "C01-Q1",
      "question": "מהו ביט הסימן $S$ של המילה `0xC0D40000`?",
      "options": [
       {
        "id": "a",
        "value": "$S=0$, המספר חיובי",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">S=0</annotation></semantics></math></span>, המספר חיובי"
       },
       {
        "id": "b",
        "value": "$S=1$, המספר שלילי",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">S=1</annotation></semantics></math></span>, המספר שלילי"
       },
       {
        "id": "c",
        "value": "$S=12$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mo>=</mo><mn>12</mn></mrow><annotation encoding=\"application/x-tex\">S=12</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "אי אפשר לדעת בלי לחשב את כל הביטים",
        "type": "text",
        "html": "אי אפשר לדעת בלי לחשב את כל הביטים"
       }
      ],
      "correctId": "b",
      "explanation": "הספרה הראשונה היא C=1100, והביט הראשון שלה הוא 1, לכן $S=1$ והמספר שלילי. 12 הוא ערך הספרה C, אבל $S$ הוא ביט בודד. ביט הסימן נקבע מהביט הראשון בלבד.",
      "recap": "ביט הסימן הוא הביט הראשון של המילה.",
      "questionHtml": "מהו ביט הסימן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">S</annotation></semantics></math></span> של המילה <code class=\"tok\" dir=\"ltr\">0xC0D40000</code>?",
      "explanationHtml": "הספרה הראשונה היא C=1100, והביט הראשון שלה הוא 1, לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">S=1</annotation></semantics></math></span> והמספר שלילי. 12 הוא ערך הספרה C, אבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">S</annotation></semantics></math></span> הוא ביט בודד. ביט הסימן נקבע מהביט הראשון בלבד.",
      "recapHtml": "ביט הסימן הוא הביט הראשון של המילה."
     },
     {
      "id": "C01-Q2",
      "question": "מהו שדה האקספוננט $E$ (כמספר לא מכוונן) במילה `0x41200000`?",
      "options": [
       {
        "id": "a",
        "value": "$65$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>65</mn></mrow><annotation encoding=\"application/x-tex\">65</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$129$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>129</mn></mrow><annotation encoding=\"application/x-tex\">129</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$130$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>130</mn></mrow><annotation encoding=\"application/x-tex\">130</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$131$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>131</mn></mrow><annotation encoding=\"application/x-tex\">131</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "הביטים: 0 | 10000010 | ... ולכן $E=10000010_2=128+2=130$. 65 הוא הערך של שתי הספרות הראשונות `0x41` כמספר שלם, כלומר לא לקחו רק 8 ביטים אחרי הסימן.",
      "recap": "$E$ הוא 8 הביטים שאחרי ביט הסימן, כמספר לא מכוונן.",
      "questionHtml": "מהו שדה האקספוננט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span> (כמספר לא מכוונן) במילה <code class=\"tok\" dir=\"ltr\">0x41200000</code>?",
      "explanationHtml": "הביטים: 0 | 10000010 | ... ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><msub><mn>10000010</mn><mn>2</mn></msub><mo>=</mo><mn>128</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>130</mn></mrow><annotation encoding=\"application/x-tex\">E=10000010_2=128+2=130</annotation></semantics></math></span>. 65 הוא הערך של שתי הספרות הראשונות <code class=\"tok\" dir=\"ltr\">0x41</code> כמספר שלם, כלומר לא לקחו רק 8 ביטים אחרי הסימן.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span> הוא 8 הביטים שאחרי ביט הסימן, כמספר לא מכוונן."
     },
     {
      "id": "C01-Q3",
      "question": "כמה ביטים שווים 1 בשדה השבר $F$ של `0x41200000`?",
      "options": [
       {
        "id": "a",
        "value": "0",
        "type": "text",
        "html": "0"
       },
       {
        "id": "b",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "c",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "d",
        "value": "3",
        "type": "text",
        "html": "3"
       }
      ],
      "correctId": "b",
      "explanation": "`0x41200000` = 0 10000010 01000000000000000000000. אחרי הסימן ו-$E$ נשארים 23 ביטים, ורק השני מביניהם דלוק. לכן ביט אחד בלבד. הספרה 2=0010 חוצה את הגבול: ביט 23 שלה (0) שייך ל-$E$, והביט הדלוק שלה הוא ביט 21 ב-$F$.",
      "recap": "ממקמים כל ספרת הקסה ב-4 ביטים ואז מקבצים 1+8+23.",
      "questionHtml": "כמה ביטים שווים 1 בשדה השבר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span> של <code class=\"tok\" dir=\"ltr\">0x41200000</code>?",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">0x41200000</code> = 0 10000010 01000000000000000000000. אחרי הסימן ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span> נשארים 23 ביטים, ורק השני מביניהם דלוק. לכן ביט אחד בלבד. הספרה 2=0010 חוצה את הגבול: ביט 23 שלה (0) שייך ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span>, והביט הדלוק שלה הוא ביט 21 ב-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span>.</span>",
      "recapHtml": "ממקמים כל ספרת הקסה ב-4 ביטים ואז מקבצים 1+8+23."
     },
     {
      "id": "C01-Q4",
      "question": "איזו מבין המילים הבאות מייצגת מספר שלילי?",
      "options": [
       {
        "id": "a",
        "value": "`0x3F800000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3F800000</code>"
       },
       {
        "id": "b",
        "value": "`0x40000000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x40000000</code>"
       },
       {
        "id": "c",
        "value": "`0xBF800000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0xBF800000</code>"
       },
       {
        "id": "d",
        "value": "`0x7F800000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x7F800000</code>"
       }
      ],
      "correctId": "c",
      "explanation": "שלילי כשהספרה הראשונה היא 8 ומעלה. B=1011 מתחילה ב-1. הספרות 3, 4 ו-7 מתחילות ב-0 ולכן החיוביות.",
      "recap": "ספרה ראשונה 8..F = סימן שלילי.",
      "questionHtml": "איזו מבין המילים הבאות מייצגת מספר שלילי?",
      "explanationHtml": "שלילי כשהספרה הראשונה היא 8 ומעלה. B=1011 מתחילה ב-1. הספרות 3, 4 ו-7 מתחילות ב-0 ולכן החיוביות.",
      "recapHtml": "ספרה ראשונה 8..F = סימן שלילי."
     },
     {
      "id": "C01-Q5",
      "question": "מהו שדה האקספוננט $E$ (לא מכוונן) במילה `0x40490FDB`?",
      "options": [
       {
        "id": "a",
        "value": "$64$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>64</mn></mrow><annotation encoding=\"application/x-tex\">64</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$127$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">127</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$129$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>129</mn></mrow><annotation encoding=\"application/x-tex\">129</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$128$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>128</mn></mrow><annotation encoding=\"application/x-tex\">128</annotation></semantics></math></span>"
       }
      ],
      "correctId": "d",
      "explanation": "`0x4049` = 0100 0000 0100 1001. הביט הראשון הוא $S=0$, ו-8 הביטים הבאים הם 10000000, כלומר $E=128$. 64 מתקבל מקריאת שתי הספרות הראשונות (`0x40`) בלי לפרק את הביט הראשון.",
      "recap": "מפרקים לביטים, ואז 1 סימן, 8 אקספוננט, 23 שבר.",
      "questionHtml": "מהו שדה האקספוננט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span> (לא מכוונן) במילה <code class=\"tok\" dir=\"ltr\">0x40490FDB</code>?",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">0x4049</code> = 0100 0000 0100 1001. הביט הראשון הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">S=0</annotation></semantics></math></span>, ו-8 הביטים הבאים הם 10000000, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>128</mn></mrow><annotation encoding=\"application/x-tex\">E=128</annotation></semantics></math></span>. 64 מתקבל מקריאת שתי הספרות הראשונות (<code class=\"tok\" dir=\"ltr\">0x40</code>) בלי לפרק את הביט הראשון.",
      "recapHtml": "מפרקים לביטים, ואז 1 סימן, 8 אקספוננט, 23 שבר."
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "🔓",
    "title": "פענוח מספר נורמלי",
    "goal": "לחשב את הערך של מילה כשהאקספוננט אינו 0 ואינו 255, לפי הנוסחה עם ה-1 הסמוי וההטיה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n    <p>כשהאקספוננט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span> אינו 0 ואינו 255 המספר נקרא <b>נורמלי</b>, והערך שלו הוא:</p>\n    <div class=\"lesson-formula\"><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>X</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>S</mi></msup><mo>⋅</mo><msup><mn>2</mn><mrow><mi>E</mi><mo>−</mo><mn>127</mn></mrow></msup><mo>⋅</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mi>F</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">X=(-1)^S\\cdot 2^{E-127}\\cdot(1+F)</annotation></semantics></math></span></div>\n    <p>כאן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span> הוא השבר שמתקבל מ-23 הביטים כאילו כתבנו אותם אחרי נקודה בינארית: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.</mn><msub><mi>F</mi><mn>22</mn></msub><msub><mi>F</mi><mn>21</mn></msub><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">0.F_{22}F_{21}\\ldots</annotation></semantics></math></span>. הביט הראשון שלו שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac12</annotation></semantics></math></span>, השני <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac14</annotation></semantics></math></span> וכן הלאה. המספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">1+F</annotation></semantics></math></span> נקרא <b>המנטיסה</b>, וה-1 שלפני הנקודה הוא ה\"1 הסמוי\": הוא לא נשמר במילה. המספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">127</annotation></semantics></math></span> הוא ה<b>הטיה</b> (bias), ולכן האקספוננט האמיתי הוא <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mi>E</mi><mo>−</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">e=E-127</annotation></semantics></math></span>.</span></p>\n    <div class=\"lesson-rule\">🔑 מתכון: (1) מפרקים ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mtext> </mtext><mi mathvariant=\"normal\">∣</mi><mtext> </mtext><mi>E</mi><mtext> </mtext><mi mathvariant=\"normal\">∣</mi><mtext> </mtext><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">S\\,|\\,E\\,|\\,F</annotation></semantics></math></span>. (2) <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mi>E</mi><mo>−</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">e=E-127</annotation></semantics></math></span>. (3) מנטיסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>=</mo><mn>1.</mn><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">=1.F</annotation></semantics></math></span> בבינארי. (4) <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>=</mo><mo>±</mo><mn>1.</mn><mi>F</mi><mo>⋅</mo><msup><mn>2</mn><mi>e</mi></msup></mrow><annotation encoding=\"application/x-tex\">X=\\pm 1.F\\cdot 2^e</annotation></semantics></math></span>, כלומר מזיזים את הנקודה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">e</annotation></semantics></math></span> מקומות ימינה (אם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">e&gt;0</annotation></semantics></math></span>) או שמאלה.</div>\n    <div class=\"lesson-ex\">דוגמה: <code>0x41200000</code> = <code>0 | 10000010 | 0100...</code>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>130</mn></mrow><annotation encoding=\"application/x-tex\">E=130</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">e=3</annotation></semantics></math></span>, המנטיסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mn>1.01</mn><mn>2</mn></msub><mo>=</mo><mn>1.25</mn></mrow><annotation encoding=\"application/x-tex\">1.01_2=1.25</annotation></semantics></math></span>. הערך: <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.25</mn><mo>⋅</mo><msup><mn>2</mn><mn>3</mn></msup><mo>=</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">1.25\\cdot 2^3=10</annotation></semantics></math></span>.</span></div>\n    <div class=\"lesson-trap\">⚠️ המנטיסה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.</mn><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">1.F</annotation></semantics></math></span> ולא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.</mn><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">0.F</annotation></semantics></math></span>. ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mi>E</mi><mo>−</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">e=E-127</annotation></semantics></math></span>: אקספוננט קטן מ-127 נותן חזקה שלילית, כלומר מספר קטן מ-1 בערכו המוחלט.</div>"
    },
    "questions": [
     {
      "id": "C02-Q1",
      "question": "מהו הערך העשרוני של `0x40400000`?",
      "options": [
       {
        "id": "a",
        "value": "$1.5$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.5</mn></mrow><annotation encoding=\"application/x-tex\">1.5</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$3$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$-3$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">-3</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$6$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">6</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "0 | 10000000 | 1000...: $E=128$, $e=1$, מנטיסה $1.1_2=1.5$. הערך $1.5\\cdot 2=3$. התשובה 1.5 היא המנטיסה בלבד, ו-6 מתקבל אם מכפילים ב-$2^2$.",
      "recap": "הערך = מנטיסה כפול $2^{E-127}$.",
      "questionHtml": "מהו הערך העשרוני של <code class=\"tok\" dir=\"ltr\">0x40400000</code>?",
      "explanationHtml": "0 | 10000000 | 1000...: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>128</mn></mrow><annotation encoding=\"application/x-tex\">E=128</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">e=1</annotation></semantics></math></span>, מנטיסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mn>1.1</mn><mn>2</mn></msub><mo>=</mo><mn>1.5</mn></mrow><annotation encoding=\"application/x-tex\">1.1_2=1.5</annotation></semantics></math></span>. הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.5</mn><mo>⋅</mo><mn>2</mn><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">1.5\\cdot 2=3</annotation></semantics></math></span>. התשובה 1.5 היא המנטיסה בלבד, ו-6 מתקבל אם מכפילים ב-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^2</annotation></semantics></math></span>.</span>",
      "recapHtml": "הערך = מנטיסה כפול <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>E</mi><mo>−</mo><mn>127</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{E-127}</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C02-Q2",
      "question": "מהו הערך העשרוני של `0xC0A00000`?",
      "options": [
       {
        "id": "a",
        "value": "$5$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">5</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$-2.5$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>2.5</mn></mrow><annotation encoding=\"application/x-tex\">-2.5</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$-5$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">-5</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$-10$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">-10</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "1 | 10000001 | 0100...: $S=1$, $E=129$, $e=2$, מנטיסה $1.01_2=1.25$. הערך $-1.25\\cdot 4=-5$. התשובה 5 מתעלמת מהסימן.",
      "recap": "$S=1$ הופך את הסימן, בלי לשנות את הגודל.",
      "questionHtml": "מהו הערך העשרוני של <code class=\"tok\" dir=\"ltr\">0xC0A00000</code>?",
      "explanationHtml": "1 | 10000001 | 0100...: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">S=1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>129</mn></mrow><annotation encoding=\"application/x-tex\">E=129</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">e=2</annotation></semantics></math></span>, מנטיסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mn>1.01</mn><mn>2</mn></msub><mo>=</mo><mn>1.25</mn></mrow><annotation encoding=\"application/x-tex\">1.01_2=1.25</annotation></semantics></math></span>. הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>1.25</mn><mo>⋅</mo><mn>4</mn><mo>=</mo><mo>−</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">-1.25\\cdot 4=-5</annotation></semantics></math></span>. התשובה 5 מתעלמת מהסימן.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">S=1</annotation></semantics></math></span> הופך את הסימן, בלי לשנות את הגודל."
     },
     {
      "id": "C02-Q3",
      "question": "מהו הערך של `0x3F000000`?",
      "options": [
       {
        "id": "a",
        "value": "$0.5$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.5</mn></mrow><annotation encoding=\"application/x-tex\">0.5</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$2$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$0.25$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.25</mn></mrow><annotation encoding=\"application/x-tex\">0.25</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "0 | 01111110 | 000...: $E=126$, $e=-1$, מנטיסה 1. הערך $1\\cdot 2^{-1}=0.5$. שימו לב: $E=127$ היה נותן 1.",
      "recap": "$E<127$ נותן מספר קטן מ-1.",
      "questionHtml": "מהו הערך של <code class=\"tok\" dir=\"ltr\">0x3F000000</code>?",
      "explanationHtml": "0 | 01111110 | 000...: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>126</mn></mrow><annotation encoding=\"application/x-tex\">E=126</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">e=-1</annotation></semantics></math></span>, מנטיסה 1. הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><mn>0.5</mn></mrow><annotation encoding=\"application/x-tex\">1\\cdot 2^{-1}=0.5</annotation></semantics></math></span>. שימו לב: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">E=127</annotation></semantics></math></span> היה נותן 1.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>&lt;</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">E&lt;127</annotation></semantics></math></span> נותן מספר קטן מ-1."
     },
     {
      "id": "C02-Q4",
      "question": "מהו הערך של `0x41580000`?",
      "options": [
       {
        "id": "a",
        "value": "$13.5$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>13.5</mn></mrow><annotation encoding=\"application/x-tex\">13.5</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$27$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>27</mn></mrow><annotation encoding=\"application/x-tex\">27</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$6.75$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6.75</mn></mrow><annotation encoding=\"application/x-tex\">6.75</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$11.5$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>11.5</mn></mrow><annotation encoding=\"application/x-tex\">11.5</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "0 | 10000010 | 1011000...: $E=130$, $e=3$, מנטיסה $1.1011_2=1+\\frac12+\\frac18+\\frac1{16}=1.6875$. הערך $1.6875\\cdot 8=13.5$. אפשר גם להזיז את הנקודה 3 מקומות: $1101.1_2=13.5$.",
      "recap": "מזיזים את הנקודה $e$ מקומות בכתיב $1.F$.",
      "questionHtml": "מהו הערך של <code class=\"tok\" dir=\"ltr\">0x41580000</code>?",
      "explanationHtml": "0 | 10000010 | 1011000...: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>130</mn></mrow><annotation encoding=\"application/x-tex\">E=130</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">e=3</annotation></semantics></math></span>, מנטיסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mn>1.1011</mn><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><mo>=</mo><mn>1.6875</mn></mrow><annotation encoding=\"application/x-tex\">1.1011_2=1+\\frac12+\\frac18+\\frac1{16}=1.6875</annotation></semantics></math></span>. הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.6875</mn><mo>⋅</mo><mn>8</mn><mo>=</mo><mn>13.5</mn></mrow><annotation encoding=\"application/x-tex\">1.6875\\cdot 8=13.5</annotation></semantics></math></span>. אפשר גם להזיז את הנקודה 3 מקומות: <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mn>1101.1</mn><mn>2</mn></msub><mo>=</mo><mn>13.5</mn></mrow><annotation encoding=\"application/x-tex\">1101.1_2=13.5</annotation></semantics></math></span>.</span>",
      "recapHtml": "מזיזים את הנקודה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">e</annotation></semantics></math></span> מקומות בכתיב <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.</mn><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">1.F</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C02-Q5",
      "question": "מהו הערך של `0x3E200000`?",
      "options": [
       {
        "id": "a",
        "value": "$0.3125$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.3125</mn></mrow><annotation encoding=\"application/x-tex\">0.3125</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$1.25$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.25</mn></mrow><annotation encoding=\"application/x-tex\">1.25</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$0.15625$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.15625</mn></mrow><annotation encoding=\"application/x-tex\">0.15625</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$0.625$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.625</mn></mrow><annotation encoding=\"application/x-tex\">0.625</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "0 | 01111100 | 0100...: $E=124$, $e=-3$, מנטיסה $1.25$. הערך $1.25/8=0.15625$. התשובה 1.25 שוכחת את האקספוננט.",
      "recap": "$e=E-127$ יכול להיות שלילי.",
      "questionHtml": "מהו הערך של <code class=\"tok\" dir=\"ltr\">0x3E200000</code>?",
      "explanationHtml": "0 | 01111100 | 0100...: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>124</mn></mrow><annotation encoding=\"application/x-tex\">E=124</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mo>−</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">e=-3</annotation></semantics></math></span>, מנטיסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.25</mn></mrow><annotation encoding=\"application/x-tex\">1.25</annotation></semantics></math></span>. הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.25</mn><mi mathvariant=\"normal\">/</mi><mn>8</mn><mo>=</mo><mn>0.15625</mn></mrow><annotation encoding=\"application/x-tex\">1.25/8=0.15625</annotation></semantics></math></span>. התשובה 1.25 שוכחת את האקספוננט.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mi>E</mi><mo>−</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">e=E-127</annotation></semantics></math></span> יכול להיות שלילי."
     },
     {
      "id": "C02-Q6",
      "question": "בשדה אקספוננט $E=100$ של מספר נורמלי, כמה הוא $e$ (האקספוננט האמיתי)?",
      "options": [
       {
        "id": "a",
        "value": "$100$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">100</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$27$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>27</mn></mrow><annotation encoding=\"application/x-tex\">27</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$-27$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>27</mn></mrow><annotation encoding=\"application/x-tex\">-27</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$227$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>227</mn></mrow><annotation encoding=\"application/x-tex\">227</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "$e=E-127=100-127=-27$. 227 מתקבל מחיבור ההטיה במקום חיסור, וזה הכיוון של הקידוד, לא של הפענוח.",
      "recap": "פענוח: $e=E-127$. קידוד: $E=e+127$.",
      "questionHtml": "בשדה אקספוננט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">E=100</annotation></semantics></math></span> של מספר נורמלי, כמה הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">e</annotation></semantics></math></span> (האקספוננט האמיתי)?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mi>E</mi><mo>−</mo><mn>127</mn><mo>=</mo><mn>100</mn><mo>−</mo><mn>127</mn><mo>=</mo><mo>−</mo><mn>27</mn></mrow><annotation encoding=\"application/x-tex\">e=E-127=100-127=-27</annotation></semantics></math></span>. 227 מתקבל מחיבור ההטיה במקום חיסור, וזה הכיוון של הקידוד, לא של הפענוח.",
      "recapHtml": "פענוח: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mi>E</mi><mo>−</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">e=E-127</annotation></semantics></math></span>. קידוד: <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mi>e</mi><mo>+</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">E=e+127</annotation></semantics></math></span>.</span>"
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "♾️",
    "title": "אפס, דנורמלים, אינסוף ו-NaN",
    "goal": "לזהות מילים מיוחדות (E=0 או E=255) ולחשב את הערכים הקיצוניים של הפורמט.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n    <p>שני ערכי האקספוננט הקיצוניים שמורים למקרים מיוחדים:</p>\n    <table><thead><tr><th><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span></th><th><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span></th><th>משמעות</th><th>ערך</th></tr></thead>\n    <tbody>\n    <tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span></td><td>אפס</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>±</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">\\pm 0</annotation></semantics></math></span> (שני אפסים, לפי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">S</annotation></semantics></math></span>)</td></tr>\n    <tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo mathvariant=\"normal\">≠</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">\\ne 0</annotation></semantics></math></span></td><td>דנורמלי (לא מנורמל)</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>S</mi></msup><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup><mo>⋅</mo><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">(-1)^S\\cdot 2^{-126}\\cdot F</annotation></semantics></math></span></td></tr>\n    <tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1..254</mn></mrow><annotation encoding=\"application/x-tex\">1..254</annotation></semantics></math></span></td><td>כלשהו</td><td>נורמלי</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>S</mi></msup><mo>⋅</mo><msup><mn>2</mn><mrow><mi>E</mi><mo>−</mo><mn>127</mn></mrow></msup><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mi>F</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">(-1)^S\\cdot 2^{E-127}(1+F)</annotation></semantics></math></span></td></tr>\n    <tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>255</mn></mrow><annotation encoding=\"application/x-tex\">255</annotation></semantics></math></span></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span></td><td>אינסוף</td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>±</mo><mi mathvariant=\"normal\">∞</mi></mrow><annotation encoding=\"application/x-tex\">\\pm\\infty</annotation></semantics></math></span></td></tr>\n    <tr><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>255</mn></mrow><annotation encoding=\"application/x-tex\">255</annotation></semantics></math></span></td><td><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo mathvariant=\"normal\">≠</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">\\ne 0</annotation></semantics></math></span></td><td>NaN (לא מספר)</td><td>אין ערך</td></tr>\n    </tbody></table>\n    <p>בדנורמלי אין \"1 סמוי\" והאקספוננט האמיתי קבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>126</mn></mrow><annotation encoding=\"application/x-tex\">-126</annotation></semantics></math></span> (לא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">-127</annotation></semantics></math></span>). זה מה שמאפשר מעבר חלק מהנורמלי הקטן ביותר אל האפס.</p>\n    <div class=\"lesson-rule\">🔑 ערכים חשובים לשינון:\n    <ul><li>הנורמלי החיובי הקטן ביותר: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mi>F</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">E=1,F=0</annotation></semantics></math></span>, הערך <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}</annotation></semantics></math></span>.</span></li>\n    <li>הדנורמלי החיובי הקטן ביותר: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo>=</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">F=2^{-23}</annotation></semantics></math></span>, הערך <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup><mo>=</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>149</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}\\cdot 2^{-23}=2^{-149}</annotation></semantics></math></span>.</span></li>\n    <li>הדנורמלי הגדול ביותר: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">F=1-2^{-23}</annotation></semantics></math></span>, הערך <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup><mo stretchy=\"false\">)</mo><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">(1-2^{-23})\\cdot 2^{-126}</annotation></semantics></math></span>.</span></li>\n    <li>הסופי הגדול ביותר: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>254</mn></mrow><annotation encoding=\"application/x-tex\">E=254</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">F=1-2^{-23}</annotation></semantics></math></span>, הערך <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>2</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup><mo stretchy=\"false\">)</mo><mo>⋅</mo><msup><mn>2</mn><mn>127</mn></msup></mrow><annotation encoding=\"application/x-tex\">(2-2^{-23})\\cdot 2^{127}</annotation></semantics></math></span>.</span></li></ul></div>\n    <div class=\"lesson-ex\">דוגמה: <code>0x00000001</code> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">E=0</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo>=</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">F=2^{-23}</annotation></semantics></math></span> (רק הביט האחרון), ולכן הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>149</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-149}</annotation></semantics></math></span>. לעומתו <code>0x00800000</code> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>1</mn><mo separator=\"true\">,</mo><mi>F</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">E=1,F=0</annotation></semantics></math></span>, כלומר <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}</annotation></semantics></math></span>.</span></div>\n    <div class=\"lesson-trap\">⚠️ לא להשתמש בנוסחה הרגילה עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">E=0</annotation></semantics></math></span>: אין 1 סמוי, והחזקה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}</annotation></semantics></math></span> ולא <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>127</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-127}</annotation></semantics></math></span>.</span></div>"
    },
    "questions": [
     {
      "id": "C03-Q1",
      "question": "מהו הערך של המילה `0x80000000`?",
      "options": [
       {
        "id": "a",
        "value": "$-\\infty$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mi mathvariant=\"normal\">∞</mi></mrow><annotation encoding=\"application/x-tex\">-\\infty</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$-2^{-127}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>127</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">-2^{-127}</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$-0$, כלומר אפס (עם סימן שלילי)",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">-0</annotation></semantics></math></span>, כלומר אפס (עם סימן שלילי)"
       },
       {
        "id": "d",
        "value": "NaN",
        "type": "text",
        "html": "NaN"
       }
      ],
      "correctId": "c",
      "explanation": "$S=1$, $E=0$, $F=0$: זה אפס שלילי. ל-$-\\infty$ היה צריך $E=255$, ו-NaN דורש $E=255$ ו-$F\\ne 0$.",
      "recap": "$E=0,F=0$ הוא אפס, ל-$S$ אין משמעות לערך.",
      "questionHtml": "מהו הערך של המילה <code class=\"tok\" dir=\"ltr\">0x80000000</code>?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">S=1</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">E=0</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">F=0</annotation></semantics></math></span>: זה אפס שלילי. ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mi mathvariant=\"normal\">∞</mi></mrow><annotation encoding=\"application/x-tex\">-\\infty</annotation></semantics></math></span> היה צריך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>255</mn></mrow><annotation encoding=\"application/x-tex\">E=255</annotation></semantics></math></span>, ו-NaN דורש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>255</mn></mrow><annotation encoding=\"application/x-tex\">E=255</annotation></semantics></math></span> ו-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo mathvariant=\"normal\">≠</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">F\\ne 0</annotation></semantics></math></span>.</span>",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>0</mn><mo separator=\"true\">,</mo><mi>F</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">E=0,F=0</annotation></semantics></math></span> הוא אפס, ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">S</annotation></semantics></math></span> אין משמעות לערך."
     },
     {
      "id": "C03-Q2",
      "question": "מהו הערך של המילה `0x7F800000`?",
      "options": [
       {
        "id": "a",
        "value": "NaN",
        "type": "text",
        "html": "NaN"
       },
       {
        "id": "b",
        "value": "$2^{128}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>128</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{128}</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$-\\infty$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mi mathvariant=\"normal\">∞</mi></mrow><annotation encoding=\"application/x-tex\">-\\infty</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$+\\infty$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>+</mo><mi mathvariant=\"normal\">∞</mi></mrow><annotation encoding=\"application/x-tex\">+\\infty</annotation></semantics></math></span>"
       }
      ],
      "correctId": "d",
      "explanation": "0 | 11111111 | 000...: $S=0$, $E=255$, $F=0$, כלומר $+\\infty$. $2^{128}$ הוא מה שהנוסחה הרגילה הייתה נותנת, אבל $E=255$ שמור.",
      "recap": "$E=255$ ו-$F=0$: אינסוף.",
      "questionHtml": "מהו הערך של המילה <code class=\"tok\" dir=\"ltr\">0x7F800000</code>?",
      "explanationHtml": "0 | 11111111 | 000...: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">S=0</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>255</mn></mrow><annotation encoding=\"application/x-tex\">E=255</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">F=0</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>+</mo><mi mathvariant=\"normal\">∞</mi></mrow><annotation encoding=\"application/x-tex\">+\\infty</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>128</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{128}</annotation></semantics></math></span> הוא מה שהנוסחה הרגילה הייתה נותנת, אבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>255</mn></mrow><annotation encoding=\"application/x-tex\">E=255</annotation></semantics></math></span> שמור.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>255</mn></mrow><annotation encoding=\"application/x-tex\">E=255</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">F=0</annotation></semantics></math></span>: אינסוף."
     },
     {
      "id": "C03-Q3",
      "question": "מהו הערך של המילה `0x7FC00000`?",
      "options": [
       {
        "id": "a",
        "value": "NaN",
        "type": "text",
        "html": "NaN"
       },
       {
        "id": "b",
        "value": "$+\\infty$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>+</mo><mi mathvariant=\"normal\">∞</mi></mrow><annotation encoding=\"application/x-tex\">+\\infty</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$1.5\\cdot 2^{128}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.5</mn><mo>⋅</mo><msup><mn>2</mn><mn>128</mn></msup></mrow><annotation encoding=\"application/x-tex\">1.5\\cdot 2^{128}</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "0",
        "type": "text",
        "html": "0"
       }
      ],
      "correctId": "a",
      "explanation": "0 | 11111111 | 1000...: $E=255$ ו-$F\\ne 0$, לכן NaN. אינסוף דורש $F=0$.",
      "recap": "$E=255$ ו-$F\\ne 0$: NaN.",
      "questionHtml": "מהו הערך של המילה <code class=\"tok\" dir=\"ltr\">0x7FC00000</code>?",
      "explanationHtml": "0 | 11111111 | 1000...: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>255</mn></mrow><annotation encoding=\"application/x-tex\">E=255</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo mathvariant=\"normal\">≠</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">F\\ne 0</annotation></semantics></math></span>, לכן NaN. אינסוף דורש <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">F=0</annotation></semantics></math></span>.</span>",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>255</mn></mrow><annotation encoding=\"application/x-tex\">E=255</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo mathvariant=\"normal\">≠</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">F\\ne 0</annotation></semantics></math></span>: NaN."
     },
     {
      "id": "C03-Q4",
      "question": "מהו הערך של המילה `0x00000001`?",
      "options": [
       {
        "id": "a",
        "value": "$2^{-127}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>127</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-127}</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$2^{-126}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$2^{-23}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-23}</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$2^{-149}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>149</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-149}</annotation></semantics></math></span>"
       }
      ],
      "correctId": "d",
      "explanation": "$E=0$ ולכן דנורמלי: $2^{-126}\\cdot F$ עם $F=2^{-23}$ נותן $2^{-149}$. $2^{-126}$ הוא הנורמלי הקטן ביותר (`0x00800000`), ו-$2^{-23}$ הוא רק ה-$F$ בלי הגורם $2^{-126}$.",
      "recap": "הדנורמלי הקטן ביותר הוא $2^{-149}$.",
      "questionHtml": "מהו הערך של המילה <code class=\"tok\" dir=\"ltr\">0x00000001</code>?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">E=0</annotation></semantics></math></span> ולכן דנורמלי: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup><mo>⋅</mo><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">2^{-126}\\cdot F</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo>=</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">F=2^{-23}</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>149</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-149}</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}</annotation></semantics></math></span> הוא הנורמלי הקטן ביותר (<code class=\"tok\" dir=\"ltr\">0x00800000</code>), ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-23}</annotation></semantics></math></span> הוא רק ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span> בלי הגורם <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}</annotation></semantics></math></span>.</span>",
      "recapHtml": "הדנורמלי הקטן ביותר הוא <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>149</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-149}</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C03-Q5",
      "question": "מהו הערך של המילה `0x007FFFFF`, הדנורמלי הגדול ביותר?",
      "options": [
       {
        "id": "a",
        "value": "$2^{-126}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$(1-2^{-23})\\cdot 2^{-126}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup><mo stretchy=\"false\">)</mo><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">(1-2^{-23})\\cdot 2^{-126}</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$(2-2^{-23})\\cdot 2^{-126}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>2</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup><mo stretchy=\"false\">)</mo><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">(2-2^{-23})\\cdot 2^{-126}</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$2^{-126}-2^{-127}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>127</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}-2^{-127}</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "$E=0$ ו-$F=1-2^{-23}$ (כל 23 הביטים 1). הערך $(1-2^{-23})\\cdot 2^{-126}$, מעט פחות מ-$2^{-126}$. התשובה $(2-2^{-23})\\cdot 2^{-126}$ היא ערך של נורמלי עם 1 סמוי.",
      "recap": "דנורמלי: בלי 1 סמוי, ולכן קטן מ-$2^{-126}$.",
      "questionHtml": "מהו הערך של המילה <code class=\"tok\" dir=\"ltr\">0x007FFFFF</code>, הדנורמלי הגדול ביותר?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">E=0</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">F=1-2^{-23}</annotation></semantics></math></span> (כל 23 הביטים 1). הערך <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>1</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup><mo stretchy=\"false\">)</mo><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">(1-2^{-23})\\cdot 2^{-126}</annotation></semantics></math></span>, מעט פחות מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}</annotation></semantics></math></span>. התשובה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>2</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup><mo stretchy=\"false\">)</mo><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">(2-2^{-23})\\cdot 2^{-126}</annotation></semantics></math></span> היא ערך של נורמלי עם 1 סמוי.",
      "recapHtml": "דנורמלי: בלי 1 סמוי, ולכן קטן מ-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C03-Q6",
      "question": "כמה צירופי ביטים שונים של 32 ביטים מייצגים NaN?",
      "options": [
       {
        "id": "a",
        "value": "$1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$2^{23}-1$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{23}-1</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$2^{24}-2$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2^{24}-2</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$2^{24}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{24}</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "NaN דורש $E=255$ ו-$F\\ne 0$: $2^{23}-1$ אפשרויות ל-$F$, כפול 2 אפשרויות ל-$S$. סך הכול $2(2^{23}-1)=2^{24}-2$. $2^{24}$ כולל גם את שני האינסופים.",
      "recap": "$E=255$: $2^{24}$ צירופים, מהם 2 אינסוף והשאר NaN.",
      "questionHtml": "כמה צירופי ביטים שונים של 32 ביטים מייצגים NaN?",
      "explanationHtml": "NaN דורש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>255</mn></mrow><annotation encoding=\"application/x-tex\">E=255</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo mathvariant=\"normal\">≠</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">F\\ne 0</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{23}-1</annotation></semantics></math></span> אפשרויות ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span>, כפול 2 אפשרויות ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi></mrow><annotation encoding=\"application/x-tex\">S</annotation></semantics></math></span>. סך הכול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo stretchy=\"false\">(</mo><msup><mn>2</mn><mn>23</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>=</mo><msup><mn>2</mn><mn>24</mn></msup><mo>−</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2(2^{23}-1)=2^{24}-2</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{24}</annotation></semantics></math></span> כולל גם את שני האינסופים.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>255</mn></mrow><annotation encoding=\"application/x-tex\">E=255</annotation></semantics></math></span>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{24}</annotation></semantics></math></span> צירופים, מהם 2 אינסוף והשאר NaN."
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "🔒",
    "title": "קידוד מספר פשוט",
    "goal": "להפוך מספר עשרוני עם כתיב בינארי סופי להקסה של 32 ביטים.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n    <p>קידוד הוא ההפך מפענוח. מתכון:</p>\n    <ol>\n    <li><b>סימן:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">S=1</annotation></semantics></math></span> אם המספר שלילי. ממשיכים עם הערך המוחלט.</li>\n    <li><b>בינארי:</b> כותבים את הערך בבסיס 2. חלק שלם: מחלקים ב-2. חלק שברירי: כופלים ב-2 שוב ושוב ורושמים את הספרה השלמה.</li>\n    <li><b>נירמול:</b> מזיזים את הנקודה עד שיש בדיוק ספרת 1 אחת משמאלה: <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.</mn><mi>x</mi><mi>x</mi><mi>x</mi><mo>×</mo><msup><mn>2</mn><mi>e</mi></msup></mrow><annotation encoding=\"application/x-tex\">1.xxx\\times 2^{e}</annotation></semantics></math></span>.</span></li>\n    <li><b>אקספוננט:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mi>e</mi><mo>+</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">E=e+127</annotation></semantics></math></span>, כתוב ב-8 ביטים.</li>\n    <li><b>שבר:</b> הספרות אחרי הנקודה, משלימים באפסים עד 23 ביטים (ה-1 הסמוי לא נשמר).</li>\n    <li>מרכיבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mtext> </mtext><mi mathvariant=\"normal\">∣</mi><mtext> </mtext><mi>E</mi><mtext> </mtext><mi mathvariant=\"normal\">∣</mi><mtext> </mtext><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">S\\,|\\,E\\,|\\,F</annotation></semantics></math></span> וקובצים לארבעות לקריאה בהקסה.</li></ol>\n    <div class=\"lesson-ex\">דוגמה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>6.625</mn></mrow><annotation encoding=\"application/x-tex\">-6.625</annotation></semantics></math></span>. הערך המוחלט: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6.625</mn><mo>=</mo><msub><mn>110.101</mn><mn>2</mn></msub><mo>=</mo><msub><mn>1.10101</mn><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">6.625=110.101_2=1.10101_2\\cdot 2^{2}</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>2</mn><mo>+</mo><mn>127</mn><mo>=</mo><mn>129</mn><mo>=</mo><msub><mn>10000001</mn><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">E=2+127=129=10000001_2</annotation></semantics></math></span>. הביטים: <code>1 | 10000001 | 10101000000000000000000</code>, כלומר <code>0xC0D40000</code>.</div>\n    <div class=\"lesson-rule\">🔑 <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mi>e</mi><mo>+</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">E=e+127</annotation></semantics></math></span> בקידוד, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mi>E</mi><mo>−</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">e=E-127</annotation></semantics></math></span> בפענוח. עבור מספר קטן מ-1 האקספוננט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">e</annotation></semantics></math></span> שלילי ולכן <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>&lt;</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">E&lt;127</annotation></semantics></math></span>.</span></div>\n    <div class=\"lesson-trap\">⚠️ מספרים כמו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.75</mn></mrow><annotation encoding=\"application/x-tex\">0.75</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12.5</mn></mrow><annotation encoding=\"application/x-tex\">12.5</annotation></semantics></math></span> הם סכום של חזקות 2 ולכן הקידוד מדויק. מספרים כמו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.1</mn></mrow><annotation encoding=\"application/x-tex\">0.1</annotation></semantics></math></span> אינם, ואותם נלמד בשלב הבא.</div>"
    },
    "questions": [
     {
      "id": "C04-Q1",
      "question": "איך נראה $12.5$ אחרי נירמול ($1.xxx\\times 2^{e}$)?",
      "options": [
       {
        "id": "a",
        "value": "$1.1001_2\\cdot 2^{3}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mn>1.1001</mn><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mn>3</mn></msup></mrow><annotation encoding=\"application/x-tex\">1.1001_2\\cdot 2^{3}</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$1.1001_2\\cdot 2^{4}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mn>1.1001</mn><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mn>4</mn></msup></mrow><annotation encoding=\"application/x-tex\">1.1001_2\\cdot 2^{4}</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$1.0011_2\\cdot 2^{3}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mn>1.0011</mn><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mn>3</mn></msup></mrow><annotation encoding=\"application/x-tex\">1.0011_2\\cdot 2^{3}</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$0.11001_2\\cdot 2^{4}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mn>0.11001</mn><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mn>4</mn></msup></mrow><annotation encoding=\"application/x-tex\">0.11001_2\\cdot 2^{4}</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "$12.5=1100.1_2$. מזיזים את הנקודה 3 מקומות שמאלה: $1.1001_2\\cdot 2^3$. האפשרות האחרונה היא אותו ערך אבל לא מנורמל (יש 0 משמאל לנקודה), והאפשרות עם $2^4$ שווה ל-25.",
      "recap": "מנרמלים עד שיש בדיוק 1 אחד משמאל לנקודה.",
      "questionHtml": "איך נראה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12.5</mn></mrow><annotation encoding=\"application/x-tex\">12.5</annotation></semantics></math></span> אחרי נירמול (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.</mn><mi>x</mi><mi>x</mi><mi>x</mi><mo>×</mo><msup><mn>2</mn><mi>e</mi></msup></mrow><annotation encoding=\"application/x-tex\">1.xxx\\times 2^{e}</annotation></semantics></math></span>)?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12.5</mn><mo>=</mo><msub><mn>1100.1</mn><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">12.5=1100.1_2</annotation></semantics></math></span>. מזיזים את הנקודה 3 מקומות שמאלה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msub><mn>1.1001</mn><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mn>3</mn></msup></mrow><annotation encoding=\"application/x-tex\">1.1001_2\\cdot 2^3</annotation></semantics></math></span>. האפשרות האחרונה היא אותו ערך אבל לא מנורמל (יש 0 משמאל לנקודה), והאפשרות עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>4</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^4</annotation></semantics></math></span> שווה ל-25.",
      "recapHtml": "מנרמלים עד שיש בדיוק 1 אחד משמאל לנקודה."
     },
     {
      "id": "C04-Q2",
      "question": "מהו שדה האקספוננט $E$ בקידוד של $12.5$?",
      "options": [
       {
        "id": "a",
        "value": "$3$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">3</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$124$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>124</mn></mrow><annotation encoding=\"application/x-tex\">124</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$130$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>130</mn></mrow><annotation encoding=\"application/x-tex\">130</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$131$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>131</mn></mrow><annotation encoding=\"application/x-tex\">131</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "$e=3$ ולכן $E=3+127=130$. התשובה 124 היא $e-127$ (כיוון הפענוח), ו-3 הוא $e$ עצמו בלי ההטיה.",
      "recap": "קידוד: $E=e+127$.",
      "questionHtml": "מהו שדה האקספוננט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span> בקידוד של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12.5</mn></mrow><annotation encoding=\"application/x-tex\">12.5</annotation></semantics></math></span>?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">e=3</annotation></semantics></math></span> ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>3</mn><mo>+</mo><mn>127</mn><mo>=</mo><mn>130</mn></mrow><annotation encoding=\"application/x-tex\">E=3+127=130</annotation></semantics></math></span>. התשובה 124 היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>−</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">e-127</annotation></semantics></math></span> (כיוון הפענוח), ו-3 הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">e</annotation></semantics></math></span> עצמו בלי ההטיה.",
      "recapHtml": "קידוד: <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mi>e</mi><mo>+</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">E=e+127</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C04-Q3",
      "question": "מהי המילה של $12.5$ בפורמט Single Precision?",
      "options": [
       {
        "id": "a",
        "value": "`0xC1480000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0xC1480000</code>"
       },
       {
        "id": "b",
        "value": "`0x41C80000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x41C80000</code>"
       },
       {
        "id": "c",
        "value": "`0x40C80000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x40C80000</code>"
       },
       {
        "id": "d",
        "value": "`0x41480000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x41480000</code>"
       }
      ],
      "correctId": "d",
      "explanation": "0 | 10000010 | 1001000...: הקבוצות 0100 0001 0100 1000 0000... נותנות `0x41480000`. `0xC1480000` הוא $-12.5$. `0x41C80000` ו-`0x40C80000` הם אקספוננט גדול או קטן ב-1 ($25$ ו-$6.25$).",
      "recap": "מרכיבים $S|E|F$ וקובצים לארבעות.",
      "questionHtml": "מהי המילה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>12.5</mn></mrow><annotation encoding=\"application/x-tex\">12.5</annotation></semantics></math></span> בפורמט Single Precision?",
      "explanationHtml": "0 | 10000010 | 1001000...: הקבוצות 0100 0001 0100 1000 0000... נותנות <code class=\"tok\" dir=\"ltr\">0x41480000</code>. <code class=\"tok\" dir=\"ltr\">0xC1480000</code> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>12.5</mn></mrow><annotation encoding=\"application/x-tex\">-12.5</annotation></semantics></math></span>. <code class=\"tok\" dir=\"ltr\">0x41C80000</code> ו-<code class=\"tok\" dir=\"ltr\">0x40C80000</code> הם אקספוננט גדול או קטן ב-1 (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>25</mn></mrow><annotation encoding=\"application/x-tex\">25</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>6.25</mn></mrow><annotation encoding=\"application/x-tex\">6.25</annotation></semantics></math></span>).",
      "recapHtml": "מרכיבים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mi mathvariant=\"normal\">∣</mi><mi>E</mi><mi mathvariant=\"normal\">∣</mi><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">S|E|F</annotation></semantics></math></span> וקובצים לארבעות."
     },
     {
      "id": "C04-Q4",
      "question": "מהי המילה של $-0.75$?",
      "options": [
       {
        "id": "a",
        "value": "`0x3F400000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3F400000</code>"
       },
       {
        "id": "b",
        "value": "`0xBF400000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0xBF400000</code>"
       },
       {
        "id": "c",
        "value": "`0xBF000000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0xBF000000</code>"
       },
       {
        "id": "d",
        "value": "`0xC0400000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0xC0400000</code>"
       }
      ],
      "correctId": "b",
      "explanation": "$0.75=0.11_2=1.1_2\\cdot 2^{-1}$, לכן $E=126$ ו-$S=1$: 1 | 01111110 | 1000... = `0xBF400000`. `0x3F400000` הוא $+0.75$, `0xBF000000` הוא $-0.5$ (שכחו את ה-$F$), ו-`0xC0400000` הוא $-3$.",
      "recap": "מספר קטן מ-1: $e<0$ ו-$E<127$.",
      "questionHtml": "מהי המילה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>0.75</mn></mrow><annotation encoding=\"application/x-tex\">-0.75</annotation></semantics></math></span>?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.75</mn><mo>=</mo><msub><mn>0.11</mn><mn>2</mn></msub><mo>=</mo><msub><mn>1.1</mn><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>1</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">0.75=0.11_2=1.1_2\\cdot 2^{-1}</annotation></semantics></math></span>, לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>126</mn></mrow><annotation encoding=\"application/x-tex\">E=126</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>S</mi><mo>=</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">S=1</annotation></semantics></math></span>: 1 | 01111110 | 1000... = <code class=\"tok\" dir=\"ltr\">0xBF400000</code>. <code class=\"tok\" dir=\"ltr\">0x3F400000</code> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>+</mo><mn>0.75</mn></mrow><annotation encoding=\"application/x-tex\">+0.75</annotation></semantics></math></span>, <code class=\"tok\" dir=\"ltr\">0xBF000000</code> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>0.5</mn></mrow><annotation encoding=\"application/x-tex\">-0.5</annotation></semantics></math></span> (שכחו את ה-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span>), ו-<code class=\"tok\" dir=\"ltr\">0xC0400000</code> הוא <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">-3</annotation></semantics></math></span>.</span>",
      "recapHtml": "מספר קטן מ-1: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>&lt;</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">e&lt;0</annotation></semantics></math></span> ו-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>&lt;</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">E&lt;127</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C04-Q5",
      "question": "מהי המילה של $100$?",
      "options": [
       {
        "id": "a",
        "value": "`0x42C80000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x42C80000</code>"
       },
       {
        "id": "b",
        "value": "`0x42480000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x42480000</code>"
       },
       {
        "id": "c",
        "value": "`0x43480000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x43480000</code>"
       },
       {
        "id": "d",
        "value": "`0xC2C80000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0xC2C80000</code>"
       }
      ],
      "correctId": "a",
      "explanation": "$100=1100100_2=1.100100_2\\cdot 2^{6}$, $E=133=10000101_2$. הביטים 0 | 10000101 | 1001000... נותנים `0x42C80000`. האפשרויות האחרות: אקספוננט קטן או גדול ב-1 (50 או 200) וסימן הפוך.",
      "recap": "$100=1.5625\\cdot 2^6$.",
      "questionHtml": "מהי המילה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">100</annotation></semantics></math></span>?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mo>=</mo><msub><mn>1100100</mn><mn>2</mn></msub><mo>=</mo><msub><mn>1.100100</mn><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mn>6</mn></msup></mrow><annotation encoding=\"application/x-tex\">100=1100100_2=1.100100_2\\cdot 2^{6}</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>133</mn><mo>=</mo><msub><mn>10000101</mn><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">E=133=10000101_2</annotation></semantics></math></span>. הביטים 0 | 10000101 | 1001000... נותנים <code class=\"tok\" dir=\"ltr\">0x42C80000</code>. האפשרויות האחרות: אקספוננט קטן או גדול ב-1 (50 או 200) וסימן הפוך.",
      "recapHtml": "<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>100</mn><mo>=</mo><mn>1.5625</mn><mo>⋅</mo><msup><mn>2</mn><mn>6</mn></msup></mrow><annotation encoding=\"application/x-tex\">100=1.5625\\cdot 2^6</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C04-Q6",
      "question": "מהי המילה של $0.15625=\\frac{5}{32}$?",
      "options": [
       {
        "id": "a",
        "value": "`0x41200000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x41200000</code>"
       },
       {
        "id": "b",
        "value": "`0x3F200000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3F200000</code>"
       },
       {
        "id": "c",
        "value": "`0x3E200000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3E200000</code>"
       },
       {
        "id": "d",
        "value": "`0x3D200000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3D200000</code>"
       }
      ],
      "correctId": "c",
      "explanation": "$\\frac5{32}=0.00101_2=1.01_2\\cdot 2^{-3}$, $E=124=01111100_2$. הביטים 0 | 01111100 | 0100... נותנים `0x3E200000`. `0x41200000` הוא $10$ (אקספוננט עם סימן הפוך), ו-`0x3F200000`/`0x3D200000` הם אותו שבר עם אקספוננט שגוי ($E=126$ ו-$E=122$).",
      "recap": "$\\frac{5}{32}=1.01_2\\cdot 2^{-3}$.",
      "questionHtml": "מהי המילה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.15625</mn><mo>=</mo><mfrac><mn>5</mn><mn>32</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">0.15625=\\frac{5}{32}</annotation></semantics></math></span>?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>5</mn><mn>32</mn></mfrac><mo>=</mo><msub><mn>0.00101</mn><mn>2</mn></msub><mo>=</mo><msub><mn>1.01</mn><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">\\frac5{32}=0.00101_2=1.01_2\\cdot 2^{-3}</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>124</mn><mo>=</mo><msub><mn>01111100</mn><mn>2</mn></msub></mrow><annotation encoding=\"application/x-tex\">E=124=01111100_2</annotation></semantics></math></span>. הביטים 0 | 01111100 | 0100... נותנים <code class=\"tok\" dir=\"ltr\">0x3E200000</code>. <code class=\"tok\" dir=\"ltr\">0x41200000</code> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>10</mn></mrow><annotation encoding=\"application/x-tex\">10</annotation></semantics></math></span> (אקספוננט עם סימן הפוך), ו-<code class=\"tok\" dir=\"ltr\">0x3F200000</code>/<code class=\"tok\" dir=\"ltr\">0x3D200000</code> הם אותו שבר עם אקספוננט שגוי (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>126</mn></mrow><annotation encoding=\"application/x-tex\">E=126</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>122</mn></mrow><annotation encoding=\"application/x-tex\">E=122</annotation></semantics></math></span>).",
      "recapHtml": "<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>5</mn><mn>32</mn></mfrac><mo>=</mo><msub><mn>1.01</mn><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>3</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">\\frac{5}{32}=1.01_2\\cdot 2^{-3}</annotation></semantics></math></span>.</span>"
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "🔁",
    "title": "שברים מחזוריים ועיגול",
    "goal": "לקודד מספר שהכתיב הבינארי שלו אינסופי, ולעגל נכון (כולל תיקו) את 23 ביטי השבר.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n    <p>מספרים כמו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac13</annotation></semantics></math></span> או <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.1</mn></mrow><annotation encoding=\"application/x-tex\">0.1</annotation></semantics></math></span> הם שברים בינאריים אינסופיים. ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span> יש רק 23 ביטים, ולכן חותכים וצריך להחליט איך. הכלל הוא <b>עיגול לקרוב</b>:</p>\n    <ul>\n    <li>מסתכלים על הביטים שנחתכו (ביט 24 ואילך) כעל שבר של \"יחידה אחרונה\" (היחידה האחרונה היא הביט ה-23).</li>\n    <li>אם החתוך <b>גדול מחצי</b>: מוסיפים 1 לביט האחרון (עיגול למעלה).</li>\n    <li>אם החתוך <b>קטן מחצי</b>: משאירים (עיגול למטה).</li>\n    <li><b>בדיוק חצי</b> (תיקו): בוחרים מבין שני השכנים את זה שביטו האחרון 0 (\"לזוגי\").</li></ul>\n    <p>בפועל מספיק להסתכל על ביט 24: אם הוא 1 וקיים 1 כלשהו אחריו, עיגול למעלה; אם הוא 1 ואחריו רק אפסים, תיקו; אם הוא 0, עיגול למטה.</p>\n    <div class=\"lesson-ex\">דוגמה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>=</mo><mn>0.010101</mn><msub><mo>…</mo><mn>2</mn></msub><mo>=</mo><mn>1.0101</mn><msub><mo>…</mo><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">\\frac13=0.010101\\ldots_2=1.0101\\ldots_2\\cdot 2^{-2}</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>125</mn></mrow><annotation encoding=\"application/x-tex\">E=125</annotation></semantics></math></span>. 23 ביטי השבר הם <code>01010101010101010101010</code>, והחתוך מתחיל ב-<code>1010...</code>, יותר מחצי. לכן מעגלים למעלה והשבר מסתיים ב-<code>...011</code>. המילה: <code>0x3EAAAAAB</code>.</div>\n    <div class=\"lesson-rule\">🔑 <b>כפל בחזקת 2 משנה רק את האקספוננט.</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>12</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">\\frac1{12}=\\frac13\\cdot 2^{-2}</annotation></semantics></math></span> ולכן יש לו אותו שבר של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac13</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span> קטן ב-2. כך מקודדים גם שבר כמו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mfrac><mn>1</mn><mn>384</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">-\\frac1{384}</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">=\\frac13\\cdot 2^{-7}</annotation></semantics></math></span>): מוציאים את חזקות ה-2 ונשאר <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac13</annotation></semantics></math></span>.</span></div>\n    <div class=\"lesson-trap\">⚠️ כשהתשובות נבדלות רק בספרה האחרונה (...AAAA מול ...AAAB), ההכרעה היא בעיגול. בודקים את הביטים החתוכים לפני שבוחרים.</div>"
    },
    "questions": [
     {
      "id": "C05-Q1",
      "question": "בקידוד של $\\frac13=1.0101\\ldots_2\\cdot 2^{-2}$, איך מעגלים את 23 ביטי השבר?",
      "options": [
       {
        "id": "a",
        "value": "למעלה, כי החתוך הוא $0.1010\\ldots$ מהיחידה האחרונה, יותר מחצי",
        "type": "text",
        "html": "למעלה, כי החתוך הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.1010</mn><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">0.1010\\ldots</annotation></semantics></math></span> מהיחידה האחרונה, יותר מחצי"
       },
       {
        "id": "b",
        "value": "למטה, כי הביט החתוך הראשון הוא 1",
        "type": "text",
        "html": "למטה, כי הביט החתוך הראשון הוא 1"
       },
       {
        "id": "c",
        "value": "תיקו, ולכן לזוגי",
        "type": "text",
        "html": "תיקו, ולכן לזוגי"
       },
       {
        "id": "d",
        "value": "אין צורך בעיגול, הקידוד מדויק",
        "type": "text",
        "html": "אין צורך בעיגול, הקידוד מדויק"
       }
      ],
      "correctId": "a",
      "explanation": "הביטים 23 הראשונים הם 0101...010 (מסתיימים ב-0). החתוך הוא 1010... שהוא כ-$\\frac23$ מהיחידה האחרונה, גדול מחצי, ולכן עיגול למעלה. זה לא תיקו כי אחרי ה-1 הראשון יש עוד 1-ים. ואין קידוד מדויק כי הכתיב אינסופי.",
      "recap": "חתוך גדול מחצי: עיגול למעלה.",
      "questionHtml": "בקידוד של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>=</mo><mn>1.0101</mn><msub><mo>…</mo><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">\\frac13=1.0101\\ldots_2\\cdot 2^{-2}</annotation></semantics></math></span>, איך מעגלים את 23 ביטי השבר?",
      "explanationHtml": "הביטים 23 הראשונים הם 0101...010 (מסתיימים ב-0). החתוך הוא 1010... שהוא כ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac23</annotation></semantics></math></span> מהיחידה האחרונה, גדול מחצי, ולכן עיגול למעלה. זה לא תיקו כי אחרי ה-1 הראשון יש עוד 1-ים. ואין קידוד מדויק כי הכתיב אינסופי.",
      "recapHtml": "חתוך גדול מחצי: עיגול למעלה."
     },
     {
      "id": "C05-Q2",
      "question": "מהי המילה של $\\frac13$?",
      "options": [
       {
        "id": "a",
        "value": "`0x3EAAAAAA`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3EAAAAAA</code>"
       },
       {
        "id": "b",
        "value": "`0x3EAAAAAB`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3EAAAAAB</code>"
       },
       {
        "id": "c",
        "value": "`0x3F2AAAAB`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3F2AAAAB</code>"
       },
       {
        "id": "d",
        "value": "`0x3E2AAAAB`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3E2AAAAB</code>"
       }
      ],
      "correctId": "b",
      "explanation": "$E=-2+127=125$, ולכן הביטים 0 | 01111101 | 0101010...011 = `0x3EAAAAAB`. `0x3EAAAAAA` הוא החיתוך בלי עיגול. `0x3F2AAAAB` ו-`0x3E2AAAAB` הם אותו שבר עם $E=126$ ו-$E=124$ (הערכים $\\frac23$ ו-$\\frac16$).",
      "recap": "$\\frac13$ הוא `0x3EAAAAAB`.",
      "questionHtml": "מהי המילה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac13</annotation></semantics></math></span>?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mo>−</mo><mn>2</mn><mo>+</mo><mn>127</mn><mo>=</mo><mn>125</mn></mrow><annotation encoding=\"application/x-tex\">E=-2+127=125</annotation></semantics></math></span>, ולכן הביטים 0 | 01111101 | 0101010...011 = <code class=\"tok\" dir=\"ltr\">0x3EAAAAAB</code>. <code class=\"tok\" dir=\"ltr\">0x3EAAAAAA</code> הוא החיתוך בלי עיגול. <code class=\"tok\" dir=\"ltr\">0x3F2AAAAB</code> ו-<code class=\"tok\" dir=\"ltr\">0x3E2AAAAB</code> הם אותו שבר עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>126</mn></mrow><annotation encoding=\"application/x-tex\">E=126</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>124</mn></mrow><annotation encoding=\"application/x-tex\">E=124</annotation></semantics></math></span> (הערכים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac23</annotation></semantics></math></span> ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>6</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac16</annotation></semantics></math></span>).",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac13</annotation></semantics></math></span> הוא <code class=\"tok\" dir=\"ltr\">0x3EAAAAAB</code>."
     },
     {
      "id": "C05-Q3",
      "question": "מהי המילה של $0.1$? (רמז: $0.1=1.100110011\\ldots_2\\cdot 2^{-4}$)",
      "options": [
       {
        "id": "a",
        "value": "`0x3DCCCCCC`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3DCCCCCC</code>"
       },
       {
        "id": "b",
        "value": "`0x3DCCCCCD`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3DCCCCCD</code>"
       },
       {
        "id": "c",
        "value": "`0x3ECCCCCD`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3ECCCCCD</code>"
       },
       {
        "id": "d",
        "value": "`0x3CCCCCCD`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3CCCCCCD</code>"
       }
      ],
      "correctId": "b",
      "explanation": "$E=-4+127=123$. השבר הוא `1001 1001 ... 1001 100|1100...`: 23 הביטים מסתיימים ב-`100` והחתוך הוא `1100...`, יותר מחצי. מעגלים למעלה: `101` בסוף, ולכן ...CCCD. `0x3DCCCCCC` הוא חיתוך בלי עיגול, והשניים האחרונים שגויים באקספוננט.",
      "recap": "חיתוך בלי בדיקת הביטים הבאים נותן טעות של 1 בסוף.",
      "questionHtml": "מהי המילה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.1</mn></mrow><annotation encoding=\"application/x-tex\">0.1</annotation></semantics></math></span>? (רמז: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0.1</mn><mo>=</mo><mn>1.100110011</mn><msub><mo>…</mo><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>4</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">0.1=1.100110011\\ldots_2\\cdot 2^{-4}</annotation></semantics></math></span>)",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mo>−</mo><mn>4</mn><mo>+</mo><mn>127</mn><mo>=</mo><mn>123</mn></mrow><annotation encoding=\"application/x-tex\">E=-4+127=123</annotation></semantics></math></span>. השבר הוא <code class=\"tok\" dir=\"ltr\">1001 1001 ... 1001 100|1100...</code>: 23 הביטים מסתיימים ב-<code class=\"tok\" dir=\"ltr\">100</code> והחתוך הוא <code class=\"tok\" dir=\"ltr\">1100...</code>, יותר מחצי. מעגלים למעלה: <code class=\"tok\" dir=\"ltr\">101</code> בסוף, ולכן ...CCCD. <code class=\"tok\" dir=\"ltr\">0x3DCCCCCC</code> הוא חיתוך בלי עיגול, והשניים האחרונים שגויים באקספוננט.",
      "recapHtml": "חיתוך בלי בדיקת הביטים הבאים נותן טעות של 1 בסוף."
     },
     {
      "id": "C05-Q4",
      "question": "ל-$1+2^{-24}$ אין ייצוג מדויק. מהי המילה שמתקבלת אחרי עיגול?",
      "options": [
       {
        "id": "a",
        "value": "`0x3F800000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3F800000</code>"
       },
       {
        "id": "b",
        "value": "`0x3F800001`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3F800001</code>"
       },
       {
        "id": "c",
        "value": "`0x3F800002`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3F800002</code>"
       },
       {
        "id": "d",
        "value": "`0x3F7FFFFF`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3F7FFFFF</code>"
       }
      ],
      "correctId": "a",
      "explanation": "$1+2^{-24}$ נמצא בדיוק באמצע בין $1$ (`0x3F800000`, ביט אחרון 0) לבין $1+2^{-23}$ (`0x3F800001`, ביט אחרון 1). תיקו, ולכן בוחרים את הזוגי: `0x3F800000`.",
      "recap": "תיקו: עיגול לשכן שהביט האחרון שלו 0.",
      "questionHtml": "ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>24</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">1+2^{-24}</annotation></semantics></math></span> אין ייצוג מדויק. מהי המילה שמתקבלת אחרי עיגול?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>24</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">1+2^{-24}</annotation></semantics></math></span> נמצא בדיוק באמצע בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">1</annotation></semantics></math></span> (<code class=\"tok\" dir=\"ltr\">0x3F800000</code>, ביט אחרון 0) לבין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">1+2^{-23}</annotation></semantics></math></span> (<code class=\"tok\" dir=\"ltr\">0x3F800001</code>, ביט אחרון 1). תיקו, ולכן בוחרים את הזוגי: <code class=\"tok\" dir=\"ltr\">0x3F800000</code>.",
      "recapHtml": "תיקו: עיגול לשכן שהביט האחרון שלו 0."
     },
     {
      "id": "C05-Q5",
      "question": "מהי המילה שמתקבלת מעיגול של $1+3\\cdot 2^{-24}$?",
      "options": [
       {
        "id": "a",
        "value": "`0x3F800001`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3F800001</code>"
       },
       {
        "id": "b",
        "value": "`0x3F800002`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3F800002</code>"
       },
       {
        "id": "c",
        "value": "`0x3F800003`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3F800003</code>"
       },
       {
        "id": "d",
        "value": "`0x3F800000`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3F800000</code>"
       }
      ],
      "correctId": "b",
      "explanation": "$1+3\\cdot 2^{-24}$ הוא באמצע בין `0x3F800001` (ביט אחרון 1) ל-`0x3F800002` (ביט אחרון 0). תיקו, ובוחרים את הזוגי: `0x3F800002`. שימו לב שהפעם התיקו מעגל כלפי מעלה.",
      "recap": "בתיקו לא תמיד למעלה ולא תמיד למטה: לזוגי.",
      "questionHtml": "מהי המילה שמתקבלת מעיגול של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>3</mn><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>24</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">1+3\\cdot 2^{-24}</annotation></semantics></math></span>?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>3</mn><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>24</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">1+3\\cdot 2^{-24}</annotation></semantics></math></span> הוא באמצע בין <code class=\"tok\" dir=\"ltr\">0x3F800001</code> (ביט אחרון 1) ל-<code class=\"tok\" dir=\"ltr\">0x3F800002</code> (ביט אחרון 0). תיקו, ובוחרים את הזוגי: <code class=\"tok\" dir=\"ltr\">0x3F800002</code>. שימו לב שהפעם התיקו מעגל כלפי מעלה.",
      "recapHtml": "בתיקו לא תמיד למעלה ולא תמיד למטה: לזוגי."
     },
     {
      "id": "C05-Q6",
      "question": "מהי המילה של $\\frac1{12}$?",
      "options": [
       {
        "id": "a",
        "value": "`0x3DAAAAAA`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3DAAAAAA</code>"
       },
       {
        "id": "b",
        "value": "`0x3DAAAAAB`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3DAAAAAB</code>"
       },
       {
        "id": "c",
        "value": "`0x3E2AAAAB`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3E2AAAAB</code>"
       },
       {
        "id": "d",
        "value": "`0x3EAAAAAB`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x3EAAAAAB</code>"
       }
      ],
      "correctId": "b",
      "explanation": "$\\frac1{12}=\\frac13\\cdot 2^{-2}$, אותו שבר של $\\frac13$ עם $E=123$: `0x3DAAAAAB`. `0x3E2AAAAB` הוא $\\frac16$, ו-`0x3EAAAAAB` הוא $\\frac13$ עצמו. `0x3DAAAAAA` שוכח את העיגול.",
      "recap": "כפל ב-$2^{k}$ משנה רק את $E$.",
      "questionHtml": "מהי המילה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>12</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac1{12}</annotation></semantics></math></span>?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>12</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>2</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">\\frac1{12}=\\frac13\\cdot 2^{-2}</annotation></semantics></math></span>, אותו שבר של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac13</annotation></semantics></math></span> עם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>123</mn></mrow><annotation encoding=\"application/x-tex\">E=123</annotation></semantics></math></span>: <code class=\"tok\" dir=\"ltr\">0x3DAAAAAB</code>. <code class=\"tok\" dir=\"ltr\">0x3E2AAAAB</code> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>6</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac16</annotation></semantics></math></span>, ו-<code class=\"tok\" dir=\"ltr\">0x3EAAAAAB</code> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac13</annotation></semantics></math></span> עצמו. <code class=\"tok\" dir=\"ltr\">0x3DAAAAAA</code> שוכח את העיגול.",
      "recapHtml": "כפל ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^{k}</annotation></semantics></math></span> משנה רק את <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span>.</span>"
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "📏",
    "title": "מרווחים, יחסים וספירה",
    "goal": "לחשב את המרחק בין מספרים סמוכים, את היחס בתוך אקספוננט אחד, ולספור קבוצות של מספרים במרחק קבוע.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n    <p>נקבע אקספוננט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span> (מספר נורמלי, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mi>E</mi><mo>−</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">e=E-127</annotation></semantics></math></span>). המספרים עם אקספוננט זה הם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>e</mi></msup><mo>⋅</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mi>F</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">2^e\\cdot(1+F)</annotation></semantics></math></span> כש-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span> עובר על <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{23}</annotation></semantics></math></span> ערכים, מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span> ועד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">1-2^{-23}</annotation></semantics></math></span> בקפיצות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-23}</annotation></semantics></math></span>. מכאן:</p>\n    <div class=\"lesson-rule\">🔑 <b>המרווח בין שני מספרים סמוכים</b> עם אקספוננט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">e</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>e</mi></msup><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup><mo>=</mo><msup><mn>2</mn><mrow><mi>e</mi><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{e}\\cdot 2^{-23}=2^{e-23}</annotation></semantics></math></span>. כל פעם שהאקספוננט עולה ב-1 המרווח מוכפל ב-2.</div>\n    <ul>\n    <li><b>המספר הקטן ביותר</b> באקספוננט: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>e</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^e</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">F=0</annotation></semantics></math></span>). <b>הגדול ביותר</b>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>e</mi></msup><mo stretchy=\"false\">(</mo><mn>2</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">2^e(2-2^{-23})</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span> כולו 1). <b>היחס</b> ביניהם: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2-2^{-23}</annotation></semantics></math></span>, בלי תלות ב-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">e</annotation></semantics></math></span>.</span></li>\n    <li>באקספוננט אחד יש <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{23}</annotation></semantics></math></span> מספרים חיוביים. אם מוסיפים את המספר הבא, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>e</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{e+1}</annotation></semantics></math></span>, מקבלים <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{23}+1</annotation></semantics></math></span> מספרים רצופים, והמרווח ביניהם קבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>e</mi><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{e-23}</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{23}</annotation></semantics></math></span> מרווחים).</li>\n    <li>לכל סימן יש קבוצה משלה, ולכן המספר הכולל של קבוצות עם מרווח נתון הוא <b>שתי קבוצות</b> (חיובית ושלילית).</li></ul>\n    <div class=\"lesson-ex\">דוגמה: בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{24}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>25</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{25}</annotation></semantics></math></span> (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mn>24</mn></mrow><annotation encoding=\"application/x-tex\">e=24</annotation></semantics></math></span>) המרווח הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>24</mn><mo>−</mo><mn>23</mn></mrow></msup><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2^{24-23}=2</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{24}+1</annotation></semantics></math></span> כבר אינו מיוצג: הוא באמצע בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{24}</annotation></semantics></math></span> ל-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup><mo>+</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2^{24}+2</annotation></semantics></math></span>.</span></div>\n    <div class=\"lesson-trap\">⚠️ היחס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2-2^{-23}</annotation></semantics></math></span> נכון רק לאקספוננט נורמלי. בדנורמלים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">E=0</annotation></semantics></math></span>) ההגדרה שונה, כי אין 1 סמוי.</div>"
    },
    "questions": [
     {
      "id": "C06-Q1",
      "question": "מהו המרווח בין שני מספרים סמוכים בתחום $[1,2)$ (כלומר $e=0$)?",
      "options": [
       {
        "id": "a",
        "value": "$2^{-24}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>24</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-24}</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$2^{-23}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-23}</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$2^{-22}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>22</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-22}</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$2^{-127}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>127</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-127}</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "המרווח הוא $2^{e-23}=2^{-23}$, כי הביט האחרון של $F$ שווה $2^{-23}$ והמנטיסה היא $1.F$. $2^{-127}$ הוא ערך ההטיה, לא מרווח.",
      "recap": "מרווח $=2^{e-23}$.",
      "questionHtml": "מהו המרווח בין שני מספרים סמוכים בתחום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">[</mo><mn>1</mn><mo separator=\"true\">,</mo><mn>2</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">[1,2)</annotation></semantics></math></span> (כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">e=0</annotation></semantics></math></span>)?",
      "explanationHtml": "המרווח הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>e</mi><mo>−</mo><mn>23</mn></mrow></msup><mo>=</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{e-23}=2^{-23}</annotation></semantics></math></span>, כי הביט האחרון של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">F</annotation></semantics></math></span> שווה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-23}</annotation></semantics></math></span> והמנטיסה היא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.</mn><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">1.F</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>127</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-127}</annotation></semantics></math></span> הוא ערך ההטיה, לא מרווח.",
      "recapHtml": "מרווח <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>=</mo><msup><mn>2</mn><mrow><mi>e</mi><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">=2^{e-23}</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C06-Q2",
      "question": "מה ההפרש בין שני המספרים הסופיים החיוביים הגדולים ביותר (מתחת ל-$\\infty$)?",
      "options": [
       {
        "id": "a",
        "value": "$2^{104}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>104</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{104}</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$2^{127}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>127</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{127}</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$2^{-23}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-23}</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$2^{150}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>150</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{150}</annotation></semantics></math></span>"
       }
      ],
      "correctId": "a",
      "explanation": "שני הגדולים הם באקספוננט $E=254$, כלומר $e=127$, והמרווח שם $2^{127-23}=2^{104}$. $2^{127}$ הוא המרווח כפול $2^{23}$, כלומר גודל כל האקספוננט.",
      "recap": "מרווח באקספוננט הגדול: $2^{127-23}$.",
      "questionHtml": "מה ההפרש בין שני המספרים הסופיים החיוביים הגדולים ביותר (מתחת ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∞</mi></mrow><annotation encoding=\"application/x-tex\">\\infty</annotation></semantics></math></span>)?",
      "explanationHtml": "שני הגדולים הם באקספוננט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>254</mn></mrow><annotation encoding=\"application/x-tex\">E=254</annotation></semantics></math></span>, כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">e=127</annotation></semantics></math></span>, והמרווח שם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>127</mn><mo>−</mo><mn>23</mn></mrow></msup><mo>=</mo><msup><mn>2</mn><mn>104</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{127-23}=2^{104}</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>127</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{127}</annotation></semantics></math></span> הוא המרווח כפול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{23}</annotation></semantics></math></span>, כלומר גודל כל האקספוננט.",
      "recapHtml": "מרווח באקספוננט הגדול: <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>127</mn><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{127-23}</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C06-Q3",
      "question": "מהו השלם החיובי הקטן ביותר שאינו ניתן לייצוג מדויק ב-Single Precision?",
      "options": [
       {
        "id": "a",
        "value": "$2^{23}+1=8388609$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>8388609</mn></mrow><annotation encoding=\"application/x-tex\">2^{23}+1=8388609</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$2^{24}=16777216$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup><mo>=</mo><mn>16777216</mn></mrow><annotation encoding=\"application/x-tex\">2^{24}=16777216</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$2^{24}+1=16777217$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>16777217</mn></mrow><annotation encoding=\"application/x-tex\">2^{24}+1=16777217</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$2^{32}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>32</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{32}</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "עד $2^{24}$ המרווח הוא 1 או פחות, ולכן כל שלם מיוצג. בתחום $[2^{24},2^{25})$ המרווח הוא 2, ו-$2^{24}+1$ לא נמצא. $2^{24}$ עצמו מיוצג בדיוק.",
      "recap": "כל שלם עד $2^{24}$ מיוצג.",
      "questionHtml": "מהו השלם החיובי הקטן ביותר שאינו ניתן לייצוג מדויק ב-Single Precision?",
      "explanationHtml": "עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{24}</annotation></semantics></math></span> המרווח הוא 1 או פחות, ולכן כל שלם מיוצג. בתחום <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">[</mo><msup><mn>2</mn><mn>24</mn></msup><mo separator=\"true\">,</mo><msup><mn>2</mn><mn>25</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">[2^{24},2^{25})</annotation></semantics></math></span> המרווח הוא 2, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{24}+1</annotation></semantics></math></span> לא נמצא. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{24}</annotation></semantics></math></span> עצמו מיוצג בדיוק.",
      "recapHtml": "כל שלם עד <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{24}</annotation></semantics></math></span> מיוצג."
     },
     {
      "id": "C06-Q4",
      "question": "מהו היחס בין המספר החיובי הגדול ביותר לקטן ביותר שיש להם אותו אקספוננט נורמלי?",
      "options": [
       {
        "id": "a",
        "value": "$2$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$1-2^{-23}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">1-2^{-23}</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$2-2^{-23}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2-2^{-23}</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "תלוי בערך האקספוננט",
        "type": "text",
        "html": "תלוי בערך האקספוננט"
       }
      ],
      "correctId": "c",
      "explanation": "הקטן $2^e$, הגדול $2^e(2-2^{-23})$. היחס $2-2^{-23}$, בלתי תלוי ב-$e$. היחס 2 הוא בין $2^{e+1}$ ל-$2^e$ (אקספוננטים שונים).",
      "recap": "היחס באקספוננט אחד: $2-2^{-23}$.",
      "questionHtml": "מהו היחס בין המספר החיובי הגדול ביותר לקטן ביותר שיש להם אותו אקספוננט נורמלי?",
      "explanationHtml": "הקטן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>e</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^e</annotation></semantics></math></span>, הגדול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>e</mi></msup><mo stretchy=\"false\">(</mo><mn>2</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">2^e(2-2^{-23})</annotation></semantics></math></span>. היחס <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2-2^{-23}</annotation></semantics></math></span>, בלתי תלוי ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">e</annotation></semantics></math></span>. היחס 2 הוא בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>e</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{e+1}</annotation></semantics></math></span> ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>e</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^e</annotation></semantics></math></span> (אקספוננטים שונים).",
      "recapHtml": "היחס באקספוננט אחד: <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2-2^{-23}</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C06-Q5",
      "question": "אילו שדות אקספוננט $E$ נותנים מרווח $2^{-100}$ בין מספרים סמוכים?",
      "options": [
       {
        "id": "a",
        "value": "$E=27$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>27</mn></mrow><annotation encoding=\"application/x-tex\">E=27</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$E=50$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>50</mn></mrow><annotation encoding=\"application/x-tex\">E=50</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$E=77$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>77</mn></mrow><annotation encoding=\"application/x-tex\">E=77</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$E=100$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">E=100</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "$2^{e-23}=2^{-100}$ נותן $e=-77$, ולכן $E=e+127=50$. $E=77$ מתקבל אם שוכחים את הסימן של $e$, ו-$E=27$ אם מחשבים $E=127-100$.",
      "recap": "$e-23=$ החזקה של המרווח, ואז $E=e+127$.",
      "questionHtml": "אילו שדות אקספוננט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi></mrow><annotation encoding=\"application/x-tex\">E</annotation></semantics></math></span> נותנים מרווח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>100</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-100}</annotation></semantics></math></span> בין מספרים סמוכים?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>e</mi><mo>−</mo><mn>23</mn></mrow></msup><mo>=</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>100</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{e-23}=2^{-100}</annotation></semantics></math></span> נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mo>−</mo><mn>77</mn></mrow><annotation encoding=\"application/x-tex\">e=-77</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mi>e</mi><mo>+</mo><mn>127</mn><mo>=</mo><mn>50</mn></mrow><annotation encoding=\"application/x-tex\">E=e+127=50</annotation></semantics></math></span>. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>77</mn></mrow><annotation encoding=\"application/x-tex\">E=77</annotation></semantics></math></span> מתקבל אם שוכחים את הסימן של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">e</annotation></semantics></math></span>, ו-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>27</mn></mrow><annotation encoding=\"application/x-tex\">E=27</annotation></semantics></math></span> אם מחשבים <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>127</mn><mo>−</mo><mn>100</mn></mrow><annotation encoding=\"application/x-tex\">E=127-100</annotation></semantics></math></span>.</span>",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>−</mo><mn>23</mn><mo>=</mo></mrow><annotation encoding=\"application/x-tex\">e-23=</annotation></semantics></math></span> החזקה של המרווח, ואז <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mi>e</mi><mo>+</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">E=e+127</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C06-Q6",
      "question": "כמה קבוצות של מספרים רצופים שהמרחק ביניהם $2^{-100}$ קיימות, וכמה מספרים בכל קבוצה?",
      "options": [
       {
        "id": "a",
        "value": "קבוצה אחת של $2^{23}+1$ מספרים",
        "type": "text",
        "html": "קבוצה אחת של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{23}+1</annotation></semantics></math></span> מספרים"
       },
       {
        "id": "b",
        "value": "שתי קבוצות של $2^{23}+1$ מספרים",
        "type": "text",
        "html": "שתי קבוצות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{23}+1</annotation></semantics></math></span> מספרים"
       },
       {
        "id": "c",
        "value": "שתי קבוצות של $2^{24}+1$ מספרים",
        "type": "text",
        "html": "שתי קבוצות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{24}+1</annotation></semantics></math></span> מספרים"
       },
       {
        "id": "d",
        "value": "ארבע קבוצות של $2^{23}+1$ מספרים",
        "type": "text",
        "html": "ארבע קבוצות של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{23}+1</annotation></semantics></math></span> מספרים"
       }
      ],
      "correctId": "b",
      "explanation": "המרווח $2^{-100}$ מתקבל רק עבור $E=50$. בקבוצה $2^{23}$ מספרים פלוס המספר $2^{e+1}$ שמסיים אותה: $2^{23}+1$. הקבוצה קיימת גם במספרים החיוביים וגם בשליליים, ולכן שתיים.",
      "recap": "אקספוננט אחד: $2^{23}+1$ מספרים, וקבוצה לכל סימן.",
      "questionHtml": "כמה קבוצות של מספרים רצופים שהמרחק ביניהם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>100</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-100}</annotation></semantics></math></span> קיימות, וכמה מספרים בכל קבוצה?",
      "explanationHtml": "המרווח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>100</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-100}</annotation></semantics></math></span> מתקבל רק עבור <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>50</mn></mrow><annotation encoding=\"application/x-tex\">E=50</annotation></semantics></math></span>. בקבוצה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{23}</annotation></semantics></math></span> מספרים פלוס המספר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>e</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{e+1}</annotation></semantics></math></span> שמסיים אותה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{23}+1</annotation></semantics></math></span>. הקבוצה קיימת גם במספרים החיוביים וגם בשליליים, ולכן שתיים.",
      "recapHtml": "אקספוננט אחד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{23}+1</annotation></semantics></math></span> מספרים, וקבוצה לכל סימן."
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "➕",
    "title": "חיבור, שגיאת עיגול ודנורמלים",
    "goal": "לדעת מתי חיבור נקודה צפה מדויק, מתי הוא מעוגל, ומתי התוצאה אינסוף, אפס או לא מנורמלת.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "\n    <p>חיבור מתבצע כך: מיישרים את האקספוננטים, מחברים את המנטיסות, מנרמלים, ו<b>מעגלים</b> ל-23 ביטי שבר (עיגול לקרוב, תיקו לזוגי, כמו בשלב 5). התוצאה היא המספר הקרוב ביותר לסכום המדויק שניתן לייצוג. ההפרש ביניהם הוא <b>שגיאת העיגול</b>.</p>\n    <ul>\n    <li><b>סכום מדויק:</b> אם הסכום המדויק עצמו מיוצג, אין שגיאה. למשל חיסור של שני מספרים קרובים מאוד לרוב מדויק.</li>\n    <li><b>הקטן \"נבלע\":</b> אם הסכום המדויק נופל בין שני מספרים מיוצגים, הוא מעוגל. מעל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{24}</annotation></semantics></math></span> המרווח כבר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>≥</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">\\ge 2</annotation></semantics></math></span> ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{24}+1</annotation></semantics></math></span> מעוגל.</li>\n    <li><b>אינסוף:</b> אם הסכום גדול מהגדול שניתן לייצוג, מתקבל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∞</mi></mrow><annotation encoding=\"application/x-tex\">\\infty</annotation></semantics></math></span> (גלישה).</li>\n    <li><b>אפס:</b> <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x+(-x)=0</annotation></semantics></math></span>.</span></li>\n    <li><b>דנורמלי:</b> חיסור של שני נורמלים קרובים יכול להיפול מתחת ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}</annotation></semantics></math></span>, והתוצאה דנורמלית (ומדויקת).</li>\n    <li><b>נורמלי מדנורמלים:</b> חיבור שני דנורמלים יכול לעבור את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}</annotation></semantics></math></span> ולתת נורמלי.</li></ul>\n    <div class=\"lesson-ex\">דוגמה: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{24}+1</annotation></semantics></math></span>. הסכום המדויק באמצע בין <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{24}</annotation></semantics></math></span> (ביט אחרון 0) ל-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup><mo>+</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">2^{24}+2</annotation></semantics></math></span> (ביט אחרון 1). תיקו, לזוגי: התוצאה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{24}</annotation></semantics></math></span>. השגיאה <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>−</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">-1</annotation></semantics></math></span>.</span></div>\n    <div class=\"lesson-trap\">⚠️ חיבור נקודה צפה <b>אינו קיבוצי</b>: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\">)</mo><mo>+</mo><mi>c</mi></mrow><annotation encoding=\"application/x-tex\">(a+b)+c</annotation></semantics></math></span> יכול להיות שונה מ-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>a</mi><mo>+</mo><mo stretchy=\"false\">(</mo><mi>b</mi><mo>+</mo><mi>c</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">a+(b+c)</annotation></semantics></math></span> כי העיגול מתבצע אחרי כל פעולה.</div>"
    },
    "questions": [
     {
      "id": "C07-Q1",
      "question": "מה התוצאה של $16777216+1$ בחיבור Single Precision (כלומר $2^{24}+1$)?",
      "options": [
       {
        "id": "a",
        "value": "$16777217$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16777217</mn></mrow><annotation encoding=\"application/x-tex\">16777217</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$16777216$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16777216</mn></mrow><annotation encoding=\"application/x-tex\">16777216</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$16777218$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16777218</mn></mrow><annotation encoding=\"application/x-tex\">16777218</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$\\infty$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi mathvariant=\"normal\">∞</mi></mrow><annotation encoding=\"application/x-tex\">\\infty</annotation></semantics></math></span>"
       }
      ],
      "correctId": "b",
      "explanation": "המרווח ב-$[2^{24},2^{25})$ הוא 2. הסכום המדויק 16777217 הוא תיקו בין 16777216 (ביט אחרון 0) ל-16777218 (ביט אחרון 1), ולכן התוצאה 16777216. ה-1 'נבלע'.",
      "recap": "מעל $2^{24}$ המרווח 2 ומעלה והקטן נבלע.",
      "questionHtml": "מה התוצאה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16777216</mn><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">16777216+1</annotation></semantics></math></span> בחיבור Single Precision (כלומר <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{24}+1</annotation></semantics></math></span>)?",
      "explanationHtml": "המרווח ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">[</mo><msup><mn>2</mn><mn>24</mn></msup><mo separator=\"true\">,</mo><msup><mn>2</mn><mn>25</mn></msup><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">[2^{24},2^{25})</annotation></semantics></math></span> הוא 2. הסכום המדויק 16777217 הוא תיקו בין 16777216 (ביט אחרון 0) ל-16777218 (ביט אחרון 1), ולכן התוצאה 16777216. ה-1 'נבלע'.",
      "recapHtml": "מעל <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>24</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{24}</annotation></semantics></math></span> המרווח 2 ומעלה והקטן נבלע."
     },
     {
      "id": "C07-Q2",
      "question": "מה התוצאה של $16777216+3$ בחיבור Single Precision?",
      "options": [
       {
        "id": "a",
        "value": "$16777219$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16777219</mn></mrow><annotation encoding=\"application/x-tex\">16777219</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "$16777218$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16777218</mn></mrow><annotation encoding=\"application/x-tex\">16777218</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$16777220$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16777220</mn></mrow><annotation encoding=\"application/x-tex\">16777220</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$16777216$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16777216</mn></mrow><annotation encoding=\"application/x-tex\">16777216</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "הסכום המדויק 16777219 באמצע בין 16777218 (ביט אחרון 1) ל-16777220 (ביט אחרון 0). תיקו לזוגי: 16777220. הפעם התוצאה גדולה מהסכום המדויק.",
      "recap": "תיקו: לשכן שהביט האחרון שלו 0, גם כלפי מעלה.",
      "questionHtml": "מה התוצאה של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16777216</mn><mo>+</mo><mn>3</mn></mrow><annotation encoding=\"application/x-tex\">16777216+3</annotation></semantics></math></span> בחיבור Single Precision?",
      "explanationHtml": "הסכום המדויק 16777219 באמצע בין 16777218 (ביט אחרון 1) ל-16777220 (ביט אחרון 0). תיקו לזוגי: 16777220. הפעם התוצאה גדולה מהסכום המדויק.",
      "recapHtml": "תיקו: לשכן שהביט האחרון שלו 0, גם כלפי מעלה."
     },
     {
      "id": "C07-Q3",
      "question": "חיברנו שני מספרים מנורמלים. איזו טענה נכונה?",
      "options": [
       {
        "id": "a",
        "value": "התוצאה תמיד מנורמלת",
        "type": "text",
        "html": "התוצאה תמיד מנורמלת"
       },
       {
        "id": "b",
        "value": "אם אחד שלילי והשני חיובי, התוצאה יכולה להיות לא מנורמלת",
        "type": "text",
        "html": "אם אחד שלילי והשני חיובי, התוצאה יכולה להיות לא מנורמלת"
       },
       {
        "id": "c",
        "value": "התוצאה לעולם אינה אינסוף",
        "type": "text",
        "html": "התוצאה לעולם אינה אינסוף"
       },
       {
        "id": "d",
        "value": "התוצאה לעולם אינה 0",
        "type": "text",
        "html": "התוצאה לעולם אינה 0"
       }
      ],
      "correctId": "b",
      "explanation": "$1.5\\cdot 2^{-126}+(-2^{-126})=2^{-127}$, שהוא דנורמלי. (א) שקרית מאותה דוגמה. (ג) שקרית: הגדול ביותר ועוד עצמו גולש לאינסוף. (ד) שקרית: $x+(-x)=0$.",
      "recap": "חיסור יכול לרדת מתחת ל-$2^{-126}$.",
      "questionHtml": "חיברנו שני מספרים מנורמלים. איזו טענה נכונה?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.5</mn><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup><mo stretchy=\"false\">)</mo><mo>=</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>127</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">1.5\\cdot 2^{-126}+(-2^{-126})=2^{-127}</annotation></semantics></math></span>, שהוא דנורמלי. (א) שקרית מאותה דוגמה. (ג) שקרית: הגדול ביותר ועוד עצמו גולש לאינסוף. (ד) שקרית: <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>x</mi><mo>+</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mi>x</mi><mo stretchy=\"false\">)</mo><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">x+(-x)=0</annotation></semantics></math></span>.</span>",
      "recapHtml": "חיסור יכול לרדת מתחת ל-<span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C07-Q4",
      "question": "מהמספר המנורמל החיובי הקטן ביותר מחסירים את המספר החיובי הלא מנורמל הגדול ביותר. מה התוצאה?",
      "options": [
       {
        "id": "a",
        "value": "$2^{-149}$, מדויקת, והיא המספר החיובי הקטן ביותר",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>149</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-149}</annotation></semantics></math></span>, מדויקת, והיא המספר החיובי הקטן ביותר"
       },
       {
        "id": "b",
        "value": "$0$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">0</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "$2^{-126}$",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "$2^{-149}$ אבל עם שגיאת עיגול",
        "type": "text",
        "html": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>149</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-149}</annotation></semantics></math></span> אבל עם שגיאת עיגול"
       }
      ],
      "correctId": "a",
      "explanation": "$2^{-126}-(1-2^{-23})\\cdot 2^{-126}=2^{-23}\\cdot 2^{-126}=2^{-149}$. זה מספר מיוצג (`0x00000001`), לכן אין שגיאה, והוא הדנורמלי החיובי הקטן ביותר. 0 היה מתקבל רק אם המספרים שווים.",
      "recap": "ההפרש בין שכנים בדנורמלים הוא $2^{-149}$.",
      "questionHtml": "מהמספר המנורמל החיובי הקטן ביותר מחסירים את המספר החיובי הלא מנורמל הגדול ביותר. מה התוצאה?",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup><mo>−</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup><mo stretchy=\"false\">)</mo><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup><mo>=</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup><mo>=</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>149</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}-(1-2^{-23})\\cdot 2^{-126}=2^{-23}\\cdot 2^{-126}=2^{-149}</annotation></semantics></math></span>. זה מספר מיוצג (<code class=\"tok\" dir=\"ltr\">0x00000001</code>), לכן אין שגיאה, והוא הדנורמלי החיובי הקטן ביותר. 0 היה מתקבל רק אם המספרים שווים.",
      "recapHtml": "ההפרש בין שכנים בדנורמלים הוא <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>149</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-149}</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C07-Q5",
      "question": "נחשב ב-Single Precision את $(16777216+1)+1$ ואת $16777216+(1+1)$. מה מתקבל?",
      "options": [
       {
        "id": "a",
        "value": "שניהם 16777218",
        "type": "text",
        "html": "שניהם 16777218"
       },
       {
        "id": "b",
        "value": "הראשון 16777216, השני 16777218",
        "type": "text",
        "html": "הראשון 16777216, השני 16777218"
       },
       {
        "id": "c",
        "value": "הראשון 16777218, השני 16777216",
        "type": "text",
        "html": "הראשון 16777218, השני 16777216"
       },
       {
        "id": "d",
        "value": "שניהם 16777216",
        "type": "text",
        "html": "שניהם 16777216"
       }
      ],
      "correctId": "b",
      "explanation": "בצד שמאל: $16777216+1$ מעוגל ל-16777216 ואז $+1$ שוב ל-16777216. בצד ימין: $1+1=2$ ואז $16777216+2=16777218$, מדויק. החיבור אינו קיבוצי.",
      "recap": "חיבור נקודה צפה אינו קיבוצי.",
      "questionHtml": "נחשב ב-Single Precision את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo stretchy=\"false\">(</mo><mn>16777216</mn><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">(16777216+1)+1</annotation></semantics></math></span> ואת <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16777216</mn><mo>+</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">16777216+(1+1)</annotation></semantics></math></span>. מה מתקבל?",
      "explanationHtml": "בצד שמאל: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16777216</mn><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">16777216+1</annotation></semantics></math></span> מעוגל ל-16777216 ואז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">+1</annotation></semantics></math></span> שוב ל-16777216. בצד ימין: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>2</mn></mrow><annotation encoding=\"application/x-tex\">1+1=2</annotation></semantics></math></span> ואז <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>16777216</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>16777218</mn></mrow><annotation encoding=\"application/x-tex\">16777216+2=16777218</annotation></semantics></math></span>, מדויק. החיבור אינו קיבוצי.",
      "recapHtml": "חיבור נקודה צפה אינו קיבוצי."
     },
     {
      "id": "C07-Q6",
      "question": "מחברים שני מספרים חיוביים לא מנורמלים ($E=0$ בשניהם). מה נכון?",
      "options": [
       {
        "id": "a",
        "value": "התוצאה לעולם אינה מנורמלת",
        "type": "text",
        "html": "התוצאה לעולם אינה מנורמלת"
       },
       {
        "id": "b",
        "value": "התוצאה יכולה להיות מנורמלת",
        "type": "text",
        "html": "התוצאה יכולה להיות מנורמלת"
       },
       {
        "id": "c",
        "value": "התוצאה תמיד 0",
        "type": "text",
        "html": "התוצאה תמיד 0"
       },
       {
        "id": "d",
        "value": "התוצאה תמיד אינסוף",
        "type": "text",
        "html": "התוצאה תמיד אינסוף"
       }
      ],
      "correctId": "b",
      "explanation": "דנורמלי גדול ביותר ועוד עצמו נותן $2\\cdot(1-2^{-23})\\cdot 2^{-126}\\ge 2^{-126}$, כלומר נורמלי (ומדויק). אפס מתקבל רק מאפסים, ואינסוף רחוק מכך.",
      "recap": "שני דנורמלים יכולים לתת נורמלי.",
      "questionHtml": "מחברים שני מספרים חיוביים לא מנורמלים (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">E=0</annotation></semantics></math></span> בשניהם). מה נכון?",
      "explanationHtml": "דנורמלי גדול ביותר ועוד עצמו נותן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>⋅</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup><mo stretchy=\"false\">)</mo><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup><mo>≥</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2\\cdot(1-2^{-23})\\cdot 2^{-126}\\ge 2^{-126}</annotation></semantics></math></span>, כלומר נורמלי (ומדויק). אפס מתקבל רק מאפסים, ואינסוף רחוק מכך.",
      "recapHtml": "שני דנורמלים יכולים לתת נורמלי."
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "🏆",
    "title": "בוס: שאלות מבחן אמיתיות",
    "goal": "לפתור שאלות נקודה צפה כפי שהן מופיעות במבחן: קידוד, פענוח, מרווחים, יחסים וחיבור.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "\n    <p>זה השלב האחרון: שש שאלות אמיתיות. כל הכלים כבר אצלכם. סיכום קצר לפני שמתחילים:</p>\n    <div class=\"lesson-rule\">🔑 <b>קידוד:</b> סימן, ערך מוחלט בבינארי, נירמול <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.</mn><mi>F</mi><mo>⋅</mo><msup><mn>2</mn><mi>e</mi></msup></mrow><annotation encoding=\"application/x-tex\">1.F\\cdot 2^e</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mi>e</mi><mo>+</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">E=e+127</annotation></semantics></math></span>, עיגול. אם יש גורם <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^k</annotation></semantics></math></span> מוציאים אותו כדי שישאר שבר פשוט כמו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac13</annotation></semantics></math></span>. כשהאפשרויות נבדלות בספרה האחרונה, בדקו את הביטים החתוכים.</div>\n    <div class=\"lesson-rule\">🔑 <b>פענוח:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>X</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\">)</mo><mi>S</mi></msup><mo>⋅</mo><msup><mn>2</mn><mrow><mi>E</mi><mo>−</mo><mn>127</mn></mrow></msup><mo>⋅</mo><mn>1.</mn><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">X=(-1)^S\\cdot 2^{E-127}\\cdot 1.F</annotation></semantics></math></span>. את <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.</mn><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">1.F</annotation></semantics></math></span> מחשבים כסכום חזקות 2 (<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo separator=\"true\">,</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo separator=\"true\">,</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mo separator=\"true\">,</mo><mo>…</mo></mrow><annotation encoding=\"application/x-tex\">\\frac12,\\frac14,\\frac18,\\ldots</annotation></semantics></math></span>) ואז מכפילים בחזקה.</div>\n    <div class=\"lesson-rule\">🔑 <b>מרווחים וספירה:</b> מרווח באקספוננט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi></mrow><annotation encoding=\"application/x-tex\">e</annotation></semantics></math></span> הוא <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mi>e</mi><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{e-23}</annotation></semantics></math></span>. קבוצה של מרווח קבוע: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{23}+1</annotation></semantics></math></span> מספרים, לכל סימן קבוצה משלה. יחס גדול-קטן באקספוננט אחד: <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2-2^{-23}</annotation></semantics></math></span>.</span></div>\n    <div class=\"lesson-rule\">🔑 <b>דנורמלים:</b> <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding=\"application/x-tex\">E=0</annotation></semantics></math></span>, בלי 1 סמוי, מרווח קבוע <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>149</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-149}</annotation></semantics></math></span>. הגדול שבהם קטן ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>149</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-149}</annotation></semantics></math></span> מהנורמלי הקטן ביותר.</div>\n    <div class=\"lesson-trap\">⚠️ בשאלות \"מה נכון\" בדקו כל אפשרות מול דוגמה קונקרטית. בשאלות מספריות הכינו את הערך לפני שאתם מסתכלים על האפשרויות, כי המסיחים בנויים מטעויות נפוצות.</div>"
    },
    "questions": [
     {
      "bankId": "25B-A-Q3",
      "recap": "$\\frac1{384}=\\frac13\\cdot 2^{-7}=1.0101\\ldots_2\\cdot 2^{-9}$, ולכן $E=118$, השבר של $\\frac13$ מעוגל למעלה, והסימן שלילי.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>384</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>7</mn></mrow></msup><mo>=</mo><mn>1.0101</mn><msub><mo>…</mo><mn>2</mn></msub><mo>⋅</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>9</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">\\frac1{384}=\\frac13\\cdot 2^{-7}=1.0101\\ldots_2\\cdot 2^{-9}</annotation></semantics></math></span>, ולכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>118</mn></mrow><annotation encoding=\"application/x-tex\">E=118</annotation></semantics></math></span>, השבר של <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">\\frac13</annotation></semantics></math></span> מעוגל למעלה, והסימן שלילי."
     },
     {
      "bankId": "22B-B-Q3",
      "recap": "פענוח: $E=132$, $e=5$, מנטיסה $1.F$ כסכום חזקות 2, כפול $2^5$.",
      "recapHtml": "פענוח: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>132</mn></mrow><annotation encoding=\"application/x-tex\">E=132</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mn>5</mn></mrow><annotation encoding=\"application/x-tex\">e=5</annotation></semantics></math></span>, מנטיסה <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>1.</mn><mi>F</mi></mrow><annotation encoding=\"application/x-tex\">1.F</annotation></semantics></math></span> כסכום חזקות 2, כפול <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>5</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^5</annotation></semantics></math></span>.</span>"
     },
     {
      "bankId": "24B-A-Q7",
      "recap": "מרווח $2^{-100}$ מתקבל ב-$E=50$ בלבד: $2^{23}+1$ מספרים, ושתי קבוצות (חיובית ושלילית).",
      "recapHtml": "מרווח <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>100</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-100}</annotation></semantics></math></span> מתקבל ב-<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>E</mi><mo>=</mo><mn>50</mn></mrow><annotation encoding=\"application/x-tex\">E=50</annotation></semantics></math></span> בלבד: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mn>23</mn></msup><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">2^{23}+1</annotation></semantics></math></span> מספרים, ושתי קבוצות (חיובית ושלילית)."
     },
     {
      "bankId": "25A-A-Q7",
      "recap": "היחס בין הגדול לקטן באקספוננט נורמלי: $2-2^{-23}$.",
      "recapHtml": "היחס בין הגדול לקטן באקספוננט נורמלי: <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2-2^{-23}</annotation></semantics></math></span>.</span>"
     },
     {
      "bankId": "23B-A-Q7",
      "recap": "$2^{-126}-(1-2^{-23})2^{-126}=2^{-149}$, מדויק ולא מנורמל.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup><mo>−</mo><mo stretchy=\"false\">(</mo><mn>1</mn><mo>−</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>23</mn></mrow></msup><mo stretchy=\"false\">)</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>126</mn></mrow></msup><mo>=</mo><msup><mn>2</mn><mrow><mo>−</mo><mn>149</mn></mrow></msup></mrow><annotation encoding=\"application/x-tex\">2^{-126}-(1-2^{-23})2^{-126}=2^{-149}</annotation></semantics></math></span>, מדויק ולא מנורמל."
     },
     {
      "bankId": "24S-A-Q3",
      "recap": "שני הסופיים הגדולים באקספוננט $e=127$: מרווח $2^{127-23}=2^{104}$.",
      "recapHtml": "שני הסופיים הגדולים באקספוננט <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>e</mi><mo>=</mo><mn>127</mn></mrow><annotation encoding=\"application/x-tex\">e=127</annotation></semantics></math></span>: מרווח <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mrow><mn>127</mn><mo>−</mo><mn>23</mn></mrow></msup><mo>=</mo><msup><mn>2</mn><mn>104</mn></msup></mrow><annotation encoding=\"application/x-tex\">2^{127-23}=2^{104}</annotation></semantics></math></span>.</span>"
     }
    ]
   }
  ]
 },
 "mips_enc": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🧩",
    "title": "שלושה פורמטים ושדות",
    "goal": "להכיר את שלושת הפורמטים, את רוחב השדות ואת מספרי האוגרים.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>כל פקודת MIPS היא <b>מילה אחת של 32 ביטים</b>. את המילה מחלקים לשדות, ויש שלושה פורמטים:</p>\n<table><thead><tr><th>פורמט</th><th>31..26</th><th>25..21</th><th>20..16</th><th>15..11</th><th>10..6</th><th>5..0</th></tr></thead><tbody>\n<tr><td>R</td><td>op = 0</td><td>rs</td><td>rt</td><td>rd</td><td>shamt</td><td>funct</td></tr>\n<tr><td>I</td><td>op</td><td>rs</td><td>rt</td><td colspan=\"3\">imm (16 ביט)</td></tr>\n<tr><td>J</td><td>op</td><td colspan=\"6\">target (26 ביט)</td></tr></tbody></table>\n<p>כל שדה של אוגר הוא <b>5 ביטים</b>, כי יש 32 אוגרים. שדה op הוא 6 ביטים, והוא תמיד הראשון משמאל.</p>\n<div class=\"lesson-rule\">🔑 פקודות חישוב בין אוגרים (<code>add, sub, and, or, xor, slt</code>) הן R. פקודות עם קבוע או זיכרון או הסתעפות (<code>addi, ori, lui, lw, sw, beq, bne</code>) הן I. הקפיצות (<code>j, jal</code>) הן J.</div>\n<h3>מספרי האוגרים</h3>\n<table><thead><tr><th>שמות</th><th>מספרים</th></tr></thead><tbody>\n<tr><td><code>&#36;zero</code></td><td>0</td></tr><tr><td><code>&#36;at</code></td><td>1</td></tr><tr><td><code>&#36;v0, &#36;v1</code></td><td>2, 3</td></tr>\n<tr><td><code>&#36;a0-&#36;a3</code></td><td>4-7</td></tr><tr><td><code>&#36;t0-&#36;t7</code></td><td>8-15</td></tr><tr><td><code>&#36;s0-&#36;s7</code></td><td>16-23</td></tr>\n<tr><td><code>&#36;t8, &#36;t9</code></td><td>24, 25</td></tr><tr><td><code>&#36;gp, &#36;sp, &#36;fp, &#36;ra</code></td><td>28, 29, 30, 31</td></tr></tbody></table>\n<div class=\"lesson-ex\">דוגמה: <code>&#36;t3</code> הוא 8 + 3 = 11, ובחמישה ביטים 01011. ו-<code>&#36;s2</code> הוא 16 + 2 = 18 = 10010.</div>\n<div class=\"lesson-trap\">⚠️ אוגר אפשר לכתוב גם במספר (<code>&#36;11</code> הוא <code>&#36;t3</code>). בקידוד תמיד עובדים עם המספר.</div>"
    },
    "questions": [
     {
      "id": "mips_enc-C01-Q1",
      "question": "כמה ביטים תופס שדה rs (או rt) בקידוד פקודה?",
      "options": [
       {
        "id": "a",
        "value": "4 ביטים",
        "type": "text",
        "html": "4 ביטים"
       },
       {
        "id": "b",
        "value": "5 ביטים",
        "type": "text",
        "html": "5 ביטים"
       },
       {
        "id": "c",
        "value": "6 ביטים",
        "type": "text",
        "html": "6 ביטים"
       },
       {
        "id": "d",
        "value": "16 ביטים",
        "type": "text",
        "html": "16 ביטים"
       }
      ],
      "correctId": "b",
      "explanation": "יש 32 אוגרים, ו-5 ביטים מספיקים לכתוב את המספרים 0 עד 31. המסיחים: 4 ביטים ← מספיקים רק ל-16 אוגרים. 6 ביטים ← זה גודל שדה ה-op וה-funct. 16 ביטים ← זה גודל ה-immediate.",
      "recap": "שדה אוגר = 5 ביטים",
      "questionHtml": "כמה ביטים תופס שדה rs (או rt) בקידוד פקודה?",
      "explanationHtml": "יש 32 אוגרים, ו-5 ביטים מספיקים לכתוב את המספרים 0 עד 31. המסיחים: 4 ביטים ← מספיקים רק ל-16 אוגרים. 6 ביטים ← זה גודל שדה ה-op וה-funct. 16 ביטים ← זה גודל ה-immediate.",
      "recapHtml": "שדה אוגר = 5 ביטים"
     },
     {
      "id": "mips_enc-C01-Q2",
      "question": "איזו מהפקודות הבאות היא פקודת R-type?",
      "options": [
       {
        "id": "a",
        "value": "`ori`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">ori</code>"
       },
       {
        "id": "b",
        "value": "`lw`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">lw</code>"
       },
       {
        "id": "c",
        "value": "`xor`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">xor</code>"
       },
       {
        "id": "d",
        "value": "`j`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">j</code>"
       }
      ],
      "correctId": "c",
      "explanation": "`xor` עובדת על שלושה אוגרים בלבד, ולכן היא R-type עם op=0. המסיחים: `ori` ← יש בה immediate של 16 ביט, לכן I. `lw` ← גישה לזיכרון עם offset של 16 ביט, לכן I. `j` ← יש בה שדה target של 26 ביט, לכן J.",
      "recap": "R: שלושה אוגרים, op=0",
      "questionHtml": "איזו מהפקודות הבאות היא פקודת R-type?",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">xor</code> עובדת על שלושה אוגרים בלבד, ולכן היא R-type עם op=0. המסיחים: <code class=\"tok\" dir=\"ltr\">ori</code> ← יש בה immediate של 16 ביט, לכן I. <code class=\"tok\" dir=\"ltr\">lw</code> ← גישה לזיכרון עם offset של 16 ביט, לכן I. <code class=\"tok\" dir=\"ltr\">j</code> ← יש בה שדה target של 26 ביט, לכן J.",
      "recapHtml": "R: שלושה אוגרים, op=0"
     },
     {
      "id": "mips_enc-C01-Q3",
      "question": "איזו מהפקודות הבאות היא פקודת I-type?",
      "options": [
       {
        "id": "a",
        "value": "`sw`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sw</code>"
       },
       {
        "id": "b",
        "value": "`slt`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">slt</code>"
       },
       {
        "id": "c",
        "value": "`sub`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sub</code>"
       },
       {
        "id": "d",
        "value": "`j`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">j</code>"
       }
      ],
      "correctId": "a",
      "explanation": "`sw` כוללת אוגר בסיס, אוגר לשמירה ו-offset של 16 ביט, ולכן I-type. המסיחים: `slt` ← עובדת על שלושה אוגרים, לכן R. `sub` ← עובדת על שלושה אוגרים, לכן R. `j` ← יש בה שדה target ללא אוגרים, לכן J.",
      "recap": "I: אוגר(ים) ו-imm של 16 ביט",
      "questionHtml": "איזו מהפקודות הבאות היא פקודת I-type?",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">sw</code> כוללת אוגר בסיס, אוגר לשמירה ו-offset של 16 ביט, ולכן I-type. המסיחים: <code class=\"tok\" dir=\"ltr\">slt</code> ← עובדת על שלושה אוגרים, לכן R. <code class=\"tok\" dir=\"ltr\">sub</code> ← עובדת על שלושה אוגרים, לכן R. <code class=\"tok\" dir=\"ltr\">j</code> ← יש בה שדה target ללא אוגרים, לכן J.",
      "recapHtml": "I: אוגר(ים) ו-imm של 16 ביט"
     },
     {
      "id": "mips_enc-C01-Q4",
      "question": "לאיזו פקודה יש שדה target של 26 ביט?",
      "options": [
       {
        "id": "a",
        "value": "`beq`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">beq</code>"
       },
       {
        "id": "b",
        "value": "`sub`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sub</code>"
       },
       {
        "id": "c",
        "value": "`lui`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">lui</code>"
       },
       {
        "id": "d",
        "value": "`j`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">j</code>"
       }
      ],
      "correctId": "d",
      "explanation": "רק פקודות J (`j` ו-`jal`) מקודדות כתובת של 26 ביט. המסיחים: `beq` ← משתמשת ב-imm של 16 ביט. `sub` ← פקודת R, בלי שדה כזה. `lui` ← משתמשת ב-imm של 16 ביט.",
      "recap": "J: op + target (26 ביט)",
      "questionHtml": "לאיזו פקודה יש שדה target של 26 ביט?",
      "explanationHtml": "רק פקודות J (<code class=\"tok\" dir=\"ltr\">j</code> ו-<code class=\"tok\" dir=\"ltr\">jal</code>) מקודדות כתובת של 26 ביט. המסיחים: <code class=\"tok\" dir=\"ltr\">beq</code> ← משתמשת ב-imm של 16 ביט. <code class=\"tok\" dir=\"ltr\">sub</code> ← פקודת R, בלי שדה כזה. <code class=\"tok\" dir=\"ltr\">lui</code> ← משתמשת ב-imm של 16 ביט.",
      "recapHtml": "J: op + target (26 ביט)"
     },
     {
      "id": "mips_enc-C01-Q5",
      "question": "מהו המספר של האוגר `\\$t2` בחמישה ביטים?",
      "options": [
       {
        "id": "a",
        "value": "`00010`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">00010</code>"
       },
       {
        "id": "b",
        "value": "`01010`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">01010</code>"
       },
       {
        "id": "c",
        "value": "`10010`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">10010</code>"
       },
       {
        "id": "d",
        "value": "`01100`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">01100</code>"
       }
      ],
      "correctId": "b",
      "explanation": "`\\$t0` הוא 8, ולכן `\\$t2` הוא 10, ובחמישה ביטים 01010. המסיחים: `00010` ← זה המספר של `\\$v0`, בלי להוסיף את ההיסט 8. `10010` ← זה המספר 18, כלומר `\\$s2`. `01100` ← זה המספר 12, כלומר `\\$t4`.",
      "recap": "t0 = 8, ואז מוסיפים את המספר",
      "questionHtml": "מהו המספר של האוגר <code class=\"tok\" dir=\"ltr\">$t2</code> בחמישה ביטים?",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">$t0</code> הוא 8, ולכן <code class=\"tok\" dir=\"ltr\">$t2</code> הוא 10, ובחמישה ביטים 01010. המסיחים: <code class=\"tok\" dir=\"ltr\">00010</code> ← זה המספר של <code class=\"tok\" dir=\"ltr\">$v0</code>, בלי להוסיף את ההיסט 8. <code class=\"tok\" dir=\"ltr\">10010</code> ← זה המספר 18, כלומר <code class=\"tok\" dir=\"ltr\">$s2</code>. <code class=\"tok\" dir=\"ltr\">01100</code> ← זה המספר 12, כלומר <code class=\"tok\" dir=\"ltr\">$t4</code>.",
      "recapHtml": "t0 = 8, ואז מוסיפים את המספר"
     },
     {
      "id": "mips_enc-C01-Q6",
      "question": "לאיזה אוגר יש מספר 22?",
      "options": [
       {
        "id": "a",
        "value": "`\\$t6`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">$t6</code>"
       },
       {
        "id": "b",
        "value": "`\\$s7`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">$s7</code>"
       },
       {
        "id": "c",
        "value": "`\\$s6`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">$s6</code>"
       },
       {
        "id": "d",
        "value": "`\\$t8`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">$t8</code>"
       }
      ],
      "correctId": "c",
      "explanation": "`\\$s0` הוא 16, ולכן 22 הוא `\\$s6`. המסיחים: `\\$t6` ← `\\$t6` הוא 14. `\\$s7` ← `\\$s7` הוא 23. `\\$t8` ← `\\$t8` הוא 24.",
      "recap": "s0 = 16, t0 = 8, a0 = 4",
      "questionHtml": "לאיזה אוגר יש מספר 22?",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">$s0</code> הוא 16, ולכן 22 הוא <code class=\"tok\" dir=\"ltr\">$s6</code>. המסיחים: <code class=\"tok\" dir=\"ltr\">$t6</code> ← <code class=\"tok\" dir=\"ltr\">$t6</code> הוא 14. <code class=\"tok\" dir=\"ltr\">$s7</code> ← <code class=\"tok\" dir=\"ltr\">$s7</code> הוא 23. <code class=\"tok\" dir=\"ltr\">$t8</code> ← <code class=\"tok\" dir=\"ltr\">$t8</code> הוא 24.",
      "recapHtml": "s0 = 16, t0 = 8, a0 = 4"
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "🔧",
    "title": "קידוד פקודות R",
    "goal": "לקודד פקודת add/sub/and/or/xor/slt להקסה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>כדי לקודד פקודת R: ממלאים ששת השדות ואז ממירים להקסה.</p>\n<ol style=\"text-align:right\"><li>op = 0.</li><li>שמות האוגרים הופכים למספרים.</li><li>funct לפי הטבלה.</li><li>כותבים 32 ביטים ומקבצים לארבעות: כל קבוצה היא ספרת הקסה אחת.</li></ol>\n<div class=\"lesson-trap\">⚠️ <b>הסדר באסמבלי שונה מהסדר בקידוד.</b> כותבים <code>add rd, rs, rt</code> אבל בקידוד השדות הם <b>rs, rt, rd</b>. היעד נכתב ראשון בטקסט, ובקידוד הוא שלישי.</div>\n<table><thead><tr><th>פקודה</th><th>funct (עשרוני)</th><th>funct (הקסה)</th></tr></thead><tbody>\n<tr><td><code>add</code></td><td>32</td><td>0x20</td></tr><tr><td><code>sub</code></td><td>34</td><td>0x22</td></tr><tr><td><code>and</code></td><td>36</td><td>0x24</td></tr>\n<tr><td><code>or</code></td><td>37</td><td>0x25</td></tr><tr><td><code>xor</code></td><td>38</td><td>0x26</td></tr><tr><td><code>slt</code></td><td>42</td><td>0x2A</td></tr></tbody></table>\n<div class=\"lesson-ex\"><b>דוגמה:</b> <code>add &#36;t0, &#36;s1, &#36;s2</code>. כאן rd=8, rs=17, rt=18, funct=32.<br>\n<code>000000 10001 10010 01000 00000 100000</code><br>\nמקבצים לארבעות: <code>0000 0010 0011 0010 0100 0000 0010 0000</code> = <code>0x02324020</code>.</div>\n<div class=\"lesson-rule\">🔑 ארבעה ביטים הם ספרת הקסה אחת: 0000=0, 0001=1, 0010=2, 0011=3, 0100=4, 0101=5, 0110=6, 0111=7, 1000=8, 1001=9, 1010=A, 1011=B, 1100=C, 1101=D, 1110=E, 1111=F.</div>"
    },
    "questions": [
     {
      "id": "mips_enc-C02-Q1",
      "question": "בפקודה `sub \\$t0, \\$t1, \\$t2`, מהו הערך שיופיע בשדה rs בקידוד?",
      "options": [
       {
        "id": "a",
        "value": "8",
        "type": "text",
        "html": "8"
       },
       {
        "id": "b",
        "value": "9",
        "type": "text",
        "html": "9"
       },
       {
        "id": "c",
        "value": "10",
        "type": "text",
        "html": "10"
       },
       {
        "id": "d",
        "value": "34",
        "type": "text",
        "html": "34"
       }
      ],
      "correctId": "b",
      "explanation": "rs הוא האוגר הראשון מבין המקורות, כלומר `\\$t1`, שהוא 9. היעד `\\$t0` הוא rd. המסיחים: 8 ← זה האוגר `\\$t0`, שהוא היעד rd. 10 ← זה האוגר `\\$t2`, שהוא rt. 34 ← זה ה-funct של sub.",
      "recap": "כתיבה rd, rs, rt · קידוד rs, rt, rd",
      "questionHtml": "בפקודה <code class=\"tok\" dir=\"ltr\">sub $t0, $t1, $t2</code>, מהו הערך שיופיע בשדה rs בקידוד?",
      "explanationHtml": "rs הוא האוגר הראשון מבין המקורות, כלומר <code class=\"tok\" dir=\"ltr\">$t1</code>, שהוא 9. היעד <code class=\"tok\" dir=\"ltr\">$t0</code> הוא rd. המסיחים: 8 ← זה האוגר <code class=\"tok\" dir=\"ltr\">$t0</code>, שהוא היעד rd. 10 ← זה האוגר <code class=\"tok\" dir=\"ltr\">$t2</code>, שהוא rt. 34 ← זה ה-funct של sub.",
      "recapHtml": "כתיבה rd, rs, rt · קידוד rs, rt, rd"
     },
     {
      "id": "mips_enc-C02-Q2",
      "question": "מהו הקידוד בשפת מכונה של הפקודה `or \\$s0, \\$t1, \\$t2`?",
      "options": [
       {
        "id": "a",
        "value": "0x02095025",
        "type": "text",
        "html": "0x02095025"
       },
       {
        "id": "b",
        "value": "0x01498025",
        "type": "text",
        "html": "0x01498025"
       },
       {
        "id": "c",
        "value": "0x012A8025",
        "type": "text",
        "html": "0x012A8025"
       },
       {
        "id": "d",
        "value": "0x012A8024",
        "type": "text",
        "html": "0x012A8024"
       }
      ],
      "correctId": "c",
      "explanation": "ב-R-type הסדר בקידוד הוא rs, rt, rd. כאן rs=9, rt=10, rd=16, funct=37: `000000 01001 01010 10000 00000 100101` = 0x012A8025. המסיחים: 0x02095025 ← הוצבו האוגרים לפי סדר הכתיבה rd, rs, rt במקום rs, rt, rd. 0x01498025 ← rs ו-rt הוחלפו. 0x012A8024 ← funct של and ולא של or.",
      "recap": "R: קידוד rs, rt, rd, funct · כתיבה rd, rs, rt",
      "questionHtml": "מהו הקידוד בשפת מכונה של הפקודה <code class=\"tok\" dir=\"ltr\">or $s0, $t1, $t2</code>?",
      "explanationHtml": "ב-R-type הסדר בקידוד הוא rs, rt, rd. כאן rs=9, rt=10, rd=16, funct=37: <code class=\"tok\" dir=\"ltr\">000000 01001 01010 10000 00000 100101</code> = 0x012A8025. המסיחים: 0x02095025 ← הוצבו האוגרים לפי סדר הכתיבה rd, rs, rt במקום rs, rt, rd. 0x01498025 ← rs ו-rt הוחלפו. 0x012A8024 ← funct של and ולא של or.",
      "recapHtml": "R: קידוד rs, rt, rd, funct · כתיבה rd, rs, rt"
     },
     {
      "id": "mips_enc-C02-Q3",
      "question": "מהו הקידוד בשפת מכונה של הפקודה `and \\$a0, \\$t0, \\$t1`?",
      "options": [
       {
        "id": "a",
        "value": "0x01092024",
        "type": "text",
        "html": "0x01092024"
       },
       {
        "id": "b",
        "value": "0x00884824",
        "type": "text",
        "html": "0x00884824"
       },
       {
        "id": "c",
        "value": "0x01282024",
        "type": "text",
        "html": "0x01282024"
       },
       {
        "id": "d",
        "value": "0x01092025",
        "type": "text",
        "html": "0x01092025"
       }
      ],
      "correctId": "a",
      "explanation": "ב-R-type הסדר בקידוד הוא rs, rt, rd. כאן rs=8, rt=9, rd=4, funct=36: `000000 01000 01001 00100 00000 100100` = 0x01092024. המסיחים: 0x00884824 ← הוצבו האוגרים לפי סדר הכתיבה rd, rs, rt במקום rs, rt, rd. 0x01282024 ← rs ו-rt הוחלפו. 0x01092025 ← funct של or ולא של and.",
      "recap": "R: קידוד rs, rt, rd, funct · כתיבה rd, rs, rt",
      "questionHtml": "מהו הקידוד בשפת מכונה של הפקודה <code class=\"tok\" dir=\"ltr\">and $a0, $t0, $t1</code>?",
      "explanationHtml": "ב-R-type הסדר בקידוד הוא rs, rt, rd. כאן rs=8, rt=9, rd=4, funct=36: <code class=\"tok\" dir=\"ltr\">000000 01000 01001 00100 00000 100100</code> = 0x01092024. המסיחים: 0x00884824 ← הוצבו האוגרים לפי סדר הכתיבה rd, rs, rt במקום rs, rt, rd. 0x01282024 ← rs ו-rt הוחלפו. 0x01092025 ← funct של or ולא של and.",
      "recapHtml": "R: קידוד rs, rt, rd, funct · כתיבה rd, rs, rt"
     },
     {
      "id": "mips_enc-C02-Q4",
      "question": "חמשת השדות הראשונים והשדה האחרון של פקודה הם `000000 01001 01010 10000 00000 100101`. מהי המילה בהקסה?",
      "options": [
       {
        "id": "a",
        "value": "`0x012A8020`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x012A8020</code>"
       },
       {
        "id": "b",
        "value": "`0x01A28025`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x01A28025</code>"
       },
       {
        "id": "c",
        "value": "`0x012A8052`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x012A8052</code>"
       },
       {
        "id": "d",
        "value": "`0x012A8025`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x012A8025</code>"
       }
      ],
      "correctId": "d",
      "explanation": "0000 0001 0010 1010 1000 0000 0010 0101 ← ספרות 0, 1, 2, A, 8, 0, 2, 5. המסיחים: `0x012A8020` ← funct 100101 הוא 0x25 ולא 0x20. `0x01A28025` ← שגיאת קיבוץ של הביטים לספרות. `0x012A8052` ← שתי הספרות האחרונות הוחלפו.",
      "recap": "כל 4 ביטים = ספרת הקסה",
      "questionHtml": "חמשת השדות הראשונים והשדה האחרון של פקודה הם <code class=\"tok\" dir=\"ltr\">000000 01001 01010 10000 00000 100101</code>. מהי המילה בהקסה?",
      "explanationHtml": "0000 0001 0010 1010 1000 0000 0010 0101 ← ספרות 0, 1, 2, A, 8, 0, 2, 5. המסיחים: <code class=\"tok\" dir=\"ltr\">0x012A8020</code> ← funct 100101 הוא 0x25 ולא 0x20. <code class=\"tok\" dir=\"ltr\">0x01A28025</code> ← שגיאת קיבוץ של הביטים לספרות. <code class=\"tok\" dir=\"ltr\">0x012A8052</code> ← שתי הספרות האחרונות הוחלפו.",
      "recapHtml": "כל 4 ביטים = ספרת הקסה"
     },
     {
      "id": "mips_enc-C02-Q5",
      "question": "מהו הקידוד בשפת מכונה של הפקודה `slt \\$t5, \\$s6, \\$a2`?",
      "options": [
       {
        "id": "a",
        "value": "0x01B6302A",
        "type": "text",
        "html": "0x01B6302A"
       },
       {
        "id": "b",
        "value": "0x00D6682A",
        "type": "text",
        "html": "0x00D6682A"
       },
       {
        "id": "c",
        "value": "0x02C66822",
        "type": "text",
        "html": "0x02C66822"
       },
       {
        "id": "d",
        "value": "0x02C6682A",
        "type": "text",
        "html": "0x02C6682A"
       }
      ],
      "correctId": "d",
      "explanation": "ב-R-type הסדר בקידוד הוא rs, rt, rd. כאן rs=22, rt=6, rd=13, funct=42: `000000 10110 00110 01101 00000 101010` = 0x02C6682A. המסיחים: 0x01B6302A ← הוצבו האוגרים לפי סדר הכתיבה rd, rs, rt במקום rs, rt, rd. 0x00D6682A ← rs ו-rt הוחלפו. 0x02C66822 ← funct של sub ולא של slt.",
      "recap": "R: קידוד rs, rt, rd, funct · כתיבה rd, rs, rt",
      "questionHtml": "מהו הקידוד בשפת מכונה של הפקודה <code class=\"tok\" dir=\"ltr\">slt $t5, $s6, $a2</code>?",
      "explanationHtml": "ב-R-type הסדר בקידוד הוא rs, rt, rd. כאן rs=22, rt=6, rd=13, funct=42: <code class=\"tok\" dir=\"ltr\">000000 10110 00110 01101 00000 101010</code> = 0x02C6682A. המסיחים: 0x01B6302A ← הוצבו האוגרים לפי סדר הכתיבה rd, rs, rt במקום rs, rt, rd. 0x00D6682A ← rs ו-rt הוחלפו. 0x02C66822 ← funct של sub ולא של slt.",
      "recapHtml": "R: קידוד rs, rt, rd, funct · כתיבה rd, rs, rt"
     },
     {
      "id": "mips_enc-C02-Q6",
      "question": "מהו הקידוד בשפת מכונה של הפקודה `xor \\$ra, \\$sp, \\$gp`?",
      "options": [
       {
        "id": "a",
        "value": "0x03FDE026",
        "type": "text",
        "html": "0x03FDE026"
       },
       {
        "id": "b",
        "value": "0x03BCF826",
        "type": "text",
        "html": "0x03BCF826"
       },
       {
        "id": "c",
        "value": "0x039DF826",
        "type": "text",
        "html": "0x039DF826"
       },
       {
        "id": "d",
        "value": "0x03BCF825",
        "type": "text",
        "html": "0x03BCF825"
       }
      ],
      "correctId": "b",
      "explanation": "ב-R-type הסדר בקידוד הוא rs, rt, rd. כאן rs=29, rt=28, rd=31, funct=38: `000000 11101 11100 11111 00000 100110` = 0x03BCF826. המסיחים: 0x03FDE026 ← הוצבו האוגרים לפי סדר הכתיבה rd, rs, rt במקום rs, rt, rd. 0x039DF826 ← rs ו-rt הוחלפו. 0x03BCF825 ← funct של or ולא של xor.",
      "recap": "R: קידוד rs, rt, rd, funct · כתיבה rd, rs, rt",
      "questionHtml": "מהו הקידוד בשפת מכונה של הפקודה <code class=\"tok\" dir=\"ltr\">xor $ra, $sp, $gp</code>?",
      "explanationHtml": "ב-R-type הסדר בקידוד הוא rs, rt, rd. כאן rs=29, rt=28, rd=31, funct=38: <code class=\"tok\" dir=\"ltr\">000000 11101 11100 11111 00000 100110</code> = 0x03BCF826. המסיחים: 0x03FDE026 ← הוצבו האוגרים לפי סדר הכתיבה rd, rs, rt במקום rs, rt, rd. 0x039DF826 ← rs ו-rt הוחלפו. 0x03BCF825 ← funct של or ולא של xor.",
      "recapHtml": "R: קידוד rs, rt, rd, funct · כתיבה rd, rs, rt"
     },
     {
      "bankId": "23A-A-Q17",
      "recap": "R: rs, rt, rd, funct (slt = 42)",
      "recapHtml": "R: rs, rt, rd, funct (slt = 42)"
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "🔍",
    "title": "פענוח פקודות R",
    "goal": "לפענח מילת R בהקסה לפקודת אסמבלי.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>פענוח הוא הכיוון ההפוך: ממילה בהקסה חוזרים לפקודה.</p>\n<ol style=\"text-align:right\"><li>כל ספרת הקסה הופכת לארבעה ביטים (טבלת הספרות מהשלב הקודם).</li>\n<li>מחלקים לשדות 6, 5, 5, 5, 5, 6.</li>\n<li>אם ששת הביטים הראשונים הם 000000, זו R-type, ו-<b>funct</b> (ששת הביטים האחרונים) קובע איזו פקודה.</li>\n<li>שדות rs, rt, rd הם מספרים. ממירים לשמות וכותבים לפי הסדר <b>rd, rs, rt</b>.</li></ol>\n<div class=\"lesson-ex\"><b>דוגמה:</b> <code>0x02324022</code> = <code>0000 0010 0011 0010 0100 0000 0010 0010</code> = <code>000000 10001 10010 01000 00000 100010</code>.\nop=0, funct=34 (0x22) הוא sub, rs=17 (<code>&#36;s1</code>), rt=18 (<code>&#36;s2</code>), rd=8 (<code>&#36;t0</code>). לכן <code>sub &#36;t0, &#36;s1, &#36;s2</code>.</div>\n<div class=\"lesson-trap\">⚠️ השדה השלישי (rd) הוא היעד ונכתב <b>ראשון</b>. מי שקורא את השדות משמאל לימין בלי להחליף יקבל פקודה שגויה.</div>\n<table><thead><tr><th>funct בהקסה</th><th>20</th><th>22</th><th>24</th><th>25</th><th>26</th><th>2A</th></tr></thead><tbody><tr><td>פקודה</td><td>add</td><td>sub</td><td>and</td><td>or</td><td>xor</td><td>slt</td></tr></tbody></table>\n<div class=\"lesson-rule\">🔑 שתי הספרות האחרונות של מילת R (6 הביטים האחרונים) כמעט קובעות את הפקודה: 20 add, 22 sub, 24 and, 25 or, 26 xor, 2A slt. (ספרה לפני כן יכולה לתרום 0 או 2 ביטים לשדה rd, לכן מסתכלים על 6 ביטים ולא על ספרה שלמה.)</div>"
    },
    "questions": [
     {
      "id": "mips_enc-C03-Q1",
      "question": "הפקודה `0x02324022` בשפת מכונה היא בעצם פקודת האסמבלי:",
      "options": [
       {
        "id": "a",
        "value": "`sub \\$t0, \\$s1, \\$s2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sub $t0, $s1, $s2</code>"
       },
       {
        "id": "b",
        "value": "`sub \\$s1, \\$s2, \\$t0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sub $s1, $s2, $t0</code>"
       },
       {
        "id": "c",
        "value": "`sub \\$t0, \\$s2, \\$s1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sub $t0, $s2, $s1</code>"
       },
       {
        "id": "d",
        "value": "`add \\$t0, \\$s1, \\$s2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">add $t0, $s1, $s2</code>"
       }
      ],
      "correctId": "a",
      "explanation": "`000000 10001 10010 01000 00000 100010` = 0x02324022. op=0 ולכן R-type, ו-funct=34 הוא sub. rs=17 (`\\$s1`), rt=18 (`\\$s2`), rd=8 (`\\$t0`), והכתיבה היא rd, rs, rt. המסיחים: `sub \\$s1, \\$s2, \\$t0` ← קריאת השדות לפי סדר הכתיבה (הראשון נלקח כיעד). `sub \\$t0, \\$s2, \\$s1` ← rs ו-rt הוחלפו. `add \\$t0, \\$s1, \\$s2` ← funct 34 הוא sub ולא add.",
      "recap": "op=0: funct קובע · rs, rt, rd ← כותבים rd, rs, rt",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">0x02324022</code> בשפת מכונה היא בעצם פקודת האסמבלי:",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">000000 10001 10010 01000 00000 100010</code> = 0x02324022. op=0 ולכן R-type, ו-funct=34 הוא sub. rs=17 (<code class=\"tok\" dir=\"ltr\">$s1</code>), rt=18 (<code class=\"tok\" dir=\"ltr\">$s2</code>), rd=8 (<code class=\"tok\" dir=\"ltr\">$t0</code>), והכתיבה היא rd, rs, rt. המסיחים: <code class=\"tok\" dir=\"ltr\">sub $s1, $s2, $t0</code> ← קריאת השדות לפי סדר הכתיבה (הראשון נלקח כיעד). <code class=\"tok\" dir=\"ltr\">sub $t0, $s2, $s1</code> ← rs ו-rt הוחלפו. <code class=\"tok\" dir=\"ltr\">add $t0, $s1, $s2</code> ← funct 34 הוא sub ולא add.",
      "recapHtml": "op=0: funct קובע · rs, rt, rd ← כותבים rd, rs, rt"
     },
     {
      "id": "mips_enc-C03-Q2",
      "question": "הפקודה `0x012A4025` בשפת מכונה היא בעצם פקודת האסמבלי:",
      "options": [
       {
        "id": "a",
        "value": "`or \\$t1, \\$t2, \\$t0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">or $t1, $t2, $t0</code>"
       },
       {
        "id": "b",
        "value": "`or \\$t0, \\$t1, \\$t2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">or $t0, $t1, $t2</code>"
       },
       {
        "id": "c",
        "value": "`or \\$t0, \\$t2, \\$t1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">or $t0, $t2, $t1</code>"
       },
       {
        "id": "d",
        "value": "`and \\$t0, \\$t1, \\$t2`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">and $t0, $t1, $t2</code>"
       }
      ],
      "correctId": "b",
      "explanation": "`000000 01001 01010 01000 00000 100101` = 0x012A4025. op=0 ולכן R-type, ו-funct=37 הוא or. rs=9 (`\\$t1`), rt=10 (`\\$t2`), rd=8 (`\\$t0`), והכתיבה היא rd, rs, rt. המסיחים: `or \\$t1, \\$t2, \\$t0` ← קריאת השדות לפי סדר הכתיבה (הראשון נלקח כיעד). `or \\$t0, \\$t2, \\$t1` ← rs ו-rt הוחלפו. `and \\$t0, \\$t1, \\$t2` ← funct 37 הוא or ולא and.",
      "recap": "op=0: funct קובע · rs, rt, rd ← כותבים rd, rs, rt",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">0x012A4025</code> בשפת מכונה היא בעצם פקודת האסמבלי:",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">000000 01001 01010 01000 00000 100101</code> = 0x012A4025. op=0 ולכן R-type, ו-funct=37 הוא or. rs=9 (<code class=\"tok\" dir=\"ltr\">$t1</code>), rt=10 (<code class=\"tok\" dir=\"ltr\">$t2</code>), rd=8 (<code class=\"tok\" dir=\"ltr\">$t0</code>), והכתיבה היא rd, rs, rt. המסיחים: <code class=\"tok\" dir=\"ltr\">or $t1, $t2, $t0</code> ← קריאת השדות לפי סדר הכתיבה (הראשון נלקח כיעד). <code class=\"tok\" dir=\"ltr\">or $t0, $t2, $t1</code> ← rs ו-rt הוחלפו. <code class=\"tok\" dir=\"ltr\">and $t0, $t1, $t2</code> ← funct 37 הוא or ולא and.",
      "recapHtml": "op=0: funct קובע · rs, rt, rd ← כותבים rd, rs, rt"
     },
     {
      "id": "mips_enc-C03-Q3",
      "question": "הפקודה `0x0314182A` בשפת מכונה היא בעצם פקודת האסמבלי:",
      "options": [
       {
        "id": "a",
        "value": "`slt \\$t8, \\$s4, \\$v1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">slt $t8, $s4, $v1</code>"
       },
       {
        "id": "b",
        "value": "`slt \\$v1, \\$s4, \\$t8`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">slt $v1, $s4, $t8</code>"
       },
       {
        "id": "c",
        "value": "`slt \\$v1, \\$t8, \\$s4`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">slt $v1, $t8, $s4</code>"
       },
       {
        "id": "d",
        "value": "`sub \\$v1, \\$t8, \\$s4`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sub $v1, $t8, $s4</code>"
       }
      ],
      "correctId": "c",
      "explanation": "`000000 11000 10100 00011 00000 101010` = 0x0314182A. op=0 ולכן R-type, ו-funct=42 הוא slt. rs=24 (`\\$t8`), rt=20 (`\\$s4`), rd=3 (`\\$v1`), והכתיבה היא rd, rs, rt. המסיחים: `slt \\$t8, \\$s4, \\$v1` ← קריאת השדות לפי סדר הכתיבה (הראשון נלקח כיעד). `slt \\$v1, \\$s4, \\$t8` ← rs ו-rt הוחלפו. `sub \\$v1, \\$t8, \\$s4` ← funct 42 הוא slt ולא sub.",
      "recap": "op=0: funct קובע · rs, rt, rd ← כותבים rd, rs, rt",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">0x0314182A</code> בשפת מכונה היא בעצם פקודת האסמבלי:",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">000000 11000 10100 00011 00000 101010</code> = 0x0314182A. op=0 ולכן R-type, ו-funct=42 הוא slt. rs=24 (<code class=\"tok\" dir=\"ltr\">$t8</code>), rt=20 (<code class=\"tok\" dir=\"ltr\">$s4</code>), rd=3 (<code class=\"tok\" dir=\"ltr\">$v1</code>), והכתיבה היא rd, rs, rt. המסיחים: <code class=\"tok\" dir=\"ltr\">slt $t8, $s4, $v1</code> ← קריאת השדות לפי סדר הכתיבה (הראשון נלקח כיעד). <code class=\"tok\" dir=\"ltr\">slt $v1, $s4, $t8</code> ← rs ו-rt הוחלפו. <code class=\"tok\" dir=\"ltr\">sub $v1, $t8, $s4</code> ← funct 42 הוא slt ולא sub.",
      "recapHtml": "op=0: funct קובע · rs, rt, rd ← כותבים rd, rs, rt"
     },
     {
      "id": "mips_enc-C03-Q4",
      "question": "הפקודה `0x01B99826` בשפת מכונה היא בעצם פקודת האסמבלי:",
      "options": [
       {
        "id": "a",
        "value": "`xor \\$t5, \\$t9, \\$s3`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">xor $t5, $t9, $s3</code>"
       },
       {
        "id": "b",
        "value": "`xor \\$s3, \\$t9, \\$t5`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">xor $s3, $t9, $t5</code>"
       },
       {
        "id": "c",
        "value": "`or \\$s3, \\$t5, \\$t9`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">or $s3, $t5, $t9</code>"
       },
       {
        "id": "d",
        "value": "`xor \\$s3, \\$t5, \\$t9`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">xor $s3, $t5, $t9</code>"
       }
      ],
      "correctId": "d",
      "explanation": "`000000 01101 11001 10011 00000 100110` = 0x01B99826. op=0 ולכן R-type, ו-funct=38 הוא xor. rs=13 (`\\$t5`), rt=25 (`\\$t9`), rd=19 (`\\$s3`), והכתיבה היא rd, rs, rt. המסיחים: `xor \\$t5, \\$t9, \\$s3` ← קריאת השדות לפי סדר הכתיבה (הראשון נלקח כיעד). `xor \\$s3, \\$t9, \\$t5` ← rs ו-rt הוחלפו. `or \\$s3, \\$t5, \\$t9` ← funct 38 הוא xor ולא or.",
      "recap": "op=0: funct קובע · rs, rt, rd ← כותבים rd, rs, rt",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">0x01B99826</code> בשפת מכונה היא בעצם פקודת האסמבלי:",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">000000 01101 11001 10011 00000 100110</code> = 0x01B99826. op=0 ולכן R-type, ו-funct=38 הוא xor. rs=13 (<code class=\"tok\" dir=\"ltr\">$t5</code>), rt=25 (<code class=\"tok\" dir=\"ltr\">$t9</code>), rd=19 (<code class=\"tok\" dir=\"ltr\">$s3</code>), והכתיבה היא rd, rs, rt. המסיחים: <code class=\"tok\" dir=\"ltr\">xor $t5, $t9, $s3</code> ← קריאת השדות לפי סדר הכתיבה (הראשון נלקח כיעד). <code class=\"tok\" dir=\"ltr\">xor $s3, $t9, $t5</code> ← rs ו-rt הוחלפו. <code class=\"tok\" dir=\"ltr\">or $s3, $t5, $t9</code> ← funct 38 הוא xor ולא or.",
      "recapHtml": "op=0: funct קובע · rs, rt, rd ← כותבים rd, rs, rt"
     },
     {
      "id": "mips_enc-C03-Q5",
      "question": "הפקודה `0x03A1F024` בשפת מכונה היא בעצם פקודת האסמבלי:",
      "options": [
       {
        "id": "a",
        "value": "`and \\$sp, \\$at, \\$fp`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">and $sp, $at, $fp</code>"
       },
       {
        "id": "b",
        "value": "`and \\$fp, \\$sp, \\$at`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">and $fp, $sp, $at</code>"
       },
       {
        "id": "c",
        "value": "`and \\$fp, \\$at, \\$sp`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">and $fp, $at, $sp</code>"
       },
       {
        "id": "d",
        "value": "`or \\$fp, \\$sp, \\$at`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">or $fp, $sp, $at</code>"
       }
      ],
      "correctId": "b",
      "explanation": "`000000 11101 00001 11110 00000 100100` = 0x03A1F024. op=0 ולכן R-type, ו-funct=36 הוא and. rs=29 (`\\$sp`), rt=1 (`\\$at`), rd=30 (`\\$fp`), והכתיבה היא rd, rs, rt. המסיחים: `and \\$sp, \\$at, \\$fp` ← קריאת השדות לפי סדר הכתיבה (הראשון נלקח כיעד). `and \\$fp, \\$at, \\$sp` ← rs ו-rt הוחלפו. `or \\$fp, \\$sp, \\$at` ← funct 36 הוא and ולא or.",
      "recap": "op=0: funct קובע · rs, rt, rd ← כותבים rd, rs, rt",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">0x03A1F024</code> בשפת מכונה היא בעצם פקודת האסמבלי:",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">000000 11101 00001 11110 00000 100100</code> = 0x03A1F024. op=0 ולכן R-type, ו-funct=36 הוא and. rs=29 (<code class=\"tok\" dir=\"ltr\">$sp</code>), rt=1 (<code class=\"tok\" dir=\"ltr\">$at</code>), rd=30 (<code class=\"tok\" dir=\"ltr\">$fp</code>), והכתיבה היא rd, rs, rt. המסיחים: <code class=\"tok\" dir=\"ltr\">and $sp, $at, $fp</code> ← קריאת השדות לפי סדר הכתיבה (הראשון נלקח כיעד). <code class=\"tok\" dir=\"ltr\">and $fp, $at, $sp</code> ← rs ו-rt הוחלפו. <code class=\"tok\" dir=\"ltr\">or $fp, $sp, $at</code> ← funct 36 הוא and ולא or.",
      "recapHtml": "op=0: funct קובע · rs, rt, rd ← כותבים rd, rs, rt"
     },
     {
      "id": "mips_enc-C03-Q6",
      "question": "הפקודה `0x0178E022` בשפת מכונה היא בעצם פקודת האסמבלי:",
      "options": [
       {
        "id": "a",
        "value": "`sub \\$gp, \\$t3, \\$t8`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sub $gp, $t3, $t8</code>"
       },
       {
        "id": "b",
        "value": "`sub \\$t3, \\$t8, \\$gp`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sub $t3, $t8, $gp</code>"
       },
       {
        "id": "c",
        "value": "`sub \\$gp, \\$t8, \\$t3`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sub $gp, $t8, $t3</code>"
       },
       {
        "id": "d",
        "value": "`add \\$gp, \\$t3, \\$t8`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">add $gp, $t3, $t8</code>"
       }
      ],
      "correctId": "a",
      "explanation": "`000000 01011 11000 11100 00000 100010` = 0x0178E022. op=0 ולכן R-type, ו-funct=34 הוא sub. rs=11 (`\\$t3`), rt=24 (`\\$t8`), rd=28 (`\\$gp`), והכתיבה היא rd, rs, rt. המסיחים: `sub \\$t3, \\$t8, \\$gp` ← קריאת השדות לפי סדר הכתיבה (הראשון נלקח כיעד). `sub \\$gp, \\$t8, \\$t3` ← rs ו-rt הוחלפו. `add \\$gp, \\$t3, \\$t8` ← funct 34 הוא sub ולא add.",
      "recap": "op=0: funct קובע · rs, rt, rd ← כותבים rd, rs, rt",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">0x0178E022</code> בשפת מכונה היא בעצם פקודת האסמבלי:",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">000000 01011 11000 11100 00000 100010</code> = 0x0178E022. op=0 ולכן R-type, ו-funct=34 הוא sub. rs=11 (<code class=\"tok\" dir=\"ltr\">$t3</code>), rt=24 (<code class=\"tok\" dir=\"ltr\">$t8</code>), rd=28 (<code class=\"tok\" dir=\"ltr\">$gp</code>), והכתיבה היא rd, rs, rt. המסיחים: <code class=\"tok\" dir=\"ltr\">sub $t3, $t8, $gp</code> ← קריאת השדות לפי סדר הכתיבה (הראשון נלקח כיעד). <code class=\"tok\" dir=\"ltr\">sub $gp, $t8, $t3</code> ← rs ו-rt הוחלפו. <code class=\"tok\" dir=\"ltr\">add $gp, $t3, $t8</code> ← funct 34 הוא sub ולא add.",
      "recapHtml": "op=0: funct קובע · rs, rt, rd ← כותבים rd, rs, rt"
     },
     {
      "bankId": "22B-A-Q19",
      "recap": "op=0 ו-funct 0x22: sub, והכתיבה rd, rs, rt",
      "recapHtml": "op=0 ו-funct 0x22: sub, והכתיבה rd, rs, rt"
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "💾",
    "title": "קידוד פקודות I",
    "goal": "לקודד addi, ori, lw ו-sw, כולל immediate שלילי.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>פקודת I: ‏<code>op(6) rs(5) rt(5) imm(16)</code>. ה-immediate הוא מספר עם סימן ב-16 ביט (משלים ל-2), חוץ מ-ori.</p>\n<table><thead><tr><th>פקודה</th><th>op עשרוני</th><th>op הקסה</th><th>כתיבה</th></tr></thead><tbody>\n<tr><td><code>addi</code></td><td>8</td><td>0x08</td><td><code>addi rt, rs, imm</code></td></tr><tr><td><code>ori</code></td><td>13</td><td>0x0D</td><td><code>ori rt, rs, imm</code></td></tr>\n<tr><td><code>lw</code></td><td>35</td><td>0x23</td><td><code>lw rt, imm(rs)</code></td></tr><tr><td><code>sw</code></td><td>43</td><td>0x2B</td><td><code>sw rt, imm(rs)</code></td></tr></tbody></table>\n<ul><li>גם כאן הקידוד הוא <b>rs ואז rt</b>, אבל בכתיבה האוגר rt בא ראשון. ב-<code>lw/sw</code> האוגר rs הוא אוגר הבסיס שבסוגריים.</li>\n<li><b>immediate שלילי:</b> מוסיפים 65536 וכותבים בהקסה. לדוגמה <code>-4</code> הוא 65532 = 0xFFFC.</li></ul>\n<div class=\"lesson-ex\"><b>דוגמה:</b> <code>addi &#36;t0, &#36;t1, -4</code>: op=8, rs=9, rt=8, imm=0xFFFC.<br>\n<code>001000 01001 01000 1111111111111100</code> = <code>0x2128FFFC</code>.</div>\n<div class=\"lesson-rule\">🔑 offset של מערך מילים: האיבר ה-i נמצא ב-<b>4 * i</b> בתים מתחילת המערך. אם <code>&#36;t6</code> מכיל את כתובת האיבר הראשון, אז <code>sw &#36;fp, 20(&#36;t6)</code> שומר ב-array[5].</div>\n<div class=\"lesson-trap\">⚠️ ב-I-type ה-immediate נכנס כמו שהוא (בבתים). לא מחלקים ולא מכפילים ב-4 בקידוד של addi, ori, lw ו-sw.</div>"
    },
    "questions": [
     {
      "id": "mips_enc-C04-Q1",
      "question": "מהו הקידוד בשפת מכונה של הפקודה `addi \\$t0, \\$t1, 100`?",
      "options": [
       {
        "id": "a",
        "value": "0x21090064",
        "type": "text",
        "html": "0x21090064"
       },
       {
        "id": "b",
        "value": "0x21280064",
        "type": "text",
        "html": "0x21280064"
       },
       {
        "id": "c",
        "value": "0x35280064",
        "type": "text",
        "html": "0x35280064"
       },
       {
        "id": "d",
        "value": "0x2128FF9C",
        "type": "text",
        "html": "0x2128FF9C"
       }
      ],
      "correctId": "b",
      "explanation": "op=8, rs=9, rt=8, imm=0x0064: `001000 01001 01000 0000000001100100` = 0x21280064. הכתיבה היא rt ואז rs, והקידוד rs ואז rt. המסיחים: 0x21090064 ← rs ו-rt הוחלפו. 0x35280064 ← opcode של פקודה אחרת. 0x2128FF9C ← ה-immediate נכתב עם הסימן ההפוך.",
      "recap": "I: op, rs, rt, imm16 · שלילי: משלים ל-2 ב-16 ביט",
      "questionHtml": "מהו הקידוד בשפת מכונה של הפקודה <code class=\"tok\" dir=\"ltr\">addi $t0, $t1, 100</code>?",
      "explanationHtml": "op=8, rs=9, rt=8, imm=0x0064: <code class=\"tok\" dir=\"ltr\">001000 01001 01000 0000000001100100</code> = 0x21280064. הכתיבה היא rt ואז rs, והקידוד rs ואז rt. המסיחים: 0x21090064 ← rs ו-rt הוחלפו. 0x35280064 ← opcode של פקודה אחרת. 0x2128FF9C ← ה-immediate נכתב עם הסימן ההפוך.",
      "recapHtml": "I: op, rs, rt, imm16 · שלילי: משלים ל-2 ב-16 ביט"
     },
     {
      "id": "mips_enc-C04-Q2",
      "question": "מהו הקידוד בשפת מכונה של הפקודה `addi \\$s1, \\$a0, -4`?",
      "options": [
       {
        "id": "a",
        "value": "0x2224FFFC",
        "type": "text",
        "html": "0x2224FFFC"
       },
       {
        "id": "b",
        "value": "0x3491FFFC",
        "type": "text",
        "html": "0x3491FFFC"
       },
       {
        "id": "c",
        "value": "0x20910004",
        "type": "text",
        "html": "0x20910004"
       },
       {
        "id": "d",
        "value": "0x2091FFFC",
        "type": "text",
        "html": "0x2091FFFC"
       }
      ],
      "correctId": "d",
      "explanation": "op=8, rs=4, rt=17, imm=0xFFFC: `001000 00100 10001 1111111111111100` = 0x2091FFFC. הכתיבה היא rt ואז rs, והקידוד rs ואז rt. המסיחים: 0x2224FFFC ← rs ו-rt הוחלפו. 0x3491FFFC ← opcode של פקודה אחרת. 0x20910004 ← ערך מוחלט במקום משלים ל-2.",
      "recap": "I: op, rs, rt, imm16 · שלילי: משלים ל-2 ב-16 ביט",
      "questionHtml": "מהו הקידוד בשפת מכונה של הפקודה <code class=\"tok\" dir=\"ltr\">addi $s1, $a0, -4</code>?",
      "explanationHtml": "op=8, rs=4, rt=17, imm=0xFFFC: <code class=\"tok\" dir=\"ltr\">001000 00100 10001 1111111111111100</code> = 0x2091FFFC. הכתיבה היא rt ואז rs, והקידוד rs ואז rt. המסיחים: 0x2224FFFC ← rs ו-rt הוחלפו. 0x3491FFFC ← opcode של פקודה אחרת. 0x20910004 ← ערך מוחלט במקום משלים ל-2.",
      "recapHtml": "I: op, rs, rt, imm16 · שלילי: משלים ל-2 ב-16 ביט"
     },
     {
      "id": "mips_enc-C04-Q3",
      "question": "מהו הקידוד בשפת מכונה של הפקודה `lw \\$t2, 8(\\$s0)`?",
      "options": [
       {
        "id": "a",
        "value": "0x8E0A0008",
        "type": "text",
        "html": "0x8E0A0008"
       },
       {
        "id": "b",
        "value": "0x8D500008",
        "type": "text",
        "html": "0x8D500008"
       },
       {
        "id": "c",
        "value": "0xAE0A0008",
        "type": "text",
        "html": "0xAE0A0008"
       },
       {
        "id": "d",
        "value": "0x8E0AFFF8",
        "type": "text",
        "html": "0x8E0AFFF8"
       }
      ],
      "correctId": "a",
      "explanation": "op=35, rs=16, rt=10, imm=0x0008: `100011 10000 01010 0000000000001000` = 0x8E0A0008. הכתיבה היא rt ואז rs, והקידוד rs ואז rt. המסיחים: 0x8D500008 ← rs ו-rt הוחלפו. 0xAE0A0008 ← opcode של פקודה אחרת. 0x8E0AFFF8 ← ה-immediate נכתב עם הסימן ההפוך.",
      "recap": "I: op, rs, rt, imm16 · שלילי: משלים ל-2 ב-16 ביט",
      "questionHtml": "מהו הקידוד בשפת מכונה של הפקודה <code class=\"tok\" dir=\"ltr\">lw $t2, 8($s0)</code>?",
      "explanationHtml": "op=35, rs=16, rt=10, imm=0x0008: <code class=\"tok\" dir=\"ltr\">100011 10000 01010 0000000000001000</code> = 0x8E0A0008. הכתיבה היא rt ואז rs, והקידוד rs ואז rt. המסיחים: 0x8D500008 ← rs ו-rt הוחלפו. 0xAE0A0008 ← opcode של פקודה אחרת. 0x8E0AFFF8 ← ה-immediate נכתב עם הסימן ההפוך.",
      "recapHtml": "I: op, rs, rt, imm16 · שלילי: משלים ל-2 ב-16 ביט"
     },
     {
      "id": "mips_enc-C04-Q4",
      "question": "מהו הקידוד בשפת מכונה של הפקודה `sw \\$t3, 12(\\$sp)`?",
      "options": [
       {
        "id": "a",
        "value": "0xAD7D000C",
        "type": "text",
        "html": "0xAD7D000C"
       },
       {
        "id": "b",
        "value": "0x8FAB000C",
        "type": "text",
        "html": "0x8FAB000C"
       },
       {
        "id": "c",
        "value": "0xAFAB000C",
        "type": "text",
        "html": "0xAFAB000C"
       },
       {
        "id": "d",
        "value": "0xAFABFFF4",
        "type": "text",
        "html": "0xAFABFFF4"
       }
      ],
      "correctId": "c",
      "explanation": "op=43, rs=29, rt=11, imm=0x000C: `101011 11101 01011 0000000000001100` = 0xAFAB000C. הכתיבה היא rt ואז rs, והקידוד rs ואז rt. המסיחים: 0xAD7D000C ← rs ו-rt הוחלפו. 0x8FAB000C ← opcode של פקודה אחרת. 0xAFABFFF4 ← ה-immediate נכתב עם הסימן ההפוך.",
      "recap": "I: op, rs, rt, imm16 · שלילי: משלים ל-2 ב-16 ביט",
      "questionHtml": "מהו הקידוד בשפת מכונה של הפקודה <code class=\"tok\" dir=\"ltr\">sw $t3, 12($sp)</code>?",
      "explanationHtml": "op=43, rs=29, rt=11, imm=0x000C: <code class=\"tok\" dir=\"ltr\">101011 11101 01011 0000000000001100</code> = 0xAFAB000C. הכתיבה היא rt ואז rs, והקידוד rs ואז rt. המסיחים: 0xAD7D000C ← rs ו-rt הוחלפו. 0x8FAB000C ← opcode של פקודה אחרת. 0xAFABFFF4 ← ה-immediate נכתב עם הסימן ההפוך.",
      "recapHtml": "I: op, rs, rt, imm16 · שלילי: משלים ל-2 ב-16 ביט"
     },
     {
      "id": "mips_enc-C04-Q5",
      "question": "מהו הקידוד בשפת מכונה של הפקודה `ori \\$s5, \\$t0, 0xFF0F`?",
      "options": [
       {
        "id": "a",
        "value": "0x36A8FF0F",
        "type": "text",
        "html": "0x36A8FF0F"
       },
       {
        "id": "b",
        "value": "0x3515FF0F",
        "type": "text",
        "html": "0x3515FF0F"
       },
       {
        "id": "c",
        "value": "0x2115FF0F",
        "type": "text",
        "html": "0x2115FF0F"
       },
       {
        "id": "d",
        "value": "0x351500F1",
        "type": "text",
        "html": "0x351500F1"
       }
      ],
      "correctId": "b",
      "explanation": "op=13, rs=8, rt=21, imm=0xFF0F: `001101 01000 10101 1111111100001111` = 0x3515FF0F. הכתיבה היא rt ואז rs, והקידוד rs ואז rt. המסיחים: 0x36A8FF0F ← rs ו-rt הוחלפו. 0x2115FF0F ← opcode של פקודה אחרת. 0x351500F1 ← ערך מוחלט במקום משלים ל-2.",
      "recap": "I: op, rs, rt, imm16 · שלילי: משלים ל-2 ב-16 ביט",
      "questionHtml": "מהו הקידוד בשפת מכונה של הפקודה <code class=\"tok\" dir=\"ltr\">ori $s5, $t0, 0xFF0F</code>?",
      "explanationHtml": "op=13, rs=8, rt=21, imm=0xFF0F: <code class=\"tok\" dir=\"ltr\">001101 01000 10101 1111111100001111</code> = 0x3515FF0F. הכתיבה היא rt ואז rs, והקידוד rs ואז rt. המסיחים: 0x36A8FF0F ← rs ו-rt הוחלפו. 0x2115FF0F ← opcode של פקודה אחרת. 0x351500F1 ← ערך מוחלט במקום משלים ל-2.",
      "recapHtml": "I: op, rs, rt, imm16 · שלילי: משלים ל-2 ב-16 ביט"
     },
     {
      "id": "mips_enc-C04-Q6",
      "question": "`\\$t6` מכיל את הכתובת של `array[0]` במערך של מילים (4 בתים כל אחת). איזו פקודה שומרת את `\\$fp` ב-`array[5]`?",
      "options": [
       {
        "id": "a",
        "value": "`sw \\$fp, 20(\\$t6)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sw $fp, 20($t6)</code>"
       },
       {
        "id": "b",
        "value": "`sw \\$fp, 5(\\$t6)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sw $fp, 5($t6)</code>"
       },
       {
        "id": "c",
        "value": "`lw \\$fp, 20(\\$t6)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">lw $fp, 20($t6)</code>"
       },
       {
        "id": "d",
        "value": "`sw \\$t6, 20(\\$fp)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sw $t6, 20($fp)</code>"
       }
      ],
      "correctId": "a",
      "explanation": "כתובת array[5] היא בסיס + 20. שמירה היא sw, האוגר ששומרים הוא `\\$fp` והבסיס הוא `\\$t6`. המסיחים: `sw \\$fp, 5(\\$t6)` ← ה-offset הוא בבתים, ולכן צריך 5 * 4. `lw \\$fp, 20(\\$t6)` ← lw טוענת מהזיכרון ולא שומרת. `sw \\$t6, 20(\\$fp)` ← האוגרים הוחלפו: הבסיס צריך להיות `\\$t6`.",
      "recap": "איבר i = offset של 4 * i",
      "questionHtml": "<code class=\"tok\" dir=\"ltr\">$t6</code> מכיל את הכתובת של <code class=\"tok\" dir=\"ltr\">array[0]</code> במערך של מילים (4 בתים כל אחת). איזו פקודה שומרת את <code class=\"tok\" dir=\"ltr\">$fp</code> ב-<code class=\"tok\" dir=\"ltr\">array[5]</code>?",
      "explanationHtml": "כתובת array[5] היא בסיס + 20. שמירה היא sw, האוגר ששומרים הוא <code class=\"tok\" dir=\"ltr\">$fp</code> והבסיס הוא <code class=\"tok\" dir=\"ltr\">$t6</code>. המסיחים: <code class=\"tok\" dir=\"ltr\">sw $fp, 5($t6)</code> ← ה-offset הוא בבתים, ולכן צריך 5 * 4. <code class=\"tok\" dir=\"ltr\">lw $fp, 20($t6)</code> ← lw טוענת מהזיכרון ולא שומרת. <code class=\"tok\" dir=\"ltr\">sw $t6, 20($fp)</code> ← האוגרים הוחלפו: הבסיס צריך להיות <code class=\"tok\" dir=\"ltr\">$t6</code>.",
      "recapHtml": "איבר i = offset של 4 * i"
     },
     {
      "bankId": "23B-A-Q17",
      "recap": "addi שלילי: משלים ל-2 ב-16 ביט",
      "recapHtml": "addi שלילי: משלים ל-2 ב-16 ביט"
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "🔎",
    "title": "פענוח פקודות I",
    "goal": "לפענח מילת I לפי ה-op, ולקרוא את ה-immediate נכון.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>בפענוח I-type, ה-<b>op</b> (ששת הביטים הראשונים) קובע את הפקודה.</p>\n<table><thead><tr><th>שתי ספרות ראשונות</th><th>20-23</th><th>34-37</th><th>8C-8F</th><th>AC-AF</th><th>10-13</th><th>14-17</th><th>3C-3F</th></tr></thead><tbody>\n<tr><td>op</td><td>8 addi</td><td>13 ori</td><td>35 lw</td><td>43 sw</td><td>4 beq</td><td>5 bne</td><td>15 lui</td></tr></tbody></table>\n<p>(כל טווח כזה הוא אותו op, כי שני הביטים התחתונים של הבית הראשון שייכים כבר ל-rs.)</p>\n<ol style=\"text-align:right\"><li>מפרקים ל-6, 5, 5, 16 ביטים.</li><li>op קובע את הפקודה, ומשם יודעים את הסדר בכתיבה.</li>\n<li>ה-immediate: ב-<code>addi, lw, sw</code> הוא <b>מספר עם סימן</b>. אם הביט העליון שלו (ביט 15) דולק, הוא שלילי: מחסרים 65536. ב-<code>ori</code> הוא <b>בלי סימן</b>.</li></ol>\n<div class=\"lesson-ex\"><b>דוגמה:</b> <code>0x8D090004</code> = <code>100011 01000 01001 0000000000000100</code>. op=35 הוא lw, rs=8 (<code>&#36;t0</code>), rt=9 (<code>&#36;t1</code>), offset=4: <code>lw &#36;t1, 4(&#36;t0)</code>.<br>\n<code>0x2128FFF0</code>: op=8 (addi), rs=9, rt=8, imm=0xFFF0 = 65520 - 65536 = -16: <code>addi &#36;t0, &#36;t1, -16</code>.</div>\n<div class=\"lesson-trap\">⚠️ אותו imm של 0x8001: ב-<code>addi</code> הוא -32767, וב-<code>ori</code> הוא 32769.</div>"
    },
    "questions": [
     {
      "id": "mips_enc-C05-Q1",
      "question": "הפקודה `0x2128FFF0` בשפת מכונה היא בעצם פקודת האסמבלי:",
      "options": [
       {
        "id": "a",
        "value": "`addi \\$t1, \\$t0, -16`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">addi $t1, $t0, -16</code>"
       },
       {
        "id": "b",
        "value": "`ori \\$t0, \\$t1, -16`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">ori $t0, $t1, -16</code>"
       },
       {
        "id": "c",
        "value": "`addi \\$t0, \\$t1, -16`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">addi $t0, $t1, -16</code>"
       },
       {
        "id": "d",
        "value": "`addi \\$t0, \\$t1, 65520`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">addi $t0, $t1, 65520</code>"
       }
      ],
      "correctId": "c",
      "explanation": "`001000 01001 01000 1111111111110000` = 0x2128FFF0. op=8 הוא addi, rs=9 (`\\$t1`), rt=8 (`\\$t0`), imm=0xFFF0 שהוא -16, כלומר `addi \\$t0, \\$t1, -16`. המסיחים: `addi \\$t1, \\$t0, -16` ← rs ו-rt הוחלפו. `ori \\$t0, \\$t1, -16` ← opcode 8 הוא addi ולא ori. `addi \\$t0, \\$t1, 65520` ← ה-immediate נקרא בלי סימן, אבל addi מרחיב בסימן.",
      "recap": "op קובע את הפקודה · addi/lw/sw: imm עם סימן · ori: בלי סימן",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">0x2128FFF0</code> בשפת מכונה היא בעצם פקודת האסמבלי:",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">001000 01001 01000 1111111111110000</code> = 0x2128FFF0. op=8 הוא addi, rs=9 (<code class=\"tok\" dir=\"ltr\">$t1</code>), rt=8 (<code class=\"tok\" dir=\"ltr\">$t0</code>), imm=0xFFF0 שהוא -16, כלומר <code class=\"tok\" dir=\"ltr\">addi $t0, $t1, -16</code>. המסיחים: <code class=\"tok\" dir=\"ltr\">addi $t1, $t0, -16</code> ← rs ו-rt הוחלפו. <code class=\"tok\" dir=\"ltr\">ori $t0, $t1, -16</code> ← opcode 8 הוא addi ולא ori. <code class=\"tok\" dir=\"ltr\">addi $t0, $t1, 65520</code> ← ה-immediate נקרא בלי סימן, אבל addi מרחיב בסימן.",
      "recapHtml": "op קובע את הפקודה · addi/lw/sw: imm עם סימן · ori: בלי סימן"
     },
     {
      "id": "mips_enc-C05-Q2",
      "question": "הפקודה `0x35AC8001` בשפת מכונה היא בעצם פקודת האסמבלי:",
      "options": [
       {
        "id": "a",
        "value": "`ori \\$t4, \\$t5, 32769`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">ori $t4, $t5, 32769</code>"
       },
       {
        "id": "b",
        "value": "`ori \\$t5, \\$t4, 32769`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">ori $t5, $t4, 32769</code>"
       },
       {
        "id": "c",
        "value": "`addi \\$t4, \\$t5, 32769`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">addi $t4, $t5, 32769</code>"
       },
       {
        "id": "d",
        "value": "`ori \\$t4, \\$t5, 1`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">ori $t4, $t5, 1</code>"
       }
      ],
      "correctId": "a",
      "explanation": "`001101 01101 01100 1000000000000001` = 0x35AC8001. op=13 הוא ori, rs=13 (`\\$t5`), rt=12 (`\\$t4`), imm=0x8001 שהוא 32769, כלומר `ori \\$t4, \\$t5, 32769`. המסיחים: `ori \\$t5, \\$t4, 32769` ← rs ו-rt הוחלפו. `addi \\$t4, \\$t5, 32769` ← opcode 13 הוא ori ולא addi. `ori \\$t4, \\$t5, 1` ← נקרא רק הביט האחרון של ה-immediate, אבל ה-immediate הוא כל 16 הביטים (0x8001 = 32769).",
      "recap": "op קובע את הפקודה · addi/lw/sw: imm עם סימן · ori: בלי סימן",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">0x35AC8001</code> בשפת מכונה היא בעצם פקודת האסמבלי:",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">001101 01101 01100 1000000000000001</code> = 0x35AC8001. op=13 הוא ori, rs=13 (<code class=\"tok\" dir=\"ltr\">$t5</code>), rt=12 (<code class=\"tok\" dir=\"ltr\">$t4</code>), imm=0x8001 שהוא 32769, כלומר <code class=\"tok\" dir=\"ltr\">ori $t4, $t5, 32769</code>. המסיחים: <code class=\"tok\" dir=\"ltr\">ori $t5, $t4, 32769</code> ← rs ו-rt הוחלפו. <code class=\"tok\" dir=\"ltr\">addi $t4, $t5, 32769</code> ← opcode 13 הוא ori ולא addi. <code class=\"tok\" dir=\"ltr\">ori $t4, $t5, 1</code> ← נקרא רק הביט האחרון של ה-immediate, אבל ה-immediate הוא כל 16 הביטים (0x8001 = 32769).",
      "recapHtml": "op קובע את הפקודה · addi/lw/sw: imm עם סימן · ori: בלי סימן"
     },
     {
      "id": "mips_enc-C05-Q3",
      "question": "הפקודה `0xAC2B0010` בשפת מכונה היא בעצם פקודת האסמבלי:",
      "options": [
       {
        "id": "a",
        "value": "`sw \\$at, 16(\\$t3)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sw $at, 16($t3)</code>"
       },
       {
        "id": "b",
        "value": "`sw \\$t3, 16(\\$at)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sw $t3, 16($at)</code>"
       },
       {
        "id": "c",
        "value": "`lw \\$t3, 16(\\$at)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">lw $t3, 16($at)</code>"
       },
       {
        "id": "d",
        "value": "`sw \\$t3, 64(\\$at)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sw $t3, 64($at)</code>"
       }
      ],
      "correctId": "b",
      "explanation": "`101011 00001 01011 0000000000010000` = 0xAC2B0010. op=43 הוא sw, rs=1 (`\\$at`), rt=11 (`\\$t3`), imm=0x0010 שהוא 16, כלומר `sw \\$t3, 16(\\$at)`. המסיחים: `sw \\$at, 16(\\$t3)` ← rs ו-rt הוחלפו. `lw \\$t3, 16(\\$at)` ← opcode 43 הוא sw ולא lw. `sw \\$t3, 64(\\$at)` ← ה-offset כבר בבתים, אין להכפיל.",
      "recap": "op קובע את הפקודה · addi/lw/sw: imm עם סימן · ori: בלי סימן",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">0xAC2B0010</code> בשפת מכונה היא בעצם פקודת האסמבלי:",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">101011 00001 01011 0000000000010000</code> = 0xAC2B0010. op=43 הוא sw, rs=1 (<code class=\"tok\" dir=\"ltr\">$at</code>), rt=11 (<code class=\"tok\" dir=\"ltr\">$t3</code>), imm=0x0010 שהוא 16, כלומר <code class=\"tok\" dir=\"ltr\">sw $t3, 16($at)</code>. המסיחים: <code class=\"tok\" dir=\"ltr\">sw $at, 16($t3)</code> ← rs ו-rt הוחלפו. <code class=\"tok\" dir=\"ltr\">lw $t3, 16($at)</code> ← opcode 43 הוא sw ולא lw. <code class=\"tok\" dir=\"ltr\">sw $t3, 64($at)</code> ← ה-offset כבר בבתים, אין להכפיל.",
      "recapHtml": "op קובע את הפקודה · addi/lw/sw: imm עם סימן · ori: בלי סימן"
     },
     {
      "id": "mips_enc-C05-Q4",
      "question": "הפקודה `0x8FA9FFFC` בשפת מכונה היא בעצם פקודת האסמבלי:",
      "options": [
       {
        "id": "a",
        "value": "`lw \\$sp, -4(\\$t1)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">lw $sp, -4($t1)</code>"
       },
       {
        "id": "b",
        "value": "`sw \\$t1, -4(\\$sp)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sw $t1, -4($sp)</code>"
       },
       {
        "id": "c",
        "value": "`lw \\$t1, 65532(\\$sp)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">lw $t1, 65532($sp)</code>"
       },
       {
        "id": "d",
        "value": "`lw \\$t1, -4(\\$sp)`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">lw $t1, -4($sp)</code>"
       }
      ],
      "correctId": "d",
      "explanation": "`100011 11101 01001 1111111111111100` = 0x8FA9FFFC. op=35 הוא lw, rs=29 (`\\$sp`), rt=9 (`\\$t1`), imm=0xFFFC שהוא -4, כלומר `lw \\$t1, -4(\\$sp)`. המסיחים: `lw \\$sp, -4(\\$t1)` ← rs ו-rt הוחלפו. `sw \\$t1, -4(\\$sp)` ← opcode 35 הוא lw ולא sw. `lw \\$t1, 65532(\\$sp)` ← ה-offset נקרא בלי סימן.",
      "recap": "op קובע את הפקודה · addi/lw/sw: imm עם סימן · ori: בלי סימן",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">0x8FA9FFFC</code> בשפת מכונה היא בעצם פקודת האסמבלי:",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">100011 11101 01001 1111111111111100</code> = 0x8FA9FFFC. op=35 הוא lw, rs=29 (<code class=\"tok\" dir=\"ltr\">$sp</code>), rt=9 (<code class=\"tok\" dir=\"ltr\">$t1</code>), imm=0xFFFC שהוא -4, כלומר <code class=\"tok\" dir=\"ltr\">lw $t1, -4($sp)</code>. המסיחים: <code class=\"tok\" dir=\"ltr\">lw $sp, -4($t1)</code> ← rs ו-rt הוחלפו. <code class=\"tok\" dir=\"ltr\">sw $t1, -4($sp)</code> ← opcode 35 הוא lw ולא sw. <code class=\"tok\" dir=\"ltr\">lw $t1, 65532($sp)</code> ← ה-offset נקרא בלי סימן.",
      "recapHtml": "op קובע את הפקודה · addi/lw/sw: imm עם סימן · ori: בלי סימן"
     },
     {
      "id": "mips_enc-C05-Q5",
      "question": "הפקודה `0x20F600C8` בשפת מכונה היא בעצם פקודת האסמבלי:",
      "options": [
       {
        "id": "a",
        "value": "`addi \\$s6, \\$a3, 200`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">addi $s6, $a3, 200</code>"
       },
       {
        "id": "b",
        "value": "`addi \\$a3, \\$s6, 200`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">addi $a3, $s6, 200</code>"
       },
       {
        "id": "c",
        "value": "`ori \\$s6, \\$a3, 200`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">ori $s6, $a3, 200</code>"
       },
       {
        "id": "d",
        "value": "`addi \\$s6, \\$a3, 201`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">addi $s6, $a3, 201</code>"
       }
      ],
      "correctId": "a",
      "explanation": "`001000 00111 10110 0000000011001000` = 0x20F600C8. op=8 הוא addi, rs=7 (`\\$a3`), rt=22 (`\\$s6`), imm=0x00C8 שהוא 200, כלומר `addi \\$s6, \\$a3, 200`. המסיחים: `addi \\$a3, \\$s6, 200` ← rs ו-rt הוחלפו. `ori \\$s6, \\$a3, 200` ← opcode 8 הוא addi ולא ori. `addi \\$s6, \\$a3, 201` ← טעות בקריאת ה-immediate.",
      "recap": "op קובע את הפקודה · addi/lw/sw: imm עם סימן · ori: בלי סימן",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">0x20F600C8</code> בשפת מכונה היא בעצם פקודת האסמבלי:",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">001000 00111 10110 0000000011001000</code> = 0x20F600C8. op=8 הוא addi, rs=7 (<code class=\"tok\" dir=\"ltr\">$a3</code>), rt=22 (<code class=\"tok\" dir=\"ltr\">$s6</code>), imm=0x00C8 שהוא 200, כלומר <code class=\"tok\" dir=\"ltr\">addi $s6, $a3, 200</code>. המסיחים: <code class=\"tok\" dir=\"ltr\">addi $a3, $s6, 200</code> ← rs ו-rt הוחלפו. <code class=\"tok\" dir=\"ltr\">ori $s6, $a3, 200</code> ← opcode 8 הוא addi ולא ori. <code class=\"tok\" dir=\"ltr\">addi $s6, $a3, 201</code> ← טעות בקריאת ה-immediate.",
      "recapHtml": "op קובע את הפקודה · addi/lw/sw: imm עם סימן · ori: בלי סימן"
     },
     {
      "id": "mips_enc-C05-Q6",
      "question": "מילה שמתחילה בספרות `8F` (למשל `0x8FA90010`) היא איזו פקודה?",
      "options": [
       {
        "id": "a",
        "value": "`sw`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">sw</code>"
       },
       {
        "id": "b",
        "value": "`lw`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">lw</code>"
       },
       {
        "id": "c",
        "value": "`addi`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">addi</code>"
       },
       {
        "id": "d",
        "value": "`ori`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">ori</code>"
       }
      ],
      "correctId": "b",
      "explanation": "0x8F = 1000 1111, ששת הביטים הראשונים 100011 = 35, שהוא lw. המסיחים: `sw` ← sw היא op=43, כלומר מתחילה ב-AC עד AF. `addi` ← addi היא op=8, כלומר 20 עד 23. `ori` ← ori היא op=13, כלומר 34 עד 37.",
      "recap": "שתי הספרות הראשונות קובעות את op",
      "questionHtml": "מילה שמתחילה בספרות <code class=\"tok\" dir=\"ltr\">8F</code> (למשל <code class=\"tok\" dir=\"ltr\">0x8FA90010</code>) היא איזו פקודה?",
      "explanationHtml": "0x8F = 1000 1111, ששת הביטים הראשונים 100011 = 35, שהוא lw. המסיחים: <code class=\"tok\" dir=\"ltr\">sw</code> ← sw היא op=43, כלומר מתחילה ב-AC עד AF. <code class=\"tok\" dir=\"ltr\">addi</code> ← addi היא op=8, כלומר 20 עד 23. <code class=\"tok\" dir=\"ltr\">ori</code> ← ori היא op=13, כלומר 34 עד 37.",
      "recapHtml": "שתי הספרות הראשונות קובעות את op"
     },
     {
      "bankId": "24B-A-Q19",
      "recap": "op=13: ori, ו-imm בלי סימן",
      "recapHtml": "op=13: ori, ו-imm בלי סימן"
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "↪️",
    "title": "הסתעפויות וקפיצות",
    "goal": "לחשב offset של beq/bne ולקודד ולפענח j.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>ב-<code>beq rs, rt, L</code> ו-<code>bne rs, rt, L</code> שדה ה-immediate אינו כתובת. הוא <b>מספר המילים</b> מהפקודה שאחרי ההסתעפות אל היעד.</p>\n<div class=\"lesson-formula\"><span class=\"math-block\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\"><semantics><mrow><mi>i</mi><mi>m</mi><mi>m</mi><mo>=</mo><mfrac><mrow><mtext>target</mtext><mo>−</mo><mo stretchy=\"false\">(</mo><mi>P</mi><mi>C</mi><mo>+</mo><mn>4</mn><mo stretchy=\"false\">)</mo></mrow><mn>4</mn></mfrac></mrow><annotation encoding=\"application/x-tex\">imm = \\frac{\\text{target} - (PC+4)}{4}</annotation></semantics></math></span></div>\n<ol style=\"text-align:right\"><li>מחסרים את <b>PC+4</b> מכתובת היעד.</li><li>מחלקים ב-4 (המרה מבתים למילים).</li><li>שלילי (הסתעפות אחורה) נכתב במשלים ל-2 ב-16 ביט.</li><li>הקידוד: op (4 ל-beq, 5 ל-bne), rs, rt, imm. כאן rs הוא האוגר הראשון בכתיבה.</li></ol>\n<div class=\"lesson-ex\"><b>דוגמה:</b> <code>beq &#36;t0, &#36;t1, L</code> בכתובת 0x00400020 ו-L ב-0x00400040. <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>i</mi><mi>m</mi><mi>m</mi><mo>=</mo><mo stretchy=\"false\">(</mo><mn>0</mn><mi>x</mi><mn>40</mn><mo>−</mo><mn>0</mn><mi>x</mi><mn>24</mn><mo stretchy=\"false\">)</mo><mi mathvariant=\"normal\">/</mi><mn>4</mn><mo>=</mo><mn>7</mn></mrow><annotation encoding=\"application/x-tex\">imm = (0x40 - 0x24)/4 = 7</annotation></semantics></math></span>. הקידוד <code>000100 01000 01001 0000000000000111</code> = <code>0x11090007</code>.</div>\n<p><b>פענוח:</b> הכתובת שההסתעפות קופצת אליה היא <b>PC + 4 + 4 * imm</b>, כאשר imm נקרא עם סימן.</p>\n<h3>קפיצה j</h3>\n<p><code>j</code> היא J-type: op=2 ואחריו <b>target</b> של 26 ביט, שהוא הכתובת המוחלטת <b>חלקי 4</b>. בקפיצה, ארבעת הביטים העליונים של הכתובת נלקחים מ-PC+4, ובשאר: target * 4.</p>\n<div class=\"lesson-ex\"><b>דוגמה:</b> <code>j</code> ליעד 0x00400020 (בכתובת 0x00400000): target = 0x00400020 / 4 = 0x00100008, והמילה <code>0x08100008</code>.</div>\n<div class=\"lesson-trap\">⚠️ שלוש טעויות נפוצות: להחסיר מ-PC במקום מ-PC+4, להשאיר את ה-imm בבתים, ולחשב j כהפרש יחסי. ל-j הכתובת מוחלטת.</div>"
    },
    "questions": [
     {
      "id": "mips_enc-C06-Q1",
      "question": "הפקודה `beq \\$t0, \\$t1, L` נמצאת בכתובת `0x00400100`, והתווית L נמצאת בכתובת `0x00400140`. מהו ערך ה-immediate (מספר המילים) שבקידוד?",
      "options": [
       {
        "id": "a",
        "value": "16",
        "type": "text",
        "html": "16"
       },
       {
        "id": "b",
        "value": "60",
        "type": "text",
        "html": "60"
       },
       {
        "id": "c",
        "value": "15",
        "type": "text",
        "html": "15"
       },
       {
        "id": "d",
        "value": "-15",
        "type": "text",
        "html": "-15"
       }
      ],
      "correctId": "c",
      "explanation": "ההפרש מ-PC+4: 0x00400140 - 0x00400104 = 60 בתים, כלומר 15 מילים. המסיחים: 16 ← חישוב יחסית ל-PC ולא ל-PC+4. 60 ← ההפרש בבתים, בלי חלוקה ב-4. -15 ← הסימן הפוך.",
      "recap": "imm = (יעד - (PC+4)) / 4",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">beq $t0, $t1, L</code> נמצאת בכתובת <code class=\"tok\" dir=\"ltr\">0x00400100</code>, והתווית L נמצאת בכתובת <code class=\"tok\" dir=\"ltr\">0x00400140</code>. מהו ערך ה-immediate (מספר המילים) שבקידוד?",
      "explanationHtml": "ההפרש מ-PC+4: 0x00400140 - 0x00400104 = 60 בתים, כלומר 15 מילים. המסיחים: 16 ← חישוב יחסית ל-PC ולא ל-PC+4. 60 ← ההפרש בבתים, בלי חלוקה ב-4. -15 ← הסימן הפוך.",
      "recapHtml": "imm = (יעד - (PC+4)) / 4"
     },
     {
      "id": "mips_enc-C06-Q2",
      "question": "הפקודה `bne \\$s1, \\$s3, L` נמצאת בכתובת `0x00400200`, והתווית L נמצאת בכתובת `0x00400180`. מהו ערך שדה ה-immediate (16 הביטים התחתונים של הקידוד), בהקסה?",
      "options": [
       {
        "id": "a",
        "value": "`0xFFDF`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0xFFDF</code>"
       },
       {
        "id": "b",
        "value": "`0xFFE0`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0xFFE0</code>"
       },
       {
        "id": "c",
        "value": "`0xFF7C`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0xFF7C</code>"
       },
       {
        "id": "d",
        "value": "`0x0021`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x0021</code>"
       }
      ],
      "correctId": "a",
      "explanation": "imm = (0x00400180 - 0x00400204) / 4 = -33, וב-16 ביט (משלים ל-2) זה 0xFFDF. המסיחים: 0xFFE0 ← חישוב יחסית ל-PC ולא ל-PC+4. 0xFF7C ← ההפרש בבתים, בלי חלוקה ב-4. 0x0021 ← הסימן הפוך.",
      "recap": "imm = (יעד - (PC+4)) / 4, שלילי במשלים ל-2 ב-16 ביט",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">bne $s1, $s3, L</code> נמצאת בכתובת <code class=\"tok\" dir=\"ltr\">0x00400200</code>, והתווית L נמצאת בכתובת <code class=\"tok\" dir=\"ltr\">0x00400180</code>. מהו ערך שדה ה-immediate (16 הביטים התחתונים של הקידוד), בהקסה?",
      "explanationHtml": "imm = (0x00400180 - 0x00400204) / 4 = -33, וב-16 ביט (משלים ל-2) זה 0xFFDF. המסיחים: 0xFFE0 ← חישוב יחסית ל-PC ולא ל-PC+4. 0xFF7C ← ההפרש בבתים, בלי חלוקה ב-4. 0x0021 ← הסימן הפוך.",
      "recapHtml": "imm = (יעד - (PC+4)) / 4, שלילי במשלים ל-2 ב-16 ביט"
     },
     {
      "id": "mips_enc-C06-Q3",
      "question": "הפקודה `beq \\$s0, \\$s1, L` נמצאת בכתובת `0x00400400`, והתווית L נמצאת בכתובת `0x00400410`. מהו הקידוד בשפת מכונה של הפקודה?",
      "options": [
       {
        "id": "a",
        "value": "`0x12110004`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x12110004</code>"
       },
       {
        "id": "b",
        "value": "`0x1211000C`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x1211000C</code>"
       },
       {
        "id": "c",
        "value": "`0x16110003`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x16110003</code>"
       },
       {
        "id": "d",
        "value": "`0x12110003`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x12110003</code>"
       }
      ],
      "correctId": "d",
      "explanation": "imm = (0x00400410 - 0x00400404) / 4 = 3 = 0x0003. `000100 10000 10001 0000000000000011` = 0x12110003. המסיחים: 0x12110004 ← ה-immediate חושב יחסית ל-PC ולא ל-PC+4. 0x1211000C ← ה-immediate נשאר בבתים. 0x16110003 ← opcode של bne ולא של beq.",
      "recap": "beq/bne: op=4/5, rs, rt, ואז imm = (יעד - (PC+4)) / 4",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">beq $s0, $s1, L</code> נמצאת בכתובת <code class=\"tok\" dir=\"ltr\">0x00400400</code>, והתווית L נמצאת בכתובת <code class=\"tok\" dir=\"ltr\">0x00400410</code>. מהו הקידוד בשפת מכונה של הפקודה?",
      "explanationHtml": "imm = (0x00400410 - 0x00400404) / 4 = 3 = 0x0003. <code class=\"tok\" dir=\"ltr\">000100 10000 10001 0000000000000011</code> = 0x12110003. המסיחים: 0x12110004 ← ה-immediate חושב יחסית ל-PC ולא ל-PC+4. 0x1211000C ← ה-immediate נשאר בבתים. 0x16110003 ← opcode של bne ולא של beq.",
      "recapHtml": "beq/bne: op=4/5, rs, rt, ואז imm = (יעד - (PC+4)) / 4"
     },
     {
      "id": "mips_enc-C06-Q4",
      "question": "הפקודה `0x1509FFFB` נמצאת בכתובת `0x00400050`. מה כתובת היעד של ההסתעפות (כתובת L)?",
      "options": [
       {
        "id": "a",
        "value": "`0x0040003C`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x0040003C</code>"
       },
       {
        "id": "b",
        "value": "`0x00400040`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x00400040</code>"
       },
       {
        "id": "c",
        "value": "`0x0040004F`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x0040004F</code>"
       },
       {
        "id": "d",
        "value": "`0x0040004B`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x0040004B</code>"
       }
      ],
      "correctId": "b",
      "explanation": "`000101 01000 01001 1111111111111011` = 0x1509FFFB: op=5 הוא bne, rs=8, rt=9, imm=0xFFFB = -5. היעד: 0x00400050 + 4 + 4 * (-5) = 0x00400040. המסיחים: 0x0040003C ← חישוב יחסית ל-PC ולא ל-PC+4. 0x0040004F ← ה-imm לא הוכפל ב-4. 0x0040004B ← ה-imm לא הוכפל ב-4 וגם נמדד מ-PC.",
      "recap": "יעד = PC + 4 + 4 * imm",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">0x1509FFFB</code> נמצאת בכתובת <code class=\"tok\" dir=\"ltr\">0x00400050</code>. מה כתובת היעד של ההסתעפות (כתובת L)?",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">000101 01000 01001 1111111111111011</code> = 0x1509FFFB: op=5 הוא bne, rs=8, rt=9, imm=0xFFFB = -5. היעד: 0x00400050 + 4 + 4 * (-5) = 0x00400040. המסיחים: 0x0040003C ← חישוב יחסית ל-PC ולא ל-PC+4. 0x0040004F ← ה-imm לא הוכפל ב-4. 0x0040004B ← ה-imm לא הוכפל ב-4 וגם נמדד מ-PC.",
      "recapHtml": "יעד = PC + 4 + 4 * imm"
     },
     {
      "id": "mips_enc-C06-Q5",
      "question": "הפקודה `j L` נמצאת בכתובת `0x00400020`, והתווית L נמצאת בכתובת `0x00400100`. מהו הקידוד בשפת מכונה?",
      "options": [
       {
        "id": "a",
        "value": "`0x08400100`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x08400100</code>"
       },
       {
        "id": "b",
        "value": "`0x0C100040`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x0C100040</code>"
       },
       {
        "id": "c",
        "value": "`0x08100040`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x08100040</code>"
       },
       {
        "id": "d",
        "value": "`0x08000037`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x08000037</code>"
       }
      ],
      "correctId": "c",
      "explanation": "שדה target הוא הכתובת חלקי 4: 0x00400100 / 4 = 0x0100040. `000010 00000100000000000001000000` = 0x08100040. המסיחים: 0x08400100 ← הכתובת לא חולקה ב-4. 0x0C100040 ← opcode של jal (3) ולא של j (2). 0x08000037 ← חישוב יחסי כמו בהסתעפות, אבל j משתמשת בכתובת מוחלטת.",
      "recap": "j: target = כתובת / 4 (26 ביט), opcode 2",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">j L</code> נמצאת בכתובת <code class=\"tok\" dir=\"ltr\">0x00400020</code>, והתווית L נמצאת בכתובת <code class=\"tok\" dir=\"ltr\">0x00400100</code>. מהו הקידוד בשפת מכונה?",
      "explanationHtml": "שדה target הוא הכתובת חלקי 4: 0x00400100 / 4 = 0x0100040. <code class=\"tok\" dir=\"ltr\">000010 00000100000000000001000000</code> = 0x08100040. המסיחים: 0x08400100 ← הכתובת לא חולקה ב-4. 0x0C100040 ← opcode של jal (3) ולא של j (2). 0x08000037 ← חישוב יחסי כמו בהסתעפות, אבל j משתמשת בכתובת מוחלטת.",
      "recapHtml": "j: target = כתובת / 4 (26 ביט), opcode 2"
     },
     {
      "id": "mips_enc-C06-Q6",
      "question": "הפקודה `0x08000340` נמצאת בכתובת `0x10000200`. לאיזו כתובת היא קופצת?",
      "options": [
       {
        "id": "a",
        "value": "`0x10000D00`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x10000D00</code>"
       },
       {
        "id": "b",
        "value": "`0x00000D00`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x00000D00</code>"
       },
       {
        "id": "c",
        "value": "`0x00000340`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x00000340</code>"
       },
       {
        "id": "d",
        "value": "`0x10000F04`",
        "type": "text",
        "html": "<code class=\"tok\" dir=\"ltr\">0x10000F04</code>"
       }
      ],
      "correctId": "a",
      "explanation": "op=2 הוא j. כתובת היעד: ארבעת הביטים העליונים של PC+4 (0x10000204), ואחריהם target * 4 = 0x0000D00: 0x10000D00. המסיחים: 0x00000D00 ← הביטים העליונים של PC+4 נשכחו. 0x00000340 ← שדה ה-target לא הוכפל ב-4. 0x10000F04 ← חישוב יחסי כמו בהסתעפות.",
      "recap": "יעד j = ביטים עליונים של PC+4 ואחריהם target * 4",
      "questionHtml": "הפקודה <code class=\"tok\" dir=\"ltr\">0x08000340</code> נמצאת בכתובת <code class=\"tok\" dir=\"ltr\">0x10000200</code>. לאיזו כתובת היא קופצת?",
      "explanationHtml": "op=2 הוא j. כתובת היעד: ארבעת הביטים העליונים של PC+4 (0x10000204), ואחריהם target * 4 = 0x0000D00: 0x10000D00. המסיחים: 0x00000D00 ← הביטים העליונים של PC+4 נשכחו. 0x00000340 ← שדה ה-target לא הוכפל ב-4. 0x10000F04 ← חישוב יחסי כמו בהסתעפות.",
      "recapHtml": "יעד j = ביטים עליונים של PC+4 ואחריהם target * 4"
     },
     {
      "bankId": "23A-B-Q17",
      "recap": "imm = (יעד - (PC+4)) / 4, שלילי במשלים ל-2",
      "recapHtml": "imm = (יעד - (PC+4)) / 4, שלילי במשלים ל-2"
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "🧱",
    "title": "lui, ori ו-addi",
    "goal": "לחשב מה נשאר באוגר אחרי רצף lui/ori/addi.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>רוצים לטעון קבוע של 32 ביט, אבל ל-immediate יש רק 16 ביט. לכן עובדים בשני חלקים:</p>\n<ul><li><code>lui rt, imm</code>: ‏rt = imm &lt;&lt; 16. החצי העליון הוא imm, והתחתון אפס.</li>\n<li><code>ori rt, rs, imm</code>: ה-imm מורחב <b>באפסים</b> (zero-extend), ואז OR.</li>\n<li><code>addi rt, rs, imm</code>: ה-imm מורחב <b>בסימן</b> (sign-extend). אם ביט 15 דולק, כל 16 הביטים העליונים נדלקים, כלומר מוסיפים מספר שלילי.</li></ul>\n<div class=\"lesson-ex\"><b>דוגמה 1:</b> <code>lui &#36;t0, 0x1234</code> ואז <code>ori &#36;t0, &#36;t0, 0x5678</code> נותנים <code>0x12345678</code>.<br>\n<b>דוגמה 2:</b> <code>addi &#36;t1, &#36;0, 0xAAAA</code>: ‏0xAAAA מורחב ל-0xFFFFAAAA, ולכן &#36;t1 = <code>0xFFFFAAAA</code> ולא 0x0000AAAA.</div>\n<div class=\"lesson-trap\">⚠️ <b>lui ואחריה addi עם חצי תחתון שביט 15 שלו דולק:</b> <code>lui &#36;2, 0x1234</code> ואז <code>addi &#36;2, &#36;2, 0x8000</code> נותנים 0x12340000 + 0xFFFF8000 = <code>0x12338000</code>. החצי העליון קטן ב-1. כדי לקבל 0x12348000 עם addi צריך <code>lui &#36;2, 0x1235</code>. עם ori אין בעיה, כי הוא מורחב באפסים.</div>\n<div class=\"lesson-rule\">🔑 עוברים פקודה אחרי פקודה ומעדכנים את האוגר. בכל addi שואלים: האם ביט 15 דולק (הספרה הראשונה של ה-imm היא 8 עד F)? אם כן, מחסרים 0x10000 מהחצי העליון.</div>"
    },
    "questions": [
     {
      "id": "mips_enc-C07-Q1",
      "question": "מה יהיה באוגר `\\$t0` אחרי ביצוע הפקודות הבאות?\n```asm\nlui $t0, 0x1234\nori $t0, $t0, 0x5678\n```",
      "options": [
       {
        "id": "a",
        "value": "0x12345678",
        "type": "text",
        "html": "0x12345678"
       },
       {
        "id": "b",
        "value": "0x0000567C",
        "type": "text",
        "html": "0x0000567C"
       },
       {
        "id": "c",
        "value": "0x12355678",
        "type": "text",
        "html": "0x12355678"
       },
       {
        "id": "d",
        "value": "0x12335678",
        "type": "text",
        "html": "0x12335678"
       }
      ],
      "correctId": "a",
      "explanation": "אחרי `lui \\$t0, 0x1234` ב-`\\$t0` יש 0x12340000; אחרי `ori \\$t0, \\$t0, 0x5678` ב-`\\$t0` יש 0x12345678. המסיחים: 0x0000567C ← lui הוכנס לחצי התחתון, אבל lui כותב לחצי העליון. 0x12355678 ← חצי עליון גדול ב-1. 0x12335678 ← חצי עליון קטן ב-1.",
      "recap": "lui: חצי עליון · ori: בלי סימן · addi: מרחיב בסימן",
      "questionHtml": "מה יהיה באוגר <code class=\"tok\" dir=\"ltr\">$t0</code> אחרי ביצוע הפקודות הבאות?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lui $t0, 0x1234\nori $t0, $t0, 0x5678</code></pre>",
      "explanationHtml": "אחרי <code class=\"tok\" dir=\"ltr\">lui $t0, 0x1234</code> ב-<code class=\"tok\" dir=\"ltr\">$t0</code> יש 0x12340000; אחרי <code class=\"tok\" dir=\"ltr\">ori $t0, $t0, 0x5678</code> ב-<code class=\"tok\" dir=\"ltr\">$t0</code> יש 0x12345678. המסיחים: 0x0000567C ← lui הוכנס לחצי התחתון, אבל lui כותב לחצי העליון. 0x12355678 ← חצי עליון גדול ב-1. 0x12335678 ← חצי עליון קטן ב-1.",
      "recapHtml": "lui: חצי עליון · ori: בלי סימן · addi: מרחיב בסימן"
     },
     {
      "id": "mips_enc-C07-Q2",
      "question": "מה יהיה באוגר `\\$t1` אחרי ביצוע הפקודות הבאות?\n```asm\naddi $t1, $0, 0xAAAA\n```",
      "options": [
       {
        "id": "a",
        "value": "0x0000AAAA",
        "type": "text",
        "html": "0x0000AAAA"
       },
       {
        "id": "b",
        "value": "0xFFFEAAAA",
        "type": "text",
        "html": "0xFFFEAAAA"
       },
       {
        "id": "c",
        "value": "0xFFFFAAAA",
        "type": "text",
        "html": "0xFFFFAAAA"
       },
       {
        "id": "d",
        "value": "0xFFFF5555",
        "type": "text",
        "html": "0xFFFF5555"
       }
      ],
      "correctId": "c",
      "explanation": "אחרי `addi \\$t1, \\$0, 0xAAAA` ב-`\\$t1` יש 0xFFFFAAAA. המסיחים: 0x0000AAAA ← addi הורחב באפסים, אבל addi מרחיב בסימן. 0xFFFEAAAA ← חצי עליון קטן ב-1. 0xFFFF5555 ← החצי התחתון הפוך.",
      "recap": "lui: חצי עליון · ori: בלי סימן · addi: מרחיב בסימן",
      "questionHtml": "מה יהיה באוגר <code class=\"tok\" dir=\"ltr\">$t1</code> אחרי ביצוע הפקודות הבאות?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $t1, $0, 0xAAAA</code></pre>",
      "explanationHtml": "אחרי <code class=\"tok\" dir=\"ltr\">addi $t1, $0, 0xAAAA</code> ב-<code class=\"tok\" dir=\"ltr\">$t1</code> יש 0xFFFFAAAA. המסיחים: 0x0000AAAA ← addi הורחב באפסים, אבל addi מרחיב בסימן. 0xFFFEAAAA ← חצי עליון קטן ב-1. 0xFFFF5555 ← החצי התחתון הפוך.",
      "recapHtml": "lui: חצי עליון · ori: בלי סימן · addi: מרחיב בסימן"
     },
     {
      "id": "mips_enc-C07-Q3",
      "question": "מה יהיה באוגר `\\$t0` אחרי ביצוע הפקודות הבאות?\n```asm\nlui $t0, 0x00FF\naddi $t0, $t0, 0x8010\n```",
      "options": [
       {
        "id": "a",
        "value": "0x00FF8010",
        "type": "text",
        "html": "0x00FF8010"
       },
       {
        "id": "b",
        "value": "0x00FE8010",
        "type": "text",
        "html": "0x00FE8010"
       },
       {
        "id": "c",
        "value": "0xFFFF810F",
        "type": "text",
        "html": "0xFFFF810F"
       },
       {
        "id": "d",
        "value": "0x00FD8010",
        "type": "text",
        "html": "0x00FD8010"
       }
      ],
      "correctId": "b",
      "explanation": "אחרי `lui \\$t0, 0x00FF` ב-`\\$t0` יש 0x00FF0000; אחרי `addi \\$t0, \\$t0, 0x8010` ב-`\\$t0` יש 0x00FE8010. המסיחים: 0x00FF8010 ← addi הורחב באפסים, אבל addi מרחיב בסימן. 0xFFFF810F ← lui הוכנס לחצי התחתון, אבל lui כותב לחצי העליון. 0x00FD8010 ← חצי עליון קטן ב-1.",
      "recap": "lui: חצי עליון · ori: בלי סימן · addi: מרחיב בסימן",
      "questionHtml": "מה יהיה באוגר <code class=\"tok\" dir=\"ltr\">$t0</code> אחרי ביצוע הפקודות הבאות?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lui $t0, 0x00FF\naddi $t0, $t0, 0x8010</code></pre>",
      "explanationHtml": "אחרי <code class=\"tok\" dir=\"ltr\">lui $t0, 0x00FF</code> ב-<code class=\"tok\" dir=\"ltr\">$t0</code> יש 0x00FF0000; אחרי <code class=\"tok\" dir=\"ltr\">addi $t0, $t0, 0x8010</code> ב-<code class=\"tok\" dir=\"ltr\">$t0</code> יש 0x00FE8010. המסיחים: 0x00FF8010 ← addi הורחב באפסים, אבל addi מרחיב בסימן. 0xFFFF810F ← lui הוכנס לחצי התחתון, אבל lui כותב לחצי העליון. 0x00FD8010 ← חצי עליון קטן ב-1.",
      "recapHtml": "lui: חצי עליון · ori: בלי סימן · addi: מרחיב בסימן"
     },
     {
      "id": "mips_enc-C07-Q4",
      "question": "מה יהיה באוגר `\\$t0` אחרי ביצוע הפקודות הבאות?\n```asm\nlui $t0, 0x00FF\nori $t0, $t0, 0x8010\n```",
      "options": [
       {
        "id": "a",
        "value": "0xFFFF8010",
        "type": "text",
        "html": "0xFFFF8010"
       },
       {
        "id": "b",
        "value": "0x000080FF",
        "type": "text",
        "html": "0x000080FF"
       },
       {
        "id": "c",
        "value": "0x01008010",
        "type": "text",
        "html": "0x01008010"
       },
       {
        "id": "d",
        "value": "0x00FF8010",
        "type": "text",
        "html": "0x00FF8010"
       }
      ],
      "correctId": "d",
      "explanation": "אחרי `lui \\$t0, 0x00FF` ב-`\\$t0` יש 0x00FF0000; אחרי `ori \\$t0, \\$t0, 0x8010` ב-`\\$t0` יש 0x00FF8010. המסיחים: 0xFFFF8010 ← ori הורחב בסימן, אבל ori מורחב באפסים. 0x000080FF ← lui הוכנס לחצי התחתון, אבל lui כותב לחצי העליון. 0x01008010 ← חצי עליון גדול ב-1.",
      "recap": "lui: חצי עליון · ori: בלי סימן · addi: מרחיב בסימן",
      "questionHtml": "מה יהיה באוגר <code class=\"tok\" dir=\"ltr\">$t0</code> אחרי ביצוע הפקודות הבאות?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lui $t0, 0x00FF\nori $t0, $t0, 0x8010</code></pre>",
      "explanationHtml": "אחרי <code class=\"tok\" dir=\"ltr\">lui $t0, 0x00FF</code> ב-<code class=\"tok\" dir=\"ltr\">$t0</code> יש 0x00FF0000; אחרי <code class=\"tok\" dir=\"ltr\">ori $t0, $t0, 0x8010</code> ב-<code class=\"tok\" dir=\"ltr\">$t0</code> יש 0x00FF8010. המסיחים: 0xFFFF8010 ← ori הורחב בסימן, אבל ori מורחב באפסים. 0x000080FF ← lui הוכנס לחצי התחתון, אבל lui כותב לחצי העליון. 0x01008010 ← חצי עליון גדול ב-1.",
      "recapHtml": "lui: חצי עליון · ori: בלי סימן · addi: מרחיב בסימן"
     },
     {
      "id": "mips_enc-C07-Q5",
      "question": "איזה קטע קוד מכניס את הערך `0xABCD8000` לאוגר `\\$t0`? (הקטעים משתמשים ב-lui ואחריה addi.)",
      "options": [
       {
        "id": "a",
        "value": "```asm\nlui  $t0, 0xABCE\naddi $t0, $t0, 0x8000\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lui  $t0, 0xABCE\naddi $t0, $t0, 0x8000</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nlui  $t0, 0xABCD\naddi $t0, $t0, 0x8000\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lui  $t0, 0xABCD\naddi $t0, $t0, 0x8000</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\nlui  $t0, 0xABCC\naddi $t0, $t0, 0x8000\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lui  $t0, 0xABCC\naddi $t0, $t0, 0x8000</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nlui  $t0, 0xABCD\naddi $t0, $t0, 0x0800\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lui  $t0, 0xABCD\naddi $t0, $t0, 0x0800</code></pre>"
       }
      ],
      "correctId": "a",
      "explanation": "addi עם 0x8000 מוסיף 0xFFFF8000, ולכן צריך להגדיל את החצי העליון ב-1: 0xABCE0000 + 0xFFFF8000 = 0xABCD8000. המסיחים: ```asm\nlui  \\$t0, 0xABCD\naddi \\$t0, \\$t0, 0x8000\n``` ← התוצאה 0xABCC8000: ה-addi מחסיר 0x10000 מהחצי העליון. ```asm\nlui  $t0, 0xABCC\naddi $t0, $t0, 0x8000\n``` ← התוצאה 0xABCB8000, רחוק יותר. ```asm\nlui  \\$t0, 0xABCD\naddi \\$t0, \\$t0, 0x0800\n``` ← התוצאה 0xABCD0800: החצי התחתון שגוי.",
      "recap": "addi עם ביט 15 דולק ← מגדילים את ה-lui ב-1",
      "questionHtml": "איזה קטע קוד מכניס את הערך <code class=\"tok\" dir=\"ltr\">0xABCD8000</code> לאוגר <code class=\"tok\" dir=\"ltr\">$t0</code>? (הקטעים משתמשים ב-lui ואחריה addi.)",
      "explanationHtml": "addi עם 0x8000 מוסיף 0xFFFF8000, ולכן צריך להגדיל את החצי העליון ב-1: 0xABCE0000 + 0xFFFF8000 = 0xABCD8000. המסיחים: ``<code class=\"tok\" dir=\"ltr\">asm<br>lui  $t0, 0xABCD<br>addi $t0, $t0, 0x8000<br></code>`<code class=\"tok\" dir=\"ltr\"> ← התוצאה 0xABCC8000: ה-addi מחסיר 0x10000 מהחצי העליון. </code>`<code class=\"tok\" dir=\"ltr\">asm<br>lui  $t0, 0xABCC<br>addi $t0, $t0, 0x8000<br></code>`<code class=\"tok\" dir=\"ltr\"> ← התוצאה 0xABCB8000, רחוק יותר. </code>`<code class=\"tok\" dir=\"ltr\">asm<br>lui  $t0, 0xABCD<br>addi $t0, $t0, 0x0800<br></code>`` ← התוצאה 0xABCD0800: החצי התחתון שגוי.",
      "recapHtml": "addi עם ביט 15 דולק ← מגדילים את ה-lui ב-1"
     },
     {
      "id": "mips_enc-C07-Q6",
      "question": "מה יהיה באוגר `\\$t0` אחרי ביצוע הפקודות הבאות?\n```asm\nlui $t0, 0x4000\naddi $t0, $t0, -1\n```",
      "options": [
       {
        "id": "a",
        "value": "0x4000FFFF",
        "type": "text",
        "html": "0x4000FFFF"
       },
       {
        "id": "b",
        "value": "0x00003FFF",
        "type": "text",
        "html": "0x00003FFF"
       },
       {
        "id": "c",
        "value": "0x3FFFFFFF",
        "type": "text",
        "html": "0x3FFFFFFF"
       },
       {
        "id": "d",
        "value": "0x3FFEFFFF",
        "type": "text",
        "html": "0x3FFEFFFF"
       }
      ],
      "correctId": "c",
      "explanation": "אחרי `lui \\$t0, 0x4000` ב-`\\$t0` יש 0x40000000; אחרי `addi \\$t0, \\$t0, -1` ב-`\\$t0` יש 0x3FFFFFFF. המסיחים: 0x4000FFFF ← addi הורחב באפסים, אבל addi מרחיב בסימן. 0x00003FFF ← lui הוכנס לחצי התחתון, אבל lui כותב לחצי העליון. 0x3FFEFFFF ← חצי עליון קטן ב-1.",
      "recap": "lui: חצי עליון · ori: בלי סימן · addi: מרחיב בסימן",
      "questionHtml": "מה יהיה באוגר <code class=\"tok\" dir=\"ltr\">$t0</code> אחרי ביצוע הפקודות הבאות?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lui $t0, 0x4000\naddi $t0, $t0, -1</code></pre>",
      "explanationHtml": "אחרי <code class=\"tok\" dir=\"ltr\">lui $t0, 0x4000</code> ב-<code class=\"tok\" dir=\"ltr\">$t0</code> יש 0x40000000; אחרי <code class=\"tok\" dir=\"ltr\">addi $t0, $t0, -1</code> ב-<code class=\"tok\" dir=\"ltr\">$t0</code> יש 0x3FFFFFFF. המסיחים: 0x4000FFFF ← addi הורחב באפסים, אבל addi מרחיב בסימן. 0x00003FFF ← lui הוכנס לחצי התחתון, אבל lui כותב לחצי העליון. 0x3FFEFFFF ← חצי עליון קטן ב-1.",
      "recapHtml": "lui: חצי עליון · ori: בלי סימן · addi: מרחיב בסימן"
     },
     {
      "bankId": "23B-B-Q2",
      "recap": "lui, ואז addi שמרחיב בסימן",
      "recapHtml": "lui, ואז addi שמרחיב בסימן"
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "🏆",
    "title": "מבחן מסכם",
    "goal": "לפתור שאלות קידוד ופענוח בגודל מבחן.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "<p>זה כל הקורס בשאלות אמיתיות ממבחנים. הכללים שפותרים את כולן:</p>\n<ul><li><b>קידוד R:</b> ‏op=0, שדות <b>rs, rt, rd</b>, ‏funct (add 32, sub 34, and 36, or 37, xor 38, slt 42).</li>\n<li><b>קידוד I:</b> ‏op, rs, rt, imm16. שלילי במשלים ל-2. ‏lw/sw: האוגר שבסוגריים הוא rs.</li>\n<li><b>פענוח:</b> הקסה לביטים, חלוקה 6/5/5/5/5/6 או 6/5/5/16, ‏op קובע, ובאסמבלי rd (או rt) נכתב ראשון.</li>\n<li><b>הסתעפות:</b> ‏imm = (יעד - (PC+4)) / 4, ובפענוח יעד = PC + 4 + 4 * imm.</li>\n<li><b>טעינת קבועים:</b> ‏lui לחצי העליון, ‏ori באפסים, ‏addi בסימן.</li></ul>\n<div class=\"lesson-rule\">🔑 בכל שאלה: לפרק לשדות, להמיר לבסיס אחד, ורק אז להשוות לאופציות. רוב המסיחים הם שדות שהוחלפו או ‏imm שנקרא בלי סימן.</div>"
    },
    "questions": [
     {
      "bankId": "24A-A-Q2",
      "recap": "כל פקודה מעדכנת את האוגר, ו-addi מרחיב בסימן",
      "recapHtml": "כל פקודה מעדכנת את האוגר, ו-addi מרחיב בסימן"
     },
     {
      "bankId": "24B-A-Q17",
      "recap": "addi: ‏op=8, ‏rs ואז rt, ו-imm שלילי במשלים ל-2",
      "recapHtml": "addi: ‏op=8, ‏rs ואז rt, ו-imm שלילי במשלים ל-2"
     },
     {
      "bankId": "25B-A-Q17",
      "recap": "imm = (יעד - (PC+4)) / 4",
      "recapHtml": "imm = (יעד - (PC+4)) / 4"
     },
     {
      "bankId": "24A-A-Q19",
      "recap": "op=8: addi, ו-imm נקרא עם סימן",
      "recapHtml": "op=8: addi, ו-imm נקרא עם סימן"
     },
     {
      "bankId": "24S-A-Q17",
      "recap": "R: ‏rs, rt, rd, funct (xor = 38)",
      "recapHtml": "R: ‏rs, rt, rd, funct (xor = 38)"
     },
     {
      "bankId": "23A-B-Q19",
      "recap": "op=13: ori, ו-imm בלי סימן",
      "recapHtml": "op=13: ori, ו-imm בלי סימן"
     }
    ]
   }
  ]
 },
 "mips_trace": {
  "levels": [
   {
    "id": "C01",
    "order": 1,
    "icon": "🧭",
    "title": "קוראים פקודות ועוקבים אחרי אוגרים",
    "goal": "אחרי השלב הזה אפשר לבצע קטע של add, sub ו-addi ולכתוב את ערכי האוגרים בסופו.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<h3>אוגרים</h3>\n<p>במעבד MIPS יש 32 אוגרים, בשמות &#36;0 עד &#36;31. אוגר הוא תא קטן שמחזיק מספר של 32 ביט. האוגר &#36;0 תמיד שווה 0, וכל כתיבה אליו נזרקת.</p>\n<h3>שלוש פקודות</h3>\n<table><thead><tr><th>פקודה</th><th>משמעות</th></tr></thead><tbody>\n<tr><td><code>add &#36;d,&#36;s,&#36;t</code></td><td><code>&#36;d = &#36;s + &#36;t</code></td></tr>\n<tr><td><code>sub &#36;d,&#36;s,&#36;t</code></td><td><code>&#36;d = &#36;s - &#36;t</code></td></tr>\n<tr><td><code>addi &#36;d,&#36;s,k</code></td><td><code>&#36;d = &#36;s + k</code>, כש-<code>k</code> קבוע (גם שלילי)</td></tr></tbody></table>\n<div class=\"lesson-rule\">🔑 האוגר הראשון בפקודה הוא היעד, ורק הוא משתנה. שני האחרים רק נקראים.</div>\n<p>טעינת קבוע: <code>addi &#36;4,&#36;0,7</code> נותן &#36;4 = 7. העתקה: <code>add &#36;6,&#36;4,&#36;0</code> מעתיק את &#36;4 אל &#36;6.</p>\n<h3>איך עוקבים</h3>\n<p>הפקודות מתבצעות לפי הסדר, אחת אחרי השנייה. כותבים טבלה עם עמודה לכל אוגר ושורה לכל פקודה, ובכל שורה מעדכנים רק את אוגר היעד.</p>\n<div class=\"lesson-ex\">דוגמה:\n<pre>addi &#36;4,&#36;0,6\naddi &#36;5,&#36;0,2\nsub  &#36;6,&#36;4,&#36;5\nadd  &#36;4,&#36;4,&#36;6</pre>\nאחרי השורות: &#36;4=6, &#36;5=2, &#36;6=4, ובשורה האחרונה &#36;4 = 6 + 4 = 10.</div>\n<div class=\"lesson-trap\">⚠️ פקודה כמו <code>add &#36;4,&#36;4,&#36;5</code> קוראת את &#36;4 הישן ורק אחר כך כותבת. אין \"מקביליות\" בין שורות: כל שורה רואה את התוצאה של קודמותיה.</div>"
    },
    "questions": [
     {
      "id": "C01-Q1",
      "question": "מה ערך \\$6 בסוף הקטע?\n```asm\naddi $4,$0,9\naddi $5,$0,4\nsub $6,$4,$5\nadd $6,$6,$6\n```",
      "options": [
       {
        "id": "a",
        "value": "5",
        "type": "text",
        "html": "5"
       },
       {
        "id": "b",
        "value": "13",
        "type": "text",
        "html": "13"
       },
       {
        "id": "c",
        "value": "10",
        "type": "text",
        "html": "10"
       },
       {
        "id": "d",
        "value": "18",
        "type": "text",
        "html": "18"
       }
      ],
      "correctId": "c",
      "explanation": "אחרי `sub` מתקבל \\$6 = 9 - 4 = 5, ואז `add \\$6,\\$6,\\$6` מכפיל אותו ל-10. התשובה 5 היא הערך לפני ההכפלה, 13 הוא \\$4 + \\$5, ו-18 הוא 2 כפול \\$4.",
      "recap": "קוראים שורה אחר שורה, וכל פקודה משתמשת בערכים העדכניים.",
      "questionHtml": "מה ערך $6 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $4,$0,9\naddi $5,$0,4\nsub $6,$4,$5\nadd $6,$6,$6</code></pre>",
      "explanationHtml": "אחרי <code class=\"tok\" dir=\"ltr\">sub</code> מתקבל $6 = 9 - 4 = 5, ואז <code class=\"tok\" dir=\"ltr\">add $6,$6,$6</code> מכפיל אותו ל-10. התשובה 5 היא הערך לפני ההכפלה, 13 הוא $4 + $5, ו-18 הוא 2 כפול $4.",
      "recapHtml": "קוראים שורה אחר שורה, וכל פקודה משתמשת בערכים העדכניים."
     },
     {
      "id": "C01-Q2",
      "question": "מה ערך \\$5 בסוף הקטע?\n```asm\naddi $0,$0,5\naddi $4,$0,3\nadd $5,$4,$0\n```",
      "options": [
       {
        "id": "a",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "b",
        "value": "8",
        "type": "text",
        "html": "8"
       },
       {
        "id": "c",
        "value": "13",
        "type": "text",
        "html": "13"
       },
       {
        "id": "d",
        "value": "5",
        "type": "text",
        "html": "5"
       }
      ],
      "correctId": "a",
      "explanation": "הכתיבה לאוגר \\$0 נזרקת, ו-\\$0 נשאר 0. לכן \\$4 = 0 + 3 = 3 ו-\\$5 = 3 + 0 = 3. התשובות 8 ו-13 נובעות מההנחה השגויה ש-\\$0 הפך ל-5.",
      "recap": "אוגר \\$0 תמיד 0, כתיבה אליו לא משנה.",
      "questionHtml": "מה ערך $5 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $0,$0,5\naddi $4,$0,3\nadd $5,$4,$0</code></pre>",
      "explanationHtml": "הכתיבה לאוגר $0 נזרקת, ו-$0 נשאר 0. לכן $4 = 0 + 3 = 3 ו-$5 = 3 + 0 = 3. התשובות 8 ו-13 נובעות מההנחה השגויה ש-$0 הפך ל-5.",
      "recapHtml": "אוגר $0 תמיד 0, כתיבה אליו לא משנה."
     },
     {
      "id": "C01-Q3",
      "question": "בהתחלה \\$4 = 6 ו-\\$5 = 2. מה הערכים בסוף הקטע?\n```asm\nadd $4,$4,$5\nsub $5,$4,$5\nsub $4,$4,$5\n```",
      "options": [
       {
        "id": "a",
        "value": "\\$4=6, \\$5=2",
        "type": "text",
        "html": "$4=6, $5=2"
       },
       {
        "id": "b",
        "value": "\\$4=8, \\$5=6",
        "type": "text",
        "html": "$4=8, $5=6"
       },
       {
        "id": "c",
        "value": "\\$4=2, \\$5=8",
        "type": "text",
        "html": "$4=2, $5=8"
       },
       {
        "id": "d",
        "value": "\\$4=2, \\$5=6",
        "type": "text",
        "html": "$4=2, $5=6"
       }
      ],
      "correctId": "d",
      "explanation": "אחרי השורה הראשונה \\$4 = 8. אחריה \\$5 = 8 - 2 = 6. בשורה האחרונה \\$4 = 8 - 6 = 2. הקטע מחליף בין שני האוגרים. 6 ו-2 הם הערכים המקוריים (בלי לבצע את הקטע), והשאר שגיאות בעדכון באמצע.",
      "recap": "כל פקודה רואה את הערכים שהפקודות שלפניה כבר שינו.",
      "questionHtml": "בהתחלה $4 = 6 ו-$5 = 2. מה הערכים בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $4,$4,$5\nsub $5,$4,$5\nsub $4,$4,$5</code></pre>",
      "explanationHtml": "אחרי השורה הראשונה $4 = 8. אחריה $5 = 8 - 2 = 6. בשורה האחרונה $4 = 8 - 6 = 2. הקטע מחליף בין שני האוגרים. 6 ו-2 הם הערכים המקוריים (בלי לבצע את הקטע), והשאר שגיאות בעדכון באמצע.",
      "recapHtml": "כל פקודה רואה את הערכים שהפקודות שלפניה כבר שינו."
     },
     {
      "id": "C01-Q4",
      "question": "בהתחלה \\$4 = 10. מה ערך \\$5 בסוף הקטע?\n```asm\nadd $6,$4,$0\naddi $4,$4,1\nadd $5,$6,$4\n```",
      "options": [
       {
        "id": "a",
        "value": "22",
        "type": "text",
        "html": "22"
       },
       {
        "id": "b",
        "value": "21",
        "type": "text",
        "html": "21"
       },
       {
        "id": "c",
        "value": "20",
        "type": "text",
        "html": "20"
       },
       {
        "id": "d",
        "value": "11",
        "type": "text",
        "html": "11"
       }
      ],
      "correctId": "b",
      "explanation": "\\$6 הוא עותק של \\$4 לפני השינוי, כלומר 10. אחר כך \\$4 = 11, ולכן \\$5 = 10 + 11 = 21. התשובה 22 מניחה ש-\\$6 גם הוא 11, והתשובה 20 מניחה ש-\\$4 לא השתנה.",
      "recap": "העתקה עם \\$0 שומרת את הערך הישן.",
      "questionHtml": "בהתחלה $4 = 10. מה ערך $5 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $6,$4,$0\naddi $4,$4,1\nadd $5,$6,$4</code></pre>",
      "explanationHtml": "$6 הוא עותק של $4 לפני השינוי, כלומר 10. אחר כך $4 = 11, ולכן $5 = 10 + 11 = 21. התשובה 22 מניחה ש-$6 גם הוא 11, והתשובה 20 מניחה ש-$4 לא השתנה.",
      "recapHtml": "העתקה עם $0 שומרת את הערך הישן."
     },
     {
      "id": "C01-Q5",
      "question": "מה ערך \\$6 בסוף הקטע?\n```asm\naddi $4,$0,-3\nadd $5,$4,$4\nsub $6,$5,$4\n```",
      "options": [
       {
        "id": "a",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "b",
        "value": "-9",
        "type": "text",
        "html": "-9"
       },
       {
        "id": "c",
        "value": "-3",
        "type": "text",
        "html": "-3"
       },
       {
        "id": "d",
        "value": "-6",
        "type": "text",
        "html": "-6"
       }
      ],
      "correctId": "c",
      "explanation": "\\$4 = -3, \\$5 = -6, ואז \\$6 = -6 - (-3) = -3. התשובה -9 מתקבלת מחיבור במקום חיסור, ו-3 היא שגיאת סימן.",
      "recap": "קבוע ב-addi יכול להיות שלילי.",
      "questionHtml": "מה ערך $6 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $4,$0,-3\nadd $5,$4,$4\nsub $6,$5,$4</code></pre>",
      "explanationHtml": "$4 = -3, $5 = -6, ואז $6 = -6 - (-3) = -3. התשובה -9 מתקבלת מחיבור במקום חיסור, ו-3 היא שגיאת סימן.",
      "recapHtml": "קבוע ב-addi יכול להיות שלילי."
     }
    ]
   },
   {
    "id": "C02",
    "order": 2,
    "icon": "✖️",
    "title": "חשבון בלי פקודת כפל",
    "goal": "אחרי השלב הזה אפשר לתרגם ביטוי כמו a = 3*a - 2*b לפקודות add ו-sub, בלי לשנות את b.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>בפקודות של הקורס אין כפל ואין הזזה. את הכפל ב-2 עושים בחיבור עצמי: <code>add &#36;4,&#36;4,&#36;4</code> נותן &#36;4 = 2 כפול &#36;4.</p>\n<h3>מתכון</h3>\n<ul><li>n הכפלות עצמיות ברצף נותנות פי <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n</annotation></semantics></math></span>: פעמיים - פי 4, שלוש פעמים - פי 8.</li>\n<li>מקדם אחר מפרקים לסכום: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>3</mn><mi>a</mi><mo>=</mo><mn>2</mn><mi>a</mi><mo>+</mo><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">3a = 2a + a</annotation></semantics></math></span>, <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mi>a</mi><mo>=</mo><mn>4</mn><mi>a</mi><mo>+</mo><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">5a = 4a + a</annotation></semantics></math></span>.</span></li>\n<li>כשצריך כפולה של b בלי לשנות אותו, מחשבים אותה באוגר עזר: <code>add &#36;1,&#36;5,&#36;5</code> נותן &#36;1 = 2b ו-&#36;5 לא משתנה.</li>\n<li>הכפלה חלה על כל מה שכבר חושב עד אותו רגע, ולכן סדר הפקודות משנה את התוצאה.</li></ul>\n<div class=\"lesson-ex\">דוגמה: <code>a = 3*a - b</code> כש-a ב-&#36;4 ו-b ב-&#36;5:\n<pre>add &#36;1,&#36;4,&#36;4    # &#36;1 = 2a\nadd &#36;4,&#36;4,&#36;1    # a = 3a\nsub &#36;4,&#36;4,&#36;5    # a = 3a - b</pre></div>\n<div class=\"lesson-trap\">⚠️ <code>add &#36;5,&#36;5,&#36;5</code> משנה את b עצמו. בשאלות \"תרגום שגוי\" זו בדיוק הטעות: הערך של a נכון, אבל b נהרס.</div>"
    },
    "questions": [
     {
      "id": "C02-Q1",
      "question": "אוגר \\$4 מחזיק את a. איזה קטע מחשב `a = 4*a`?",
      "options": [
       {
        "id": "a",
        "value": "```asm\nadd $4,$4,$4\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $4,$4,$4</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nadd $4,$4,$4\nadd $4,$4,$4\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $4,$4,$4\nadd $4,$4,$4</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\nadd $4,$4,$4\nadd $4,$4,$4\nadd $4,$4,$4\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $4,$4,$4\nadd $4,$4,$4\nadd $4,$4,$4</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nadd $4,$4,$5\nadd $4,$4,$5\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $4,$4,$5\nadd $4,$4,$5</code></pre>"
       }
      ],
      "correctId": "b",
      "explanation": "הכפלה כפולה: a -> 2a -> 4a. קטע עם הכפלה אחת נותן רק 2a, שלוש הכפלות נותנות 8a, והחיבור עם \\$5 מוסיף את b ולא מכפיל.",
      "recap": "n הכפלות עצמיות נותנות פי $2^n$.",
      "questionHtml": "אוגר $4 מחזיק את a. איזה קטע מחשב <code class=\"tok\" dir=\"ltr\">a = 4*a</code>?",
      "explanationHtml": "הכפלה כפולה: a -&gt; 2a -&gt; 4a. קטע עם הכפלה אחת נותן רק 2a, שלוש הכפלות נותנות 8a, והחיבור עם $5 מוסיף את b ולא מכפיל.",
      "recapHtml": "n הכפלות עצמיות נותנות פי <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C02-Q2",
      "question": "\\$4 הוא a ו-\\$5 הוא b. איזה קטע מחשב `a = 2*a + b` ומשאיר את b ללא שינוי?",
      "options": [
       {
        "id": "a",
        "value": "```asm\nadd $4,$4,$5\nadd $4,$4,$4\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $4,$4,$5\nadd $4,$4,$4</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nadd $5,$5,$4\nadd $4,$4,$5\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $5,$5,$4\nadd $4,$4,$5</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\nadd $4,$4,$4\nsub $4,$4,$5\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $4,$4,$4\nsub $4,$4,$5</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nadd $4,$4,$4\nadd $4,$4,$5\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $4,$4,$4\nadd $4,$4,$5</code></pre>"
       }
      ],
      "correctId": "d",
      "explanation": "קודם מכפילים את a ורק אחר כך מוסיפים את b. בסדר ההפוך מתקבל 2a + 2b, כי ההכפלה חלה גם על b שנוסף. הקטע השלישי משנה את b, והאחרון מחסר את b במקום לחבר.",
      "recap": "אם מכפילים אחרי הפעולה, מכפילים גם את מה שכבר נוסף.",
      "questionHtml": "$4 הוא a ו-$5 הוא b. איזה קטע מחשב <code class=\"tok\" dir=\"ltr\">a = 2*a + b</code> ומשאיר את b ללא שינוי?",
      "explanationHtml": "קודם מכפילים את a ורק אחר כך מוסיפים את b. בסדר ההפוך מתקבל 2a + 2b, כי ההכפלה חלה גם על b שנוסף. הקטע השלישי משנה את b, והאחרון מחסר את b במקום לחבר.",
      "recapHtml": "אם מכפילים אחרי הפעולה, מכפילים גם את מה שכבר נוסף."
     },
     {
      "id": "C02-Q3",
      "question": "\\$4 הוא a ו-\\$5 הוא b, ומותר להשתמש ב-\\$1 כאוגר עזר. איזה קטע מחשב `a = 3*a - b` ומשאיר את b?",
      "options": [
       {
        "id": "a",
        "value": "```asm\nadd $1,$4,$4\nadd $4,$4,$1\nsub $4,$4,$5\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $1,$4,$4\nadd $4,$4,$1\nsub $4,$4,$5</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nadd $1,$4,$4\nadd $4,$4,$1\nadd $4,$4,$5\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $1,$4,$4\nadd $4,$4,$1\nadd $4,$4,$5</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\nadd $4,$4,$4\nsub $4,$4,$5\nadd $4,$4,$4\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $4,$4,$4\nsub $4,$4,$5\nadd $4,$4,$4</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nadd $4,$4,$4\nadd $4,$4,$4\nsub $4,$4,$5\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $4,$4,$4\nadd $4,$4,$4\nsub $4,$4,$5</code></pre>"
       }
      ],
      "correctId": "a",
      "explanation": "\\$1 = 2a, אחר כך a + 2a = 3a, ולבסוף מחסרים b. הקטע השני מוסיף את b במקום לחסר (3a + b). בשלישי מתקבל 2(2a - b) = 4a - 2b, וברביעי 4a - b.",
      "recap": "פירוק המקדם לסכום של כפולות של 2 ושימוש ב-\\$1 לשמירת ביניים.",
      "questionHtml": "$4 הוא a ו-$5 הוא b, ומותר להשתמש ב-$1 כאוגר עזר. איזה קטע מחשב <code class=\"tok\" dir=\"ltr\">a = 3*a - b</code> ומשאיר את b?",
      "explanationHtml": "$1 = 2a, אחר כך a + 2a = 3a, ולבסוף מחסרים b. הקטע השני מוסיף את b במקום לחסר (3a + b). בשלישי מתקבל 2(2a - b) = 4a - 2b, וברביעי 4a - b.",
      "recapHtml": "פירוק המקדם לסכום של כפולות של 2 ושימוש ב-$1 לשמירת ביניים."
     },
     {
      "id": "C02-Q4",
      "question": "\\$4 הוא a ו-\\$5 הוא b, ומותר להשתמש ב-\\$1, אבל b צריך להישאר ללא שינוי. איזה קטע הוא תרגום **שגוי** של `a = 2*a - 2*b`?",
      "options": [
       {
        "id": "a",
        "value": "```asm\nsub $4,$4,$5\nadd $4,$4,$4\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>sub $4,$4,$5\nadd $4,$4,$4</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nadd $1,$5,$5\nadd $4,$4,$4\nsub $4,$4,$1\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $1,$5,$5\nadd $4,$4,$4\nsub $4,$4,$1</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\nadd $4,$4,$4\nadd $5,$5,$5\nsub $4,$4,$5\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $4,$4,$4\nadd $5,$5,$5\nsub $4,$4,$5</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nadd $4,$4,$4\nsub $4,$4,$5\nsub $4,$4,$5\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $4,$4,$4\nsub $4,$4,$5\nsub $4,$4,$5</code></pre>"
       }
      ],
      "correctId": "c",
      "explanation": "בקטע c (השלישי) a מקבל את הערך הנכון 2a - 2b, אבל `add \\$5,\\$5,\\$5` משנה את b עצמו, ולכן התרגום שגוי כשצריך לשמור על b. בשאר הקטעים b לא נכתב: $2(a-b)$, או 2b ב-\\$1, או $2a-b-b$.",
      "recap": "כתיבה לאוגר של b הורסת את b גם אם הערך של a יצא נכון.",
      "questionHtml": "$4 הוא a ו-$5 הוא b, ומותר להשתמש ב-$1, אבל b צריך להישאר ללא שינוי. איזה קטע הוא תרגום <strong>שגוי</strong> של <code class=\"tok\" dir=\"ltr\">a = 2*a - 2*b</code>?",
      "explanationHtml": "בקטע c (השלישי) a מקבל את הערך הנכון 2a - 2b, אבל <code class=\"tok\" dir=\"ltr\">add $5,$5,$5</code> משנה את b עצמו, ולכן התרגום שגוי כשצריך לשמור על b. בשאר הקטעים b לא נכתב: <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mo stretchy=\"false\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo stretchy=\"false\">)</mo></mrow><annotation encoding=\"application/x-tex\">2(a-b)</annotation></semantics></math></span>, או 2b ב-$1, או <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>a</mi><mo>−</mo><mi>b</mi><mo>−</mo><mi>b</mi></mrow><annotation encoding=\"application/x-tex\">2a-b-b</annotation></semantics></math></span>.</span>",
      "recapHtml": "כתיבה לאוגר של b הורסת את b גם אם הערך של a יצא נכון."
     },
     {
      "id": "C02-Q5",
      "question": "\\$4 הוא a. איזה קטע מחשב `a = 5*a`? מותר להשתמש ב-\\$1.",
      "options": [
       {
        "id": "a",
        "value": "```asm\nadd $4,$4,$4\nadd $4,$4,$4\nadd $4,$4,$4\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $4,$4,$4\nadd $4,$4,$4\nadd $4,$4,$4</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nadd $1,$4,$4\nadd $4,$1,$1\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $1,$4,$4\nadd $4,$1,$1</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\nadd $1,$4,$4\nadd $1,$1,$1\nadd $4,$4,$1\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $1,$4,$4\nadd $1,$1,$1\nadd $4,$4,$1</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nadd $1,$4,$4\nadd $4,$4,$1\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $1,$4,$4\nadd $4,$4,$1</code></pre>"
       }
      ],
      "correctId": "c",
      "explanation": "$5a = 4a + a$: \\$1 הופך ל-2a ואז ל-4a, ומוסיפים את a המקורי. הקטע השני נותן 8a, השלישי נותן 4a (שוכח להוסיף a), והאחרון נותן 3a.",
      "recap": "$5a = 4a + a$, ומחשבים את 4a בעזרת אוגר עזר.",
      "questionHtml": "$4 הוא a. איזה קטע מחשב <code class=\"tok\" dir=\"ltr\">a = 5*a</code>? מותר להשתמש ב-$1.",
      "explanationHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mi>a</mi><mo>=</mo><mn>4</mn><mi>a</mi><mo>+</mo><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">5a = 4a + a</annotation></semantics></math></span>: $1 הופך ל-2a ואז ל-4a, ומוסיפים את a המקורי. הקטע השני נותן 8a, השלישי נותן 4a (שוכח להוסיף a), והאחרון נותן 3a.",
      "recapHtml": "<span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>5</mn><mi>a</mi><mo>=</mo><mn>4</mn><mi>a</mi><mo>+</mo><mi>a</mi></mrow><annotation encoding=\"application/x-tex\">5a = 4a + a</annotation></semantics></math></span>, ומחשבים את 4a בעזרת אוגר עזר."
     },
     {
      "bankId": "24S-A-Q10",
      "recap": "מכפילים לפי הצורך ושומרים את b בלי כתיבה אליו.",
      "recapHtml": "מכפילים לפי הצורך ושומרים את b בלי כתיבה אליו."
     }
    ]
   },
   {
    "id": "C03",
    "order": 3,
    "icon": "🔀",
    "title": "השוואה והסתעפות: slt, beq, bne, j",
    "goal": "אחרי השלב הזה אפשר לעקוב אחרי קטע עם קפיצות ולדעת אילו שורות מתבצעות.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<table><thead><tr><th>פקודה</th><th>משמעות</th></tr></thead><tbody>\n<tr><td><code>slt &#36;d,&#36;s,&#36;t</code></td><td>&#36;d = 1 אם &#36;s &lt; &#36;t (עם סימן), אחרת 0</td></tr>\n<tr><td><code>beq &#36;s,&#36;t,L</code></td><td>אם &#36;s = &#36;t ממשיכים מהתווית L</td></tr>\n<tr><td><code>bne &#36;s,&#36;t,L</code></td><td>אם &#36;s &ne; &#36;t ממשיכים מהתווית L</td></tr>\n<tr><td><code>j L</code></td><td>קופצים תמיד אל L</td></tr></tbody></table>\n<p>תווית (למשל <code>L:</code> או <code>end:</code>) היא שם של שורה. הסתעפות שלא מתקיימת פשוט ממשיכה לשורה הבאה. קפיצה בלתי מותנית אפשר לכתוב גם <code>beq &#36;0,&#36;0,L</code>, כי &#36;0 שווה לעצמו תמיד.</p>\n<div class=\"lesson-rule\">🔑 את התנאי \"a &lt; b\" בודקים בשני שלבים: <code>slt &#36;1,a,b</code> ואז הסתעפות לפי &#36;1. כש-&#36;1 = 0 המשמעות היא \"לא קטן\", כלומר גדול או שווה.</div>\n<h3>איך עוקבים</h3>\n<p>מסמנים שורה נוכחית ומבצעים אותה. אם זו הסתעפות שהתקיימה, עוברים לשורת התווית, ואחרת לשורה הבאה. סופרים כל ביצוע של שורה.</p>\n<div class=\"lesson-ex\">דוגמה:\n<pre>addi &#36;4,&#36;0,0\nbeq  &#36;4,&#36;0,L    # מתקיימת\naddi &#36;5,&#36;0,1    # מדולגת\nL: addi &#36;6,&#36;0,9</pre>\nמתבצעות 3 פקודות, &#36;5 נשאר 0 ו-&#36;6 = 9.</div>\n<div class=\"lesson-trap\">⚠️ <code>slt</code> נותן 0 גם כשהערכים שווים, והוא מחשיב מספרים שליליים כקטנים ממספרים חיוביים.</div>"
    },
    "questions": [
     {
      "id": "C03-Q1",
      "question": "מה ערכי \\$6 ו-\\$7 בסוף הקטע?\n```asm\naddi $4,$0,-2\naddi $5,$0,3\nslt $6,$4,$5\nslt $7,$5,$4\n```",
      "options": [
       {
        "id": "a",
        "value": "\\$6=0, \\$7=1",
        "type": "text",
        "html": "$6=0, $7=1"
       },
       {
        "id": "b",
        "value": "\\$6=1, \\$7=1",
        "type": "text",
        "html": "$6=1, $7=1"
       },
       {
        "id": "c",
        "value": "\\$6=1, \\$7=0",
        "type": "text",
        "html": "$6=1, $7=0"
       },
       {
        "id": "d",
        "value": "\\$6=0, \\$7=0",
        "type": "text",
        "html": "$6=0, $7=0"
       }
      ],
      "correctId": "c",
      "explanation": "`slt` משווה עם סימן: -2 < 3, ולכן \\$6 = 1, ו-3 < -2 לא נכון ולכן \\$7 = 0. התשובה השנייה מתקבלת אם מתייחסים ל-(-2) כאל מספר גדול חסר סימן.",
      "recap": "slt נותן 1 כשהאוגר הראשון קטן מהשני, בהשוואה עם סימן.",
      "questionHtml": "מה ערכי $6 ו-$7 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $4,$0,-2\naddi $5,$0,3\nslt $6,$4,$5\nslt $7,$5,$4</code></pre>",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">slt</code> משווה עם סימן: -2 &lt; 3, ולכן $6 = 1, ו-3 &lt; -2 לא נכון ולכן $7 = 0. התשובה השנייה מתקבלת אם מתייחסים ל-(-2) כאל מספר גדול חסר סימן.",
      "recapHtml": "slt נותן 1 כשהאוגר הראשון קטן מהשני, בהשוואה עם סימן."
     },
     {
      "id": "C03-Q2",
      "question": "מה ערך \\$6 בסוף הקטע?\n```asm\naddi $4,$0,5\naddi $5,$0,5\nbeq $4,$5,L\naddi $6,$0,1\nL: addi $6,$6,10\n```",
      "options": [
       {
        "id": "a",
        "value": "11",
        "type": "text",
        "html": "11"
       },
       {
        "id": "b",
        "value": "10",
        "type": "text",
        "html": "10"
       },
       {
        "id": "c",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "d",
        "value": "0",
        "type": "text",
        "html": "0"
       }
      ],
      "correctId": "b",
      "explanation": "\\$4 = \\$5, ולכן `beq` מתקיימת וקופצת אל L. השורה `addi \\$6,\\$0,1` מדולגת, \\$6 נשאר 0 ואז מקבל 10. התשובה 11 מניחה שהשורה בוצעה.",
      "recap": "הסתעפות שמתקיימת מדלגת על השורות שבינה לבין התווית.",
      "questionHtml": "מה ערך $6 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $4,$0,5\naddi $5,$0,5\nbeq $4,$5,L\naddi $6,$0,1\nL: addi $6,$6,10</code></pre>",
      "explanationHtml": "$4 = $5, ולכן <code class=\"tok\" dir=\"ltr\">beq</code> מתקיימת וקופצת אל L. השורה <code class=\"tok\" dir=\"ltr\">addi $6,$0,1</code> מדולגת, $6 נשאר 0 ואז מקבל 10. התשובה 11 מניחה שהשורה בוצעה.",
      "recapHtml": "הסתעפות שמתקיימת מדלגת על השורות שבינה לבין התווית."
     },
     {
      "id": "C03-Q3",
      "question": "מה ערך \\$6 בסוף הקטע?\n```asm\naddi $4,$0,3\naddi $5,$0,8\nslt $1,$4,$5\nbne $1,$0,yes\naddi $6,$0,100\nj end\nyes: addi $6,$0,200\nend:\n```",
      "options": [
       {
        "id": "a",
        "value": "100",
        "type": "text",
        "html": "100"
       },
       {
        "id": "b",
        "value": "300",
        "type": "text",
        "html": "300"
       },
       {
        "id": "c",
        "value": "0",
        "type": "text",
        "html": "0"
       },
       {
        "id": "d",
        "value": "200",
        "type": "text",
        "html": "200"
       }
      ],
      "correctId": "d",
      "explanation": "3 < 8, לכן \\$1 = 1 ו-`bne` קופצת אל yes, שם \\$6 = 200. השורות `addi \\$6,\\$0,100` ו-`j end` לא מתבצעות. 300 הוא סכום של שני המסלולים, שאי אפשר לעבור בשניהם.",
      "recap": "bne קופצת כשהאוגרים שונים, כלומר כש-\\$1 אינו 0.",
      "questionHtml": "מה ערך $6 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $4,$0,3\naddi $5,$0,8\nslt $1,$4,$5\nbne $1,$0,yes\naddi $6,$0,100\nj end\nyes: addi $6,$0,200\nend:</code></pre>",
      "explanationHtml": "3 &lt; 8, לכן $1 = 1 ו-<code class=\"tok\" dir=\"ltr\">bne</code> קופצת אל yes, שם $6 = 200. השורות <code class=\"tok\" dir=\"ltr\">addi $6,$0,100</code> ו-<code class=\"tok\" dir=\"ltr\">j end</code> לא מתבצעות. 300 הוא סכום של שני המסלולים, שאי אפשר לעבור בשניהם.",
      "recapHtml": "bne קופצת כשהאוגרים שונים, כלומר כש-$1 אינו 0."
     },
     {
      "id": "C03-Q4",
      "question": "כמה פקודות מתבצעות בפועל (לא כמה שורות יש בקטע)?\n```asm\naddi $4,$0,0\nbeq $4,$0,L\naddi $5,$0,1\naddi $5,$5,1\naddi $5,$5,1\nL: addi $6,$0,9\n```",
      "options": [
       {
        "id": "a",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "b",
        "value": "4",
        "type": "text",
        "html": "4"
       },
       {
        "id": "c",
        "value": "5",
        "type": "text",
        "html": "5"
       },
       {
        "id": "d",
        "value": "6",
        "type": "text",
        "html": "6"
       }
      ],
      "correctId": "a",
      "explanation": "מתבצעות `addi \\$4`, אחר כך `beq` שמתקיימת וקופצת, ואז `addi \\$6` בתווית L. שלוש השורות באמצע מדולגות. 6 הוא מספר השורות בקטע.",
      "recap": "סופרים רק שורות שבאמת הורצו.",
      "questionHtml": "כמה פקודות מתבצעות בפועל (לא כמה שורות יש בקטע)?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $4,$0,0\nbeq $4,$0,L\naddi $5,$0,1\naddi $5,$5,1\naddi $5,$5,1\nL: addi $6,$0,9</code></pre>",
      "explanationHtml": "מתבצעות <code class=\"tok\" dir=\"ltr\">addi $4</code>, אחר כך <code class=\"tok\" dir=\"ltr\">beq</code> שמתקיימת וקופצת, ואז <code class=\"tok\" dir=\"ltr\">addi $6</code> בתווית L. שלוש השורות באמצע מדולגות. 6 הוא מספר השורות בקטע.",
      "recapHtml": "סופרים רק שורות שבאמת הורצו."
     },
     {
      "id": "C03-Q5",
      "question": "מה ערך \\$7 בסוף הקטע?\n```asm\naddi $4,$0,5\naddi $5,$0,5\nslt $6,$4,$5\nbeq $6,$0,L\naddi $7,$0,1\nL: addi $7,$7,2\n```",
      "options": [
       {
        "id": "a",
        "value": "3",
        "type": "text",
        "html": "3"
       },
       {
        "id": "b",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "c",
        "value": "1",
        "type": "text",
        "html": "1"
       },
       {
        "id": "d",
        "value": "0",
        "type": "text",
        "html": "0"
       }
      ],
      "correctId": "b",
      "explanation": "5 אינו קטן מ-5, ולכן \\$6 = 0. אז `beq \\$6,\\$0,L` מתקיימת (שני האוגרים 0), השורה עם `addi \\$7,\\$0,1` מדולגת ו-\\$7 = 0 + 2 = 2. התשובה 3 מניחה ש-slt נותן 1 גם בשוויון.",
      "recap": "slt הוא מחמיר: בשוויון התוצאה 0, ו-beq עם \\$0 קופצת.",
      "questionHtml": "מה ערך $7 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $4,$0,5\naddi $5,$0,5\nslt $6,$4,$5\nbeq $6,$0,L\naddi $7,$0,1\nL: addi $7,$7,2</code></pre>",
      "explanationHtml": "5 אינו קטן מ-5, ולכן $6 = 0. אז <code class=\"tok\" dir=\"ltr\">beq $6,$0,L</code> מתקיימת (שני האוגרים 0), השורה עם <code class=\"tok\" dir=\"ltr\">addi $7,$0,1</code> מדולגת ו-$7 = 0 + 2 = 2. התשובה 3 מניחה ש-slt נותן 1 גם בשוויון.",
      "recapHtml": "slt הוא מחמיר: בשוויון התוצאה 0, ו-beq עם $0 קופצת."
     }
    ]
   },
   {
    "id": "C04",
    "order": 4,
    "icon": "🌿",
    "title": "if ו-else בין C לאסמבלי",
    "goal": "אחרי השלב הזה אפשר לתרגם if ו-if/else מ-C לאסמבלי ובחזרה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<table><thead><tr><th>תנאי ב-C</th><th>בדיקה</th><th>קופצים לדלג כש...</th></tr></thead><tbody>\n<tr><td>a &lt; b</td><td><code>slt &#36;1,a,b</code></td><td>&#36;1 = 0 (<code>beq</code>)</td></tr>\n<tr><td>a &gt; b</td><td><code>slt &#36;1,b,a</code></td><td>&#36;1 = 0 (<code>beq</code>)</td></tr>\n<tr><td>a &ge; b</td><td><code>slt &#36;1,a,b</code></td><td>&#36;1 = 1 (<code>bne</code>)</td></tr>\n<tr><td>a &le; b</td><td><code>slt &#36;1,b,a</code></td><td>&#36;1 = 1 (<code>bne</code>)</td></tr>\n<tr><td>a == b</td><td>ישירות</td><td><code>bne a,b,skip</code></td></tr>\n<tr><td>a != b</td><td>ישירות</td><td><code>beq a,b,skip</code></td></tr></tbody></table>\n<div class=\"lesson-rule\">🔑 ההסתעפות קופצת מעל הגוף כשהתנאי לא מתקיים. לכן היא תמיד ההפוכה לתנאי שכתוב ב-C.</div>\n<p>מבנה של if/else:</p>\n<pre>    (בדיקה, קפיצה אל else כשהתנאי לא מתקיים)\n    (then)\n    beq &#36;0,&#36;0,end\nelse: (else)\nend:</pre>\n<div class=\"lesson-ex\">דוגמה: <code>if (a &gt; b) a = 0;</code> עם a ב-&#36;4 ו-b ב-&#36;5:\n<pre>slt &#36;1,&#36;5,&#36;4\nbeq &#36;1,&#36;0,end\nadd &#36;4,&#36;0,&#36;0\nend:</pre>\nכש-a = 2 ו-b = 2 מתקבל &#36;1 = 0, מדלגים ו-a נשאר 2. כש-a = 5 ו-b = 2, &#36;1 = 1 ו-a הופך ל-0.</div>\n<div class=\"lesson-trap\">⚠️ שוויון: a &ge; b ו-a &gt; b שונים רק כש-a = b, ולכן תמיד בודקים את מקרה השוויון. ואל תשכחו את ה-<code>beq &#36;0,&#36;0,end</code> בסוף ה-then, אחרת גם ה-else מתבצע.</div>\n<p>כשצריך לקרוא קוד אסמבלי ולחזור ל-C, ממפים את האוגרים למשתנים ומתרגמים את ההסתעפות ההפוכה בחזרה לתנאי.</p>"
    },
    "questions": [
     {
      "id": "C04-Q1",
      "question": "a ב-\\$4 ו-b ב-\\$5. איזה קטע מתרגם את `if (a == b) a = a+b; else a = a-b;`?",
      "options": [
       {
        "id": "a",
        "value": "```asm\nbeq $4,$5,L1\nadd $4,$4,$5\nbeq $0,$0,end\nL1: sub $4,$4,$5\nend:\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>beq $4,$5,L1\nadd $4,$4,$5\nbeq $0,$0,end\nL1: sub $4,$4,$5\nend:</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nbne $4,$5,L1\nadd $4,$4,$5\nL1: sub $4,$4,$5\nend:\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>bne $4,$5,L1\nadd $4,$4,$5\nL1: sub $4,$4,$5\nend:</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\nbne $4,$5,L1\nadd $4,$4,$5\nbeq $0,$0,end\nL1: sub $4,$4,$5\nend:\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>bne $4,$5,L1\nadd $4,$4,$5\nbeq $0,$0,end\nL1: sub $4,$4,$5\nend:</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nbne $4,$5,L1\nsub $4,$4,$5\nbeq $0,$0,end\nL1: add $4,$4,$5\nend:\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>bne $4,$5,L1\nsub $4,$4,$5\nbeq $0,$0,end\nL1: add $4,$4,$5\nend:</code></pre>"
       }
      ],
      "correctId": "c",
      "explanation": "קופצים אל ה-else כשהתנאי לא מתקיים, כלומר `bne`. בסוף ה-then חייבים לדלג מעל ה-else (`beq \\$0,\\$0,end`). בקטע השני התנאי הפוך, בשלישי חסר הדילוג ולכן אחרי ה-then מתבצע גם ה-else, וברביעי ה-then וה-else הוחלפו.",
      "recap": "קופצים אל ה-else בתנאי ההפוך, ובסוף ה-then מדלגים מעליו.",
      "questionHtml": "a ב-$4 ו-b ב-$5. איזה קטע מתרגם את <code class=\"tok\" dir=\"ltr\">if (a == b) a = a+b; else a = a-b;</code>?",
      "explanationHtml": "קופצים אל ה-else כשהתנאי לא מתקיים, כלומר <code class=\"tok\" dir=\"ltr\">bne</code>. בסוף ה-then חייבים לדלג מעל ה-else (<code class=\"tok\" dir=\"ltr\">beq $0,$0,end</code>). בקטע השני התנאי הפוך, בשלישי חסר הדילוג ולכן אחרי ה-then מתבצע גם ה-else, וברביעי ה-then וה-else הוחלפו.",
      "recapHtml": "קופצים אל ה-else בתנאי ההפוך, ובסוף ה-then מדלגים מעליו."
     },
     {
      "id": "C04-Q2",
      "question": "a ב-\\$4 ו-b ב-\\$5. איזה קטע מתרגם את `if (a > b) a = 0;`?",
      "options": [
       {
        "id": "a",
        "value": "```asm\nslt $1,$5,$4\nbeq $1,$0,end\nadd $4,$0,$0\nend:\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $1,$5,$4\nbeq $1,$0,end\nadd $4,$0,$0\nend:</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nslt $1,$4,$5\nbeq $1,$0,end\nadd $4,$0,$0\nend:\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $1,$4,$5\nbeq $1,$0,end\nadd $4,$0,$0\nend:</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\nslt $1,$5,$4\nbne $1,$0,end\nadd $4,$0,$0\nend:\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $1,$5,$4\nbne $1,$0,end\nadd $4,$0,$0\nend:</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nslt $1,$4,$5\nbne $1,$0,end\nadd $4,$0,$0\nend:\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $1,$4,$5\nbne $1,$0,end\nadd $4,$0,$0\nend:</code></pre>"
       }
      ],
      "correctId": "a",
      "explanation": "a > b זה b < a, לכן `slt \\$1,\\$5,\\$4`. הגוף מבוצע כש-\\$1 = 1, ולכן מדלגים כש-\\$1 = 0 (`beq`). השני בודק a < b, השלישי מדלג בדיוק כשהתנאי מתקיים, והרביעי מבצע את הגוף גם בשוויון.",
      "recap": "a > b הוא slt עם האוגרים מוחלפים, ומדלגים בהסתעפות ההפוכה.",
      "questionHtml": "a ב-$4 ו-b ב-$5. איזה קטע מתרגם את <code class=\"tok\" dir=\"ltr\">if (a &gt; b) a = 0;</code>?",
      "explanationHtml": "a &gt; b זה b &lt; a, לכן <code class=\"tok\" dir=\"ltr\">slt $1,$5,$4</code>. הגוף מבוצע כש-$1 = 1, ולכן מדלגים כש-$1 = 0 (<code class=\"tok\" dir=\"ltr\">beq</code>). השני בודק a &lt; b, השלישי מדלג בדיוק כשהתנאי מתקיים, והרביעי מבצע את הגוף גם בשוויון.",
      "recapHtml": "a &gt; b הוא slt עם האוגרים מוחלפים, ומדלגים בהסתעפות ההפוכה."
     },
     {
      "id": "C04-Q3",
      "question": "a ב-\\$4 ו-b ב-\\$5. מה קוד ה-C המתאים לקטע הבא?\n```asm\nslt $1,$4,$5\nbne $1,$0,L\nsub $4,$4,$5\nbeq $0,$0,end\nL: sub $5,$5,$4\nend:\n```",
      "options": [
       {
        "id": "a",
        "value": "```c\nif (a < b) a = a - b;\nelse b = b - a;\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>if (a &lt; b) a = a - b;\nelse b = b - a;</code></pre>"
       },
       {
        "id": "b",
        "value": "```c\nif (a < b) b = b - a;\nelse a = a - b;\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>if (a &lt; b) b = b - a;\nelse a = a - b;</code></pre>"
       },
       {
        "id": "c",
        "value": "```c\nif (a >= b) b = b - a;\nelse a = a - b;\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>if (a &gt;= b) b = b - a;\nelse a = a - b;</code></pre>"
       },
       {
        "id": "d",
        "value": "```c\nif (a <= b) b = b - a;\nelse a = a - b;\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>if (a &lt;= b) b = b - a;\nelse a = a - b;</code></pre>"
       }
      ],
      "correctId": "b",
      "explanation": "`bne \\$1,\\$0,L` קופצת כש-a < b, ושם מבוצע b = b - a. אחרת (a >= b) מבוצע a = a - b. באפשרות השנייה הגופים מוחלפים, בשלישית התנאי הפוך, וברביעית התנאי כולל שוויון: כש-a = b הקטע המקורי מבצע a = a - b ולא b = b - a.",
      "recap": "הסתעפות על \\$1 שאינו אפס אומרת שתנאי ה-slt התקיים.",
      "questionHtml": "a ב-$4 ו-b ב-$5. מה קוד ה-C המתאים לקטע הבא?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $1,$4,$5\nbne $1,$0,L\nsub $4,$4,$5\nbeq $0,$0,end\nL: sub $5,$5,$4\nend:</code></pre>",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">bne $1,$0,L</code> קופצת כש-a &lt; b, ושם מבוצע b = b - a. אחרת (a &gt;= b) מבוצע a = a - b. באפשרות השנייה הגופים מוחלפים, בשלישית התנאי הפוך, וברביעית התנאי כולל שוויון: כש-a = b הקטע המקורי מבצע a = a - b ולא b = b - a.",
      "recapHtml": "הסתעפות על $1 שאינו אפס אומרת שתנאי ה-slt התקיים."
     },
     {
      "id": "C04-Q4",
      "question": "a ב-\\$7, b ב-\\$9, c ב-\\$5. איזה קטע מתרגם את `if (a <= b) c = a+b; else c = a-b;`?",
      "options": [
       {
        "id": "a",
        "value": "```asm\nslt $1,$7,$9\nbne $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $1,$7,$9\nbne $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nslt $1,$9,$7\nbeq $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $1,$9,$7\nbeq $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\nslt $1,$7,$9\nbeq $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $1,$7,$9\nbeq $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nslt $1,$9,$7\nbne $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $1,$9,$7\nbne $1,$0,L1\nadd $5,$7,$9\nbeq $0,$0,end\nL1: sub $5,$7,$9\nend:</code></pre>"
       }
      ],
      "correctId": "d",
      "explanation": "a <= b זה \"לא (b < a)\". לכן `slt \\$1,\\$9,\\$7`, וכשהוא 1 (כלומר a > b) קופצים אל ה-else. בשני הקטעים האחרונים נבדק a < b ולכן בשוויון נבחר הענף הלא נכון, ובשלישי הענפים מוחלפים.",
      "recap": "a <= b: משווים b < a וקופצים ל-else כשהתוצאה 1.",
      "questionHtml": "a ב-$7, b ב-$9, c ב-$5. איזה קטע מתרגם את <code class=\"tok\" dir=\"ltr\">if (a &lt;= b) c = a+b; else c = a-b;</code>?",
      "explanationHtml": "a &lt;= b זה \"לא (b &lt; a)\". לכן <code class=\"tok\" dir=\"ltr\">slt $1,$9,$7</code>, וכשהוא 1 (כלומר a &gt; b) קופצים אל ה-else. בשני הקטעים האחרונים נבדק a &lt; b ולכן בשוויון נבחר הענף הלא נכון, ובשלישי הענפים מוחלפים.",
      "recapHtml": "a &lt;= b: משווים b &lt; a וקופצים ל-else כשהתוצאה 1."
     },
     {
      "bankId": "22B-B-Q13",
      "recap": "קוראים slt ואת כיוון ההסתעפות כדי להחזיר את התנאי המקורי.",
      "recapHtml": "קוראים slt ואת כיוון ההסתעפות כדי להחזיר את התנאי המקורי."
     },
     {
      "bankId": "24B-A-Q13",
      "recap": "הסתעפות על 0 אומרת \"התנאי לא התקיים\", וממנה מוצאים את ה-else.",
      "recapHtml": "הסתעפות על 0 אומרת \"התנאי לא התקיים\", וממנה מוצאים את ה-else."
     }
    ]
   },
   {
    "id": "C05",
    "order": 5,
    "icon": "🔁",
    "title": "לולאות: מעקב וספירה",
    "goal": "אחרי השלב הזה אפשר לעקוב אחרי לולאה, לדעת כמה פעמים הגוף רץ וכמה פקודות מתבצעות.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>לולאה היא תווית בראש, בדיקת יציאה, גוף, וקפיצה חזרה:</p>\n<pre>lp:  beq &#36;3,&#36;5,done    # יציאה אם i == n\n     (גוף)\n     addi &#36;3,&#36;3,1       # i++\n     j   lp\ndone:</pre>\n<ul><li><b>while / for:</b> הבדיקה בראש, ולכן הגוף עשוי לא להתבצע בכלל.</li>\n<li><b>do-while:</b> הגוף קודם ואז בדיקה עם הסתעפות חזרה אל התווית (<code>bne</code> חזרה), ולכן הגוף מתבצע לפחות פעם אחת.</li></ul>\n<h3>מעקב</h3>\n<p>טבלה עם שורה לכל איטרציה ועמודה לכל אוגר. מסיימים כשהבדיקה גורמת ליציאה, ואז קובעים מה הלולאה מחשבת (סכום, חזקה, ספירה).</p>\n<h3>ספירת פקודות</h3>\n<div class=\"lesson-rule\">🔑 מספר הפקודות = פקודות אתחול + (מספר איטרציות כפול פקודות בכל איטרציה, כולל הבדיקה והקפיצה חזרה) + פקודות הבדיקה האחרונה שיוצאת מהלולאה.</div>\n<div class=\"lesson-ex\">דוגמה: &#36;5 = 4 בהתחלה.\n<pre>addi &#36;4,&#36;0,0\nlp: beq &#36;5,&#36;0,end\naddi &#36;4,&#36;4,3\naddi &#36;5,&#36;5,-1\nj lp\nend:</pre>\nכל איטרציה: 4 פקודות, ויש 4 איטרציות. אתחול 1, ועוד beq אחרון שיוצא: 1 + 16 + 1 = 18. התוצאה &#36;4 = 12.</div>\n<div class=\"lesson-trap\">⚠️ שוכחים את הבדיקה האחרונה שיוצאת, ושוכחים לבדוק מה קורה כשהלולאה לא רצה בכלל (n = 0).</div>"
    },
    "questions": [
     {
      "id": "C05-Q1",
      "question": "מה ערך \\$4 בסוף הקטע?\n```asm\naddi $4,$0,0\naddi $5,$0,1\naddi $6,$0,6\nlp: slt $1,$5,$6\nbeq $1,$0,end\nadd $4,$4,$5\naddi $5,$5,1\nj lp\nend:\n```",
      "options": [
       {
        "id": "a",
        "value": "21",
        "type": "text",
        "html": "21"
       },
       {
        "id": "b",
        "value": "15",
        "type": "text",
        "html": "15"
       },
       {
        "id": "c",
        "value": "10",
        "type": "text",
        "html": "10"
       },
       {
        "id": "d",
        "value": "6",
        "type": "text",
        "html": "6"
       }
      ],
      "correctId": "b",
      "explanation": "הלולאה רצה כל עוד \\$5 < 6, כלומר עבור \\$5 = 1,2,3,4,5, ו-\\$4 צובר 1+2+3+4+5 = 15. התשובה 21 כוללת גם את 6, ו-10 נעצרת מוקדם מדי.",
      "recap": "מעקב אחרי לולאה: טבלה עם שורה לכל איטרציה.",
      "questionHtml": "מה ערך $4 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $4,$0,0\naddi $5,$0,1\naddi $6,$0,6\nlp: slt $1,$5,$6\nbeq $1,$0,end\nadd $4,$4,$5\naddi $5,$5,1\nj lp\nend:</code></pre>",
      "explanationHtml": "הלולאה רצה כל עוד $5 &lt; 6, כלומר עבור $5 = 1,2,3,4,5, ו-$4 צובר 1+2+3+4+5 = 15. התשובה 21 כוללת גם את 6, ו-10 נעצרת מוקדם מדי.",
      "recapHtml": "מעקב אחרי לולאה: טבלה עם שורה לכל איטרציה."
     },
     {
      "id": "C05-Q2",
      "question": "כמה פקודות מתבצעות בסך הכול בקטע של השאלה הקודמת?\n```asm\naddi $4,$0,0\naddi $5,$0,1\naddi $6,$0,6\nlp: slt $1,$5,$6\nbeq $1,$0,end\nadd $4,$4,$5\naddi $5,$5,1\nj lp\nend:\n```",
      "options": [
       {
        "id": "a",
        "value": "28",
        "type": "text",
        "html": "28"
       },
       {
        "id": "b",
        "value": "30",
        "type": "text",
        "html": "30"
       },
       {
        "id": "c",
        "value": "33",
        "type": "text",
        "html": "33"
       },
       {
        "id": "d",
        "value": "25",
        "type": "text",
        "html": "25"
       }
      ],
      "correctId": "b",
      "explanation": "שלוש פקודות אתחול. כל איטרציה מבצעת חמש פקודות (slt, beq, add, addi, j) ויש 5 איטרציות: 25. בסוף נעשים slt ו-beq אחרונים שיוצאים מהלולאה: 2. הסכום 3 + 25 + 2 = 30.",
      "recap": "פקודות = אתחול + איטרציות כפול גוף + הבדיקה האחרונה.",
      "questionHtml": "כמה פקודות מתבצעות בסך הכול בקטע של השאלה הקודמת?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $4,$0,0\naddi $5,$0,1\naddi $6,$0,6\nlp: slt $1,$5,$6\nbeq $1,$0,end\nadd $4,$4,$5\naddi $5,$5,1\nj lp\nend:</code></pre>",
      "explanationHtml": "שלוש פקודות אתחול. כל איטרציה מבצעת חמש פקודות (slt, beq, add, addi, j) ויש 5 איטרציות: 25. בסוף נעשים slt ו-beq אחרונים שיוצאים מהלולאה: 2. הסכום 3 + 25 + 2 = 30.",
      "recapHtml": "פקודות = אתחול + איטרציות כפול גוף + הבדיקה האחרונה."
     },
     {
      "id": "C05-Q3",
      "question": "\\$6 מחזיק את n (מספר שלם אי-שלילי). מה מחשב הקטע ל-\\$4?\n```asm\naddi $4,$0,1\nlp: beq $6,$0,end\nadd $4,$4,$4\naddi $6,$6,-1\nj lp\nend:\n```",
      "options": [
       {
        "id": "a",
        "value": "\\$4 = $2n$",
        "type": "text",
        "html": "$4 = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>n</mi></mrow><annotation encoding=\"application/x-tex\">2n</annotation></semantics></math></span>"
       },
       {
        "id": "b",
        "value": "\\$4 = $n^2$",
        "type": "text",
        "html": "$4 = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup></mrow><annotation encoding=\"application/x-tex\">n^2</annotation></semantics></math></span>"
       },
       {
        "id": "c",
        "value": "\\$4 = $2^n$",
        "type": "text",
        "html": "$4 = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n</annotation></semantics></math></span>"
       },
       {
        "id": "d",
        "value": "\\$4 = $n+1$",
        "type": "text",
        "html": "$4 = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><annotation encoding=\"application/x-tex\">n+1</annotation></semantics></math></span>"
       }
      ],
      "correctId": "c",
      "explanation": "\\$4 מתחיל ב-1 ומוכפל ב-2 בכל איטרציה, ויש n איטרציות. לכן $2^n$. בבדיקה ב-n = 3 מתקבל 8, ואילו $2n = 6$, $n^2 = 9$, $n+1 = 4$.",
      "recap": "גוף שמכפיל פי 2 שחוזר n פעמים נותן $2^n$.",
      "questionHtml": "$6 מחזיק את n (מספר שלם אי-שלילי). מה מחשב הקטע ל-$4?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $4,$0,1\nlp: beq $6,$0,end\nadd $4,$4,$4\naddi $6,$6,-1\nj lp\nend:</code></pre>",
      "explanationHtml": "$4 מתחיל ב-1 ומוכפל ב-2 בכל איטרציה, ויש n איטרציות. לכן <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n</annotation></semantics></math></span>. בבדיקה ב-n = 3 מתקבל 8, ואילו <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mn>2</mn><mi>n</mi><mo>=</mo><mn>6</mn></mrow><annotation encoding=\"application/x-tex\">2n = 6</annotation></semantics></math></span>, <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>=</mo><mn>9</mn></mrow><annotation encoding=\"application/x-tex\">n^2 = 9</annotation></semantics></math></span>, <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>4</mn></mrow><annotation encoding=\"application/x-tex\">n+1 = 4</annotation></semantics></math></span>.</span>",
      "recapHtml": "גוף שמכפיל פי 2 שחוזר n פעמים נותן <span class=\"math-run\" dir=\"ltr\"><span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>n</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^n</annotation></semantics></math></span>.</span>"
     },
     {
      "id": "C05-Q4",
      "question": "\\$5 מחזיק את n, ו-x ב-\\$4. איזו לולאת C שקולה לקטע (לכל n, גם 0 ושלילי)?\n```asm\naddi $4,$0,0\nlp: addi $4,$4,2\naddi $5,$5,-1\nslt $1,$0,$5\nbne $1,$0,lp\n```",
      "options": [
       {
        "id": "a",
        "value": "```c\ndo { x = x + 2; n = n - 1; } while (n > 0);\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>do { x = x + 2; n = n - 1; } while (n &gt; 0);</code></pre>"
       },
       {
        "id": "b",
        "value": "```c\nwhile (n > 0) { x = x + 2; n = n - 1; }\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>while (n &gt; 0) { x = x + 2; n = n - 1; }</code></pre>"
       },
       {
        "id": "c",
        "value": "```c\ndo { x = x + 2; n = n - 1; } while (n >= 0);\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>do { x = x + 2; n = n - 1; } while (n &gt;= 0);</code></pre>"
       },
       {
        "id": "d",
        "value": "```c\ndo { x = x + 2; n = n - 1; } while (n != 0);\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"c\"><code>do { x = x + 2; n = n - 1; } while (n != 0);</code></pre>"
       }
      ],
      "correctId": "a",
      "explanation": "הבדיקה נמצאת בסוף הגוף, ולכן הגוף מתבצע לפחות פעם אחת: do-while. התנאי הוא \\$5 > 0 (slt עם \\$0 משמאל ו-bne חזרה). ב-while רגיל עם n = 0 הגוף לא מתבצע בכלל. עם n >= 0 הלולאה מתבצעת פעם אחת יותר, ועם n != 0 היא לא נעצרת כש-n מתחיל ב-0 או שלילי.",
      "recap": "בדיקה בסוף הגוף היא do-while: הגוף מתבצע לפחות פעם אחת.",
      "questionHtml": "$5 מחזיק את n, ו-x ב-$4. איזו לולאת C שקולה לקטע (לכל n, גם 0 ושלילי)?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $4,$0,0\nlp: addi $4,$4,2\naddi $5,$5,-1\nslt $1,$0,$5\nbne $1,$0,lp</code></pre>",
      "explanationHtml": "הבדיקה נמצאת בסוף הגוף, ולכן הגוף מתבצע לפחות פעם אחת: do-while. התנאי הוא $5 &gt; 0 (slt עם $0 משמאל ו-bne חזרה). ב-while רגיל עם n = 0 הגוף לא מתבצע בכלל. עם n &gt;= 0 הלולאה מתבצעת פעם אחת יותר, ועם n != 0 היא לא נעצרת כש-n מתחיל ב-0 או שלילי.",
      "recapHtml": "בדיקה בסוף הגוף היא do-while: הגוף מתבצע לפחות פעם אחת."
     },
     {
      "id": "C05-Q5",
      "question": "מה ערך \\$7 בסוף הקטע?\n```asm\naddi $5,$0,3\naddi $6,$0,20\nlp: slt $1,$0,$6\nbeq $1,$0,end\nsub $6,$6,$5\naddi $7,$7,1\nj lp\nend:\n```",
      "options": [
       {
        "id": "a",
        "value": "7",
        "type": "text",
        "html": "7"
       },
       {
        "id": "b",
        "value": "6",
        "type": "text",
        "html": "6"
       },
       {
        "id": "c",
        "value": "8",
        "type": "text",
        "html": "8"
       },
       {
        "id": "d",
        "value": "3",
        "type": "text",
        "html": "3"
       }
      ],
      "correctId": "a",
      "explanation": "\\$6 עובר דרך 20, 17, 14, 11, 8, 5, 2, ואז -1. הגוף מתבצע בשבעת הערכים החיוביים, ולכן \\$7 = 7. הערך 6 הוא המנה 20 חלקי 3 בלי השארית, והלולאה מבצעת איטרציה אחת יותר.",
      "recap": "מונה כמה פעמים הגוף רץ: סופרים עד שהתנאי נשבר.",
      "questionHtml": "מה ערך $7 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $5,$0,3\naddi $6,$0,20\nlp: slt $1,$0,$6\nbeq $1,$0,end\nsub $6,$6,$5\naddi $7,$7,1\nj lp\nend:</code></pre>",
      "explanationHtml": "$6 עובר דרך 20, 17, 14, 11, 8, 5, 2, ואז -1. הגוף מתבצע בשבעת הערכים החיוביים, ולכן $7 = 7. הערך 6 הוא המנה 20 חלקי 3 בלי השארית, והלולאה מבצעת איטרציה אחת יותר.",
      "recapHtml": "מונה כמה פעמים הגוף רץ: סופרים עד שהתנאי נשבר."
     },
     {
      "bankId": "23A-A-Q10",
      "recap": "משלבים: ערך התחלה, חזרות, וצבירה לאורך הלולאה.",
      "recapHtml": "משלבים: ערך התחלה, חזרות, וצבירה לאורך הלולאה."
     }
    ]
   },
   {
    "id": "C06",
    "order": 6,
    "icon": "🧱",
    "title": "מערכים ומצביעים: lw, sw וכתובות",
    "goal": "אחרי השלב הזה אפשר לחשב כתובת של איבר במערך מילים, לקרוא ולכתוב אליו ולקדם מצביע.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>הזיכרון מורכב ממילים של 4 בתים. הפקודות:</p>\n<table><thead><tr><th>פקודה</th><th>משמעות</th></tr></thead><tbody>\n<tr><td><code>lw &#36;t,k(&#36;s)</code></td><td>&#36;t = המילה שבכתובת &#36;s + k</td></tr>\n<tr><td><code>sw &#36;t,k(&#36;s)</code></td><td>המילה שבכתובת &#36;s + k מקבלת את &#36;t</td></tr></tbody></table>\n<div class=\"lesson-rule\">🔑 האיבר array[i] במערך מילים נמצא בכתובת בסיס + 4i. מחשבים 4i בשתי הכפלות עצמיות, ומוסיפים את הבסיס.</div>\n<pre>add &#36;8,&#36;6,&#36;6     # 2i\nadd &#36;8,&#36;8,&#36;8     # 4i\nadd &#36;8,&#36;8,&#36;4     # בסיס + 4i\nlw  &#36;9,0(&#36;8)     # array[i]</pre>\n<ul><li>array[i-1] נמצא בהיסט -4 מכתובת array[i], וכן array[i+1] בהיסט 4.</li>\n<li>array[4*i] נמצא בכתובת בסיס + 16i: ארבע הכפלות עצמיות של i.</li>\n<li>מצביע: ptr = &amp;array[0] הוא <code>add &#36;6,&#36;4,&#36;0</code>. הערך *ptr הוא <code>lw &#36;7,0(&#36;6)</code>, ו-ptr++ על מילים הוא <code>addi &#36;6,&#36;6,4</code>.</li></ul>\n<div class=\"lesson-ex\">דוגמה: בסיס &#36;4 = 1000, i = 2. אחרי שתי ההכפלות &#36;8 = 8, ואחרי החיבור &#36;8 = 1008, וזו כתובת האיבר השלישי (30 במערך 10, 20, 30, 40, 50).</div>\n<div class=\"lesson-trap\">⚠️ שוכחים להכפיל ב-4 (כתובת לא מיושרת), מקדמים מצביע ב-1 במקום ב-4, ומחליפים בין הכתובת לבין הערך שנקרא.</div>"
    },
    "questions": [
     {
      "id": "C06-Q1",
      "question": "בכתובת 1000 מתחיל מערך מילים: 10, 20, 30, 40, 50. בהתחלה \\$4 = 1000. מה ערך \\$8 בסוף הקטע?\n```asm\nlw $5,4($4)\nlw $6,8($4)\nadd $7,$5,$6\nsw $7,0($4)\nlw $8,0($4)\n```",
      "options": [
       {
        "id": "a",
        "value": "40",
        "type": "text",
        "html": "40"
       },
       {
        "id": "b",
        "value": "50",
        "type": "text",
        "html": "50"
       },
       {
        "id": "c",
        "value": "30",
        "type": "text",
        "html": "30"
       },
       {
        "id": "d",
        "value": "60",
        "type": "text",
        "html": "60"
       }
      ],
      "correctId": "b",
      "explanation": "ההיסט 4 קורא את האיבר השני (20) וההיסט 8 את השלישי (30). הסכום 50 נכתב לתא הראשון, ואז נקרא חזרה: \\$8 = 50. התשובה 30 היא האיבר השלישי עצמו, ו-60 מניחה סכום של שלושה איברים.",
      "recap": "lw מביאה מהכתובת בסיס + היסט, ו-sw כותבת אליה.",
      "questionHtml": "בכתובת 1000 מתחיל מערך מילים: 10, 20, 30, 40, 50. בהתחלה $4 = 1000. מה ערך $8 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lw $5,4($4)\nlw $6,8($4)\nadd $7,$5,$6\nsw $7,0($4)\nlw $8,0($4)</code></pre>",
      "explanationHtml": "ההיסט 4 קורא את האיבר השני (20) וההיסט 8 את השלישי (30). הסכום 50 נכתב לתא הראשון, ואז נקרא חזרה: $8 = 50. התשובה 30 היא האיבר השלישי עצמו, ו-60 מניחה סכום של שלושה איברים.",
      "recapHtml": "lw מביאה מהכתובת בסיס + היסט, ו-sw כותבת אליה."
     },
     {
      "id": "C06-Q2",
      "question": "\\$4 הוא כתובת התחלת מערך מילים ו-\\$6 הוא i. איזה קטע מתרגם את `array[i] = array[i] + 1;`?",
      "options": [
       {
        "id": "a",
        "value": "```asm\nadd $8,$6,$4\nlw $9,0($8)\naddi $9,$9,1\nsw $9,0($8)\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $8,$6,$4\nlw $9,0($8)\naddi $9,$9,1\nsw $9,0($8)</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nadd $8,$6,$6\nadd $8,$8,$8\nadd $8,$8,$4\nlw $9,0($8)\naddi $9,$9,1\nsw $9,0($8)\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $8,$6,$6\nadd $8,$8,$8\nadd $8,$8,$4\nlw $9,0($8)\naddi $9,$9,1\nsw $9,0($8)</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\nadd $8,$6,$6\nadd $8,$8,$4\nlw $9,0($8)\naddi $9,$9,1\nsw $9,0($8)\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $8,$6,$6\nadd $8,$8,$4\nlw $9,0($8)\naddi $9,$9,1\nsw $9,0($8)</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nadd $8,$6,$6\nadd $8,$8,$8\nadd $8,$8,$4\nlw $9,0($8)\naddi $8,$8,1\nsw $9,0($8)\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $8,$6,$6\nadd $8,$8,$8\nadd $8,$8,$4\nlw $9,0($8)\naddi $8,$8,1\nsw $9,0($8)</code></pre>"
       }
      ],
      "correctId": "b",
      "explanation": "הכתובת היא בסיס + 4i: שתי הכפלות עצמיות של i ואז חיבור הבסיס. בלי הכפלה (שני) מקבלים בסיס + i, כתובת לא מיושרת. עם הכפלה אחת (שלישי) מקבלים בסיס + 2i. ברביעי מגדילים את הכתובת ולא את הערך, ולכן נכתב הערך הישן.",
      "recap": "אינדקס מילים כפול 4 (שתי הכפלות עצמיות) ואז מוסיפים את הבסיס.",
      "questionHtml": "$4 הוא כתובת התחלת מערך מילים ו-$6 הוא i. איזה קטע מתרגם את <code class=\"tok\" dir=\"ltr\">array[i] = array[i] + 1;</code>?",
      "explanationHtml": "הכתובת היא בסיס + 4i: שתי הכפלות עצמיות של i ואז חיבור הבסיס. בלי הכפלה (שני) מקבלים בסיס + i, כתובת לא מיושרת. עם הכפלה אחת (שלישי) מקבלים בסיס + 2i. ברביעי מגדילים את הכתובת ולא את הערך, ולכן נכתב הערך הישן.",
      "recapHtml": "אינדקס מילים כפול 4 (שתי הכפלות עצמיות) ואז מוסיפים את הבסיס."
     },
     {
      "id": "C06-Q3",
      "question": "\\$4 = 2000 הוא כתובת מערך מילים בגודל \\$5 = 5 שאיבריו 3, 1, 4, 1, 5. מה ערך \\$2 בסוף?\n```asm\nadd $2,$0,$0\nadd $3,$0,$0\nadd $6,$4,$0\nloop: beq $3,$5,done\nlw $7,0($6)\nadd $2,$2,$7\naddi $6,$6,4\naddi $3,$3,1\nbeq $0,$0,loop\ndone:\n```",
      "options": [
       {
        "id": "a",
        "value": "14",
        "type": "text",
        "html": "14"
       },
       {
        "id": "b",
        "value": "13",
        "type": "text",
        "html": "13"
       },
       {
        "id": "c",
        "value": "9",
        "type": "text",
        "html": "9"
       },
       {
        "id": "d",
        "value": "15",
        "type": "text",
        "html": "15"
       }
      ],
      "correctId": "a",
      "explanation": "\\$6 הוא מצביע שמתקדם ב-4 בכל איטרציה, `lw` קורא את האיבר שהוא מצביע עליו, והלולאה מסכמת את כל חמשת האיברים: 3+1+4+1+5 = 14.",
      "recap": "מצביע על מערך מילים מתקדם ב-4, ו-lw קוראת את *ptr.",
      "questionHtml": "$4 = 2000 הוא כתובת מערך מילים בגודל $5 = 5 שאיבריו 3, 1, 4, 1, 5. מה ערך $2 בסוף?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $2,$0,$0\nadd $3,$0,$0\nadd $6,$4,$0\nloop: beq $3,$5,done\nlw $7,0($6)\nadd $2,$2,$7\naddi $6,$6,4\naddi $3,$3,1\nbeq $0,$0,loop\ndone:</code></pre>",
      "explanationHtml": "$6 הוא מצביע שמתקדם ב-4 בכל איטרציה, <code class=\"tok\" dir=\"ltr\">lw</code> קורא את האיבר שהוא מצביע עליו, והלולאה מסכמת את כל חמשת האיברים: 3+1+4+1+5 = 14.",
      "recapHtml": "מצביע על מערך מילים מתקדם ב-4, ו-lw קוראת את *ptr."
     },
     {
      "id": "C06-Q4",
      "question": "כמה פקודות מתבצעות בקטע של השאלה הקודמת (n = 5)?",
      "options": [
       {
        "id": "a",
        "value": "34",
        "type": "text",
        "html": "34"
       },
       {
        "id": "b",
        "value": "33",
        "type": "text",
        "html": "33"
       },
       {
        "id": "c",
        "value": "30",
        "type": "text",
        "html": "30"
       },
       {
        "id": "d",
        "value": "36",
        "type": "text",
        "html": "36"
       }
      ],
      "correctId": "a",
      "explanation": "שלוש פקודות אתחול, שש פקודות בכל איטרציה (beq, lw, add, addi, addi, beq) כפול 5 הם 30, ועוד beq אחד בסוף שיוצא: 3 + 30 + 1 = 34, כלומר 6n + 4.",
      "recap": "ספירת פקודות: 6n + 4.",
      "questionHtml": "כמה פקודות מתבצעות בקטע של השאלה הקודמת (n = 5)?",
      "explanationHtml": "שלוש פקודות אתחול, שש פקודות בכל איטרציה (beq, lw, add, addi, addi, beq) כפול 5 הם 30, ועוד beq אחד בסוף שיוצא: 3 + 30 + 1 = 34, כלומר 6n + 4.",
      "recapHtml": "ספירת פקודות: 6n + 4."
     },
     {
      "id": "C06-Q5",
      "question": "\\$6 הוא המצביע ptr על מערך מילים. איזה קטע מתרגם את `x = *ptr; ptr++; y = *ptr;` כאשר x ב-\\$7 ו-y ב-\\$8?",
      "options": [
       {
        "id": "a",
        "value": "```asm\nlw $7,0($6)\naddi $6,$6,1\nlw $8,0($6)\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lw $7,0($6)\naddi $6,$6,1\nlw $8,0($6)</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nlw $7,0($6)\nlw $8,4($6)\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lw $7,0($6)\nlw $8,4($6)</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\naddi $6,$6,4\nlw $7,0($6)\nlw $8,4($6)\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $6,$6,4\nlw $7,0($6)\nlw $8,4($6)</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nlw $7,0($6)\naddi $6,$6,4\nlw $8,0($6)\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lw $7,0($6)\naddi $6,$6,4\nlw $8,0($6)</code></pre>"
       }
      ],
      "correctId": "d",
      "explanation": "ptr++ על מילים מקדם את המצביע ב-4 בתים, ואחרי כן קוראים. ב-`addi \\$6,\\$6,1` המצביע לא מיושר. בשלישי המצביע לא התקדם, וברביעי הקידום נעשה לפני הקריאה הראשונה ולכן x קיבל את האיבר הלא נכון.",
      "recap": "ptr++ על מערך מילים הוא addi ptr,ptr,4.",
      "questionHtml": "$6 הוא המצביע ptr על מערך מילים. איזה קטע מתרגם את <code class=\"tok\" dir=\"ltr\">x = *ptr; ptr++; y = *ptr;</code> כאשר x ב-$7 ו-y ב-$8?",
      "explanationHtml": "ptr++ על מילים מקדם את המצביע ב-4 בתים, ואחרי כן קוראים. ב-<code class=\"tok\" dir=\"ltr\">addi $6,$6,1</code> המצביע לא מיושר. בשלישי המצביע לא התקדם, וברביעי הקידום נעשה לפני הקריאה הראשונה ולכן x קיבל את האיבר הלא נכון.",
      "recapHtml": "ptr++ על מערך מילים הוא addi ptr,ptr,4."
     },
     {
      "bankId": "25B-A-Q13",
      "recap": "array[4*i] נמצא בבסיס + 16i: ארבע הכפלות עצמיות של i.",
      "recapHtml": "array[4*i] נמצא בבסיס + 16i: ארבע הכפלות עצמיות של i."
     }
    ]
   },
   {
    "id": "C07",
    "order": 7,
    "icon": "🎭",
    "title": "מסכות וביטים: and, מסכה שמוכפלת, ספירת אפסים",
    "goal": "אחרי השלב הזה אפשר לקרוא לולאת מסכה, לדעת מה היא סופרת ולמצוא ערך התחלתי מהתוצאה.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p><code>and &#36;d,&#36;s,&#36;t</code> מחשבת וביט-ביט: ביט בתוצאה הוא 1 רק אם הוא 1 בשני האוגרים.</p>\n<ul><li>מסכה עם ביט יחיד דלוק בודקת ביט אחד: <code>and &#36;10,&#36;7,&#36;3</code> שווה 0 אם הביט כבוי ב-&#36;3, ושונה מ-0 אם דלוק.</li>\n<li>מסכה מתחילה ב-1, ובכל סיבוב <code>add &#36;7,&#36;7,&#36;7</code> מזיזה את הביט שמאלה. אחרי 32 סיבובים הביט נופל ו-&#36;7 = 0, וזה תנאי היציאה.</li></ul>\n<div class=\"lesson-rule\">🔑 בלולאה של 32 סיבובים, מונה שגדל כשהתוצאה היא 0 סופר <b>אפסים</b>, ומונה שגדל כשהיא שונה מ-0 סופר <b>אחדות</b>. מספר האפסים = 32 פחות מספר האחדות.</div>\n<pre>addi &#36;7,&#36;0,1\naddi &#36;8,&#36;0,0\nlp:   beq &#36;0,&#36;7,end\n      and &#36;10,&#36;7,&#36;3\n      bne &#36;10,&#36;0,lab1   # ביט דלוק: לא סופרים\n      addi &#36;8,&#36;8,1      # ביט כבוי: סופרים\nlab1: add &#36;7,&#36;7,&#36;7\n      j lp\nend:</pre>\n<div class=\"lesson-ex\">דוגמה: אם &#36;3 = 0xFF (שמונה ביטים דלוקים) אז &#36;8 = 32 - 8 = 24.</div>\n<h3>מציאת ערך התחלתי</h3>\n<p>עובדים לאחור: מהתוצאה (למשל 17 אפסים) מחשבים כמה ביטים דלוקים נדרשים (32 - 17 = 15), ובוחרים את הערך שמספר הביטים הדלוקים בו מתאים. ספירת ביטים בהקסדצימלי: כל ספרה היא ארבעה ביטים.</p>\n<div class=\"lesson-trap\">⚠️ מבלבלים בין ספירת אפסים לספירת אחדות. וגם שוכחים שהלולאה רצה על כל 32 הביטים, לא רק עד הביט הגבוה ביותר הדלוק.</div>"
    },
    "questions": [
     {
      "id": "C07-Q1",
      "question": "מה ערך \\$6 בסוף הקטע?\n```asm\naddi $4,$0,13\naddi $5,$0,6\nand $6,$4,$5\n```",
      "options": [
       {
        "id": "a",
        "value": "6",
        "type": "text",
        "html": "6"
       },
       {
        "id": "b",
        "value": "4",
        "type": "text",
        "html": "4"
       },
       {
        "id": "c",
        "value": "15",
        "type": "text",
        "html": "15"
       },
       {
        "id": "d",
        "value": "19",
        "type": "text",
        "html": "19"
       }
      ],
      "correctId": "b",
      "explanation": "13 בבינארי הוא 1101 ו-6 הוא 0110. `and` משאיר ביט רק היכן ששניהם 1: 0100 = 4. 15 היא תוצאת or, ו-19 היא תוצאת add.",
      "recap": "and משאיר 1 רק בביטים ששני האוגרים הדליקו.",
      "questionHtml": "מה ערך $6 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $4,$0,13\naddi $5,$0,6\nand $6,$4,$5</code></pre>",
      "explanationHtml": "13 בבינארי הוא 1101 ו-6 הוא 0110. <code class=\"tok\" dir=\"ltr\">and</code> משאיר ביט רק היכן ששניהם 1: 0100 = 4. 15 היא תוצאת or, ו-19 היא תוצאת add.",
      "recapHtml": "and משאיר 1 רק בביטים ששני האוגרים הדליקו."
     },
     {
      "id": "C07-Q2",
      "question": "מה ערך \\$6 בסוף הקטע?\n```asm\naddi $5,$0,1\nadd $5,$5,$5\nadd $5,$5,$5\nadd $5,$5,$5\naddi $4,$0,10\nand $6,$4,$5\n```",
      "options": [
       {
        "id": "a",
        "value": "0",
        "type": "text",
        "html": "0"
       },
       {
        "id": "b",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "c",
        "value": "10",
        "type": "text",
        "html": "10"
       },
       {
        "id": "d",
        "value": "8",
        "type": "text",
        "html": "8"
       }
      ],
      "correctId": "d",
      "explanation": "שלוש הכפלות הופכות את המסכה \\$5 ל-8, כלומר רק ביט מספר 3 דלוק. 10 הוא 1010, וביט 3 שלו דלוק, ולכן התוצאה 8 (ולא 1). התשובה 0 נכונה לביט שכבוי בלבד.",
      "recap": "מסכה של ביט אחד מפיקה 0 (ביט כבוי) או את ערך המסכה (ביט דלוק).",
      "questionHtml": "מה ערך $6 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $5,$0,1\nadd $5,$5,$5\nadd $5,$5,$5\nadd $5,$5,$5\naddi $4,$0,10\nand $6,$4,$5</code></pre>",
      "explanationHtml": "שלוש הכפלות הופכות את המסכה $5 ל-8, כלומר רק ביט מספר 3 דלוק. 10 הוא 1010, וביט 3 שלו דלוק, ולכן התוצאה 8 (ולא 1). התשובה 0 נכונה לביט שכבוי בלבד.",
      "recapHtml": "מסכה של ביט אחד מפיקה 0 (ביט כבוי) או את ערך המסכה (ביט דלוק)."
     },
     {
      "id": "C07-Q3",
      "question": "כמה פעמים מתבצעת הפקודה `add \\$5,\\$5,\\$5` עד שהלולאה מסתיימת?\n```asm\naddi $5,$0,1\naddi $9,$0,0\nlp: beq $5,$0,end\nadd $5,$5,$5\naddi $9,$9,1\nj lp\nend:\n```",
      "options": [
       {
        "id": "a",
        "value": "31",
        "type": "text",
        "html": "31"
       },
       {
        "id": "b",
        "value": "33",
        "type": "text",
        "html": "33"
       },
       {
        "id": "c",
        "value": "32",
        "type": "text",
        "html": "32"
       },
       {
        "id": "d",
        "value": "64",
        "type": "text",
        "html": "64"
       }
      ],
      "correctId": "c",
      "explanation": "אחרי k הכפלות \\$5 = $2^k$. ברגע שהביט היחיד יוצא מ-32 הביטים, \\$5 = 0. זה קורה אחרי הכפלה מספר 32, כלומר 32 פעמים.",
      "recap": "מסכה שמוכפלת פי 2 הופכת ל-0 אחרי 32 הכפלות.",
      "questionHtml": "כמה פעמים מתבצעת הפקודה <code class=\"tok\" dir=\"ltr\">add $5,$5,$5</code> עד שהלולאה מסתיימת?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $5,$0,1\naddi $9,$0,0\nlp: beq $5,$0,end\nadd $5,$5,$5\naddi $9,$9,1\nj lp\nend:</code></pre>",
      "explanationHtml": "אחרי k הכפלות $5 = <span class=\"math-inline\"><math dir=\"ltr\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><msup><mn>2</mn><mi>k</mi></msup></mrow><annotation encoding=\"application/x-tex\">2^k</annotation></semantics></math></span>. ברגע שהביט היחיד יוצא מ-32 הביטים, $5 = 0. זה קורה אחרי הכפלה מספר 32, כלומר 32 פעמים.",
      "recapHtml": "מסכה שמוכפלת פי 2 הופכת ל-0 אחרי 32 הכפלות."
     },
     {
      "id": "C07-Q4",
      "question": "בהתחלה \\$3 = 0x00FF00F0. מה ערך \\$8 בסוף הקטע?\n```asm\naddi $7,$0,1\naddi $8,$0,0\nlp: beq $0,$7,end\nand $10,$7,$3\nbne $10,$0,lab1\naddi $8,$8,1\nlab1: add $7,$7,$7\nj lp\nend:\n```",
      "options": [
       {
        "id": "a",
        "value": "12",
        "type": "text",
        "html": "12"
       },
       {
        "id": "b",
        "value": "20",
        "type": "text",
        "html": "20"
       },
       {
        "id": "c",
        "value": "8",
        "type": "text",
        "html": "8"
       },
       {
        "id": "d",
        "value": "24",
        "type": "text",
        "html": "24"
       }
      ],
      "correctId": "b",
      "explanation": "הלולאה עוברת על כל 32 הביטים ומגדילה את \\$8 כשהביט כבוי, כלומר סופרת **אפסים**. ב-0x00FF00F0 יש 8 + 4 = 12 ביטים דלוקים, ולכן 32 - 12 = 20 אפסים. 12 הוא מספר האחדות.",
      "recap": "הסתעפות על \"שונה מ-0\" שמדלגת על המונה סופרת אפסים.",
      "questionHtml": "בהתחלה $3 = 0x00FF00F0. מה ערך $8 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $7,$0,1\naddi $8,$0,0\nlp: beq $0,$7,end\nand $10,$7,$3\nbne $10,$0,lab1\naddi $8,$8,1\nlab1: add $7,$7,$7\nj lp\nend:</code></pre>",
      "explanationHtml": "הלולאה עוברת על כל 32 הביטים ומגדילה את $8 כשהביט כבוי, כלומר סופרת <strong>אפסים</strong>. ב-0x00FF00F0 יש 8 + 4 = 12 ביטים דלוקים, ולכן 32 - 12 = 20 אפסים. 12 הוא מספר האחדות.",
      "recapHtml": "הסתעפות על \"שונה מ-0\" שמדלגת על המונה סופרת אפסים."
     },
     {
      "id": "C07-Q5",
      "question": "באיזה ערך התחלתי של \\$3 מתקבל \\$8 = 30 בסוף הקטע?\n```asm\naddi $7,$0,1\naddi $8,$0,0\nlp: beq $0,$7,end\nand $10,$7,$3\nbne $10,$0,lab1\naddi $8,$8,1\nlab1: add $7,$7,$7\nj lp\nend:\n```",
      "options": [
       {
        "id": "a",
        "value": "0x80000003",
        "type": "text",
        "html": "0x80000003"
       },
       {
        "id": "b",
        "value": "0x0000FFFF",
        "type": "text",
        "html": "0x0000FFFF"
       },
       {
        "id": "c",
        "value": "0x80000001",
        "type": "text",
        "html": "0x80000001"
       },
       {
        "id": "d",
        "value": "0x00000001",
        "type": "text",
        "html": "0x00000001"
       }
      ],
      "correctId": "c",
      "explanation": "\\$8 סופר אפסים, לכן 30 אפסים פירושו שיש שני ביטים דלוקים מתוך 32. ל-0x80000001 יש שני ביטים (הראשון והאחרון). ל-0x80000003 יש שלושה (29 אפסים), ל-0x0000FFFF יש 16 ביטים (16 אפסים), ול-0x00000001 יש אחד (31 אפסים).",
      "recap": "ספירת אפסים = 32 פחות מספר הביטים הדלוקים.",
      "questionHtml": "באיזה ערך התחלתי של $3 מתקבל $8 = 30 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $7,$0,1\naddi $8,$0,0\nlp: beq $0,$7,end\nand $10,$7,$3\nbne $10,$0,lab1\naddi $8,$8,1\nlab1: add $7,$7,$7\nj lp\nend:</code></pre>",
      "explanationHtml": "$8 סופר אפסים, לכן 30 אפסים פירושו שיש שני ביטים דלוקים מתוך 32. ל-0x80000001 יש שני ביטים (הראשון והאחרון). ל-0x80000003 יש שלושה (29 אפסים), ל-0x0000FFFF יש 16 ביטים (16 אפסים), ול-0x00000001 יש אחד (31 אפסים).",
      "recapHtml": "ספירת אפסים = 32 פחות מספר הביטים הדלוקים."
     },
     {
      "bankId": "25B-A-Q10",
      "recap": "בונים מהסוף: כמה אפסים צריך, וממנו כמה אחדות, ואז בוחרים ערך.",
      "recapHtml": "בונים מהסוף: כמה אפסים צריך, וממנו כמה אחדות, ואז בוחרים ערך."
     }
    ]
   },
   {
    "id": "C08",
    "order": 8,
    "icon": "🧩",
    "title": "השלמת קוד חסר בלולאה על מערך",
    "goal": "אחרי השלב הזה אפשר להשלים את הפקודות החסרות בתרגום של לולאה על מערך מ-C לאסמבלי.",
    "source": "ai-verified",
    "boss": false,
    "lesson": {
     "html": "<p>שאלת \"הפקודות החסרות\" נותנת תרגום שלם חוץ מגוף ה-if, ושואלת מה צריך להיכנס שם. שיטת עבודה:</p>\n<ol><li><b>מזהים תפקידי אוגרים</b> מהשורות שכבר כתובות: אינדקס i, כתובת האיבר, הערך שנקרא (<code>lw</code>), מונה או צובר.</li>\n<li><b>כותבים את התנאי ב-C</b> במשתנים של האוגרים. למשל array[i] &gt; 0 הוא \"&#36;10 &gt; &#36;0\".</li>\n<li><b>בודקים</b> עם <code>slt</code>: a &gt; b הוא slt עם האוגרים מוחלפים.</li>\n<li><b>מדלגים</b> בהסתעפות ההפוכה אל התווית שאחרי הגוף (למשל <code>nxt</code>), ולא אל תווית אחרת.</li>\n<li><b>גוף</b>: כותבים את ההשמה, שבה האוגר הראשון הוא הצד השמאלי.</li></ol>\n<div class=\"lesson-rule\">🔑 כדי לפסול אפשרות, בודקים אחד מאלה: סדר האוגרים ב-<code>slt</code>, beq מול bne, התווית שאליה קופצים, ואוגר היעד של ההשמה.</div>\n<div class=\"lesson-ex\">דוגמה: count positives. הרשימה קוראת את array[i] ל-&#36;10. התנאי 0 &lt; &#36;10 הוא <code>slt &#36;11,&#36;0,&#36;10</code>. מדלגים כש-&#36;11 = 0: <code>beq &#36;11,&#36;0,nxt</code>. הגוף: <code>addi &#36;7,&#36;7,1</code>.</div>\n<div class=\"lesson-trap\">⚠️ אפשרויות שגויות לרוב נכשלות רק בקלט מסוים, ולכן בודקים מקרי קצה: איבר 0, איבר שווה לסף, ומערך ריק.</div>"
    },
    "questions": [
     {
      "id": "C08-Q1",
      "question": "\\$4 הוא כתובת מערך מילים, \\$5 הוא size. הקטע מתרגם `cnt = 0; for (i=0;i<size;i++) if (array[i] > 0) cnt++;` כש-cnt ב-\\$7. מהן הפקודות החסרות (במקום @@@@@@@)?\n```asm\naddi $6,$0,0\naddi $7,$0,0\nlp: slt $8,$6,$5\nbeq $8,$0,end\nadd $9,$6,$6\nadd $9,$9,$9\nadd $9,$9,$4\nlw $10,0($9)\n@@@@@@@\nnxt: addi $6,$6,1\nj lp\nend:\n```",
      "options": [
       {
        "id": "a",
        "value": "```asm\nslt $11,$10,$0\nbeq $11,$0,nxt\naddi $7,$7,1\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $11,$10,$0\nbeq $11,$0,nxt\naddi $7,$7,1</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nslt $11,$0,$10\nbeq $11,$0,nxt\naddi $7,$7,1\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $11,$0,$10\nbeq $11,$0,nxt\naddi $7,$7,1</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\nslt $11,$0,$10\nbne $11,$0,nxt\naddi $7,$7,1\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $11,$0,$10\nbne $11,$0,nxt\naddi $7,$7,1</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nslt $11,$0,$10\nbeq $11,$0,nxt\nadd $7,$7,$10\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $11,$0,$10\nbeq $11,$0,nxt\nadd $7,$7,$10</code></pre>"
       }
      ],
      "correctId": "b",
      "explanation": "הגוף מתבצע כש-0 < array[i]: `slt \\$11,\\$0,\\$10`, ומדלגים אל nxt בהסתעפות ההפוכה (`beq` על 0). השני בודק array[i] < 0 וסופר שליליים, השלישי מדלג כשהתנאי מתקיים ולכן סופר אפסים ושליליים, והרביעי מצרף לסכום במקום להגדיל ב-1.",
      "recap": "תנאי ב-C = slt, ומדלגים בהסתעפות ההפוכה אל התווית שאחרי הגוף.",
      "questionHtml": "$4 הוא כתובת מערך מילים, $5 הוא size. הקטע מתרגם <code class=\"tok\" dir=\"ltr\">cnt = 0; for (i=0;i&lt;size;i++) if (array[i] &gt; 0) cnt++;</code> כש-cnt ב-$7. מהן הפקודות החסרות (במקום @@@@@@@)?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $6,$0,0\naddi $7,$0,0\nlp: slt $8,$6,$5\nbeq $8,$0,end\nadd $9,$6,$6\nadd $9,$9,$9\nadd $9,$9,$4\nlw $10,0($9)\n@@@@@@@\nnxt: addi $6,$6,1\nj lp\nend:</code></pre>",
      "explanationHtml": "הגוף מתבצע כש-0 &lt; array[i]: <code class=\"tok\" dir=\"ltr\">slt $11,$0,$10</code>, ומדלגים אל nxt בהסתעפות ההפוכה (<code class=\"tok\" dir=\"ltr\">beq</code> על 0). השני בודק array[i] &lt; 0 וסופר שליליים, השלישי מדלג כשהתנאי מתקיים ולכן סופר אפסים ושליליים, והרביעי מצרף לסכום במקום להגדיל ב-1.",
      "recapHtml": "תנאי ב-C = slt, ומדלגים בהסתעפות ההפוכה אל התווית שאחרי הגוף."
     },
     {
      "id": "C08-Q2",
      "question": "\\$4 הוא כתובת מערך מילים, \\$5 הוא size, \\$12 = 5. הקטע מתרגם `sum = 0; for (i=0;i<size;i++) if (array[i] > 5) sum += array[i];` כש-sum ב-\\$2. מהן הפקודות החסרות?\n```asm\naddi $6,$0,0\naddi $2,$0,0\naddi $12,$0,5\nlp: slt $8,$6,$5\nbeq $8,$0,end\nadd $9,$6,$6\nadd $9,$9,$9\nadd $9,$9,$4\nlw $10,0($9)\n@@@@@@@\nnxt: addi $6,$6,1\nj lp\nend:\n```",
      "options": [
       {
        "id": "a",
        "value": "```asm\nslt $11,$10,$12\nbeq $11,$0,nxt\nadd $2,$2,$10\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $11,$10,$12\nbeq $11,$0,nxt\nadd $2,$2,$10</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nslt $11,$12,$10\nbne $11,$0,nxt\nadd $2,$2,$10\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $11,$12,$10\nbne $11,$0,nxt\nadd $2,$2,$10</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\nslt $11,$12,$10\nbeq $11,$0,nxt\nadd $2,$2,$10\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $11,$12,$10\nbeq $11,$0,nxt\nadd $2,$2,$10</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nslt $11,$12,$10\nbeq $11,$0,nxt\nadd $2,$2,$11\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $11,$12,$10\nbeq $11,$0,nxt\nadd $2,$2,$11</code></pre>"
       }
      ],
      "correctId": "c",
      "explanation": "התנאי array[i] > 5 הוא 5 < array[i], ולכן `slt \\$11,\\$12,\\$10`. מדלגים כש-\\$11 = 0, וצוברים את array[i] (\\$10). הקטע השני סוכם איברים קטנים מ-5, השלישי מדלג כשהתנאי מתקיים, והרביעי מוסיף את הדגל (0 או 1) במקום את הערך.",
      "recap": "משווים לערך קבוע שנטען מראש לאוגר, וצוברים את הערך שנקרא ולא את הדגל.",
      "questionHtml": "$4 הוא כתובת מערך מילים, $5 הוא size, $12 = 5. הקטע מתרגם <code class=\"tok\" dir=\"ltr\">sum = 0; for (i=0;i&lt;size;i++) if (array[i] &gt; 5) sum += array[i];</code> כש-sum ב-$2. מהן הפקודות החסרות?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $6,$0,0\naddi $2,$0,0\naddi $12,$0,5\nlp: slt $8,$6,$5\nbeq $8,$0,end\nadd $9,$6,$6\nadd $9,$9,$9\nadd $9,$9,$4\nlw $10,0($9)\n@@@@@@@\nnxt: addi $6,$6,1\nj lp\nend:</code></pre>",
      "explanationHtml": "התנאי array[i] &gt; 5 הוא 5 &lt; array[i], ולכן <code class=\"tok\" dir=\"ltr\">slt $11,$12,$10</code>. מדלגים כש-$11 = 0, וצוברים את array[i] ($10). הקטע השני סוכם איברים קטנים מ-5, השלישי מדלג כשהתנאי מתקיים, והרביעי מוסיף את הדגל (0 או 1) במקום את הערך.",
      "recapHtml": "משווים לערך קבוע שנטען מראש לאוגר, וצוברים את הערך שנקרא ולא את הדגל."
     },
     {
      "id": "C08-Q3",
      "question": "\\$4 הוא כתובת מערך מילים לא ריק, \\$5 הוא size, \\$6 הוא מצביע ו-\\$7 הוא min. הקטע מתרגם `min = *ptr; for (i=0;i<size;i++) { if (*ptr < min) min = *ptr; ptr++; }`. מהן הפקודות החסרות?\n```asm\nadd $6,$4,$0\nlw $7,0($6)\naddi $8,$0,0\nlp: slt $1,$8,$5\nbeq $1,$0,end\nlw $9,0($6)\n@@@@@@@\nnxt: addi $6,$6,4\naddi $8,$8,1\nj lp\nend:\n```",
      "options": [
       {
        "id": "a",
        "value": "```asm\nslt $1,$9,$7\nbeq $1,$0,nxt\nadd $7,$9,$0\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $1,$9,$7\nbeq $1,$0,nxt\nadd $7,$9,$0</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nslt $1,$7,$9\nbeq $1,$0,nxt\nadd $7,$9,$0\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $1,$7,$9\nbeq $1,$0,nxt\nadd $7,$9,$0</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\nslt $1,$9,$7\nbne $1,$0,nxt\nadd $7,$9,$0\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $1,$9,$7\nbne $1,$0,nxt\nadd $7,$9,$0</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nslt $1,$9,$7\nbeq $1,$0,nxt\nadd $9,$7,$0\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>slt $1,$9,$7\nbeq $1,$0,nxt\nadd $9,$7,$0</code></pre>"
       }
      ],
      "correctId": "a",
      "explanation": "*ptr נמצא ב-\\$9 ו-min ב-\\$7. התנאי *ptr < min הוא `slt \\$1,\\$9,\\$7`, מדלגים כש-\\$1 = 0, ואחרת מעתיקים את \\$9 אל \\$7. השני מחשב מקסימום, השלישי מדלג בכיוון הלא נכון, והרביעי מעתיק בכיוון ההפוך ולכן min לא מתעדכן.",
      "recap": "בהשמה ב-C הצד השמאלי הוא אוגר היעד, כלומר האוגר הראשון ב-add.",
      "questionHtml": "$4 הוא כתובת מערך מילים לא ריק, $5 הוא size, $6 הוא מצביע ו-$7 הוא min. הקטע מתרגם <code class=\"tok\" dir=\"ltr\">min = *ptr; for (i=0;i&lt;size;i++) { if (*ptr &lt; min) min = *ptr; ptr++; }</code>. מהן הפקודות החסרות?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>add $6,$4,$0\nlw $7,0($6)\naddi $8,$0,0\nlp: slt $1,$8,$5\nbeq $1,$0,end\nlw $9,0($6)\n@@@@@@@\nnxt: addi $6,$6,4\naddi $8,$8,1\nj lp\nend:</code></pre>",
      "explanationHtml": "*ptr נמצא ב-$9 ו-min ב-$7. התנאי *ptr &lt; min הוא <code class=\"tok\" dir=\"ltr\">slt $1,$9,$7</code>, מדלגים כש-$1 = 0, ואחרת מעתיקים את $9 אל $7. השני מחשב מקסימום, השלישי מדלג בכיוון הלא נכון, והרביעי מעתיק בכיוון ההפוך ולכן min לא מתעדכן.",
      "recapHtml": "בהשמה ב-C הצד השמאלי הוא אוגר היעד, כלומר האוגר הראשון ב-add."
     },
     {
      "id": "C08-Q4",
      "question": "\\$4 הוא כתובת מערך מילים, \\$5 הוא size, ו-\\$8 מחזיק את הכתובת של array[i] (i מ-\\$6). הקטע מתרגם `for (i=1;i<size;i++) array[i] = array[i] + array[i-1];`. מהן הפקודות החסרות?\n```asm\naddi $6,$0,1\nlp: slt $1,$6,$5\nbeq $1,$0,end\nadd $8,$6,$6\nadd $8,$8,$8\nadd $8,$8,$4\n@@@@@@@\naddi $6,$6,1\nj lp\nend:\n```",
      "options": [
       {
        "id": "a",
        "value": "```asm\nlw $9,4($8)\nlw $10,0($8)\nadd $10,$10,$9\nsw $10,0($8)\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lw $9,4($8)\nlw $10,0($8)\nadd $10,$10,$9\nsw $10,0($8)</code></pre>"
       },
       {
        "id": "b",
        "value": "```asm\nlw $9,-4($8)\nlw $10,0($8)\nadd $10,$10,$9\nsw $10,-4($8)\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lw $9,-4($8)\nlw $10,0($8)\nadd $10,$10,$9\nsw $10,-4($8)</code></pre>"
       },
       {
        "id": "c",
        "value": "```asm\nlw $9,-4($8)\nlw $10,0($8)\nadd $10,$10,$9\nsw $9,0($8)\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lw $9,-4($8)\nlw $10,0($8)\nadd $10,$10,$9\nsw $9,0($8)</code></pre>"
       },
       {
        "id": "d",
        "value": "```asm\nlw $9,-4($8)\nlw $10,0($8)\nadd $10,$10,$9\nsw $10,0($8)\n```",
        "type": "text",
        "html": "<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>lw $9,-4($8)\nlw $10,0($8)\nadd $10,$10,$9\nsw $10,0($8)</code></pre>"
       }
      ],
      "correctId": "d",
      "explanation": "array[i-1] נמצא בהיסט -4 מכתובת array[i]. קוראים את שני האיברים, מחברים, וכותבים בחזרה אל array[i] (היסט 0). השני קורא את האיבר הבא, השלישי כותב על האיבר הקודם, והרביעי כותב את האיבר הקודם בלי לחבר.",
      "recap": "היסט -4 הוא האיבר הקודם, והתוצאה נכתבת לכתובת של האיבר הנוכחי.",
      "questionHtml": "$4 הוא כתובת מערך מילים, $5 הוא size, ו-$8 מחזיק את הכתובת של array[i] (i מ-$6). הקטע מתרגם <code class=\"tok\" dir=\"ltr\">for (i=1;i&lt;size;i++) array[i] = array[i] + array[i-1];</code>. מהן הפקודות החסרות?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $6,$0,1\nlp: slt $1,$6,$5\nbeq $1,$0,end\nadd $8,$6,$6\nadd $8,$8,$8\nadd $8,$8,$4\n@@@@@@@\naddi $6,$6,1\nj lp\nend:</code></pre>",
      "explanationHtml": "array[i-1] נמצא בהיסט -4 מכתובת array[i]. קוראים את שני האיברים, מחברים, וכותבים בחזרה אל array[i] (היסט 0). השני קורא את האיבר הבא, השלישי כותב על האיבר הקודם, והרביעי כותב את האיבר הקודם בלי לחבר.",
      "recapHtml": "היסט -4 הוא האיבר הקודם, והתוצאה נכתבת לכתובת של האיבר הנוכחי."
     },
     {
      "id": "C08-Q5",
      "question": "\\$4 = 4000 הוא כתובת מערך מילים בגודל \\$5 = 5 שאיבריו 4, 7, 10, 3, 8. מה ערך \\$7 בסוף הקטע?\n```asm\naddi $6,$0,0\naddi $7,$0,0\naddi $12,$0,1\nlp: slt $8,$6,$5\nbeq $8,$0,end\nadd $9,$6,$6\nadd $9,$9,$9\nadd $9,$9,$4\nlw $10,0($9)\nand $11,$10,$12\nbne $11,$0,nxt\naddi $7,$7,1\nnxt: addi $6,$6,1\nj lp\nend:\n```",
      "options": [
       {
        "id": "a",
        "value": "2",
        "type": "text",
        "html": "2"
       },
       {
        "id": "b",
        "value": "5",
        "type": "text",
        "html": "5"
       },
       {
        "id": "c",
        "value": "4",
        "type": "text",
        "html": "4"
       },
       {
        "id": "d",
        "value": "3",
        "type": "text",
        "html": "3"
       }
      ],
      "correctId": "d",
      "explanation": "`and` עם 1 בודק את הביט התחתון. `bne` מדלגת על המונה כשהביט דלוק (איבר אי-זוגי), ולכן \\$7 סופר את האיברים הזוגיים: 4, 10, 8, כלומר 3. 2 הוא מספר האי-זוגיים.",
      "recap": "and עם 1 בודק זוגיות, והמונה סופר את מי שלא דילג עליו.",
      "questionHtml": "$4 = 4000 הוא כתובת מערך מילים בגודל $5 = 5 שאיבריו 4, 7, 10, 3, 8. מה ערך $7 בסוף הקטע?<pre class=\"code-block\" dir=\"ltr\" data-lang=\"asm\"><code>addi $6,$0,0\naddi $7,$0,0\naddi $12,$0,1\nlp: slt $8,$6,$5\nbeq $8,$0,end\nadd $9,$6,$6\nadd $9,$9,$9\nadd $9,$9,$4\nlw $10,0($9)\nand $11,$10,$12\nbne $11,$0,nxt\naddi $7,$7,1\nnxt: addi $6,$6,1\nj lp\nend:</code></pre>",
      "explanationHtml": "<code class=\"tok\" dir=\"ltr\">and</code> עם 1 בודק את הביט התחתון. <code class=\"tok\" dir=\"ltr\">bne</code> מדלגת על המונה כשהביט דלוק (איבר אי-זוגי), ולכן $7 סופר את האיברים הזוגיים: 4, 10, 8, כלומר 3. 2 הוא מספר האי-זוגיים.",
      "recapHtml": "and עם 1 בודק זוגיות, והמונה סופר את מי שלא דילג עליו."
     },
     {
      "bankId": "24B-A-Q20",
      "recap": "קוראים את הרשימה כדי לזהות תפקיד כל אוגר, ואז מתאימים את הפקודות החסרות.",
      "recapHtml": "קוראים את הרשימה כדי לזהות תפקיד כל אוגר, ואז מתאימים את הפקודות החסרות."
     }
    ]
   },
   {
    "id": "C09",
    "order": 9,
    "icon": "🏆",
    "title": "בוס: שאלות מבחן אמיתיות",
    "goal": "אחרי השלב הזה אפשר להתמודד עם השאלות מהסוג שמופיע במבחן: מעקב, תרגום והשלמת קוד.",
    "source": "ai-verified",
    "boss": true,
    "lesson": {
     "html": "<p>השלב הזה מורכב משאלות אמיתיות ממבחנים קודמים. רשימת בדיקה לפני שבוחרים תשובה:</p>\n<ul><li><b>מעקב:</b> טבלה עם עמודה לכל אוגר, שורה לכל איטרציה, והחוק הכללי שהלולאה מחשבת.</li>\n<li><b>תרגום C לאסמבלי:</b> תנאי הפוך בהסתעפות, slt עם האוגרים בסדר הנכון, ודילוג מעל ה-else.</li>\n<li><b>אסמבלי ל-C:</b> ממפים אוגרים למשתנים, וקובעים אם הבדיקה בראש (while) או בסוף (do-while).</li>\n<li><b>ערך התחלתי:</b> עובדים מהתוצאה לאחור.</li>\n<li><b>פקודות חסרות:</b> מזהים תפקידי אוגרים ופוסלים אפשרויות לפי slt, beq/bne, תווית ואוגר יעד.</li></ul>\n<div class=\"lesson-rule\">🔑 כשיש ספק, מריצים את הקטע על שתי דוגמאות קטנות, ביניהן מקרה שוויון.</div>"
    },
    "questions": [
     {
      "bankId": "23B-A-Q13",
      "recap": "קוראים מהאסמבלי את סוג הלולאה: בדיקה בראש היא while.",
      "recapHtml": "קוראים מהאסמבלי את סוג הלולאה: בדיקה בראש היא while."
     },
     {
      "bankId": "23A-A-Q13",
      "recap": "מבנה ה-if/else נקרא מהסתעפות ההפוכה ומהכיוון של slt.",
      "recapHtml": "מבנה ה-if/else נקרא מהסתעפות ההפוכה ומהכיוון של slt."
     },
     {
      "bankId": "23B-A-Q10",
      "recap": "עוקבים אחרי הלולאה וקובעים מה המונה סופר.",
      "recapHtml": "עוקבים אחרי הלולאה וקובעים מה המונה סופר."
     },
     {
      "bankId": "25A-A-Q10",
      "recap": "מהתוצאה מחשבים לאחור כמה ביטים דלוקים נדרשים.",
      "recapHtml": "מהתוצאה מחשבים לאחור כמה ביטים דלוקים נדרשים."
     },
     {
      "bankId": "22B-A-Q20",
      "recap": "משלימים לפי תפקיד האוגרים, כיוון ה-slt וההסתעפות.",
      "recapHtml": "משלימים לפי תפקיד האוגרים, כיוון ה-slt וההסתעפות."
     },
     {
      "bankId": "23B-B-Q13",
      "recap": "שני if נפרדים ברצף: כל אחד מקבל בדיקה והסתעפות משלו.",
      "recapHtml": "שני if נפרדים ברצף: כל אחד מקבל בדיקה והסתעפות משלו."
     }
    ]
   }
  ]
 }
};
