const dog = {
  name: "멍멍이",
  sound: "멍멍!",
  say: function say() {
    console.log(this.sound);
  }
};

const cat = {
  name: "야옹이",
  sound: "야옹~"
};

cat.say = dog.say;
dog.say();
cat.say();
// 함수가 cat과 연관이 생겨서 this를 찾아서 호출됨

const catSay = cat.say;
catSay();
//함수를 밖으로 꺼내면 this와 연관이 사라져서 찾지못함.
