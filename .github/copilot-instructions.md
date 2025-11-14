# Cypress E2E Testing Project Guidelines

## Project Overview
This is a Cypress-based end-to-end test automation project for Orange HRM demo application. The project uses Cypress 15.6.0 with CommonJS module format and stores all test specifications in `cypress/e2e/`.

## Test Execution & Configuration
- **Default command**: No npm scripts configured yet. When implementing, use: `cypress run` (headless) or `cypress open` (interactive)
- **Config file**: `cypress.config.js` uses `defineConfig()` - modify e2e settings here for viewport, timeouts, or setup hooks
- **Test location**: All tests in `cypress/e2e/*.spec.cy.js` files follow Cypress naming convention
- **Support files auto-loaded**: `cypress/support/e2e.js` imports `commands.js` before all tests

## Test Patterns in `cypress/e2e/login.spec.cy.js`
The existing login tests demonstrate project conventions:
- **Page navigation**: `cy.visit(url)` with full URLs to Orange HRM demo
- **Form interaction**: Use attribute selectors `[name="username"]`, class selectors for buttons/alerts
- **Assertions**: Both `.contains()` for text and `.should()` with matchers like `have.text`, `have.class`
- **Location checks**: `cy.location("pathname").should("eq", expectedPath)` for post-login navigation

## Custom Commands
- No custom commands implemented yet. When adding cross-test utilities, create them in `cypress/support/commands.js` using `Cypress.Commands.add()`
- Example: Extract login flow into reusable command if multiple tests authenticate

## Fixture Data
- `cypress/fixtures/example.json` available but unused - store test data (credentials, URLs) here for scalability
- Reference with `cy.fixture('example')` rather than hardcoding values in tests

## Key Development Workflows
1. **Adding new tests**: Create `*.spec.cy.js` in `cypress/e2e/` - they auto-discover and run
2. **Debugging**: Use `cy.debug()`, `.pause()`, or Cypress DevTools in interactive mode
3. **Selectors**: Prefer stable attributes (`[name]`, `data-testid`) over class/ID selectors that may change with styling

## Styling & Format
- Use ES6 syntax where supported; `e2e.js` uses `import` statement
- Keep test blocks focused: one primary assertion per `it()` block
- Use descriptive test names that reflect expected behavior (e.g., "Login - Success", "Login - Fail")
