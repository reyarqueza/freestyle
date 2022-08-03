export function smallestPositive1(numbers) {
  const filteredNums = numbers.filter((number) => number > 0);

  const smallestPos =
    filteredNums &&
    filteredNums.length > 0 &&
    filteredNums.reduce((prev, curr) => (prev < curr ? prev : curr));

  return smallestPos ? smallestPos : 1;
}

export function smallestPositive2(numbers) {
  const filteredNums = numbers.filter((number) => number > 0).sort();
  console.log("filteredNums", filteredNums);
  const smallestPos =
    filteredNums && filteredNums.length > 0 && filteredNums[0];

  return smallestPos ? smallestPos : 1;
}
