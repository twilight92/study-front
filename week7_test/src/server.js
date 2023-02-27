const http = require("http");
const readFile = require("./readFile");

const users = [
  {
    name: "suho",
    age: 36,
  },
  {
    name: "gilldong",
    age: 10,
  },
];

function userComponent(users) {
  const userLis = users.map((user) => `<li>${user.name} : ${user.age}</li>`).join(""); // JSON.stringify(users)
  return `<ul>${userLis}</ul>`;
}

http
  .createServer((req, res) => {
    if (req.url === "/") {
      // 비동기적이라 return 없으면 아무일도 안일어남
      return readFile("index", (data) => res.end(data));
    } else if (req.url === "/users") {
      return res.end(`<html><body>${userComponent(users)}</body></html>`);
    } else if (req.url === "/users") {
      return readFile("users", (data) => res.end(data));
    } else {
      return res.end("404");
    }
  })
  .listen(8080);
