
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




function Body({ children }) { 
  console.log(children); 
  return <div className="body">{children}</div>; 
}
export default Body;



































