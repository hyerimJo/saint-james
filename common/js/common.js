$(function () {
  //변수 ht에 브라우저의 높이값을 저장
  var ht = $(window).height();
  //브라우저의 높이값을 section의 높이값으로 지정
  $("section").height(ht);

  //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
  $(window).on("resize", function () {
    var ht = $(window).height();
    $("section").height(ht);
  });

  /*header_pc*/
  var nav = $(".header_pc>.header_menu");
  var navoffset = $(".header_pc>.header_menu").offset();
  /* offset을 이용하여 .menu(메뉴영역)의 위치값을 알아내어 navoffset에 넣어둔다 */
  $(window).scroll(function () {
    if ($(this).scrollTop() >= navoffset.top) {
      /* 화면 스크롤 값이 메뉴영역의 top보다 값이 커지면 */
      nav
        .css("position", "fixed")
        .css("top", 0)
        .css("height", "45px")
        .css(
          "background",
          "rgba(255,255,255,0.7)"
        ); /* 화면 위쪽에 고정시킨다. */
    } else {
      nav
        .css("position", "absolute")
        .css("top", 100)
        .css(
          "background",
          "transparent"
        ); /* 처음 메뉴영역의 top 값으로 돌리기 */
    }
  });

  /* 스크롤 부드럽게 */
  $("nav a").click(function (e) {
    $.scrollTo(this.hash || 0, 300);
    e.preventDefault();
  });

  /*header_mt*/
  $(".mt_menubar").on("click", function () {
    $(".mt_nav").animate({ marginLeft: "50%" }, 500);
    $(".black_back").css("display", "block");
  });

  $(".nav_close,.black_back").on("click", function () {
    $(".mt_nav").animate({ marginLeft: "-50%" }, 500);
    $(".black_back").css("display", "none");
  });

  /*footer*/
  $(".f_open").on("click", function () {
    $(".footer").animate({ marginBottom: "500px" }, 500);
    $(".f_open img").attr("src", "");
  });

  $(".f_close").on("click", function () {
    $(".footer").animate({ marginBottom: "0px" }, 500);
    $(".f_open img").attr("src", "common/images/open.png");
  });
});
