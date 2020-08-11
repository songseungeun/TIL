// # 7. 모든 요소의 completed 값을 true 변경

let todos = [
  { id: 3, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 1, content: "Javascript", completed: false },
];

function toggleCompletedAll() {
  todos = todos.map((todo) => ({ ...todo, completed: true }));
}

toggleCompletedAll();

console.log(todos);
