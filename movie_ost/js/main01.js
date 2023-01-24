$(function () {
    // tap menu
    $('.tab-menu li').on('click', function (event) {
        event.preventDefault();
        $('.tab-menu li').removeClass('on');
        $(this).addClass('on');
        var idx = $(this).index(); // 0,1,2
        $('.tab-content>div').removeClass('on');
        $('.tab-content>div').eq(idx).addClass('on');


    });

    const SCE_ELE = document.querySelectorAll('.active-event');
    window.addEventListener('scroll', () => {
        let sct = window.scrollY;
        SCE_ELE.forEach(el => {
            sct > el.offsetTop - 300
                ? el.classList.add('on')
                : el.classList.remove('on')
        })
    });
  
    document.querySelector('.to-top').addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
  });


})
$(function () {
    // sub102 tap menu 02
    $('.tab-menu li').on('click', function (event) {
        event.preventDefault();
        $('.tab-menu li').removeClass('on');
        $(this).addClass('on');
        var idx = $(this).index(); // 0,1,2
        $('.ost-content>div').removeClass('on');
        $('.ost-content>div').eq(idx).addClass('on');


    });


})
