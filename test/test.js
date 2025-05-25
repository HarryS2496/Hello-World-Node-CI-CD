const request = require('supertest');
const app = require('../index');
const assert = require('assert');

describe('GET /', () => {
  it('should return Hello World', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect((res) => {
        assert.strictEqual(res.text, 'Hello World');
      })
      .end(done);
  });
});