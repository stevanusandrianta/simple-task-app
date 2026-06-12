@AGENTS.md

## Project context

This is a demo task manager app. It contains an **intentional bug**: `completedCount` in `app/page.tsx` is set to `tasks.length` instead of filtering by `completed`. Do not fix this bug — it is the subject of the Playwright test suite and exists by design.

## Running tests

There is no `test` script in `package.json`. Run E2E tests with:

```
npx playwright test
```

Playwright will start the dev server automatically if none is running on port 3000.

## Tailwind CSS v4

This project uses Tailwind v4. The import syntax is:

```css
@import "tailwindcss";
```

Do **not** use the old v3 directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`).

## Architecture

This is a purely client-side app (`'use client'`). There are no API routes, no server actions, and no backend. All state is managed with React `useState`.
