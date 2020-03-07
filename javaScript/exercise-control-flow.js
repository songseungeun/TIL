// 제어문 연습 문제
// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성하라

var x = 15;

if (20 > x && x > 10) {
  console.log(x);
}

// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

for (var i = 0; i < 10; i++) {
  if (!(i % 2)) {
    console.log(i);
  }
}

// i += 2 활용
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

var even = '';
for (var i = 0; i < 10; i++) {
  if (!(i % 2)) {
    even += `${i}`;
  }
}
console.log(even);

// i += 2 활용
let even = ``;
for (let i = 0; i < 10; i += 2) {
  even += `${i}`;
}
console.log(even);

// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

for (var i = 10; i > 0; i--) {
  if (i % 2) {
    console.log(i);
  }
}

// i -= 2 활용
for (let i = 9; i > 0; i -= 2) {
  console.log(i);
}

// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

var a = 0;
while (a < 10) {
  if (!(a % 2)) {
    console.log(a);
  }
  a++;
}

// 다른 방법

let i = 0;
while (i < 10) {
  console.log(i);
  i += 2;
}

// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

var b = 10;
while (b > 0) {
  if (b % 2) {
    console.log(b);
  }
  b--;
}

// 다른 방법

let i = 9;
while (i > 0) {
  console.log(i);
  i -= 2;
}
// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.

var sum = 0;

for (var i = 0; i < 10; i++) {
  sum += i;
}

console.log(sum);

// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

var sum = 0;

for (var i = 0; i < 20; i++) {
  if (i % 2 && i % 3) {
    sum += i;
  }
}

console.log(sum);

// 다른 방법
var sum = 0;

for (var i = 0; i < 20; i++) {
  if (0 !== i % 2 && 0 !== i % 3) {
    sum += i;
  }
}

console.log(sum);

// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

var sum = 0;

for (var i = 0; i < 20; i++) {
  if (!(i % 2 && i % 3)) {
    sum += i;
  }
}

console.log(sum);

// or 사용해서
var sum = 0;

for (var i = 0; i < 20; i++) {
  if (0 === i % 2 || 0 === i % 3) {
    sum += i;
  }
}

console.log(sum);

// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.

for (var y = 0; y < 6; y++) {
  for (var z = 0; z < 6; z++) {
    if ( y + z === 6 ) {
      console.log(`[ ${y}, ${z} ]`)
    }
  }
}

// 11. 삼각형 출력하기 - pattern 1

// for
let star = "*";
let newLine = "\n";
let result = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    result += star;
  }
  result += newLine;
}

console.log(result);

// break 사용해서 마지막 개행 없애기
let star = "*";
let newLine = "\n";
let result = "";

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    result += star;
  }
  if (i === 4) break;
  result += newLine;
}

console.log(result);

// if...else
var star = '*';
var newLine = '\n';
var result = '';

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < i + 2; j++) {
    if (i >= j) {
      result += star;
    } else {
      result += newLine;
    }
  }
}

console.log(result);

// 삼항 조건 연산자
var star = "*";
var newLine = "\n";
var result = "";

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < i + 2; j++) {
    result += i >= j ? star : newLine;
  }
}

console.log(result);


// 12. 삼각형 출력하기 - pattern 2

// for : break 사용해서 마지막 개행 없애기.

let star = "*";
let newLine = "\n";
let result = "";

for (let i = 0; i < 5; i++) {
  for (let l = 0; l <= i; l++) {
    result += " ";
  }
  for (let j = 5; j > i; j--) {
    result += star;
  }
  if (i === 4) break;
  result += newLine;
}

console.log(result);

// if...else
var star = '*';
var newLine = '\n';
var result = '';

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 6; j++) {
    if (i > j) {
      result += ' ';
    } else if (j === 5) {
      result += newLine;
    } else {
      result += star;
    }
  }
}

console.log(result);


// 13. 삼각형 출력하기 - pattern 3

// for
let star = "*";
let newLine = "\n";
let result = "";

for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    result += star;
  }
  result += newLine;
}

console.log(result);

// for 마지막 개행 없애기
let star = "*";
let newLine = "\n";
let result = "";

for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    result += star;
  }
  if (i === 1) break;
  result += newLine;
}

console.log(result);

// if...else
var star = '*';
var newLine = '\n';
var result = '';

for (var i = 5; i > 0; i--) {
  for (var j = 0; j < i + 1; j++) {
    if (i > j) {
      result += star;
    } else {
      result += newLine;
    }
  }
}

console.log(result);

// 14. 삼각형 출력하기 - pattern 4

// for
let star = "*";
let newLine = "\n";
let result = "";

for (let i = 0; i < 5; i++) {
  for (let j = 4; j > i; j--) {
    result += " ";
  }
  for (let k = 0; k <= i; k++) {
    result += star;
  }
  result += newLine;
}

console.log(result);

// 마지막 개행 없애기
let star = "*";
let newLine = "\n";
let result = "";

for (let i = 0; i < 5; i++) {
  for (let j = 4; j > i; j--) {
    result += " ";
  }
  for (let k = 0; k <= i; k++) {
    result += star;
  }
  if (i === 4) break;
  result += newLine;
}

console.log(result);

// if...else
var star = '*';
var result = '';
var newLine = '\n';

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 6; j++) {
    if (4 - i > j) {
      result += ' ';
    } else if (j === 5) {
      result += newLine;
    } else {
      result += star;
    }
  }
}

console.log(result);

// 15. 정삼각형 출력하기

var star = '*';
var result = '';
var newLine = '\n';

for (var i = 0; i < 5; i++) {
  for (var j = 0; j < i + 6; j++) {
    if (i - 4 < -j) {
      result += ' ';
    } else if (j === i + 5) {
      result += newLine;
    } else {
      result += star;
    }
  }
}

console.log(result);

// for, break
var star = "*";
var result = "";
var newLine = "\n";

for (let i = 0; i < 5; i++) {
  for (let k = 4; k > i; k--) {
    result += " ";
  }
  for (let j = 0; j <= i * 2; j++) {
    result += star;
  }
  if (i === 4) break;
  result += newLine;
}

console.log(result);


// 16. 역정삼각형 출력하기

var star = '*';
var result = '';
var newLine = '\n';

for (var i = 5; i > 0; i--) {
  for (var j = 0; j < i + 5; j++) {
    if (i - 5 < -j) {
      result += ' ';
    } else if (j === i + 4) {
      result += newLine;
    } else {
      result += star;
    }
  }
}
console.log(result);

//
var star = "*";
var result = "";
var newLine = "\n";

for (let i = 0; i < 5; i++) {
  for (let k = 0; k < i; k++) {
    result += " ";
  }
  for (let j = 0; j < 9 - i * 2; j++) {
    result += star;
  }
  if (i === 4) break;
  result += newLine;
}

console.log(result);