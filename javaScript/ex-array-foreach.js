const numbers = [1, 2, 3];
let pows = [];

// for 문 사용
for (let i = 0; i < numbers.length; i++) {
  pows.push(numbers[i] ** 2);
}

console.log(pows);

pows = [];

// forEach 메소드 사용
numbers.forEach(item => pows.push(item ** 2));

console.log(pows);

// 요소값, 인덱스, this

[1, 2, 3].forEach((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${arr}`);
});

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

const items = ['item1', 'item2', 'item3'];
const copy = [];

items.forEach(item => copy.push(item + `0`));

console.log(copy);