/** #javascript #developer #js #br */

['🍉', '🍓', '🍊', '🍓'].filter(fruit => fruit === '🍉');   // [ '🍉' ]
['🍉', '🍓', '🍊', '🍓'].map(fruit => fruit = '🍉');        // [ '🍉', '🍉', '🍉', '🍉' ]
['🍉', '🍓', '🍊', '🍓'].find(fruit => fruit === '🍓');     // [ '🍓' ]
['🍉', '🍓', '🍊', '🍓'].findIndex(fruit => fruit === '🍉');// 0
['🍉', '🍓', '🍊', '🍓'].fill('🍉', 2);                     // [ '🍉', '🍓', '🍉', '🍉' ]
['🍉', '🍓', '🍊', '🍓'].every((i) => i !== '🍎');          // true
['🍉', '🍓', '🍊', '🍓'].some(fruit => fruit === '🍉');     // true (checks whether an element is even)
['🍉', '🍓', '🍊', '🍓'].concat('🍎');                      // [ '🍉', '🍓', '🍊', '🍓', '🍎' ] (returns a new array)
['🍉', '🍓', '🍊', '🍓'].includes('🍎');                    // false
['🍉', '🍓', '🍊', '🍓'].push('🍉');                        // '🍉', '🍓', '🍊', '🍓', '🍉']
['🍉', '🍓', '🍊', '🍓'].pop();                             // ['🍉', '🍓', '🍊'] removes the last element from an array