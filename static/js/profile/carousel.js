$(document).ready(function () {
  $(".center").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 100, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    prevArrow:
      "<button type='button' class='slick-prev slick-button'>&#10094;</button>", // 이전 화살표 모양 설정
    nextArrow:
      "<button type='button' class='slick-next slick-button'>Next</button>", // 다음 화살표 모양 설정
    variableWidth: true,
  });
});
