// 2025-01-13
/*
// src/component/Button.js
// 5.1.1 Button 컨포넌트 구현하기

import "./Button.css";

const Button = ({text, type, onClick }) => {
  return <button className="Butten">버튼</button>;
};
export default Button;
*/



/*
// src/component/Button.js
// 5.1.4 Props에 따라 다르게 동작하는 버튼 만들기
import "./Button.css";

const Button = ({text, type, onClick }) => {
  return (
    <button className="Button" onClick={onClick}>
        {text}
    </button>
  );
};
export default Button;
*/


// src/component/Button.js
// 5.1.5 Props에 따라 다른 스타일 적용하기
import "./Button.css";

const Button = ({ text, type, onClick }) => {
    // type이 'positive' 또는 'negative'일 때만 해당 타입을 사용하고, 그렇지 않으면 'default'로 설정
    const btnType = ['positive', 'negative'].includes(type) ? type : "default";
    
    return (
        <button 
            className={["Button", `Button_${btnType}`].join(" ")} 
            onClick={onClick}
        >
            {text}
        </button>
    );
};

// defaultProps를 통해 type을 'default'로 설정
Button.defaultProps = {
    type: "default",
};

export default Button;

