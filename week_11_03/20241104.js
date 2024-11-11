/*
 1. 개발자들은 리액트를 (    ) 기반의 UI 라이브러리라고 소개한다.
2. (   )로 컴포넌트를 만드는 방식은 기본 설정 코드를 작성하는 등 (  )로 만드는 컴포넌트에 비해 단점이 많다.
3. 다른 컴포넌트를 return문 내부에 포함하는 컴포넌트를 (       ), return문에 포함된 컴포넌트를 (       )라고 한다.
4. 컴포넌트 트리에서 App은 항상 최상위에 존재하므로 이를 (       )라고 한다.
5. 자바스크립트와 HTML 태그를 섞어 사용하는 문법을 (   )라고 한다.
6. (      )이란 숫자로 표현되는 식을 말한다.
7. (      )에 해당되는 숫자, 문자열, 불리언, null, undefined를 제외한 값을 사용하면 오류가 발생한다.
8. JSX를 사용해 리액트 컴포넌트를 생성할 때 반드시 지켜야할 문법은 (     ),(         )이 있다. (책에 나온 것만)
9. Props는 (          )의 줄임말로 속성이라는 뜻이다.
10. Props는 (  )만이 (        )에 전달할 수 있다.

*/

/*
정답 

1. 개발자들은 리액트를 ( 컴포넌트 ) 기반의 UI 라이브러리라고 소개한다.
2. ( 클래스  )로 컴포넌트를 만드는 방식은 기본 설정 코드를 작성하는 등 ( 함수 )로 만드는 컴포넌트에 비해 단점이 많다.
3. 다른 컴포넌트를 return문 내부에 포함하는 컴포넌트를 ( 부모 컨포넌트  ), return문에 포함된 컴포넌트를 ( 자식컨포넌트 )라고 한다.
4. 컴포넌트 트리에서 App은 항상 최상위에 존재하므로 이를 ( 컴포넌트 트리 )라고 한다.
5. 자바스크립트와 HTML 태그를 섞어 사용하는 문법을 (  JSX  )라고 한다.
6. ( 산술표현식  )이란 숫자로 표현되는 식을 말한다.
7. ( 원시자료형  )에 해당되는 숫자, 문자열, 불리언, null, undefined를 제외한 값을 사용하면 오류가 발생한다.
8. JSX를 사용해 리액트 컴포넌트를 생성할 때 반드시 지켜야할 문법은 ( 닫힘규칙  ),(  최상위 태그 규칙 )이 있다. (책에 나온 것만)
9. Props는 ( Properties  )의 줄임말로 속성이라는 뜻이다.
10. Props는 ( 부모 )만이 ( 자식 )에 전달할 수 있다.
*/



// 문제 1) 인라인 스타일링을 사용하여 body의 백경색이 보라색, 글자색은 초록색이 되게 만드시오

/*
function Body() {
    return (
      <div style={{ backgroundColor: "purple", color: "green" }}> 
        <h1>body</h1>
      </div>
    );
  }
  export default Body;




// 문제2) 스프레드 연산자를 사용하여 자신의 이름(name)과 학번(studentnumber)을 출력하세요



import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

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


function Body({ name, studentnumber }) {
    console.log(name, studentnumber);
    return (
      <div className="body">
        {name}은 {studentnumber}입니다.
      </div>
    );
  }
*/