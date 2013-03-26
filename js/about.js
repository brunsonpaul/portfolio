$(document).ready(function(){
	$(window).scroll(function(){		
		if($(document).scrollTop() > 200){
			$("#about ul").addClass("play");
		}
	})
});

