function solution(s) {
  const regExp = /^\d{4}$|^\d{6}$/;
  return !regExp.test(s);
}

console.log(solution("a234"));
console.log(solution("1234"));
