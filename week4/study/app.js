function getMaxOrMin(type, numbers) {
    let getNum = numbers[0];

    if (type !== NumberCompareType.MIN && type !== NumberCompareType.MAX) throw new Error("올바른 타입이 아닙니다.");

    const assignGetNum = function (idx) {
        getNum = numbers[idx];
    };

    switch (type) {
        case NumberCompareType.MIN:
            for (let i = 1; i < numbers.length; i++) {
                if (getNum > numbers[i]) {
                   assignGetNum(i);
                }
            }
            break;
        case NumberCompareType.MAX:
            for (let i = 1; i < numbers.length; i++) {
                if (getNum < numbers[i]) {
                   assignGetNum(i);
                }
            }
            break;
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
