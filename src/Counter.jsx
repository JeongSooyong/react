import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
// count 상태는 현재 클릭 수를 저장합니다.
// count 상태와 setCount 함수를 useState 훅을 사용하여 관리합니다.


  return (
    <div>
      <p>지금까지 {count}번 눌렀어요</p>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
}

export default Counter;