# -*- coding: utf-8 -*-
# Content of the eight levels. exec'd by gen.py (uses its helpers).
A = lambda w: '0x%08X' % w

# ============================================================ branch / jump builders
def br_q(qid, o, rs, rt, pc, tgt, ask, pos):
    asm = '%s %s, %s, L' % (o, n(rs), n(rt))
    off = (tgt - pc - 4) // 4
    w = assemble('%s %s, %s, %d' % (o, n(rs), n(rt), tgt), pc)
    oo = {'beq': 'bne', 'bne': 'beq'}[o]
    stem_head = 'הפקודה `%s` נמצאת בכתובת `%s`, והתווית L נמצאת בכתובת `%s`.' % (asm, A(pc), A(tgt))
    if ask == 'imm':
        q = stem_head + ' מהו ערך ה-immediate (מספר המילים) שבקידוד?'
        correct = str(off)
        wrong = [(str((tgt - pc) // 4), 'חישוב יחסית ל-PC ולא ל-PC+4'), (str(tgt - pc - 4), 'ההפרש בבתים, בלי חלוקה ב-4'), (str(-off), 'הסימן הפוך')]
        core = 'ההפרש מ-PC+4: %s - %s = %d בתים, כלומר %d מילים.' % (A(tgt), A(pc + 4), tgt - pc - 4, off)
        recap = 'imm = (יעד - (PC+4)) / 4'
    elif ask == 'immhex':
        q = stem_head + ' מהו ערך שדה ה-immediate (16 הביטים התחתונים של הקידוד), בהקסה?'
        f = lambda v: '0x%04X' % (v & 0xFFFF)
        correct = f(off)
        wrong = [(f((tgt - pc) // 4), 'חישוב יחסית ל-PC ולא ל-PC+4'), (f(tgt - pc - 4), 'ההפרש בבתים, בלי חלוקה ב-4'), (f(-off), 'הסימן הפוך')]
        core = 'imm = (%s - %s) / 4 = %d, וב-16 ביט (משלים ל-2) זה %s.' % (A(tgt), A(pc + 4), off, correct)
        recap = 'imm = (יעד - (PC+4)) / 4, שלילי במשלים ל-2 ב-16 ביט'
    elif ask == 'word':
        q = stem_head + ' מהו הקידוד בשפת מכונה של הפקודה?'
        correct = A(w)
        mk_ = lambda op_, i: A(((4 if op_ == 'beq' else 5) << 26) | (rs << 21) | (rt << 16) | (i & 0xFFFF))
        wrong = [(mk_(o, (tgt - pc) // 4), 'ה-immediate חושב יחסית ל-PC ולא ל-PC+4'), (mk_(o, tgt - pc - 4), 'ה-immediate נשאר בבתים'),
                 (mk_(oo, off), 'opcode של %s ולא של %s' % (oo, o))]
        core = 'imm = (%s - %s) / 4 = %d = 0x%04X. `%s` = %s.' % (A(tgt), A(pc + 4), off, off & 0xFFFF, sp(w), A(w))
        recap = 'beq/bne: op=4/5, rs, rt, ואז imm = (יעד - (PC+4)) / 4'
    elif ask == 'tgt':
        q = 'הפקודה `%s` נמצאת בכתובת `%s`. מה כתובת היעד של ההסתעפות (כתובת L)?' % (A(w), A(pc))
        disassemble(w, pc)
        correct = A(tgt)
        wrong = [(A(pc + 4 * off), 'חישוב יחסית ל-PC ולא ל-PC+4'), (A(pc + 4 + off), 'ה-imm לא הוכפל ב-4'), (A(pc + off), 'ה-imm לא הוכפל ב-4 וגם נמדד מ-PC')]
        core = '`%s` = %s: op=%d הוא %s, rs=%d, rt=%d, imm=0x%04X = %d. היעד: %s + 4 + 4 * (%d) = %s.' % (
            sp(w), A(w), w >> 26, o, rs, rt, w & 0xFFFF, off, A(pc), off, A(tgt))
        recap = 'יעד = PC + 4 + 4 * imm'
    else:
        raise ValueError(ask)
    CLAIMS[qid] = dict(kind='br', ask=ask, op=o, rs=rs, rt=rt, pc=pc, tgt=tgt, correct=correct)
    ids = 'abcd'
    ws = []
    seen = {correct}
    for t, why in wrong:
        if t not in seen: seen.add(t); ws.append((t, why))
    assert len(ws) == 3, qid
    opts = ws[:]; opts.insert(pos, (correct, None))
    return dict(id=qid, question=q, options=[dict(id=ids[i], value='`%s`' % t if t.startswith('0x') else t) for i, (t, _) in enumerate(opts)],
                correctId=ids[pos], explanation=core + ' המסיחים: ' + ' '.join('%s ← %s.' % (t, why) for t, why in ws), recap=recap)


def jenc_q(qid, pc, tgt, pos):
    w = assemble('j %d' % tgt, pc)
    q = 'הפקודה `j L` נמצאת בכתובת `%s`, והתווית L נמצאת בכתובת `%s`. מהו הקידוד בשפת מכונה?' % (A(pc), A(tgt))
    correct = A(w)
    wrong = [(A((2 << 26) | (tgt & 0x3FFFFFF)), 'הכתובת לא חולקה ב-4'), (A((3 << 26) | ((tgt >> 2) & 0x3FFFFFF)), 'opcode של jal (3) ולא של j (2)'),
             (A((2 << 26) | (((tgt - pc - 4) // 4) & 0x3FFFFFF)), 'חישוב יחסי כמו בהסתעפות, אבל j משתמשת בכתובת מוחלטת')]
    core = 'שדה target הוא הכתובת חלקי 4: %s / 4 = 0x%07X. `%s` = %s.' % (A(tgt), tgt >> 2, sp(w), A(w))
    CLAIMS[qid] = dict(kind='jenc', pc=pc, tgt=tgt, correct=correct)
    ids = 'abcd'; opts = wrong[:]; opts.insert(pos, (correct, None))
    return dict(id=qid, question=q, options=[dict(id=ids[i], value='`%s`' % t) for i, (t, _) in enumerate(opts)], correctId=ids[pos],
                explanation=core + ' המסיחים: ' + ' '.join('%s ← %s.' % (t, why) for t, why in wrong), recap='j: target = כתובת / 4 (26 ביט), opcode 2')


def jdec_q(qid, pc, tgt, pos):
    w = assemble('j %d' % tgt, pc); field = w & 0x3FFFFFF
    q = 'הפקודה `%s` נמצאת בכתובת `%s`. לאיזו כתובת היא קופצת?' % (A(w), A(pc))
    correct = A(tgt)
    wrong = [(A(field << 2), 'הביטים העליונים של PC+4 נשכחו'), (A(field), 'שדה ה-target לא הוכפל ב-4'), (A(pc + 4 + 4 * field), 'חישוב יחסי כמו בהסתעפות')]
    core = 'op=2 הוא j. כתובת היעד: ארבעת הביטים העליונים של PC+4 (%s), ואחריהם target * 4 = 0x%07X: %s.' % (A(pc + 4), field << 2, A(tgt))
    CLAIMS[qid] = dict(kind='jdec', pc=pc, word=A(w), correct=correct)
    ids = 'abcd'; opts = wrong[:]; opts.insert(pos, (correct, None))
    return dict(id=qid, question=q, options=[dict(id=ids[i], value='`%s`' % t) for i, (t, _) in enumerate(opts)], correctId=ids[pos],
                explanation=core + ' המסיחים: ' + ' '.join('%s ← %s.' % (t, why) for t, why in wrong), recap='יעד j = ביטים עליונים של PC+4 ואחריהם target * 4')


# ============================================================ C01
L1 = f'''
<p>כל פקודת MIPS היא <b>מילה אחת של 32 ביטים</b>. את המילה מחלקים לשדות, ויש שלושה פורמטים:</p>
<table><thead><tr><th>פורמט</th><th>31..26</th><th>25..21</th><th>20..16</th><th>15..11</th><th>10..6</th><th>5..0</th></tr></thead><tbody>
<tr><td>R</td><td>op = 0</td><td>rs</td><td>rt</td><td>rd</td><td>shamt</td><td>funct</td></tr>
<tr><td>I</td><td>op</td><td>rs</td><td>rt</td><td colspan="3">imm (16 ביט)</td></tr>
<tr><td>J</td><td>op</td><td colspan="6">target (26 ביט)</td></tr></tbody></table>
<p>כל שדה של אוגר הוא <b>5 ביטים</b>, כי יש 32 אוגרים. שדה op הוא 6 ביטים, והוא תמיד הראשון משמאל.</p>
<div class="lesson-rule">🔑 פקודות חישוב בין אוגרים ({code('add, sub, and, or, xor, slt')}) הן R. פקודות עם קבוע או זיכרון או הסתעפות ({code('addi, ori, lui, lw, sw, beq, bne')}) הן I. הקפיצות ({code('j, jal')}) הן J.</div>
<h3>מספרי האוגרים</h3>
<table><thead><tr><th>שמות</th><th>מספרים</th></tr></thead><tbody>
<tr><td>{code('$zero')}</td><td>0</td></tr><tr><td>{code('$at')}</td><td>1</td></tr><tr><td>{code('$v0, $v1')}</td><td>2, 3</td></tr>
<tr><td>{code('$a0-$a3')}</td><td>4-7</td></tr><tr><td>{code('$t0-$t7')}</td><td>8-15</td></tr><tr><td>{code('$s0-$s7')}</td><td>16-23</td></tr>
<tr><td>{code('$t8, $t9')}</td><td>24, 25</td></tr><tr><td>{code('$gp, $sp, $fp, $ra')}</td><td>28, 29, 30, 31</td></tr></tbody></table>
<div class="lesson-ex">דוגמה: {code('$t3')} הוא 8 + 3 = 11, ובחמישה ביטים 01011. ו-{code('$s2')} הוא 16 + 2 = 18 = 10010.</div>
<div class="lesson-trap">⚠️ אוגר אפשר לכתוב גם במספר ({code('$11')} הוא {code('$t3')}). בקידוד תמיד עובדים עם המספר.</div>
'''
l1 = [
    fact('mips_enc-C01-Q1', 'כמה ביטים תופס שדה rs (או rt) בקידוד פקודה?', '5 ביטים',
         [('4 ביטים', 'מספיקים רק ל-16 אוגרים'), ('6 ביטים', 'זה גודל שדה ה-op וה-funct'), ('16 ביטים', 'זה גודל ה-immediate')],
         'יש 32 אוגרים, ו-5 ביטים מספיקים לכתוב את המספרים 0 עד 31.', 'שדה אוגר = 5 ביטים', dict(key='regwidth'), 1),
    fact('mips_enc-C01-Q2', 'איזו מהפקודות הבאות היא פקודת R-type?', '`xor`',
         [('`ori`', 'יש בה immediate של 16 ביט, לכן I'), ('`lw`', 'גישה לזיכרון עם offset של 16 ביט, לכן I'), ('`j`', 'יש בה שדה target של 26 ביט, לכן J')],
         '`xor` עובדת על שלושה אוגרים בלבד, ולכן היא R-type עם op=0.', 'R: שלושה אוגרים, op=0', dict(key='fmt', fmt='R'), 2),
    fact('mips_enc-C01-Q3', 'איזו מהפקודות הבאות היא פקודת I-type?', '`sw`',
         [('`slt`', 'עובדת על שלושה אוגרים, לכן R'), ('`sub`', 'עובדת על שלושה אוגרים, לכן R'), ('`j`', 'יש בה שדה target ללא אוגרים, לכן J')],
         '`sw` כוללת אוגר בסיס, אוגר לשמירה ו-offset של 16 ביט, ולכן I-type.', 'I: אוגר(ים) ו-imm של 16 ביט', dict(key='fmt', fmt='I'), 0),
    fact('mips_enc-C01-Q4', 'לאיזו פקודה יש שדה target של 26 ביט?', '`j`',
         [('`beq`', 'משתמשת ב-imm של 16 ביט'), ('`sub`', 'פקודת R, בלי שדה כזה'), ('`lui`', 'משתמשת ב-imm של 16 ביט')],
         'רק פקודות J ({code} ו-`jal`) מקודדות כתובת של 26 ביט.'.replace('{code}', '`j`'), 'J: op + target (26 ביט)', dict(key='fmt', fmt='J'), 3),
    fact('mips_enc-C01-Q5', 'מהו המספר של האוגר `$t2` בחמישה ביטים?', '`01010`',
         [('`00010`', 'זה המספר של `$v0`, בלי להוסיף את ההיסט 8'), ('`10010`', 'זה המספר 18, כלומר `$s2`'), ('`01100`', 'זה המספר 12, כלומר `$t4`')],
         '`$t0` הוא 8, ולכן `$t2` הוא 10, ובחמישה ביטים 01010.', 't0 = 8, ואז מוסיפים את המספר', dict(key='regbin', name='t2'), 1),
    fact('mips_enc-C01-Q6', 'לאיזה אוגר יש מספר 22?', '`$s6`',
         [('`$t6`', '`$t6` הוא 14'), ('`$s7`', '`$s7` הוא 23'), ('`$t8`', '`$t8` הוא 24')],
         '`$s0` הוא 16, ולכן 22 הוא `$s6`.', 's0 = 16, t0 = 8, a0 = 4', dict(key='regname', num=22), 2),
]

# ============================================================ C02  R encode
L2 = f'''
<p>כדי לקודד פקודת R: ממלאים ששת השדות ואז ממירים להקסה.</p>
<ol style="text-align:right"><li>op = 0.</li><li>שמות האוגרים הופכים למספרים.</li><li>funct לפי הטבלה.</li><li>כותבים 32 ביטים ומקבצים לארבעות: כל קבוצה היא ספרת הקסה אחת.</li></ol>
<div class="lesson-trap">⚠️ <b>הסדר באסמבלי שונה מהסדר בקידוד.</b> כותבים {code('add rd, rs, rt')} אבל בקידוד השדות הם <b>rs, rt, rd</b>. היעד נכתב ראשון בטקסט, ובקידוד הוא שלישי.</div>
<table><thead><tr><th>פקודה</th><th>funct (עשרוני)</th><th>funct (הקסה)</th></tr></thead><tbody>
<tr><td>{code('add')}</td><td>32</td><td>0x20</td></tr><tr><td>{code('sub')}</td><td>34</td><td>0x22</td></tr><tr><td>{code('and')}</td><td>36</td><td>0x24</td></tr>
<tr><td>{code('or')}</td><td>37</td><td>0x25</td></tr><tr><td>{code('xor')}</td><td>38</td><td>0x26</td></tr><tr><td>{code('slt')}</td><td>42</td><td>0x2A</td></tr></tbody></table>
<div class="lesson-ex"><b>דוגמה:</b> {code('add $t0, $s1, $s2')}. כאן rd=8, rs=17, rt=18, funct=32.<br>
<code>000000 10001 10010 01000 00000 100000</code><br>
מקבצים לארבעות: <code>0000 0010 0011 0010 0100 0000 0010 0000</code> = <code>0x02324020</code>.</div>
<div class="lesson-rule">🔑 ארבעה ביטים הם ספרת הקסה אחת: 0000=0, 0001=1, 0010=2, 0011=3, 0100=4, 0101=5, 0110=6, 0111=7, 1000=8, 1001=9, 1010=A, 1011=B, 1100=C, 1101=D, 1110=E, 1111=F.</div>
'''
l2 = [
    fact('mips_enc-C02-Q1', 'בפקודה `sub $t0, $t1, $t2`, מהו הערך שיופיע בשדה rs בקידוד?', '9',
         [('8', 'זה האוגר `$t0`, שהוא היעד rd'), ('10', 'זה האוגר `$t2`, שהוא rt'), ('34', 'זה ה-funct של sub')],
         'rs הוא האוגר הראשון מבין המקורות, כלומר `$t1`, שהוא 9. היעד `$t0` הוא rd.', 'כתיבה rd, rs, rt · קידוד rs, rt, rd', dict(key='rsfield', asm='sub $t0, $t1, $t2'), 1),
    enc_r('mips_enc-C02-Q2', 'or $s0, $t1, $t2', 2),
    enc_r('mips_enc-C02-Q3', 'and $a0, $t0, $t1', 0),
    fact('mips_enc-C02-Q4', 'חמשת השדות הראשונים והשדה האחרון של פקודה הם `000000 01001 01010 10000 00000 100101`. מהי המילה בהקסה?', '`0x012A8025`',
         [('`0x012A8020`', 'funct 100101 הוא 0x25 ולא 0x20'), ('`0x01A28025`', 'שגיאת קיבוץ של הביטים לספרות'), ('`0x012A8052`', 'שתי הספרות האחרונות הוחלפו')],
         '0000 0001 0010 1010 1000 0000 0010 0101 ← ספרות 0, 1, 2, A, 8, 0, 2, 5.', 'כל 4 ביטים = ספרת הקסה', dict(key='bin2hex', bits='000000 01001 01010 10000 00000 100101'), 3),
    enc_r('mips_enc-C02-Q5', 'slt $t5, $s6, $a2', 3),
    enc_r('mips_enc-C02-Q6', 'xor $ra, $sp, $gp', 1),
]

# ============================================================ C03  R decode
L3 = f'''
<p>פענוח הוא הכיוון ההפוך: ממילה בהקסה חוזרים לפקודה.</p>
<ol style="text-align:right"><li>כל ספרת הקסה הופכת לארבעה ביטים (טבלת הספרות מהשלב הקודם).</li>
<li>מחלקים לשדות 6, 5, 5, 5, 5, 6.</li>
<li>אם ששת הביטים הראשונים הם 000000, זו R-type, ו-<b>funct</b> (ששת הביטים האחרונים) קובע איזו פקודה.</li>
<li>שדות rs, rt, rd הם מספרים. ממירים לשמות וכותבים לפי הסדר <b>rd, rs, rt</b>.</li></ol>
<div class="lesson-ex"><b>דוגמה:</b> <code>0x02324022</code> = <code>0000 0010 0011 0010 0100 0000 0010 0010</code> = <code>000000 10001 10010 01000 00000 100010</code>.
op=0, funct=34 (0x22) הוא sub, rs=17 ({code('$s1')}), rt=18 ({code('$s2')}), rd=8 ({code('$t0')}). לכן {code('sub $t0, $s1, $s2')}.</div>
<div class="lesson-trap">⚠️ השדה השלישי (rd) הוא היעד ונכתב <b>ראשון</b>. מי שקורא את השדות משמאל לימין בלי להחליף יקבל פקודה שגויה.</div>
<table><thead><tr><th>funct בהקסה</th><th>20</th><th>22</th><th>24</th><th>25</th><th>26</th><th>2A</th></tr></thead><tbody><tr><td>פקודה</td><td>add</td><td>sub</td><td>and</td><td>or</td><td>xor</td><td>slt</td></tr></tbody></table>
<div class="lesson-rule">🔑 שתי הספרות האחרונות של מילת R (6 הביטים האחרונים) כמעט קובעות את הפקודה: 20 add, 22 sub, 24 and, 25 or, 26 xor, 2A slt. (ספרה לפני כן יכולה לתרום 0 או 2 ביטים לשדה rd, לכן מסתכלים על 6 ביטים ולא על ספרה שלמה.)</div>
'''
l3 = [
    dec_r('mips_enc-C03-Q1', 'sub $t0, $s1, $s2', 0),
    dec_r('mips_enc-C03-Q2', 'or $t0, $t1, $t2', 1),
    dec_r('mips_enc-C03-Q3', 'slt $v1, $t8, $s4', 2),
    dec_r('mips_enc-C03-Q4', 'xor $s3, $t5, $t9', 3),
    dec_r('mips_enc-C03-Q5', 'and $fp, $sp, $at', 1),
    dec_r('mips_enc-C03-Q6', 'sub $gp, $t3, $t8', 0),
]

# ============================================================ C04  I encode
L4 = f'''
<p>פקודת I: ‏<code>op(6) rs(5) rt(5) imm(16)</code>. ה-immediate הוא מספר עם סימן ב-16 ביט (משלים ל-2), חוץ מ-ori.</p>
<table><thead><tr><th>פקודה</th><th>op עשרוני</th><th>op הקסה</th><th>כתיבה</th></tr></thead><tbody>
<tr><td>{code('addi')}</td><td>8</td><td>0x08</td><td>{code('addi rt, rs, imm')}</td></tr><tr><td>{code('ori')}</td><td>13</td><td>0x0D</td><td>{code('ori rt, rs, imm')}</td></tr>
<tr><td>{code('lw')}</td><td>35</td><td>0x23</td><td>{code('lw rt, imm(rs)')}</td></tr><tr><td>{code('sw')}</td><td>43</td><td>0x2B</td><td>{code('sw rt, imm(rs)')}</td></tr></tbody></table>
<ul><li>גם כאן הקידוד הוא <b>rs ואז rt</b>, אבל בכתיבה האוגר rt בא ראשון. ב-{code('lw/sw')} האוגר rs הוא אוגר הבסיס שבסוגריים.</li>
<li><b>immediate שלילי:</b> מוסיפים 65536 וכותבים בהקסה. לדוגמה {code('-4')} הוא 65532 = 0xFFFC.</li></ul>
<div class="lesson-ex"><b>דוגמה:</b> {code('addi $t0, $t1, -4')}: op=8, rs=9, rt=8, imm=0xFFFC.<br>
<code>001000 01001 01000 1111111111111100</code> = <code>0x2128FFFC</code>.</div>
<div class="lesson-rule">🔑 offset של מערך מילים: האיבר ה-i נמצא ב-<b>4 * i</b> בתים מתחילת המערך. אם {code('$t6')} מכיל את כתובת האיבר הראשון, אז {code('sw $fp, 20($t6)')} שומר ב-array[5].</div>
<div class="lesson-trap">⚠️ ב-I-type ה-immediate נכנס כמו שהוא (בבתים). לא מחלקים ולא מכפילים ב-4 בקידוד של addi, ori, lw ו-sw.</div>
'''
l4 = [
    enc_i('mips_enc-C04-Q1', 'addi $t0, $t1, 100', 1),
    enc_i('mips_enc-C04-Q2', 'addi $s1, $a0, -4', 3),
    enc_i('mips_enc-C04-Q3', 'lw $t2, 8($s0)', 0),
    enc_i('mips_enc-C04-Q4', 'sw $t3, 12($sp)', 2),
    enc_i('mips_enc-C04-Q5', 'ori $s5, $t0, 0xFF0F', 1),
    fact('mips_enc-C04-Q6', '`$t6` מכיל את הכתובת של `array[0]` במערך של מילים (4 בתים כל אחת). איזו פקודה שומרת את `$fp` ב-`array[5]`?', '`sw $fp, 20($t6)`',
         [('`sw $fp, 5($t6)`', 'ה-offset הוא בבתים, ולכן צריך 5 * 4'), ('`lw $fp, 20($t6)`', 'lw טוענת מהזיכרון ולא שומרת'), ('`sw $t6, 20($fp)`', 'האוגרים הוחלפו: הבסיס צריך להיות `$t6`')],
         'כתובת array[5] היא $t6 + 5 * 4 = $t6 + 20. שמירה היא sw, האוגר ששומרים הוא `$fp` והבסיס הוא `$t6`.'.replace('$t6 + 5 * 4 = $t6 + 20', 'בסיס + 20'),
         'איבר i = offset של 4 * i', dict(key='array', idx=5), 0),
]

# ============================================================ C05  I decode
L5 = f'''
<p>בפענוח I-type, ה-<b>op</b> (ששת הביטים הראשונים) קובע את הפקודה.</p>
<table><thead><tr><th>שתי ספרות ראשונות</th><th>20-23</th><th>34-37</th><th>8C-8F</th><th>AC-AF</th><th>10-13</th><th>14-17</th><th>3C-3F</th></tr></thead><tbody>
<tr><td>op</td><td>8 addi</td><td>13 ori</td><td>35 lw</td><td>43 sw</td><td>4 beq</td><td>5 bne</td><td>15 lui</td></tr></tbody></table>
<p>(כל טווח כזה הוא אותו op, כי שני הביטים התחתונים של הבית הראשון שייכים כבר ל-rs.)</p>
<ol style="text-align:right"><li>מפרקים ל-6, 5, 5, 16 ביטים.</li><li>op קובע את הפקודה, ומשם יודעים את הסדר בכתיבה.</li>
<li>ה-immediate: ב-{code('addi, lw, sw')} הוא <b>מספר עם סימן</b>. אם הביט העליון שלו (ביט 15) דולק, הוא שלילי: מחסרים 65536. ב-{code('ori')} הוא <b>בלי סימן</b>.</li></ol>
<div class="lesson-ex"><b>דוגמה:</b> <code>0x8D090004</code> = <code>100011 01000 01001 0000000000000100</code>. op=35 הוא lw, rs=8 ({code('$t0')}), rt=9 ({code('$t1')}), offset=4: {code('lw $t1, 4($t0)')}.<br>
<code>0x2128FFF0</code>: op=8 (addi), rs=9, rt=8, imm=0xFFF0 = 65520 - 65536 = -16: {code('addi $t0, $t1, -16')}.</div>
<div class="lesson-trap">⚠️ אותו imm של 0x8001: ב-{code('addi')} הוא -32767, וב-{code('ori')} הוא 32769.</div>
'''
l5 = [
    dec_i('mips_enc-C05-Q1', 'addi $t0, $t1, -16', 2),
    dec_i('mips_enc-C05-Q2', 'ori $t4, $t5, 0x8001', 0),
    dec_i('mips_enc-C05-Q3', 'sw $t3, 16($at)', 1),
    dec_i('mips_enc-C05-Q4', 'lw $t1, -4($sp)', 3),
    dec_i('mips_enc-C05-Q5', 'addi $s6, $a3, 200', 0),
    fact('mips_enc-C05-Q6', 'מילה שמתחילה בספרות `8F` (למשל `0x8FA90010`) היא איזו פקודה?', '`lw`',
         [('`sw`', 'sw היא op=43, כלומר מתחילה ב-AC עד AF'), ('`addi`', 'addi היא op=8, כלומר 20 עד 23'), ('`ori`', 'ori היא op=13, כלומר 34 עד 37')],
         '0x8F = 1000 1111, ששת הביטים הראשונים 100011 = 35, שהוא lw.', 'שתי הספרות הראשונות קובעות את op', dict(key='opfirst', byte=0x8F), 1),
]

# ============================================================ C06  branches and jumps
L6 = f'''
<p>ב-{code('beq rs, rt, L')} ו-{code('bne rs, rt, L')} שדה ה-immediate אינו כתובת. הוא <b>מספר המילים</b> מהפקודה שאחרי ההסתעפות אל היעד.</p>
<div class="lesson-formula">$$imm = \\frac{{\\text{{target}} - (PC+4)}}{{4}}$$</div>
<ol style="text-align:right"><li>מחסרים את <b>PC+4</b> מכתובת היעד.</li><li>מחלקים ב-4 (המרה מבתים למילים).</li><li>שלילי (הסתעפות אחורה) נכתב במשלים ל-2 ב-16 ביט.</li><li>הקידוד: op (4 ל-beq, 5 ל-bne), rs, rt, imm. כאן rs הוא האוגר הראשון בכתיבה.</li></ol>
<div class="lesson-ex"><b>דוגמה:</b> {code('beq $t0, $t1, L')} בכתובת 0x00400020 ו-L ב-0x00400040. $imm = (0x40 - 0x24)/4 = 7$. הקידוד <code>000100 01000 01001 0000000000000111</code> = <code>0x11090007</code>.</div>
<p><b>פענוח:</b> הכתובת שההסתעפות קופצת אליה היא <b>PC + 4 + 4 * imm</b>, כאשר imm נקרא עם סימן.</p>
<h3>קפיצה j</h3>
<p>{code('j')} היא J-type: op=2 ואחריו <b>target</b> של 26 ביט, שהוא הכתובת המוחלטת <b>חלקי 4</b>. בקפיצה, ארבעת הביטים העליונים של הכתובת נלקחים מ-PC+4, ובשאר: target * 4.</p>
<div class="lesson-ex"><b>דוגמה:</b> {code('j')} ליעד 0x00400020 (בכתובת 0x00400000): target = 0x00400020 / 4 = 0x00100008, והמילה <code>0x08100008</code>.</div>
<div class="lesson-trap">⚠️ שלוש טעויות נפוצות: להחסיר מ-PC במקום מ-PC+4, להשאיר את ה-imm בבתים, ולחשב j כהפרש יחסי. ל-j הכתובת מוחלטת.</div>
'''
l6 = [
    br_q('mips_enc-C06-Q1', 'beq', 8, 9, 0x00400100, 0x00400140, 'imm', 2),
    br_q('mips_enc-C06-Q2', 'bne', 17, 19, 0x00400200, 0x00400180, 'immhex', 0),
    br_q('mips_enc-C06-Q3', 'beq', 16, 17, 0x00400400, 0x00400410, 'word', 3),
    br_q('mips_enc-C06-Q4', 'bne', 8, 9, 0x00400050, 0x00400040, 'tgt', 1),
    jenc_q('mips_enc-C06-Q5', 0x00400020, 0x00400100, 2),
    jdec_q('mips_enc-C06-Q6', 0x10000200, 0x10000D00, 0),
]

# ============================================================ C07  lui / ori / addi
L7 = f'''
<p>רוצים לטעון קבוע של 32 ביט, אבל ל-immediate יש רק 16 ביט. לכן עובדים בשני חלקים:</p>
<ul><li>{code('lui rt, imm')}: ‏rt = imm &lt;&lt; 16. החצי העליון הוא imm, והתחתון אפס.</li>
<li>{code('ori rt, rs, imm')}: ה-imm מורחב <b>באפסים</b> (zero-extend), ואז OR.</li>
<li>{code('addi rt, rs, imm')}: ה-imm מורחב <b>בסימן</b> (sign-extend). אם ביט 15 דולק, כל 16 הביטים העליונים נדלקים, כלומר מוסיפים מספר שלילי.</li></ul>
<div class="lesson-ex"><b>דוגמה 1:</b> {code('lui $t0, 0x1234')} ואז {code('ori $t0, $t0, 0x5678')} נותנים <code>0x12345678</code>.<br>
<b>דוגמה 2:</b> {code('addi $t1, $0, 0xAAAA')}: ‏0xAAAA מורחב ל-0xFFFFAAAA, ולכן &#36;t1 = <code>0xFFFFAAAA</code> ולא 0x0000AAAA.</div>
<div class="lesson-trap">⚠️ <b>lui ואחריה addi עם חצי תחתון שביט 15 שלו דולק:</b> {code('lui $2, 0x1234')} ואז {code('addi $2, $2, 0x8000')} נותנים 0x12340000 + 0xFFFF8000 = <code>0x12338000</code>. החצי העליון קטן ב-1. כדי לקבל 0x12348000 עם addi צריך {code('lui $2, 0x1235')}. עם ori אין בעיה, כי הוא מורחב באפסים.</div>
<div class="lesson-rule">🔑 עוברים פקודה אחרי פקודה ומעדכנים את האוגר. בכל addi שואלים: האם ביט 15 דולק (הספרה הראשונה של ה-imm היא 8 עד F)? אם כן, מחסרים 0x10000 מהחצי העליון.</div>
'''
l7 = [
    seq_q('mips_enc-C07-Q1', ['lui $t0, 0x1234', 'ori $t0, $t0, 0x5678'], '$t0', 0),
    seq_q('mips_enc-C07-Q2', ['addi $t1, $0, 0xAAAA'], '$t1', 2),
    seq_q('mips_enc-C07-Q3', ['lui $t0, 0x00FF', 'addi $t0, $t0, 0x8010'], '$t0', 1),
    seq_q('mips_enc-C07-Q4', ['lui $t0, 0x00FF', 'ori $t0, $t0, 0x8010'], '$t0', 3),
    fact('mips_enc-C07-Q5', 'איזה קטע קוד מכניס את הערך `0xABCD8000` לאוגר `$t0`? (הקטעים משתמשים ב-lui ואחריה addi.)', '```asm\nlui  $t0, 0xABCE\naddi $t0, $t0, 0x8000\n```',
         [('```asm\nlui  $t0, 0xABCD\naddi $t0, $t0, 0x8000\n```', 'התוצאה 0xABCC8000: ה-addi מחסיר 0x10000 מהחצי העליון'),
          ('```asm\nlui  $t0, 0xABCC\naddi $t0, $t0, 0x8000\n```', 'התוצאה 0xABCB8000, רחוק יותר'),
          ('```asm\nlui  $t0, 0xABCD\naddi $t0, $t0, 0x0800\n```', 'התוצאה 0xABCD0800: החצי התחתון שגוי')],
         'addi עם 0x8000 מוסיף 0xFFFF8000, ולכן צריך להגדיל את החצי העליון ב-1: 0xABCE0000 + 0xFFFF8000 = 0xABCD8000.',
         'addi עם ביט 15 דולק ← מגדילים את ה-lui ב-1', dict(key='whichcode', target=0xABCD8000, reg='$t0'), 0, kind='whichcode'),
    seq_q('mips_enc-C07-Q6', ['lui $t0, 0x8000', 'addi $t0, $t0, -1'], '$t0', 2),
]

# ============================================================ C08 boss
L8 = f'''
<p>זה כל הקורס בשאלות אמיתיות ממבחנים. הכללים שפותרים את כולן:</p>
<ul><li><b>קידוד R:</b> ‏op=0, שדות <b>rs, rt, rd</b>, ‏funct (add 32, sub 34, and 36, or 37, xor 38, slt 42).</li>
<li><b>קידוד I:</b> ‏op, rs, rt, imm16. שלילי במשלים ל-2. ‏lw/sw: האוגר שבסוגריים הוא rs.</li>
<li><b>פענוח:</b> הקסה לביטים, חלוקה 6/5/5/5/5/6 או 6/5/5/16, ‏op קובע, ובאסמבלי rd (או rt) נכתב ראשון.</li>
<li><b>הסתעפות:</b> ‏imm = (יעד - (PC+4)) / 4, ובפענוח יעד = PC + 4 + 4 * imm.</li>
<li><b>טעינת קבועים:</b> ‏lui לחצי העליון, ‏ori באפסים, ‏addi בסימן.</li></ul>
<div class="lesson-rule">🔑 בכל שאלה: לפרק לשדות, להמיר לבסיס אחד, ורק אז להשוות לאופציות. רוב המסיחים הם שדות שהוחלפו או ‏imm שנקרא בלי סימן.</div>
'''
l8 = [
    dict(bankId='24A-A-Q2', recap='כל פקודה מעדכנת את האוגר, ו-addi מרחיב בסימן'),
    dict(bankId='24B-A-Q17', recap='addi: ‏op=8, ‏rs ואז rt, ו-imm שלילי במשלים ל-2'),
    dict(bankId='25B-A-Q17', recap='imm = (יעד - (PC+4)) / 4'),
    dict(bankId='24A-A-Q19', recap='op=8: addi, ו-imm נקרא עם סימן'),
    dict(bankId='24S-A-Q17', recap='R: ‏rs, rt, rd, funct (xor = 38)'),
    dict(bankId='23A-B-Q19', recap='op=13: ori, ו-imm בלי סימן'),
]

l2.append(dict(bankId='23A-A-Q17', recap='R: rs, rt, rd, funct (slt = 42)'))
l3.append(dict(bankId='22B-A-Q19', recap='op=0 ו-funct 0x22: sub, והכתיבה rd, rs, rt'))
l4.append(dict(bankId='23B-A-Q17', recap='addi שלילי: משלים ל-2 ב-16 ביט'))
l5.append(dict(bankId='24B-A-Q19', recap='op=13: ori, ו-imm בלי סימן'))
l6.append(dict(bankId='23A-B-Q17', recap='imm = (יעד - (PC+4)) / 4, שלילי במשלים ל-2'))
l7.append(dict(bankId='23B-B-Q2', recap='lui, ואז addi שמרחיב בסימן'))

emit('C01.js', 'C01', 1, '🧩', 'שלושה פורמטים ושדות', 'להכיר את שלושת הפורמטים, את רוחב השדות ואת מספרי האוגרים.', L1, l1)
emit('C02.js', 'C02', 2, '🔧', 'קידוד פקודות R', 'לקודד פקודת add/sub/and/or/xor/slt להקסה.', L2, l2)
emit('C03.js', 'C03', 3, '🔍', 'פענוח פקודות R', 'לפענח מילת R בהקסה לפקודת אסמבלי.', L3, l3)
emit('C04.js', 'C04', 4, '💾', 'קידוד פקודות I', 'לקודד addi, ori, lw ו-sw, כולל immediate שלילי.', L4, l4)
emit('C05.js', 'C05', 5, '🔎', 'פענוח פקודות I', 'לפענח מילת I לפי ה-op, ולקרוא את ה-immediate נכון.', L5, l5)
emit('C06.js', 'C06', 6, '↪️', 'הסתעפויות וקפיצות', 'לחשב offset של beq/bne ולקודד ולפענח j.', L6, l6)
emit('C07.js', 'C07', 7, '🧱', 'lui, ori ו-addi', 'לחשב מה נשאר באוגר אחרי רצף lui/ori/addi.', L7, l7)
emit('C08.js', 'C08', 8, '🏆', 'מבחן מסכם', 'לפתור שאלות קידוד ופענוח בגודל מבחן.', L8, l8, boss=True)
