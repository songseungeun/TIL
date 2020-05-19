const makeLotto = () => {
  let newArr = [];
  let lottoNumber = Array.from({ length: 7 }, function (v, i) {
    return (i = Math.floor(Math.random() * 44) + 1);
    // newArr = newArr.filter((item, index) => newArr.indexOf(item) === index);
    // console.log(newArr);
  });
  console.log(lottoNumber);
};

makeLotto();
