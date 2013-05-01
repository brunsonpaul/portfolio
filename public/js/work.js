function iniHeight() {
	var screenHeight = innerHeight;
	var screenWidth = innerWidth;
	var menuHeight = $("#menu").height();
	var workHeight = 245;
	var borderHeight =  (screenHeight - workHeight)/2;


	$("#work .post").css({
		"height" : workHeight + borderHeight,
	 	"border-top-width": borderHeight,
	 	"margin-top": -borderHeight,
	 });
	$("#work .post a").css({
		"height" : workHeight,
	 });
	$("#work .post:first-child").css({
	 	"height": screenHeight,
	 	"border-top-width": 0,
	 	"margin-top": 0,
	 });	
	$("#homeVideo video").css({
	 	"min-height": screenHeight,
	 });	
	$("#work .post:last-child").css({
		"height": 0,
		"border-top-width": 0,
		"margin-top": -0,
		"z-index":-1
	});
	$("#video-the-whole").css({
		"clip": "rect(0, "+screenWidth+"px, 245px,0)"
	});


	if($(document).scrollTop() < (workHeight-1)){ 
		document.getElementById("losange-logo").setAttribute('fill', "#111111");
		document.getElementById("k-logo").setAttribute('fill', "#111111");
		document.getElementById("l-logo").setAttribute('fill', "#111111");
	}
	else{ 
		document.getElementById("losange-logo").setAttribute('fill', "#fcfcfc");
		document.getElementById("k-logo").setAttribute('fill', "#fcfcfc");
		document.getElementById("l-logo").setAttribute('fill', "#fcfcfc");
	}

	if($(document).scrollTop() < (workHeight-1)){ 
		$("#prev").css({
	 		"height":0,
			"opacity":0,			
		});
	}
	if($(document).scrollTop() > (workHeight) && $(document).scrollTop() < (workHeight*2.5) ){
	 	$("#prev").css({
	 		"height": (screenHeight - workHeight)/2,
	 		"opacity":1,
		});
	}
	if($(document).scrollTop() > (workHeight*2.5) && $(document).scrollTop() < (workHeight*5.1) ){
	 	$("#prev").css({
	 		"opacity":0,
	 	 	"height": (screenHeight - workHeight)/2,
		});
	}
	if($(document).scrollTop() > (workHeight*5.1)){
		$("#prev").css({
			"height": (screenHeight/2),
		});
	}

	if($(document).scrollTop() < (1)){
		$("#next").css({
			"height": (screenHeight - menuHeight),
			"opacity":1,
			"z-index":9,
		});
	}
	if($(document).scrollTop() > (workHeight*1.5)){
		$("#next").css({
			"z-index":399,
		});
	}
	if( $(document).scrollTop() > (1) && $(document).scrollTop() < (workHeight*5.1)){
		$("#next").css({
			"height": (screenHeight - workHeight)/2,
			"opacity":0,
			"display": "block",
		});
	}
	if($(document).scrollTop() > (workHeight*5.1)){
		$("#next").css({
			"display": "none",
		});
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
				if (direction == 'next' && positions[i] > here) { scroll = collection.get(i); disable = collection.get(i-1); $(scroll).addClass("activeWork");$(disable).removeClass("activeWork"); break; }
				if (direction == 'prev' && i > 0 && positions[i] >= here) { scroll = collection.get(i-1); disable = collection.get(i); $(scroll).addClass("activeWork");$(disable).removeClass("activeWork"); break; }
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
			$(".post").removeClass("activeWork");
			$($(this).attr("href")).addClass("activeWork")
			$.scrollTo($($(this).attr("href")), {
				duration: 750
			});
			return false;
		});
}

function theWholeVideo (){
	if ($("#theWholeWork").hasClass("activeWork")){
		$("#video-the-whole video").get(0).currentTime = 0;
		$("#video-the-whole video").play();
		$("#video-the-whole video").css({
			"opacity": "1",
		});
	}
	else {

		$("#video-the-whole video").css({
			"opacity": "0",
		});	}
}