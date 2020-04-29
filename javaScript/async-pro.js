function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
}

// setTimeout(foo, 3 * 1000);
// bar(); // bar -> 3초 -> foo

setTimeout(foo);
bar();