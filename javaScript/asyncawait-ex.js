// function p(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
// }

// p(1000).then((ms) => {
//   console.log(`${ms} ms 후에 실행된다.`);
// });

// const ms = await p(1000);
// console.log(ms);

// await 를 사용하는 경우 async 함수 안에서 사용되어야 한다.

function p(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(ms);
      reject(new Error("reason"));
    }, ms);
  });
}

async function asyncP() {
  const ms = await p(1000);
  return "Mark: " + ms;
}

(async function main() {
  try {
    const name = await asyncP();
    console.log(name);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("end");
  }
})();
