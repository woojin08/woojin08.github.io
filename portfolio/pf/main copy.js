

$(function () {
    var TXT = ['HOME', '01', '02', '03', '04', 'woojin portfolio', 'copyright']
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'footer'],
        //navigation: true,
        css3: false,
        afterLoad: function (page, num) {
            //애니메이션을 큐스텍에 담아서 딜레이 시킴...
            setTimeout(function () {
                $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            });
            $('.navBar li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(TXT[num - 1]);

            //부정연산자 사용
            num !== 1
                ? $('.Header').addClass('on')
                : $('.Header').removeClass('on')
        },
    });


    // $('.pf-right').slick({
    //     arrows: false,
    //     autoplay: true,
    //     //pauseOnHover: true,
    //     asNavFor: '.basicSlider',
    // });


    $('.productSlider .slide_menu li').on('click', function () {
        var idx = $(this).index();
        $('.basicSlider').slick('slickGoTo', idx)
    });

    $('.basicSlider').on('afterChange', function (e, s, c) {
        $('.productSlider .slide_menu li').eq(c).addClass('on').siblings().removeClass('on')
    });

    $('.allOpen').on('click', function () {
        $(this).toggleClass('on');
        $('.cover').toggleClass('on');
    })


    $('.cover').on('wheel', function (event) {
        event.preventDefault()
    })




})

$(document).ready(function () {

    //    pf 슬라이드 쇼
    $('.pf-right').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: false,
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 8600,
    });
    //      pf 슬라이드 애니메이션
    $(".slick-slide").removeClass("on");
    $(".slick-current").addClass("on");

    //    디자인 팝업 스크롤


});


