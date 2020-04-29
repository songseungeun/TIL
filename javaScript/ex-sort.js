const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

let list = items.sort((a, b) => a.value - b.value);

console.log(list);

let nameList = items.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0));

console.log(nameList);