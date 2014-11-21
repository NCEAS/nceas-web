/*
 * Include this JS on any page that has the jQueryUI accordion widget. Use in conjunction with the accordion html template.
 * 
 * uses jQueryUI 10.2
 * 
 * Author: Lauren Walker 08/22/2014
 * 
 * 
 */


jQuery( document ).ready(function( $ ) {

// Initialize the accordions with all sections closed
$( ".accordions" ).accordion({
		collapsible: true,
		heightStyle: content,
        active: false
   });

// Get the hash from the URL 
var hash = "";
if (window.location.hash != ""){ 
     hash = window.location.hash;
}
// If the URL has no hash, then use the ID of the very first accordion on the page 
else{
	// Take out this feature for now
    // hash = "#" + $( $(".ui-accordion-header")[0] ).attr("id");
}
// Get the accordion that contains the section with that ID
var hashItem = $(hash);
var containingAccordion =  $(hash).parent();
// Find the index num of that accordion section
var index = $(containingAccordion).find(".ui-accordion-header").index(hashItem);
// Now open that accordion section
$(containingAccordion).accordion("option", "active", index);
location.hash = hash;


// Initialize all the jQueryUI buttons
$( ".buttonLinks" ).button();

});