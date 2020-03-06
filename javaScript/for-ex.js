let star = "*";
let newLine = "\n";
let result = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    result += star;
  }
  for (let k = 0; k < 1; k++) {
    result += newLine;
  }
}

console.log(result);
