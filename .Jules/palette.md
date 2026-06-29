## 2024-06-19 - Added ARIA and tooltips to Focus Timer controls
**Learning:** Found multiple icon-only timer control buttons (Play/Pause, Complete, Skip, Mute, Close) in `apps/routine.html` without accessible labels or tooltips, meaning screen readers would announce them unhelpfully (e.g., "button, button, button") and mouse users would have to guess what "⏭" or "✓" does.
**Action:** Always verify icon-only buttons have both an `aria-label` (for screen readers) and a `title` (for mouse user tooltips), and update them dynamically when the button state changes (e.g. `title={run?"Pause":"Play"} aria-label={run?"Pause timer":"Start timer"}`).

## 2024-06-29 - Added ARIA labels and tooltips to icon-only buttons in Finance app
**Learning:** Found multiple icon-only buttons in `apps/finance.html` without accessible labels or tooltips, including month navigation arrows, burger menu toggle, and modal close buttons. Without these, screen readers and mouse users lose critical context.
**Action:** Always verify icon-only buttons have both an `aria-label` (for screen readers) and a `title` (for mouse user tooltips).
