const http = require("http");
const log = require("./logTest");

const server = http.createServer((req, res) => {
console.log(req.url)
    log(req.headers["user-agent"])
    switch (req.url) {
        case "/about": return res.end("about")
        case "/mypage": return res.end("mypage")
        default: return res.end("404")
    }
});

server.listen(8080);
// 코드를 갱신하려면 서버를 내렷다 올려야함
// ctrl 종료 후 다시 실행
// 인텔리제이의 start로 실행했다면 종료/시작 아이콘

// 코드에 변경이 있을 때마다 자동으로 서버를 내렸다 올렸다 할 수 있게
// "start": "npx nodemon src/server.js",

// npx: nodemon을 전역으로 한번 깔았다 종료되면 지우고 다시