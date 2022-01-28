$(document).ready(function () {
  AOS.init();
  $(".project .categories button").click((e) => {
    $(".project .categories button").removeClass("active");
    e.target.classList.add("active");
    $(this).addClass("active");
    let selector = $(e.target).data("filter");
    if (selector != "*") {
      selector = "." + selector;
    }
    console.log(selector);
    $(".project .grid").isotope({
      filter: selector,
    });

    return false;
  });

  //   magnify pop up

  $(".project-link").magnificPopup({
    type: "image",
    gallery: { enabled: true },
  });

  var header = $(".header").height() + 40;
  if ($(".header").length) {
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      if (scroll >= header) {
        $(".header .main-menu").addClass("ji-navbar_fixed");
      } else {
        $(".header .main-menu").removeClass("ji-navbar_fixed");
      }
    });
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#scroll").show();
    } else {
      $("#scroll").hide();
    }
  });
  $(".scroll").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
