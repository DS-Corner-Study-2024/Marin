/*
import React from 'react';
import Counter from './Counter';
 
const App = () => {
  return <Counter />;
};
export default App;
*/

/*
//2.2 특정 값이 업데이트될 때만 실행하고 싶을 때
import React from 'react';
import Info from './Info';
 
const App = () => {
  return <Info />;
};
 
export default App;
*/


/*
//2.3 정리하기
import React, { useState } from 'react';
import Info from './Info';
 
const App = () => {
const [visible, setVisible] = useState(false);
return (
  <div>
      <button
      onClick={() => {
        setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
    {visible && <Info />}
    </div>
);
};
 
export default App;
*/

/*
// 3.1. useReducer
import React from 'react';
import Counter from './Counter';
 
const App = () => {
  return <Counter />;
};
 
export default App;
*/

/*
// 3.2. useReducer
import React from 'react';
import Info from './Info';
 
const App = () => {
  return <Info />;
};
 
export default App;
*/


// 4. useMemo / App.js
import React from 'react';
import Average from './Average';
 
const App = () => {
  return <Average />;
};
 
export default App;
