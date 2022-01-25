// Built-In Modules
// path it deals with the pathes of operating system
const path = require("path");
const { abort } = require("process");

console.log(path.sep); // my path seperator

const filepath = path.join("/content", "subfolder", "test.txt"); // joing strings with system path seperator
console.log(filepath);

const base = path.basename(filepath); // return the last file or folder of the path
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt"); // return the absolute path like what join do but return the absolute path

console.log(absolute);
