const supertest = require('supertest');
const app = require('../../src/app');

const request = supertest(app);

describe('GET /snippets', () => {
  it("language should fail if not one of ['javascript', 'ruby', 'python', 'go']", async () => {
    const response = await request.get('/snippets')
      .send({ language: 'php', packages: ['gatsby'] });
    const { errors } = response.body;
    expect(response.status).toBe(422);
    expect(errors).toHaveLength(1);
    expect(errors[0].source.parameter).toBe('language');
  });
  it("language should be one of ['javascript', 'ruby', 'python', 'go']", async () => {
    const response = await request.get('/snippets')
      .send({ language: 'javascript', packages: ['gatsby'] });
    expect(response.status).toBe(200);
  });
  it("packages should fail if it's not an array", async () => {
    const response = await request.get('/snippets')
      .send({ language: 'javascript', packages: 123 });
    const { errors } = response.body;
    expect(response.status).toBe(422);
    expect(errors).toHaveLength(1);
    expect(errors[0].source.parameter).toBe('packages');
  });
  it('packages should fail if it is an empty array', async () => {
    const response = await request.get('/snippets')
      .send({ language: 'javascript', packages: [] });
    expect(response.status).toBe(422);
  });
});
