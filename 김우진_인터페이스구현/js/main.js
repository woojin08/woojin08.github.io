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

$('.mainSlider').on('init afterChange', function (e, s, c) {
    var current = $('.slick-current');
    current.addClass('on').siblings().removeClass('on');
    $('mainArrow i').removeClass('on');
    if (c === 1) {
        $('mainArrow i').addClass('on')
    }

    $('.slideNum').text((c ? (c + 1) : 1) + " / " + s.slideCount);
});