$('.mainSlider').on('init afterChange', function (e, s, c) {
    var current = $('.slick-current');
    current.addClass('on').siblings().removeClass('on');
    $('mainArrow i').removeClass('on');
    if (c === 1) {
        $('mainArrow i').addClass('on')
    }

    $('.slideNum').text((c ? (c + 1) : 1) + " / " + s.slideCount);
});

$('.mainSlider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    pauseOnHover: false,
    pauseFocus: false,
});
$('.mainArrow i:nth-child(1)').on('click', function () {
    $('.mainSlider').slick('slickPrev')
});
$('.mainArrow i:nth-child(2)').on('click', function () {
    $('.mainSlider').slick('slickNext')
});