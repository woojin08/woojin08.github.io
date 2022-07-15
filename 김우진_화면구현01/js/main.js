$(function () {
    // 20220620 jin topBanner
    $('.topBanner i').on('click', function () {
        $('.topBanner').slideUp();
    });
    $('.mainSlider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('mainArrow i').removeClass('on');
        if (c === 1) {
            $('mainArrow i').addClass('on')
        }

        // if (c) {
        //     c = c + 1;

        // } else {
        //     c = 1
        // }
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

    // 유튜브 player




    $('#bgndVideo').YTPlayer({
        videoURL: 'https://youtu.be/PCPlULDTteE',
        containment: '.section02 .movie',
        autoPlay: true,
        showControls: false,
        mute: true,
        playOnlyIfVisible: true,

    });


    $('.movie i:nth-child(1)').on('click', function () {

        $('#bgndVideo').YTPPause();
    });
    $('.movie02 i:nth-child(2)').on('click', function () {

        $('#bgndVideo').YTPPlay();
    });
    $('.movie02 i:nth-child(3)').on('click', function () {

        $('#bgndVideo').YTPUnmute();
    });

})


