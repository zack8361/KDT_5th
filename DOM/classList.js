const boxE1 = document.querySelector(".box");
boxE1.classList.add("orange");

const thirdBoxEl = document.getElementById("third");
thirdBoxEl.classList.remove("box");

console.log(boxE1.classList.contains("box"));
console.log(thirdBoxEl.classList.contains("box"));
