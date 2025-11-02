/*
//3장

1. Node.js 란?
- react는 Node.js 기반으로 작종하기 때문에, 간단히 알아보도록 하겠습니다. 



< 자바스크립트 >

- 자바스크립트는 웹 브라우저(자바스크립트 런타임)에 내장된 자바스크립트엔진에 의해 실행됩니다.



< Node.js >

- Node.js는 또 하나의 자바스크립트 런타임,

- 독립적인 자바스크립트 런타임: 어떤 환경에서도 자바스크립트를 실행가



( 게임과 게임기에 비유하자면 자바스크립트는 게임이고 Node.js는 게임을 구동하는 게임기에 비유할 수 있습니다. )









2. Node.js 환경 설정하기
(1) 윈도우 사용자 계정 이름 바꾸기: 영어이름이어야 한다. 

(2) Node.js 설치

https://nodejs.org/en/


Node.js — Run JavaScript Everywhere

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

nodejs.org



정상삭제









3. 비주얼 스튜디어 코드
(1) 비주얼 스튜디오 코드 설치하기

https://code.visualstudio.com/


Visual Studio Code - Code Editing. Redefined

Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications. Visual Studio Code is free and available on your favorite platform - Linux, macOS, and Windows.

code.visualstudio.com


(2) Node.js 자바스크립트 실행하기

c드라이브에 폴더 생성 -> 비주얼 스튜디오에서 생성 폴더 열기 -> 파일 생성 ( "sample.js"라는 이름으로 ) -> 코드 작성 -> Ctrl + s (파일 저장 단축키)-> Ctrl + J (터미널 열기) -> node "파일 이름".js (node sample.js)

























4. Node.js 패키지
- 복잡한 프로그램을 만들기 위해서는 여러 개의 자바스크립트 파일이 필요하다.

(  코드를 파일 하나에 모두 작성한다면 코드 길이가 너무 길어지기 때  ) 



- 일반적으로 복잡한 프로그램을 구현할 때는 기능별로 파일을 나누어 작성합니다.



- 패키지: Node.js에서 여러 개의 자바스크립트 파일을 실행하고 관리하는 일종의 관리 단위입니다.



- 하나의 프로젝트에서 여러 자바스크립트 파일을 Node.js를 이용해 실행할 때는 패키지(Package) 형태로 구성









(1) 패키지 만들기
- 패키지 단위로 여러 파일을 관리하려면 최상위 폴더인 ‘루트 폴더’가 필요



- npm: 패키지를 생성 및 관리



< 패키지 만들기 >

a. npm init: Node.js 패키지를 초기화하는 명령어

b.  패키지 이름을 입력 ( "CHAPTER3"로 설 ) 

c. 텍스트 입력하지 않고 모든 물음에 대해 <엔터> 키

d. " Is This OK?" 라는 문구에 "yes"입력

e. 패키지 이름 하위단위에 " package.json"이라는 파일이 생성확인



초기화된 패키지의 package.json에는 기본적으로 다음 항목들이 존재합니다.
name: 패키지 이름 
version: 패키지 버전 
description: 패키지 설명(보통 패키지로 구성한 프로그램의 목적을 작성) 
main: 패키지의 소스 코드 파일 중 메인 역할을 담당하는 소스 코드 파일 
scripts: 패키지를 쉽게 다루기 위해 지정한 매크로 명령어 
author: 패키지를 만든 사람 
license: 패키지의 라이선스




(2) 패키지 스크립트 사용하기
- Node.js 패키지의 package.json에는 scripts( 매크로 기능을 지원 )라는 항목이 있습니다.



< 코드 실행 >

a. 현재 패키지의 루트 폴더 아래에 index.js라는 파일을 생성

(CHAPTER3
  - index.js
  - package.json
  - sample.js)

b. 코드 실행

console.log("index run"); //index run


(터미널에서 파일을 실행하기 위해서는 새로 만든 파일의 경로를 입력 및 node ./index.js를 입력해야 합니다. : 너무 번거롭다)

-> 때문에, package.json의 scripts 항목을 수정하여 간단하게 명령을 내릴 수 있도록 하겠습니다. 



< scripts 항목 수정 및 사용>

a. package.json의 scripts 항목 수정

{
  (...)
  "scripts": {
  "start": "node index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
  },
  (...)
}


b. 간단한 코드 입력 (npm run start으로 index.js실행하기)

npm run start





















5. Node.js 모듈 시스템
(1) 모듈과 모듈 시스템

- 모듈: 독립적으로 존재하는 프로그램의 일부로 재사용이 가능한 것, 독립된 하나의 파



- 모듈 시스템: 모듈을 사용하는 방법





(2) ES 모듈 시스템

- ES 모듈 시스템 : ECMAScript 모듈 시스템의 약자, 



< ESM 사용 설정하기 >

- Node.js는 기본적으로  CJS 모듈 시스템을 사용 -> 따라서, package.json에서 설정을 변경 필요

{
  "name": "chapter3",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "type": "module" ①
}




< 개별 내보내기 >

- 자바 스크립트에서 모듈은 독립적이고 재사용이 가능하기 때문에, 다른 파일에서 불러와 사용할 수 있습니다.

- 다른 파일에 공유하기 전, 내보내는 공유 설정을 선행되어야 한다.



a. chapter3 루트 폴더에 circle.js 파일을 생성

b. 코드 입력

//circle.js

const PI = 3.141592; 

function getArea(radius) { 
  return PI * radius * radius;
}

function getCircumference(radius) {
  return 2 * PI * radius;
}




c. 내보내기 코드

//circle.js

export const PI = 3.141592;

export function getArea(radius) {
  return PI * radius * radius;
}

export function getCircumference(radius) {
  return 2 * PI * radius;
}




d. 한 번에 여러 값을 내보낼 때는 export를 다음과 같이 사용합니다.

//circle.js

const PI = 3.141592;

function getArea(radius) {
  return PI * radius * radius;
}

function getCircumference(radius) {
  return 2 * PI * radius;
}

export { PI, getArea, getCircumference };








< 개별 불러오기 >

- import , index.js파일에서

//index.js

import { PI, getArea, getCircumference } from "./circle.js";

console.log(PI, getArea(1), getCircumference(1));






< 전부 불러오기 >

- import * as A from B

//index.js

import * as circle from "./circle.js"; ①

console.log(circle.PI, circle.getArea(1), circle.getCircumference(1)); ②

// 출력 : 3.141592 3.141592 6.283184






< 기본값으로 내보내기 >

- export 키워드 다음에 default를 붙여 모듈의 기본값으로 내보낼 수 있습니다.

export default 10; // 모듈의 기본값










- 모듈에서 기본값으로 내보내면 다른 모듈이 이 값을 불러올 때 다른 이름을 붙여도 상관없습니다. ???

지금까지 export로 내보낸 값은 중괄호로 내보낸 이름과 동일한 이름으로 불러와야 했습니다. 반면 export default 명령으로 기본값으로 내보내면 자유롭게 이름을 지정해 불러올 수 있습니다.

import name from './some-module.js';








//circle.js

const PI = 3.141592;

function getArea(radius) {
  return PI * radius * radius;
}

function getCircumference(radius) {
  return 2 * PI * radius;
}
 
export default {
  PI,
  getArea,
  getCircumference,
};
//index.js

import circle from "./circle.js"; ①

console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));

// 출력 : 3.141592 3.141592 6.283184










6. 라이브러리 사용하기
- 외부 패키지(라이브러):  자신이 만든 Node.js 패키지를 서버에 올려 다른 사람도 사용할 수 있도록 배포한 파일입니다.



- 라이브러리는 프로그램을 개발할 때 공통으로 사용할 수 있는 기능들을 모아 모듈화한 것 ( 완전한 프로그램은 아니며 특정 기능만을 수행 )







(1) 라이브러리 설치하기 

- npmjs.com에는 전 세계 개발자들이 만든 라이브러리가 등록되어 있으며, 누구나 여기서 라이브러리를 탐색하고 설치할수 있습니다.

https://www.npmjs.com/


npm | Home

Bring the best of open source to you, your team, and your company Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of Java

www.npmjs.com


< lodash 라이브러리를 설치하고 사용 >

- [Readme] 탭은 라이브러리에 대한 설명, 사용 방법, 설치 방법 등에 대한 중요 정보를 제공 (설치 명령어 제공)

npm i lodash






(2) 라이브러리 설치 이후 패키지의 변화 

-
패키지 루트에 lodash 라이브러리를 저장하는 ‘node_modules’ 폴더가 생성됩니다. 
package.json에 lodash 라이브러리의 정보를 저장하는 dependencies 항목이 추 가됩니다.
패키지 루트 아래에 package-lock.json이라는 이름의 파일이 생성됩니다. 





a. node_modules: 패키지에 라이브러리를 설치 -> ‘node_modules’ 폴더가 생성 ( 라이브러리가 실제로 설치되는 곳)



b. package.json에 dependencies 항목이 추가 -> dependencies(의존) 항목에서는 이 패키지에 설치한 라이브러리의 이름과 버전이 표시되어 있습니다.  (dependencies: 추가 라이브러리라는 뜻)



c. package-lock.json: 패키지에 라이브러리를 설치 -> package-lock.json 파일이 자동으로 생성: 설치된 라이브러리의 버전을 정확히 밝히기 위해 존재하는 파일입니다.

(package.json의 dependencies에는 설치된 라이브러리의 정확한 버전이 아니라 버전의 범위(Version Range)만 있기때문)


d. 라이브러리 다시 설치하기

- node_modules 폴더: 용량이 너무 커서 이 폴더 제외 공

- npm install 명령을 수행: package.json과 package-lock.json에 있는 정보를 토대로 node_modules를 다시 만듭니다.



















(3) 라이브러리 사용하기

// index.js

import lodash from "lodash"; ①

const arr = [1, 1, 1, 2, 2, 1, 1, 4, 4, 3, 2];
const uniqueArr = lodash.uniqBy(arr); ②

console.log(uniqueArr);

// [1, 2, 4, 3]


- lodash는 uniqBy 메서드 외에도 배열과 객체를 위한 수많은 기능을 제공합니다.

*/

