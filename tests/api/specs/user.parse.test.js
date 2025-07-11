const assert = require('assert');
const User = require('../../../');

describe('User POJO JSON Parsing', () => {
    it('should parse JSON string into a User instance', () => {
        const json = '{"id":1,"name":"Alice","email":"alice@example.com"}';
        const user = User.fromJson(json);
        assert(user instanceof User);
        assert.strictEqual(user.id, 1);
        assert.strictEqual(user.name, 'Alice');
        assert.strictEqual(user.email, 'alice@example.com');
    });

    it('should parse object into a User instance', () => {
        const obj = { id: 2, name: 'Bob', email: 'bob@example.com' };
        const user = User.fromJson(obj);
        assert(user instanceof User);
        assert.strictEqual(user.id, 2);
        assert.strictEqual(user.name, 'Bob');
        assert.strictEqual(user.email, 'bob@example.com');
    });

    it('should parse array of objects into User instances', () => {
        const arr = [
            { id: 3, name: 'Carol', email: 'carol@example.com' },
            { id: 4, name: 'Dave', email: 'dave@example.com' }
        ];
        const users = arr.map(User.fromJson);
        assert(users[0] instanceof User);
        assert(users[1] instanceof User);
        assert.strictEqual(users[0].name, 'Carol');
        assert.strictEqual(users[1].name, 'Dave');
    });
}); 