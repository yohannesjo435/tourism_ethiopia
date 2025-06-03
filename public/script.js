let slideIndex = 1;
let slides = document.getElementsByClassName("slide");
let nav = document.querySelector(".nav");
let hum = document.querySelector(".hum-menu")
showSlides(slideIndex)
slideShow() 

function plusSlide(n) {
  showSlides(slideIndex += n)
}

function showSlides(n){
  if (n > slides.length) {
    slideIndex = 1
  }  
  if (n < 1) {
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++){
    slides[i].style.display = "none"
  }
  
  slides[slideIndex -1].style.display = "block"
}

function slideShow() {
  if(slideIndex < slides.length){
    setInterval(()=> {
        slideIndex++
        showSlides(slideIndex)
    }, 4000)
  }
}

function toggleMenu() {
  if (nav.style.display === "none"){
    nav.style.display = "flex"
    hum.classList.add("open")
  }else {
    nav.style.display = "none"
    hum.classList.remove("open")
  }
  
}