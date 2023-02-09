// Promt 는 String 입력된다.
let mathScore = prompt("수학 점수를 입력하세요!");
let engScore = prompt("영어 점수를 입력하세요!");

engScore = Number(engScore);
mathScore = Number(mathScore);
console.log(mathScore);
console.log(engScore);

let avg = (mathScore + engScore) / 2;
console.log(avg);

var tetz = "lhs";
if (tetz == "lhs") {
  var tetz = true;
} else {
  var tetz = false;
}
