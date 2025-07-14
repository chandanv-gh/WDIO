class UserEntity {
  constructor({ id, name, roles = [], ...rest }) {
    this.id = id;
    this.name = name;
    this.roles = roles;
    Object.assign(this, rest);
  }
}

module.exports = UserEntity; 