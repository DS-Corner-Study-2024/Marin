

// corner 5주차

/* 
// < src/component/Body.js >

function Body() {
  return (
    <div>
      <h1>body</h1>
    </div>
  );
}
export default Body;
*/








/* 
function Body() {
  const number = 1; // 상수 선언
  return (
    <div>
      <h1>body</h1>
      <h2>{number}</h2> //<h2> 태그로 감싸 테더링, number이 자바스크립 표현법이라는 것을 표현하기 위해 {}사용
    </div>
  );
}
export default Body;
*/








/* 
function Body() {
  const numA = 1;
  const numB = 2;
  return (
    <div>
      <h1>body</h1>
      <h2>{numA + numB}</h2> //두 변수 더하기
    </div>
  );
}
export default Body;
*/







/* 
function Body() {
  const strA = "안녕";
  const strB = "리액트";
  return (
    <div>
      <h1>body</h1>
      <h2>{strA + strB}</h2> //문자열 붙이기
    </div>
  );
}
export default Body;
*/









/* 
function Body() {
  const boolA = true;
  const boolB = false;
  return (
    <div>
      <h1>body</h1>
      //<h2>{boolA || boolB}</h2> //참/거짓 불리언 값 반환-> 아무것도 프린트 되지 않는다.
      <h2>{String(boolA || boolB)}</h2> //불리형을 문자열로 변환하며 출력
    </div>
  );
}
export default Body;
*/









/* 
function Body() {
  const objA = {
    a: 1,
    b: 2,
  };
  return (
    <div>
      <h1>body</h1>
      <h2>{objA}</h2>
    </div>
  );
}

export default Body;
*/








/* 
function Body() {
  const objA = {
    a: 1,
    b: 2,
  };
  return (
    <div>
      <h1>body</h1>
      <h2>a: {objA.a}</h2> // a프로퍼티 값 렌더링
      <h2>b: {objA.b}</h2> // b프로퍼티 값 렌더링
    </div>
  );
}
export default Body;
*/








/* 
// 1. <React.Fragment> 
import React from "react";

function Body() {
  return (
    <React.Fragment> // 리액트가 제공하는 기능 (넘포넌트)
      <div>div 1</div>
      <div>div 2</div>
    </React.Fragment> // 최상위 태그 대체, 렌더링 x
  );
}

export default Body;
*/








/* 
//2. ‘<></>’
function Body() {
  return (
    <>
      <div>div 1</div>
      <div>div 2</div>
    </>
  );
}
export default Body;
*/








/* 
import React from "react";
function Body() {
  const num = 19;
  return (
    <>
      <h2>
        {num}은(는) {num % 2 === 0 ? "짝수" : "홀수"}입니다. //삼항연산자 (num값이 2로 나누어 떨어지면, 짝수, 홀수)
      </h2>
    </>
  );
}
export default Body;
*/










/* 
import React from "react";

function Body() {
  const num = 200;
  if (num % 2 === 0) {
    return <div>{num}은(는) 짝수입니다</div>;
  } else {
    return <div>{num}은(는) 홀수입니다</div>;
  }
}

export default Body;
*/








/* 
function Body() {
  return (
    <div style={{ backgroundColor: "red", color: "blue" }}> //카멜 표기법
      <h1>body</h1>
    </div>
  );
}
export default Body;
*/







/*
import "./Body.css"; 

function Body() {
  return (
    <div className="body"> 
      <h1>body</h1>
    </div>
  );
}

export default Body;
*/


/* 
function Body(props) { //  props라는 이름의 매개변수에 저장 (부모 컴포넌트에서 전달된 객체 Props는 함수의 매개변수 형태로 저장)
  console.log(props); // 매개변수 props의 값을 확인하기 위해 개발자 도구의 콘솔에 출력
  return <div className="body">{props.name}</div>; // 객체 props의 name 프로퍼티 값을 렌더링
}
export default Body;
*/



/*
function Body(props) {
  console.log(props);
  return (
    <div className="body">
      {props.name}은 {props.location}에 거주합니다
    </div>
  );
}
export default Body;
*/





/*
function Body(props) {
  const { name, location } = props; 
  console.log(name, location); 
  return (
    <div className="body">
      {name}은 {location}에 거주합니다 
    </div>
  );
}
export default Body;
*/

/*
function Body(props) {
  const { name, location } = props;
  console.log(name, location); 
  return (
    <div className="body">
      {name}은 {location}에 거주합니다 
    </div>
  );
}
export default Body;
*/


/*
function Body({ name, location, favorList }) { 
  console.log(name, location, favorList); 
  return (
    <div className="body">
      {name}은 {location}에 거주합니다.
      <br />
      {favorList.length}개의 음식을 좋아합니다. 
    </div> 
  );
}
export default Body;
*/





/*
function Body({ name, location, favorList }) {
  console.log(name, location, favorList);
  return (
    <div className="body">
      {name}은 {location}에 거주합니다.
      <br />
      {favorList.length}개의 음식을 좋아합니다.
    </div>
  );
}

Body.defaultProps = {
  favorList: [],
};

export default Body;
*/



/*
function Body({ children }) { 
  console.log(children); 
  return <div className="body">{children}</div>; 
}
export default Body;

*/


/*
// corner 5주차 2024-11-04일 스터디 코딩 문제1 
function Body() {
  return (
    <div style={{ backgroundColor: "purple", color: "green" }}> 
      <h1>body</h1>
    </div>
  );
}
export default Body;



// corner 5주차 2024-11-04일 스터디 코딩 문제2 
function Body({ name, studentnumber }) {
  console.log(name, studentnumber);
  return (
    <div className="body">
      {name}의 학번은 {studentnumber}
    </div>
  );
}
export default Body;
*/





// corner 6주차

/*
// 버튼만들기
function Body() {
  function handleOnClick() { 
    alert("버튼을 클릭하셨군요!");
  }

  return (
    <div className="body">
      <button onClick={handleOnClick}>클릭하세요</button> 
    </div>
  );
}
export default Body;
*/


/*
// a, b버튼 만들
function Body() {
  function handleOnClick(e) { 
    console.log(e.target.name);
  }
  return (
    <div className="body">
      <button name="A버튼" onClick={handleOnClick}> 
        A 버튼
      </button>
      <button name="B버튼" onClick={handleOnClick}> 
        B 버튼
      </button>
    </div>
  );
}

export default Body;

*/


/*
// 이벤트 객체 정보 확인하기
function Body() {
  function handleOnClick(e) {
    console.log(e); //
    console.log(e.target.name);
  }
  return (
    <div className="body">
      <button name="A버튼" onClick={handleOnClick}>
        A 버튼
      </button>
      <button name="B버튼" onClick={handleOnClick}>
        B 버튼
      </button>
    </div>
  );
}

export default Body;
*/



/*
// 숫자를 카운트할 수 있는 State 변수 count를 생성
import { useState } from "react"; 

function Body() {
  const [count, setCount] = useState(0); 
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}

export default Body;

*/


/*
//set 함수로 State값 변경하기
import { useState } from "react";

function Body() {
  console.log("Update!");
  const [count, setCount] = useState(0); 

  const onIncrease = () => { // 이벤트 핸들러에서 set함수호출, 인수로 count +1을 전달
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
    </div>
  );
}
export default Body;
*/




/*
//<input> 태그로 텍스트 입력하기
import { useState } from "react";

function Body() {
  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input onChange={handleOnChange} /> 
    </div>
  );
}
export default Body;
*/


/*
//텍스트
import { useState } from "react";

function Body() { 
  const [text, setText] = useState(""); 
  const handleOnChange = (e) => {
    setText(e.target.value); 
  };
  return (
    <div>
      <input value={text} onChange={handleOnChange} /> 
      <div>{text}</div> 
    </div>
  );
}

export default Body;
*/


/*
//날짜 입력
import { useState } from "react";

function Body() {
  const [date, setDate] = useState("");
  const handleOnChange = (e) => {
    console.log("변경된 값: ", e.target.value);
    setDate(e.target.value);
  };
  return (
    <div>
      <input type="date" value={date} onChange={handleOnChange} />
    </div>
  );
}

export default Body;
*/

/*
// 드롭다운
import { useState } from "react";

function Body() {
  const [option, setOption] = useState("");
  const handleOnChange = (e) => {
    console.log("변경된 값: ", e.target.value);
    setOption(e.target.value);
  };

  return (
    <div>
      <select value={option} onChange={handleOnChange}>
        <option key={"1번"}>1번</option>
        <option key={"2번"}>2번</option>
        <option key={"3번"}>3번</option>
      </select>
    </div>
  );
}
export default Body;
*/

/*
//여러줄
import { useState } from "react";

function Body() {
  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    console.log("변경된 값 : ", e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleOnChange} />
    </div>
  );
}
export default Body;
*/

/*
// 여러 입력값 인력
import { useState } from "react";

function Body() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [bio, setBio] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  };
  const onChangeBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder="이름" /> 
      </div>
      <div>
        <select value={gender} onChange={onChangeGender}> 
          <option key={""}></option>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input type="date" value={birth} onChange={onChangeBirth} /> 
      </div>
      <div>
        <textarea value={bio} onChange={onChangeBio} /> 
      </div>
    </div>
  );
}
export default Body;
*/

/*
// 입력
import { useState } from "react";

function Body() {
  const [state, setState] = useState({ 
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });

  const handleOnChange = (e) => {
    console.log("현재 수정 대상:", e.target.name);
    console.log("수정값:", e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          name="name" 
          value={state.name} 
          onChange={handleOnChange} 
          placeholder="이름"
        />
      </div>
      <div>
        <select name="gender" value={state.gender} onChange={handleOnChange}>
          <option key={""}></option>
          <option key={"남성"}>남성</option>
          <option key={"여성"}>여성</option>
        </select>
      </div>
      <div>
        <input
          name="birth"
          type="date"
          value={state.birth}
          onChange={handleOnChange}
        />
      </div>
      <div>
        <textarea name="bio" value={state.bio} onChange={handleOnChange} />
      </div>
    </div>
  );
}

export default Body;
*/

/*
// props
import "./Body.css";
import { useState } from "react";

function Viewer({ number }) {
  return <div>{number % 2 === 0 ? <h3>짝수</h3> : <h3>홀수</h3>}</div>;
}

function Body() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h2>{number}</h2>
      <Viewer number={number} />
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}
export default Body;
*/

/*
// State와 자식 컴포넌트 
import { useState } from "react";

function Viewer() { 
  console.log("viewer component update!");
  return <div>Viewer</div>;
}

function Body() {
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <h2>{number}</h2>
      <Viewer /> 
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}

export default Body;
*/

/*
//useRef 사용하기
import { useState } from "react";

function Body() {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    alert(text);
  };

  return (
    <div>
      <input value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성 완료</button>
    </div>
  );
}
export default Body;
*/

/*
// useRef로 입력 폼 초기화하기
import { useRef, useState } from "react"; // react 라이브러리에서 불러오기

function Body() { // 인수로 전달한 값을 초깃값으로 하는 Ref 객체를 생성
  const [text, setText] = useState("");
  const textRef = useRef(); // 생성한 Ref를 상수 textRef에 저장

  const handleOnChange = (e) => {
    setText(e.target.value); // textRef가 돔 입력 폼에 접근하도록 설정
  };
  const handleOnClick = () => {
    alert(text);
    textRef.current.value = ""; // 대화상자에서 <확인> 버튼을 클릭 하면, textRef.current(textRef가 현재 참조하고 있는 돔 요소)의 value 값을 공백 문자열로 초기화
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

//useRef로 포커스하기
import { useRef, useState } from "react";

function Body() {
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus(); // 다섯 글자보다 적다면 textRef.current가 참조하는 입력 폼에 포커스를 실행
    } else {
      alert(text);
      setText(""); // 입력한 값을 초기화하기 위해 set 함수 setText를 호출하고 인수로 빈 문자열을 전달
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