$(function () {

    var closeBanner = () => {
        $('.TopBanner').toggleClass('on');
        //$('.TopBanner').slideToggle();
        //document.querySelector('.TopBanner').classList.toggle('on')
    }
    $('.TopBanner i').on('click', closeBanner);

    $('.MainSlider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.ProductSlider').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1230,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    });

    //e.currentTarget

    function toggleClass() {
        $('.pop li').toggleClass('on');
        $('.Footer .popup').toggleClass('on');
    }

    $('.pop li').on('click', toggleClass);
    $('.popup i').on('click', toggleClass);

    function mopen() {
        $(this).toggleClass('on');
        $('.Gnb').toggleClass('on');
    }

    $('.mopen').on('click', mopen)

})