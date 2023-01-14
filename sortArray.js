/** #javascript #developer #js #br */
const numbers = [1, 2, 10];

numbers.sort();
console.log(numbers);
// sorted alphabetically

numbers.sort().reverse();
console.log(numbers);
// alphabetically and reversed

numbers.sort((a,b) => a - b);
console.log(numbers);
// numeric ascending order

numbers.sort((a,b) => b - a);
console.log(numbers);
// numeric descending order