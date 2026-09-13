# Project Overview 
This is a small Typescript + Node.js service that exposes geometry and math utilities through REST API. The Fronend lives in /web (React).

# Folder Structure 
- `api/` -- Node.js + Typescript backend services
- `web` -- React front-end
- `scripts` -- one-off maintenance and seed scripts

## Tech Stack
- Typescript 5.x (strict mode)
- Node.js 20 
- Express for API 
- ViTest for testing 

## Coding Standards 
- Use single quotes for strings.
- Always end statements with semicolons.
- Use early returns for error and edge cases.
- Prefer `const` over `let`; never use `var`.
- For exported/public functions, add JSDoc containing `@param`, `@returns`, and an `@example`.
- Do not add JSDoc to trivial private functions unless the behavior is non-obvious.

- Validate all functions inputs and return null on invalid input.
- Use descriptive and meaningful names
