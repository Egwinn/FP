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


// lazy evaluation of function
// https://www.merrickchristensen.com/articles/lazy-evaluation-in-javascript/

// стратегия энергичного вычисления - выражение вычисляется, как только оно будет привязано к переменной, 
// независимо от потребности в результате его выполнения
/* const fib1 = function (a, b) {
    let c = a + b
    return { "this": c, "next": fib1(b, c) } // выполняется незамедлительно => переполнение стэка
}
const x = fib1(3, 5)
console.log(x.this, x.next); */

// стратегия ленивого вычисления — вычисления откладываются до тех пор, пока не понадобится их результат
const fib2 = function (a, b) {
    let c = a + b
    return { this: c, next: function () { return fib2(b, c) } }
}
const x = fib2(3, 5)
console.log(x.this, x.next().this);

// использование генератора https://dev.to/hemaka/lazy-recursion-using-javascript-generators-4f5l
function* fibonacci() {
    [a, b] = [0, 1]
    while (true) {
        yield a;
        [a, b] = [b, a + b]
    }
}
const fib = fibonacci();
for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}


// monade
// Монада - это коробка с некоторым значением. Сложные, но наглядные вычисления через цепочки
// Identity, Maybe, Either, Validation, Promise, List etc.
// https://fseby.wordpress.com/2016/02/25/практическая-вводная-в-монады-в-javascript/
// https://curiosity-driven.org/monads-in-javascript
const R = require('ramda');
const path = R.path;
const Maybe = require('ramda-fantasy').Maybe;

const user = {
    name: 'user',
    email: 'user@mail.com',
    prefs: {
        languages: {
            imperative: 'java',
            functional: 'javascript'
        }
    }
};

const getURLForUser = (user) => {
    return Maybe(user)
        .map(path(['prefs', 'languages', 'imperative'])) // using of ramda
};
console.log(getURLForUser(user));

// infinite data structure
// using iterators or generators
// https://hackernoon.com/infinite-data-structures-in-javascript-eb67ecbccdb
// https://dev.to/aminnairi/infinite-data-structures-lazy-evaluation-in-javascript-3hif
const createIterator = function* () {
    let x = 0;
    while (true) {
        yield x;
        x += 1;
    }
};

function take(count, generator) {
    const result = [];

    while (count--) {
        result.push(generator.next().value);
    }

    return result;
}

const allPos = createIterator();
console.log(take(15, allPos));


// lambda
const lambdaAdd = (x, y) => x + y;
console.log(lambdaAdd(2, 2));


// operation Map, Filter и Reduce
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 1));
console.log(arr.filter(item => item % 2 === 0));
console.log(arr.reduce((accumulator, currentValue) => accumulator + currentValue))