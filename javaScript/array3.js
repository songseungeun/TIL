const A = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h"],
  ["i"],
  ["j", "k"],
  ["l", "m", "n"],
];

const B = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
  ["10", "11", "12"],
  ["13", "14", "15"],
  ["16"],
];

function compare(A, B, text) {
  let items;
  let item;

  for (let x = 0; x < A.length; x++) {
    for (let y = 0; y < A[x].length; y++) {
      if (A[x][y] === text) {
        items = B[x];
        item = items[Math.floor(Math.random() * items.length)];
        console.log(item);
      }
    }
  }
}

compare(A, B, "h");
