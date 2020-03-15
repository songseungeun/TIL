// 생성자 함수
function Person(name) {
  this.name = name;
}

const me = new Person('Lee');

// Person 생성자 함수의 .prototype 과
// 생성한 인스턴스 me의 .__proto__ 는 동일한 프로토타입을 가리킨다.

// me가 생성될 때 생성자 함수 Person 의
// prototype 프로퍼티를 통해 프로토타입을 할당.
console.log(Person.prototype === me.__proto__); // true
