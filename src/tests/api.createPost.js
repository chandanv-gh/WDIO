const fs = require('fs');
const path = require('path');
const { BASE_URL } = require('../utils/env');
const RequestBuilder = require('../builder/requestBuilder.js');
const apiRequest = require('../utils/apiClient');
const { assertStatus, assertBody } = require('../utils/assertions');


describe('Create Post API', () => {
    it('should create a new post and match the response', async () => {
        // Load request and expected response bodies
        const requestBody = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/requests/createPost.json')));
        const expectedResponse = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/responses/createPost.json')));

        // Build request
        const requestConfig = new RequestBuilder()
            .setMethod('POST')
            .setUrl(`${BASE_URL}/posts`)
            .setHeaders({ 'Content-type': 'application/json; charset=UTF-8' })
            .setBody(requestBody)
            .build();

        // Make API request
        const response = await apiRequest(requestConfig);

        // Assertions
        assertStatus(response, 201);
        // Only check keys that exist in expectedResponse
        Object.keys(expectedResponse).forEach(key => {
            if (key in response.data) {
                if (typeof expectedResponse[key] === 'object') {
                    assertBody({ data: response.data[key] }, { data: expectedResponse[key] });
                } else {
                    if (expectedResponse[key] !== undefined) {
                        if (key === 'id') {
                            // id is auto-generated, just check it's a number
                            if (typeof response.data[key] !== 'number') {
                                throw new Error('id is not a number');
                            }
                        } else {
                            if (response.data[key] !== expectedResponse[key]) {
                                throw new Error(`Expected ${key} to be ${expectedResponse[key]}, got ${response.data[key]}`);
                            }
                        }
                    }
                }
            }
        });
    });
}); 