(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            autoplay: true,
            nav: true,
            smartSpeed: 2000,
            navText: ["<i class='zmdi zmdi-arrow-left'></i>", "<i class='zmdi zmdi-arrow-right'></i>"]
        });
        $(".logo-carousel").owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            responsiveClass:true,
            responsive : {
                // breakpoint from 0 up
                768 : {
                    items: 4,
                },
                 992 : {
                    items: 5,
                }
                
            }
        });	

        $(".case-study-carousel").owlCarousel({
            margin: 30,
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
            responsiveClass:true,
            responsive : {

                0 : {
                    items: 1,
                },
                768 : {
                    items: 2,
                },

                992: {
                    items: 3,
                }
            }
        });

        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true
        });



        $(".menu-trigger").on('click', function () {
            $(".off-canvas-menu").addClass("show-offcanvas-area");
            $(".off-canvas-menu-overlay").addClass("active");
        });

        $(".menu-close, .off-canvas-menu-overlay").on('click', function () {
            $(".off-canvas-menu").removeClass("show-offcanvas-area");
            $(".off-canvas-menu-overlay").removeClass("active");


        });
        $(".single-testimonial-box").hover(function () {
            $(".single-testimonial-box").removeClass("active");
            $(this).addClass("active");
        });




        $(".video-play-btn").magnificPopup({
            type: 'video',
        });





    });


}(jQuery));	