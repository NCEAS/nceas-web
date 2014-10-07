<script type="text/javascript">
;(function($) {
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

$(".dynamic-sub-menu").find("a").on("click", function(e){
	e.preventDefault();
	
	//Get the id
	var link = e.target;
	var href = $(link).attr("href");
	var search = href.substring(href.indexOf("?")+1);
	var linkQueryString = getQueryString(search);
		
	//Display this subpage
	if(typeof linkQueryString.id != "undefined")
		displaySubPage(linkQueryString.id);
	
	$(".dynamic-sub-menu").find("li").removeClass("active-sub-menu");
	$(link).parent().addClass("active-sub-menu");	
});

function displaySubPage(id){
	$('.dynamic-sub-page').css("display", "none");
	
	if(typeof id != "undefined"){
		$('#' + id).css("display", "block");
	}
}

}) (jQuery);
</script>
