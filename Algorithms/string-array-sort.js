function solution(strings, n) {
  return strings.sort((strA, strB) =>
    strA[n] > strB[n]
      ? 1
      : strA[n] < strB[n]
      ? -1
      : strA[n + 1] > strB[n + 1]
      ? 0
      : -1
  );
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
