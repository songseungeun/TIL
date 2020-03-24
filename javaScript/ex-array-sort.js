const fruits = ['Banana', 'Orange', 'Apple'];

fruits.sort();

console.log(fruits);

const fruitsKr = ['바나나', '오렌지', '사과'];

fruitsKr.sort();

console.log(fruitsKr);

// 순서를 뒤집고 싶으면 (내림차순) reverse 메소드 사용

fruits.reverse();

console.log(fruits);

let alphabet = Array.from('gwpfjeyzhvacbmd');

alphabet.sort().reverse();

console.log(alphabet);

// 객체를 요소로 갖는 배열을 정렬하는 예제

const todos = [
  { id: 4, content: 'JavaScript'},
  { id: 1, content: 'HTML'},
  { id: 2, content: 'CSS'},
];

function compare(key) {
  return (a, b) => (a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
}

todos.sort(compare('id'));
console.log(todos);

todos.sort(compare('content'));
console.log(todos);