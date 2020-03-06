// 함수와 일급 객체

// 1. 함수는 무명의 리터럴로 생성할 수 있다.
// 2. 함수는 변수에 저장할 수 있다.
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.

const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 2. 함수는 객체에 저장할 수 있다.
const predicates = { increase, decrease };

// 3. 함수의 매개 변수에게 전달할 수 있다.
// 4. 함수의 반환값으로 사용할 수 있다.
function makeCounter(predicate) {
  let num = 0;

  return function () {
    num = predicate(num);
    return num;
  };
}

// 3. 함수는 매개 변수에게 함수를 전달할 수 있다.
const increaser = makeCounter(predicates.increase);
console.log(increaser());
console.log(increaser());

// 3. 함수는 매개 변수에게 함수를 전달할 수 있다.
const decreaser = makeCounter(predicates.decrease);
console.log(decreaser());
console.log(decreaser());


// 함수 객체의 프로퍼티
function square(number) {
  return number * number;
}

// console.dir(square); 
// 브라우저로 확인

// arguments, caller, length, name, prototype 프로퍼티는
// 모두 square 함수 객체의 데이터 프로퍼티이다.
Object.getOwnPropertyDescriptor(square, 'arguments');
console.log(Object.getOwnPropertyDescriptor(square, 'arguments'));

Object.getOwnPropertyDescriptor(square, 'caller');
console.log(Object.getOwnPropertyDescriptor(square, 'caller'));

Object.getOwnPropertyDescriptor(square, 'length');
console.log(Object.getOwnPropertyDescriptor(square, 'length'));

Object.getOwnPropertyDescriptor(square, 'name');
console.log(Object.getOwnPropertyDescriptor(square, 'name'));

Object.getOwnPropertyDescriptor(square, 'prototype');
console.log(Object.getOwnPropertyDescriptor(square, 'prototype'));

// __proto__는 square 함수 객체의 프로퍼티가 아니다.
Object.getOwnPropertyDescriptor(square, '__proto__');
console.log(Object.getOwnPropertyDescriptor(square, '__proto__'));

// __proto__는 Object.prototype 객체의 접근자 프로퍼티이다.
// square 함수 객체는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받는다.

Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

// arguments 프로퍼티
function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

console.log(multiply());
console.log(multiply(1));
console.log(multiply(1, 2));
console.log(multiply(1, 2, 3));

// [Arguments] {}
// NaN
// [Arguments] { '0': 1 }
// NaN
// [Arguments] { '0': 1, '1': 2 }
// 2
// [Arguments] { '0': 1, '1': 2, '2': 3 }
// 2


