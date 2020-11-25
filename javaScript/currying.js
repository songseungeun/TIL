let outerFunc = (x) => (y) => (z) => x + y + z;

// console.log(outerFunc(2, 3)(5));

let plusX = outerFunc(2);
let plusY = plusX(3);

console.log(plusY(5));
