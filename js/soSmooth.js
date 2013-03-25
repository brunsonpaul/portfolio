$(document).ready(function(){
	scrollProject();
	iniHeight();
	printProject();
	allProject();
	devProject();
	identityProject();

	$(window).resize(function(){ 
		iniHeight();
	})

	$(window).scroll(function(){
		iniHeight();
	})	


});


function iniHeight() {
	var screenHeight = innerHeight;
	var menuHeight = $("#menu").height();
	var newsHeight = 245;
	var borderHeight =  (screenHeight - newsHeight)/2 + menuHeight/2;

	$("header").css({
		"height": screenHeight - menuHeight*2,
	});
	$("#news .post").css({
		"height" : newsHeight + borderHeight,
	 	"border-top-width": borderHeight,
	 	"margin-top": -borderHeight,
	 });
	$("#news .post a").css({
		"height" : newsHeight,
	 });
	$("#news .post:first-child").css({
	 	"height": screenHeight - newsHeight/2,
	 	"border-top-width": 0,
	 	"margin-top": 0,
	 });	
	$("#news .post:last-child").css({
		"height": menuHeight,
		"border-top-width": 0,
		"margin-top": -menuHeight,
		"z-index":-1
	});
	$("#nav-dock a").css({
		"height": (screenHeight - menuHeight - newsHeight)/2,
	});
	if( $(document).scrollTop() > (screenHeight - (newsHeight*2) ) && $(document).scrollTop() < (screenHeight+newsHeight*2)){
		$("#prev").css("display","block");           
	}
	else{
		$("#prev").css("display","none");
	}
	if($(document).scrollTop() < (screenHeight+newsHeight*2)){
		$("#next").css("display","block");           
	}
	else{
		$("#next").css("display","none");
	}
}


function scrollProject (){

		var lastAnimation = 0;
		var animationTime = 500;
		var quietPeriod = 250;


		function scroll(direction) {
			var scroll, disable, i,
			positions = [],
			here = $(window).scrollTop(),
			collection = $('.post');
		
			collection.each(function() {
				positions.push(parseInt($(this).offset()['top'],10));
			});
		
			for(i = 0; i < positions.length; i++) {
				if (direction == 'next' && positions[i] > here) { scroll = collection.get(i); disable = collection.get(i-1); $(scroll).addClass("activeNews");$(disable).removeClass("activeNews"); break; }
				if (direction == 'prev' && i > 0 && positions[i] >= here) { scroll = collection.get(i-1); disable = collection.get(i); $(scroll).addClass("activeNews");$(disable).removeClass("activeNews"); break; }
			}
		
			if (scroll) {
				$.scrollTo(scroll, {
					duration: 750       
				});
			}
		   return false;
		}

		$("#next,#prev").click(function() {
			var timeNow = new Date().getTime();
			if(timeNow - lastAnimation < quietPeriod + animationTime) {
				event.preventDefault();
				return;
			}
			else { 
				lastAnimation = timeNow;
				return scroll($(this).attr('id')); 
			}       
		});


		$("body").mousewheel(function(event, delta, deltaX, deltaY) {
			var timeNow = new Date().getTime();
			deltaOfInterest = delta;
			
			if (deltaOfInterest == 0) {
				return;
			}
			if(timeNow - lastAnimation < quietPeriod + animationTime) {
				event.preventDefault();
				return;
			}
			
			if (deltaOfInterest < 0) {
				lastAnimation = timeNow;
				return scroll($("#next").attr('id'));
			}
			else {
				lastAnimation = timeNow;
				return scroll($("#prev").attr('id'));
			}
		});

		$(document).keydown(function(e){
			var timeNow = new Date().getTime();
			var keyCode = e.keyCode || e.which, arrow = {up:38, down:40};
			
			if(timeNow - lastAnimation < quietPeriod + animationTime) {
				event.preventDefault();
				return;
			}
			switch (keyCode) {
				case arrow.up:
					lastAnimation = timeNow;
					return scroll($("#prev").attr('id'));
					break;
				case arrow.down:
					lastAnimation = timeNow;
					return scroll($("#next").attr('id'));
					break;
			};
		});

		$(".scrolltoanchor").click(function() {
			$(".post").removeClass("actived");
			$($(this).attr("href")).addClass("actived")
			$.scrollTo($($(this).attr("href")), {
				duration: 750
			});
			return false;
		});
}


function printProject(){
	$("#printButton").click(function(){
		if ($(this).hasClass("notActived")) {
			$(this).removeClass('notActived');
			$(".printProject").removeClass('notActived');
			$("#allButton").addClass("notActived");
			$("#devButton").addClass("notActived");
			$("#identityButton").addClass("notActived");
			$(".devProject").addClass('notActived');
			$(".identityProject").addClass('notActived');
		}
		else {
			$(this).toggleClass('notActived');
			$("#allButton").removeClass("notActived");
			$(".devProject").removeClass('notActived');
			$(".identityProject").removeClass('notActived');
			}
	});
}

function devProject(){
	$("#devButton").click(function(){
		if ($(this).hasClass("notActived")) {
			$(this).removeClass('notActived');
			$(".devProject").removeClass('notActived');
			$("#allButton").addClass("notActived");
			$("#printButton").addClass("notActived");
			$("#identityButton").addClass("notActived");
			$(".printProject").addClass('notActived');
			$(".identityProject").addClass('notActived');
		}
		else {
			$(this).toggleClass('notActived');
			$("#allButton").removeClass("notActived");
			$(".printProject").removeClass('notActived');
			$(".identityProject").removeClass('notActived');
			}
	});
}

function identityProject(){
	$("#identityButton").click(function(){
		if ($(this).hasClass("notActived")) {
			$(this).removeClass('notActived');
			$(".identityProject").removeClass('notActived');
			$("#allButton").addClass("notActived");
			$("#devButton").addClass("notActived");
			$("#printButton").addClass("notActived");
			$(".devProject").addClass('notActived');
			$(".printProject").addClass('notActived');
		}
		else {
			$(this).toggleClass('notActived');
			$("#allButton").removeClass("notActived");
			$(".devProject").removeClass('notActived');
			$(".printProject").removeClass('notActived');
			}
	});
}

function allProject(){
	$("#allButton").click(function(){
		if ($(this).hasClass("notActived")) {
			$(this).removeClass('notActived');
			$("#printButton").addClass("notActived");
			$("#devButton").addClass("notActived");
			$("#identityButton").addClass("notActived");
			$(".printProject").removeClass('notActived');
			$(".devProject").removeClass('notActived');
			$(".identityProject").removeClass('notActived');
		}
	});
}



