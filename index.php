<!doctype html>
<html lang="fr">

<?php 
	define('Titre', 'LAGIER Kevin');
	require_once ("views/assets/head.php");
?>

<body>

<?php 
	define('Menu','<li><a href="/" class="selected" >Work</a></li><li><a href="resume" class="notSelected" >Resume</a></li><li><a href="about" class="notSelected" >About</a></li>');
	require ("views/assets/menu.php"); 
?>

<?php require_once ("views/assets/header.php"); ?>

<?php require_once ("views/assets/news.php"); ?>

<?php require_once ("views/assets/project.php"); ?>

<?php 
	define('Langage','<a href="#" class="selected">English</a> - <a href="#">Français</a>');
	require ("views/assets/footer.php"); 
?>

<?php require_once ("views/assets/script.php"); ?>
<script src="js/soSmooth.js"></script>
<script src="js/project.js"></script>
<!--

<div id="grid">

<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
<div class="span_1 col"></div>
</div>!-->
</body>
</html>

