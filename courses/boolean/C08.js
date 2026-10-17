/* Boolean algebra course, level 8 (boss): real exam questions */
COURSE_LEVEL("boolean", {
  id: "C08", order: 8, icon: "🏆", title: "מבחן גמר: שאלות מהמבחנים",
  goal: "לפתור שאלות אמיתיות של \"איזו משוואה נכונה / אינה נכונה\" בלי רמזים.",
  source: "ai-verified",
  boss: true,
  lesson: { html: String.raw`
<p>אלה חמש שאלות אמיתיות מהמבחנים. כלי העבודה שלכם:</p>
<ul>
<li>קו על XOR: מספיק על אופרנד אחד, ושני קווים מתבטלים.</li>
<li>שרשרת XOR: מפרקים קווים ל-$\oplus1$ ומבטלים זוגות.</li>
<li>$X+\bar X Y=X+Y$, דה מורגן, ובליעה (רק ל-AND ו-OR).</li>
<li>כדי לפסול משוואה, מוצאים הצבה אחת שבה הצדדים שונים; כדי לאשר, בודקים את כל השורות או מפשטים.</li>
</ul>
<div class="lesson-rule">🔑 שימו לב אם השאלה מבקשת משוואה <b>נכונה</b> או <b>אינה</b> נכונה, ועברו על כל ארבע האפשרויות.</div>
` },
  questions: [
    { bankId: "22A-A-Q1", recap: "$(A\\oplus B)+(A\\oplus C)\\ne A\\oplus(B+C)$; OR אינו XOR" },
    { bankId: "23A-A-Q1", recap: "אגף ימין מתפרק: $C\\oplus\\bar C=1$, והכול מתבטל ל-$0$" },
    { bankId: "23B-A-Q1", recap: "$B\\oplus\\bar A=\\overline{A\\oplus B}$ ו-$X+\\bar X Y=X+Y$" },
    { bankId: "24S-A-Q1", recap: "הקו על XOR לא נכנס פנימה דרך המכפלה ב-$C$" },
    { bankId: "25B-A-Q1", recap: "$X+\\bar X Y=X+Y$ ואחר כך קו על אופרנד אחד של XOR" },
  ],
});
