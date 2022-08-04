const withLog = (fn) => {
  console.log(fn.name);
  return fn;
};

const sum = (a, b) => a + b;
const sumWithLog = withLog(sum);

console.log(sumWithLog(5, 5));
