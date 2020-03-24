const arr = [1, 2, 3];

let result = arr.includes(2);
console.log(result);

result = arr.includes(100);
console.log(result);

result = arr.includes(1, 1);
console.log(result);

result = arr.includes(3, -1);
console.log(result);

// indexOF 메소드를 사용해도 확인 가능하나,
// -1을 비교해야하고, NaN이 포함되어있는지 확인할 수 없다.

console.log([NaN].indexOf(NaN) !== -1);
console.log([NaN].includes(NaN));

