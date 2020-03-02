// 프로퍼티 어트리뷰트 예제
const person = {
  name: 'Mare'
};

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person));

// 접근자 프로퍼티 [[Get]] [[Set]]

const person2 = {
  // 데이터 프로퍼티
  firstName: 'Nubium',
  lastName: 'Mare',


  // fullName은 접근자 함수로 구성된 접근자 프로퍼티이다.
  // getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  // setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person2.firstName + ' ' + person2.lastName);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출된다.
person2.fullName = 'sere nite';
console.log(person2);

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
console.log(person2.fullName);

// firstName은 데이터 프로퍼티이다.
// 데이터 프로퍼티는 value, writable, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
let descriptor = Object.getOwnPropertyDescriptor(person2, 'firstName');
console.log(descriptor);

// fullName은 접근자 프로퍼티이다.
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 갖는다.
descriptor = Object.getOwnPropertyDescriptor(person2,'fullName');
console.log(descriptor);


// 일반 객체의 __proto__는 접근자 프로퍼티이다.
let descriptor2 = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
console.log(descriptor2);

// 함수 객체의 prototype은 데이터 프로퍼티이다.
let descriptor3 = Object.getOwnPropertyDescriptor(function() {}, 'prototype');
console.log(descriptor3);
