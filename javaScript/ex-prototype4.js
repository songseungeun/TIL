const person = { name: 'Lee' };

// person 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(person.hasOwnProperty('__proto__')); // false
console.log(person.hasOwnProperty('name')); // true

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype,'__proto__'));
// {
//   get: [Function: get __proto__],
//   set: [Function: set __proto__],
//   enumerable: false,
//   configurable: true
// }

// 모든 객체는 Object.prototype 의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype); // true


// __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유

const parent = {};
const child = {};

// child의 프로토타입을 parent로 지정
child.__proto__ = parent;
parent.__proto__ = child; // TypeError

// obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__를 상속받을 수 없다.
const obj = Object.create(null);

// obj는 Object.__proto__를 상속받을 수 없다.
console.log(obj.__proto__); // undefined
// 따라서 Object.getPrototypeOf 메소드를 사용하는 편이 좋다.
console.log(Object.getPrototypeOf(obj)); // null

