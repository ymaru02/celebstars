let banner_left = 0;
let img_cnt = 0;
let first = 1;
let last = null;
let interval = null;

const mouseHover = () => {
  $(".content").hover(
    () => {
      stopAction();
    },
    () => {
      startAction();
    }
  );
};

$(document).ready(function () {
  $(".rolling_wrap a").each(function () {
    $(this).css("left", banner_left);
    banner_left += $(this).find("img").width() + 10;
    $(this).attr("id", "content" + ++img_cnt);
  });
  last = img_cnt;
  startAction();
  mouseHover();
});

function startAction() {
  interval = setInterval(function () {
    $(".rolling_wrap a").each(function () {
      $(this).css("left", $(this).position().left - 1);
    });

    var first_content = $("#content" + first);
    var last_content = $("#content" + last);

    if (first_content.position().left < "-" + $(first_content).width()) {
      first_content.css(
        "left",
        last_content.position().left + last_content.width() + 5
      );
      first++;
      last++;
      if (last > img_cnt) {
        last = 1;
      }
      if (first > img_cnt) {
        first = 1;
      }
    }
  }, 20);
}

function stopAction() {
  clearInterval(interval);
}
