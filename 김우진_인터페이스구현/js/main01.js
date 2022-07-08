$(function () {
    $('.main_slider').slick({
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

});
$('.mainSlider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    pauseOnHover: false,
    pauseFocus: false,
});

$(function () {

    $('.main_slider').on('init afterChange', function (e, s, c) {
        console.log(e, s, c);
        $('.slide01 .box .num').text("0" + (c ? c + 1 : 1) + " / " + "0" + s.slideCount)
        $('.slide01 .content>li').eq(c).addClass('on').siblings().removeClass('on')
    })

    $('.main_slider').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '250px'
    });

    $('.slide01 .slide_arrows i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    });
    $('.slide01 .slide_arrows i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext')
    });


})