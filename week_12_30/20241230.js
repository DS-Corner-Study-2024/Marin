
/*
1. (key)는 리스트에서 각각의 컴포넌트를 구분하기 위해 사용하는 값이다.
2. (toLowerCase()) 메서드는 문자열에 있는 대문자를 모두 소문자로 바꿔준다.
3. (map)을 이용하면 HTML 또는 컴포넌트를 (순회)하면서 매 요소를 반복하여 렌더링한다.
4. “Props가 마치 땅을 파고 내려가는 것 같다”라고 하여 (Props Drilling) 이라고 한다.
5. 삼항 연산자를 이용하면 함수를 훨씬 (간결)하게 작성할 수 있다.
6. 아이템을 삭제할 때 CRUD의 (Delete) 기능을 이용할 수 있다.
7. 리액트 컴포넌트는 바로 한 단계 아래의 (자식 컴포넌트)에만 데이터를 전달할 수 있다.
*/

/*
1번 답
const AList = ({ id, list, fin, onCheck}) => {
   const onClickCheck = () => { 
          Check(id);
   };
}

2번 답
const BookList = ({ books, searchTerm }) => {
  const fBooks = () => {
   return searchTerm === ""
   ? books
   : books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()));
};
(생략)};
*/