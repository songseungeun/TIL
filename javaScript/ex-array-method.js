// 배열 메소드
const arrPush = [1];

// push 메소드는 원본 배열을 직접 변경한다. -> mutator method
arrPush.push(2);
console.log(arrPush);

// concat 메소드는 원본배열을 직접 변경하지 않고,
// 새로운 배열을 생성하여 반환한다. -> accessor method
const result = arrPush.concat(3);
console.log(arrPush);
console.log(result);

const result2 = arrPush.push(4);
console.log(result2);
console.log(arrPush);


// 배열 뒷 부분에 추가하기
const arr = [1, 2, 3, 4, 5];
let arr2 = [];

arr.push(6);
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]
arr[arr.length] = 7;
console.log(arr); // [ 1, 2, 3, 4, 5, 6, 7]
arr2 = arr2.concat(3);
console.log(arr2); // [ 3 ]
arr2 = arr.concat(8);
console.log(arr2); // [ 1, 2, 3, 4, 5, 6, 7, 8]

// 배열 앞 부분에 추가하기
const arr3 = [1, 2, 3];
let arr4 = [4];

arr3.unshift(0);
arr4 = [-1].concat(arr3);

console.log(arr3); // [ 0, 1, 2, 3 ]
console.log(arr4); // [ -1, 0, 1, 2, 3 ]

// 배열 중간에 추가하기

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// start 배열의 변경을 시작할 인덱스
// deleteCount 배열에서 제거할 요소의 수(옵션)
// item1, item2, ... 배열에 추가할 요소(옵션) 지정하지 않으면 요소를 제거만 함.

const items = ['one', 'two', 'three'];

items.splice(items.length/2, 0,'hello');
console.log(items); //[ 'one', 'hello', 'two', 'three' ]

items.splice(1, 1, 'Bye');
console.log(items); //[ 'one', 'Bye', 'two', 'three' ]

items.splice(2, 2, 'Hi', 'Hello!!');
console.log(items); //[ 'one', 'Bye', 'Hi', 'Hello!!' ]

