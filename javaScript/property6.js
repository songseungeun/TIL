const person = {
  name: 'Mare',
  address: { city: 'Seoul' }
};
// 얕은 객체 동결
Object.freeze(person);

console.log(Object.isFrozen(person));
// 중첩 객체까지 동결하지 못한다.
console.log(Object.isFrozen(person.address));

person.address.city = 'Busan';
console.log(person);
// { name: 'Mare', address: { city: 'Busan' } }