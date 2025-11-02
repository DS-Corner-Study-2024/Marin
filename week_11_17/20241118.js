/*
1. 프로젝트를 구현하기 전, 앱을 어떤 설계와 기능으로 구현할지 살펴보는 단계를 ()이라한다.
2.  State 값이나 set함수를 여러 컴포넌트에서 사용하는 경우, 이들을 상위 컴포넌트에서 관리하는데, 이 기능을 ()라 한다.
3. 리액트컴포넌트의 라이프 사이클 중 컴포넌트를 페이지에 처음 렌더링할 때를 ()라고 한다.
4. ()는 State나 Props의 값이 바뀌거나 부모 컴포넌트가 리렌더해 자신도 리렌더될 때이다.
5. 더 이상 페이지에 컴포넌트를 렌더링하지 않을 때를 ()라 한다.
6. 컴포넌트 간에 데이터를 전달할 때는 Props를 사용하는데, 전달 방향은 언제나 부모로부터 자식에게 전달하는 방식이다. 이러한 특징을 ()라 한다.
7. 프로그래밍에서 특정 함수가 실행되고 종료된 후에, 미처 정리하지 못한 사항을 처리하는 일을 말한다.

*/




/*
1. 카운트가 짝수일 때 색상 변경하기
카운터 앱에서, 카운트가 짝수일 경우에만 <h1> 요소의 텍스트 색상이 빨간색으로 바뀌도록 하세요. 이때, useEffect를 사용해 count 값의 변화를 감지하고 스타일을 설정하도록 만드세요.
*/
import { useEffect, useState } from "react";

const Viewer = ({ count }) => {
  const [color, setColor] = useState("black"); 

  useEffect(() => {
    if (count % 2 === 0) {
      setColor("red");  // 짝수
    } else {
      setColor("black");  // 홀수
    }
  }, [count]);  // count 값이 변경될 때마다 실행

  return (
    <div>
      <div>현재 카운트 : </div>
      <h1 style={{ color: color }}>{count}</h1>
    </div>
  );
};

export default Viewer;

/*
2. 카운터 앱에서, 짝수일 때만 버튼이 활성화되도록 만드세요. 이때, useEffect를 사용해 count 값이 변경될 때마다 버튼의 활성화 여부를 동적으로 관리하세요. (disabled 속성 사용)
힌트: useEffect를 통해 count가 변경될 때마다 버튼의 활성화 상태를 업데이트합니다.


*/

//Viewer.js

import { useState, useEffect } from "react";

const Controller = ({ handleSetCount, count }) => {
  const [isEven, setIsEven] = useState(true);  // 버튼 활성화 여부

  useEffect(() => {
    setIsEven(count % 2 === 0);  // count가 짝수일 때만 버튼 활성화
  }, [count]);  // count 값이 변경될 때마다 실행

  return (
    <div>
      <button onClick={() => handleSetCount(-1)} disabled={!isEven}>-1</button>
      <button onClick={() => handleSetCount(-10)} disabled={!isEven}>-10</button>
      <button onClick={() => handleSetCount(-100)} disabled={!isEven}>-100</button>
      <button onClick={() => handleSetCount(100)} disabled={!isEven}>+100</button>
      <button onClick={() => handleSetCount(10)} disabled={!isEven}>+10</button>
      <button onClick={() => handleSetCount(1)} disabled={!isEven}>+1</button>
    </div>
  );
};

export default Controller;




//App.js

import { useState } from "react";
import Viewer from "./component/Viewer";
import Controller from "./component/Controller";

function App() {
  const [count, setCount] = useState(0);

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} count={count} />
      </section>
    </div>
  );
}

export default App;
