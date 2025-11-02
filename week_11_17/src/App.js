/*
// src/App.js
import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;
*/


/*
// src/App.js
import "./App.css";
import Controller from "./component/Controller"; 
import Viewer from "./component/Viewer";

function App() {
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller /> 
      </section>
    </div>
  );
}

export default App;
*/


import "./App.css";
import { useState } from "react";
import Controller from "./component/Controller";
import Viewer from "./component/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const handleSetCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} /> 
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} /> 
      </section>
    </div>
  );
}
export default App;


