var num = -3;
var kind;

if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}

console.log(kind);

var num2 = -3;
var kind2 = num2 > 0 ? '양수':(num2 < 0 ? '음수':'영');

console.log(kind2);