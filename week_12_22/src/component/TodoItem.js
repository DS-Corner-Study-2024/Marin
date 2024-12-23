// src/component/TodoItem.js
// 2.4 TodoList, TodoItem 컨포넌트 만들기


// 2.4.2TodoItem 컨포넌트 만들기

import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <div className="checkbox_col"> 
        <input type="checkbox" />
      </div>
      <div className="title_col">할 일</div> 
      <div className="date_col">{new Date().toLocaleDateString()}</div> 
      <div className="btn_col"> 
        <button>삭제</button>
      </div>
    </div>
  );
};
export default TodoItem;
