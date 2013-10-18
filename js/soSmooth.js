$(document).ready(function(){

	headerCenter();
	paginationCenter();
	$(window).resize(headerCenter,paginationCenter);

	function headerCenter(){
		var headerHeight = $('#header-content').innerHeight();
		$("#header-content").css('margin-top',-headerHeight/2);
	};

	function paginationCenter(){
		var headerHeight = $('.onepage-pagination').innerHeight();
		$(".onepage-pagination ").css('margin-top',-headerHeight/2);
	};
});

			

