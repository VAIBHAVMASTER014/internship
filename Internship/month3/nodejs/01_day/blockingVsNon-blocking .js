// Blocking methods execute synchronously and non-blocking methods execute asynchronously.

const fs = require("node:fs");

// Using the File System module as an example, this is a synchronous file read:
const syncFileContents = fs.readFileSync("./file.txt");
console.log("Synchronous data : ", syncFileContents);

// Using the File System module as an example, this is a synchronous file read:
fs.readFile("./file.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Async data : ", data);
  }
});

// Dangers of Mixing Blocking and Non-Blocking Code
fs.readFile("./file.txt", (err, data) => {//asynchronous opeartion
    if (err) {
        console.log(err);
    } else {
        console.log("Async data : ", data);
    }
});
// below line will execute first so when above file reading operation perform that file not found cause already unlinked by below code
fs.unlinkSync("./file.txt");//synchronous operation

