<?php
class App_controller{
 
 function __construct(){
  
 }
 
 function home(){
    echo Views::instance()->render('model.html');
 }

 function __destruct(){

 } 
}
?>