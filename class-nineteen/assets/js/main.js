(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
        
        $(".client-testimonial-slider").owlCarousel({
            items: 3,
            margin: 30,
            autoplay: true,
            loop: true,
            nav: false,
            dots: true,
            
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	