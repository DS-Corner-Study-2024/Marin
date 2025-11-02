

// 7장. useReducer와 상태 관리
/*
1. State 값을 변경하는 코드를 (상태 변화 코드)라고 한다.
2. 이러한 상태 변화를 구현하는 데 사용하는 리액트 훅에는 (useState)와 (useReducer)가 있다. 
3. 위의 두 리액트 훅의 가장 큰 차이점은 (컴포넌트와의 분리 가능 여부)이다.
4. useReducer의 배열의 첫 번째 요소에는 (State 변수)가, 두 번째 요소는 상태 변화를 촉발하는 (함수 dispatch)가 들어간다.
5. dispatch를 호출하면 (함수 reducer)이 실행된다. 
6. 그리고 이 함수가 반환하는 값은 (새로운 State 값)이 된다.
7. 상태 변화를 촉발하는 함수 dispatch를 호출하고 인수로 객체를 전달하는데, 이 객체에는 State의 변경 정보가 있다. 이 객체를 (action 객체)라고도 부른다.
*/


/* 
코드 문제 1
기존에 구현한 TestComp의 카운터에 2씩 증가하고 감소하는 버튼을 추가하라.
return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <strong>{count}</strong>
            </div>
            <div>
                <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>+1</button>
                <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>-1</button>
                <button onClick={() => dispatch({ type: "INCREASE", data: 2 })}>+2</button>
                <button onClick={() => dispatch({ type: "DECREASE", data: 2 })}>-2</button>
                <button onClick={() => dispatch({ type: "INIT" })}>초기화</button>
            </div>
        </div>
    );
}

*/



/*
코드 문제 2
현재의 State 값을 2배로 증가시키는 버튼을 추가하라. (DOUBLE)
import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        case "DOUBLE":
            return state * 2;
        case "INIT":
            return 0;
        default:
            return state;
    }
}

function TestComp() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <strong>{count}</strong>
            </div>
            <div>
                <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>+1</button>
                <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>-1</button>
                <button onClick={() => dispatch({ type: "DOUBLE" })}>2배</button>
                <button onClick={() => dispatch({ type: "INIT" })}>초기화</button>
            </div>
        </div>
    );
}

export default TestComp;
*/




// 8장 최적화화

/*
1. 메모이제이션은 ( _______ )을 줄여 실행 속도를 빠르게 하는 기술이다.
2. React에서 ( _______ )을 사용하면 함수의 반환값을 기억하여 성능을 최적화할 수 있다.
3. useMemo(콜백함수, ( _______ )) 형태로 사용하며, 특정 값이 변경될 때만 함수를 다시 실행한다.
4. React에서 불필요한 컴포넌트 리렌더링을 방지하기 위해 ( _______ )를 사용할 수 있다.
5. ( _______ ) 컴포넌트는 인수로 전달된 컴포넌트에 기능을 추가하여 반환하는 React의 고급 기술이다.
6. ( _______ )은 비즈니스 로직과 구분되는 공통 기능으로, 여러 컴포넌트에서 반복적으로 사용되는 코드이다.
7. React.memo를 적용하면 ( _______ )이 변경되지 않는 한 컴포넌트가 리렌더링되지 않는다.

*/

/*
빈칸 퀴즈 정답
1. 메모이제이션은 ( 중복 계산 )을 줄여 실행 속도를 빠르게 하는 기술이다.
2. React에서 ( useMemo )을 사용하면 함수의 반환값을 기억하여 성능을 최적화할 수 있다.
3. useMemo(콜백함수, ( _의존성 배열_ )) 형태로 사용하며, 특정 값이 변경될 때만 함수를 다시 실행한다.
4. React에서 불필요한 컴포넌트 리렌더링을 방지하기 위해 ( React.memo )를 사용할 수 있다.
5. ( 고차 컴포넌트(HOC) ) 컴포넌트는 인수로 전달된 컴포넌트에 기능을 추가하여 반환하는 React의 고급 기술이다.
6. ( 커스텀 훅(Custom Hook) )은 비즈니스 로직과 구분되는 공통 기능으로, 여러 컴포넌트에서 반복적으로 사용되는 코드이다.
7. React.memo를 적용하면 ( props )이 변경되지 않는 한 컴포넌트가 리렌더링되지 않는다.
*/



/*
문제 1
아래 코드에서 useMemo를 활용하여 analyzeTodo 함수가 불필요하게 호출되는 것을 방지하도록 수정하세요.

const analyzeTodo = () => {
  console.log("analyzeTodo 함수 호출");
  const totalCount = todo.length;
  const doneCount = todo.filter((it) => it.isDone).length;
  const notDoneCount = totalCount - doneCount;
  return { 
  totalCount, 
  doneCount, 
  notDoneCount };
};
const { totalCount, doneCount, notDoneCount } = analyzeTodo();

*/


/* 
const analyzeTodo = useMemo(() => {
    console.log("analyzeTodo 함수 호출");
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
*/


/* 
문제 2
아래 코드에서 React.memo를 사용하여 TodoItem이 불필요하게 리렌더링되지 않도록 수정하세요.
(아이템이 추가하는 상황, 아이템 제거, 체크박스 클릭, 검색폼에서의 검색에서도 TodoItem리렌더 되지 않도록 하세요. )

const TodoItem = ({ content, isDone, onUpdate, onDelete }) => {
  console.log(`TodoItem 렌더링: ${content}`);
  return (
    <div>
      <span>{content} {isDone ? "✔" : "❌"}</span>
      <button onClick={onUpdate}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
};
export default TodoItem;


*/

/* 
import React from "react";

const TodoItem = React.memo(({ content, isDone, onUpdate, onDelete }) => {
  console.log(`TodoItem 렌더링: ${content}`);
  return (
    <div>
      <span>{content} {isDone ? "✔" : "❌"}</span>
      <button onClick={onUpdate}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
});

export default TodoItem;

*/



