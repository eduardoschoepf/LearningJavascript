/** #javascript #developer #js #br */
const fruits = ['🍉', '🍊', '🍎', '🍓'];
//    indexes     0,   1,    2,   3
//    indexes    -4,  -3,   -2,   -1
const a = fruits.slice(-1);
const b = fruits.slice(-3);

console.log(a); // [ '🍓' ]
console.log(b); // [ '🍊', '🍎', '🍓' ]