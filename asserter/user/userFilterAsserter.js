const chai = require('chai');
const expect = chai.expect;

function assertUserFilterResponse(response) {
  expect(response).to.be.an('array');
  response.forEach(user => {
    expect(user).to.have.property('id');
    expect(user).to.have.property('name');
    expect(user).to.have.property('roles');
    expect(user.roles).to.be.an('array');
  });
}

module.exports = { assertUserFilterResponse }; 