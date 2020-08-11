const fs = require("fs");
//fs: file system 약자

console.log(process.argv)
// const filename = process.argv[2];
// const contents = process.argv[3];
// 변수를 한번밖에 사용하지는 않지만 이렇게 변수화해주는게 명시적이다.
// 여기서 또 개선 가능

console.log(process.argv.slice(2))
const [filename, contents] = process.argv.slice(2);

fs.writeFile(
    filename,
    contents,
    "utf-8",
    (err) => {
        if (err) {
            console.error(err)
        }
    })

// const arrowFunc = (err) => {}
// const func = function(err){}
// 우리가 체감할 수 있는 차이점은 내부에서 this를 어떻게 사용하는가