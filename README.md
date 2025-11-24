# My First Study About Cypress Automation

## Project Details

This repository contains Cypress end-to-end tests for the Orange HRM demo application. Tests are written for Cypress 15.6.0 using CommonJS-style specs and are located under `cypress/e2e/`.

## Prerequisites

-   Node.js (recommended LTS)
-   npm or yarn
-   Cypress 15.6.0 installed in the project (check package.json / node_modules)

## Quickstart

Install dependencies:

```
npm install
```

Run tests (headless):

```
npx cypress run
```

Open interactive test runner:

```
npx cypress open
```

## Configuration

Primary configuration lives in `cypress.config.js` using `defineConfig()`. Adjust viewport, timeouts, baseUrl, or e2e setup hooks there.

## Test Layout & Conventions

-   Test specs: `cypress/e2e/*.spec.cy.js`
-   Keep each `it()` focused (one primary assertion per test)
-   Use descriptive names: e.g., `Login - Success`, `Login - Fail`
-   Prefer stable selectors: attributes like `[name="username"]` or `data-testid` over styling classes

## Support & Custom Commands

-   Support file: `cypress/support/e2e.js` (auto-loaded before tests)
-   Add reusable commands in `cypress/support/commands.js` with `Cypress.Commands.add()` (e.g., `login`)

## Fixtures & Test Data

-   Store test data in `cypress/fixtures/` and reference via `cy.fixture('example')`
-   Avoid hardcoding credentials/URLs directly in tests; prefer fixtures or environment variables

## Best Practices

-   Use full URLs with `cy.visit()` when clarity is needed
-   Use assertions like `.contains()` and `.should()` (e.g., `have.text`, `have.class`)
-   Verify navigation with `cy.location("pathname").should("eq", expectedPath)`
-   Debug with `cy.debug()`, `.pause()`, or the Cypress interactive runner

## Contributing

-   Add new spec files in `cypress/e2e/`
-   Keep tests deterministic and isolated
-   Update fixtures and support commands when adding new flows

## Notes

-   No npm scripts preconfigured; run Cypress using `npx` as shown above or add scripts to package.json for convenience
-   This README is a living document — update as the test suite grows
