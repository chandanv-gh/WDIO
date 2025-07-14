const chai = require('chai');
const expect = chai.expect;

function assertImageSearchResponse(response) {
  expect(response).to.be.an('array');
  response.forEach(img => {
    expect(img).to.have.property('id');
    expect(img).to.have.property('url');
    expect(img).to.have.property('width');
    expect(img).to.have.property('height');
  });
}

module.exports = { assertImageSearchResponse };
