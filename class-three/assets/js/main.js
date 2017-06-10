(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();
		$(".case-study-carousel").owlCarousel({
			items: 3,
			margin: 30,
			loop: true,
			dots: true,
			nav: false,
		});
		$(".testimonial-carousel").owlCarousel({
			items: 1,
			loop: true,
			dots: true,
			nav: false,
			autoplay: true,
			addClassActive: true,
			animateOut: 'slideOutDown',
			animateIn: 'rollIn',
		});



        


    });


    jQuery(window).load(function(){

        
    });
	new WOW().init();

}(jQuery));	