var navigation = {};
navigation.$links = $("#menu a");

var position = 0;

$.each(navigation.$links,function(){
	if($(this).hasClass("selected")){
		navigation.$activeLink = $(this);
	}
});

navigation.$menu = $("#menu nav ul");
navigation.$links.live("click", function(){navigation.navigateTo(this);return false;});

navigation.navigateTo = function(el){
  	navigation.$activeLink.toggleClass("selected");
  	navigation.$activeLink = $(el);
  	navigation.$activeLink.toggleClass("selected");

	navigation.switchLinks();
	
	jQuery.ajax({
	  url: $(el).attr('href'),
	  type: 'GET',
	  dataType: 'html',
	  success: function(data, textStatus, xhr) {
	  	var $container = $("#wrapper-container");
	    $container.empty();
	    $container.html(data);
	  }
	});	
}

navigation.switchLinks = function(param){

	var target = navigation.$activeLink.parent();
	target = target[0];
	var next = $(".next")[0];
	var previous = $(".previous")[0];
	if($(target).attr("class")=="next"){
		$(".previous").animate(
			{"opacity":"0","width":"0%"}, 1000, function() {
				$(".previous").insertAfter($(target));
				$(".previous").animate({"opacity":"1","width":"33%"},1000,function(){
					$(target).prev()[0].className = "previous";
					$(target).next()[0].className = "next";
					target.className = "current"
				});});
	} else if($(target).attr("class")=="previous"){
		$(".next").animate(
			{"opacity":"0","width":"0%"}, 1000, function() {
				$(".next").insertBefore($(target));
				$(".next").animate({"opacity":"1","width":"33%"},1000,function(){
					$(target).prev()[0].className = "previous";
					$(target).next()[0].className = "next";
					target.className = "current"
				});});
	}
}