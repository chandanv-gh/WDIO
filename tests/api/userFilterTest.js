const axios = require('axios');
const config = require('../../env/config');
const endpoints = require('../../endpoints/catEndpoints');
const { buildUserFilterPayload } = require('../../builder/user/userFilterBuilder');
const { assertUserFilterResponse } = require('../../asserter/user/userFilterAsserter');
const UserEntity = require('../../entities/user/userEntity');

const allRoles = require('../../constants/roles');

describe('User Filter API', () => {
  it('should return a list of users with required fields for all roles', async () => {
    const payload = buildUserFilterPayload();
    const response = await axios.post(`${config.cat}${endpoints.user.filter}`, payload);
    assertUserFilterResponse(response.data);
    const users = response.data.map(u => new UserEntity(u));
    users.forEach(u => {
      if (!(u instanceof UserEntity)) throw new Error('Not a UserEntity');
    });
  });

  it('should return users for a subset of roles', async () => {
    const payload = buildUserFilterPayload({ roles: [allRoles[0], allRoles[1]] });
    const response = await axios.post(`${config.cat}${endpoints.user.filter}`, payload);
    assertUserFilterResponse(response.data);
  });
}); 