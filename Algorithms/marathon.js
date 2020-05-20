var solution = (_, $) =>
  _.find(
    (_) => !$[_]--,
    $.map((_) => ($[_] = ($[_] | 0) + 1))
  );

// solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
