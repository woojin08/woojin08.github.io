// swiper main
var swiper = new Swiper(".mySwiper", {  //variable(변수) var=모든 변수 선언(중복,숫자,문자열 가능)
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
  crossFade: true, //그림자 이미지 진하게 드러오는것을 막음
},
});

// stillcup swiper
var swiper = new Swiper(".mdSwiper", {
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
  effect : 'fade', 
  fadeEffect: { 
  crossFade: true,
},
});


// totop

$(document).ready(function() {   //$(document).ready(function()=$(function()   모든 html 페이지가 화면에 뿌려지고 나서  ready안에 서술된 이벤트들이 동작준비를 하는것
  console.log($(this).scrollTop());  //console()안에 있는 것 출력 
  if ($(this).scrollTop() == 0) {   //scrollTop()은 선택한 요소의 스크롤바 수직 위치를 반환하거나 스크롤바 수직 위치를 정함
      $(".iconbutton").hide();
  }

  $(document).scroll(function() {
      if ($(this).scrollTop() > 0) {  //스크롤 높이가 0이상
          $(".iconbutton").show(); //만족하면 선택한 요소를 나타나게함
      } else {
          $(".iconbutton").hide(); //한족하지 않으면 선택한 요소를 순간적으로 사라지게함
      }
  })

  $(".iconbutton").click(function() {
      //                            바디 스크롤 제일 상위로 이동
      $("html,body").animate({
          scrollTop: 0             //위치,걸리는 시간
      }, 700)
  })

})



