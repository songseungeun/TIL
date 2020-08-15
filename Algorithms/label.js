// var i, j;

// loop1: for (i = 0; i < 3; i++) {
//   loop2: for (j = 0; j < 3; j++) {
//     if (i === 1 && j === 1) {
//       continue loop1;
//     }
//     console.log("i = " + i + ", j = " + j);
//   }
// }

// var items = [1, 2, 3];
// var tests = [2, 3, 4];

// var itemsPassed = 0;
// var x, y;

// top: for (x = 0; x < items.length; x++) {
//   for (y = 0; y < tests.length; y++) {
//     if (!tests[y].map(items[y])) {
//       continue top;
//     }
//   }
//   itemsPassed++;
// }
// console.log(itemsPassed);
// console.log(tests);

outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i + j === 3) break outer;
    console.log(`inner`, i, j);
  }
}

console.log("Done!");

var string = "Hello World.";
var search = "l";
var index;

for (var i = 0; i < string.length; i++) {
  if (string[i] === search) {
    index = i;
    break;
  }
}

console.log(index);
