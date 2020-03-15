const Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  // 프로토타입 메소드
  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };

  // 생성자 함수를 반환
  return Person;
}());

const me = new Person('Lee');

me.sayHello();

// name 프로퍼티는 public 하다. 외부에서 자유롭게 접근하고 변경할 수 있다.
me.name = 'Kim';
me.sayHello(); // Hi! My name is Kim

const Person2 = (function () {
  // 자유 변수이며 private 하다
  let _name = '';

  // 생성자 함수
  function Person2(name) { _name = name; }

  // 프로토타입 메소드
  Person2.prototype.sayHello = function () {
    console.log(`Hi! My name is ${_name}`);
  };

  // 생성자 함수를 반환
  return Person2;
}());

const me2 = new Person2('Lee');

me2._name = 'Kim';
me2.sayHello();