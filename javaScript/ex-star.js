// 함수로 만들고 싶은 만큼 크게 별트리 만들기

let star = "*";
let result = "";
let newLine = "\n";

function starTree(row) {
  for (let i = 0; i < row; i++) {
    for (let k = row - 1; k > i; k--) {
      result += " ";
    }
    for (let j = 0; j <= i * 2; j++) {
      result += star;
    }
    if (i === row - 1) break;
    result += newLine;
  }
  return console.log(result);
}

starTree(9);