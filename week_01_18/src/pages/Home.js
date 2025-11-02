//2025-01-13
/*
// src/pages/Home.js
const Home = () => {
    return <div> Home 페이지 입니다. </div>
};
export default Home;
*/

/*
// src/pages/Home.js
// 4.2.3 쿼리 스트링으로 값 불러오기
import { useSearchParams } from "react-router-dom";

const Home = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("sort"));
    return <div> Home 페이지 입니다. </div>
};
export default Home;
*/

/*
// src/pages/Home.js
// 5.1.3 Button의 동작을 확인하기 위해 임시로 Home페이지 렌더링
import Button from "../component/Button";

const Home = () => {
  return (
    <div>
      <Button />
    </ div>
  );
};
export default Home;
*/

/*
// src/pages/Home.js
// 5.1.4 Props에 따라 다르게 동작하는 버튼 만들기
import Button from "../component/Button";

const Home = () => {
  return (
    <div>
      <Button 
        text={"버튼 텍스트"}
        onClick={() => {
            alert("hi");
        }}
      />
    </ div>
  );
};
export default Home;
*/


// src/pages/Home.js
// 5.1.5 Props에 따라 다른 스타일 적용하기
import Button from "../component/Button";

const Home = () => {
  return (
    <div>
      <Button 
        text={"기본 버튼"}
        onClick={() => {
            alert("default button");
        }}
      />
      <Button 
        text={"긍정정 버튼"}
        onClick={() => {
            alert("positive button");
        }}
      />
      <Button 
        text={"부정정 버튼"}
        onClick={() => {
            alert("negative button");
        }}
      />
    </ div>
  );
};
export default Home;