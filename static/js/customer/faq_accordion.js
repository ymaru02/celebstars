function accordionEvent(wrap) {
  let area = document.querySelectorAll(wrap);
  // forEach를 사용해 각각의 아코디언이 따로 동작하도록 설정
  area.forEach(function (faqArea) {
    // 아코디언 영역에 data-group의 값을 가져옴
    let hasGroup = faqArea.dataset["group"];
    let btn = faqArea.querySelector(".faq_btn");

    btn.addEventListener("click", function () {
      // 그룹이 있을 경우
      if (hasGroup === "faq") {
        // 그룹명을 가지고 있는 아코디언 영역 전부 선택
        let gAccordion = document.querySelectorAll(wrap + "[data-group='faq']");
        // 현재 아코디언 영역의 class이름이 .faq_desc인 영역을 가져옴
        let thisDesc = faqArea.querySelector(".faq_desc");
        // thisDesc.classList.length의 값이 1보다 크면 show 삭제
        if (thisDesc.classList.length > 1) {
          thisDesc.classList.remove("show");
          return;
        } else {
          // 아니라면 각각의 gAccordion의 show를 삭제
          gAccordion.forEach(function (group) {
            let groupContent = group.querySelector(".faq_desc");
            groupContent.classList.remove("show");
          });
          thisDesc.classList.add("show");
        }
      }
    });
  });
}

accordionEvent(".faq_accordion");
