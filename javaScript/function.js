function add(a, b) {
    // function 함수. 함수의 이름 add. (a, b)는 파라미터
    return a + b; // a+b 더해서 반환하는 결과값은 return.
  }
  
  const sum = add(1, 2); // a에 1 b에 2를 넣어서 더해진 값이 sum에 들어가서 출력됨.
  console.log(sum);
  
  // 이름 부르기 예제
  function hello(name) {
    console.log('Hello,' + name + '!');
  }
  hello('seungeun');
  
  // Hello, seungeun! 이라고 출력됨.
  

  function hello2(name) {
    return `Hello, ${name}!`;
  }
  
  const result = hello2('seungeun');
  console.log(result);
  
  // ES6 문법. Template Literal. 백틱 (``) 과 ${함수로 전달} 사용
  