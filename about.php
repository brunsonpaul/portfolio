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
			I'm currently student at <a href="http://hetic.net" target="_blank" title="HETIC, l'école des métiers de l'internet">HETIC</a> : a webschool based in Paris. Combining Graphic Design and Front-End Development,<br/>
			I offer solutions for websites. I have also skills in Project Management, UX Conception and Art Direction.<br/>
			I'm always aware and mindful of cultural and environmental change.
		</p>
		<img src="img/about/about.png" alt="" />	

		<h2>Skills</h2>
		<ul>
			<li>
				<div class="diagram">
					<div class="percentGraphicDesign"><span>0 1 2 3 4 5 6 7</span><span>0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8</span><span>%</span></div>
					<div class="value">
						<div class="graphicDesignOne oneQuarter"></div>
						<div class="graphicDesignTwo twoQuarter"></div>
						<div class="graphicDesignThree threeQuarter"></div>
						<div class="graphicDesignFour fourQuarter"></div>
						<div class="mask"></div>
					</div>
				</div>
				<p>Graphic Design</p>
			</li>
			<li>
				<div class="diagram">
					<div class="percentFrontEnd"><span>0 1 2 3 4 5 6</span><span>0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6</span><span>%</span></div>
					<div class="value">
						<div class="frontEndOne oneQuarter"></div>
						<div class="frontEndTwo twoQuarter"></div>
						<div class="frontEndThree threeQuarter"></div>
						<div class="mask"></div>
					</div>
				</div>
				<p>Front-End Development</p>
			</li>
			<li>
				<div class="diagram">
					<div class="percentProjectManagement"><span>0 1 2 3 4 5</span><span>0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3</span><span>%</span></div>
					<div class="value">
						<div class="projectManagementOne oneQuarter"></div>
						<div class="projectManagementTwo twoQuarter"></div>
						<div class="projectManagementThree threeQuarter"></div>
						<div class="mask"></div>
					</div>
				</div>
				<p>Project Management</p>
			</li>
			<li>
				<div class="diagram">
					<div class="percentUxConception"><span>0 1 2 3 4</span><span>0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7</span><span>%</span></div>
					<div class="value">
						<div class="uxConceptionOne oneQuarter"></div>
						<div class="uxConceptionTwo twoQuarter"></div>
						<div class="mask"></div>
					</div>
				</div>
				<p>UX Conception</p>
			</li>
			<li>
				<div class="diagram">
					<div class="percentArtDirection"><span>0 1 2 3 4</span><span>0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3</span><span>%</span></div>
					<div class="value">
						<div class="artDirectionOne oneQuarter"></div>
						<div class="artDirectionTwo twoQuarter"></div>
						<div class="mask"></div>
					</div>
				</div>
				<p>Art Direction</p>
			</li>
		</ul>

		<!--<ul>
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
		</ul>!-->
	<article>
</section>

<?php 
	define('Langage','<a href="#" class="selected">English</a> - <a href="#">Français</a>');
	require ("views/assets/footer.php"); 
?>

<?php require_once ("views/assets/script.php"); ?>
<script src="js/about.js"></script>

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

