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
            navText: ["<i class='fa fa-arrow-left'></i>", "<i class='fa fa-arrow-right'></i>"]
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
                0: {
                    items: 3,
                }, 
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
            autoplay: false,
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

        $(".boxed-layout").on('click', function () {
            $("body").addClass("boxed-layout").removeClass("wide-layout");
            $(".layout-changer span").removeClass("active");
            $(this).addClass("active");
        });

        $(".wide-layout").on('click', function () {
            $("body").addClass("wide-layout").removeClass("boxed-layout");
            $(".layout-changer span").removeClass("active");
            $(this).addClass("active");
        });

         $(".search-trigger").on('click', function () {
            $(".search-bar-wrap").addClass("active");
        }); 

 

         $(".search-trigger").on('click', function () {
            $(".search-bar-wrap").addClass("active");
        }); 
        $(".search-close").on('click', function () {
             $(".search-bar-wrap").removeClass("active");
        });

        

        $(".menu-close, .off-canvas-menu-overlay").on('click', function () {
            $(".off-canvas-menu").removeClass("show-offcanvas-area");
            $(".off-canvas-menu-overlay").removeClass("active");
             $(".search-bar-wrap").removeClass("active");


        });
        $(".single-testimonial-box").hover(function () {
            $(".single-testimonial-box").removeClass("active");
            $(this).addClass("active");
        });

        $(".mobile-menu").slicknav({
            prependTo:'.slicknav-position',
            allowParentLinks: true,
        });


        $(".video-play-btn").magnificPopup({
            type: 'video',
        });





    });


}(jQuery));	