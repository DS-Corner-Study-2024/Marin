//빈칸 문제
/*


Quize
1. 프로그램에서 변수나 함수를 호출하거나 접근하는 코드가 함수 선언보다 위에 있음에도 불구하고, 마치 선언 코드가 위에 있는 것처럼 동작하는 기능을 ( 호이스팅 )이라고 한다.

2. 자바스크립트의 변수와 함수는 생성과 동시에 접근하거나 호출할 때 일정한 제약을 갖는데 이를 ( 스코프 )라고 한다.

3. 함수를 호출하면서 넘겨주는 '값'을 ( 인수 ), 함수에서 넘겨받은 인수를 저장하는 '변수'를 (  매개변수  )라고 한다.

4. 빈 배열을 생성할 때 객체 리터럴은 ( 중괄호 )를 배열 리터럴은 ( [] )를 이용한다.

5. ( 원시자료형 )은 하나의 값을 저장하지만 함수와 배열 같은 ( 객체자료형 )은 여러 개의 값을 저장한다.

6. 인덱스는 배열 요소의 위치를 (0 )부터 시작하는 숫자로 순서대로 표현한 것이다.

7. 객체 메서드인 ( Obiect.keys )는 객체 프로퍼티의 key를 배열로 반환한다.




*/



//1번 코드 문제
/*
function greet(name){
    console.log(name);
    return name;

}
const myNickname = greet("이서진");
console.log(`안녕 내 닉네임은 ${myNickname} 이야`);
*/


//2번 코드 문제

/*
let money = 12300;
let arr = [50000, 10000, 5000, 1000, 500, 100];


function Calculate(money){	
	for (let i=0; i<arr.length; i++) {
		let num = Math.floor(money/arr[i]);
                                            
        console.log(arr[i]+" X "+num);
        money = money - (arr[i]*num); 
    }
}
Calculate(12300);
*/






