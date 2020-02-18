console.log(score); // undefined

var score = 80;     // 변수 선언과 값의 할당

// 변수선언 > 런타임 이전에 실행, 값의 할당 > 런타임에 실행

console.log(score); // 80

// 예제 2

console.log(score2);

score2 = 80;

var score2;

console.log(score2); // 80

// 예제 3 값의 교환

var x = 1;
var y = 2;

var z = x;
var x = y;
var y = z;

console.log(x, y);
