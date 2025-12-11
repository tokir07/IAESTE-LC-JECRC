# Debugging Guide

If pages are not showing content, check the following:

## 1. Check Browser Console
Open browser DevTools (F12) and check the Console tab for any JavaScript errors.

## 2. Verify JSON Imports
The JSON files should be imported correctly:
- `src/data/departments.json` - used by Department page
- `src/data/team.json` - used by TeamGrid component

## 3. Test Each Page
- `/department` - Should show department cards (this one works according to user)
- `/about` - Should show hero, team grid, and FAQ
- `/membership` - Should show membership cards
- `/join` - Should show join page
- `/` (home) - Should show carousel, content, and HowToApply section

## 4. Check Component Imports
All components are in `components/` directory:
- TeamGrid.jsx
- FAQAccordion.jsx
- MembershipSection.jsx
- HowToApply.jsx
- DepartmentCard.jsx
- TeamCard.jsx
- ProfileModal.jsx

## 5. Verify Routes
Routes are defined in `src/App.jsx`:
- `/department` → Department page
- `/about` → About page
- `/membership` → Membership page
- `/join` → Join page

## 6. Common Issues
- JSON import paths: Components use `../src/data/team.json` from `components/` directory
- Missing images: Team images use fallback SVG placeholders if images are missing
- CSS: All components use TailwindCSS classes

## 7. Quick Fix
If a page is blank, try:
1. Hard refresh (Ctrl+F5)
2. Clear browser cache
3. Check console for errors
4. Verify the component is imported and used in the page

