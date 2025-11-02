
//< 개별 내보내기 >


/*
//b. 코드 입력
const PI = 3.141592; 

function getArea(radius) { 
  return PI * radius * radius;
}

function getCircumference(radius) {
  return 2 * PI * radius;
}
*/

/*
//c. 내보내기 코드
export const PI = 3.141592;

export function getArea(radius) {
  return PI * radius * radius;
}

export function getCircumference(radius) {
  return 2 * PI * radius;
}
*/

// d. 한 번에 여러 값을 내보낼 때는 export
/*
const PI = 3.141592;

function getArea(radius) {
  return PI * radius * radius;
}

function getCircumference(radius) {
  return 2 * PI * radius;
}

export { PI, getArea, getCircumference };

*/








//< 기본값으로 내보내기 >

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