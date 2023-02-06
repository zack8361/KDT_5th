// const i1; -> 값 미할당 불가능

const i1 = 10;
// i1 = 20; -> 값 재할당 불가능.
console.log(i1);

// 상수 재선언 불가능.
// const i2 = 20;

// const i2 = 30;

//블록안 참조 불가능 -> const 는 절대 상수이다.
if (true) {
  const i4 = 50;
}
console.log(i4);
