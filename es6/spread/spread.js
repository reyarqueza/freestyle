const numbers = [1, 2, 3];
console.log(numbers.concat([4, 5, 6]));
console.log([...numbers, 4, 5, 6]);

const myObj = {
  name: "John",
  age: "52",
};

console.log(Object.assign({ id: 5 }, myObj));
console.log({
  id: 5,
  ...myObj,
});

console.log("\nspread an object as a value:");
console.log({
  id: 5,
  info: {
    ...myObj,
  },
});
