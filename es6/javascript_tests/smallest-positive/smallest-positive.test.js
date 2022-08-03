import { smallestPositive1, smallestPositive2 } from "./smallest-positive";

function testSmallestPos(smallestPositive) {
  test("testing smallest positive with duplicates", () => {
    const numbers = [1, 3, 6, 4, 1, 2];
    expect(smallestPositive(numbers)).toBe(1);
  });

  test("testing smallest positive with a negative number", () => {
    const numbers = [8, 3, 6, 4, -1, 2];
    expect(smallestPositive(numbers)).toBe(2);
  });

  test("testing smallest positive with all negative numbers", () => {
    const numbers = [-2, -1, -10];
    expect(smallestPositive(numbers)).toBe(1);
  });
}

testSmallestPos(smallestPositive1);
testSmallestPos(smallestPositive2);
