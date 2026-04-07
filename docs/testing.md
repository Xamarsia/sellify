<h1 align="center">
Testing Guide
</h1>

This document explains the testing setup in Sellify and how to run tests.

For container and environment prerequisites, see [Docker Guide](https://github.com/Xamarsia/sellify/tree/main/docs/docker.md).

## Table of Contents

- [End-to-End (E2E) Tests](#end-to-end-e2e-tests)
  - [Overview](#overview)
  - [Quick Execution](#quick-execution)
  - [Running Tests Step by Step](#running-tests-step-by-step)
- [Static Quality Checks](#static-quality-checks)
- [Adding New Test Suites](#adding-new-test-suites)
- [Useful References](#useful-references)

<!-- ## Unit Tests -->
<!-- TODO: Add information about unit tests here later -->

<!-- ## Integration Tests -->
<!-- TODO: Add information about integration tests here later -->

## End-to-End (E2E) Tests

### Overview

| Detail                 | Value                                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Location**           | `examples/**/tests/`, `services/*-frontend/tests/`                                                                                                      |
| **Runner**             | `pytest`, `start-server-and-test`                                                                                                                       |
| **Browser automation** | Selenium + Chrome / ChromeDriver                                                                                                                        |
| **Environment setup**  | [scripts/e2e-envsetup.sh](https://github.com/Xamarsia/sellify/tree/main/scripts/e2e-envsetup.sh) — creates a Python venv and installs test dependencies |

### Quick Execution

Run E2E tests for a **single package** (from the package directory):

```bash
pnpm run test:e2e
```

Run E2E tests for the **whole project** (from the root):

```bash
pnpm turbo test:e2e
```

### Running Tests Step by Step

The quick commands above handle everything automatically. If you prefer to run each step manually:

1. **Prepare the E2E Python environment.**

   Run the setup script from the repository root:

   ```bash
   . ./scripts/e2e-envsetup.sh
   ```

   To force-rebuild the virtual environment:

   ```bash
   . ./scripts/e2e-envsetup.sh --force
   ```

2. **Start the server** by running the `dev` or `start` command from the package where the tests are located, and wait for the URL (usually [http://localhost:3000](http://localhost:3000)).

3. **Run the tests** with `pytest`:

   ```bash
   pytest ./tests/test.py
   ```

4. **Shut down the server** when the tests finish.

> **Note:** The `start-server-and-test` dependency automates steps 2–4. It starts the Next.js app, waits for it to be available on the specified port, executes the tests, and then shuts down the server. See the [`test:e2e` script in package.json](https://github.com/Xamarsia/sellify/tree/main/examples/common-ui-components-example/package.json) for an example.

## Static Quality Checks

These are not runtime tests but static analysis checks:

| Command                  | Description                 |
| ------------------------ | --------------------------- |
| `pnpm turbo lint`        | Run ESLint checks.          |
| `pnpm turbo check-types` | Run TypeScript type checks. |

<!-- TODO: Add Prettier check here -->

## Adding New Test Suites

When adding new test suites:

1. Add the necessary scripts in the relevant `package.json`.
2. Add matching Turbo task(s) in [**turbo.json**](https://github.com/Xamarsia/sellify/tree/main/turbo.json).
3. Include them in the CI job sequence (see [CI Guide](https://github.com/Xamarsia/sellify/tree/main/docs/ci.md)).

Recommended test locations for new suites:

- `services/<service-name>/tests/`
- `examples/<example-name>/tests/`

## Useful References

- [Selenium Documentation](https://www.selenium.dev/documentation/)
- [pytest Documentation](https://docs.pytest.org/)
- [start-server-and-test](https://github.com/bahmutov/start-server-and-test)
