// 타입변환 타입캐스팅

var x = 10;

// 명시적 타입 변환
// 숫자를 문자열로 타입캐스팅
var str = x.toString();
console.log(typeof str, str);

// 변수 x의 값이 변경된 것은 아니다.
console.log(typeof x, x);

// 2-1 문자열 타입으로 변환
console.log(1 + "2");
console.log(1 + 2);

console.log(`1 + 1 = ${1 + 1}`);

// 숫자 타입
console.log(0 + "");
console.log(0);

// 불리언 타입
console.log(true + "");

// 심볼 타입
//console.log(Symbol() + "");

// 객체 타입
console.log({} + "");

// 2-2 숫자타입으로 변환

// 문자열 타입
console.log(+"");
console.log(+"string");

// 불리언 타입
console.log(+true);
console.log(+false);

// 객체 타입
console.log(+{});
console.log(+[]);

// 2-3 불리언 타입으로 변환
if ("") console.log(x);

if ("") console.log("1"); // false
if (true) console.log("2"); // true
if (0) console.log("3"); // false
if ("str") console.log("4"); // true
if (null) console.log("5"); // false

// 2 4
