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

/*
// 2.4.3 TodoList에 Todoitm 컴포넌트 배치하기
// 2024-12-30
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
*/

/*
// src/component/TodoList.js
// 5.1.2 map을 이용해 컴포넌트 반복하기
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo }) => { 
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input className="searchbar" placeholder="검색어를 입력하세요" />
      <div className="list_wrapper">
        {todo.map((it) => ( 
          <div>{it.content}</div>
        ))}
      </div>
    </div>
  );
};
export default TodoList;
*/




/*
// src/component/TodoList.js
// 5.1.3 map을 이용해 컴포넌트 반복하기

import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo }) => { 
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input className="searchbar" placeholder="검색어를 입력하세요" />
      <div className="list_wrapper">
        {todo.map((it) => (
          <TodoItem {...it} /> 
        ))}
      </div>
    </div>
  );
};
export default TodoList;
*/

/*
// src/component/TodoList.js
// 5.1.4 key 설정하기
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo }) => { 
  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input className="searchbar" placeholder="검색어를 입력하세요" />
      <div className="list_wrapper">
        {todo.map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
*/

/*
// src/component/TodoList.js
// 5.2.1 검색 기능 만들기 
import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo }) => {
  const [search, setSearch] = useState(""); 
  const onChangeSearch = (e) => { 
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) => it.content.includes(search));
  };


  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        value={search} 
        onChange={onChangeSearch} 
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => ( 
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
*/

/*
// src/component/TodoList.js
// 5.2.2 대소 문자를 구별하지 않게 하기
import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo }) => {
  const [search, setSearch] = useState(""); 
  const onChangeSearch = (e) => { 
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };


  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        value={search} 
        onChange={onChangeSearch} 
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => ( 
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
*/

/*
// src/component/TodoList.js
// 6.1.2 아이템 수정 함수 만들기 
import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo, onUpdate }) => {
  const [search, setSearch] = useState(""); 
  const onChangeSearch = (e) => { 
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };


  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        value={search} 
        onChange={onChangeSearch} 
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} onUpdate={onUpdate} /> 
        ))}
      </div>
    </div>
  );
};
export default TodoList;
*/
/*
// src/component/TodoList.js
// 7.2.2 아이템 삭제 함수 만들기 
import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState(""); 
  const onChangeSearch = (e) => { 
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };


  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <input
        value={search} 
        onChange={onChangeSearch} 
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
*/


/*
// 2025-01-06 8장 최적화화
// src/component/TodoList.js
// 2. 함수의 불필요한 재호출 방지하기
// 2.1 할 일 분석 기능 추가하기기
import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState(""); 
  const onChangeSearch = (e) => { 
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  const analyzeTodo = () => {
    console.log("analyzeTodo 함수 호출");
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return{
      totalCount,
      doneCount,
      notDoneCount,
    };
  };
  const {totalCount, doneCount, notDoneCount} = analyzeTodo();


  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>
        <div>총개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
      <input
        value={search} 
        onChange={onChangeSearch} 
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
*/
/*
// src/component/TodoList.js
// 2.2 문제점파악하기기
import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState(""); 
  const onChangeSearch = (e) => { 
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  const analyzeTodo = () => {
    console.log("analyzeTodo 함수 호출");
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return{
      totalCount,
      doneCount,
      notDoneCount,
    };
  };
  const {totalCount, doneCount, notDoneCount} = analyzeTodo();


  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>
        <div>총개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
      <input
        value={search} 
        onChange={onChangeSearch} 
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
*/

/*
// src/component/TodoList.js
// 2.3 재호출방지하기
import { useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState(""); 
  const onChangeSearch = (e) => { 
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  const analyzeTodo = useMemo(() => {
    //console.log("analyzeTodo 함수 호출");
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return{
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  const {totalCount, doneCount, notDoneCount} = analyzeTodo;


  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>
        <div>총개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
      <input
        value={search} 
        onChange={onChangeSearch} 
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
*/


/*
// 2025-01-08
// src/component/TodoList.js
// 1.2 TodoCcontext를 만들어 데이터를 공급하기
import { useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo = [], onUpdate, onDelete }) => {
  const [search, setSearch] = useState(""); 
  const onChangeSearch = (e) => { 
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return{
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  const {totalCount, doneCount, notDoneCount} = analyzeTodo;


  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>
        <div>총개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
      <input
        value={search} 
        onChange={onChangeSearch} 
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
};

TodoList.defaultProps = {
  todo: []
};

export default TodoList;
*/


/*
// src/component/TodoList.js
// 1.3 TodoList 컴포넌트에서 Context 데이터 사용하기
import { useContext, useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import {TodoContext} from "../App.js";

const TodoList = () => {
  const { todo , onUpdate, onDelete } = useContext(TodoContext);
  const storeDAta = useContext(TodoContext);
  const [search, setSearch] = useState(""); 
  const onChangeSearch = (e) => { 
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return{
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  const {totalCount, doneCount, notDoneCount} = analyzeTodo;


  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>
        <div>총개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
      <input
        value={search} 
        onChange={onChangeSearch} 
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem
            key={it.id}
            {...it}
            onUpdate={onUpdate}
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
};

TodoList.defaultProps = {
  todo: []
};

export default TodoList;
*/

/*
// src/component/TodoList.js
// 1.4 TodoItem 컴포넌트에서 Context 데이터 사용하기
import { useContext, useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import {TodoContext} from "../App.js";

const TodoList = () => {
  const { todo } = useContext(TodoContext);
  const storeData = useContext(TodoContext);
  const [search, setSearch] = useState(""); 
  const onChangeSearch = (e) => { 
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return{
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  const {totalCount, doneCount, notDoneCount} = analyzeTodo;


  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>
        <div>총개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
      <input
        value={search} 
        onChange={onChangeSearch} 
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

TodoList.defaultProps = {
  todo: []
};

export default TodoList;
*/


// src/component/TodoList.js
// 1.9  재설계된 구조로 변경하기
import { useContext, useMemo, useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import {TodoStateContext} from "../App";

const TodoList = () => {
  const  todo  = useContext(TodoStateContext);
  const storeData = useContext(TodoStateContext);
  const [search, setSearch] = useState(""); 
  const onChangeSearch = (e) => { 
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().includes(search.toLowerCase())
        );
  };
  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return{
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);
  const {totalCount, doneCount, notDoneCount} = analyzeTodo;


  return (
    <div className="TodoList">
      <h4>Todo List 🌱</h4>
      <div>
        <div>총개수: {totalCount}</div>
        <div>완료된 할 일: {doneCount}</div>
        <div>아직 완료하지 못한 할 일: {notDoneCount}</div>
      </div>
      <input
        value={search} 
        onChange={onChangeSearch} 
        className="searchbar"
        placeholder="검색어를 입력하세요"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => (
          <TodoItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

TodoList.defaultProps = {
  todo: []
};

export default TodoList;
