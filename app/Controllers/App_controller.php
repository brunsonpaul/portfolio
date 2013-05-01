<?php
	class App_controller{
 
	function __construct(){

	}
 
	function page(){
		F3::set("page",F3::get("PARAMS.page"));
		if(F3::get('AJAX')){
			echo Views::instance()->render("Partials/".F3::get("page").".html");
		} else {
			echo Views::instance()->render("page.html");
		}
	}

	function work(){
    	echo Views::instance()->render('work.html');
	}

	function about(){
    	echo Views::instance()->render('about.html');
	}

	function contact(){
    	echo Views::instance()->render('contact.html');
	}

	function partech(){
    	echo Views::instance()->render('partech.html');
	}

 function __destruct(){

 } 
}
?>