// function solution(array, commands) {
//   let answer = commands.map(([i, j, k]) => {
//     let result = array.slice(i - 1, j).sort((a, b) => a - b);
//     return result[k - 1];
//   });

//   return answer;
// }
function solution(array, commands) {
  return commands.map(([i, j, k]) => {
    return array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
  });
}
solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);

// console.log(
//   solution(
//     [1, 5, 2, 6, 3, 7, 4],
//     [
//       [2, 5, 3],
//       [4, 4, 1],
//       [1, 7, 3],
//     ]
//   )
// );
