const fs = require("fs");

let data = fs.readFileSync("input.txt", "utf8");
let lines = data.split("\n");
// let lines = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
let currentLine = 0;
let counter = 0;
for (let i = 0; i < lines.length - 1; i++) {
  let line = lines[i];
  if (line > currentLine) {
    counter++;
  }
  currentLine = line;
}
console.log(counter);
