// promise 선언
const _promise = param => {
  return new Promise((resolve, reject) => {

    // 비동기 setTimeout 함수
    setTimeout(() => {

      // 파라미터가 참이면,
      if (param) resolve('해결 완료');
      else reject(new Error('실패'));
    }, 3000);
  })
}

_promise(true)
  .then(text => console.log(text))
  .catch(error => console.error(error))

console.log(_promise);
