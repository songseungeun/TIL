function getGrade(score) {
    if (score === 100) {
      return 'A+';
    } else if (score >= 90) {
      return 'A';
    } else if (score >= 80) {
      return 'B+';
    } else if (score >= 70) {
      return 'B';
    } else {
      return 'F';
    }
  }
  
  const grade = getGrade(70);
  console.log(grade);

  // 점수마다 A~F 까지 결과 나오게 함수, if else if 사용


const add = (a, b) => a + b;

const result = add(1, 2);
console.log(result);

//  화살표 함수 ES6 문법

const hello = name => `Hello, ${name}!`;

const sum = hello('seungeun');
console.log(sum);

// 화살표 함수 예제 2