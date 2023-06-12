let num1 = 100;
let num2 = 200;

// JS 의 interpolation 에서는 변수 뿐만 아니라
// 직접 연산식을 사용할수 있다
console.log(`${num1} + ${num2} = ${num1 + num2}`);

num1 = "우리나라";
num2 = "대한민국";
console.log(`${num1} + ${num2} = ${num1 + num2}`);

// 함수 선언
function func1() {
  let num3 = 100;
  let num4 = 200;
  console.log(num3 + num4);
}
// 함수 호출
func1();

let num5 = 100;
let num6 = 200;
function func2() {
  console.log(num5 + num6);
}
func2();

/*
javascript 에서 변수를 선언하는 또댜른 키워드
var : 초기 JS 탄생시점에서 만들어진 키워드
var 를 사용하여 선언된 변수는 또다시 선언될수 있다

그외에도 scope 와 관련된 많은 issue 가 있다
따라서 현재의 js 코드에서는 
        var 키워드가 없다고 생각하자
*/

var num7 = 100;
var num8 = 200;

// let num6 = "대한민국";
// let num5 = "우리나라";

var num7 = "대한민국";
var num8 = "우리나라";

console.log(num7, num8);
