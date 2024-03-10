let menuBtn = document.querySelector(".menu")
let  ulMenu = document.querySelector(".header ul")
let  menuAfter = document.querySelector(".header ul")
let link =document.querySelector(".half2 a");

menuBtn.onclick = function(){
ulMenu.classList.toggle("active");
menuBtn.classList.toggle("active");
}

if(localStorage.getItem("user") === null){
link.href="../login.html"
}
else{
    link.href="../election.html"
}


