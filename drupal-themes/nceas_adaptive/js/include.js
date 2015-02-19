/*************************************
* Include.js
* A Javascript file that contains functions specific to the NCEAS website
* This file will be included in every page on NCEAS
*  
* Author: Lauren Walker laurennwalker@gmail.com
* 2015  
*************************************/

jQuery(window).load(function(){
	
	//Make sure the flexslider is loaded.... there is a bug in the Flexslider module
	var $ = jQuery;
	var slideshow = $(".flexslider");
	if(slideshow.length > 0) $(slideshow).flexslider();
	
	//Set up the listener for the Portal dropdown menu which will take the user to the link specified
	$("#portal-go").click(function(){
		//Find the select input from the form
		var link = $("#portal-go-form").val();
		window.location = link;
	});
	
});