/*

import { useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState(""); ①
  const onChangeContent = (e) => { ②
    setContent(e.target.value);
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏ </h4>
      <div className="editor_wrapper">
        <input ③
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
*/



// 코드1번

import { useState, useRef } from "react";
(...)

function App() {
  const [todo, setTodo] = useState([]);
  const idRef = useRef(0); 

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current, 
      content,
      isDone: false,
      createdDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1; 
  };

  
    return (
    (...)
    );
    }
    export default App;



// 코드2번
import { useState, useRef } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const inputRef = useRef(); 
  
  const onKeyDown = (e) => { 
    if (e.keyCode === 32) {
      onSubmit();
    } 
  };
  const onSubmit = () => {
    if (!content) { 
      inputRef.current.focus();
      return;
    } 
    onCreate(content);
    setContent("");
  };

  return(
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏ </h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown} 
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
};
export default TodoEditor;