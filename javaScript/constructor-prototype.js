// obj 객체를 생성한 생성자 함수는 Object 이다.
const obj = new Object();

// add 함수 객체를 생성한 생성자 함수는 Function이다.
const add = new Function('a', 'b', 'return a + b');

// 생성자 함수
function Person(name) {
  this.name = name;
}

// me 객체를 생성한 생성자 함수는 Person이다.
const me = new Person('Lee');

console.log(obj);
console.log(Object);
console.log(add);
console.log(add(1, 2));

// 객체 리터럴
const obj2 = {};

// 함수 리터럴
const add2 = function (a, b) { return a + b; };

// 배열 리터럴
const arr = [1, 2, 3];

// 정규표현식 리터럴
const regexr = /is/ig;

console.log(obj2);
console.log(add2(2, 3));
console.log(arr);
console.log(regexr);

// 객체 obj는 Object 생성자 함수로 생성한 객체가 아니라 객체 리터럴로 생성하였다.
const obj3 = {};

// 하지만 객체 obj의 생성자 함수는 Object 생성자 함수이다.
console.log(obj.constructor === Object); // true