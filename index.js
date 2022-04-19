var mobileBtn = document.querySelector("#mobile-cta");
var nav = document.querySelector("nav");
var mobileBtnExit = document.querySelector("#mobile-exit");

mobileBtn.addEventListener("click", function() {
    nav.classList.add("menu-btn");
})

mobileBtnExit.addEventListener("click", function() {
    nav.classList.remove("menu-btn");
})