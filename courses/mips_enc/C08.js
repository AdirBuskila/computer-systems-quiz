/* Course mips_enc, level C08. Answers computed and checked by tools/verify/needhelp/mips_enc/check.py */
COURSE_LEVEL("mips_enc", {
  id: "C08", order: 8, icon: "🏆", title: "מבחן מסכם",
  goal: "לפתור שאלות קידוד ופענוח בגודל מבחן.",
  boss: true,
  source: "ai-verified",
  lesson: { html: String.raw`<p>זה כל הקורס בשאלות אמיתיות ממבחנים. הכללים שפותרים את כולן:</p>
<ul><li><b>קידוד R:</b> ‏op=0, שדות <b>rs, rt, rd</b>, ‏funct (add 32, sub 34, and 36, or 37, xor 38, slt 42).</li>
<li><b>קידוד I:</b> ‏op, rs, rt, imm16. שלילי במשלים ל-2. ‏lw/sw: האוגר שבסוגריים הוא rs.</li>
<li><b>פענוח:</b> הקסה לביטים, חלוקה 6/5/5/5/5/6 או 6/5/5/16, ‏op קובע, ובאסמבלי rd (או rt) נכתב ראשון.</li>
<li><b>הסתעפות:</b> ‏imm = (יעד - (PC+4)) / 4, ובפענוח יעד = PC + 4 + 4 * imm.</li>
<li><b>טעינת קבועים:</b> ‏lui לחצי העליון, ‏ori באפסים, ‏addi בסימן.</li></ul>
<div class="lesson-rule">🔑 בכל שאלה: לפרק לשדות, להמיר לבסיס אחד, ורק אז להשוות לאופציות. רוב המסיחים הם שדות שהוחלפו או ‏imm שנקרא בלי סימן.</div>` },
  questions: [
    { bankId: "24A-A-Q2", recap: "כל פקודה מעדכנת את האוגר, ו-addi מרחיב בסימן" },
    { bankId: "24B-A-Q17", recap: "addi: ‏op=8, ‏rs ואז rt, ו-imm שלילי במשלים ל-2" },
    { bankId: "25B-A-Q17", recap: "imm = (יעד - (PC+4)) / 4" },
    { bankId: "24A-A-Q19", recap: "op=8: addi, ו-imm נקרא עם סימן" },
    { bankId: "24S-A-Q17", recap: "R: ‏rs, rt, rd, funct (xor = 38)" },
    { bankId: "23A-B-Q19", recap: "op=13: ori, ו-imm בלי סימן" },
  ],
});
