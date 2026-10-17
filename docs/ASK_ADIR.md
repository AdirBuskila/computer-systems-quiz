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
- Status: hold

## Resolved
