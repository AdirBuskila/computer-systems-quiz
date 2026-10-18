# נתיב נתונים ובקרה

> 🔑 **בשורה אחת:** ב-MIPS Single Cycle כל פקודה עוברת בשלבים Fetch, Decode, ALU, Memory, Write-Back (לא בהכרח בכולם), ואותות הבקרה נקבעים מה-opcode. שאלות המבחן: אילו שלבים, ואילו אותות לפקודה.

## מה המבחן שואל

- אילו שלבים מבצעת פקודה (כולל פקודה חדשה כמו `blt` שמוסיפים למעבד, `25B-A-Q8`).
- מה צירוף אותות הבקרה הנכון לפקודה נתונה (`25B-A-Q18`).
- מה נדרש להוסיף למעבד כדי לתמוך בפקודה חדשה.

## שלבים לפי פקודה

| פקודה | שלבים |
|---|---|
| R-type (add, sub, and, or, xor, slt) | Fetch, Decode, ALU, Write-Back |
| lw | Fetch, Decode, ALU (כתובת), Memory, Write-Back |
| sw | Fetch, Decode, ALU (כתובת), Memory |
| beq, bne | Fetch, Decode, ALU (השוואה) |
| addi, ori, lui | Fetch, Decode, ALU, Write-Back |
| j | Fetch, Decode |

## אותות בקרה

| אות | R-type | lw | sw | beq | j |
|---|---|---|---|---|---|
| RegDst | 1 (Rd) | 0 (Rt) | X | X | X |
| ALUSrc | 0 | 1 | 1 | 0 | X |
| MemtoReg | 0 | 1 | X | X | X |
| RegWrite | 1 | 1 | 0 | 0 | 0 |
| MemRead | 0 | 1 | 0 | 0 | 0 |
| MemWrite | 0 | 0 | 1 | 0 | 0 |
| Branch | 0 | 0 | 0 | 1 | 0 |
| Jump | 0 | 0 | 0 | 0 | 1 |
| ALUOp | 10 (לפי funct) | 00 (add) | 00 (add) | 01 (sub) | X |

פירוש: ALUOp הוא 00 לחיבור, 01 לחיסור, 10 "הפעולה נקבעת מהשדה funct". ב-`addi` (אם הנתיב תומך בו) האותות כמו ב-lw, אבל MemRead=0 ו-MemtoReg=0. X הוא "לא משנה".

## מתכונים

**לבדוק אותות לפקודה:** שואלים ארבע שאלות.
1. האם נכתב אוגר? (RegWrite). אם כן, איזה: Rd או Rt (RegDst).
2. האם הכניסה השנייה ל-ALU היא אוגר או immediate (ALUSrc)?
3. האם נגשים לזיכרון? קריאה או כתיבה? (MemRead/MemWrite). מה נכתב לאוגר: ALU או זיכרון (MemtoReg).
4. האם קפיצה או הסתעפות? (Branch, Jump). ה-ALU מחסר אם הסתעפות.

**פקודה חדשה (למשל blt):** קובעים אילו שלבים. `blt` דומה ל-`beq`: ה-ALU מבצע `slt` במקום חיסור, ולפי התוצאה נבחר בין PC+4 לכתובת היעד. לכן Fetch, Decode, ALU. אין כתיבה לאוגר ואין זיכרון.

**כתובת הסתעפות:** $PC+4+\text{sext}(imm)\cdot4$. **כתובת j:** ארבעת הביטים העליונים של $PC+4$, אחר כך 26 ביט ה-imm, ואחר כך 00.

## דוגמה

האם אפשרות עם `ALUOp=10; RegDst=1; MemRead=0; RegWrite=1` מתאימה ל-`beq`? לא. ב-beq: RegWrite=0 ו-Branch=1 ו-ALUOp=01. שילוב כזה מתאים ל-R-type.

## פקודות חדשות שמוסיפים למעבד

| פקודה | שלבים | הסבר |
|---|---|---|
| `bge`, `blt` | Fetch, Decode, ALU | ה-ALU מחסר או מבצע `slt`. אין Memory ואין Write-Back |
| `beqal` | Fetch, Decode, ALU, Write-Back | כמו beq, ובנוסף כותבת PC+4 לאוגר 31 (ra) |
| `xori`, `andi`, `ori` | Fetch, Decode, ALU, Write-Back | כמו addi, אבל ה-imm מורחב באפסים |
| `jr` | Fetch, Decode | אין ALU. `GPR[Rs]` נכנס ל-PC ישירות |
| `jalr` | Fetch, Decode, Write-Back | כמו jr, ובנוסף כותבת PC+4 לאוגר 31 (ra) |
| `jal` | Fetch, Decode, Write-Back | כמו j, ובנוסף כותבת PC+4 לאוגר 31 (ra). אין ALU |
| השוואה לאפס (למשל `brifz`) | Fetch, Decode, ALU | ה-ALU נחוץ כדי לבדוק אם הערך הוא 0 |

הכלל: ALU נדרש כשיש חישוב או השוואה. Memory רק אם קוראים או כותבים בזיכרון הנתונים. Write-Back רק אם נכתב אוגר.

## מלכודות

> 🪤 **X בטבלה.** אם אפשרות במבחן נותנת ערך מוגדר לאות שהוא X (למשל RegDst בהסתעפות), אין זו בהכרח טעות. בודקים רק אותות שחייבים.

> ⚠️ **sw לא כותב אוגר.** RegWrite=0, גם אם הוא משתמש ב-ALU.

> ⚠️ **ALUOp של lw/sw הוא 00 (חיבור כתובת)**, לא 10.
