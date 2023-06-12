// console.log(nation);
/*
JS 변수의 호이스팅
var 키워드로 선언된 변수는 실행하는 과정에서
위치가 재 배치될수 있다
아래의 코드에서 num1 변수가 선언되기 전에
num1 변수값을 console.log() 로 출력을 하면
아직 값은 정의되지 않았지만 마치 변수가 이미
선언된 것처럼 코드가 작동한다
*/
console.log(num1);
var num1 = 100;
console.log(num1);

/*
아래 코드에서 
if() {} 블럭 이전에 선언된 num2 와
if() {} 블럭 내부에 선언된 num2 변수는
이름은 같지만 일반적인 프로그래밍 언어에서는
전혀 다른 변수로 취급된다
따라서 if() {} 내에서 num2 변수에 저장된 값은
if() {} 이 종료되면 사라지고
if() {} 이후에 num2 변수의 값은 200 이 되어야 한다
JS 에서 var 키워드로 선언된 변수는 그렇지 못하다
scope issue 라고 하며 매우 중요한 이슈이므로 
잘 살펴야 한다
*/
var num2 = 200;
if (num1 % 2 == 0) {
  var num2 = "대한민국";
  console.log(num2);
}
console.log(num2);

let nation1 = "대한민국";
let nation2 = "Korea";

/*
함수에서 함수 밖에서 선언된 변수 값을 변경하기
JS 의 권장 문법에서는 JS 함수 밖에서 선언된 변수를
함수내부에서 변경하지 말도록 한다
함수내부에서 외부 변수의 값을 사용하려면
"매개변수로 받아서 써라"
*/
const nation = () => {
  nation1 = "Republic of Korea";
};
console.log(nation1, nation2);
nation();
console.log(nation1, nation2);

/*
외부에서 nation 변수값을
매개변수로 전달받고,
함수 내부에서 사용하기(변경, 읽기)
함수 내부에서 변경한 변수 값은
외부로 전파되지 않는다
==> 순수함수 라고 한다
*/
const nationFunc = (nation) => {
  nation = "Republic of Korea";
};
nationFunc(nation2);
console.log(nation1, nation2);
