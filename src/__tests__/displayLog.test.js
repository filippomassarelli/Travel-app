import { displayLog } from "../client/js/displayLog";

describe("displayLog function", () => {
  test("check that it is a function", () => {
    expect(typeof displayLog).toBe("function");
  });
});
