/** 화살표 함수 */
//1)
let funcRec = (x, y) => {
  return (x * y) / 2;
};
console.log(funcRec(5, 10));

//2)
let funcCir = (x = 3) => {
  return 3.14 * x * x;
};
console.log(funcCir(10));
//3)

let funPit = (x, y) => {
  return Math.floor(Math.sqrt(x ** 2 + y ** 2));
};
console.log(funPit(4, 3));

/** 함수 선언문 */
//1). 삼각형 넓이
function Tri(x, y) {
  return (x * y) / 2;
}
console.log(Tri(10, 20));

//2. 원의 넓이
function Cir(x = 3) {
  return 3.14 * x * x;
}
console.log(Cir(10));

//3.피타고라스
function pytha(x, y) {
  return Math.sqrt(x ** 2 + y ** 2);
}
console.log(pytha(5, 5));
