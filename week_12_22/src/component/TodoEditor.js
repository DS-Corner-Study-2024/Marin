// src/component/TodoEditor.js
/*
// 2.3 TodoEditor 컨포넌트 만들기
// 2.3.1 TodoList컴포넌트 만들기

import "./TodoEditor.css";

const TodoEditor = () => {
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏️ </h4>
      <div className="editor_wrapper">
        <input placeholder="새로운 Todo..." />
        <button>추가</button>
      </div>
    </div>
  );
};
export default TodoEditor;
*/

// 4.3 아이템 추가 함수 호출하기 
import { useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState(""); 
  const onChangeContent = (e) => { 
    setContent(e.target.value);
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏ </h4>
      <div className="editor_wrapper">
        <input 
          value={content}
          onChange={onChangeContent}
          placeholder="새로운 Todo..."
        />
        <button>추가</button>
      </div>
    </div>
  );
};
export default TodoEditor;