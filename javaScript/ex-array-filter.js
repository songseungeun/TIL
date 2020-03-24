const numbers = [1, 2, 3, 4, 5];

const odds = numbers.filter(item => item % 2);

console.log(odds);

// 배열의 특정요소 제거하기

const users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 3, name: 'Kim' },
  { id: 4, name: 'Kim' },
  { id: 5, name: 'Kim' },
  { id: 6, name: 'Kim' },
  { id: 7, name: 'Kim' },
  { id: 8, name: 'Kim' }
];

const userList = users.filter(
  function (item) {
    console.log(item);
    console.log(item.id);
    return item.id % 2;
  }
);

console.log(userList);