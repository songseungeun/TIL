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

// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

var even = '';
for (var i = 0; i < 10; i++) {
  if (!(i % 2)) {
    even += `${i}`;
  }
}
console.log(even);


// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

for (var i = 10; i > 0; i--) {
  if (i % 2) {
    console.log(i);
  }
}

// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.

var a = 0;
while (a < 10) {
  if (!(a % 2)) {
    console.log(a);
  }
  a++;
}

// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

var b = 10;
while (b > 0) {
  if (b % 2) {
    console.log(b);
  }
  b--;
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

// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

var sum = 0;

for (var i = 0; i < 20; i++) {
  if (!(i % 2 && i % 3)) {
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
// *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라. 
// 개행문자(‘\n’)를 사용하여 개행한다. 
// 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

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

// 12. 삼각형 출력하기 - pattern 2

// 다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 
// 개행문자(‘\n’)를 사용하여 개행한다. 
// 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

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

// 다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 
// 개행문자(‘\n’)를 사용하여 개행한다. 
// 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

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

// 다음을 참고하여 *(별)로 트리를 문자열로 완성하라. 
// 개행문자(‘\n’)를 사용하여 개행한다. 
// 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.

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
