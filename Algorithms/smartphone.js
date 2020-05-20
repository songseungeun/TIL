function solution(numbers, hand) {
  let result = [];
  let stateL = "";
  let stateR = "";
  const groupL = [1, 4, 7];
  const groupR = [3, 6, 9];
  numbers.forEach((num) => {
    result = groupL.map((item) =>
      num === item ? num : groupR.map((item) => num === item)
    );
  });
  // console.log(numbers);
  // console.log(hand);
  console.log(stateL);
  console.log(result);
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
// console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
