// const http = require("http");

// const fs = require("fs");
// const path = "./Data.json";

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/reade") {

//     fs.readFile(path, "utf8", (err, file) => {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         console.error("Error while reading the file:", err);
//         res.end();
//         return;
//       }
//       try {
//         // const data = JSON.parse(file);
//         // let chunks="";
//         res.json({
//           data: "hahhahah"
//         })
//         // res.end(chunks);
//         console.log(data);
//       } catch (err) {
//         console.error("Error while parsing JSON data:", err);
//         res.end("Error while parsing JSON data", err)
//       }
//     });

//   } else if (req.method === "POST" && req.url === "/create") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World");
//   } else if (req.method === "PATCH" && req.url === "/update") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World");
//   } else if (req.method === "DELETE" && req.url === "/delete") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello World");
//   } else {
  //     res.writeHead(404, { "Content-Type": "text/plain" });
  //     res.end("SOMETHING WENT WRONG!");
  //   }
  // });
  // server.listen(3000, () => {
    //   console.log("Server is listening on port 3000");
    // });
    
// const fetch = require('node-fetch');
const http = require("http");
const fs = require("fs");
const url = require("url");

const newData = {
  userId: 2,
  id: 2,
  title: "quis ut nam facilis et officia qui",
  completed: false,
};





const server = http.createServer((req, res) => {

  const parsedUrl = url.parse(req.url);
  const path = parsedUrl.pathname;
  const id = path.split("/").pop();
  
  if (req.url === "/read") {

    fs.readFile("./Data.json", "utf8", (err, file) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        console.error("Error while reading the file:", err);
        res.end();
        return;
      } 
      else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(file);
      }
    });
  } 
  else if (req.url === "/create") {
  
    let data;

    fs.readFile("./Data.json", "utf8", (err, file) => {
      if (err) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        console.error("Error while reading the file:", err);
        res.end();
        return;
      } else {
        data = JSON.parse(file);
        data.push(newData);
        fs.writeFile("./Data.json", JSON.stringify(data), (err) => {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            console.error("Error while reading the file:", err);
            res.end();
            return;
          } else {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end("newData is created successfully");
            console.log(data);
          }
        });
      }
    });

  } 
  else if (path.startsWith("/update/") && id) {
    
    fs.readFile("./Data.json", "utf8", (err, file) => {
      if (err){
        res.writeHead(404, { "Content-Type": "text/plain" });
        console.error("Error while updating the file:", err);
        return res.end();
      }
      else
      {
        data = JSON.parse(file);
        for(let i=0; i<data.length; i++){
          if(data[i].id === id){
            data[i].title = req.body.title;
            data[i].completed = req.body.completed;
            data[i].userId = req.body.userId;
          }
        }
        fs.writeFile("./Data.json", JSON.stringify(data), (err) => {
          if (err){
            res.writeHead(404, { "Content-Type": "text/plain" });
            console.error("Error while reading the file:", err);
            return res.end();
          }
          else{
            console.log(data);
            return res.end("data is updated successfully");
          }
        });
      }
    });
  } else if (req.url === "/delete") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end("data will be deleted here");
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end("page not found");
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
