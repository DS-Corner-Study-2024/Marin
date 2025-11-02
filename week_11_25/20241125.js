
/*
// 빈칸문제 
1. (              )는 가장 기본적인 Hook이며, 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해 줍니다.
2. (              )는 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 보아도 무방합니다.
3. (              )는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달받아 새로운 상태를 반환하는 함수입니다.
4. (              )를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있습니다.
5. (              )을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성할 수 있습니다.
6. (              ) Hook은 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해 줍니다. 
7. 리액트에서 Hooks 패턴을 사용하면 (              ) 컴포넌트를 작성하지 않고도 대부분의 기능을 구현할 수 있습니다.


// 빈칸 정답
<빈칸 정답>
1. ( useState )는 가장 기본적인 Hook이며, 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해 줍니다.
2. ( useEffect )는 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 보아도 무방합니다.
3. ( useReducer )는 현재 상태, 그리고 업데이트를 위해 필요한 정보를 담은 액션(action) 값을 전달받아 새로운 상태를 반환하는 함수입니다.
4. ( useMemo )를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있습니다.
5. ( useCallback )을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성할 수 있습니다.
6. ( useRef ) Hook은 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해 줍니다. 
7. 리액트에서 Hooks 패턴을 사용하면 ( 클래스형 ) 컴포넌트를 작성하지 않고도 대부분의 기능을 구현할 수 있습니다.



*/





// 코드 문제

/*
// 문제1 : 숫자 카운터를 구현하기, useState코드를 참고해서 ,+1, +10, +100, -1, -10, -100의 버튼을 만들고 숫자를 카운터 하는 코드는 구현하시오. 

import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  // 숫자 값을 변경하는 함수
  const handleChange = (num) => {
    setValue(value + num);
  };

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => handleChange(1)}>+1</button>
      <button onClick={() => handleChange(10)}>+10</button>
      <button onClick={() => handleChange(100)}>+100</button>
      <button onClick={() => handleChange(-1)}>-1</button>
      <button onClick={() => handleChange(-10)}>-10</button>
      <button onClick={() => handleChange(-100)}>-100</button>
    </div>
  );
};

export default Counter;
*/


/*
// 문제2 useState와 useEffect를 이용하여 학번과 학과를 입력받는 코드를 작성하시오.
// 힌트: (studentId, setStudentId), (department, setDepartment)

import React, { useState, useEffect } from 'react';

const Info = () => {
  const [studentId, setStudentId] = useState('');
  const [department, setDepartment] = useState('');

  useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
    console.log({ studentId, department });
  });

  const onChangeStudentId = (e) => {
    setStudentId(e.target.value);
  };

  const onChangeDepartment = (e) => {
    setDepartment(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="학번을 입력하세요" 
        value={studentId} 
        onChange={onChangeStudentId}
      />
      <input 
        type="text" 
        placeholder="학과를 입력하세요" 
        value={department} 
        onChange={onChangeDepartment}
      />
    </div>
  );
};

export default Info;
*/