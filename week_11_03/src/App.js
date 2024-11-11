/* 
import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;
*/






/*
// < App.js의 Header 컨포넌트 만들기 >

import "./App.css";

function Header() { //학수를 이용해서 App컨포넌트 밖에 만듦.
  return (
    <header>
      <h1>header</h1>
    </header>
  ); //HTML반환, 
}

function App() {
  return <div className="App"></div>;
}

export default App;
*/






/*
import "./App.css";

const Header = () => { //컴포넌트 대문자 시작해야한다. (소문자는 인식 X)-> HTML과 구분하기 위해
  return (
    <header>
      <h1>header</h1>
    </header>
  );
};

function App() {
  return <div className="App"></div>;
}

export default App;
*/










/*
import "./App.css";

const Header = () => { 
  return (
    <header>
      <h1>header</h1>
    </header>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}
export default App;



// 리액트 컴포넌트를 반환하는 HTML 태그는 닫는 태그를 반드시 표기해야 합니다. 이를 JSX의 닫힘 규칙이라고 합니다.
*/








/*
//< App.js >
//Header를 자식으로 배치한 App 컴포넌트

import "./App.css";

function App() {
  return (
    <div className="App">
      <header> //자식 컴포넌트 Header의 반환값과 동일한 HTML코드입니다.
        <h1>header</h1>
      </header>
    </div>
  );
}

export default App;
*/




/* 

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
*/











/* 
import "./App.css";
import Header from "./component/Header"; //Header.js에서 기본값으로 내보낸 Header 컴포넌트를 App.js로 불러옵니다.

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
*/










/*
import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App; 
*/











/* 

import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
*/


/*
import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function App() {
  const name = "이정환";
  return (
    <div className="App">
      <Header />
      <Body name={name} /> 
      <Footer />
    </div>
  );
}

export default App;

*/



import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";


/*
function App() {
  const name = "이정환";
  return (
    <div className="App">
      <Header />
      <Body name={name} location={"부천시"} />
      <Footer />
    </div>
  );
}

export default App;
*/







/*
function App() {
  const BodyProps = { 
    name: "이정환",
    location: "부천시",
  };

  return (
    <div className="App">
      <Header />
      <Body {...BodyProps} /> 
      <Footer />
    </div>
  );
}
export default App;
*/




/*
function App() {
  const BodyProps = {
    name: "이정환",
    location: "부천시",
    //favorList: ["파스타", "빵", "떡볶이"], 
  };

  return (
    <div className="App">
      <Header />
      <Body {...BodyProps} />
      <Footer />
    </div>
  );
}
export default App;
*/


function ChildComp() { 
  return <div>child component</div>;
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body>
        <ChildComp /> 
      </Body>
      <Footer />
    </div>
  );
}

export default App;




/*
function App() {
  const BodyProps = { 
    name: "이서진",
    studentnumber: "20230818",
  };

  return (
    <div className="App">
      <Header />
      <Body {...BodyProps} /> 
      <Footer />
    </div>
  );
}
export default App;

*/













