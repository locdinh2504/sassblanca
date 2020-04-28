$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#button").fadeIn();
      $("#callback").fadeIn();
    } else {
      $("#button").fadeOut();
      $("#callback").fadeOut();
    }
  });

  // scroll body to 0px on click
  $("#button").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  $("#button").tooltip("show");
});
