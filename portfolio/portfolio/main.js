

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

    // bubble

    jQuery(document).ready(function ($) {

        //effect positions.
        var bArray = [];
        //bubble sizes
        var sArray = [4, 6, 8, 10];

        // Push the header width values to bArray
        for (var i = 0; i < $('.bubbles').width(); i++) {
            bArray.push(i);
        }

        //시간
        function randomValue(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }

        // 
        setInterval(function () {

            // Get a random size, width and height
            var size = randomValue(sArray);
            // New bubble  size and left position 
            $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');

            //animations from the page
            $('.individual-bubble').animate({
                'bottom': '100%',
                'opacity': '-=0.7'
            }, 3000, function () {
                $(this).remove()
            }
            );


        }, 350);

    });

})



