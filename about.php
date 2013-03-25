<!doctype html>
<html lang="fr">

<?php 
	define('Titre', 'LAGIER Kevin');
	require_once ("views/assets/head.php");
?>

<body>

<?php 
	define('Menu','<li><a href="/" class="notSelected" >Work</a></li><li><a href="resume" class="notSelected" >Resume</a></li><li><a href="about" class="selected" >About</a></li>');
	require ("views/assets/menu.php"); 
?>

<section id="about">
	<article>
		<h1>I'm <em><span class="mostraNuovaRegular">LAGI<span class="mostraNuovaAltaRegular" >E</span>R</span> Kév<span class="mostraNuovaAltaLight" >i</span>n</em>, a <div class="age"><div><span>7 3 8 1 2</span><span>1 4 9 5 7</span></div></div> year old webdesigner from France.</h1>
		<p>
			I'm currently student at <a href="http://hetic.net" target="_blank" title="HETIC, l'école des métiers de l'internet">HETIC</a> : a webschool based in Paris. Combining Graphic design and Web development,<br/>
			I offer solutions for websites. I have also skills in Project Direction, UX Conception and Art Direction.<br/>
			I'm always aware and mindful of cultural and environmental change.
		</p>
		<h2>I can use</h2>
		<ul>
			<li>
				Code
				<div class="code">
					<span>
						<img src="img/about/html5-logo.png" alt="HTML 5" />	
						<img src="img/about/css3-logo.png" alt="CSS 3" />	
						<img src="img/about/js-logo.png" alt="JavaScript" />
					</span>
				</div>	
			</li>
			<li>
				Design
				<div class="design">
					<span>
						<img src="img/about/ps-logo.png" alt="Photoshop" />	
						<img src="img/about/ai-logo.png" alt="Illustrator" />	
						<img src="img/about/id-logo.png" alt="Indesign" />	
					</span>
				</div>
			</li>
			<li>
				Management
				<div class="management">
					<span>
						<img src="img/about/github-logo.png" alt="Github" />	
						<img src="img/about/trello-logo.png" alt="Trello" />
					</span>
				</dib>	
			</li>
		</ul>
	<article>
</section>

<?php 
	define('Langage','<a href="#" class="selected">English</a> - <a href="#">Français</a>');
	require ("views/assets/footer.php"); 
?>

<?php require_once ("views/assets/script.php"); ?>
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

