const fs = require("fs")
const dateFns = require("date-fns")
let date = dateFns.format(new Date(), "yyyy_MM_dd_HH")

function log(message) {
    function writeLogFile() {
      date = dateFns.format(new Date(), "yyyy_MM_dd_HH")

      fs.writeFile(`log_${date}.txt`, `${date} :: ${message}\n`, "utf-8", (err) => {
        if (err) {
          console.log(err)
        }
      })
    }

    setInterval(writeLogFile, 1000 * 60 * 60);

    fs.appendFile(`log_${date}.txt`, `${date} :: ${message}\n`, "utf-8", (err) => {
      if (err) {
          console.log(err)
      }
    })
}

module.exports = log