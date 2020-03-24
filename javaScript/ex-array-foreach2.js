let numbers = [1, 2, 3, 4];
let pows = [];

numbers.forEach(
  function(item) {
    return pows.push(item ** 2);
  }
)

console.log(pows);

pows = [];

numbers.forEach(item => pows.push(item ** 2));

console.log(pows);