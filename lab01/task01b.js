const COINS_NOM = [1, 2, 3, 4, 5];
let money = process.argv[2] ? Number(process.argv[2]) : 4;

function getCountOfWays(money, indexOfCoin) {
    if (money < 0 || indexOfCoin < 0) {
        return 0;
    }
    if (money === 0) {
        return 1;
    }

    return getCountOfWays(money, indexOfCoin - 1) + getCountOfWays(money - COINS_NOM[indexOfCoin], indexOfCoin);
}

(function main() {
    if (money !== 0) {
        console.log(getCountOfWays(money, COINS_NOM.length - 1));
    } else {
        console.log('Enter an amount greater than 0!');
    }
})();