let count = 0;

const cbFunc = function () {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};

let timer = setInterval(cbFunc, 300);
