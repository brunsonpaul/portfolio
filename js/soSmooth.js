$(document).ready(function(){

	headerCenter();
	socialCokeIntroCenter();
	$(window).resize(headerCenter,socialCokeIntroCenter);

	function headerCenter(){
		var headerHeight = $('#header-content').innerHeight();
		$("#header-content").css('margin-top',-headerHeight/2);
	};

	function socialCokeIntroCenter(){
		var headerHeight = $('#socialCokeIntro').innerHeight();
		$("#socialCokeIntro").css('margin-top',-headerHeight/2);
	};
});

			

