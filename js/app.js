let sear = document.querySelector("#search");
let body2 = document.querySelector(".bg");
let none = document.querySelector(".text-center");
let web = document.querySelector(".product-iframe");
let input = document.querySelector("#aer");
let dev1 = document.querySelector(".devise");
sear.addEventListener("click", function () {
  let inner = input.value;
  web.style.display = "block";
  console.log(inner);
  body2.setAttribute("class", "bg-dark");
  none.setAttribute("class", "d-none");
  web.setAttribute(`src`, `${inner}`);
});
function keybord(e) {
  if (e.key === "Enter") {
    let inner = input.value;
    web.style.display = "block";
    console.log(inner);
    body2.setAttribute("class", "bg-dark");
    none.setAttribute("class", "d-none");
    web.setAttribute(`src`, `${inner}`);
  }
}
document.addEventListener("keyup", keybord, false);
web.style.display = "none";
let devv = document.querySelector("#de1");
let dev = document.querySelector("#de2");
let dev5 = document.querySelector("#de3");
console.log(devv);
devv.addEventListener("click", function () {
  web.style.width = "1517px";
  web.style.height = "750px";
  devv.classList.add("bg-dark", "text-white");
  dev.classList.remove("bg-dark", "text-white");
  dev5.classList.remove("bg-dark", "text-white");
});
dev.addEventListener("click", function () {
  web.style.width = "768px";
  web.style.height = "750px";
  devv.classList.remove("bg-dark", "text-white");
  dev.classList.add("bg-dark", "text-white");
  dev5.classList.remove("bg-dark", "text-white");
});
dev5.addEventListener("click", function () {
  web.style.width = "480px";
  web.style.height = "750px";
  devv.classList.remove("bg-dark", "text-white");
  dev.classList.remove("bg-dark", "text-white");
  dev5.classList.add("bg-dark", "text-white");
});
