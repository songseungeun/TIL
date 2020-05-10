// function solution(a, b) {
//   if (a === b) return a;
//   let newArr = [a, b];
// }

function solution(a, b) {
  if (a === b) return a;

  const newArr = Array.from(
    {
      length: Math.abs(a - b) + 1,
    },
    function (v, i) {
      return (a - b <= 0 ? a : b) + i;
    }
  );

  return newArr.reduce((acc, cur) => acc + cur, 0);
}

// solution();
// solution(3, 5);
// solution(3, 3);
// solution(5, 3);

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(7, 2));

// function solution(a, b) {
//   if (a === b) return a;
//   let sum = 0;
//   for (let i = 0; i <= Math.abs(a - b); i++) {
//     sum += (a - b <= 0 ? a : b) + i;
//   }
//   return sum;
// }
