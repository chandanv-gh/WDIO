const axios = require('axios');
const config = require('../../env/config');
const endpoints = require('../../endpoints/catEndpoints');
const { buildVotePayload } = require('../../factory/voteFactory');

// This test assumes you have a valid image_id to vote for. You may want to fetch one first.
describe('Vote API', () => {
  it('should allow voting for an image and return a valid response #sanity', async () => {
    // Fetch an image to get a valid image_id
    const imageRes = await axios.get(`${config.cat}${endpoints.images.search}`, { params: { limit: 1 } });
    const image = imageRes.data[0];
    if (!image || !image.id) throw new Error('No image found to vote for');

    // Build vote payload
    const payload = buildVotePayload({ image_id: image.id, value: 1 });
    const response = await axios.post(`${config.cat}${endpoints.votes}`, payload);
    // Basic assertion on response structure
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('message');
    expect(response.data.message).to.match(/SUCCESS/i);
  });
}); 