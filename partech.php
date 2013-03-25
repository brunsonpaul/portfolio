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


<section id="partech">

	<div id="slider">	
		<input checked type="radio" name="slider" id="slide1" />
		<input type="radio" name="slider" id="slide2" />
		<input type="radio" name="slider" id="slide3" />
		<input type="radio" name="slider" id="slide4" />
		<div id="slides">
			<div id="overflow">
				<div class="inner">
					<article>
						<img src="img/partech/work/slide1-partech-work.jpg" alt=""/>
					</article>
					<article>
						<img src="img/partech/work/slide2-partech-work.jpg" alt=""/>
					</article>
					<article>
						<img src="img/partech/work/slide3-partech-work.jpg" alt=""/>
					</article>
					<article>
						<img src="img/partech/work/slide4-partech-work.jpg" alt=""/>
					</article>
				</div>
			</div>
		</div>	
		<div id="controls">
			<label for="slide1"></label>
			<label for="slide2"></label>
			<label for="slide3"></label>
			<label for="slide4"></label>
		</div> 
		<div id="active">
			<label for="slide1">1</label>
			<label for="slide2">2</label>
			<label for="slide3">3</label>
			<label for="slide4">4</label>
		</div>
	</div>

	<article id="description">
		<h1>Partech</h1>
		<ul>
			<li><em>Client :</em> Partech Sarl</li>
			<li><em>Services :</em> web, mobile, print</li>
			<li><em>Release :</em> may 2012</li>
		</ul>
		<p>
			Corporate website for Partech, a design office specializing in manufactured chairlifts.
			With an experience of many years in consultancy major manufacturers, Partech brings its experience in industrial equipment and mountain. 
		</p>
		<a href="http://www.partech-sarl.com/" target="_blank">Visit website</a>
	</article>

	<article id="dragScreen">
		<div>
			<span></span>
			<img src="img/partech/work/screen-arrow-partech-work.png" alt=""/>
			<img id="cinemaDisplayPartech" src="img/partech/work/cinema-display-main-partech-work.png" alt=""/>	
			<img src="img/partech/work/screen-page-partech-work.png" alt=""/>
		</div>
	</article>	
	<article id="graphicIdentity">
		<img src="img/partech/work/logo-identity-partech-work.png" alt=""/>	
		<img src="img/partech/work/menu-identity-partech-work.png" alt=""/>	
		<img src="img/partech/work/font-identity-partech-work.png" alt=""/>	
		<img src="img/partech/work/mask-identity-partech-work.png" alt=""/>	
		<img src="img/partech/work/plan-identity-partech-work.png" alt=""/>	
		<img src="img/partech/work/flash-identity-partech-work.png" alt=""/>	
		<img src="img/partech/work/palette-identity-partech-work.png" alt=""/>	
		<img src="img/partech/work/yellowButton-identity-partech-work.png" alt=""/>	
		<img src="img/partech/work/cursor-identity-partech-work.png" alt=""/>	
		<img src="img/partech/work/ribbon-identity-partech-work.png" alt=""/>
	</article>
	<article id="sketch">
		<img id="spadRailSketch" src="img/partech/work/spad-rail-sketch-partech-work.png" alt=""/>
	</article>

	<article id="screenSize" class="screenSizeImg1">
		<input type="radio" name="screenSizeNext" id="screenSizeNext" />
		<label for="screenSizeNext"></label>
		<input type="radio" name="screenSizePrev" id="screenSizePrev" />
		<label for="screenSizePrev"></label>
		<div id="imac">
			<img src="img/partech/work/imac-partech-work.png" alt=""/>
			<img src="img/partech/work/imac-screen-partech-work.png" alt=""/>
		</div>
		<div id="macbook">
			<img src="img/partech/work/macbook-partech-work.png" alt=""/>
			<img src="img/partech/work/imac-screen-partech-work.png" alt=""/>
		</div>
		<div id="ipad">
			<img src="img/partech/work/ipad-partech-work.png" alt=""/>
			<img src="img/partech/work/ipad-screen-partech-work.png" alt=""/>
		</div>
		<div id="iphone5">
			<img src="img/partech/work/iphone5-partech-work.png" alt=""/>
			<img src="img/partech/work/iphone5-screen-partech-work.png" alt=""/>
		</div>
		<ul>
			<li id="screenSizeImg1" class="screenSizeActive">1</li>
			<li id="screenSizeImg2">2</li>
			<li id="screenSizeImg3">3</li>
			<li id="screenSizeImg4" >4</li>
		</ul>
	</article>
	<nav>
		<ul>
			<li><a href="#">Previous project</a></li>
			<li><a href="#">Next project</a></li>
		</ul>
	</nav>
</section>

<?php require_once ("views/assets/project.php"); ?>


<?php 
	define('Langage','<a href="#" class="selected">English</a> - <a href="#">Français</a>');
	require ("views/assets/footer.php"); 
?>

<?php require_once ("views/assets/script.php"); ?>

<script src="js/partech.js"></script>
<script src="js/project.js"></script>

</body>
</html>

