// 1
// ссылка?
console.log('--------------1--------------');

// 2
const searchString = 'public class Person {private final String name; private final int age;}';

console.log('--------------2--------------');
console.log(
    searchString
        .toLowerCase()
        .match(
            /[a-z]+/g
        )
        .reduce(
            (prev, curr) => {
                prev[curr] = (prev[curr] + 1) || 1;
                return prev;
            },
            {}
        )
);