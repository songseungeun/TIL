// __proto__ 접근자 프로퍼티

const obj = { a: 1 };

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype 이다.
console.log(obj.__proto__ === Object.prototype); // true

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인
// Object.prototype의 프로퍼티를 상속받는다.
// hasOwnProperty 메소드는 Object.prototype 의 메소드이다.
console.log(obj.hasOwnProperty('a')); // true
console.log(obj.hasOwnProperty('__proto__')); // false