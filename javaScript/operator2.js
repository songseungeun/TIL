var x = 5, result;

// 선할당 후증가
result = x++;
console.log(result, x);

// 선증가 후할당
result = ++x;
console.log(result, x);

// 선할당 후감소
result = x--;
console.log(result, x);

// 선감소 후할당
result = --x;
console.log(result, x);


// + 단항연산자

// 아무런 효과가 없다.
+10; // 10
+(-10); // -10

// 문자열을 숫자로 타입 변환한다.
+'10'; // 10

// 불리언 값을 숫자로 타입 변환한다.
+true; // 1
+false; // 0

// 문자열을 숫자로 타입 변환하라 수 없으므로 NaN을 반환한다.
+'Hello'; // NaN


// - 단항연산자

// 부호를 반전한다.
-(-10); // 10

// 문자열을 숫자로 타입 변환한다.
-'10'; // -10

// 불리언 값을 숫자로 타입 변환한다.
-true; // -1

// 문자열을 숫자로 타입 변환할 수 없으므로 NaN을 반환한다.
-'Hello'; // NaN


// 문자열 연결 연산자
// + 연산자는 피연산자 중 하나 이상이 문자열인 경우 문자열 연결 연산자로 동작.

'1' + 2; // 12
1 + '2'; // 12

// 산술 연산자
1 + 2 // 3

// true는 1로 타입 변환된다.
1 + true; // 2

// false는 0으로 타입 변환된다.
1 + false; // 1

// null는 0으로 타입 변환된다.
1 + null; // 1

// undefined 는 숫자로 타입 변환되지 않는다.
+undefined; // NaN
1 + undefined; // NaN

// 할당 연산자

var x;

x = 10;
console.log(x);

x += 5;
console.log(x);

x -= 5;
console.log(x);

x *= 5;
console.log(x);

x /= 5;
console.log(x);

x %= 5;
console.log(x);

var str = "My name is ";

// 문자열 연결 연산자
str += "Lee"; // str = str + 'Lee';
console.log(str);

var x;

// 할당문은 표현식인 문이다.
console.log((x = 10)); // 10

var a, b, c;

// 연쇄 할당. 오른쪽에서 왼쪽으로 진행.
// 1. c = 0 : 0으로 평가된다
// 2. b = 0 : 0으로 평가된다
// 3. a = 0 : 0으로 평가된다
a = b = c = 0;

console.log(a, b, c);

// NaN은 자신과 일치하지 않는 유일한 값이다.
NaN === NaN;
// false

// 빌트인 함수 isNaN은 주어진 값이 NaN인지 체크하고
// 그 결과를 반환한다.
isNaN(NaN);
isNaN(10);
isNaN(1 + undefined);

// 양의 0과 음의 0의 비교.
// 일치 비교/ 동등 비교 모두 true
0 === -0;
0 == -0;


