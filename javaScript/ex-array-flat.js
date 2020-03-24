console.log([1, [2, 3, 4, 5]].flat());

// 1단계 평탄화
console.log([1, [2, [3, [4]]]].flat(1));

// 2단계 평탄화
console.log([1, [2, [3, [4]]]].flat(2));
console.log([1, [2, [3, [4]]]].flat().flat());

// 끝까지 평탄화
console.log([1, [2, [3, [4]]]].flat(Infinity));
