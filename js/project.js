$(document).ready(function(){
	changeImgProject();
	
	$(window).resize(function(){ 
		changeImgProject();
	})
});


function changeImgProject(){
	if (document.body.clientWidth < 1024){
		$("#big article figure a img")[0].setAttribute("src", "img/the-whole/project/the-whole-small-project.png");
	}
	if (document.body.clientWidth > 1024){
		$("#big article figure a img")[0].setAttribute("src", "img/the-whole/project/the-whole-big-project.png");
	}
}