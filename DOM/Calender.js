const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const select = document.querySelector("#content");

let targetEl;

// 클릭 된 요소를 저장하기 위한 전역 변수 let targetEl;
calendar.addEventListener("click", function (e) {
  if (e.target.tagName === "P") {
    console.log(e.target);

    targetEl = e.target;
    date.value = "2023년 2월 " + targetEl.innerText + "일";
  } else if (e.target.tagName === "DIV") {
    e.target.remove();
  }
});

function writeSchedule() {
  const div = document.createElement("div");
  div.innerHTML = select.value;
  targetEl.parentNode.append(div);
  select.value = "";
}
