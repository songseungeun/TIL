const counter = (function () {
  let num = 0;

  // 클로저인 메서드를 갖는 객체를 반환한다.
  // 객체리터럴은 스코프를 만들지 않는다.
  // 따라서 아래 메서드들의 상위 스코프는 즉시실행함수의 렉시컬환경이다.
  // 객체 내부에 num을 정의하지 않는 이유는 프로퍼티는 public 하므로 은닉되지 않기때문이다.
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return num > 0 ? --num : 0;
    },
  };
})();

console.log(counter.increase());
console.log(counter.increase());

console.log(counter.decrease());
console.log(counter.decrease());
