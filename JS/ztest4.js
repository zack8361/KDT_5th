// // 1번째 실습
// /** ------------------나의 이름 추가 --------------- */
// const arr = ["박지원", "김민정", "송민영"];
// arr.push("이찬호");
// console.log(arr);
// /** ------------------나의 이름 빼기 --------------- */
// arr.pop();
// console.log(arr);
// /** ------------------ 맨 앞 이름넣기 --------------- */
// arr.unshift("이찬호");

// /**---------------- 전체 배열 출력-------------------- */
// for (let i = 0; i < arr.length; i++) {
//   console.log(
//     `${arr.length}번째 줄의 ${i} 번째 참여자의 이름은 ${arr[i]} 입니다`
//   );
// }

//3번째 실습
const kdtCurriculum = ["HTML", "CSS", "JS", "BACKEND", "REACT"];
const result1 = kdtCurriculum[0].split("").reverse().join("");
const result2 = kdtCurriculum[kdtCurriculum.length - 1]
  .split("")
  .reverse()
  .join("");

console.log(result1);
console.log(result2);

// //4번째 실습
// const pororo = {
//   name: "뽀로로",
//   age: 7,
// };
// console.log(`name : ${pororo.name}, age : ${pororo.age}`);
// pororo.gender = "남자";
// console.log(`성별 : ${pororo.gender}`);

// pororo.height = "180";
// console.log(`키 : ${pororo.height}`);
// delete pororo.height;
// console.log("------------------------삭제-----------------------");
// console.log(pororo);
// console.log(pororo.height);
// console.log("name" in pororo);
// console.log("height" in pororo);

// console.log("---------------------------------------------------");
// for (let key in pororo) {
//   console.log("key : " + key + ", value : " + pororo[key]);
// }

// const superman = {
//   name: "clark",
//   age: 33,
//   fly(message) {
//     console.log("하늘을 나는중" + message);
//   },
//   cute(message) {
//     console.log("뽀로로는 큐트" + message);
//   },
// };
// superman.fly("ㅇ.ㅇ");
// superman.cute("ㅇ.ㅇ");

// const showHeight = () => {
//   console.log(` hello ${this.height}`);
// };

// const pororo = {
//   height: 180,
//   name(message) {
//     console.log(`뽀로로의 이름은 : ${message}`);
//   },
//   showHeight,
// };
// pororo.showHeight();
// pororo.name("이찬호");
