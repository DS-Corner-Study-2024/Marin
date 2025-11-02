/*
1. 객체는 구조 분해 할당할 때 데이터 저장 순이 아니라 ( Key ) 순으로 저장된다.
2. 스프레드(spread) 연산자와 rest 매개변수 모두 ( ...  ) 기호로 표기된다.
3. ( shift ) 는 배열 맨 앞 요소를 제거하고, 제거한 요소를 반환하는 메서드이다.
4. ( forEach ) 는 배열의 모든 요소에 순서대로 접근해 특정 동작을 수행하는 메서드로, 함수를 인수로 사용한다.
5. join은  배열 요소를 모두 연결해서 하나의 문자열로 반환하는 메서드이다. 이때 분리 기호로 사용하는 ( 구분자  )를 인수로 전달하고 생략 시 (  ,  )로 출력된다.
6. getMonth 메서드의 경우는 (  0  )부터 ( 11  )까지 반환한다.
7. 프로미스 객체 생성 시 실행 함수는 두 개의 매개변수인 (  resolve  )와 (  reject  )를 제공받는다. 첫 번째는 성공 시 호출되며, 두 번째는 실패 시 호출된다.

*/



/*
문제 1. 
Date 객체를 활용하여 "2024. 9. 30. 오후 3 : 42 : 00" 을 출력하시오.
*/
let today = new Date("2024-9-30/15:42:00");
console.log(today.toLocaleString());


//1번 문제 정답: 
const today2 = new Date(2024, 8, 30, 15, 42, 0);
console.log(today2.toLocaleString());





/*
문제 2.
const products = [
    { name: "연습장", price: 1000 },
    { name: "껌", price: 500 },
    { name: "샤프", price: 1500 },
    { name: "사탕", price: 800 },
    { name: "주사위", price: 1200 }
];
다음과 같이 상품의 이름과 가격이 주어졌다. 가격을 기준으로 오름차순으로 정렬하고, 정렬된 상품 이름과 가격을 출력하시오. 

ex) 
껌: 500
사탕: 800
연습장: 1000
주사위: 1200
샤프: 1500
*/

const products = [
    { name: "연습장", price: 1000 },
    { name: "껌", price: 500 },
    { name: "샤프", price: 1500 },
    { name: "사탕", price: 800 },
    { name: "주사위", price: 1200 }
];


console.log(products[1]);

products.sort((a, b) => a.price - b.price); 
products.forEach ((product) => {
    console.log(`${product.name}번째 요소: ${product.price}`);
});









