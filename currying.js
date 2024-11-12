// Currying
function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
// partial application based function
const double = multiply(2)(5)(10);
console.log(double);
