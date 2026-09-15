import { useState } from "react";


// 조건부 랜더링
function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // isLoggedIn 상태는 사용자가 로그인했는지 여부를 저장합니다.
  // setIsLoggedIn 함수는 로그인 상태를 토글합니다.

  return (
    <div>
      {isLoggedIn ? (
        <p>환영합니다!</p>
      ) : (
        <p>로그인해주세요</p>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>
    </div>
  );
}

export default Greeting;