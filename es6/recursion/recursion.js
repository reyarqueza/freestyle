// function duplicate(str, n) {
//   return n > 1 ? str + duplicate(str, n - 1) : str;
// }

const duplicate = (str, n) => (n > 1 ? str + duplicate(str, n - 1) : str);

console.log(duplicate("test!", 3));
