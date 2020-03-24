// Array.from
// 유사배열객체나 반복가능한객체(이터러블)을 얕게 복사해 새로운 배열객체를 만든다.

// Array.from (arrayLike, mapFn, thisArg)
// Array.from (유사배열객체나 이터러블, 배열의 모든 요소에 대해 호출할 맵핑 함수, mapFn실행시에 this로 사용할 값)
// 새로운 Array 인스턴스를 반환한다. 

// Array.from(obj).map(mapFn, thisArg) 와 같다. (ex-array-map.js 참고)

// string에서 배열 만들기
const stringArr = Array.from('foo');
console.log(stringArr);

// Map에서 배열 만들기
const m = new Map([[1, 2], [2, 4], [4, 8]]);
console.log(m);

const n = Array.from(m);
console.log(n);

let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
console.log(myMap);

// 배열 형태를 가진 객체에서 배열 만들기
function f() {
  return Array.from(arguments);
}

console.log(f(1, 2, 3));

// 시퀀스 생성기 range

const range = (start, stop, step) => 
Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

console.log(range(0, 10, 1));
console.log(range(1, 10, 2));
