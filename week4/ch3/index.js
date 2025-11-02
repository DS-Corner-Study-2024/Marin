//console.log("index run"); //index run




//< 개별 불러오기 >
/*
import { PI, getArea, getCircumference } from "./circle.js";

console.log(PI, getArea(1), getCircumference(1));
*/




//전부 불러오기
/*
import * as circle from "./circle.js";

console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));

// 출력 : 3.141592 3.141592 6.283184
*/


import circle from "./circle.js";

console.log(circle.PI, circle.getArea(1), circle.getCircumference(1));

// 출력 : 3.141592 3.141592 6.283184