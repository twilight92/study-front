const fs = require("fs");
//fs: file system 약자

console.log(process.argv)
//> node src/writeFile.js abc1.txt hihi

//   'C:\\Program Files\\nodejs\\node.exe',
//   'D:\\study-front\\week6\\src\\writeFile.js',
//   'abc1.txt',
//   'hihi'

fs.writeFile(
    process.argv[2],
    process.argv[3],
    "utf-8",
    (err) => {
        if (err) {
            console.error(err)
        }
    })

// const arrowFunc = (err) => {}
// const func = function(err){}
// 우리가 체감할 수 있는 차이점은 내부에서 this를 어떻게 사용하는가