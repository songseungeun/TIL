const arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // 1, 2, 3
}

console.log(Object.getOwnPropertyDescriptors(arr));
// {
//   '0': { value: 1, writable: true, enumerable: true, configurable: true },
//   '1': { value: 2, writable: true, enumerable: true, configurable: true },
//   '2': { value: 3, writable: true, enumerable: true, configurable: true },
//   length: { value: 3, writable: true, enumerable: false, configurable: false }
// }

const arr10 = new Array(10);

console.log(arr10); // [ <10 empty items> ]
console.log(arr10.length); // 10

// Array.of 메소드는 전달된 인수를 요소로 갖는 배열을 생성한다.
const arr1 = Array.of(1);
console.log(arr1);

const arr2 = Array.of(1, 2, 3);
console.log(arr2);

const arr3 = Array.of('string');
console.log(arr3);

// Array.from 메소드는 유사배열 객체 또는 이터러블 객체를 변환하여 새로운 배열을 생성한다.
const arr4 = Array.from('Hello');
console.log(arr4); // [ 'H', 'e', 'l', 'l', 'o' ]

const arr5 = Array.from({ length: 2, 0: 'a', 1: 'b' });
console.log(arr5); // [ 'a', 'b' ]

// Array.from을 사용하면 두번째 인수로 배열의 모든 요소에 대해 호출할 함수를 전달할 수 있다.
// 이 함수는 첫번째 인수에 의해 생성된 배열의 요소값과 인덱스를 순차적으로 전달받아 호출된다.
const arr6 = Array.from({ length: 5 }, function (v, i) { return i; });
console.log(arr6);

const arr7 = Array.from({ length: 7 }, (v, i) => i);
console.log(arr7);

const arr8 = Array.from({ length: 3 }, (_, i) => i);
console.log(arr8);
// 콜백함수, undefined를 값으로 받고싶어서 v or _(언더바) 를 사용.


const arr9 = Array.from([1, 2, 3], x => x + x);
console.log(arr9);

const arr11 = Array.from([1, 2, 3], (x, y) => x + y); // x 1 y 0 , x 2 y 1, x 3 y 2
console.log(arr11); // 1, 3, 5


// 유사 배열 객체
const arrayLike = {
  '0': 'apple',
  '1': 'banana',
  '2': 'orange',
  length: 3
};

// 유사 배열 객체는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있다.
// 유사 배열 객체는 length 프로퍼티를 갖기 때문에 for 문으로 순회할 수도 있다.
for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]);
}

// 배열 요소의 추가와 갱신
const arr12 = [0];

// 배열 요소의 추가
arr12[1] = 1;

console.log(arr12);
console.log(arr12.length);

// 요소 값의 갱신
arr12[1] = 10;

console.log(arr12);

// 정수 또는 정수 형태의 문자열을 사용하지 않고,
// 인덱스처럼 사용하면 프로퍼티가 생성된다.
// 프로퍼티는 length 프로퍼티 값에 영향을 주지 않는다.
const array = [];

// 배열 요소의 추가
array[0] = 1;
array['1'] = 2;

// 프로퍼티 추가
array['foo'] = 3;
array[1.1] = 4;
array[-1] = 5;

console.log(array);

// 프로퍼티는 length에 영향을 주지 않는다.
console.log(array.length); // 2

// 배열 요소의 삭제
delete array[1];
console.log(array); // [ 1, <1 empty item>, foo: 3, '1.1': 4, '-1': 5 ]

console.log(array.length); // 2
// delete 연산자로 삭제하면 희소배열이 되고, length 값에 영향을 주지 않는다.

// 희소 배열을 만들지 않으면서 삭제하려면 Array.prototype.splice 메소드를 사용한다.
// splice(삭제를 시작할 인덱스, 삭제할 요소수)
// array[1]부터 1개의 요소를 제거
array.splice(1, 1);

console.log(array); // empty 삭제됨
console.log(array.length); // 1 length도 줄어듦