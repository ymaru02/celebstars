$(document).ready(function () {
  const img_list = [];

  for (let i = 1; i < 11; i++) {
    img_list.push(`picture${i}.jpg`);
  }

  for (let i = 1; i < img_list.length; i++) {
    let carouselinner = document.createElement("div");
    carouselinner.className = "inner";
    let img = document.createElement("img");
    img.className = "carousel-img";
    img.src = `/static/img/profile/user1/${img_list[i]}`;
    carouselinner.append(img);
    $(".center").append(carouselinner);
  }

  $(".center").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 100, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    prevArrow:
      "<button type='button' class='slick-prev slick-button'>Previous</button>", // 이전 화살표 모양 설정
    nextArrow:
      "<button type='button' class='slick-next slick-button'>Next</button>", // 다음 화살표 모양 설정
    variableWidth: true,
  });
});
