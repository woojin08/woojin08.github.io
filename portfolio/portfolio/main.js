

$(function () {
    var TXT = ['HOME', '01', '02', '03', '04', '05', 'contact', 'copyright']
    $('.main').fullpage({
        anchors: ['HOME', 'page01', 'page02', 'page03', 'page04', 'page05', 'page06', 'contact'],
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

    // main effect

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleWindowResize);

    const spansSlow = document.querySelectorAll('.spanSlow');
    const spansFast = document.querySelectorAll('.spanFast');

    let width = window.innerWidth;

    function handleMouseMove(e) {
        let normalizedPosition = e.pageX / (width / 2) - 1;
        let speedSlow = 100 * normalizedPosition;
        let speedFast = 200 * normalizedPosition;
        spansSlow.forEach((span) => {
            span.style.transform = `translate(${speedSlow}px)`;
        });
        spansFast.forEach((span) => {
            span.style.transform = `translate(${speedFast}px)`
        })
    }
    //we need to recalculate width when the window is resized
    function handleWindowResize() {
        width = window.innerWidth;
    }


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


// The place I saw this effect:
// https://angle2.agency/

// Red Staper made a NICE tutorial about this effect! You should check it out!
// https://www.youtube.com/watch?v=LgiadQQM6mo&t=5s

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleWindowResize);

const spansSlow = document.querySelectorAll('.spanSlow');
const spansFast = document.querySelectorAll('.spanFast');

let width = window.innerWidth;

function handleMouseMove(e) {
    let normalizedPosition = e.pageX / (width / 2) - 1;
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span) => {
        span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
        span.style.transform = `translate(${speedFast}px)`
    })
}
//we need to recalculate width when the window is resized
function handleWindowResize() {
    width = window.innerWidth;
}
