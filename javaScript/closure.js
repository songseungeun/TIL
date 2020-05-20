const x = 1;
function outerFunc() {
  const x = 10;

  function innerFunc() {
    console.log(x);
  }
  innerFunc();
}

outerFunc();

const y = 1;

function foo() {
  const y = 10;
  bar();
}
function bar() {
  console.log(y);
}

foo();
bar();
