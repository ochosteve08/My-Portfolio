$(window).on("load", function () {
  setTimeout(function () {
    $("#preloader").fadeOut();
    $(".spinner-wrapper").delay(150).fadeOut("slow");
  }, 3000);
});


const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const btn = document.getElementById('menu-btn');



let dropdown =()=>{

    mobileMenu.classList.toggle("active");
    btn.classList.toggle('open');
    overlay.classList.toggle("active");
   
}

//hamburger menu dropdown
btn.addEventListener('click',(event)=>{
    event.stopPropagation();
    dropdown();
})


// hamburger menu closes on click outside of the menu
document.documentElement.addEventListener("click", function () {
  if (btn.classList.contains("open")) {
    dropdown();
  }
});