// 2.5. Напишите программу для нахождения минимального из чисел, являющихся максимальными в каждой 
// из строк заданной прямоугольной матрицы.

const matrix = [
    [4, 45, 3],     // 45
    [1, 1, 3],      // 3
    [18, 19, 8]     // 19
];

// imperative

function minMaxImperative(m) {
    let min;
    let max;
    m.forEach(row => {
        max = 0;
        row.forEach(item => {
            if (item > max || !max) {
                max = item;
            }
        });
        if (max < min || !min) {
            min = max;
        }
    });
    return min;
}

console.log(minMaxImperative(matrix));

// functional

function minMaxFunctional(m) {
    let maxArr = [];

    m.forEach(arr => {
        maxArr.push(Math.max(...arr));  // reduce, recursive
    });

    return Math.min(...maxArr);
}

console.log(minMaxFunctional(matrix));