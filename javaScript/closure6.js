function foo() {
  const x = 1;
  const y = 2;

  function bar() {
    console.log(x);
  }
  return bar;
}

const bar = foo();
bar();
