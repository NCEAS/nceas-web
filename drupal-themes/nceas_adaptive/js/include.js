/*************************************
* Include.js
* A Javascript file that contains functions specific to the NCEAS website
* This file will be included in every page on NCEAS
*  
* Author: Lauren Walker laurennwalker@gmail.com
* 2015  
*************************************/


// Check if a slider/slideshow is on this page and make sure it has started (i.e. all images are hidden).
jQuery(document).ready(function($) {

	(function startSlider(){
		$(window).load(function(){
			//Is there a slider on this page?
			var flexslider = $(".flexslider");
			if(!flexslider.length) return;
			
			var slides = $(flexslider).find("li");
			if(slides.length) $(slides[0]).addClass("flex-active-slide").css("opacity", 1);
		})
	}());

});