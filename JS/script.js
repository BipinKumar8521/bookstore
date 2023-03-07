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


  // let Btn = document.querySelectorAll(".card-btn");
  // Btn.addEventListener("click", showMsg);
  //     function showMsg(e) {
  //       if (Btn.textContent == "Add+") {
  //         Btn.textContent = "Added";
  //         Btn.style.backgroundColor="green";
  //         Btn.style.color="white";
  //       } else {
  //         Btn.textContent = "Add+";
  //         Btn.style.backgroundColor="aliceblue";
  //         Btn.style.color="#0760e6";
  //     }
  //   }
  
  document.querySelectorAll('.card-btn').forEach(function(e) {
    e.addEventListener('click', function() {
        if (this.textContent == "Add+"){
          this.textContent = "Added"
            this.style.backgroundColor="green"
            this.style.color="white"
        }else{
          this.textContent = "Add+"
      this.style.backgroundColor = "aliceblue";
      this.style.color="#0760e6";
    }
    })
  });