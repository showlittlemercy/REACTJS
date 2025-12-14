# React.js Complete Documentation Website

Live: https://showlittlemercy.github.io/REACTJS

## Overview

A professional, responsive React.js documentation website covering the complete syllabus with interactive demos, theme toggle, and modern animations. Built with React 19, React Router, Tailwind CSS, and Framer Motion.

## Features

- Comprehensive React syllabus (20 topics) from basics to advanced
- Interactive demos: Counter, Todo, Theme Switcher, Form Validation, useReducer, Conditional Rendering
- Dark/Light theme toggle with localStorage persistence
- Smooth animations and hover effects via Framer Motion
- Fully responsive layout (mobile, tablet, desktop)
- Syntax-highlighted code examples
- Creator info and social links in the footer

## Tech Stack

- React 19, React Router v7
- Tailwind CSS v3, PostCSS, Autoprefixer
- Framer Motion (animations)
- React Syntax Highlighter, React Icons
- CRA (react-scripts) for build tooling

## Project Structure

```
src/
	components/
		Navbar.jsx
		Footer.jsx
	context/
		ThemeContext.jsx
	pages/
		Home.jsx
		Documentation.jsx
		Demo.jsx
	App.js
	App.css
	index.css
	index.js
tailwind.config.js
postcss.config.js
```

## Quick Start (Development)

```bash
npm install
npm start
```
Open http://localhost:3000

## Build (Production)

```bash
npm run build
```
Outputs optimized assets in `build/`.

## Deploy (GitHub Pages)

This repo is configured for GitHub Pages using `gh-pages`.

```bash
npm run deploy
```
Published at: https://showlittlemercy.github.io/REACTJS

## Routing Note

`package.json` sets `homepage` to ensure correct asset paths on GitHub Pages. Routes are served under `/REACTJS`.

## Detailed Curriculum (20 Topics)

1. What is React? — concepts, virtual DOM, declarative UI
2. JSX Syntax — expressions, attributes, children
3. Components — function components, props, composition
4. Props — passing data, default props, prop patterns
5. State & Hooks — `useState`, re-rendering, patterns
6. `useEffect` — side effects, dependencies, cleanup
7. Event Handling — synthetic events, handlers
8. Conditional Rendering — if/ternary/AND patterns
9. Lists & Keys — map, stable keys, performance
10. Forms — controlled/uncontrolled, validation
11. Context API — global state, `useContext`
12. `useReducer` — reducer pattern, actions
13. Custom Hooks — reusable logic conventions
14. Performance — `React.memo`, `useMemo`, `useCallback`
15. Composition — children, render props, HOC
16. React Router — routes, `Link`, `useParams`
17. API Integration — fetch/async, loading/error states
18. Error Boundaries — graceful fallback UIs
19. Testing — RTL and Jest basics
20. Production — build, preview, deploy

## Interactive Demos

- Counter (useState)
- Todo App (list + state)
- Theme Switcher (Context API)
- Form Validation (controlled inputs)
- Reducer Demo (useReducer)
- Conditional Rendering (role-based UI)

## Customization

- Colors: edit `tailwind.config.js`
- Theme: `src/context/ThemeContext.jsx`
- Nav links: `src/components/Navbar.jsx`
- Topics: `src/pages/Documentation.jsx`

## Commands

```bash
# Start dev server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Run tests
npm test
```

## Creator

Priyanshu
- Email: showlittlemercy@gmail.com
- GitHub: https://github.com/showlittlemercy
- LinkedIn: https://www.linkedin.com/in/priyanshu-thakur-a47774360/
- Instagram: https://www.instagram.com/showlittlemercy/

## License

MIT

## Acknowledgements

- React, React Router, Tailwind CSS, Framer Motion
- CRA deployment guide: https://cra.link/deployment
