// src/component/TodoItem.js
// 2.4 TodoList, TodoItem 컨포넌트 만들기

/*
// 2.4.2TodoItem 컨포넌트 만들기
// 2024-12-30
import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="TodoItem">
      <div className="checkbox_col"> 
        <input type="checkbox" />
      </div>
      <div className="title_col">할 일</div> 
      <div className="date_col">{new Date().toLocaleDateString()}</div> 
      <div className="btn_col"> 
        <button>삭제</button>
      </div>
    </div>
  );
};
export default TodoItem;
*/

/*
// src/component/TodoItem.js
// 5.1.3 map을 이용해 컴포넌트 반복하기
import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, createdDate }) => { 
  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input checked={isDone} type="checkbox" /> 
      </div>
      <div className="title_col">{content}</div> 
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()} 
      </div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  );
};
export default TodoItem;
*/

/*
// src/component/TodoItem.js
// 6.3.1 TodoItem 컴포넌트에서 아이템 수정 함수 호출하기 
import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, createdDate, onUpdate }) => { 
  const onChangeCheckbox = () => { 
    onUpdate(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox}  
							 checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button>삭제</button>
      </div>
    </div>
  );
};
export default TodoItem;
*/

/*
// src/component/TodoItem.js
// 7.3.1 TodoItem 컴포넌트에서 삭제 함수 호출하기
import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => { 
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => { 
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button> 
      </div>
    </div>
  );
};
export default TodoItem;
*/

/*
// src/component/TodoItem.js
// 3.2 TodoItemp 컴포넌트 리렌더 방지하기
import "./TodoItem.css";
import React from "react";

const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => { 
  //console.log(`${id} TodoItem 업데이트`);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => { 
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button> 
      </div>
    </div>
  );
};
export default React.memo(TodoItem);
*/



/*
// 2025-01-08
// src/component/TodoItem.js
// 1.2 TodoCcontext를 만들어 데이터를 공급하기
import "./TodoItem.css";
import React from "react";

const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => { 
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => { 
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button> 
      </div>
    </div>
  );
};
export default React.memo(TodoItem);

*/
/*
// src/component/TodoItem.js
// 1.4 TodoItem 컴포넌트에서 Context 데이터 사용하기
import "./TodoItem.css";
import React, { useContext} from "react";
import {TodoContext} from "../App.js";

const TodoItem = ({ id, content, isDone, createdDate}) => { 
  const {onUpdate, onDelete} = useContext(TodoContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => { 
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button> 
      </div>
    </div>
  );
};
export default React.memo(TodoItem);
*/

/*
// src/component/TodoItem.js
// 1.6 리팩토링 잘 되었는지 확인하기1
import "./TodoItem.css";
import React, { useContext} from "react";
import {TodoContext} from "../App.js";

const TodoItem = ({ id, content, isDone, createdDate}) => { 
  const {onUpdate, onDelete} = useContext(TodoContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => { 
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button> 
      </div>
    </div>
  );
};
export default React.memo(TodoItem);
*/



// src/component/TodoItem.js
// 1.9 재설계된 구조로 변경하기
import "./TodoItem.css";
import React, { useContext} from "react";
import {TodoDispatchContext} from "../App";

const TodoItem = ({ id, content, isDone, createdDate}) => { 
  console.log(`${id} TodoItem 업데이트`);
  const {onUpdate, onDelete} = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDelete = () => { 
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <div className="checkbox_col">
        <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      </div>
      <div className="title_col">{content}</div>
      <div className="date_col">
        {new Date(createdDate).toLocaleDateString()}
      </div>
      <div className="btn_col">
        <button onClick={onClickDelete}>삭제</button> 
      </div>
    </div>
  );
};
export default React.memo(TodoItem);
