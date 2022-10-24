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

    num = Number(num).toString();
    if (Number(num) < 10 && num.length == 1)
        num = "0" + num;
    songPgNow.html(num);
}

function songProcess() {
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
    songItem.each(function (index, count) {
        songPrev(true);
    });
}

function songLast() {
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


// main3
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
$('.mainArrow i:nth-child(1)').on('click', function () {
    $('.mainSlider').slick('slickPrev')
});
$('.mainArrow i:nth-child(2)').on('click', function () {
    $('.mainSlider').slick('slickNext')
});

$('.gnb .left').hover(function () {
    $('.gnb').addClass('hover')
    $('.smenu').addClass('on')
},
    () => {
        $('.gnb').removeClass('hover')
        $('.smenu').removeClass('on')
    })

$('.mainVisual').YTPlayer({
    videoURL: 'https://youtu.be/js1CtxSY38I',
    containment: '.video', autoPlay: true, mute: true, startAt: 3, opacity: 1, showControls: false, playOnlyIfVisible: true,
})



