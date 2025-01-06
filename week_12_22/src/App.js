/*
// 1. 리액트 앱만들기
import "./App.css";

function App() {
  return <div className="App"></div>;
}
export default App;
*/

// 2. UI구현하기
/*
//2.1.1 페이지 레이아웃 만들기
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>헬로 리액트</h2>
    </div>
  );
}
export default App;
*/

/*
//2.1.2 자식 컨포넌트 배치하기
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>Header</div>
      <div>Todo Editor</div>
      <div>Todo List</div>
    </div>
  );
}
export default App;
*/

/*
//2.2.1 Header 컴포넌트 만들기
import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>Todo Editor</div>
      <div>Todo List</div>
    </div>
  );
}
export default App;
*/


// 2.3 TodoEditor 컨포넌트 만들기
/*
// 2.3.1 TodoList컴포넌트 만들기
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <div>Todo List</div>
    </div>
  );
}
export default App;
*/

/*
// 2.3.2 TodoList컴포넌트 만들기
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}
export default App;
*/

// 2.4 TodoList, TodoItem 컨포넌트 만들기
/*
// 2.4.1 TodoList컴포넌트 만들기
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}
export default App;
*/

// 3.1 기능 구현 준비하기
/*
// 3.1.1 기초 데이터 설정하기
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}
export default App;
*/
/*
// 3.3 목데이터 설정하기
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState } from "react";

const mockTodo = [ 
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState([mockTodo]);
  return (
    <div className="App">
      <Header />
      <TodoEditor />
      <TodoList />
    </div>
  );
}
export default App;
*/


// 4.2 아이템 추가 함수 만들기
/*
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState, useRef } from "react";

const mockTodo = [ 
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const idRef = useRef(3);
  const [todo, setTodo] = useState(mockTodo);

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
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} /> 
      <TodoList />
    </div>
  );
}
export default App;
*/




/*
// 2024-12-30
// 5.1.1?
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState, useRef } from "react";
const mockTodo = [ 
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const idRef = useRef(3);
  const [todo, setTodo] = useState(mockTodo);

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
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} />
    </div>
  );
}
export default App;
*/

/*
// src/App.js
// 6.2.1 아이템 수정 함수 만들기
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState, useRef } from "react";
const mockTodo = [ 
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const idRef = useRef(3);
  const [todo, setTodo] = useState(mockTodo);

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
  const onUpdate = (targetId) => { 
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
};

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} /> 
    </div>
  );
}
export default App;
*/

/*
// src/App.js
// 7.2.1 아이템 삭제 함수 만들기 
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState, useRef } from "react";
const mockTodo = [ 
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const idRef = useRef(3);
  const [todo, setTodo] = useState(mockTodo);

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
  const onUpdate = (targetId) => { 
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
};
  const onDelete = (targetId) => { 
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} /> 
    </div>
  );
}
export default App;
*/


// 2025-01-06 7장 useReducer와 상태관리
/*
// src/App.js
// 1.1.1 useReducer이해하기기
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useState, useRef } from "react";
import TestComp from "./component/TestComp";


const mockTodo = [ 
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function App() {
  const idRef = useRef(3);
  const [todo, setTodo] = useState(mockTodo);

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
  const onUpdate = (targetId) => { 
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
};
  const onDelete = (targetId) => { 
    setTodo(todo.filter((it) => it.id !== targetId));
  };

  return (
    <div className="App">
      <TestComp />
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} /> 
    </div>
  );
}
export default App;
*/

/*
// src/App.js
// 2.1 할일 관리 앱 업테이트
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useReducer, useRef } from "react";
import TestComp from "./component/TestComp";


const mockTodo = [ 
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function useReducer(state, action) {
  return state;
}

function App() {
  const idRef = useRef(3);
  const [todo, dispatch] = useReducer(useReducer, mockTodo);

  const onCreate = (content) => {
    idRef.current += 1; 
  };
  const onUpdate = (targetId) => { 
};
  const onDelete = (targetId) => { 
  };

  return (
    <div className="App">
      <TestComp />
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} /> 
    </div>
  );
}
export default App;
*/
/*
// src/App.js
// 2.2 create
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useReducer, useRef } from "react";


const mockTodo = [ 
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type){
    case "CREATE":{
      return [action.newItem, state]
    }
    default:
      return state;
  }
}

function App() {

  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime(),
      },
    })
    idRef.current += 1; 
  };
  const onUpdate = (targetId) => { 
};
  const onDelete = (targetId) => { 
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} /> 
    </div>
  );
}
export default App;
*/

/*
// src/App.js
// 2.3 Update
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useReducer, useRef } from "react";


const mockTodo = [ 
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type){
    case "CREATE":{
      return [action.newItem, ...state]
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId
          ?{
            ...it,
            isDone: !it.isDone,
          }
        : it
      );
    }
    case "DELETE":{
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}

function App() {

  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime(),
      },
    })
    idRef.current += 1; 
  };
  const onUpdate = (targetId) => { 
    dispatch({
      type: "UPDATE",
      targetId,
    });
};
  const onDelete = (targetId) => { 
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} /> 
    </div>
  );
}
export default App;
*/


// src/App.js
// 3.3  useCallBack을 이용해 TodoItem 컴포넌트의 리렌더 방지하기
import "./App.css";
import Header from "./component/Header";
import TodoEditor from "./component/TodoEditor";
import TodoList from "./component/TodoList";
import { useCallback, useReducer, useRef } from "react";


const mockTodo = [ 
  {
    id: 0,
    isDone: false,
    content: "React 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래 널기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    createdDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type){
    case "CREATE":{
      return [action.newItem, ...state]
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId
          ?{
            ...it,
            isDone: !it.isDone,
          }
        : it
      );
    }
    case "DELETE":{
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}

function App() {

  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime(),
      },
    })
    idRef.current += 1; 
  };
  const onUpdate = useCallback((targetId) => { 
    dispatch({
      type: "UPDATE",
      targetId,
    });
},[]);
  const onDelete = useCallback((targetId) => { 
    dispatch({
      type: "DELETE",
      targetId,
    });
  },[]);

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} /> 
    </div>
  );
}
export default App;