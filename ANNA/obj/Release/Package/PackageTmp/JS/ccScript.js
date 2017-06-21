/* global screenReaderText */
/**
 * Theme functions file.
 *
 * Contains handlers for navigation and widget area.
 */


(function ($) {

    $(window).scroll(function () {
        $(".top").css("opacity", 1 - $(window).scrollTop() / 250);
    });

    $(document).ready(function () {
        $('#content').fadeIn(500);
    });

    //cc-writing animation

    $(document).ready(
        function () {

            $(".csRow5-col, .container").click(function () {
                $(this).parent().find('.cc-writing').show();
                $("#toggle + label, .message").hide();
            });
            $(document).on("click", " .cc-writing", function () {
                $(".cc-writing").hide();
                $("#toggle + label, .message").show();
            });

        });

    //cc-writing scroll fade
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.cc-writing').fadeOut(200);
            $("#toggle + label, .message").fadeIn(200);
        }
    });



    //stop sticky on touch 
    $(function () {
        if ($(window).width() > 1025) {
            $(".sticky").stick_in_parent({
                spacer: false,
                inner_scrolling: false,
                // offset_top: $(window).height() * 1,
                //bottoming: false
            });

        }
        else {
            $(".sticky").trigger("sticky_kit:detach");
        }
    });


    //stop skrollr working

    $(function () {
        // initialize skrollr if the window width is large enough
        if ($(window).width() > 1025) {
            skrollr.init({
                smoothScrolling: true,
                smoothScrollingDuration: 200,
            });
            // disable skrollr if using handheld device
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                skrollr.init().destroy();
            }
        }

        // disable skrollr if the window is resized below 768px wide
        /* $(window).on('resize', function () {
           if ($(window).width() <= 1024) {
             skrollr.init().destroy(); // skrollr.init() returns the singleton created above
           }
         });*/
    });

    $(function () {
        if ($(window).width() > 1025) {
            $(window).bind('resize', function () {
                location.reload();
            });
        }
    });

    //$(window).resize(function() {
    //     if($(window).width() < 1025)
    //            location.reload();
    //  });




    // top-menu slide in / out on scroll  
    /*$(function(){  
        var animated = false;
        var animating = false;
        $(window).scroll(scroll);
    
        function scroll(){
            if(!animating) {
                if ($(document).scrollTop() > 200) {
                        if(!animated){
                        animating = true;
                            $('#scrolltop').fadeIn();
                            $('#top-menu').animate({
                                    left: '0%'
                            }, {"duration":150,"complete":complete});
                            animated = true;
                        }
                } else if(animated){
                    animating = true;
                        $('#scrolltop').fadeOut();
                        $('#top-menu').animate({
                            left: -250
                        }, {"duration":150,"complete":complete} );
                        animated = false;
                }
            }
        }
    
        function complete(){
            animating = false;
            scroll();
        }
    });
     $(function () {
        if ($(document).scrollTop() > 200) {
    $('#top-menu').css("left", "0%");
    }
    });*/


    //scroll to main on writing click
    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a.top-section").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });

    //loop page test

    /* $('document').ready(function() {
       $(document).scroll(function(){
         if (document.documentElement.clientHeight + $(window).scrollTop() >= $(document).height()) {
           $(document).scrollTop(0);
         }
       });
     });*/
})(jQuery);
