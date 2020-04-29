const userList = [
  { id: 8, name: 'Kim'},
  { id: 4, name: 'Lee'},
  { id: 3, name: 'Song'},
  { id: 6, name: 'Park'},
  { id: 5, name: 'Kwon'},
  { id: 2, name: 'Lim'},
  { id: 7, name: 'Choi'},
  { id: 1, name: 'Chu'},
]

console.log(userList[1].name);
console.log(userList[1]['name']);


// id 선택
function idSelect(id){
  return userList.filter( user => user.id === id );
}

// name 선택
function nameSelect(name){
  return userList.filter( user => user.name === name );
}

// id 정렬
let idList = userList.sort((a, b) => a.id - b.id);

// name 정렬
let nameList = userList.sort((a, b) => a.name > b.name ? 1 : (a.name < b.name ? -1 : 0));


console.log(idSelect(3));
console.log(idSelect(5));
console.log(idSelect(8));

console.log(nameSelect('Kim'));
console.log(nameSelect('Lee'));
console.log(nameSelect('Song'));

console.log(idList);
console.log(nameList);
