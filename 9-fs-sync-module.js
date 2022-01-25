const { readFileSync, writeFileSync } = require("fs"); // Destruction readFileSync out of the fs Module
const path = require("path");

const firstFile = path.join("content", "first.txt");
const secondFile = path.join("content", "second.txt");

const first = readFileSync(firstFile, "utf-8");
const second = readFileSync(secondFile, "utf-8");
console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second}`
);
