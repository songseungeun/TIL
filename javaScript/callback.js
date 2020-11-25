function test(num, callback) {
  callback();
  console.log(num);
}

test(1, function () {
  console.log("콜백함수 실행");
});
