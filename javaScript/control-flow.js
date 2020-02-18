let x = 3;
console.log(x);

let y = NaN;
let z = NaN;
console.log(y===z);

let a = isNaN;
console.log(isNaN(NaN));
console.log(isNaN(10));
console.log(isNaN(1 + undefined));

var b = 2;

var result = b % 2 ? '홀수'  :  '짝수';
console.log(result);

var c = 2, result;

if (c % 2) result = '홀수';
else result = '짝수';

console.log(result);

var num = 2;
var kind;

//if 문
if (num > 0) {
  kind = '양수';
}
console.log(kind); //양수

//if else  문
if (num > 0) {
  kind = '양수';
} else {
  kind = '음수';
}
console.log(kind);

//if else if  문
if (num > 0) {
  kind = '양수';
} else if (num < 0) {
  kind = '음수';
} else {
  kind = '영';
}
console.log(kind);

var number = -5;
var kind2;

if (number > 0)  kind2 = '양수';
else if (number < 0) kind2 = '음수';
else kind2 = '영';

console.log(kind2);

var num2 = -7;
var kind3 = num2 ? (num2 > 0 ? '양수' :  '음수')  :  '영';
console.log(kind3);

for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 6; j++) {
    if (i + j === 6) console.log(`[${i},${j}]`);
  }
}

foo: {
  console.log(1);
  break foo;
  console.log(2);
}

console.log('Done!');


outer: for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (i + j === 3) break outer;
    console.log('inner' + j);
  }
}

console.log('Done!');


var string = 'Hello World.';
var search = 'l';
var count = 0;
var countt = 0;

// continue  문을 사용하지 않으면 if  문 내에 코드를 작성해야 한다..
for (var i = 0; i < string.length; i++) {
  if (string[i] === search){
    count++;
    // code
    // code
    // code
  }
}
console.log(count);

// continue 문을 사용하면 if  문 밖에 코드를 작성할 수 있다..
for (var k = 0; k < string.length; k++) {
  if (string[k] !== search) continue;

  countt++;
  // code
  // code
  // code
}
console.log(countt);

