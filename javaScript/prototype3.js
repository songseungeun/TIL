// obj 객체를 생성한 생성자 함수는 Object이다.
const obj = new Object();

// add 함수 객체를 생성한 생성자 함수는 Function이다.
const add = new Function('a', 'b', 'return a + b');

console.log(obj);
console.log(add);

// 생성자 함수
function Person(name) {
  this.name = name;
}

// me 객체를 생성한 생성자 함수는 Person 이다.
const me = new Person('Lee');

console.log(me);
console.log(Person);
console.log(me['name']);

me.address = 'Seoul';

console.log(me.address);

console.log(me);

const you = new Person('Song');

console.log(you);
