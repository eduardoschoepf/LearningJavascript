/** The destructuring assignment syntax is a JavaScript expression
*** that makes it possible to unpack values from arrays, or properties from objects,
*** into distinct variables
*** #javascript #developer #js #br
*/

const user = {
    name: "John",
    age: 35,
    skills:["Javascript", "Java", "Python"]
  }
  let {name, age} = user;
  console.log(name, age);