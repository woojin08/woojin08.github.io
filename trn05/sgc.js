$(function () {

    var TXT = ['HOME', '01', '02', '03', '04', 'KIM,s portfolio']
    // fullpage
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'page06'],
        // navigation: true,
        css3: false,

        afterLoad: function (page, num) {
            // 첫 페이지에서는 안붙음
            setTimeout(() => {
                $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            });
            $('.Gnb li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(TXT[num - 1]);


            // 공,이미지 넘겨짐
            //         $('.this_bg').css({
            //             backgroundPositionY: - 100 * (num - 1) + "px"
            //         });
            //         $('.this_pic img').attr({
            //             src: `./assets/imges/lesedilarona0${num}.jpg`
            //         });

            //         $('this_tp').css({
            //             backgroundimage: `url(./assets/imges/lesedilarona0${num}.jpg)`
            //         })
        },
    });

    //     $('.page03').on('wheel', function (e) {
    //         console.log(e.originalEvent.wheelDelta);
    //         e.originalEvent.wheelDelta > 0 && fullpage_api.moveSlideLeft();
    //     })
})