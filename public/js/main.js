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
navigation.$links.live("click", function(){if(!navigation.isNavigating){navigation.isNavigating=true;navigation.navigateTo(this)};return false;});

navigation.navigateTo = function(el){
  	navigation.$activeLink.toggleClass("selected");
  	navigation.$activeLink = $(el);
  	navigation.$activeLink.toggleClass("selected");
  	var link = navigation.$activeLink.parent();
	navigation.switchLinks(link);

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

	$("#wrapper-container").animate({"margin-left":from,"opacity":"0"},transitionDuration,function(){
		jQuery.ajax({
		  url: $(el).attr('href'),
		  type: 'GET',
		  dataType: 'html',
		  success: function(data, textStatus, xhr) {
		  	var $container = $("#wrapper-container");
		    $container.empty();
		    $container.html(data);
		    $("#wrapper-container").css({"margin-left":by,"opacity":"0"});
		    $("#wrapper-container").animate({"margin-left":"0%","opacity":"1"},transitionDuration);
		  }
		});	
	});
}

navigation.switchLinks = function($ulElem){

	var $moover = null;

	if($ulElem.attr("class")=="next"){
		$moover = $(".previous");
	} else if($ulElem.attr("class")=="previous") {
		$moover = $(".next");
	}

	$moover.animate(
		{"opacity":"0","width":"0%"}, transitionDuration, "linear",
		function() {
			if($ulElem.attr("class")=="next"){
				$moover.insertAfter($ulElem);
			} else if($ulElem.attr("class")=="previous") {
				$moover.insertBefore($ulElem);
			}
			$moover.animate({"opacity":"1","width":"33.3333%"},transitionDuration, "linear",
				function(){
					$ulElem.prev()[0].className = "previous";
					$ulElem.next()[0].className = "next";
					$ulElem[0].className = "current";
					navigation.isNavigating=false;
				}
			);
		}
	);
}