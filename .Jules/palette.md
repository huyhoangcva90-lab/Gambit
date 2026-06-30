## 2024-06-19 - Added ARIA and tooltips to Focus Timer controls
**Learning:** Found multiple icon-only timer control buttons (Play/Pause, Complete, Skip, Mute, Close) in `apps/routine.html` without accessible labels or tooltips, meaning screen readers would announce them unhelpfully (e.g., "button, button, button") and mouse users would have to guess what "⏭" or "✓" does.
**Action:** Always verify icon-only buttons have both an `aria-label` (for screen readers) and a `title` (for mouse user tooltips), and update them dynamically when the button state changes (e.g. `title={run?"Pause":"Play"} aria-label={run?"Pause timer":"Start timer"}`).
## 2024-06-30 - Added ARIA and tooltips to Journal controls
**Learning:** Found multiple icon-only control buttons (Search, Toggle Dark Mode, Editor Controls, Keyboard Toolbar) in `apps/journal/index.html` without accessible labels or tooltips, meaning screen readers would announce them unhelpfully and mouse users would have to guess what they do.
**Action:** Always verify icon-only buttons have both an `aria-label` (for screen readers) and a `title` (for mouse user tooltips).
