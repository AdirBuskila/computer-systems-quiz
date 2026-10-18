# STATUS - computer-systems

Resume here: phase 7 - ship (awaiting Adir). QA done 2026-10-18: 238 questions (219 unique), 14 learn chapters, 4 guided courses / 33 levels, all scripts green.
Opus sessions: 0 of 2
Engine: mcq   Format: unknown   Cutoff: unknown

Triage material (private, names students, never copied into this repo): C:\Users\Adir\Desktop\Coding\Dev\course-factory\courses\computer-systemsormat_triage.md

Gates 1, 2 and 7 always stop for Adir.

- [x] Phase 0 - intake
  - [ ] registry entry exists
  - [ ] source folder exists and is non-empty
- [x] Phase 1 - triage  (GATE 1: Adir approves format, cutoff, topics)
  - [x] triager run per subfolder
  - [x] format_triage.md merged (verdict, cutoff, topics, engine choice)
  - [x] Adir approved
  - [x] config.overlay.json written, app repo scaffolded (triage stays in the factory)
- [x] Phase 2 - flagship  (GATE 2: Adir tries it in the browser)
  - [x] topic taxonomy chosen
  - [x] flagship sitting transcribed + validated (25B-A: 20 MCQ read, 19 in bank, Q2 held - see ASK_ADIR)
  - [x] steps (if open questions) + refuter pass
  - [x] smoke / verify_dom green (verify_dom needs a learn.js; a stub was used until phase 5 briefs exist)
  - [x] Adir tried it
- [x] Phase 3 - bank
  - [ ] all in-scope sittings transcribed (batches of <=4)
  - [ ] validate.py clean
  - [ ] solver run for questions with no trustworthy solution
  - [ ] refuter: non-official all; official 20% sample (whole exam on any disagreement)
  - [ ] arbiter / ASK_ADIR for disagreements
  - [ ] completeness check per exam
- [x] Phase 4 - steps
  - [ ] step-author batches done for every open question
  - [ ] rubricSource / stepsSource labeled
  - [ ] refuter on every steps block
- [x] Phase 5 - learn
  - [ ] learn-writer per topic
  - [ ] coverage report: no gaps
- [x] Phase 5b - need help
  - [ ] 2-5 course areas approved at gate 1, `needHelp` in course.config.json
  - [ ] learn-writer lessons + coverage table complete, step-author questions (bankId pulls marked)
  - [ ] course_lint.js --strict clean, refuter (course_dump.js) clean, levels set to ai-verified
  - [ ] tools/redact.txt filled, validate.py clean
- [x] Phase 6 - QA
  - [x] validate, build_questions, build_learn, smoke, verify_dom green
  - [x] shoot.js screenshots taken
  - [x] render-checker sweep clean
- [x] Phase 7 - ship  (GATE 3: Adir OKs going public)
  - [ ] deck redesign done (else stop and tell Adir)
  - [ ] .gitignore excludes raw PNGs, favicon, GoatCounter, .nojekyll
  - [ ] year range checked against data
  - [ ] Adir OK to go public
  - [ ] GitHub repo + Pages live
  - [ ] deck tile added
  - [ ] registry status = live

## Notes
