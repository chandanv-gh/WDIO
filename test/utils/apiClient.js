const axios = require('axios');

async function apiRequest(requestConfig) {
    try {
        const response = await axios(requestConfig);
        return response;
    } catch (error) {
        if (error.response) {
            return error.response;
        }
        throw error;
    }
}

module.exports = apiRequest; 