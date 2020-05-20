function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const me = new Person('Lee');

console.log(me.getName());

Person.prototype.name = 'Kim';

console.log(Person.prototype.getName());

function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());

const circle3 = Circle(15);

console.log(circle3);
console.log(radius);

function getThisBinding() {
  return this;
}

const thisArg = { a: 1 };

// console.log(getThisBinding());

console.log(getThisBinding.apply(thisArg));
console.log(getThisBinding.call(thisArg));

console.log(getThisBinding.bind(thisArg)());

// bind 메소드는 메소드의 this와 메소드 내부의 중첩 함수 
// 또는 콜백 함수의 this가 불일치하는 문제를 해결하기 위해 유용하게 사용된다.

function Person(name) {
  this.name = name;
}

Person.prototype.doSomething = function (callback) {
  callback();
};

function foo() {
  console.log(this.name);
}

const person = new Person('Lee');

person.doSomething(foo);