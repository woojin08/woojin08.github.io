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

    $('.mainSlider').on('init afterChange', function (e, s, c) {
        console.log(e, s, c);
        $('.mainVisual .box .num').text("0" + (c ? c + 1 : 1) + " / " + "0" + s.slideCount)
        $('.mainVisual .content>li').eq(c).addClass('on').siblings().removeClass('on')
    })

    // $('.btn_years a').on('click', function (event) {
    //     event.preventDefault();
    //     //console.log($(this), $(this).index(), event.target, event.currentTarget);
    //     $('.btn_years a').removeClass('on');
    //     $(this).addClass('on');
    //     var idx = $(this).index(); // 0,1,2
    //     $('.tab_content>div').removeClass('on');
    //     $('.tab_content>div').eq(idx).addClass('on');


    // });
    // $('.tab_content .notice li').on('click', function (event) {
    //     event.preventDefault();
    //     var idx = $(this).index(); // 0,1,2
    //     $('.right_content>li').removeClass('on');
    //     $('.right_content>li').eq(idx).addClass('on');
    //     console.log(ux)
    // });
    // $(".event-slider").slick({
    //     arrows: false,
    //     //autoplay:true,
    //     autoplaySpeed: 3000,
    //     pauseOnHover: false,
    //     infinite: true,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    // });

    var contentSlider01 = $(".content-slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        //centerMode: true,
        //variableWidth: true,
        //https://cubic-bezier.com/ 베지어 곡선 만들기
        //cssEase:"cubic-bezier(.69,-1.31,.74,1.17)",
        cssEase: "cubic-bezier(0,0,.58,1)",
    });
    var contentSlider02 = $(".content-slider01").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        pauseOnFocus: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 400,
        //centerMode: true,
        //variableWidth: true,
        //https://cubic-bezier.com/ 베지어 곡선 만들기
        //cssEase:"cubic-bezier(.69,-1.31,.74,1.17)",
        cssEase: "cubic-bezier(0,0,.58,1)",
    });

    var contentPrev = $("#content01 i.xi-angle-left-thin");
    var contentNext = $("#content01 i.xi-angle-right-thin");

    contentPrev.on("click", function () {
        contentSlider01.slick("slickPrev")
    });
    contentNext.on("click", function () {
        contentSlider01.slick("slickNext")
    });

    var contentItem = $(".content-slider figure");
    contentItem.eq(3).addClass("on")
    contentSlider01.on("afterChange", function (event, slick, current) {
        contentItem.eq(current + 3).addClass("on").siblings().removeClass("on");
    });


})

$(".event-slider").slick({
    arrows: false,
    //autoplay:true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
});

$(".event-slider").eq(0).slick("slickPlay");

//슬라이드 탭
$("#event li").on("click", function () {
    let idx = $(this).index();
    //console.log(idx);
    $(this).addClass("on").siblings().removeClass("on");
    $(".event-slider").eq(idx).addClass("on").siblings().removeClass("on");
    $(".event-slider").eq(idx).slick("slickPlay").siblings().slick("slickPause")
});

$(function () {
    var cnt0 = 0;

    counterFn();

    function counterFn() {

        id0 = setInterval(count0Fn, 1);

        function count0Fn() {
            cnt0++;
            if (cnt0 > 709) {
                clearInterval(id0);
            } else {
                $(".number").text(cnt0);
            }
        }
    }
});


