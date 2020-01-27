const device = 'iphone'; // 입력한 device 이름을 case 에서 찾아서 맞는 구문을 출력함
// 'iphone' 안을 바꿀때마다 맞는 구문을 찾아서 출력함
switch (device) {
  case 'iphone':
    console.log('아이폰!');
    break; // break 를 입력하지 않으면 다음 구문도 출력됨.
  case 'ipad':
    console.log('아이패드!');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    // case에 맞는 값이 없을 땐 default 구문을 출력함.
    console.log('모르겠네요..');
}
