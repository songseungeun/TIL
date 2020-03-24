const arr = [1, 2, 3];

arr.fill(0);

console.log(arr);

const arr2 = [2, 3, 4];

arr2.fill(0, 1);

console.log(arr2);

const arr3 = [1, 2, 3, 4, 5];

arr3.fill(0, 1, 3);

console.log(arr3);

const arr20 = new Array(20);
console.log(arr20);

const result = arr20.fill(7);

console.log(arr20);

function generateSequences(length = 0) {
  return Array.from(new Array(length), (_, i) => i);
}
console.log(generateSequences(3));