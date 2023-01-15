/** #javascript #developer #js #br */
const numbers = [1, 2, 10];

numbers.sort();
console.log(numbers); // [ 1, 10, 2 ] sorted alphabetically

numbers.sort().reverse();
console.log(numbers); // [ 2, 10, 1 ] alphabetically and reversed

numbers.sort((a,b) => a - b);
console.log(numbers); //[ 1, 2, 10 ] numeric ascending order

numbers.sort((a,b) => b - a);
console.log(numbers); // [ 10, 2, 1 ] numeric descending order