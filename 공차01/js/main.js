$(function () {
    $('.visual_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
    });


    $('hashSlide').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,
        dots: true,
        pauseOnHover: false,
    });

    $('.hashSlide').slick({
        slidesToShow: 3,
    });


});