//2. UI구현하기
/*
//2.2.1 Header 컴포넌트 만들기
const Header = () => {
    return <div className="Header">Header Component</div>;
  };
  export default Header;
*/
/*
//2.2.2 오늘의 날짜 렌더링
// 2024-12-30
import "./Header.css";

const Header = () => {
    return (
      <div className="Header">
        <h3>오늘은 📅</h3>
        <h1>{new Date().toDateString()}</h1>
      </div>
    );
  };
  export default Header;
*/


// 2025-01-06 8장 최적화
// src/component/Header.js
// 3.1 Header 컴포넌트의 리렌더 방지하기
import "./Header.css";
import React from "react";

const Header = () => {
  //console.log("Header 업데이트");
  return (
    <div className="Header">
      <h3>오늘은 📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};
export default React.memo(Header);