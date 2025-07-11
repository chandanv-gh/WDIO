const assert = require('assert');

module.exports = {
    assertStatus: (response, expectedStatus) => {
        assert.strictEqual(response.status, expectedStatus, `Expected status ${expectedStatus}, got ${response.status}`);
    },
    assertBody: (response, expectedBody) => {
        assert.deepStrictEqual(response.data, expectedBody, 'Response body does not match expected body');
    }
}; 