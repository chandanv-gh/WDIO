# Javascript API & UI Test Framework

## Project Structure

```
/project-root
│
├── /builder            # For building request payloads, headers, test data
│   └── payloadBuilder.js
│
├── /asserter           # Custom assertion logic
│   └── responseAsserter.js
│
├── /helper             # Common utility/helper functions
│   └── logger.js
│   └── dateUtil.js
│
├── /factory            # For generating test data or mock objects
│   └── userFactory.js
│
├── /endpoints          # All endpoint URLs, organized by feature
│   └── userEndpoints.js
│
├── /entities           # Entity classes or POJOs (Plain Old JavaScript Objects)
│   └── userEntity.js
│
├── /htmlMethods        # For reusable HTML element interaction (UI layer)
│   └── htmlActions.js
│
├── /env                # Environment-related configs
│   └── config.js
│
├── /tests              # Actual test cases
│   └── /api            # For API test cases
│   └── /ui             # For UI test cases
│   └── userTest.js
│
├── .env                # ENV variables (baseURL, env name, etc.)
├── wdio.conf.js        # WDIO config
├── package.json
```

## Scripts
- `npm test` – Run all API tests in `tests/api/`
- `npm run test:ui` – Placeholder for UI test runner

## Dependencies
- `axios` – For HTTP requests
- `mocha` – Test runner
- `chai` – Assertions
- `webdriverio` – UI automation

## How to Extend
- Add new payload builders, asserters, helpers, factories, endpoints, or entities as needed.
- Place API tests in `tests/api/` and UI tests in `tests/ui/`.
- Use `.env` and `env/config.js` for environment-specific configuration.

---

**Happy Testing!** 