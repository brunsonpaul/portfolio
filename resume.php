<!doctype html>
<html lang="fr">

<?php 
	define('Titre', 'LAGIER Kevin');
	require_once ("views/assets/head.php");
?>

<body>

<?php 
	define('Menu','<li><a href="/" class="notSelected" >Work</a></li><li><a href="resume" class="selected" >Resume</a></li><li><a href="about" class="notSelected" >About</a></li>');
	require ("views/assets/menu.php"); 
?>

<section id="resume">
	<article>
		<h1>Experience</h1>
		<dl>
			<dt>Stakeholder at Synerg'Hetic</dt>
			<dd>
				<a href="http://www.synerghetic.net" title="Synerg'Hetic" target="_blank">Synerg'Hetic</a>, the Hetic Junior-Entreprise<br/>
				February 2013 to now
				<img src="img/resume/synerghetic.png" alt="Synerg'hetic" />	
			</dd>
		</dl>
		<dl>
			<dt>Webdesigner</dt>
			<dd>
				Intern at <a href="felix-creation.fr" title="Felix Creation" target="_blank">Felix Creation</a>, digital communication agency<br/>
				Webdesign - Print - Design<br/>
				April to June 2012
				<img src="img/resume/felixcreation.png" alt="Felix Creation" />
			</dd>				
		</dl>
		<dl>
			<dt>Webdesigner</dt>
			<dd>
				I will be intern at <a href="http://www.ozconseil.com/" title="Oz Conseil" target="_blank">Oz Conseil</a>, digital communication agency<br/>
				Webdesign - Interface - Usability - Print - Design - Integration<br/>
				June to September 2013
				<img src="img/resume/ozconseil.png" alt="Oz Conseil" />
			</dd>	
		</dl>
	</article>
	<article>	
		<h1>Education</h1>
		<dl>
			<dt>Third year student at Hetic</dt>
			<dd>
				Preparation of a degree “Expert en Ingénierie<br/>et Management de la Communication Numérique"<br/>
				2012 - now
				<img src="img/resume/hetic.png" alt="Hetic" />
			</dd>
		</dl>
		<dl>
			<dt>DUT SRC</dt>
			<dd>
				Institut Universitaire de Technologie, Chambéry<br/>
				2010 - 2012
			</dd>
		</dl>
		<dl>
			<dt>Baccalauréat Scientifique</dt>
			<dd>
				Option Physics - Chemistry<br/>
				2007 - 2009
			</dd>
		</dl>
	<article>
	<div class="download">
		<a href="Lagier-Kevin-Resume.pdf" target="_blank">Download my Resume</a>
	</div>
</section>

<?php 
	define('Langage','<a href="#" class="selected">English</a> - <a href="#">Français</a>');
	require ("views/assets/footer.php"); 
?>

</body>
</html>

