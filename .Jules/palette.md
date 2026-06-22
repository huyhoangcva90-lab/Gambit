## 2024-06-19 - Added ARIA and tooltips to Focus Timer controls
**Learning:** Found multiple icon-only timer control buttons (Play/Pause, Complete, Skip, Mute, Close) in `apps/routine.html` without accessible labels or tooltips, meaning screen readers would announce them unhelpfully (e.g., "button, button, button") and mouse users would have to guess what "⏭" or "✓" does.
**Action:** Always verify icon-only buttons have both an `aria-label` (for screen readers) and a `title` (for mouse user tooltips), and update them dynamically when the button state changes (e.g. `title={run?"Pause":"Play"} aria-label={run?"Pause timer":"Start timer"}`).

## 2026-06-22 - Added ARIA and tooltips to Date Navigation buttons
**Learning:** Found multiple icon-only navigation buttons (Previous/Next day) in `apps/habits.html` without accessible labels or tooltips. Screen readers would announce them unhelpfully and mouse users had no tooltip.
**Action:** Always verify icon-only buttons have both an `aria-label` (for screen readers), a `title` (for mouse user tooltips), and `aria-hidden="true"` on the inner icon elements.
