$(function () {
  

    $('.productSlider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        centerMode: true,
    });


    $('.product .productArrows i:nth-child(1)').on('click', function () {
        $('.productSlider').slick('slickPrev')
    });
    $('.product .productArrows i:nth-child(2)').on('click', function () {
        $('.productSlider').slick('slickNext')
    });


  



})