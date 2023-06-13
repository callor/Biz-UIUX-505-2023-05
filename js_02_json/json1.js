const data1 = {
  num1: 100,
  num2: 200,
  name1: " 홍길동",
  dept: "정보통신과",
  학년: 3,
};
console.log(data1.name1);
const sum = data1.num1 + data1.num2;
console.log(sum);

// 이미 생성된 JSON 객체에 새로운 속성인 담당교수를 추가하고
// 담당교수 속성에 "이몽룡" 이라는 데이터를 저장하라
data1.담당교수 = "이몽룡";
console.table(data1);
