## 2025-09-13 – Milestone: About section + branding + dark mode

- App name set to "فاست لينك - حسابات" across:
  - index.html title, meta (application-name, apple-mobile-web-app-title), splash, sidebar label
  - manifest.json (name, short_name, description) – icons unchanged
  - reports and print pages titles/brandline
- Added global constants in js/utils.js:
  - APP_NAME, APP_VERSION (01.06), APP_DESCRIPTION
- Introduced brandline in report headers and print pages
- Replaced Parity Check with "حول التطبيق":
  - New section container `#about` in index.html
  - Added `js/about.js` (responsive, animated, dark-mode aware)
  - Updated navigation (desktop + mobile) and `switchSection` wiring
  - Removed `js/parityCheck.js` include
- Dark mode support for About card, tiles, icons, and text
- Sidebar version label shows الإصدار 01.06
- Splash shows app description and rights

Notes for future revert:
- To restore Parity Check: re-add nav items, section `<div id="parityCheck">`, script include `js/parityCheck.js`, and the `switchSection('parityCheck', ...)` handler.

