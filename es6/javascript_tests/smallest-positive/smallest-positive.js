export default function smallestPostive(numbers) {
  const smallestPostive = 1;
  const filteredAndSorted = [...new Set(numbers)]
    .filter((item) => item > 0)
    .sort();

    return filteredAndSorted && filteredAndSorted.length
      ? filteredAndSorted.reduce((prev, curr) => prev < curr ? prev : curr)
      : smallestPostive
}
