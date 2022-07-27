export default function smallestPostive(numbers) {
  const filteredNums = numbers.filter((number) => number > 0);

  const smallestPos =
    filteredNums &&
    filteredNums.length > 0 &&
    filteredNums.reduce((prev, curr) => (prev < curr ? prev : curr));

  return smallestPos ? smallestPos : 1;
}
