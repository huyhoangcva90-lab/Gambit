## 2024-06-19 - Added ARIA and tooltips to Focus Timer controls
**Learning:** Found multiple icon-only timer control buttons (Play/Pause, Complete, Skip, Mute, Close) in `apps/routine.html` without accessible labels or tooltips, meaning screen readers would announce them unhelpfully (e.g., "button, button, button") and mouse users would have to guess what "⏭" or "✓" does.
**Action:** Always verify icon-only buttons have both an `aria-label` (for screen readers) and a `title` (for mouse user tooltips), and update them dynamically when the button state changes (e.g. `title={run?"Pause":"Play"} aria-label={run?"Pause timer":"Start timer"}`).

## 2024-11-20 - Added ARIA and tooltips to Habits and Routine Navigation/Action buttons
**Learning:** Found multiple icon-only navigation and action buttons (Previous Day, Next Day, Options, Edit, Play, Add Task) in `apps/habits.html` and `apps/routine.html` without accessible labels or tooltips, meaning screen readers would announce them unhelpfully and mouse users would have to guess their functions.
**Action:** Consistently verify that icon-only buttons have both an `aria-label` (for screen readers) and a `title` (for mouse user tooltips) across different apps within the hub, regardless of whether they are standard HTML or embedded React/JSX.
