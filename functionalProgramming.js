// Functional programming
const add = (a, b) => {
  return a + b;
};

const numbers = [1, 2, 3];
numbers.push(5);
const newNumbers = [...numbers, 4];
numbers.push(6);
// console.log(numbers)
console.log(newNumbers);

const res = add(2, 3);

// Type cohesion and type checking
console.log("5" == 5)
// strict equality === stopping the implicit type conversion of js
console.log("5" === 5)