//calendar = 각자 날짜
//date = 날짜 박히는 input
//contents = 내용

const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const contents = document.querySelector("#content");

let bridge;
calendar.addEventListener("click", function (e) {
  if (e.target.tagName === "P") {
    bridge = e.target;
    date.value = "2023년 2월 " + bridge.innerText + "일";
  } else if (e.target.tagName === "DIV") {
    console.log(e.target);
    e.target.remove();
  }
});
function writeSchedule() {
  const div = document.createElement("div");
  div.innerText = contents.value;
  bridge.parentNode.append(div);
  contents.value = "";
}

let targetEl;
