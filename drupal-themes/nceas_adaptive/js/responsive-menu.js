(function($) {

	var isMobile = function() {
		return $(window).width() < 768;
	}

	var isAnimated = false;

	var moveHeader = function() {
		var $menu = $('#nceas-menu')
		  , $header = $("#nceas-header")
		  , $branding = $('#branding .span_4');

		if(isMobile()) {
			$menu.after($header);
		} else {
			$branding.append($header);
		}
	};

	var quickNavAnimate = function() {
		var $hoverBox = $(".quickNav .hoverBox");

		if(isMobile()) {
			$hoverBox.unbind('mouseenter mouseleave');
			isAnimated = false;
		} else {
			if(isAnimated === false) {
				isAnimated = true;
				$hoverBox.hover(
					function(){
						if(!isMobile()) {
							$(".description", this).filter(':not(:animated)').animate({
						     	height:'210px'
						  	},200);
						}
					},
					function() {
						if(!isMobile()) {
							$(".description", this).animate({
						    	height:'0px'
							}, 300);
						}
					}
				);
			}
		}
	}

	$(window).resize(function() {
		//moveHeader();
		quickNavAnimate();
	});
	$(function() {
		//moveHeader();
		quickNavAnimate();
	});


}) (jQuery);