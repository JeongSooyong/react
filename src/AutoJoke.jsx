import { useState, useEffect } from "react";

function AutoJoke() {
    // AutoJoke 라는 컴포넌트(함수) 생성
  const [joke, setJoke] = useState("");
  // joke 라는 state의 초기값은 빈 문자열.
  // setJoke 함수는 joke 상태를 업데이트
  const [loading, setLoading] = useState(true);
  // loading 라는 state의 초기값은 true.
  // setLoading 함수는 loading 상태를 업데이트

  useEffect(() => {
    // 컴포넌트가 마운트될 때 fetchJoke 함수를 호출하여 농담을 가져옵니다.
    // useEffect는 규칙상 async 함수를 직접 못 받게 되어 있습니다.
    // 그래서 내부에 async 함수를 정의하고 호출하는 방식으로 사용합니다.
    async function fetchJoke() {
      // 비동기처리를 하기 위한 async 함수 생성
      const res = await fetch("https://official-joke-api.appspot.com/random_joke");
      // fetch 함수를 사용하여 API 요청
      // await 키워드를 사용하여 fetch 함수의 결과를 기다립니다.
      // 응답이 도착하면 그 결과가 변수 res에 저장
      const data = await res.json();
      // 변수 res를 JSON 형식으로 변환하여 data에 저장
      setJoke(`${data.setup} - ${data.punchline}`);
      setLoading(false);
    }

    fetchJoke();
  }, []);
  // [] (빈 배열) → 컴포넌트가 처음 화면에 나타날 때 딱 한 번만 실행
  // []을 아예 안 쓰면 → 화면이 다시 그려질 때마다 매번 실행
  // [count]처럼 값을 넣으면 → count가 바뀔 때마다 실행

  return <div>{loading ? <p>불러오는 중...</p> : <p>{joke}</p>}</div>;
}

export default AutoJoke;