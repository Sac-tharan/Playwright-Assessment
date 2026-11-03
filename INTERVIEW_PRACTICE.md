# Playwright Interview Practice: Automation Exercise

This project uses Playwright with TypeScript and page objects. The UI tests target [Automation Exercise](https://automationexercise.com), a public practice store. Tests create only an in-memory browser session; the dropdown scenario stops before creating an account.

## Run the practice tests

```bash
npm run test:ui
```

Run one topic at a time:

```bash
npx playwright test tests/ui/products.spec.ts
npx playwright test tests/ui/dropdowns.spec.ts
npx playwright test tests/ui/login.spec.ts
```

## What to explain in an interview

1. **Product search:** `searchFor` fills and submits a query, then waits for the results heading. Why is an assertion-based wait preferable to a fixed sleep?
2. **Dynamic elements:** product cards contain repeated “Add to cart” links. How does scoping a locator to the matching card avoid clicking the wrong button?
3. **Cart flow:** after adding a product, the confirmation modal appears asynchronously. Which assertion waits for it, and how does the test verify the final cart state?
4. **Dropdowns:** why use `selectOption` for native `<select>` controls, and when would a custom dropdown require a different strategy?
5. **Page objects:** which selectors and actions belong in a page object, and which outcome assertions belong in the test?
6. **Test isolation:** why does each test navigate to its own starting page? What could still make these public-site tests flaky?
7. **Selector strategy:** compare `data-qa`, role/name, CSS class, and positional selectors. Which are most resilient here?

## Try extending the assessment

- Add a no-results search case and verify the empty-state message.
- Add two different products and assert both rows and quantities in the cart.
- Filter by a category or brand, then verify the resulting product names.
- Add a negative dropdown case for an unselected or invalid value.
- Explain what test data should be moved into configuration and what should stay inline.

The existing login test requires `VALID_EMAIL` and `VALID_PASSWORD` in `.env`; the new practice tests do not require login credentials.

## Reusing an authenticated session

Set `VALID_EMAIL` and `VALID_PASSWORD` in the local `.env` file. When both values are present, Playwright adds an `authenticated-chromium` project. Its setup test logs in once and writes the browser state to `playwright/.auth/user.json`; tests under `tests/ui/authenticated/` then start with that saved state. The auth state and `.env` are ignored by Git because they contain sensitive session or credential data. Without credentials, the authenticated project is omitted and the signed-out UI and API projects still run.
