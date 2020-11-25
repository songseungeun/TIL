// 순수함수.
var count = 0;

function increase(n) {
  return ++n;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count);

// 비순수함수.
var count = 0;

function increase() {
  return ++count;
}

increase();
console.log(count);
increase();
console.log(count);
