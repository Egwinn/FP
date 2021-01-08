let result = '';
let rows = process.argv[2] ? Number(process.argv[2]) : 10;
const width = 4; // number width


function pascalTriangle(rows, n = 0) {
    if (rows === n) return;
    result = result.concat(' '.repeat((rows - n) / 2 * width));         // decorative line shift
    for (let m = 0; m <= n; m++)
        result = result.concat(`${' '.repeat(width)}${factorial(n) / (factorial(m) * factorial(n - m))}`);
    result = result.concat('\n');
    pascalTriangle(rows, ++n);
}

function factorial(x) {
    if (x === 0) {
        return 1;
    }

    return x * factorial(x - 1);
}

(function main() {
    pascalTriangle(rows);
    console.log(result);
})();
