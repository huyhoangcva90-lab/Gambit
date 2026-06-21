## 2024-06-19 - Added ARIA and tooltips to Focus Timer controls
**Learning:** Found multiple icon-only timer control buttons (Play/Pause, Complete, Skip, Mute, Close) in `apps/routine.html` without accessible labels or tooltips, meaning screen readers would announce them unhelpfully (e.g., "button, button, button") and mouse users would have to guess what "⏭" or "✓" does.
**Action:** Always verify icon-only buttons have both an `aria-label` (for screen readers) and a `title` (for mouse user tooltips), and update them dynamically when the button state changes (e.g. `title={run?"Pause":"Play"} aria-label={run?"Pause timer":"Start timer"}`).

## 2024-05-24 - Custom Checkbox Accessibility
**Learning:** When using custom `div` elements to act as checkboxes, simply adding a click handler is insufficient. They lack keyboard navigation and screen reader semantics.
**Action:** Always add `role="checkbox"`, `aria-checked` state, `tabindex="0"`, and a keyboard event listener for `Enter` and `Space` keys to custom checkbox elements. Also, add `:focus-visible` styles to show keyboard focus.
