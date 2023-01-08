/** A closure gives you access to an outer function's scope from an inner function. In JavaScript,
*** closures are created every time a function is created, at function creation time.
*** #javascript #developer #js #br 
*/

var counter = () => {
    var count = 0; // private
    return {
        increment: () => ++count,
        decrement: ()  => --count
    }
}
var newCounter = counter();
console.log(newCounter.count, newCounter.increment(), newCounter.increment() ,newCounter.decrement()); // undefined 1 2 1