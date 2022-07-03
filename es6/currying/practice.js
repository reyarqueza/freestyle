

function multiply(a) {
    return function(b) {
        return a * b;
    }
}

const mult = multiply(5);

console.log('mult', mult);

console.log(mult(5));

console.log(multiply(6)(6));