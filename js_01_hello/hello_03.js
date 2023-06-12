/*
JS 의 함수 호이스팅
고전적인 방법으로 JS 의 함수를 선언하면
실행되는 순간 함수의 위치를 재 배치한다


*/
func1();
// 고전적인 JS 함수 선언하기
function func1() {
  console.log("나는 func1 함수 입니다");
}

/*
ES5+ 이후의 JS 함수는 호이스팅이 일어나지 않는다
따라서 함수를 호출하기 전에
반드시 선언이 먼저 되어야 한다
*/
// ES5+ 에서 JS 함수 선언하기
const func2 = function () {
  console.log("나는 func2 함수 입니다");
};
func2();

// ES5+ 이후의 Arrow(화살표) 함수
const func3 = () => {
  console.log("나는 화살표 함수 입니다");
};
