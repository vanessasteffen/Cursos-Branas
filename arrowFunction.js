//arrow function serve para reduzir o código

const sum =  (a, b) => a + b;

const substract = (a, b) =>  a - b;

const calculator = (fn) => (a, b) => fn(a, b);

console.log(calculator(sum)(2, 2));
console.log(calculator(substract)(2, 2));