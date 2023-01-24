var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30, //슬라이드 사이 여백
    centeredSlides: true, //센터모드
    autoplay: {  //자동슬라이드
      delay: 4500,  //시간 설정
      disableOnInteraction: false,  //스와이프 후 자동 재생
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop :true,   // 슬라이드 반복 여부
    navigation: { //버튼
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect : 'fade', 
    fadeEffect: { 
    crossFade: true,
},
  });


  // totop
  const SCE_ELE = document.querySelectorAll('.active-event');
  window.addEventListener('scroll', () => {
      let sct = window.scrollY;
      SCE_ELE.forEach(el => {
          sct > el.offsetTop - 300
              ? el.classList.add('on')
              : el.classList.remove('on')
      })
  });

  document.querySelector('.to_top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
});


var swiper = new Swiper(".stillSwiper", {
    spaceBetween: 30, //슬라이드 사이 여백
    centeredSlides: true, //센터모드
   
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop :true,   // 슬라이드 반복 여부
    navigation: { //버튼
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  







  