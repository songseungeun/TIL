const obj = {};
const parent = { x: 1 };

// obj 객체의 프로토타입을 취득
Object.getPrototypeOf(obj);
console.log(Object.getPrototypeOf(obj));

// obj 객체의 프로토타입을 교체
Object.setPrototypeOf(obj, parent);
console.log(Object.setPrototypeOf(obj, parent));
// obj.__proto__ = parent;

console.log(obj.x); // 1