## 2024-06-19 - Added ARIA and tooltips to Focus Timer controls
**Learning:** Found multiple icon-only timer control buttons (Play/Pause, Complete, Skip, Mute, Close) in `apps/routine.html` without accessible labels or tooltips, meaning screen readers would announce them unhelpfully (e.g., "button, button, button") and mouse users would have to guess what "⏭" or "✓" does.
**Action:** Always verify icon-only buttons have both an `aria-label` (for screen readers) and a `title` (for mouse user tooltips), and update them dynamically when the button state changes (e.g. `title={run?"Pause":"Play"} aria-label={run?"Pause timer":"Start timer"}`).
## 2024-05-18 - Proactive Disabled States vs Error Toasts
**Learning:** Proactive disabled states (with clear tooltips explaining the state) provide a significantly better user experience than reactive error toasts for hard bounds like date navigation into the future. It prevents user frustration and visually communicates the boundary upfront.
**Action:** Default to using proactive disabled states for navigation buttons when boundaries are reached instead of allowing clicks and displaying error toasts.
