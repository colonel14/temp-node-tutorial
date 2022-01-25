const { readFile, writeFile } = require("fs"); // Destruction readFileSync out of the fs Module
const path = require("path");

// Syntax
// readFile(path, encode, callback(error, result))
readFile("./content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
