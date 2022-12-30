/* #javascript #developer #js #br */

const numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = numbers
                .filter(el => el % 2 === 0) // [2, 4, 6]
                .map(el => el * el) // [4, 16, 36]
                .reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 56