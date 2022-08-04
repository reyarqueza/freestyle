const withLog = (fn) => {
  return (...args) => {
    console.log(fn.name);
    return fn(...args);
  };
};

const add = (a, b) => a + b;

const addWithLog = withLog(add);

const sum = addWithLog(5, 5);
console.log(sum);
