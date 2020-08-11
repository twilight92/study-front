const http = require("http");
const log = require("./log");
const fs = require("fs");
const dateFns = require("date-fns");
const date = dateFns.format(new Date(), "yyyy_MM_dd_HH")
const server = http.createServer((req, res) => {
    log(req.headers["user-agent"])

    fs.readFile(`log_${date}.txt`, (err, data) => {
        switch (req.url) {
            case "/log":
                return res.end(data)
            default:
                return res.end("404 suho")
        }
    })
});

server.listen(8080)
