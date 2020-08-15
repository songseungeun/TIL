function solution(name) {
  let answer = 0;
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let alphabetArr = [...alphabet];
  let alphabetReverseArr = [...alphabet].reverse();

  let nameArr = [...name];

  loop: for (let i = 0; i < nameArr.length; i++) {
    if (nameArr[i] === "A") {
      answer += 1;
      continue loop;
    }
    if (alphabetArr.indexOf(nameArr[i]) >= 13) {
      answer += alphabetReverseArr.indexOf(nameArr[i]) + 1;
      continue loop;
    }
    answer += alphabetArr.indexOf(nameArr[i]);
    console.log(nameArr[i]);
    answer++;
  }

  // console.log(alphabetArr.indexOf("N"));
  // answer = alphabetArr.indexOf(nameArr[0]);
  return answer;
}

console.log(solution("JEROEN"));
console.log(solution("JAN"));
