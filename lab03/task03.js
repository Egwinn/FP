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


// curry-function  f(a, b, c) => f(a)(b)(c)
function curry(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        };
    };
}

// using of curry-function
// https://khatuntsev.dev/2019-05-08/memoization-and-currying-in-js/
function sum(a, b) {
    return a + b;
}
let carriedSum = curry(sum);
console.log(carriedSum(1)(2));

const fiveAdd = carriedSum(5); // частично применённая функция
console.log(fiveAdd(3));


// memoization
// https://habr.com/ru/company/ruvds/blog/332384/
// простая функция, прибавляющая 10 к переданному ей числу
const tenAdd = (n) => (n + 10);
console.log(tenAdd(9));

// аналогичная функция с мемоизацией
const memoizedAdd = () => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache');
            return cache[n];
        }
        else {
            console.log('Calculating result');
            let result = n + 10;
            cache[n] = result;
            return result;
        }
    }
};
const newAdd = memoizedAdd();
console.log(newAdd(9)); // invoke
console.log(newAdd(9)); // take from cache

// простая функция, принимающая другую функцию и возвращающая её же, но с мемоизацией
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('Fetching from cache');
            return cache[n];
        }
        else {
            console.log('Calculating result');
            let result = fn(n);
            cache[n] = result;
            return result;
        }
    }
}
// создание функции с мемоизацией из чистой функции tenAdd
const memoizedAdd2 = memoize(tenAdd);
console.log(memoizedAdd2(3)); // invoke
console.log(memoizedAdd2(3)); // take from cache