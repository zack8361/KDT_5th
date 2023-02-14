let select1 = document.querySelector(".orange");
console.log(select1);

let select2 = document.getElementById("skyblue");
console.log(select2);

let select3 = document.querySelector("ul>li:nth-child(2)");
select3.classList.add("orange");

if (select1.classList.contains("orange")) {
  select1.classList.remove("orange");
}
