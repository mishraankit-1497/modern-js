// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};

const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);
person1.greet();
person2.greet();

const animalMethods = {
  eat() {
    console.log(`${this.name} is eating..`);
  },
  sleep() {
    console.log(`${this.name} is sleeping..`);
  },
};

Person.prototype = Object.create(animalMethods);
const cat = new Person("Tom", 12);
cat.eat();
cat.sleep();

// Copying methods (mixins)
const canFly = {
  fly() {
    console.log(`${this.name} is flying..`);
  },
};

const canSwim = {
  swim() {
    console.log(`${this.name} can swim..`);
  },
};

function Duck(name) {
  this.name = name;
  Object.assign(Duck.prototype, canSwim, canFly);
}
console.log(new Duck("Alice").swim());
