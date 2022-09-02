var swiper = new Swiper(".mainVisual", {
    spaceBetween: 30,
    centeredSlides: true,
    effect: 'fade',
    autoplay: {
        delay: 2900,
        disableOnInteraction: false,


    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});




//work
const SCE_ELE = document.querySelectorAll('.Section_work');
window.addEventListener('scroll', () => {
    let sct = window.scrollY;
    SCE_ELE.forEach(el => {
        sct > el.offsetTop - 400
            ? el.classList.add('on')
            : el.classList.remove('on')
    })
});

// aw
var swiper = new Swiper(".mySwiperr", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
    },
});
var swiper = new Swiper(".mySwiperr", {
    slidesPerView: 3,
    spaceBetween: 40,


    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



