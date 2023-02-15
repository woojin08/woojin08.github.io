//  const swiper = new Swiper( '.swiper', {
//     autoplay: true,
//     loop: true,
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   } );   

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

//11111
$(document).ready(function() {
  console.log($(this).scrollTop());
  if ($(this).scrollTop() == 0) {
      $(".iconbutton").hide();
  }

  $(document).scroll(function() {
      if ($(this).scrollTop() > 0) {
          $(".iconbutton").show();
      } else {
          $(".iconbutton").hide();
      }
  })

  $(".iconbutton").click(function() {
      //바디 스크롤 제일 상위로 이동
      $("html,body").animate({
          scrollTop: 0
      }, 700)
  })

})



// 2222
// $(window).scroll(function () {
//   var quickHeight=$(document).scrollTop(); //스크롤 높이가 500 이상이면 나타나기
//   if (500 <= quickHeight ) {
//     $('.ac-sub-go-top').css('display','block');
//    }else {
//      $('.ac-sub-go-top').css('display','none');
//    }
//  });

//  $('.ac-sub-go-top').click(function(){//위로가기 버튼을 클릭했을때
//    $('html, body').animate({
//      scrollTop: '0'
//    }, 800);
//  });
