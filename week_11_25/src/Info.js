/*
// useState
import React, { useState } from 'react';
 
const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
 
  const onChangeName = e => {
    setName(e.target.value);
  };
 
  const onChangeNickname = e => {
    setNickname(e.target.value);
  };
 
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};
 
export default Info;


*/

/*
// useEffect 

import React, { useState, useEffect } from 'react';
 
const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
    console.log({
      name,
      nickname
    });
  });
 
  const onChangeName = e => {
    setName(e.target.value);
  };
 
  const onChangeNickname = e => {
    setNickname(e.target.value);
  };
 
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};
 
export default Info;
*/

/*
// useEffect  마운트될 때만 실행하고 싶을 때

import React, { useState, useEffect } from 'react';
 
const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  useEffect(() => {
    console.log('마운트될 때만 실행됩니다.');
  }, []);
 
  const onChangeName = e => {
    setName(e.target.value);
  };
 
  const onChangeNickname = e => {
    setNickname(e.target.value);
  };
 
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};
 
export default Info;
*/

/*
// Info.js 2.2특정 값이 업데이트될 때만 실행하고 싶을 때

import React, { useState, useEffect } from 'react';
 
const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('마운트될 때만 실행됩니다.');
  }, []);

  useEffect(() => {
    console.log(name);
  }, [name]);
 
  const onChangeName = e => {
    setName(e.target.value);
  };
 
  const onChangeNickname = e => {
    setNickname(e.target.value);
  };
 
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};
 
export default Info;
*/



/*
// Info.js 2.3 뒷정리하기

import React, { useState, useEffect } from 'react';
 
const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('마운트될 때만 실행됩니다.');
  }, []);

  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    };
  });
 
  const onChangeName = e => {
    setName(e.target.value);
  };
 
  const onChangeNickname = e => {
    setNickname(e.target.value);
  };
 
  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};
 
export default Info;
*/


/*
// 3.2. useReducer Info.js

import React, { useReducer } from 'react';
 
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}
 
const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  };
 
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};
 
export default Info;
*/

// // 7. 커스텀 Hooks / Info.js
import React from 'react';
import useInputs from './useInputs';
 
const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;
 
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
};
 
export default Info;
