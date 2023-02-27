const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      return res.end("<div class='red'>hello</div>");
    } else {
      return res.end("404");
    }
  })
  .listen(8080);
