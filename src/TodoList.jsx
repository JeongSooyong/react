function TodoList() {
  const todos = ["장보기", "운동하기", "리액트 공부하기"];
  // todos 배열은 할 일 목록을 저장합니다.
  // map 함수를 사용하여 todos 배열의 각 항목을 렌더링합니다.

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

export default TodoList;