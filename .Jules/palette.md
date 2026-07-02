## 2024-06-19 - Added ARIA and tooltips to Focus Timer controls
**Learning:** Found multiple icon-only timer control buttons (Play/Pause, Complete, Skip, Mute, Close) in `apps/routine.html` without accessible labels or tooltips, meaning screen readers would announce them unhelpfully (e.g., "button, button, button") and mouse users would have to guess what "⏭" or "✓" does.
**Action:** Always verify icon-only buttons have both an `aria-label` (for screen readers) and a `title` (for mouse user tooltips), and update them dynamically when the button state changes (e.g. `title={run?"Pause":"Play"} aria-label={run?"Pause timer":"Start timer"}`).

## 2024-07-02 - Added ARIA and tooltips to Habits app date navigation
**Learning:** Found multiple icon-only date navigation buttons (`<i class="ti ti-chevron-left"></i>`) in `apps/habits/index.html` without accessible labels or tooltips. Without them, screen readers announce nothing useful and mouse users have no explicit tooltip.
**Action:** Always ensure that icon-only navigation buttons like "previous/next date" have an `aria-label` and `title` (e.g. `title="Previous day" aria-label="Previous day"`).
