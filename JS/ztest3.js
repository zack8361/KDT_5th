//1)
let width = 5;
let height = 10;
let funcRec = (x, y) => {
  return (x * y) / 2;
};
console.log(funcRec(width, height));

//2)
let radius = 10;
let funcCir = (x) => {
  return 3.14 * x * x;
};
console.log(funcCir(radius));

//3)
let width2 = 5;
let height2 = 5;

let funPit = (x, y) => {
  return Math.floor(Math.sqrt(x ** 2 + y ** 2));
};
console.log(funPit(width2, height2));
