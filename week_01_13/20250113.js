
//빈칸 퀴즈
/*
1.Props를 전달하는 과정이 마치 드릴로 땅을 파고 내려가는 것과 같다고 하여 (Props Drilling) 문제라고 하며, 리액트 컴포넌트 계층 구조에서 컴포넌트 간에 값을 전달할 떄 발생한다.
2.리액트에서 (Context)는 같은 문맥 아래에 있는 컴포넌트 그룹에 데이터를 공급하는 기능이라는 의미로 사용된다.
3.(리팩토링)이란 사용자에게 제공하는 기능은 변경하지 않으면서 내부 구조를 개선하는 작업이다. 
4.Context는 반드시 컴포넌트 (밖)에서 생성해야 한다.
5.(useContext)란 Context를 만들고 다루는 리액트 기능으로 createContext, Context.Provider 등이 있다.
6.State 변수 todo와 dispatch 관련 함수들이 하나의 객체로 묶여 동일한 Context에 Props로 전달되기 때문에 todo가 변하면 (TodoContext.Provder)에서 전달하는 모든 Props 또한 바뀐다는 문제가 발생한다.
7.TodoEdiotr 컴포넌트는 App에서 할 일 아이템을 생성하는 함수 (onCreate)가 필요하다.
*/




// 코드 문제
/*
//1. 코드를 참고하여 todo를 공급할 dispatch 함수와 TodoStateConext를 공급할 todoDispatchContext 파일을 각각 만들어 배치하시오
// App.js
import React, {useMemo, useReducer, useCallback, useRef} from "react";
import TodoList from "./TodoList";
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App(){
    (...)
    const memoizedDispatches = useMemo(() => {
        return {onCreate,onUpdate,onDelete};
    },[]);

    return(
        <div className="App">
            <Header />
            //코드 작성
        </div>
    );
}
export default App;
*/
//1번 답
// App.js
import React, {useMemo, useReducer, useCallback, useRef} from "react";
import TodoList from "./TodoList";
export const TodoStateContext = React.createContext();
export const TodoDispatchContext = React.createContext();

function App(){
    (...)
    const memoizedDispatches = useMemo(() => {
        return {onCreate,onUpdate,onDelete};
    },[]);

    return(
        <div className="App">
            <Header />
            <TodoStateContext.Provider value={todo}>
                <TodoDispatchContext.Provider value={memoizedDispatches}>
                    <TodoEditor />
                    <TodoList />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}
export default App;


//2. 1번에서 작성한 코드를 참고하여 onCreate를 받는 TodoEditor 코드를 작성하시오.

//2번 답
// TodoEditor.js
import { useContext } from "react";
import { TodoDispatchContext } from "./App";
(...)

const TodoEditor = () => {
    const {onCreate} = useContext(TodoDispatchContext);
    (...)
};
export default TodoEditor;