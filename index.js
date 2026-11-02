const url = require("url");
const fs = require("fs");
const http = require("http");

const myserver = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return;
  }

  const log = `${Date.now()} : ${req.url} New request received\n`;
  const myUrl = url.parse(req.url, true);

  fs.appendFile("log.txt", log, () => {
    switch (myUrl.pathname) {
      case "/contact-us":
        res.end("This is contact us");
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`this is my name = ${username}`);
        break;

      default:
        res.end("This is homepage");
    }
  });
});

myserver.listen(8000, () => {
  console.log("server started");
});
