const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome To Our Home Page");
  } else {
    res.write("Welcome To Our About Page");
  }
  res.end();
});

server.listen(5000);
