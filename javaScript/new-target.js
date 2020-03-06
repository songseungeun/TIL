// new.target

// 생성자 함수
function Circle(radius) {
  // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined 이다.
  if (!new.target) {
    // new 연산자와 함께 호출하여 생성된 인스턴스를 반환한다.
    return new Circle(radius);
  }

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출된다.
const circle = Circle(5);
console.log(circle.getDiameter());
console.log(circle);

// 빌트인 생성자 함수 new 연산자 없이 호출하기
let obj = new Object();
console.log(obj); // {}

obj = Object();
console.log(obj); // {}

let f = new Function('x', 'return x ** x');
console.log(f); // [Function: anonymous]

f = Function('x', 'return x ** x');
console.log(f); // [Function: anonymous]

// 하지만 String 생성자 함수는 new 연산자와 함께 호출했을 때 String 객체를 생성하여
// 반환하지만 new 연산자 없이 호출하면 문자열 리터럴을 반환한다.
// 즉, 문자열로 타입을 변환한다.

let s = new String('abc');
console.log(s); // [String: 'abc']

s = String('abc');
console.log(s); // abc