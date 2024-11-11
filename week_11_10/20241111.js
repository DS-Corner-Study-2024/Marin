/* 

1. 이벤트가 발생하면 이벤트 핸들러에게 이벤트 ( 객체 )를 ( 매개변수 )로 전달하게 된다.
2. console.log(e);는 핸들러 함수를 실행했을 때 매개변수에 저장되는 이벤트 ( 객체e )를 콘솔에 출력하는 코드이다.
3. 리액트에서는 함수 (useState)로 (State)를 생성할 수 있다
4. (컴포넌트 업데이트)는 컴포넌트의 state 또는 props이 변경될 때 컴포넌트가 다시 렌더링되는 과정이다.
5. 여성, 남성 중 하나를 선택하는 폼을 만들 때 쓰이는 드롭다운 폼은 (Select) 태그에 속해있다.
6. 리액트의 Ref를 이용하며 (돔요소)들을 직접 조작할 수 있다.
7. state를 만드는 함수인 useState와 참조 객체를 만드는 함수인 useRef 모두 (리액트 훅)에 해당한다.



*/


/*
1.  const[state, setState]=useState를 활용하여 다음과 같은 state를 한꺼번에 관리하는 코드를 작성하여라.
- input 태그의 입력 폼에서 이름을 입력받는다.
- date type인 input 태그의 입력 폼에서 오늘 날짜를 입력받는다.
- textarea 태그의 입력 폼에서 이메일을 입력받는다.
--------------------------------------------------------------------------------------------------------------------
// Body.js

import { useState } from "react";

function Body() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeDate = (e) => {
    setGender(e.target.value);
  };
  const onChangeText = (e) => {
    setBirth(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder="이름" /> 
      </div>
      <div>
        <input type="date" value={date} onChange={onChangeDate} /> 
      </div>
      <div>
        <input value={text} onChange={onChangeText} placeholder="이메일" /> 
      </div>
    </div>
  );
}
export default Body;

*/
import { useState } from "react";
function Body() {
  const [state, setState] = useState({ 
    name: "",
    today: "",
    email: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value, 
    }));
  };

  return (
    <div>
      <div>
        <input
          name="name" 
          value={state.name} 
     onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="today"
          type="date"
          value={state.today}
     onChange={handleChange}
        />
      </div>
      <div>
        <textarea 
     name="email" 
     value={state.email}
     onChange={handleChange}/>
      </div>
    </div>
  );
}
export default Body;




/*
2. 사용자에게 텍스트를 입력받고, '확인' 버튼을 누르면 메시지 대화상자에 사용자가 작성한 텍스트가 그대로 뜨는 코드를 작성하시오. 
단, 텍스트의 길이가 10보다 작으면 해당 폼을 포커스하여 사용자의 추가 입력을 유도하시오.
--------------------------------------------------------------------------------------------------------------------

import { useRef, useState } from "react";

function Body() {
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    if (text.length < 10) {
      textRef.current.focus(); 
    } else {
      alert(text);
      setText(""); 
    }
  };

  return (
    <div>
      <input ref={textRef} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성 완료</button>
    </div>
  );
}
export default Body;


*/


import { useRef, useState } from "react";
function Body() {
const [text, setText] = useState("");
const textRef = useRef();

const handleOnChange = (e) => {
    setText(e.target.value);
};
const handleOnClick = () => {
    if (text.length < 10) {
    textRef.current.focus(); 
    } else {
    alert(text);
    setText(""); 
    }
};
return (
    <div>
    <input ref={textRef} value={text} onChange={handleOnChange} />
    <button onClick={handleOnClick}>작성 완료</button>
    </div>
);
}
export default Body;
