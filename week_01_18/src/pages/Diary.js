//2025-01-13
/*
const Diary = () => {
    return <div> Diary 페이지 입니다. </div>
};
export default Diary;
*/

// src/pages/Diary.js
// 4.2.2 URL 파라미터 값 불러오기
import { useParams } from "react-router-dom";

const Diary = () => {
    const {id} = useParams();

    return (
        <div>
            <div> {id}번 일기 </div>
            <div> Diary 페이지 입니다. </div>
        </div>
    );
};
export default Diary;
