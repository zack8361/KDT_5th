// //첫번째 실습
// let date = new Date().getDay();
// if (date == 0) {
//   alert("일요일");
// } else if (date == 1) {
//   alert("월요일");
// } else if (date == 2) {
//   alert("화요일");
// } else if (date == 3) {
//   alert("수요일");
// } else if (date == 4) {
//   alert("목요일");
// } else if (date == 5) {
//   console.log("금요일");
// } else if (date == 6) {
//   alert("토요일");
// }

// //2번째 실습
// for (let i = 1; i <= 9; i++) {
//   console.log(`------${i} 단------`);
//   for (let j = 1; j <= 9; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// //3번째 실습
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0 || i % 5 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// //4번째 실습
// let i = 1;
// while (i < 10) {
//   let j = 1;
//   console.log(`------${i} 단-------`);
//   while (j < 10) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

//5번째 실습
let sum2 = 0;

for (let i = 1; i <= 1000; i++) {
  if (i % 2 == 1) {
    continue;
  }
  sum2 += i;
}
console.log(sum2);
