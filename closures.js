/** A closure gives you access to an outer function's scope from an inner function. In JavaScript,
*** closures are created every time a function is created, at function creation time.
*** #javascript #developer #js #br 
*/

const createCounter = () => {
    let count = 0; // private
  
    return {
      increment: () => ++count,
      decrement: () => --count,
      getCount: () => count,
      reset: () => (count = 0),
    };
  };
  
const counter = createCounter();
console.log(counter.count); // undefined
console.log(counter.getCount()); // 0
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.reset()); // 0