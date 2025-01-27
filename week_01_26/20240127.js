
// 16장
/* 

1. 액션이란 상태에 변화를 요청하는 객체로, 필수적으로 (type) 필드를 가져야 한다. 이 필드는 액션의 이름을 나타낸다.
2. (액션 생성 함수)는 액션 객체를 반환하는 함수로, 액션을 생성할 때 반복적인 코드 작성을 줄여 실수를 방지하고 효율성을 높일 수 있다.
3. 리듀서는 상태를 업데이트하는 함수로, 이전 상태와 액션 객체를 인자로 받아 새로운 상태를 반환한다. 이때 상태의 (값)을 유지하는 것이 중요하다.
4. 3번을 실현하기 위해 사용할 수 있는 연산자에는 ()연산자가 있다.
5. 일반적으로 하나의 프로젝트에서 (한)개의 스토어만 가질 수 있다.
6. 디스패치는 액션을 발생시키는 함수로, (액션 객체)을 파라미터로 전달하여 상태 변화를 트리거한다.
7. 구독은 스토어의 내장 함수로, 상태가 업데이트될 때마다 리스너 함수를 호출하여 UI가 자동으로 반영되도록 돕는다. 구독을 비활성화할 때는 (unsubscribe)를 호출한다. 


코드문제 1
SET_USERNAME과 SET_AGE 액션 타입을 정의하고, 
각각 사용자 이름과 나이를 업데이트할 수 있는 액션 객체를 반환하는 액션 생성 함수를 작성하시오. 
(setUsername: 전달된 username으로 액션 객체 생성, setAge: 전달된 age로 액션 객체 생성)

const SET_USERNAME = "SET_USERNAME"
const SET_AGE = "SET_AGE"

const setUsername = username => ({
  type: SET_USERNAME,
  username
});

const setAge = age => ({
  type: SET_AGE,
  age
});



코드문제 2
위에서 만든 액션 객체를 사용하여 사용자 프로필 정보를 관리하는 리듀서를 작성하시오. 
초기 상태에는 username과 age 값을 포함하며, 두 가지 액션을 처리해야 합니다. 
(setUsername: 전달된 username 값으로 사용자 이름을 변경, setAge: 전달된 age 값으로 나이를 변경)

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.username
      };
    case 'SET_AGE':
      return {
        ...state,
        age: action.age
      };
    default:
      return state;
  }
}




*/








// 17장

/*

빈칸 퀴즈
1. 리덕스의 핵심 개념 중 하나로, 상태 변경을 처리하는 함수는 _______입니다.

2. 액션은 _______ 타입을 사용하여 상태 변경을 요청합니다.

3. 리덕스에서 상태를 변경하려면 반드시 _______를 통해서만 이루어져야 합니다.

4. 리덕스 스토어에 연결된 컴포넌트는 _______ 함수를 사용하여 상태를 가져오거나 액션을 보냅니다.

5. 리덕스에서 상태 변화는 _______ 함수에서 처리됩니다.

6. 액션 객체는 항상 _______라는 속성을 포함합니다.

7. 리덕스의 상태는 항상 _______ 방식으로 변경되어야 하며, 직접 수정해서는 안 됩니다.

*/


/*
빈칸 퀴즈 정답
1. 리덕스의 핵심 개념 중 하나로, 상태 변경을 처리하는 함수는 리듀서입니다.

2. 액션은 액션 타입을 사용하여 상태 변경을 요청합니다.

3. 리덕스에서 상태를 변경하려면 반드시 리듀서를 통해서만 이루어져야 합니다.

4. 리덕스 스토어에 연결된 컴포넌트는 connect 함수를 사용하여 상태를 가져오거나 액션을 보냅니다.

5. 리덕스에서 상태 변화는 리듀서 함수에서 처리됩니다.

6. 액션 객체는 항상 type이라는 속성을 포함합니다.

7. 리덕스의 상태는 항상 불변성 방식으로 변경되어야 하며, 직접 수정해서는 안 됩니다.
*/



/*
코드 문제1: <17.5 컨테이너 컴포넌트 만들기> 를 참고하여 빈칸을 채우세요
// containers/CounterContainer.js

import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = state => ({
  number: ____________, 
});

const mapDispatchToProps = dispatch => ({
  increase: () => { 
    dispatch(____________); 
  },
  decrease: () => {
    dispatch(____________); 
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);




코드 문제2: <17.6 리덕스 더 편하게 사용하기> 를 참고하여 빈칸을 채우세요
// modules/counter.js 

import { createAction, handleActions } from 'redux-actions';

const INCREASE = '____________'; 
const DECREASE = '____________'; 

export const increase = createAction(____________); 
export const decrease = createAction(____________); 

const initialState = {
  number: 0, // 빈칸 5
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number ____________ }), 
    [DECREASE]: (state, action) => ({ number: state.number ____________ }), 
  },
  initialState,
);

export default counter;


*/


/*
코드1 정답
// containers/CounterContainer.js

import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = state => ({
  number: state.counter.number, 
});

const mapDispatchToProps = dispatch => ({
  increase: () => { 
    dispatch(increase()); 
  },
  decrease: () => {
    dispatch(decrease()); 
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);




코드2 정답
// modules/counter.js 

import { createAction, handleActions } from 'redux-actions';

const INCREASE = 'counter/INCREASE'; 
const DECREASE = 'counter/DECREASE'; 

export const increase = createAction(INCREASE); 
export const decrease = createAction(DECREASE); 

const initialState = {
  number: 0, // 정답 5: 초기 상태로 number를 0으로 설정
};

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }), 
    [DECREASE]: (state, action) => ({ number: state.number - 1 }), 
  },
  initialState,
);

export default counter;


*/