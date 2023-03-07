var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll("#navbar>ul>li>a").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");

}))


document.querySelectorAll('.card-btn').forEach(function(e) {
  e.addEventListener('click', function() {
      if (this.textContent == "Add+"){
        this.textContent = "Added"
          this.classList.toggle("active");
      }else{
        this.textContent = "Add+"
    this.classList.remove("active");
  }
  })
});



