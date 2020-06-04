function solution(s) {
  if (s.length % 2) {
    return s[Math.floor(s.length / 2)];
  }
  return `${s[s.length / 2 - 1]}${s[s.length / 2]}`;
}

console.log(solution("abcde"));
console.log(solution("qwer"));
console.log(solution("gdfkjwernjg"));