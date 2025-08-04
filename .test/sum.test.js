import { expect } from "vitest";
import { sum } from "../src/component/sum";

test("Sum functin should return the result of sum of two numbers", () => {
  const result = sum(3, 4);
  expect(result).toBe(7);
});
