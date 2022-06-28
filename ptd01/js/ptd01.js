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

$('.productSlider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 5,
    centerMode: true,
});
$('.tab_menu li').on('click', function (event) {
    event.preventDefault();
    //console.log($(this), $(this).index(), event.target, event.currentTarget);
    $('.tab_menu li').removeClass('on');
    $(this).addClass('on');
    var idx = $(this).index(); // 0,1,2
    $('.tab_content>div').removeClass('on');
    $('.tab_content>div').eq(idx).addClass('on');


});

$('.tab_content .notice li').on('click', function (event) {
    event.preventDefault();
    var idx = $(this).index(); // 0,1,2
    $('.right_content>li').removeClass('on');
    $('.right_content>li').eq(idx).addClass('on');
    console.log(ux)
});


