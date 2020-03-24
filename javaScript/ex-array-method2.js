// Array.prototype.indexOf
// 원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환

const arrIndexOf = [1, 2, 2, 3];

console.log(arrIndexOf.indexOf(2)); // 1
console.log(arrIndexOf.indexOf(4)); // -1

// 두번째 인수는 검색을 시작할 인덱스
console.log(arrIndexOf.indexOf(2, 2)); // 2

// 배열에 요소가 존재하는지 확인
const foods = ['apple', 'banana', 'orange'];

// foods 배열에 'orange' 요소가 존재하는지 확인
if (foods.indexOf('orange') === -1) {
  // foods 배열에 'orange' 요소가 존재하지 않으면 추가
  foods.push('orange');
}
console.log(foods); // [ 'apple', 'banana', 'orange' ]

const foods = ['apple', 'banana', 'orange'];
const foods2 = ['pizza', 'cola', 'fineapple'];

function fruitsAdd(fruits) {
  if (fruits.indexOf('fineapple') === -1) {
    fruits.push('fineapple');
    return console.log(fruits);
  }
  return console.log(`fineapple이 있는 배열 [ ${fruits} ]`);
}

fruitsAdd(foods);
fruitsAdd(foods2);

// indexOf 메소드 대신 ES7 Array.prototype.includes 메소드를 사용하면
// 가독성이 좋다

const foods3 = ['milk', 'coffee'];

if (!foods3.includes('orange')) {
  foods3.push('orange');
}

console.log(foods3);

// Array.prototype.push > mutator method
// 인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가하고
// 변경된 length 값을 반환한다. 

const arrPush = [1, 2];

let result = arrPush.push(3, 4);
console.log(result); // 4

// push 메소드는 원본 배열을 직접 변경한다.
console.log(arrPush); // [ 1, 2, 3, 4 ]

arrPush[arrPush.length] = 5;
console.log(arrPush); // [ 1, 2, 3, 4, 5 ]

// ES6 스프레드 문법
const newArr = [ ... arrPush, 6];

console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]

// Array.prototype.pop > mutator method
// pop 메소드는 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
// 원본 배열이 빈 배열이면 undefined를 반환.

const arrPop = [1, 2];

let result2 = arrPop.pop();
console.log(result2); // 2

console.log(arrPop); // [1]

// Array.prototype.unshift > mutator method
// 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가하고
// 변경된 length 값을 반환한다.

const arrUnshift = [1, 2];

let result3 = arrUnshift.unshift(3, 4);
console.log(result3); // 4

console.log(arrUnshift); // [ 3, 4, 1, 2 ]

// ES6 스프레드 문법
const newArr2 = [5, ...arrUnshift];

console.log(newArr2); // [ 5, 3, 4, 1, 2 ]

// Array.prototype.shift > mutator method

const arrShift = [1, 2];

let result4 = arrShift.shift();
console.log(result4); // 1

console.log(arrShift); // [2]

// Array.prototype.concat > accessor method
// 인수로 전달된 값들을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환.
// 인수로 전달한 값이 배열인 경우, 배열을 해체하여 새로운 배열의 요소로 추가한다.

const arrConcat1 = [1, 2];
const arrConcat2 = [3, 4];

let result5 = arrConcat1.concat(arrConcat2);
console.log(result5); // [ 1, 2, 3, 4 ]

result5 = arrConcat1.concat(5);
console.log(result5); // [1, 2, 5]
console.log(arrConcat1); // [ 1, 2 ]

result5 = arrConcat1.concat(arrConcat2, 5);
console.log(result5); // 12 + 34 + 5

console.log(arrConcat1); // [ 1, 2 ]

// push 와 unshift 메소드는 concat 메소드로 대체가능.
// push unshift > 원본배열 직접변경 concat > 새로운 배열 반환
// push unshift 원본 배열을 변수에 할당할 것
// concat 반환값을 반드시 변수에 할당받을 것

// concat 메소드는 인수로 전달받은 배열을 해체하여 새로운 배열의 마지막 요소로 추가한다.
let result6 = [1, 2].concat(arrConcat2);
console.log(result6); // [ 1, 2, 3, 4 ]

result6 = result6.concat(5, 6);
console.log(result6); // [ 1, 2, 3, 4, 5, 6 ]

// ES6 스프레드 문법
let result7 = [...[1, 2], ...[3, 4]];
console.log(result7);

// Array.prototype.splice
// .splice(start, deleteCount, items)
// mutator method
const arrSplice = [1, 2, 3, 4];
const result8 = arrSplice.splice(1, 2, 20, 30); // 예상 index1인 2부터 2개인 2, 3이 지워지고 20, 30이 들어간다

console.log(result8); // 제거한 요소가 반환 2, 3
console.log(arrSplice); // 예상했던 결과인 1, 20, 30, 4가 나옴

const result9 = arrSplice.splice(1); // 제거할 요소를 생략하면 첫번째 인수로 전달된 시작인덱스부터 모든 요소 제거

console.log(arrSplice); // [1] 남은 요소 원본 배열 반환
console.log(result9); [20, 30, 4]

