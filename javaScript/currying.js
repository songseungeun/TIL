const outerFunc = (x, y) => (z) => {
  return x + y + z;
};

console.log(outerFunc(2, 3)(5));
