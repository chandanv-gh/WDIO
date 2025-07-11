const assert = require('assert');
const axios = require('axios');

describe('API Test Example', () => {
    it('should return a 200 status for a public API', async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        assert.strictEqual(response.status, 200);
        assert.strictEqual(response.data.id, 1);
    });
}); 