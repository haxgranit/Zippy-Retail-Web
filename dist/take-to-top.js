$(() => {
  const offset = 320;
  const duration = 400;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('#take-to-top').fadeIn(duration);
    } else {
      $('#take-to-top').fadeOut(duration);
    }
  });
  $('#take-to-top').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  });
});