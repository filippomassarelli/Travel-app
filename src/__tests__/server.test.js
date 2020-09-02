const app = require("../server/index");
const supertest = require("supertest");
const request = supertest(app);

describe("get the endpoints right", () => {
  afterAll(async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  });
  it("returns an html file", async (done) => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    done();
  });
});
