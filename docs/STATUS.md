# STATUS - computer-systems

Resume here: phase 7 - ship (awaiting Adir). QA done 2026-10-18: 238 questions (219 unique), 14 learn chapters, 4 guided courses / 33 levels, all scripts green.
Opus sessions: 0 of 2
Engine: mcq   Format: unknown   Cutoff: unknown

Triage material (private, names students, never copied into this repo): C:\Users\Adir\Desktop\Coding\Dev\course-factory\courses\computer-systemsormat_triage.md

Gates 1, 2 and 7 always stop for Adir.

- [x] Phase 0 - intake
  - [x] registry entry exists
  - [x] source folder exists and is non-empty
- [x] Phase 1 - triage  (GATE 1: Adir approves format, cutoff, topics)
  - [x] triager run per subfolder
  - [x] format_triage.md merged (verdict, cutoff, topics, engine choice)
  - [x] Adir approved
  - [x] config.overlay.json written, app repo scaffolded (triage stays in the factory)
- [x] Phase 2 - flagship  (GATE 2: Adir tries it in the browser)
  - [x] topic taxonomy chosen
  - [x] flagship sitting transcribed + validated (25B-A: 20 MCQ read, 19 in bank, Q2 held - see ASK_ADIR)
  - [x] steps (if open questions) + refuter pass (n/a: the exam bank is all MCQ; course steps are in Phase 5b)
  - [x] smoke / verify_dom green (verify_dom needs a learn.js; a stub was used until phase 5 briefs exist)
  - [ ] Adir tried it (not recorded)
- [x] Phase 3 - bank
  - [x] all in-scope sittings transcribed (batches of <=4): 12 sittings 22A-A .. 25B-A, tools/raw/*.json
  - [x] validate.py clean
  - [x] solver run for questions with no trustworthy solution (n/a: official keys and solutions for all; 4 unofficial answers flagged in the bank)
  - [x] refuter: non-official all; official 20% sample (tools/verify/<sitting>/, tools/raw/_verify_25B-A.json)
  - [x] arbiter / ASK_ADIR for disagreements (25B-A Q2 ruled and held, see ASK_ADIR)
  - [x] completeness check per exam
- [x] Phase 4 - steps
  - [x] step-author batches done for every open question (n/a for the bank; the guided courses have steps)
  - [x] rubricSource / stepsSource labeled (all 33 levels ai-verified)
  - [x] refuter on every steps block (tools/raw/_verify_course_*.json)
- [x] Phase 5 - learn
  - [x] learn-writer per topic (14 chapters in docs/briefs)
  - [x] coverage report: gaps closed, two listed as remaining (docs/learn_coverage.md)
- [x] Phase 5b - need help
  - [x] 2-5 course areas approved at gate 1, `needHelp` in course.config.json (4 areas)
  - [x] learn-writer lessons + coverage table complete, step-author questions (bankId pulls marked)
  - [x] course_lint.js --strict clean, refuter (course_dump.js) clean, levels set to ai-verified
  - [ ] tools/redact.txt filled (still an empty stub, no names flagged), validate.py clean
- [x] Phase 6 - QA
  - [x] validate, build_questions, build_learn, smoke, verify_dom green
  - [x] shoot.js screenshots taken
  - [x] render-checker sweep clean
- [ ] Phase 7 - ship  (GATE 3: Adir OKs going public)
  - [ ] deck redesign done (else stop and tell Adir)
  - [x] .gitignore excludes raw PNGs, favicon, GoatCounter, .nojekyll
  - [ ] year range checked against data (data is 2022-2025; no README or OG text yet)
  - [ ] Adir OK to go public
  - [ ] GitHub repo + Pages live (no remote yet)
  - [ ] deck tile added
  - [ ] registry status = live

## Notes
