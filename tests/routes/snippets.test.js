const supertest = require('supertest');
const app = require('../../src/app');
require('../_helpers/setup')();

const request = supertest(app);

describe('GET /snippets', () => {
  it("params validation should fail if language not one of ['javascript', 'ruby', 'python', 'go']", async (done) => {
    const response = await request.get('/snippets')
      .send({ language: 'php', packages: ['gatsby'], ide: 'vscode' });
    const { errors } = response.body;
    expect(response.status).toBe(422);
    expect(errors).toHaveLength(1);
    expect(errors[0].source.parameter).toBe('language');
    done();
  });

  it("params validation should fail if packages it's not an array", async (done) => {
    const response = await request.get('/snippets')
      .send({ language: 'javascript', packages: 123, ide: 'vscode' });
    const { errors } = response.body;
    expect(response.status).toBe(422);
    expect(errors).toHaveLength(1);
    expect(errors[0].source.parameter).toBe('packages');
    done();
  });

  it('params validation should fail if packages is an empty array', async (done) => {
    const response = await request.get('/snippets')
      .send({ language: 'javascript', packages: [], ide: 'vscode' });
    expect(response.status).toBe(422);
    done();
  });

  it("params validation should should fail if ide not one of ['vscode]", async (done) => {
    const response = await request.get('/snippets')
      .send({ language: 'javascript', packages: ['gatsby'], ide: 'test' });
    const { errors } = response.body;
    expect(response.status).toBe(422);
    expect(errors).toHaveLength(1);
    expect(errors[0].source.parameter).toBe('ide');
    done();
  });

  it('request should pass with valid params', async (done) => {
    const response = await request.get('/snippets')
      .send({ language: 'javascript', packages: ['gatsby'], ide: 'vscode' });
    expect(response.status).toBe(200);
    done();
  });
});
