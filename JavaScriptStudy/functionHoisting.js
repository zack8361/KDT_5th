//함수 호이스팅 : 함수 선언전에도 호출가능..
console.log(add1(2, 3));

function add1(x, y) {
  return x + y;
}

//함수는 객체 : const,let으로 할당하여 호이스팅 방지

console.log(add2(1, 2));
// 함수를 const으로 선언 해주었기 때문에 호출 불가능.
const add2 = function (x, y) {
  return x + y;
};

const add3 = function (x, y) {
  return x + y;
};

console.log(add3(1, 2));
