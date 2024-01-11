var countDownDate = new Date("Jan 10, 2024 15:37:25").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = 
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if(distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

ScrollReveal().reveal(".top-nav", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
});

ScrollReveal().reveal(".nav", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay: 100,
});

ScrollReveal().reveal(".header", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    delay: 200,
});

ScrollReveal().reveal(".section", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 1000,
    delay: 200,
});

ScrollReveal().reveal(".footer", {
    origin: "bottom",
    distance: "20px",
    opacity: 0,
    duration: 1000,
    delay: 200,
});

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () =>{
    nav.classList.toggle("mobile-nav-hide");
})