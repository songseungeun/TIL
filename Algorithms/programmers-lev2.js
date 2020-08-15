function solution(s) {
  let sArray = s.split(" ");
  let newArray = [];
  newArray[0] = Math.min.apply(null, sArray);
  newArray[1] = Math.max.apply(null, sArray);

  let answer = newArray.join(" ");
  return answer;
}

console.log(solution("1 2 3 4"));
