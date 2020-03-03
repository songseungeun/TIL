const person = { name: 'Mare' };

// person 객체는 확장이 금지된 객체가 아니다.
console.log(Object.isExtensible(person));

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person);

// person 객체는 확장이 금지된 객체다.
console.log(Object.isExtensible(person));

// 프로퍼티 추가가 금지된다.
person.age = 20;
console.log(person);

// 프로퍼티 추가는 금지되지만 삭제는 가능하다.
delete person.name;
console.log(person);

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
Object.defineProperty(person, 'age', { value: 20 });
// TypeError: Cannot define property age, object is not extensible
