(function ($) {
    "use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            autoplay: false,
            smartSpeed: 1000,
            nav: true,
            navText:["<i class='zmdi zmdi-arrow-left'></i>", "<i class='zmdi zmdi-arrow-right'></i>"]
        });
        $(".logo-carousel").owlCarousel({
            items: 6,
            margin: 30,
            loop: true,
            dots: false,
            nav: false,
            autoplay: true,
        });	

        $(".case-study-carousel").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            dots: true,
            nav: false,
            autoplay: false,
        });

        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            dots: true,
            nav: false,
            autoplay: true,
        });
        
        $(".video-play-btn").magnificPopup({
           type: 'video',
       });


    });


    jQuery(window).load(function(){


    });
    new WOW().init();

}(jQuery));	