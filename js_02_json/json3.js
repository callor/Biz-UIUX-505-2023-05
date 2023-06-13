// JS 에서 AJAX 방식으로 BackEnd Server 로 부터
// 데이터를 받아오는 함수
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => console.log(json));
