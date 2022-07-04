function solution(A) {
  let smallestPostive = 1;

  const simplifiedArray = [...new Set(A)]
    .filter(item => item > 0)
    .sort();

  simplifiedArray.forEach((item, index) => {
    if (item === index + 1) {
      smallestPostive = index + 2;
    }
  });

  return smallestPostive;

}

const test1 = [1, 3, 6, 4, 1, 2];
console.log(solution(test1));

const test2 = [1,2,3];
console.log(solution(test2));

const test3 = [-1, -3];
console.log(solution(test3));
