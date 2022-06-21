const numbers = [10, 25, -5, 2, 0, 1000, -34, 23, 4, 5];

// map is the same as forEach but returns the map based on changes
// you make to each item.
console.log('map')
const mappedNumbers = [...numbers].map(number => number * 2);
console.log(mappedNumbers);
console.log('----------------------------------');

// filter will return a subset of items in the map that satisfy a condition.
console.log('filter')
const negativeNumbers = [...numbers].filter(number => number < 0);
console.log(negativeNumbers);
console.log('----------------------------------');

// reduce is more complex. notice the callback functions above provide
// only one item in the map and filter callbacks, which is the item you can
// imagine in a forEach loop.
//
// reduce takes two args in its callback. A previous item and the current item. 
// If you imagine a forEach loop, the first loop where index is 0 should be 
// skipped because there is no previous loop. So Imagin the first loop to 
// begin at index 1, so that the previous loop occurred at index 0.
//
// Also, imagine that you can do any operation with the previous item and
// the current item. the value calculated from the previous and current item is
// stored as the updated previous item for the next loop. 
//
// Notice that there is one value always being computed which ends up being
// the final value returned when the reduce function has completed. 
//
// That is where the name comes from, because the array of items has been
// "reduced" to one item.
console.log('reduce');
const sumOfNumbers = [...numbers].reduce((prev, current) => prev + current);
console.log(sumOfNumbers);
console.log('----------------------------------');

// find - similiar to filter, but returns only the one found item.
console.log('find');
const haystack = [...numbers];
const needle = haystack.find(needle => needle < 0)
console.log(needle);
console.log('----------------------------------');

console.log('.sort()');
const sorted = [...numbers].sort();
console.log(sorted);
console.log('----------------------------------');

console.log('.sort((a, b) => a - b)');
const sortedA_minus_B = [...numbers].sort((a, b) => a - b);
console.log(sortedA_minus_B);
console.log('----------------------------------');

console.log('.sort((a, b) => b - a)');
const sortedB_minus_A = [...numbers].sort((a, b) => b - a);
console.log(sortedB_minus_A);
console.log('----------------------------------');
