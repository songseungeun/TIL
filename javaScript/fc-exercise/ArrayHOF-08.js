// # 8. completed 프로퍼티 값이 true 갯수 구하기

let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

function countCompletedTodos() {
  const completedTodos = todos.filter((todo) => todo.completed);
  return completedTodos.length;
}

console.log(countCompletedTodos());
