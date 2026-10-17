# ASK_ADIR - computer-systems

Open questions for Adir. One entry per item; the orchestrator moves it to Resolved when answered.

## Open

<!-- Entry format:
### <exam code> Q<number> - <short title>
- Path: <absolute file path>
- Page: <page number>
- Question: <what is unclear or missing>
- Needed: <what Adir must provide or decide>
- Status: hold
-->

### 25B-A Q2 - official key disagrees with the arithmetic
- Path: sitting 25B-A (exam page 2, solution page 19)
- Page: 2 (question), 19 (working)
- Question: addi $1,$0,0xAAAA ; add $1,$1,$1 ; addi $5,$1,0xAAAA ; addi $5,$5,0x0002. The key circles option a, 0xFFFE0000. Recomputed: $1 = 0xFFFFAAAA, then 0xFFFF5554, $5 = 0xFFFEFFFE, then +2 = 0xFFFF0000, which is not among the six options. The lecturer's own working writes 0xFFFEFFFE + 2 = 0xFFFE0000.
- Arbiter (2026-10-17): transcription of page 2 confirmed exact; the key is genuinely wrong. Correct result is 0xFFFF0000 (sign-extended addi); a zero-extension reading gives 0x00020000; neither is an option. Page 19 is right up to 0xFFFEFFFE, then drops the carry when adding 2.
- Needed: decide whether to keep Q2 held, accept a as the official answer (arithmetic slip in the key), or drop the question.
- Arbiter (2026-10-17, second review): re-derived from page 2: 0xFFFFAAAA -> 0xFFFF5554 -> 0xFFFEFFFE -> 0xFFFF0000. Confirmed: no printed option is right (zero-extension gives 0x00020000, also absent). Kept held.
- Status: hold

### 25A-A Q15 - one minterm differs between the circuit and every option
- Path: sitting 25A-A (exam page 11, solution page 28)
- Page: 11 (question), 28 (working)
- Question: decoder + 4-to-1 mux circuit. The circuit gives F = sum(1,3,4,7,8,10,12,15) (the lecturer's working lists the term A.Bbar.C.Dbar = 1010). All four printed options contain A.Bbar.C.D (1011) in that place. Option a (circled) matches the circuit on the other seven terms and the others do not.
- Needed: decide whether to accept a as the official answer (shared misprint in the options), or drop the question.
- Arbiter (2026-10-17): circuit re-traced on page 11 (top OR = CD=00 + CD=10 -> mux 00 = Dbar; bottom OR = CD=00 + CD=11 -> mux 01; C -> 10; D -> 11; X = AB=00, Y = not(AB=10)). F = sum(1,3,4,7,8,10,12,15). Options checked at zoom: a = {1,3,4,7,8,11,12,15}, b, c, d differ further. No printed option equals the circuit; not a transcription error. Kept held.
- Status: hold

## Resolved

### 23A-B Q10 - official key disagrees with the simulation
- Path: sitting 23A-B (exam page 8, solution page 27)
- Page: 8 (question), 27 (working)
- Question: addi $7,$0,-1 ; addi $8,$0,0x156 ; addi $9,$0,1 ; lp: slt $1,$8,$9 ; bne $1,$0,end ; add $9,$9,$9 ; addi $7,$7,1 ; j lp. The key circles a, 0x100 (the working ends with $9 = 2^8 = 256). Simulation: with $9 = 256 the test 342 < 256 is false, so $9 doubles once more to 512 and only then does slt succeed. 512 is option d.
- Needed: decide whether to keep Q10 held, accept a as the official answer, set d (512) as the answer, or drop the question.
- Arbiter (2026-10-17): ruling (c). Simulation re-derived: $9 runs 1..256, 342<256 is false, doubles to 512, then exits; the p.27 working confuses $7=8 with $9. Shipped d (512) as correctId, answerSource solved, official false, explanation opens with the key-was-wrong sentence.
- Status: resolved

### 23A-B Q12 - two options are overflow-free as printed
- Path: sitting 23A-B (exam page 9, solution page 29)
- Page: 9 (question), 29 (working)
- Question: "which calculation does not light the overflow output". Option a (01111000 + 10011100 = 120 - 100 = 20) is the circled key. Option b is printed as a subtraction (01111000 - 01100100 = 120 - 100 = 20), which also has no overflow; the lecturer's working evaluates b as an addition (120 + 100 = 220, overflow).
- Needed: decide whether to keep Q12 held, accept both a and b, accept only a, or drop the question.
- Arbiter (2026-10-17): ruling (d) with acceptedIds. Page 9 re-read: b is printed with a minus; 120-100=20 has no overflow, same as a. Shipped correctId a, acceptedIds [a,b], answerSource solved, official false, explanation notes both are right.
- Status: resolved

### 23B-B Q20 - official key skips the store on the wrong condition
- Path: sitting 23B-B (exam pages 15-16, solution pages 34-35)
- Page: 16 (options), 35 (working)
- Question: C code `if (array1[i] > array2[i]) array2[i] = array1[i];` with `lw $10,0($9)` (array1[i]) and `lw $11,0($8)` (array2[i]). The key circles a: `slt $1,$11,$10 ; bne $1,$0,lab2 ; sw $10,0($8)`. `slt $1,$11,$10` gives 1 exactly when array1[i] > array2[i], so `bne ... lab2` skips the store in that case; array2 ends as the elementwise minimum. Option b (`beq $1,$0,lab2`) is the correct translation, and option c gives the same result as b on every input. The lecturer's page comments a as correct and b as "wrong condition".
- Needed: decide whether to keep Q20 held, accept a as the official answer, set b as the answer, or drop the question.
- Arbiter (2026-10-17): ruling (c). slt $1,$11,$10 sets 1 iff array1[i]>array2[i]; the store must be skipped when $1=0, so beq (b). Option c translates >= and matches only because the equal-case store is a no-op, so b is the unique faithful translation (same standard as 24A-A Q20). Shipped b, answerSource solved, official false.
- Status: resolved

### 24A-A Q20 - option d gives the same array as the key
- Path: sitting 24A-A (exam pages 16-17, solution pages 34-35)
- Page: 17 (options), 34-35 (typed solution)
- Question: option d (slt $1,$10,$11 ; bne $1,$0,lab2 ; sw) stores when array1[i]>=array2[i]; it differs from the key a (slt $1,$11,$10 ; beq) only when the elements are equal, where the store is a no-op.
- Arbiter (2026-10-17): ruling (b), key right. The question asks for the missing instructions of a translation of `>`; d translates `>=`, so a is the unique faithful translation (the lecturer marks d "wrong compare"). One-line Hebrew note added to the explanation.
- Status: resolved
