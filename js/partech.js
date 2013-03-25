$(document).ready(function(){
	slideScreenSize();
	changeImgPartech();
	$("#screenSizeNext").live("click",function(){
		slider.next();
	});
	
	$("#screenSizePrev").live("click",function(){
		slider.prev();
	});


	$(window).resize(function(){ 
		changeImgPartech();
	})
});

function slideScreenSize(){
	$("#screenSizeImg1").click(function(){
		$("#screenSize ul li").removeClass();
		$(this).toggleClass("screenSizeActive");
		$("#screenSize").removeClass();
		$("#screenSize").toggleClass("screenSizeImg1");
		});
	$("#screenSizeImg2").click(function(){
		$("#screenSize ul li").removeClass();
		$(this).toggleClass("screenSizeActive");
		$("#screenSize").removeClass();
		$("#screenSize").toggleClass("screenSizeImg2");
		});
	$("#screenSizeImg3").click(function(){
		$("#screenSize ul li").removeClass();
		$(this).toggleClass("screenSizeActive");
		$("#screenSize").removeClass();
		$("#screenSize").toggleClass("screenSizeImg3");
		});
	$("#screenSizeImg4").click(function(){
		$("#screenSize ul li").removeClass();
		$(this).toggleClass("screenSizeActive");
		$("#screenSize").removeClass();
		$("#screenSize").toggleClass("screenSizeImg4");
		});
}

var slider = {};
slider.contents = ["screenSizeImg1","screenSizeImg2","screenSizeImg3","screenSizeImg4"]; // Class image slider;
slider.position = 0;
slider.element = $("#screenSize");
slider.change = function(){
		$("#screenSize ul li").removeClass();
		$("#screenSize ul li").toggleClass("screenSizeActive");
		$("#screenSize").removeClass();
		$("#screenSize").toggleClass(this.contents[this.position]);
}
slider.next = function(){
	this.position --;
	this.change();
}
slider.prev = function(){
	this.position ++;
	this.change();
}

function changeImgPartech(){
	if (document.body.clientWidth < 1199){
		$("#cinemaDisplayPartech")[0].setAttribute("src", "img/partech/work/cinema-display-main-partech-work.png");
	}
	if (document.body.clientWidth > 1200){
		$("#cinemaDisplayPartech")[0].setAttribute("src", "img/partech/work/cinema-display-drag-partech-work.png");
	}
}