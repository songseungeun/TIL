let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 해체해서 다시 모아서 내보낸다

function toggleCompletedById(id) {
  // return todos = todos.map( todo => {
  //   if (todo.id === id) todo.completed = false;
  // }
  
  // return todos = todos.map( function (todo) {
  //   if (todo.id === id) { ...todo, completed: !todo.completed };
  // }

  return todos = todos.map( todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
}

toggleCompletedById(2);

console.log(todos);

/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/