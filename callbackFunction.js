/** A callback function is a function passed into another function as an argument, 
*** which is then invoked inside the outer function to complete some kind of routine or action.
*** #javascript #developer #js #br 
*/
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}

doHomework('math', function () {
    console.log('Finished my homework');
});

/****** Exemple 2 ********/

function greeting(name) {
    console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
    callback("John");
}

processUserInput(greeting);
