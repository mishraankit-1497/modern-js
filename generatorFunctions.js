// Generator functions

function* infiniteSequence(start = 1) {
  let num = start;
  while (true) {
    // yield keyword passes the function and return the specified value
    yield num;
    num++;
  }
}

const generator = infiniteSequence();
// Each time .next() is called on the generator, it resumes
// execution until the next yield
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value)
// usage-> Lazy evaluation, instead of generating all values at once
// the generator produces values only when requested
// redux saga

// next()
// returns an object with the yielded value and puts a statement as true
// if execution is done
