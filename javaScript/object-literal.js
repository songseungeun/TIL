var person = {
  name: 'song',
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  }
};

console.log(typeof person);
console.log(person);
console.log(person.sayHello());
console.log(person.name);

var obj = {};
var key = 'hello';

obj[key] = 'world';
// var obj = { [key]: 'world' };

obj[key] = '1';

console.log(obj);