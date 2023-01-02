/** This is a function that returns a promise
*** that resolves to "MESSAGE" after 2 seconds.
*** #javascript #developer #js #br 
*/
function getMessage() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("MESSAGE"), 2000);
    });
}
async function start() {
    try {
        const message = await getMessage();
        return `The message is: ${message}`;
    } catch(error) {
        console.log(error);
    }
}
start().then(msg => console.log(msg)); // "the message is: MESSAGE"