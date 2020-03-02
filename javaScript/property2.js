const person = {};

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
  value: 'Nubium',
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(person, 'lastName', {
  value: 'Mare'
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);

// firstName {
//   value: 'Nubium',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

// lastName {
//   value: 'Mare',
//   writable: false,
//   enumerable: false,
//   configurable: false
// }

// [[Enumerable]]의 값이 false인 경우,
// 해당 프로퍼티(lastName)는 for..in 문이나 Object.keys 등으로 열거할 수 없다.
console.log(Object.keys(person));

// [[Writable]]의 값이 false인 경우,
// 해당 프로퍼티(lastName)의 [[Value]]의 값을 변경할 수 없다.
// 에러는 발생하지 않고 무시된다.
person.lastName = 'Kim';
console.log(person.lastName); // Mare

// [[Configurable]] 의 값이 false인 경우, 해당 프로퍼티를 삭제할 수 없다.
// 에러는 발생하지 않고 무시된다.
delete person.lastName;
console.log(person.lastName); // Mare

// [[Configurable]] 의 값이 false인 경우, 해당 프로퍼티를 재정의할 수 없다.
// Object.defineProperty(person, 'lastName', { enumerable: true });
// TypeError: Cannot redefine property: lastName

// 접근자 프로퍼티 정의
Object.defineProperty(person, 'fullName', {
  // getter 함수
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set(name) {
    [this.firstName, this.lastName] = name.split(' ');
  },
  enumerable: true,
  configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);

person.fullName = 'sere nite';
console.log(person);

console.log(person.lastName);