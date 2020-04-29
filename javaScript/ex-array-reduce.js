// reduce
// arr.reduce((누적값, 현재값, 인덱스, 요소) => { return 결과 }, 초기값);

const oneTwoThree = [1, 2, 3];
let result;

result = oneTwoThree.reduce((acc, cur, i) => {
  console.log(acc, cur, i);
  return acc + cur;
}, 0);

console.log(result);

const values = [1, 2, 3, 4, 5, 6];

// 마지막 인덱스는 length -  1

const average = values.reduce((acc, cur, i, arr) => {
  return acc + cur / arr.length
}, 0);

console.log(average);

const values2 = [1, 2, 3, 4, 5];
const values3 = [];
// const max = Math.max(...values2);

// max = values3.length ? Math.max(...values3) : 0;

const max = values.reduce((acc, cur) => {
  console.log(acc, cur);
  return acc > cur ? acc : cur;
}, 0);

console.log(max);

const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

const count = fruits.reduce((acc, cur) => {
  console.log(acc, cur);
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});
console.log(count); // { banana: 1, apple: 2, orange: 2 }


const values5 = [1, [2, 3], 4, [5, 6]];

const flatten = values5.reduce((acc, cur) => {

  console.log(acc, cur);
  return acc.concat(cur) // concat 은 인수를 배열이건 배열이 아니건 모두 풀어서 넣는다.
}, []);

console.log(flatten);

const values7 = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];

const result3 = values7.reduce((acc, cur, i, arr) => {
  console.log(acc, cur, i);
  arr.indexOf(cur) !== i 
}, []);

console.log(result3); // [1, 2, 3, 5, 4]