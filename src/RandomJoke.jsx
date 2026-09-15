import { useState } from "react";
// useState 훅을 사용하여 상태를 관리합니다.


function RandomJoke() {
    // RandomJoke 라는 컴포넌트(함수) 생성
  const [joke, setJoke] = useState("");
  // joke 라는 state의 초기값은 빈 문자열. 
  // setJoke 함수는 joke 상태를 업데이트
  const [loading, setLoading] = useState(false);
  // loading 라는 state의 초기값은 false.
  // setLoading 함수는 loading 상태를 업데이트

  async function fetchJoke() {
    // 비동기 처리를 하기 위해서는 async 함수를 사용해야한다.
    // fetchJoke 라는 컴포넌트 생성
    setLoading(true);
    // 아래 API를 요청하기 전에 setLoading 상태를 true로 설정
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    // fetch 함수를 사용하여 API 요청
    // await 키워드를 사용하여 fetch 함수의 결과를 기다립니다.
    // 응답이 도착하면 그 결과가 변수 res에 저장
    const data = await res.json();
    // 변수 res를 JSON 형식으로 변환하여 data에 저장
    setJoke(`${data.setup} - ${data.punchline}`);
    setLoading(false);
  }

  return (
    <div>
      <button onClick={fetchJoke}>농담 가져오기</button>
      {loading ? <p>불러오는 중...</p> : <p>{joke}</p>}
    </div>
  );
}

export default RandomJoke;