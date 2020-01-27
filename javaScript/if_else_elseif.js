const a = 1;
if (a + 1 === 2) {
  console.log('a + 1 이 2 입니다.');
}
// a + 1 = 2 이므로 콘솔에 텍스트가 실행 됨.
// if 값이 true 라면 출력되게 함.

const b = 5;
if (b + 1 === 2) {
  console.log('b + 1 이 2 입니다.');
}
// 값이 다르므로 실행안됨.

const c = 1;
if (c + 1 === 2) {
  const c = 2;
  console.log('if문 안의 a 값은' + c);
}
console.log('if문 밖의 a 값은' + c);

// {} 안과 밖은 다른 블록이므로 같은 const c 여도 값이 다르다.

const d = 10;
if (d > 15) {
  console.log('d가 15보다 큽니다.');
} else {
  console.log('d가 15보다 크지 않습니다.');
}
// if 가 false 기 때문에 else 안의 구문이 출력됨.

const e = 7;
if (e === 5) {
  console.log('5 입니다!');
} else if (e === 10) {
  console.log('10 입니다!');
} else if (e === 7) {
  console.log('7 입니다!');
} else {
  console.log('5도 아니고 10도 아닙니다.');
}

// if의 값을 확인 후 다음 else if 를 체크하며
// 맞는 값이 나올 때 까지 체크한 후 맞는 값을 찾아 출력한다.
