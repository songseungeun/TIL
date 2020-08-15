function solution(n) {
  return Array.from(n + "")
    .reverse()
    .map((n) => +n);
}

// solution(12345);
console.log(solution(12345));
