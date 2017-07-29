const fs = require("fs");

console.log("Vou ler", Date.now());
console.time("leitura");

const file = fs.readFileSync("file.wmv");
console.log(file);

console.timeEnd("leitura");
console.log("Ja li ", Date.now());