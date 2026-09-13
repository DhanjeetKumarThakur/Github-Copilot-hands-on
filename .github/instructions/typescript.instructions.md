---
applyTo: "**/*.ts, **/*.tsx"
description: This file describes the TypeScript code style for the project.
--- 

# Typescript-specific instructions
- Prefer `interface` over `type` for object shapes.
- Never use `any` type; use `unknown` and narrow it. 
- All exported functions must have explict return types. 
- Use `aysnc/await` for instead of raw promise chains.
- Export an `interface` for any object shape a function returns.
