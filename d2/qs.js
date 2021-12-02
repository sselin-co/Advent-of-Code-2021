const fs = require("fs");

let data = fs.readFileSync("d2/input.txt", "utf8");
let lines = data.split("\n");
// lines = lines.splice(1, lines.length - 1);
// lines = ["forward 5", "down 5", "forward 8", "up 3", "down 8", "forward 2"];
let horizontalPos = 0;
let verticalPos = 0;
let aim = 0;
for (let line of lines) {
  let direction = line[0];
  let distance = parseInt(line.substring(line.length - 1));
  if (direction === "f") {
    horizontalPos += distance;
    verticalPos += aim * distance;
  }
  if (direction === "d") {
    aim += distance;
  }
  if (direction === "u") {
    aim -= distance;
  }
}
console.log(horizontalPos * verticalPos);
