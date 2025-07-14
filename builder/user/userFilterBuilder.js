const allRoles = require('../../constants/roles');

function buildUserFilterPayload({
  pageNumber = 0,
  pageSize = 10,
  roles = allRoles, // default to all roles
  text = "",
  types = ["agent"],
  subscriptionPlans = ["limited"],
  statuses = ["active"],
  isVip = true,
  locationMismatch = true,
  sort = { name: "asc" }
} = {}) {
  return {
    pageNumber,
    pageSize,
    filter: {
      types,
      text,
      subscriptionPlans,
      statuses,
      roles,
      isVip,
      locationMismatch
    },
    sort
  };
}

module.exports = { buildUserFilterPayload };