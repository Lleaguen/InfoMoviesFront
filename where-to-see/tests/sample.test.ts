// /app/tests/sample.test.ts
import { expect } from 'chai';

describe("Sample Test", () => {
  it("should add correctly", () => {
    const result = 2 + 2;
    expect(result).to.equal(4);
  });
});
