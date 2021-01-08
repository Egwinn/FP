// 2.1. Напишите функцию для нахождения заданного значения в упорядоченном массиве целых чисел методом двоичного поиска.

// imperative

function binarySearchImperative(data, target) {
    let i = 0, j = data.length, k;
    while (i < j) {
        k = Math.floor((i + j) / 2);
        target <= data[k] ? j = k : i = k + 1;
    }

    return data[i] === target ? i : -1;
}

console.log(binarySearchImperative([3, 4, 5, 6, 7, 8, 9], 7));