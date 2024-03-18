// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);
// var qdata = q.query;
// console.log(qdata)

const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filePath = "." + q.pathname;
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Not Found");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    }
  });

  
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});
