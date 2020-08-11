const fs = require("fs");
const dateFns = require("date-fns");

const log = (message) => {
    const date = dateFns.format(new Date(), "yyyy.mm.dd HH:mm::ss")
    fs.appendFile("log.txt", `${date} :: ${message}\n`, "utf-8", (err) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = log