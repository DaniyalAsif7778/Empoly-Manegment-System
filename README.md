# React + Vite
# Employee Management System (Frontend) - Step 1

![Employee Management Flow](assets/ems-flow.png)


This project focuses on building the **frontend** for an Employee Management System with **low-level design**, **secure authentication**, **Redux Toolkit**, **better UI/UX**, and **basic SEO & performance optimizations**.

---

## Low-Level Design


### Folder Structure


components/ → buttons, inputs, modals, tables
pages/ → login, signup, dashboard, profile
store/ → authSlice, employeeSlice
hooks/ → useSignup, useValidator
utils/ → validators, formatting
styles/ → global CSS or Tailwind config


### Data & Navigation

- Define data shapes for employees and admins
- Plan routes and navigation between pages

---

## Secure Authentication

- Use **Redux Toolkit** to store auth state
- Validate forms with **email & password regex**
- Store login token/id in **localStorage** (never plain passwords)
- Optional: simulate password hashing

---

## Redux Toolkit

- **Slices**: 
  - `authSlice` → user info, login status
  - `employeeSlice` → employee list, CRUD operations
- **Async thunks**: simulate API calls
- **Selectors**: access auth or employee state anywhere

---

## Better UI / UX

- Responsive layout with **Tailwind CSS**
- Reusable components: `Button`, `Input`, `Modal`, `Table`
- Form feedback: display success/error messages
- Basic accessibility: proper labels, focus outlines

---

## SEO & Performance

- Meta tags (title, description) using **React Helmet** or `index.html`
- Semantic HTML: `header`, `main`, `section`
- Lazy-load pages/components (`React.lazy + Suspense`)
- Optimize images: compress or use SVGs for icons

---

## Other Basic Things

- Error handling: show network or state errors
- Debounce forms: prevent validation on every keystroke
- Environment config: separate dev/test API URLs
- Consistent naming: actions, slice names, state keys
 
 
## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

`
🎨 Dark Theme Color Palette
Name	Hex Code	Use Case
Primary Background	#000000	Main background color of the website
Surface Background	#121212	Card backgrounds, panels, modals, navbar
Border / Divider	#333333	Border lines, table borders, dividers between sections
Secondary Border	#444444	Optional for slightly more visible borders or lines

📝 Text Colors
Name	Hex Code	Use Case
Primary Text	#E0E0E0	Main content text, headings, labels
Secondary Text	#9CA3AF	Subtext, muted descriptions, placeholder text
Disabled Text	#6B7280	For disabled buttons, inputs, or inactive elements

💠 Primary Accent Colors
Name	Hex Code	Use Case
Primary Accent	#33DEED	Primary buttons, active icons, links, highlights
Accent Hover	#12C4D3	Button hover background, icon hover color
Accent Pressed	#0E939E	Button pressed state, active tab underline
Accent Light Tint	#67E6F1	Optional background tint, gradients, badges
Accent Extra Light	#9CEFF6	Optional for soft highlights or disabled state of accent

✅ Alert & Status Colors
Name	Hex Code	Use Case
Success	#00BF6B	Success notifications, completed tasks, status indicators
Warning	#FFC107	Warning messages, caution icons, system notices
Error	#EF4444	Error messages, validation errors, critical alerts

🌟 Example Applications
Sidebar / Header: Use #121212 background with #E0E0E0 text, and highlight active items with #33DEED.

Buttons:

Primary: Background #33DEED, text #FFFFFF, hover #12C4D3, active #0E939E

Disabled: Background #333333, text #6B7280

Tables: Borders #333333, header text #E0E0E0, row text #9CA3AF

Cards: Background #121212, border #333333, heading #E0E0E0

Alerts:

Success → #00BF6B background with #FFFFFF text

Warning → #FFC107 background with #000000 or dark text

Error → #EF4444 background with #FFFFFF text


`
