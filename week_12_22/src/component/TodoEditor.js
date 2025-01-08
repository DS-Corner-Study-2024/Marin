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

/*
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
*/

// 2024-12-30
/*
// src/component/TodoEditor.js
// 4.3.1 아이템 추가 함수 호출하기

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
*/
/*
// src/component/TodoEditor.js
// 4.3.2 <추가>버튼 클릭시 

import { useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState(""); 
  const onChangeContent = (e) => { 
    setContent(e.target.value);
  };
  
  const onSubmit = () => { 
    onCreate(content);
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
        <button onClick={onSubmit}>추가</button> 
      </div>
    </div>
  );
};
export default TodoEditor;
*/

/*
// src/component/TodoEditor.js
// 4.4.1 빈 입력 방지하기 

import { useState, useRef } from "react";

import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState(""); 
  const inputRef = useRef();
  const onChangeContent = (e) => { 
    setContent(e.target.value);
  };
  
  const onSubmit = () => {
    if (!content) { 
      inputRef.current.focus();
      return;
    }
    onCreate(content);
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏ </h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button> 
      </div>
    </div>
  );
};
export default TodoEditor;
*/

/*
// src/component/TodoEditor.js
// 4.4.2 아이템 추가 후 입력 폼 초기화하기 

import { useState, useRef } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState(""); 
  const inputRef = useRef();
  const onChangeContent = (e) => { 
    setContent(e.target.value);
  };
  
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); // 빈문자열 전달하면 새 아이템을 추가하고, content값은 빈 문자열이 되고 입력폼은 초기화 됩니다. 
  };

  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기 ✏ </h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef} 
          value={content}
          onChange={onChangeContent}
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};
export default TodoEditor;
*/

 /*
// src/component/TodoEditor.js
// 4.4.3 <Enter> 키를 눌러 아이템 추가하기
import { useState, useRef } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState(""); 
  const inputRef = useRef();
  const onChangeContent = (e) => { 
    setContent(e.target.value);
  };
  
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); 
  };
  const onKeyDown = (e) => { 
    if (e.keyCode === 13) {
      onSubmit();
    }
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
*/

/*
// 2025-01-08
// src/component/TodoItem.js
// 1.5 TodoEditor 컴포넌트에 데이터 공급하기
import { useContext, useState, useRef } from "react";
import "./TodoEditor.css";
import {TodoContext} from "../App.js";

const TodoEditor = () => {
  const { onCreate } = useContext(TodoContext);
  const [content, setContent] = useState(""); 
  const inputRef = useRef();
  const onChangeContent = (e) => { 
    setContent(e.target.value);
  };
  
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); 
  };
  const onKeyDown = (e) => { 
    if (e.keyCode === 13) {
      onSubmit();
    }
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
*/



// src/component/TodoItem.js
// 1.9  재설계된 구조로 변경하기
import { TodoDispatchContext } from "../App";
import { useContext, useState, useRef } from "react";
import "./TodoEditor.css";


const TodoEditor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState(""); 
  const inputRef = useRef();
  
  const onChangeContent = (e) => { 
    setContent(e.target.value);
  };
  
  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); 
  };
  const onKeyDown = (e) => { 
    if (e.keyCode === 13) {
      onSubmit();
    }
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
