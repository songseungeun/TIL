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

for (var j = 0; j < 10; j++) {
  if ((j + 1) % 2) {
    console.log(j);
  }
}

// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.

var p = "";
for (var m = 0; m < 10; m++) {
  if (!(m % 2)) {
    p += `${m}`;
  }
}
console.log(p);


// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.

for (var n = 9; n > 0; n--) {
  if (n % 2) {
    console.log(n);
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

var d = 0;

for (var c = 0; c < 10; c++) {
  d += c;
}

console.log(d);

// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.

var e = 0;

for (var f = 0; f < 20; f++) {
  if (!!(f % 2 && f % 3)) {
    e += f;
  }
}

console.log(e);
// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.

var h = 0;

for (var g = 0; g < 20; g++) {
  if (!(g % 2 && g % 3)) {
    h += g;
  }
}

console.log(x);

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

var star = "*";
var newLine = "\n";
var result = "";

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
