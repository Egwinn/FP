// const variable
const variable = 'Hello World';


// clear function
const add = (x, y) => x + y;


// first-class function, function == Object
// https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
const helloWorld = function () {
    console.log('Hello World');
}
helloWorld();


// higher-order function is a function that can take another function as an argument, or that returns a function as a result.
// https://www.sitepoint.com/higher-order-functions-javascript/
function firstFunc() {
    console.log('first');
}
function secondFunc() {
    console.log('second');
}
function invoke(type, firstFunc, secondFunc) {
    if (type === 'first') {
        return firstFunc();
    } else if (type === 'second') {
        return secondFunc();
    }
}
invoke('first', firstFunc, secondFunc);