// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share mininmum)
// Modules means piece of code that do a certain Function and Can be exported and imported in any part of the program.
// So remember that every file is CommonJS is a module and we are in charge of what we want to share (only share minimum)

const { items, person } = require("./6-alternative-export");
const { john, peter } = require("./4-names");
const names = require("./4-names");
const sayHi = require("./5-utils");

console.log(items);
console.log(person);
console.log(names);
sayHi(john);
sayHi(peter);
