/** The find() method returns  
*** the first element in the provided array
*** that satisfies the provided testing function
*** #javascript #developer #js #br
*/
const fruits = ['🍉', '🍊', '🍎', '🍓'];
const watermelon = fruits.find(
  fruit => fruit === '🍉'
);
console.log(watermelon); // 🍉