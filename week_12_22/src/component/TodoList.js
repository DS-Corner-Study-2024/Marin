// 2.4 TodoList, TodoItem 컨포넌트 만들기
/*
// 2.4.1 TodoList컴포넌트 만들기
import "./TodoList.css";

const TodoList = () => {
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input className="searchbar" placeholder="검색어를 입력하세요" />
    </div>
  );
};
export default TodoList;
*/


// 2.4.3 TodoList에 Todoitm 컴포넌트 배치하기
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input className="searchbar" placeholder="검색어를 입력하세요" />
      <div className="list_wrapper"> 
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
};
export default TodoList;