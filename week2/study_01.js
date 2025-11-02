/* 
08장 함수

함수가 필요한 이유: 공통으로 사용하는 유사 코드를 하나로 묶어 ‘함수’라는 이름으로 사용, 중복 코드를 하나의 블록 단위로 묶을 수 있습니다. -> 더 간결하고 구조적인 프로그래밍이 가능하게 됩니다.
함수 선언: 함수 선언은 호출하면 바로 실행할 수 있도록 준비하는 작업
function 함수 이름 (매개변수) {
2  함수가 수행하는 명령
3}



함수 호출


greeting(); // <- greeting 함수 호출

함수의 인수와 매개변수
인수: 함수를 호출 하면서 넘겨주는 값
매개변수는: 함수에서 넘겨받은 인수를 저장하는 변수
(즉 인수는 ‘값’, 매개변수는 그 값을 저장할 ‘변수’)
함수 반환: 함수에서 값을 반환 하려면 return문을 사용합니다.
중첩 함수: 특정 함수 내부에서 선언된 함수
함수와 호이스팅: 호이스팅: 함수호출이 선언보다 위에 있지만 동작함
준비 단계에서 중첩 함수가 아닌 함수들은 모두 찾아 미리 생성해 둡니다.
함수 표현식: 함수를 생성하고 변수에 값으로 저장하는 방법
let greeting = function () {
2  console.log("hello");
3};
4
5greeting(); // hello
=> 함수이름은 선언하지 않음 (익명함수)


function greetFunc() {
2  console.log("hello");
3}
4
5greetFunc(); // hello
6
7let greeting = greetFunc; ①
8greeting(); // hello
함수 호출과 달리 소괄호를 명시하지 않습니다. + 호이스팅을 하지 못한다(값으로 인식하기 때문에)


콜백 함수: 함수는 다른 함수의 인수(인수=값)로도 전달할 수 있다.
function parentFunc(callBack) { // 매개변수 callBack에는 함수 childFunc이 저장됩니다
2  console.log("parent");
3  callBack();
4}
5
6function childFunc() {
7  console.log("child");
8}
9
10parentFunc(childFunc); // ①
11
12// 출력
13// parent
14// child





화살표 함수: 익명 함수를 매우 간결하게 작성할 때 사용하는 함수 표현식의 단축 문법

let funcA = (매개변수) => 반환값;

동일

let funcA = function (매개변수) {
  return 반환값;
};



let isConfirm = true;

function confirm(onYes, onNo) {
  if (isConfirm) onYes();
  else onNo();
}

confirm(
  () => console.log("승인"), // ①
  () => console.log("거부") // ②
);

// 승인






09장 스코프



스코프: 변수나 함수에 접근하거나 호출할 수 있는 범위
전역 변수, 전역, 지역 스코프: 코드 어디에서나 접근할 수 있다는 의미
지역 변수, 지역 스코프: 특정 영역（함수,반복문,조건문）에서만 해당 변수에 접근할 수 있다는 의미, 함수 내부에서만 접근할 수 있습니다.
변수의 스코프: 선언한 위치에 따라 자신에게 접근할 수 있는 범위가 결정
function foo() {
2  console.log("foo");
3  function bar() {
4    // ①
5    console.log("bar");
6  }
7}
8
9bar(); // ② bar는 정의되지 않았습니다.



for (let i = 1; i < 10; i++) {
2  function bar() {
3    console.log("bar");
4  }
5}
７bar(); // bar는 정의되지 않았습니다.






블록, 함수 스코프：
블록 스코프：중괄호로 둘러싸인 부분을 뜻하는 ‘블록(block)’, 블록을 기준으로 지역 스코프를 정한다.
함수 스코프： 함수를 기준, 
함수 스코프를 갖는다는 것은 함수 내부에서 선언한 변수만 지역 스코프를 갖는다는 의미 (함수가 아닌 조건문의 블록 내부에서 선언한 변수 a는 전역 스코프를 갖습니다.)


if (true) {
2  var a = 1;
3}
4
5console.log(a); // 1
var로 선언한 변수가 블록 스코프가 아닌 함수 스코프를 갖기 때문입니다.
(var은 함수 스코프라 혼란의 여지가 있다. 그래서 let, const많이 사)

function foo() {
2  var a = 1;
3}
4console.log(a); // ① 오류 : a는 정의되지 않았습니다.







10장 객체


<객체 생성과 프로퍼티>
객체 생성:리터럴 or 생성자

let objA = {}; ① // '객체 리터럴' 문법
let objB = new Object(); // '객체 생성자' 문법


프로퍼티: 속성이라는 뜻으로 객체를 설명하는 정보
key는 문자형을 사용하며 중복해 사용할 수 없습니다, key 이름으로 프로퍼티를 구별

let person = {
  name: "이정환",
  age: 25,
  "like cat": true ①
}



<객체 프로퍼티 다루기>
프로퍼티 접근: . or []

let person = {
  name: "이정환",
  age: 25,
  "like cat": true
};

const personName = person.name; // ① 점 표기법 
const personAge = person["age"]; // ② 괄호 표기법 

console.log(personName); // "이정환"
console.log(personAge); // 25



프로퍼티 추가

let person = {
  name: "이정환",
  age: 25,
  "like cat": true
};

person.gender = "male"; // ① 점 표기법을 이용한 프로퍼티 추가 
=>프로퍼티의 key가 고정적이라면
person["nickname"] = "winterlood"; // ② 괄호 표기법을 이용한 프로퍼티 추가 
=>key가 변수에 저장된 값처럼 유동적이라면

console.log(person.gender); // male
console.log(person["nickname"]); // winterlood



프로퍼티 수정: 점 표기법, 괄호 표기법 사
프로퍼티 삭제

delete cat.name;
delete cat["age"];




< 상수 객체의 프로퍼티 >
상수로 만든 객체도 객체 자체를 없애지 않는 한, 프로퍼티를 자유롭게 추가하거나 삭제, 수정할 수 있습니다.

< in 연산자>
객체에 존재하지 않는 프로퍼티에 접근하면, undefined를 반환합니다. 프로퍼티의 존재 여부를 확인할 수 있습니다.

let person = {
  age: 10
};

let isNameExist = "name" in person; // ①

console.log(isNameExist); // false




< 메서드 >
객체에서 값(value)이 함수인 프로퍼티, 메서드는 데이터가 아니라 객체의 동작을 정의합니다.

let person = {
  name: "이정환",
  sayHi: function () {
    console.log("안녕");
  }
};

person.sayHi(); // 안녕




11장 배열
배열은 순서가 있는 요소의 집합이자 여러 개의 항목을 담는 리스트

< 배열선언 >
빈배열

let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴


배열 리터럴: 배열을 생성하면서 값도 할당

let arr = [
  1,
  "1",
  true,
  null,
  undefined,
  () => {},
  function () {},
  [1, 2, 3],
  { a: 1 }
];





< 배열인덱스 >
인덱스란 배열 요소의 위치를 0부터 시작하는 숫자로 순서대로 표현한 것입니다.

let food = ["짜장면", "피자", "치킨"];

food[2] = "파스타"; // ①
food[3] = "레몬"; // ②

console.log(food); // ["짜장면", "피자", "파스타", "레몬"]
































3장


1. truthy&falsy

truthy & falsy 한 값
: 불리언 자료형의 참(true)이나 거짓(false)이 아닌 값도 상황에 따라 참, 거짓으로 평가하는 특징

falsy한 값이란 불리언 자료형의 거짓(false)은 아니지만 거짓과 같은 의미로 쓰이며, 조건식에서 거짓(false)으로 평가
undefined, null, 0, -0, NaN, "", 0n(0n은 BigInt 자료형의 값입니다. BigInt는 길이 제약 없이 정수를 다룰 수 있는 숫자 자료형 입니다.)

const num = "false";

if (num) {
  console.log("true");
} else {
  console.log("false");
}

// true


문자열 "false"는 불리언 자료형의 false가 아닙니다. 빈 문자열("")은 제외하고, 문자열은 그 자체로 truthy한 값이며 조건식에서 참(true)으로 평가합니다.





undefined나 null: ‘값이 비었다’, 조건문에서 특정 변수에 값이 있는지 없는지 확인할 때 (변수 varA는 선언만 하고 값을 할당하지 않았으므로 undefined 값)
변수 varA는 선언만 하고 값을 할당하지 않았으므로 undefined 값

const num = -0;

if (num) {
  console.log("양수이거나 음수입니다.");
} else {
  console.log("0이거나 -0이거나 NaN입니다.");
}

// 0이거나 -0이거나 NaN입니다.

_____________________________________

const str = "";

if (str) {
  console.log("공백 아님");
} else {
  console.log("공백임");
}

// 공백임



2. 단락 평가

단락 평가(Short-Circuit Evaluation) (‘지름길 평가’) : 논리 연산에서 첫 번째 피연산자의 값만으로 해당 식의 결과가 확실할때, 두 번째 값은 평가하지 않는 것

true || false: 첫 번째 피연산자의 값이 true, true
false && true: 첫 번째 피연산자의 값이 false,  false


AND 단락평가
첫 번째 피연산자 값이 false면, 단락 평가가 이루어지므로 두 번째 피연산자는 계산하지 않습니다.

function calcA() {
  console.log("a");
  return false;
}

function calcB() { // <- 호출되지 않음
  console.log("b");
  return true;
}

console.log(calcA() && calcB());

// a
// false



ㅡAND 단락 평가를 이용해 오류 방지하기

function getName(person) {
  return person && person.name;
}

let person = { name: "이정환" };
let name1 = getName(undefined);

let name2 = getName(null);
let name3 = getName(person);

console.log(name1);
console.log(name2);
console.log(name3);

// undefined
// null
// 이정환




OR 단락 평가

첫 번째 피연산자의 값이 true면, 단락 평가가 이루어져 두 번째 피연산자 값은 계산하지 않습니다.

function calcA() {
  console.log("a");
  return true;
}

function calcB() {
  console.log("b");
  return false;
}

console.log(calcA() || calcB());

// a
// true


ㅡ OR 단락 평가와 null 병합 연산자

const varA = 0;
const varB = "이정환";

const resultA = varA || varB; // ①
const resultB = varA ?? varB; // ②

console.log(resultA); // 이정환
console.log(resultB); // 0

① varA는 falsy한 값, varB는 truthy한 값이기 때문에 || 연산의 결과 varB의 값인 “이정환”을 resultA에 저장합니다. 
② varA와 varB에서 첫 번째로 확정된 값은 varA의 0입니다. 따라서 이 값을 resultB에 저장합니다.

null 병합 연산자는 값이 null이나 undefined가 아닌 피연산자를 찾습니다








3. 객체 자료형 자세히 살펴보기

배열과 함수가 객체인 이유


자바스트립트의 자료형은 크게 원시 자료형과 객체 자료형으로 구분. 자바스크립트의 원시 자료형을 제외한 모든 자료형은 객체 자료형 입니다. 따라서 논리적으로 배열과 함수 역시 객체 자료형입니다.

배열에는 일반 객체에 있는 프로퍼티와 메서드가 있습니다.

const arr1 = [1, 2, 3];
console.log(arr1.length); // ① 3

const arr2 = [1, 2, 3, 4];
console.log(arr2.length); // ② 4

//배열에 길이를 저장하는 length 프로퍼티



배열조작 메서드: push 메서드는 배열 마지막 요소 뒤에 값을 추가하는 메서드입니다.

const arr = [1, 2, 3];

arr.push(4);
console.log(arr); // [1, 2, 3, 4]




객체와 참조

원시 자료형은 하나의 값을 저장하지만 함수와 배열 같은 객체 자료형은 여러 개의 값을 저장합니다. 원시 자료형은 값을 크기가 일정한 공간에 저장합니다. 

 객체 자료형은 값이 동적으로 늘어나거나 줄어들기 때문에 일정한 크기의 공간에 저장할 수 없습니다. 객체 자료형은 값의 크기가 유동적으로 변하기 때문에 자바스크립트는 참조(Reference)라는 기능을 이용합니다. 참조란 실제로 값을 저장하는 것이 아니라 값을 저장한 곳의 주소만 저장하는 방식입니다.


객체는 컴퓨터의 메모리 어딘가에 저장되고,변수 person은 객체를 참조할 수 있는 주솟값을 저장합니다. 이 값을 참좃값이라고 합니다. 






ㅡ참조에 의한 비교



참조에 의한 비교: 객체 자료형을 비교할 때는 값이 아닌 참좃값을 비교

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 === arr2); // false

________________________________

let func1 = () => {
  console.log("func");
};

let func2 = () => {
  console.log("func");
};

console.log(func1 === func2); // false






4. 반복문 응용하기


배열과 반복문
웹 서비스 게시판이나 피드의 게시물 리스트를 생성할 때 반복문과 결합해 자주 사용합니다.

ㅡ인덱스를 이용한 순회
일반적으로

let arr = [1, 2, 3, 4];

for (let idx = 0; idx < 4; idx++) {
  console.log(arr[idx]);
}

// 1
// 2
// 3
// 4



그러나 자바스크립트의 배열은 저장 요소의 개수에 따라 길이가 자동으로 늘어나고 줄어드는 동적인 특징이 있기 때문에, 프로그램을 실행하는 과정에서 배열의 길이를 가늠 하기가 어렵습니다. 

let food = ["짜장면", "피자", "치킨"];

for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}

// 짜장면
// 피자
// 치킨



프로퍼티 length는 배열의 길이를 반환할 뿐, 마지막 인덱스 번호는 반환하지 않습니다. 반복문의 종료 조건은 i <= food.length가 아니라 i < food.length로 설정해야 합니다.



ㅡfor…of 문을 이용한 순회

let food = ["짜장면", "피자", "치킨"];

for (let item of food) {
  console.log(item);
}

// 짜장면
// 피자
// 치킨



객체와 반복문


ㅡObject.keys를 이용한 key 순회

let person = {
  name: "이정환",
  age: 25,
  location: "경기도"
};

const keyArr = Object.keys(person);

for (let key of keyArr) {
  let value = person[key]; ① Object.keys 메서드는 인수로 전달한 객체에서 프로퍼티의 key만을 배열로 반환합니다. 
  console.log(key, value);
}

// name 이정환
// age 25
// location 경기도



ㅡ Object.values를 이용한 value 순회

let person = {
  name: "이정환",
  age: 25,
  location: "경기도"
};

const valueArr = Object.values(person); ①

for (let value of valueArr) {
  console.log(value);
}

// 이정환
// 25
// 경기도




for...in 문을 이용한 순회


let person = {
  name: "이정환",
  age: 25,
  location: "경기도"
};

for (let key in person) {
  const value = person[key];
  console.log(key, value);
}

// name 이정환
// age 25
// location 경기도







*/