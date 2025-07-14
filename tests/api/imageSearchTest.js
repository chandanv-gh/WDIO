const axios = require('axios');
const config = require('../../env/config');
const endpoints = require('../../endpoints/catEndpoints');
const { buildImageSearchPayload } = require('../../builder/image/imageBuilder');
const { assertImageSearchResponse } = require('../../asserter/image/imageAsserter');
const ImageEntity = require('../../entities/image/imageEntity');

describe('Image Search API', () => {
  it('should return a list of images with required fields', async () => {
    const params = buildImageSearchPayload({ limit: 5 });
    const response = await axios.get(`${config.cat}${endpoints.images.search}`, { params });
    // Assert response
    assertImageSearchResponse(response.data);
    // Map to entities
    const images = response.data.map(img => new ImageEntity(img));
    images.forEach(img => {
      if (!(img instanceof ImageEntity)) throw new Error('Not an ImageEntity');
    });
  });
}); 