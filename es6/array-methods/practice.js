const numbers = [13, 25, -5, 2, 1, 40, -34, 23, 4, 5];

console.log('numbers', numbers);

const numbersMapped = numbers.map(number => number * 2);

console.log('numbersMapped', numbersMapped);

const numbersFiltered = numbers.filter(number => number < 0);

console.log('numbersFiltered', numbersFiltered);

const sumOfNumbers_Reduced = numbers.reduce((a, b) => a * b);

console.log('sumOfNumbers_Reduced', sumOfNumbers_Reduced);

const avg = (numbers.reduce((a,b) => a + b))/numbers.length;
console.log('avg', avg.toFixed(2));