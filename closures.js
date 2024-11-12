// Closures
function createCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}

const count = createCounter();
// console.log(count());
// console.log(count());

// this keyword
const Person = {
  name: "Alice",
  greet(greeting) {
    console.log(`${greeting} My name is ${this.name}`);
  },
};

Person.greet();
const greetFn = Person.greet;
console.log(greetFn);
greetFn();

// call, bind & apply
const AnotherPerson = {
  name: "Bob",
};

// invokes the function immediately and sets the value for this to a specified value
// and additional arguments can be passed individually
Person.greet.call(AnotherPerson, "Hello");

// Similar to call, but arguments are passed as an array
Person.greet.apply(AnotherPerson, ["Hi"]);

// it returns a new function with this bound to the specified value which
// can be invoked at the latest stage
const boundGreet = Person.greet.bind(AnotherPerson, "Hey");
boundGreet();
