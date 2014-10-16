<script type="text/javascript">
//;(function($) {
jQuery( document ).ready(function( $ ) {
function getQueryString(query) {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  if(typeof query == "undefined"){
	  var query = window.location.search.substring(1);
  }
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    	// If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = pair[1];
    	// If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [ query_string[pair[0]], pair[1] ];
      query_string[pair[0]] = arr;
    	// If third or later entry with this name
    } else {
      query_string[pair[0]].push(pair[1]);
    }
  } 
    return query_string;
} 

//When page initially loads get the query string and display the subpages
var queryString = getQueryString();
if(typeof queryString.id != "undefined")
	displaySubPage(queryString.id);
else{
	//Display the default
	var subPages = $(".dynamic-sub-page");
	
	if(subPages.length > 0){
		//Display the first one by default
		//Get its ID
		var id = $(subPages[0]).attr("id");
		
		displaySubPage(id);
		
		//Make its corresponding menu item active
		var links = $(".dynamic-sub-menu a");
		for(var i=0; i<links.length; i++){
			var href = $(links[i]).attr("href"),
				href = href.substring(href.indexOf("?")+1);
			
			var idValue = getQueryString(href);
			if((typeof idValue.id != "undefined") && (idValue.id == id)){
				$(".dynamic-sub-menu").find("li").removeClass("active-sub-menu");
				$(links[i]).parent().addClass("active-sub-menu");
			}
		}
	}
}

$(".dynamic-sub-menu").find("a").on("click", function(e){
	e.preventDefault();
	
	//Get the current page name
	var page = window.location.pathname.substring(1);
	
	//Get the id
	var link = e.target;
	var href = $(link).attr("href");
	var search = href.substring(href.indexOf("?")+1);
	var linkQueryString = getQueryString(search);
	
	//Is this a link to a different page?
	if((href.indexOf(page) == -1) && ((typeof linkQueryString.id == "undefined") || !linkQueryString.id)){
		window.location = href;
	}
		
	//Display this subpage
	if(typeof linkQueryString.id != "undefined")
		displaySubPage(linkQueryString.id);
	
	$(".dynamic-sub-menu").find("li").removeClass("active-sub-menu");
	$(link).parent().addClass("active-sub-menu");	
});

function displaySubPage(id){
	$('.dynamic-sub-page').css("display", "none");
	
	
	//Display items with the id and class of that name, may be either one
	if(typeof id != "undefined"){
		$('#' + id).css("display", "block");
		$('.dynamic-sub-page.' + id).css("display", "block");
	}
}

function subPageExists(id){
	if(typeof id != "undefined"){
		if($('#' + id).length > 0) return true;
		else return false;
	}
}

});
//}) (jQuery);
</script>
