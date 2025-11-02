// 2025-01-06 7장 useReducer와 상태관리리
/*
// src/component/TestComp.js
// 1.1.1 useReducer이해하기기
import { useState } from "react";

function TestComp(){
    const [count, setCount] = useState(0);

    const onIncrease = () => {
        setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <h4> 테스트 컴포넌트 </h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick = {onIncrease}>+</button>
                <button onClick = {onDecrease}>-</button>
            </div>
        </div>
    )
}
export default TestComp;
*/

// src/component/TestComp.js
// 1.3.1 useREducer의 기본 사용법
import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type){
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        case "INIT":
            return 0;
        default:
            return state;
    }
}

function TestComp(){
    const [count, dispatch] = useReducer(reducer ,0);
    // dispatch: 상태변화가 필요할 때 촉발하는 함수, dispatch에서 인수로 전달되는 값에 State변화 값이 들어 있고 이를 action객체라고 합니다.
    // dispatch가 실행되면 함수 reducer이 실행되는데, 이 함수가 반환하는 값이 새로운 State값이 됩니다.
    // dispatch 호출 -> reducer호출 -> State값 업데이트트

    return (
        <div>
            <h4> 테스트 컴포넌트 </h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick={() => dispatch({type: "INCREASE", data: 1 })}>
                    +
                </button>
                <button onClick={() => dispatch({type: "DECREASE", data: 1 })}>
                    -
                </button>
                <button onClick={() => dispatch({type: "INIT"})}>
                    0으로 초기화
                </button>
            </div>
        </div>
    )
}
export default TestComp;