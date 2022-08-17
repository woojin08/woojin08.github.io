$(function () {

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

    // main slider
    $('.mainSlider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseFocus: false,
        fade: true,
    });
    $('.mainArrow i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    });
    $('.mainArrow i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    });

    // 창업
    $('.chang-wrapper').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');

    });

    $('.chang-wrapper').slick({
        arrows: false,
        autoplay: true,
        dots: false,
        pauseOnHover: false,
        pauseFocus: false,

    });
    $('.coco i:nth-child(1)').on('click', function () {
        $('.chang-wrapper').slick('slickPrev')
    });
    $('.coco i:nth-child(2)').on('click', function () {
        $('.chang-wrapper').slick('slickNext')
    });
    $('.tutu :nth-child(1)').on('click', function () {
        $('.chang-wrapper').slick('slickPrev')
    });
    $('.tutu :nth-child(2)').on('click', function () {
        $('.chang-wrapper').slick('slickNext')
    });



    $(function () {
        var count0 = count1 = count2 = 0;

        timeCounter();

        function timeCounter() {

            id0 = setInterval(count0Fn, 1);

            function count0Fn() {
                count0++;
                if (count0 > 1124) {
                    clearInterval(id0);
                } else {
                    $(".number").eq(0).text(count0);
                }

            }

            id1 = setInterval(count1Fn, 1);

            function count1Fn() {
                count1++;
                if (count1 > 114) {
                    clearInterval(id1);
                } else {
                    $(".number").eq(1).text(count1);
                }
            }

            id2 = setInterval(count2Fn, 1);

            function count2Fn() {
                count2++;
                if (count2 > 114) {
                    clearInterval(id2);
                } else {
                    $(".number").eq(2).text(count2);
                }
            }
        }
    });


})

//   swiper
