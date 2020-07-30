function getMaxOrMin(type, numbers) {
    let getNum = numbers[0];

    if (type !== NumberCompareType.MIN && type !== NumberCompareType.MAX) throw new Error("올바른 타입이 아닙니다.");

    const condition = function (idx) {
        if (type === NumberCompareType.MIN) return getNum > numbers[idx];
        if (type === NumberCompareType.MAX) return getNum < numbers[idx];
    };

    for (let i = 1; i < numbers.length; i++) {
        if (condition(i)) {
            getNum = numbers[i];
        }
    }

    return getNum;
};

const numbers = [0, -50, 444, 1, 23, 14, 5, 6, 234, 99];

const NumberCompareType = {
    MIN: "MIN",
    MAX: "MAX"
};

console.log(getMaxOrMin(NumberCompareType.MAX, numbers)) // 444
console.log(getMaxOrMin(NumberCompareType.MIN, numbers)) // -50
console.log(getMaxOrMin(111, numbers)) // Uncaught Error: 올바른 타입이 아닙니다.
