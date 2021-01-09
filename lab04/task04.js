// 1
function modificate(func, param) {
    return func(param);
}

console.log('--------------1--------------');
console.log(modificate((x) => x * x, 4));
console.log(modificate((x) => x * x * x, 3));
console.log(modificate((x) => -x, 14));

// 2
function filter(collection, func) {
    return collection.filter(item => func(item));
}
console.log('--------------2--------------');
console.log(filter([1, 4, 3, 7, 15, 24], (x) => x < 10));

// 3
const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);

const filterCompose = cb => arr => arr.filter(cb);
const map = cb => arr => arr.map(cb);

const users = [
    { name: 'First', age: 24 },
    { name: 'Second', age: 15 },
    { name: 'Third', age: 18 }
];

console.log('--------------3--------------');
console.log(compose(
    map(u => u.name),
    filterCompose(u => u.age >= 18)
)(users));