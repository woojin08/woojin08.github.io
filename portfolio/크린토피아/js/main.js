$(function () {
    // ---------------------------------------
    let HD = $('.header')
    let depth02 = $('.MenuList_a')
    HD.on('mouseenter', function () {
        let sct = $(window).scrollTop();
        if (sct == 0) {
            if ($(window).width() >= 768) {
                $('.logo-w').hide();
                $('.logo-c').show();
            };
        };
        if ($(window).width() >= 768) {
            HD.addClass('active');
        };
    });
    HD.on('mouseleave', function () {
        let sct = $(window).scrollTop();
        if (sct == 0) {
            if ($(window).width() >= 768) {
                $('.logo-w').show();
                $('.logo-c').hide();
            };
        };
        if ($(window).width() >= 768) {
            HD.removeClass('active');
        };
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

    $('.mainSlider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseFocus: false,
        fade: true,
    });
    var swiper = new swiper('.swiper-wrapper', {
        cssMode: true,
        navigation: {
            nextEl: '.sch-up',
            prevEl: '.sch-down',
        },
        mousewheel: true,
        keyboard: true,
    });
})    