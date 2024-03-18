const fs = require("fs");

const recentDate = require("./moduleCreation")
// reading file's data
const data = fs.readFileSync("./file.txt");
console.log(data.toString());

// writing data to file
fs.writeFileSync("./file.txt", "Let's do itttttttttttttt");
console.log("file updated at :", recentDate.dataTime())
fs.readFile("./file.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});
