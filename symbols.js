// Symbols
const sym = Symbol("mySymbol");
const obj = {
  mySymbol: "name",
  [sym]: "secret",
};

// use case -> avoiding naming conflicts(same name keys)
console.log(obj[sym]);
console.log(Object.keys(obj));


// Decorators
// Proxy
