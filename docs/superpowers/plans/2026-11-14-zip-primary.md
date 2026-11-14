# Make the supplied ZIP the primary RAÍZES application

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the supplied documentary ZIP the application served from the project root.

**Architecture:** Replace the current React app and build configuration with the ZIP's nine-chapter React/Vite app. Keep the verified local media manifest and images, map only matching images into the ZIP media catalog, and render a neutral fallback for unavailable photographs.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS 4, Motion.

**Spec:** `docs/superpowers/specs/2026-11-14-zip-primary-design.md`

## Global Constraints

- The ZIP is the primary application.
- Only media whose source and license are documented in `docs/assets.json` may be shown.
- Missing media must not receive a substitute credit or license.
- Preserve the ZIP's continuous narrative and presentation controls.

## Review Focus

- Missing image IDs remain valid content references and show a neutral placeholder.
- Existing image IDs display the matching asset and complete attribution.
- The copied app builds from the repository root with its supplied Vite/Tailwind configuration.

---

### Task 1: Replace the app with the ZIP source

**Files:** `src/**`, `index.html`, `package.json`, `package-lock.json`, `tsconfig.json`, `vite.config.ts`, `playwright.config.ts`, `e2e/**`

- [x] Back up the current application and project configuration outside the repository.
- [x] Copy the ZIP source, app entry point, build configuration, and E2E assets into the repository root.
- [x] Install dependencies from the ZIP lockfile.

### Task 2: Integrate verified local media

**Files:** `src/content/media.ts`, `src/components/Narrative.tsx`, `docs/assets.json`, `public/images/**`

- [x] Keep all ZIP photo keys as valid content identifiers while making their media records optional.
- [x] Map only matching verified local images from `docs/assets.json`.
- [x] Render neutral placeholders for absent images and link visible attributions to the recorded source and license.
- [x] Preserve existing offline support with the retained service worker build step and registration hook.

### Task 3: Verify the primary application

**Files:** none

- [x] Run the production build and inspect the resulting output.
- [x] Report any unavailable assets clearly: 14 of the 24 ZIP photo keys have no corresponding local file.
- [x] Run TypeScript checking and `git diff --check`.
- [ ] Run the E2E suite only when requested; it was not run in this change.
