const counter = () => {
  let counter = 0;
  return () => counter++;
};

const count = counter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
