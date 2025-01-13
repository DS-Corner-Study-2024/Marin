/*
//2025-01-08
// App.js
import './App.css';
import {getEmotionImgById} from "./util";

function App() {
  return (
    <div className="App"> 
      <h1>감정 일기장</h1>
      <img alt='감정1' src={getEmotionImgById(1)} />
      <img alt='감정2' src={getEmotionImgById(2)} />
      <img alt='감정3' src={getEmotionImgById(3)} />
      <img alt='감정4' src={getEmotionImgById(4)} />
      <img alt='감정5' src={getEmotionImgById(5)} />
    </div>
  );
}

export default App;
*/

/*
//2025-01-13
// App.js
// 3.5.1. 페이지 라우딩 하기
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
*/


/*
//2025-01-13
// App.js
// 3.6.1. 페이지 이동 구현하기
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
        <Link to={"/edit"}>Edit</Link>
      </div>
    </div>
  );
}

export default App;
*/


// App.js
// 4.2.1 URL 파라미터로 경로 설정하기
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App"> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary/:id"}>Diary</Link>
        <Link to={"/edit"}>Edit</Link>
      </div>
    </div>
  );
}

export default App;