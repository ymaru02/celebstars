function resisterEmailReg() {
  // 회원가입 정규식//

  //모든 공백 체크 정규식
  var empJ = /\s/g;
  //아이디 정규식
  var idJ = /^[a-z0-9]{4,12}$/;
  // 비밀번호 정규식
  var pwJ = /^[A-Za-z0-9]{4,12}$/;
  // 이름 정규식
  var nameJ = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;
  // 이메일 검사 정규식
  var mailJ =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  // 휴대폰 번호 정규식
  var phoneJ = /^01([0|1|6|7|8|9]?)?([0-9]{3,4})?([0-9]{4})$/;

  // 이메일 정규식
  if (mailJ.test($("#user_email").val())) {
    console.log(phoneJ.test($("#user_email").val()));
    $("#email_check").text("");
  } else {
    console.log("aaaaaaa");
    $("#email_check").text("이메일을 확인해주세요");
    $("#email_check").css("color", "red");
  }
}
// 비밀번호//

function resisterPwReg() {
  //모든 공백 체크 정규식
  var empJ = /\s/g;

  // 비밀번호 정규식
  var pwJ = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/;

  if (pwJ.test($("#user_pw").val())) {
    console.log(pwJ.test($("#user_pw").val()));
    $("#pw_check").text("");
  } else {
    console.log("aaaaaaa");
    $("#pw_check").text("숫자+문자+특수문자 조합한 8~12자리.");
    $("#pw_check").css("color", "red");
  }
}

function resisterPwReg2() {
  var pw1 = document.getElementById("user_pw"),
    pw2 = document.getElementById("user_pw2");

  if (pw1.value != pw2.value) {
    // console.log($("#user_pw").test($('#user_pw2').val()));
    $("#pw_check2").text("똑.같.이.입.력.하.세.요.");
    $("#pw_check2").css("color", "red");
  } else {
    $("#pw_check2").text("잘했어요, 똑같네요.");
    $("#pw_check2").css("color", "#FFC107");
  }
}

function resisterNameReg() {
  //모든 공백 체크 정규식
  var empJ = /\s/g;
  // 이름 정규식
  var nameJ = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{2,6}$/;

  if (nameJ.test($("#user_name").val())) {
    console.log(nameJ.test($("#user_name").val()));
    $("#name_check").text("");
  } else {
    console.log("aaaaaaa");
    $("#name_check").text("2글자 이상 한글,숫자,영문만 사용.");
    $("#name_check").css("color", "red");
  }
}

function resisterBirthReg() {
  // 생일 유효성 검사
  var birthJ = false;

  // 생년월일	birthJ 유효성 검사
  $("#user_birth").blur(function () {
    var dateStr = $(this).val();
    var year = Number(dateStr.substr(0, 4)); // 입력한 값의 0~4자리까지 (연)
    var month = Number(dateStr.substr(4, 2)); // 입력한 값의 4번째 자리부터 2자리 숫자 (월)
    var day = Number(dateStr.substr(6, 2)); // 입력한 값 6번째 자리부터 2자리 숫자 (일)
    var today = new Date(); // 날짜 변수 선언
    var yearNow = today.getFullYear(); // 올해 연도 가져옴

    if (dateStr.length <= 8) {
      // 연도의 경우 1900 보다 작거나 yearNow 보다 크다면 false를 반환합니다.
      if (1900 > year || year > yearNow) {
        $("#birth_check").text('"YYYY"를 확인해주세요 :)  ex_YYYYMMDD');
        $("#birth_check").css("color", "red");
      } else if (month < 1 || month > 12) {
        $("#birth_check").text('"MM"를 확인해주세요 :) ex_YYYYMMDD');
        $("#birth_check").css("color", "red");
      } else if (day < 1 || day > 31) {
        $("#birth_check").text('"DD"를 확인해주세요 :) ex_YYYYMMDD');
        $("#birth_check").css("color", "red");
      } else if (
        (month == 4 || month == 6 || month == 9 || month == 11) &&
        day == 31
      ) {
        $("#birth_check").text("생년월일을 확인해주세요 :) ex_19891029");
        $("#birth_check").css("color", "red");
      } else if (month == 2) {
        var isleap = year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);

        if (day > 29 || (day == 29 && !isleap)) {
          $("#birth_check").text("생년월일을 확인해주세요 :) ex_19891029");
          $("#birth_check").css("color", "red");
        } else {
          $("#birth_check").text("");
          birthJ = true;
        } //end of if (day>29 || (day==29 && !isleap))
      } else {
        $("#birth_check").text("");
        birthJ = true;
      } //end of if
    } else {
      //1.입력된 생년월일이 8자 초과할때 :  auth:false
      $("#birth_check").text("생년월일을 확인해주세요 :)");
      $("#birth_check").css("color", "red");
    }
  }); //End of method /*
}
function resisterNicknameReg() {
  //모든 공백 체크 정규식
  var empJ = /\s/g;
  // 이름 정규식
  var nameJ = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,6}$/;

  if (nameJ.test($("#user_nickname").val())) {
    console.log(nameJ.test($("#user_nickname").val()));
    $("#nickname_check").text("");
  } else {
    console.log("aaaaaaa");
    $("#nickname_check").text("두글자 이상 한글,숫자,영문만 사용.");
    $("#nickname_check").css("color", "red");
  }
}

// 우편번호 찾기 찾기 화면을 넣을 element
var element_wrap = document.getElementById("wrap");

function foldDaumPostcode() {
  // iframe을 넣은 element를 안보이게 한다.
  element_wrap.style.display = "none";
}

function sample3_execDaumPostcode() {
  // 현재 scroll 위치를 저장해놓는다.
  var currentScroll = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  );
  new daum.Postcode({
    oncomplete: function (data) {
      // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

      // 각 주소의 노출 규칙에 따라 주소를 조합한다.
      // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
      var addr = ""; // 주소 변수
      var extraAddr = ""; // 참고항목 변수

      //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === "R") {
        // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else {
        // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if (data.userSelectedType === "R") {
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraAddr +=
            extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddr !== "") {
          extraAddr = " (" + extraAddr + ")";
        }
        // 조합된 참고항목을 해당 필드에 넣는다.
        document.getElementById("sample3_extraAddress").value = extraAddr;
      } else {
        document.getElementById("sample3_extraAddress").value = "";
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      document.getElementById("sample3_postcode").value = data.zonecode;
      document.getElementById("sample3_address").value = addr;
      // 커서를 상세주소 필드로 이동한다.
      document.getElementById("sample3_detailAddress").focus();

      // iframe을 넣은 element를 안보이게 한다.
      // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
      element_wrap.style.display = "none";

      // 우편번호 찾기 화면이 보이기 이전으로 scroll 위치를 되돌린다.
      document.body.scrollTop = currentScroll;
    },
    // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
    onresize: function (size) {
      element_wrap.style.height = size.height + "px";
    },
    width: "100%",
    height: "100%",
  }).embed(element_wrap);

  // iframe을 넣은 element를 보이게 한다.
  element_wrap.style.display = "block";
}

/* 일반함수 */
const label = document.querySelector(".label");
const options = document.querySelectorAll(".optionItem");
// 클릭한 옵션의 텍스트를 라벨 안에 넣음
const handleSelect = function (item) {
  label.innerHTML = item.textContent;
  label.parentNode.classList.remove("active");
};
// 옵션 클릭시 클릭한 옵션을 넘김
options.forEach(function (option) {
  option.addEventListener("click", function () {
    handleSelect(option);
  });
});

// 전체 체크//
$(".checkbox_group").on("click", "#cbtest2", function () {
  $(this)
    .parents(".checkbox_group")
    .find("input")
    .prop("checked", $(this).is(":checked"));
});

// 체크박스 개별 선택
$(".checkbox_group").on("click", ".normal", function () {
  var is_checked = true;

  $(".checkbox_group .normal").each(function () {
    is_checked = is_checked && $(this).is(":checked");
  });

  $("#cbtest2").prop("checked", is_checked);
});
