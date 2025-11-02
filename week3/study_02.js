//5. 구조 분해 할당

/*

//[5-1 배열의 구조 분해 할당]
let arr = [1, 2, 3];

// 01
let one_01 = arr[0];
let two_01 = arr[1];
let three_01 = arr[2];

console.log(one_01, two_01, three_01); // 1 2 3

// 02
let [one_02, two_02]= arr;
console.log(one_02, two_02); // 1 2 \n 배열의 길이과 변수의 개수가 달라도 오류 x


// 02-2
let arr_2= [1,2];

let [one_02_2, two_02_2,three_02_2]= arr_2;
console.log(one_02_2, two_02_2, three_02_2); // 1 2 undefined \n 배열의 길이를 초과하면 undefined할당 (오류의 주범)




//[5-2 객체의 구조 분해 할당]

let person = {
    name:"이정환",
    age: 21,
    location: "경기도"
}

let {name, age, location }= person;

console.log (name, age, location); //이정환 21 경기도 \n 객체 분해 할당에서는 key를 기준으로 합니다.




//[5-3 함수의 매개변수가 객체일 때 구조 분해 할당하기]

function calculate({name, age, location}){ //value를 매개변수로 구조분해 할당
    console.log(name, age, location); //이정환 21 경기도
}

let person = {
    name:"이정환",
    age: 21,
    location: "경기도"
}


calculate(person); 

*/
















/*

//6. 스프레드 연산자와 rest 매개변수

//[6-1-1 스프레드 연산자와 배열, 객체]

// 01
let arrA = [1,2,3];
let arrB = [...arrA, 4,5,6]; 
// ...arrA처럼 스프레드 연산자 기호가 변수 앞에 붙게 되면, 
//이 배열은 개별 요소로 분리되어 저장
let arrC = [arrA, 4,5,6];

console.log(arrB); //[ 1, 2, 3, 4, 5, 6 ]
console.log(arrC); //[ [ 1, 2, 3 ], 4, 5, 6 ]

//02 
let objA = {
    a:1,
    b:2
}

let objB = {
    ...objA,
    c:3,
    d:4
}

console.log(objB); //{ a: 1, b: 2, c: 3, d: 4 }
// \n objB는 objA의 a와 b 프로퍼티를 개별 요소로 포함



//[6-1-2 스프레드 연산자와 함수]
//함수 호출에서도 이용
function func(a, b, c) {
    console.log(a, b, c);
  }
  
  let arr = [1, 2, 3];
  func(...arr); // 1 2 3
// ...arr: 배열을 개별 요소로 분리 -> 인수로 3개의 값 전달



//[6-1-3 rest 매개변수]
// rest: 나머지 매개변수, '...'표기, 개별요소를 배열로 묶는다.

// 01 
function rest_01(...rest){
    console.log(rest);
}

rest_01(1,2,3,4); //[ 1, 2, 3, 4 ]

// 02 
function rest_02(param, ...rest){
    console.log(param); //1
    console.log(rest); //[ 2, 3, 4 ]
}

rest_02(1,2,3,4);


// 03 
function rest_03(...rest, param){
    console.log(param);
    console.log(rest);
}

rest_03(1,2,3,4); //오류

*/









//7. 배열과 메서드

//[7-1 요소으이 추가 및 삭제 메서드]
/*
//push는 배열 맨 끝에 요소를 추가하고 새로운 길이를 반환하는 메서드
let num = [1,2,3,4];
const newLength = num.push(5); //push 메서드를 호출 & 전달
console.log(newLength); // 5
console.log(num); //[ 1, 2, 3, 4, 5 ]  \n맨 끝에 요소 추가
*/

/*
//unshift는 배열 맨 앞에 요소를 추가하고, 새 배열의 길이를 반환
let num = [1,2,3,4];
const newLength = num.unshift(5); //push 메서드를 호출 & 전달
console.log(newLength); // 5
console.log(num); //[ 5, 1, 2, 3, 4 ] \n맨 앞에 요소 추가
*/

/*
//pop은 배열의 맨 끝 요소를 제거하고, 제거한 요소를 반환
let num = [1,2,3,4];
const removedItem = num.pop(); 
console.log(removedItem); // 4
console.log(num); //[ 1, 2, 3 ] \n맨 끝에 요소 삭제
*/

/*
//shift는 배열의 맨 앞 요소를 제거하고, 제거한 요소를 반환하는 메서드
let num = [1,2,3,4];
const removedItem = num.shift(); 
console.log(removedItem); // 1
console.log(num); //[ 2, 3, 4 ] \n맨 앞에 요소 삭제
*/

/*
//slice 메서드는 기존 배열에서 특정 범위를 잘라 새로운 배열을 반환
const arr = [1,2,3];
const sliced = arr.slice(0,2);
console.log(arr); //[ 1, 2, 3 ]
console.log(sliced);//[ 1, 2 ] \n arr.slice(start, end); (start ~ end-1)
*/
/*
//concat은 서로 다른 배열을 이어 붙여 새 배열을 반환하는 메서드
let arrA = [1,2];
let arrB = [3,4];
let arrD = {a:1, b:2};
let arrC = arrA.concat(arrB); 
let arrE = arrA.concat(arrD);
console.log(arrC); //[ 1, 2, 3, 4 ]
console.log(arrE); //[ 1, 2, { a: 1, b: 2 } ] \n 하나의 요소로 인식
*/




//[7-2 순환메서드] forEach
//forEach는 배열의 모든 요소에 순서대로 접근해 특정 동작을 수행하는 메서드
/*
function cb(item, index, array) {
  // 요소에 무언가를 할 수 있습니다.
}

arr.forEach(cb);
*/

/*
// 01
function cb(item, idx) {// ②
    console.log(`${idx}번째 요소: ${item}`);
  }
  
const arr = [1, 2, 3];
arr.forEach(cb); // ①
  
  // 0번째 요소: 1 
  // 1번째 요소: 2 
  // 2번째 요소: 3
*/

/*
// 02
const arr = [1, 2, 3];

arr.forEach((item, idx) => { 
  console.log(`${idx}번째 요소: ${item}`);
});

// 0번째 요소: 1
// 1번째 요소: 2
// 2번째 요소: 3
*/




//[7-3 탐색메서드]
/*
//indexOf는 배열에서 찾으려는 요소의 인덱스를 반환하는 메서드, 
//arr.indexOf(item, fromIndex); 
// 배열 arr에서 item을 fromIndex~끝 까지 찾고 제일 첫번째 인덱스 반환 

let arr = [1,3,5,7];
console.log(arr.indexOf(3,0)); //1

// 만약 찾으려는 요소가 배열에 없다면, 배열의 길이를 벗어난다면 -1을 반환
//객체 자료형은 값을 비교하는 것이 아닌 참좃값을 비교한다.
let arr_2 = [{name:"이정환"},2,3,4];
console.log(arr.indexOf({name:"이정환"})); //-1
*/




//includes 메서드는 배열에 특정 요소가 있는지 판별
/*
//arr.includes(item, fromIndex)
//인수로 전달한 요소가 배열에 존재하면 true, 그렇지 않으면 false를 반환

let arr = [1,2,3,4];
console.log(arr.includes(3)); //true
console.log(arr.includes(5)); //false
*/




//findIndex 메서드는 찾으려는 요소의 인덱스 번호를 찾아 반환
//arr.findIndex( callback(item, index, array) );
//콜백 함수를 전달 -> 배열에서 이 판별 함수를 만족하는 첫 번째 요소의 인덱스를 반환 (없다면 -1 반환)
/*
let arr = [1,3,5,6,7];
let index = arr.findIndex((item) => 
    item % 2===0 ? true : false
);
console.log(index); //3

let arr_02 = [
    { name: "이종원" },
    { name: "이정환" },
    { name: "신다민" },
    { name: "김효빈" }
];
  
let index_02 = arr_02.findIndex((item_02) => item_02.name === "이정환");
console.log(index_02); // 1
*/

//find 메서드는 인수로 판별 함수를 전달, 배열에서 이를 만족하는 요소를 찾고 반환
/*
let arr = [
    { name: "이종원" },
    { name: "이정환" },
    { name: "신다민" },
    { name: "김효빈" }
];
let element = arr.find((item) => item.name ==="이정환");
console.log(element); //{ name: '이정환' }
*/


//filter 메서드는 배열에서 조건을 만족하는 요소만 모아 새로운 배열로 반환하는 메서드
//arr.filter( callback(item, index, arr) );
/*
let arr = [
    { name: "이종원", hobby: "축구" },
    { name: "이정환", hobby: "영화" },
    { name: "신다민", hobby: "축구" },
    { name: "김효빈", hobby: "노래" }
  ];
let filteredArr = arr.filter(
    (item) => item.hobby ==="축구"
);
console.log(filteredArr); //[ { name: '이종원', hobby: '축구' }, { name: '신다민', hobby: '축구' } ]
*/



//[7-4 변형메서드]

//map은 함수 호출 결과를 모아 새 배열을 만들어 반환하는 메서드
//arr.map( callback(item, index, array) );
/*
let arr = [1,2,3,4];
let aee_2 = arr.map((item)=> item *2);
console.log(aee_2); //[ 2, 4, 6, 8 ]



let arr2 = [
    { name: "이종원", hobby: "축구" },
    { name: "이정환", hobby: "영화" },
    { name: "신다민", hobby: "축구" },
    { name: "김효빈", hobby: "노래" }
  ];
  
  let newArr2 = arr2.map((item) => item.name);
  
  console.log(newArr2); //[ '이종원', '이정환', '신다민', '김효빈' ]
*/




//sort는 배열의 요소를 정렬할 때 사용하는 메서드
//arr.sort( compare( a, b ) )
/*
let arr_e = ["b", "a", "c"];

arr_e.sort();

console.log(arr_e); // ["a", "b", "c"]


function compare(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }
  
  let arr = [10, 5, 3];
  arr.sort(compare);
  
  console.log(arr); // [3, 5, 10]
*/



//join 메서드는 배열 요소를 모두 연결해 하나의 문자열로 반환
//arr.join( separator )
/*
let arr = ["안녕", "나는", "이정환"];
console.log(arr.join()); // 안녕,나는,이정환
console.log(arr.join("-")); // 안녕-나는-이정환
*/



//reduce는 배열 요소를 모두 순회하면서 인수로 제공한 함수를 실행하고, 단 하나의 결괏값만 반환하는 메서드
//(map 메서드와 유사하지만 하나의 결과만을 반환한다는 차이가 있습니다.)
/*
arr.reduce( ( acc, item, index, array ) => {
  (...)
}, initial );
*/











































































































































































































