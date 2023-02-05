// 자바 스크립트 실행 순서.

function first() {
  second();
  console.log("1st");
}

function second() {
  third();
  console.log("2nd");
}
function third() {
  console.log("third");
}

first();
