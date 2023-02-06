// 값 미할당 O
let let_i1;
console.log(let_i1);

//변수 선언,값 할당
let let_i2 = 10;
console.log(let_i2);

//값 재할당 O
let_i2 = 30;
console.log;

// let let_i2 = 30; -> 변수 재선언 불가능

//블록 안 참조 불가능.
if (true) {
  let let_i3 = 70;
}
