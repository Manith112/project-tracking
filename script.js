const list = document.getElementById("list")
const burger = document.getElementById("burger")
const close = document.getElementById("close")

burger.addEventListener("click", function(){
    close.style.display = "flex"
    list.style.display = "flex"
    burger.style.display = "none"
})
close.addEventListener("click", function(){
    close.style.display = "none"
    list.style.display = "none"
    burger.style.display = "flex"
})