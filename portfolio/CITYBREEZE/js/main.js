$(function () {
    //topBanner
    $('.topBanner i').on('click', function () {
        $('.topBanner').slideUp();
    });

    // mainslider
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



    // tap
    $('.tab_menu li').on('click', function (event) {
        event.preventDefault();
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

    // totop
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 500) {
            $('.toTop').fadeIn(300)
        } else {
            $('.toTop').fadeOut(1000)
        }
    });

    $(window).on('section02', function () {
        var sct = $(window).scrollTop();
        if (sct > 500) {
            $('.toTop').fadeIn(300)
        } else {
            $('.toTop').fadeOut(1000)
        }
    });

    $('.toTop').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 200)
    });

    //    ytb
    $('.service').YTPlayer({
        videoURL: 'https://www.youtube.com/embed/PCPlULDTteE',
        containment: '.video', autoPlay: true, mute: true, startAt: 3, opacity: 1, showControls: false, playOnlyIfVisible: true,
    })

})

// mopen
function mopen() {
    $(this).toggleClass('on');
    $('.gnb').toggleClass('on');
}

$('.mopen').on('click', mopen)

