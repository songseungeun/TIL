// # 9. id 프로퍼티 값 중 최대 값

let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

function getMaxId() {
  return Math.max(...todos.map((todo) => todo.id));
}

console.log(getMaxId());
