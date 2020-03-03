const person = { name: 'Mare' };

// person 객체는 동결된 객체가 아니다.
console.log(Object.isFrozen(person));

// person 객체를 동결하여 프로퍼티 추가, 삭제, 재정의, 쓰기를 금지한다.
Object.freeze(person);

// person 객체는 동결된 객체다.
console.log(Object.isFrozen(person));

// 동결된 객체는 writable 과 configurable가 false다.
console.log(Object.getOwnPropertyDescriptors(person));

// 프로퍼티 추가가 금지된다.
person.age = 20;
console.log(person);

// 프로퍼티 삭제가 금지된다.
delete person.name;
console.log(person);

// 프로퍼티 값 갱신이 금지된다.
person.name = 'Kim';
console.log(person);

// 프로퍼티 어트리뷰트 재정의가 금지된다.
//Object.defineProperty(person, 'name', { value: 'Kim' });
