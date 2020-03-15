function Person(name) {
  this.name = name;
}

// 프로토타입 메소드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me = new Person('Lee');
const you = new Person('Kim');

me.sayHello();
you.sayHello();

console.log(me);
console.log(Person.prototype);

Person.prototype.address = 'Seoul';

console.log(me.address);
console.log(me);

Person.prototype.sayBye = function () {
  console.log(`Bye. ${this.name}`);
};

me.sayBye();

// hasOwnProperty는 Object.prototype의 메소드이다.
console.log(me.hasOwnProperty('name')); // true

console.log(Object.getPrototypeOf(me) === Person.prototype); // true

console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); // true