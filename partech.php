<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

    <title>Kévin Lagier</title>

    <meta name="viewport" content="width=device-width,initial-scale=1">

    <meta name="author" content="Kévin LAGIER" />
    <meta name="keywords" content="Kévin LAGIER, portfolio, web, design, Hetic, graphic design, webdesign, websites, communication, project management, ergonomics, UX, responsive, digital" />
    <meta name="description" content="Personal portfolio Kévin LAGIER, French Graphic Designer From Annecy, student at Hetic in Paris" />   
 
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="img/identity/favicon.png" />

    <link rel="stylesheet" href="css/soSteezy.css" type="text/css" media="screen"  />    
</head>

<body>

<div id="borderTop" class="openBorder"></div>
<div id="borderLeft" class="openBorder"></div>
<div id="borderBottom" class="openBorder"></div>
<div id="borderRight" class="openBorder"></div>

<div class="wrapper">
    <div class="main">
        <section class="intro">
            <div class="page_container">
                <ul>
                    <li>
                        <span>Date :</span>
                        Janvier 2011
                    </li><!--
                    !--><li>
                        <span>Client :</span>
                        Partech S.A.R. L.
                    </li><!--
                    !--><li>
                        <span>Rôle :</span>
                        Design - Intégration
                    </li>
                </ul>
                <h1>Partech</h1>
                <span class="sepPartech"></span>
                <p>Créée en 1992 par Yves Lagier, Partech propose ses solutions d’engineering et réalisations dans le milieu de l’industrie et des remontées mécaniques.</p>
                <a href='http://partech-sarl.com' target='_blank'>Check the site</a>
            </div>
            <img src='img/partech/partech-cinema-display.png' alt="partech cinema display">
        </section>

        <section class="theClient">
            <div class="page_container">
                <h2>The Client</h2>
                <h3>Bureau d'etudes, engineering mecanique</h3>
                <span class="sepPartech"></span>
                <p>
                    <span>Créée en 1992 par Yves Lagier, PARTECH propose ses solutions d’engineering et réalisations dans le milieu de l’industrie et des remontées mécaniques.</span><br/>
                    Fort d’une expérience de plusieurs années au sein de bureau d’études de grands constructeurs (SKIRAIL, VON ROLL, CWA), PARTECH vous apporte son expérience dans des biens d’équipements industriels et montagne.
                 </p><!--
                !--><p>
                    Doté d’un outil performant en conception, Logiciel 3D, calculs en éléments finis. Nos atouts sont fondés sur le sérieux, la motivation, l’expérience et l’écoute des clients.<br/>
                    <span>PARTECH</span> s’avère être une alternative économique et sérieuse face à des constructeurs pénalisés par une structure lourde, une politique rigide et des solutions coûteuses.
                </p>   
                <img src='img/partech/back-rack-sketch.png' alt="Back Rack">
            </div>
        </section>

        <section class="screenDrag">
            <div class="page_container">
                <h2>Horizontal navigation</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                <div class="toDrag">
                    <div class="dragCursorPartech"></div>
                    <div class="dragScreen"></div>
                </div>
            </div>
        </section>

        <section class="sketch">
            <div class="page_container"></div>
        </section>

        <section class="mobile">
            <div class="page_container">
                <h2>Responsive Design</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                <img id="partech-iphone" src='img/partech/partech-iphone.png' alt="Iphone">
            </div>
        </section>

        <section class="thatsall">
            <div class="page_container">
                <h2>UI Element</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p> 
                <ul>
                    <li><img src='img/partech/ui2.png' alt='UI Element'></li><!--
                    !--><li><img src='img/partech/ui2.png' alt='UI Element'></li><!--
                    !--><li><img src='img/partech/ui2.png' alt='UI Element'></li><!--
                    !--><li><img src='img/partech/ui2.png' alt='UI Element'></li><!--
                    !-->
                </ul>
            </div>
            <footer>
                <p>That’s all folk</p>
                <p>Thank you for watching</p>
            </footer>
        </section>
    </div>
</div>




<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.onepage-scroll.js"></script>
<script>
    $(document).ready(function(){
        $(".main").onepage_scroll({
            sectionContainer: "section"
        });
    });    
</script>

</body>
</html>
