// 빈 객체의 생성
const person = new Object();

// 프로퍼티 추가
person.name = 'Mare';
person.sayHello = function () {
  console.log('Hi! My name is ' + this.name);
}

console.log(person);
person.sayHello();


// 연습
const brockhampton = new Object();

brockhampton.name = '브록햄튼';
brockhampton.music = 'SUGAR';
brockhampton.likedSong = function () {
  console.log('요즘은 ' + this.name + '의 ' + this.music + '가 제일 좋아');
}

console.log(brockhampton);
brockhampton.likedSong();

// { name: '브록햄튼', music: 'SUGAR', likedSong: [Function (anonymous)] }
// 요즘은 브록햄튼의 SUGAR가 제일 좋아


const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  }
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  }
};

console.log(circle2.getDiameter()); // 20

// 생성자 함수
function Circle(radius) {
  // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스의 생성
const circle3 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
const circle4 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

console.log(circle3.getDiameter()); // 10
console.log(circle4.getDiameter()); // 20

// 함수는 다양한 방식으로 호출될 수 있다.
function foo() {
  console.log(this);
}

// 일반적인 함수로서 호출
// 전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 global을 가리킨다.
foo();

// 메소드로서 호출
const obj = { foo }; // ES6 프로퍼티 축약 표현
obj.foo(); 

// 생성자 함수로서 호출
const inst = new foo(); // inst

// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않는다.
const circle5 = Circle(15);

// 일반함수 circle은 반환문이 없으므로 undefined를 반환한다.
console.log(circle5);

// 일반함수 circle내의 this는 전역 객체를 가리킨다.
console.log(radius);

// 내부 메소드 [[Call]] [[Construct]]
// 함수는 객체이다.
function foo2() {}

// 함수는 객체이므로 프로퍼티를 소유할 수 있다.
foo2.prop = 10; // prop : 10;

foo2.method = function () { // method : function foo2의 prop을 출력하는 메소드
  console.log(this.prop);
};

foo2.method(); // 10

function foo3() {}

// 일반적인 함수로서 호출: [[Call]]이 호출된다.
foo3();

// 생성자 함수로서 호출: [[Construct]]가 호출된다.
new foo3();

