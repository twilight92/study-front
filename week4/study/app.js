function getMaxOrMin(type, numbers) {
    let getNum = numbers[0];

    if (type !== "min" && type !== "max") throw new Error("올바른 타입이 아닙니다.");

    const condition = function (idx) {
        if (type === "min") return getNum > numbers[idx];
        if (type === "max") return getNum < numbers[idx];
    };

    for (let i = 1; i < numbers.length; i++) {
        if (condition(i)) {
            getNum = numbers[i];
        }
    }

    return getNum;
};

const numbers = [0, -50, 444, 1, 23, 14, 5, 6, 234, 99];

console.log(getMaxOrMin("max", numbers)) // 444
console.log(getMaxOrMin("min", numbers)) // -50
console.log(getMaxOrMin(111, numbers)) // "올바른 타입이 아닙니다."
