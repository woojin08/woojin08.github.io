// totop
window.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        console.log(sct);
        sct > 170
            ? document.querySelector('.MenuList').classList.add('on')
            : document.querySelector('.MenuList').classList.remove('on')

        sct > 500
            ? document.querySelector('.to_top').classList.add('on')
            : document.querySelector('.to_top').classList.remove('on')
    });
});

// main swiper
window.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".MainVisual", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    // edit swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 40,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
