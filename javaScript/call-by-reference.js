
var person = {
  name : 'Lee',
  sayHello: function () {
    console.log(`Hello! ${this.name}`);
  }
};

console.log(person.sayHello());
console.log(person.name);

console.log(typeof person.sayHello() === Object);