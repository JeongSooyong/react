import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");
  // name 상태는 입력된 이름을 저장합니다.
  // setName 함수는 입력된 이름을 업데이트합니다.

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름을 입력하세요"
      />
      <p>입력하신 이름: {name}</p>
    </div>
  );
}

export default NameInput;