$(function () {
    $('header i').on('click', function () {
        $('.cover').toggleClass('on')
    });

    $('.cover a').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).parent().index();
        console.log(100 * idx + "%", $('.sticky').height());
        let h = $('.sticky').height();
        $('.cover').removeClass('on');
        $('html, body').animate({ scrollTop: idx * (h + 1) }, 1000)
    })
})


// song 슬라이드

var songSlider = $('.song-contents .slider-wrap'),
    songItem = songSlider.find('.slide'),
    songBtnPrev = songSlider.find('.btn.prev'),
    songBtnPrevFirst = songSlider.find('.btn.prev.first'),
    songBtnNext = songSlider.find('.btn.next'),
    songPgAll = songSlider.find('.all'),
    songProcessBar = songSlider.find('.process');
if (songItem.length < 10) {
    songPgAll.html("0" + songItem.length);
} else {
    songPgAll.html(songItem.length);
}

songItem.each(function (index, count) {
    songItem.eq(index).css('z-index', '-' + index).attr('data', index + 1);
});
function songNum() {
    var num = songSlider.find('.on').attr('data');
    var songPgNow = songSlider.find('.now');
    // songPgNow.html("0"+num);

    num = Number(num).toString();
    if (Number(num) < 10 && num.length == 1)
        num = "0" + num;
    songPgNow.html(num);
    // return num;
}

function songProcess() {
    // const target = songSlider.find('.process');
    songProcessBar.removeClass("on").removeClass('pause'),
        void songProcessBar.outerWidth(),
        songProcessBar.addClass("on");
}

$('body').on('click', '.first', function (e) {
    songLast();
});

function songFirst() {

    songBtnPrev.addClass('first');
    songProcess();
    // var item = $('.slide');
    songItem.each(function (index, count) {
        songPrev(true);
    });
}

function songLast() {
    // songItem.each(function (index, count) {
    //     for(var i = 1;i<index;i++){
    //         songNext(true);
    //     }
    // });
    var count = songItem.length - 1;
    for (var i = 0; i < count; i++) {
        songNext(true);
    }
}
let playing = true;
let lastNextCall = new Date();

function songPrev(force) {
    if (!playing) return;
    if ((force || !lastNextCall || new Date() - lastNextCall > 3000)) {
        var second = $("li.on").attr('data');
        // console.log(second)
        if (second == '1') {
            songBtnPrev.addClass('first');
        }
        songProcess();
        songSlider.find('.on').addClass('next').siblings().removeClass('next');
        songSlider.find('.on').prev().addClass('on').removeClass('prev').siblings().removeClass('on');
    }
}

function songNext(force) {

    songNum();
    if (!playing) return;
    if ((force || !lastNextCall || new Date() - lastNextCall > 3000)) {
        songBtnPrev.removeClass('first');
        songProcess();
        lastNextCall = new Date();
        var songLast = songSlider.find('.slide.on').next().length;
        if (songLast == '0') {
            songFirst();
            return;
        }
        songSlider.find('.on').addClass('prev').siblings().removeClass('next');
        songSlider.find('.on').next().addClass('on').siblings().removeClass('on');
    }
}
setInterval(songNext, 100);
songBtnNext.on('click', function () {
    songNext(true);
    songNum();
});
songBtnPrev.on('click', function () {
    songPrev(true);
    songNum();
});

songSlider.find('> ul').on('mouseover', function (e) {
    playing = false;
    lastNextCall = new Date();
    songProcessBar.addClass('pause');
});
songSlider.find('> ul').on('mouseout', function (e) {
    playing = true;
    lastNextCall = new Date();
    songProcess();
});

//content-slider
var contentSlider01 = $(".content-slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 400,
    //centerMode: true,
    //variableWidth: true,
    //https://cubic-bezier.com/ 베지어 곡선 만들기
    //cssEase:"cubic-bezier(.69,-1.31,.74,1.17)",
    cssEase: "cubic-bezier(0,0,.58,1)",
});

var contentPrev = $("artist-wrap i.xi-angle-left");
var contentNext = $("artist-wrap i.xi-angle-right");

contentPrev.on("click", function () {
    artist - wrap.slick("slickPrev")
});
contentNext.on("click", function () {
    artist - wrap.slick("slickNext")
});

var contentItem = $(".content-slider figure");
contentItem.eq(3).addClass("on")
contentSlider01.on("afterChange", function (event, slick, current) {
    contentItem.eq(current + 3).addClass("on").siblings().removeClass("on");
});

