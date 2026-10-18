# Learn coverage - computer-systems

Re-pass 2026-10-18 against the full built bank (questions.json, 238 questions in 11 topics). Every concept a question relies on is mapped to the brief section that teaches it. Rows marked **added** were gaps closed in this pass (new sections in docs/briefs/). Ids are examples, not complete lists.

| concept | brief section | example question ids |
|---|---|---|
| decimal value of an infinite repeating fraction in base b | 01 מתכונים, שבר אינסופי מחזורי | 22A-A-Q4, 23A-A-Q4, 24A-A-Q4, 25A-A-Q4 |
| integer base conversion (via decimal, repeated division) | 01 מתכונים | 22A-A-Q11, 22B-B-Q11, 24S-A-Q11 |
| conversion between bases that are powers of each other (9<->3, 16->8, 8->4) and [0.(b-1)...]=1 | 01 בסיסים שהם חזקות זה של זה (**added**) | 23A-A-Q11, 23B-A-Q11, 23B-B-Q11, 24A-A-Q8, 24B-A-Q8 |
| "which equivalence is wrong" across bases | 01 בסיסים שהם חזקות זה של זה (**added**) | 23A-B-Q4, 23A-B-Q11, 25A-A-Q11, 25B-A-Q11 |
| range and bit count for unsigned (integer and fixed point) | 02 מתכונים | 25A-A-Q6, 24A-A-Q18 |
| truncation vs rounding error of a binary fraction | 02 שברים בינאריים: תחום, קיצוץ ועיגול (**added**) | 23B-B-Q6, 24A-A-Q6, 24B-A-Q6 |
| fixed-point range with n fraction bits, signed and unsigned | 02 שברים בינאריים (**added**), 03 מתכונים | 23B-A-Q6, 22A-A-Q6, 24S-A-Q6, 24B-A-Q18 |
| how many bits for a given signed range | 03 מתכונים, כמה ספרות לתחום | 23A-A-Q6, 23A-B-Q6, 25B-A-Q6 |
| possible values given some bits are 1 | 03 מציאת ערכים אפשריים | 22A-A-Q5, 23A-B-Q5, 24S-A-Q5, 25B-A-Q5 |
| signed overflow in 8-bit add and subtract | 03 overflow, שלוש דרכים שקולות | 22A-A-Q12, 23A-A-Q12, 24S-A-Q12, 25B-A-Q12 |
| encoding a recurring fraction into IEEE-754 single (hex) | 04 מתכון: קידוד | 23A-A-Q3, 23B-B-Q3, 24B-A-Q3, 25B-A-Q3 |
| decoding a hex word to a decimal value | 04 מתכון: פענוח | 22B-B-Q3 |
| spacing of adjacent floats, groups of equal spacing | 04 עובדות, 04 חיבור, השוואה וספירה (**added**) | 22A-A-Q7, 24B-A-Q7, 24S-A-Q7, 22B-B-Q7 |
| ratio of largest to smallest float at one exponent | 04 עובדות | 25A-A-Q7, 25B-A-Q7 |
| sum of two floats: absorption, rounding, 0 / infinity results | 04 חיבור, השוואה וספירה (**added**) | 22A-A-Q3, 22B-A-Q3, 23A-A-Q7, 23A-B-Q7 |
| smallest normal minus largest denormal | 04 חיבור, השוואה וספירה (**added**) | 23B-A-Q7, 24S-A-Q3 |
| comparing two floats by exponent field and sign | 04 חיבור, השוואה וספירה (**added**) | 23B-B-Q7, 24A-A-Q7 |
| counting floats in an interval (log-uniform density) | 04 חיבור, השוואה וספירה (**added**) | 22B-A-Q7 |
| XOR identities, "which equation is wrong" | 05 זהויות, בדיקת שקילות | 22A-A-Q1, 22B-A-Q1, 23A-B-Q1, 25A-A-Q1, 25B-A-Q1 |
| gate building from NAND / NOR, constant inputs | 06 מתכונים (no exam question uses it directly; supports 05 and 07) | - |
| reading a mux circuit and writing its equation | 07 קריאת מעגל עם מרבב | 22A-A-Q14, 23A-A-Q14, 24B-A-Q14, 25A-A-Q14 |
| circuit where a decoder (or gates) drives the selectors of a mux | 07 מעגל שבו מפענח מזין את הבוררים של מרבב (**added**) | 22A-A-Q15, 23A-A-Q15, 24A-A-Q15, 25B-A-Q15 |
| K-map / SOP design | 08 מתכון (no exam question; supports 07) | - |
| HA and FA count in a multiplier by a constant | 09 מתכונים, 09 ספירת HA ו-FA (**added**, partial: official counts differ when the constant has internal zeros) | 22A-A-Q16, 23A-B-Q16, 24B-A-Q16, 25B-A-Q16 |
| number of multiplier outputs | 09 ספירת HA ו-FA (**added**) | 24B-A-Q16, 24S-A-Q16 |
| shift register with XOR feedback, trace | 10 מתכון: מעקב אוגר הזזה | 22A-A-Q9, 23A-A-Q9, 24A-A-Q9, 25A-A-Q9, 25B-A-Q9 |
| shift register with inverters between stages, cycle length | 10 מהפך בין דלגלגים (**added**) | 22B-A-Q9, 23B-A-Q9, 22B-B-Q9, 24B-A-Q9 |
| stages of a new instruction (bge, blt, beqal) | 11 פקודות חדשות שמוסיפים למעבד (**added**), 11 מתכונים | 22A-A-Q8, 25A-A-Q8, 25B-A-Q8 |
| stages of xori, jal, jr, jalr, compare-with-zero | 11 פקודות חדשות שמוסיפים למעבד (**added**) | 22B-A-Q8, 22B-B-Q8, 23A-A-Q8, 23A-B-Q8, 23B-A-Q8, 23B-B-Q8 |
| control signals per instruction (R-type, lw, sw, beq) | 11 אותות בקרה | 22A-A-Q18, 22B-A-Q18, 23A-A-Q18, 23B-A-Q18, 25B-A-Q18 |
| encode assembly to hex (R, I, branch) | 12 מתכון: קידוד, offset של הסתעפות | 22A-A-Q17, 23A-A-Q17, 22B-A-Q17, 25B-A-Q17 |
| decode hex to assembly | 12 מתכון: פענוח | 22A-A-Q19, 23A-B-Q19, 24A-A-Q19, 25A-A-Q19 |
| register value after lui / addi / add (sign extension) | 12 מתכון: lui/addi/ori | 22A-A-Q2, 23A-A-Q2, 24B-A-Q2, 25A-A-Q2 |
| which snippet loads a given constant; addi vs ori extension | 12 טעינת קבועים (**added**) | 23A-B-Q2 |
| constant array index to offset(base) | 12 טעינת קבועים וכתובת איבר במערך (**added**) | 25A-A-Q17 |
| compute an expression without destroying operands (a=4a-3b) | 13 חישוב ביטוי בלי להרוס משתנים (**added**) | 22A-A-Q10, 22B-A-Q10, 24B-A-Q10, 24S-A-Q10 |
| if/else translation with slt for <, >, <=, >= | 13 תנאים: ארבעת היחסים (**added**) | 22A-A-Q13, 23B-B-Q13, 24S-A-Q13, 25A-A-Q13 |
| array indexing and pointers in loops | 13 מתכונים | 22A-A-Q20, 24S-A-Q20, 25A-A-Q20, 25B-A-Q13 |
| sign-bit test (slt with zero) and bit mask loops | 13 בדיקות ביט ואיבר קודם במערך (**added**), 13 מסכה | 25A-A-Q10, 25B-A-Q10, 23B-A-Q10 |
| previous array element (negative offset) | 13 בדיקות ביט ואיבר קודם במערך (**added**) | 23A-B-Q20 |
| trace of a small loop (counter, accumulate) | 13 מעקב | 23A-A-Q10, 23A-B-Q10 |

## Remaining

- Topics `logic_gates` and `combinational_design` have no questions in the bank (they teach prerequisites for 05, 07 and 09).
- Multiplier HA counts: the sequential-row method matches 6 of 9 constants checked; for constants with internal zeros (29, 23, 27 at 4 bits) the official figure uses fewer HA. The brief says so and sends the student to the drawing.
