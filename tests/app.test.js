const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints', () => {
  test('POST /api/sort-desc', async () => {
    const res = await request(app)
      .post('/api/sort-desc')
      .send({ numbers: [1, 3, 2] });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toEqual([3, 2, 1]);
  });

  test('POST /api/max-subarray', async () => {
    const res = await request(app)
      .post('/api/max-subarray')
      .send({ array: [1, 2, 3, 4], length: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(7);
  });

  test('POST /api/sum-even', async () => {
    const res = await request(app)
      .post('/api/sum-even')
      .send({ object: { a: 2, b: { c: 4 }, d: 5 } });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(6);
  });
});
