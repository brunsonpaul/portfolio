var navigation = {};
navigation.$links = $("#menu a");
var position = 0;
var transitionDuration = 500;

$.each(navigation.$links,function(){
	if($(this).hasClass("selected")){
		navigation.$activeLink = $(this);
	}
});

navigation.$menu = $("#menu nav ul");
navigation.isNavigating = false;
navigation.$links.live("click", function(){
	if(!navigation.isNavigating){
		navigation.isNavigating=true;
		navigation.navigateTo(this)
	};
	return false;
	});

navigation.navigateTo = function(el){
  	navigation.$activeLink.toggleClass("selected");
  	navigation.$activeLink = $(el);
  	navigation.$activeLink.toggleClass("selected");
  	var link = navigation.$activeLink.parent();
	var $moover = null;

	if(link.attr("class")=="next"){
		$moover = $(".previous");
	} else if(link.attr("class")=="previous") {
		$moover = $(".next");
	}

	$moover.animate(
		{"opacity":"0","width":"0%"}, transitionDuration, "linear",
		function() {
			if(link.attr("class")=="next"){
				$moover.insertAfter(link);
			} else if(link.attr("class")=="previous") {
				$moover.insertBefore(link);
			}
			$moover.animate({"opacity":"1","width":"33.3333%"},transitionDuration, "linear",
				function(){
					link.prev()[0].className = "previous";
					link.next()[0].className = "next";
					link[0].className = "current";
					navigation.isNavigating = false;
				}
			);
		}
	);

	var direction = link.attr("class");
	var from = null;
	var by = null;
	if(direction == "next"){
		from = "-100%";
		by = "100%";
	} else if(direction == "previous"){
		from="100%";
		by="-100%";
	}

}