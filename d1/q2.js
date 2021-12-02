const fs = require("fs");

let data = fs.readFileSync("input.txt", "utf8");
let lines = data.split("\n");
// let lines = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
let currentLine = 0;
let counter = 0;
for (let i = 2; i < lines.length - 1; i++) {
  let window = [
    parseInt(lines[i - 2]),
    parseInt(lines[i - 1]),
    parseInt(lines[i]),
  ];
  let result = window[0] + window[1] + window[2];
  if (result > currentLine) {
    counter++;
  }
  currentLine = result;
}
console.log(counter);
