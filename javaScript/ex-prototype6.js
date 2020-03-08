// 함수 객체는 prototype 프로퍼티를 소유한다.
console.log((function () {}).hasOwnProperty('prototype')); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않는다.
console.log({}.hasOwnProperty('prototype')); // false

// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('Lee');
const you = new Person('Song');

console.log(Person.prototype);
console.log(me.__proto__);

console.log(me);
console.log(me.name);

// Person {}
// Person {}
// Person { name: 'Lee' }
// Lee

// Person.prototype: Person 생성자 함수는 prototype 프로퍼티를 통해
// 자신이 생성할 인스턴스(me)의 프로토타입을 할당
// me.__proto__: 객체 me의 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입에 접근
// 결국 Person.prototype 과 me.__proto__는 결국 동일한 프로토타입을 가리킨다.
console.log(Person.prototype === me.__proto__); // true

// me 객체의 생성자 함수는 Person 이다.
console.log(me.constructor === Person); // true

console.log(you);
console.log(you.name);

console.log(you.constructor);

