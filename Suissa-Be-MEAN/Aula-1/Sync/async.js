const fs = require("fs");

console.log("Vou ler", Date.now());
console.time("leitura");

fs.readFile("file.wmv", (err, file) => {
  console.log(file)
  console.timeEnd("leitura");
});

console.log("Ja li ", Date.now());