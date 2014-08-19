;(function($) {
if (window.location.hash != ""){
var hash = window.location.hash;
var hashfirst = window.location.hash;

}else{
var hash = false;
var hashfirst = 0;
}

	$( "#accordion" ).accordion({
		collapsible: true,
		autoHeight:false,
                active: hashfirst
    });

	$( "#accordion2" ).accordion({
		collapsible: true,
		autoHeight:false,
                active:hash
    });
	 
	$( "#accordion3" ).accordion({
		collapsible: true,
		autoHeight:false,
		active:hash
    });

	$( "#accordion4" ).accordion({
		collapsible: true,
		autoHeight:false,
		active:hash
    });

$( ".buttonLinks" ).button();

  }) (jQuery);