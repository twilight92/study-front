const http = require("http");

http.createServer((req, res) => {
    res.end("Hello world!");
}).listen(8080);
// createServer 실행했을 떄 return 되는 것이 객체임을 알 수 있음