// 생성자를 통해서 프로미스 객체를 만들 수 있습니다.
// 생성자의 인자로 executor 라는 함수를 이용합니다.

// executor 함수는 resolve 와 reject 를 인자로 가집니다.
// (resolve, reject) => {...}
// resolve(), reject()

// promise 객체를 만드는 순간 pending 대기 상태라고 합니다.

// resolve를 실행하면, fulfilled (이행) 상태가 됩니다.

// p라는 프로미스 객체는 1000ms(1초) 후에 fulfilled 됩니다.(이행)
// fulfilled 되는 시점에 1초후에 p.then 안에 설정한 callback 함수가 실행됩니다.

const p = new Promise((resolve, reject) => {
  // pending
  setTimeout(() => {
    resolve();
  }, 1000);
});

// p.then(() => {
//   console.log("1000ms 후에 fulfilled 됩니다.");
// });

// then을 설정하는 시점을 정확히하고,
// 함수의 실행과 동시에 프로미스 객체를 만들면서 pending 이 시작하도록 하기위해
// 프로미스 객체를 생성하면서 리턴하는 함수 (p) 를 만들어 함수 (p) 실행과 동시에
// then을 설정합니다.

// function f() {
//   return new Promise((resolve, reject) => {
//     // pending
//     setTimeout(() => {
//       reject(new Error("bad"));
//     }, 1000);
//   });
// }

// f()
//   .then((message) => {
//     console.log("1000ms 후에 fulfilled 됩니다.", message);
//   })
//   .catch((error) => {
//     console.log("1000ms 후에 rejected 됩니다.", error);
//   })
//   .finally(() => {
//     console.log("end");
//   });

// rejected p.catch 안에 설정한 callback 함수가 실행됩니다.

// resolve 함수를 실행할 때 인자를 넣어 실행하면, then 의 callback 함수의 인자로
// 받을 수 있습니다.
// resolve('hello');
// then((message) => {...})

// reject('error')
// then((reason) => {...})

// fulfilled 되거나 rejected 된 후에 최종적으로 실행할 것이 있다면,
// .finally() 를 설정하고, 함수를 인자로 넣습니다.

// value가 프로미스 객체인지 아닌지 알 수 없는 경우
// 사용하면 연결된 then 메서드를 실행합니다.
// 프로미스 객체면 resolve 된 then 메서드를 실행
// 프로미스 객체가 아니면 value를 인자로 보내면서 then메서드를 실행

// Promise.resolve();

// Promise.resolve(
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 1000);
//   })
// ).then((data) => {
//   console.log("resolve 된 결과를 받아서 then이 실행", data);
// });

// Promise.resolve("bar").then((data) => {
//   console.log("then 메서드가 없는 경우, fulfilled", data);
// });

Promise.reject(new Error("reason"))
  .then((error) => {})
  .catch((error) => {
    console.log(error);
  });
