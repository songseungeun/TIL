// 배열 활용해서 여러 특수문자 트리 만들기

let star = ['*','+','@','&','#'];
let result = "";
let newLine = "\n";

function starTree(row) {
  for (let i = 0; i < row; i++) {
    for (let k = row - 1; k > i; k--) {
      result += " ";
    }
    for (let j = 0; j <= i * 2; j++) {
      let starStr = 0;
      starStr = Math.floor(Math.random() * 4);
      result += star[starStr];
    }
    if (i === row - 1) break;
    result += newLine;
  }
  return console.log(result);
}

starTree(10);