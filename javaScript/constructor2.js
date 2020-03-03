// 생성자 함수
function Circle(radius) {
  // 인스턴스 초기화
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// 인스턴스 생성
const circle1 = new Circle(5);

console.log(circle1); // Circle { radius: 5, getDiameter: [Function (anonymous)] }
console.log(circle1.radius); // 5
console.log(circle1.getDiameter()); // 10

// 인스턴스 생성과 this 바인딩

function Circle2(radius) {
  // 1. 암묵적으로 빈 객체가 생성되고 this에 바인딩 된다.
  console.log(this); // Circle2 {}

  console.log(Object.getPrototypeOf(this) === Circle2.prototype); // true

  // 2. this에 바인딩되어 있는 인스턴스를 초기화 한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 완성된 인스턴스가 바인딩 된 this가 암묵적으로 반환된다.

  
}

// 인스턴스 생성. Circle2 생성자 함수는 암묵적으로 this를 반환한다.
const circle3 = new Circle2(1);
console.log(circle3);
// Circle2 { radius: 1, getDiameter: [Function (anonymous)] }

