# Restore Points

## 2025-09-13T00:00Z – Checkpoint: About + DarkMode + Sync + PeriodManager

- Branding: Set APP_NAME="فاست لينك - حسابات", APP_VERSION=01.06, APP_DESCRIPTION
- About section: added `js/about.js`, nav entries, dark mode styles
- Dark mode: refined icon tiles and text in About
- App icons: unchanged (manifest icons preserved)
- Sync settings: new tab in Settings hooked to `GithubSync` (create/upload/download/test)
- PeriodManager: centralized period (in `js/utils.js`) with event `periodChanged`
- Dashboard: dropdown wired to PeriodManager with debounce; safer date filtering
- Reports: unified period usage; handlers now set central period; auto re-render on `periodChanged`
- Expenses: uses normalized dates; optional PeriodManager range
- Parity Check: replaced by About; parity code left intact for history

Files touched (key):
- index.html, js/utils.js, js/about.js, js/settingsUI.js, js/reports.js, js/expenses.js, app.js

Notes: This point captures the working state after period unification and UI improvements. Use this entry to manually compare/restore if needed.

## 2025-09-13T12:00Z – Checkpoint: Stores Period Wiring + Sync Badge + Sparklines

- Stores: wired to PeriodManager `periodChanged` only for time/custom filters; cycles untouched
- Sync badge: added Sync Now/Restore buttons and "last sync time" indicator
- Dashboard: added sparkline micro-charts and daily/weekly grouping toggle
- Styles: added `.sparkline` CSS and dark-theme background

Files touched (key):
- js/stores.js, index.html, app.js, css/dark-theme-fixes.css

Notes: Stable build. Use this before further UI polish.

