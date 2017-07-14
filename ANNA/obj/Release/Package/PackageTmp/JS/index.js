$(document).ready(function () {
    setTimeout(function () {
        $(".main-title .rectangle").fadeIn(1000);
    }, 300);
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.main-title').fadeOut();
    }
    else {
        $('.main-title').fadeIn();
    }
});