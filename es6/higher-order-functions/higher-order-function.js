// higher order function

const withLog = (fn) => {
  return (...args) => {
    console.log(`function name: ${fn.name}`);
    return fn(...args);
  };
};

function add(a, b) {
  return a + b;
}

const addWithLog = withLog(add);
const theSum = addWithLog(5, 5);

console.log("theSum", theSum);
