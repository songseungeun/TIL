const items = ['item1', 'item2', 'item3'];
const copy = [];

// 이전
for (let i = 0; i < items.length; i++) {
  copy.push(items[i]);
}
console.log(copy);

// 이후
const copy2 = [];
items.forEach( item => copy2.push(item) );

console.log(copy2);