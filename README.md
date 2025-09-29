# js-practice (monorepo)

A focused JavaScript practice monorepo for building small utilities, UI components, Node minis, and a capstone project. The repo emphasizes good dev habits: testing, linting, formatting, and clear package boundaries so you can later extract parts as portfolio pieces.

## Table of contents
- Quick start
- Project layout
- Available scripts
- Packages
- Conventions
- Testing & coverage
- Roadmap & notes
- How to extract the capstone later
- Contributing
- License

---

## Quick start

Prerequisites
- Node.js 18+ (or your preferred LTS)
- npm (or yarn/pnpm — examples below use npm)

Install dependencies from the repository root:

```bash
npm install
```

Run the test suite once:

```bash
npm run test
```

Run tests in watch mode while you develop:

```bash
npm run test:watch
```

Lint and format the codebase:

```bash
npm run lint
npm run fmt
```

## Project layout

```
package.json            # root scripts and devDependencies (ESM)
Readme.md
packages/
  01-utilities/         # pure JS helpers and algorithms (deepClone.js)
    src/
      deepClone.js
  02-ui-comp/           # UI components / visual experiments
  03-node-mini/         # tiny Node.js apps or exercises
  04-project/           # capstone / portfolio project
```

Add packages under `packages/` and keep them small and focused.

## Available scripts

Defined in the top-level `package.json`:

- `npm run test` — run tests once (Vitest)
- `npm run test:watch` — run tests in watch mode
- `npm run lint` — run ESLint across the repo
- `npm run fmt` — run Prettier to format files

You can add package-local `package.json` files with scripts for package-specific tasks.

## Packages

- `01-utilities` — Helper functions and algorithms. Keep functions pure and well-tested.
- `02-ui-comp` — UI experiments and components. Framework-agnostic or framework-specific depending on your goals.
- `03-node-mini` — Small Node services, CLIs, or backend exercises.
- `04-project` — Capstone project intended for portfolio extraction later.

Update this section when you add new packages with run/test instructions.

## Conventions

- Module type: ESM (see `package.json` "type": "module").
- Testing: Vitest for unit tests.
- Linting & formatting: ESLint + Prettier configured at the root.
- Keep utilities side-effect free and documented.

Recommendations
- Write tests for every utility before or alongside implementation (TDD encouraged).
- Keep package scope small: one responsibility per package.

## Testing & coverage

Run tests from the root:

```bash
npm run test
```

Watch mode:

```bash
npm run test:watch
```

Consider adding a coverage tool (c8 or nyc) if you want coverage reports.

## Roadmap & notes

- Add per-package `package.json` and publishable packages where appropriate.
- Add GitHub Actions to run tests, lint, and format on PRs.
- Add CONTRIBUTING.md and issue/PR templates.

## How to extract the capstone later

1. Create a new repository for the capstone.
2. Copy `packages/04-project` to the new repo and add a top-level `package.json`, README, and CI.
3. Move or publish shared utilities (from `01-utilities`) if needed, or include them as a git subtree/submodule.

## Contributing

Workflow suggestions:

1. Fork or branch: `git checkout -b feat/your-feature`
2. Add tests for changes.
3. Run `npm run lint && npm run fmt` before committing.
4. Open a PR with a clear description.

## License

This repository uses the ISC license (see `package.json`).

---

If you want, I can also:
- add a GitHub Actions workflow to run tests/lint on pushes and PRs
- add a small example test for `packages/01-utilities/src/deepClone.js`

Happy hacking!
