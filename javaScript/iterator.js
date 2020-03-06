// iterator

function multiply(x, y) {
  // 이터레이터
  const iterator = arguments[Symbol.iterator]();

  // 이터레이터의 next 메소드를 호출하여 이터러블 객체 arguments를 순회
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());

  // { value: 1, done: false }
  // { value: 2, done: false }
  // { value: 3, done: false }
  // { value: undefined, done: true }

  return x * y;
}

multiply(1, 2, 3);

// 예제 2

function sum() {
  let res = 0;

  // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로
  // for 문으로 순회할 수 있다.
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3));\

// 0
// 3
// 6