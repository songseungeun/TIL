// 일반 함수 정의 : kind = 'Normal'
function foo() {}

const bar = function () {};

// 프로퍼티 x에 할당된 것은 일반 함수 정의이다. 메소드 정의로 인정하지 않는다.
const baz = {
  x: function () {}
};

// 일반 함수로 정의된 함수만이 constructor이다.
  foo();
new bar();
new baz.x(); // 셋 다 OK

// 화살표 함수 정의 : kind = 'Arrow'
const arrow = () => {};

// new arrow(); // TypeError: arrow is not a constructor

// 메소드 정의 : kind = 'Method'
// ES6의 메소드 축약 표현만을 메소드 정의로 인정한다.
const obj = {
  x() {}
};

// new obj.x(); // TypeError: obj.x is not a constructor

