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

// functional

const binarySearchFunctional = (data, target, start, end) => {
    if (end < 1) {
        return data[0];
    }
    const middle = Math.floor((start + end) / 2);
    if (target === data[middle]) {
        return middle;
    }
    if (end - 1 === start) {        // left 2 final values
        return Math.abs(data[start] - target) > Math.abs(data[end] - target) ? end : start;
    }
    if (target > data[middle]) {
        return binarySearchFunctional(data, target, middle + 1, end);
    }
    if (target < data[middle]) {
        return binarySearchFunctional(data, target, start, middle - 1);
    }
};

const data = [3, 4, 5, 6, 7, 8, 9];
console.log(binarySearchFunctional(data, 7, 0, data.length - 1));