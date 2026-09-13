# AGENTs.md -- Project Guide for AI Agents 

## What this project is 
A Typescript monorepo: a Node/Express API in `api/` and React front-end in `web/`. Shared scripts live in `scripts`


## Setup & Build Commands 
- Always run `npm install` before building.
- Build the API: `npm run build --workspace api`
- Runs test: `npm test` (uses Vitest)
- Lint before committing: `npm run lint`

## Conventions
- Conventional Commits for all commit message (feat:, fix:, chore:)
- Never commit secrets or `.env` files. 
- Add or update test for every behavior change. 