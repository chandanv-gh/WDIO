# Javascript API Framework (WebdriverIO)

This project is a robust, standards-based framework for API (HTTP endpoint) testing using WebdriverIO and Axios.

## Features
- **Builder Pattern** for constructing requests
- **Request/Response Data Files** for clean test data management
- **Reusable Utilities** for API calls and assertions
- **Environment Config** via `.env` and utility
- **Organized Structure** for maintainability

## Project Structure
```
/test
  /specs           # Test cases
  /builders        # Request builders
  /data
    /requests      # Request payloads
    /responses     # Expected responses/schemas
  /utils           # Helpers (request, assertions, env, etc.)
.env               # Environment variables (BASE_URL, etc.)
wdio.conf.js       # WDIO config
README.md
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. (Optional) Create a `.env` file in the root with:
   ```env
   BASE_URL=https://jsonplaceholder.typicode.com
   ```

## Running Tests
To run all API tests:
```bash
npm run wdio
```

## Example Test
See `test/specs/api.createPost.js` for a sample test using the builder, data files, and utilities.

## Extending
- Add new request/response bodies in `test/data/`
- Add new builders or utilities as needed
- Use `process.env` or `test/utils/env.js` for config

---

**Happy Testing!** 