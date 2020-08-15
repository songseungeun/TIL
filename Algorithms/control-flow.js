var num = 2;
var kind;

if (num > 0) kind = "양수";
else if (num < 0) kind = "음수";
else kind = "영";

console.log(kind);

var x = 0;

var kind2 = x ? (x > 0 ? "양수" : "음수") : "영";

console.log(kind2);

var year = 2000;
var month = 2;
var days = 0;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    days = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    days = 30;
    break;
  case 2:
    days = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28;
    break;
  default:
    console.log("Invalid month");
}

console.log(days);

for (var i = 0; i < 2; i++) {
  console.log(i);
}

for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(i, j);
  }
}

var count = 0;

// while (true) {
//   console.log(count);
//   count++;
//   if (count === 3) break;
// }

do {
  console.log(count);
  count++;
} while (count < 3);

foo: {
  console.log(1);
  break foo;
  console.log(2);
}
console.log("Done!");
