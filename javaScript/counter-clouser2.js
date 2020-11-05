const Counter = (function () {
  let num = 0;

  function Counter() {}

  Counter.prototype.increase = function () {
    return ++num;
  };

  Counter.prototype.decrease = function () {
    return num > 0 ? --num : 0;
  };

  return Counter;
})();

const counter = new Counter();

// 생성자 함수 Counter는 프로토타입을 통해 increase, decrease 메서드를
// 상속받는 인스턴스를 생성한다.
// increase, decrease 메서드는 모두 자신의 함수 정의가 평가되어 함수 객체가 될 때
// 실행 중인 실행 컨텍스트인 즉시실행함수 실행컨텍스트의 렉시컬환경을 기억하는 클로저다.

// 프로토타입을 통해 상속되는 프로토타입 메서드일지라도 즉시실행함수의 자유변수 num을 참조할 수 있다.
// num 변수의 값은 increase, decrease 메서드 만이 변경할 수 있다.
console.log(Counter.prototype);
console.log(counter.increase);
console.log(counter.increase());
console.log(counter.increase());
console.log(counter.decrease());
console.log(counter.decrease());
