// 1
function modificate(func, param) {
    return func(param);
}

console.log('--------------1--------------');
console.log(modificate((x) => x * x, 4));
console.log(modificate((x) => x * x * x, 3));
console.log(modificate((x) => -x, 14));
