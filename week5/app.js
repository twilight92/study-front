const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(function(v) {
    if (v % 2 === 0) {
        return v;
    }
});

const oddNumbers = numbers.filter(function (v) {
    if (v % 2 !== 0) {
        return v;
    }
});

console.log(evenNumbers);
console.log(oddNumbers);
