/*
// src/component/Viewer.js
const Viewer = () => {
    return (
      <div>
        <div>현재 카운트: </div>
        <h1>0</h1>
      </div>
    );
  };
  export default Viewer;
  */

  const Viewer = ({ count }) => {
    return (
      <div>
        <div>현재 카운트 : </div>
        <h1>{count}</h1>
      </div>
    );
  };
  export default Viewer;