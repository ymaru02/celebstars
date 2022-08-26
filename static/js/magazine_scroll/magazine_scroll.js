"use strict";

let imgs = document.querySelectorAll(".magazine_bg_img");
// 버튼 눌러 다음 페이지로 이동
const downBtn = document.querySelector(".button_down");
downBtn.addEventListener("click", scrollDetection);

function scrollDetection() {
	if (window.scrollY === 0) {
		window.scrollTo({ top: imgs[1].offsetTop, behavior: "smooth" });
	} else {
		for (let i = 0; i < imgs.length; i++) {
			if (window.scrollY >= imgs[i].offsetTop) {
				window.scrollTo({ top: imgs[i + 1].offsetTop, behavior: "smooth" });
			}
		}
	}
}

// 스크롤 하단 감지
window.addEventListener("scroll", function () {
	const scrollY = window.scrollY;
	const offsetHeight = document.body.offsetHeight * 12;
	const IS_END = scrollY >= offsetHeight - 150;
	const HIDDEN_CLASS = "magazine_hidden";

	if (IS_END) {
		downBtn.classList.add(HIDDEN_CLASS);
	} else {
		downBtn.classList.remove(HIDDEN_CLASS);
	}
});

$(".to_the_top").on("click", () => {
	window.scrollTo({ top: imgs[0].offsetTop, behavior: "smooth" });
});

// 아티스트 이름에 따라서 동적으로 타이틀 변경
const changeTitle = () => {
	let artistName = document.querySelector(".artist_name");
	document.title = artistName.innerText;
};
changeTitle();
