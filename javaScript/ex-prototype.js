// 생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    // Math.PI 는 원주율을 나타내는 상수이다.
    // Math.pow 는 첫번째 인수를 두번째 인수로 거듭제곱한 값을 반환한다.
    return Math.PI * Math.pow(this.radius, 2);
  };
}

// 인스턴스 생성
// 반지름이 1인 인스턴스 생성
const circle1 = new Circle(1);
// 반지름이 2인 인스턴스 생성
const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
// getArea 메소드를 중복 생성하고 모든 인스턴스가 중복 소유한다.
// 따라서 getArea 메소드는 하나만 생성하여 모든 인스턴스가 공유하는 것이 바람직하다.
console.log(circle1.getArea === circle2.getArea);

console.log(circle1.getArea());
console.log(circle2.getArea());