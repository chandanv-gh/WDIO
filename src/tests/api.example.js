const assert = require('assert');
const axios = require('axios');
const { BASE_URL } = require('../utils/env');

describe('API Test Example', () => {
    it('should return a 200 status for a public API', async () => {
        const response = await axios.get(`${BASE_URL}/posts/1`);
        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.data.id, 1);
    });
}); 