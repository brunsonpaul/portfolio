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

<div id="resize">
    <p>
        Please<br/>resize your browser
    </p>
</div>

<div id='borderTop' class="open"></div>
<div id='borderBottom' class="open"></div>
<div id='borderLeft' class="open"></div>
<div id='borderRight' class="open"></div>

<div style="display:none; z-index:99; position:fixed; top:0; left:0; right:0; text-align:center;">
    <img src='img/grid.png'>
</div>

<section id='tdf'>
    <article id='tdf-introduction'>
        <div class="page-content">
            <ul>
                <li>
                    <span>Date :</span>
                    June 2013
                </li><!--
                !--><li>
                    <span>Client :</span>
                    Tour de France
                </li><!--
                !--><li>
                    <span>Role :</span>
                    Design - Intégration
                </li>
            </ul>
            <h1>
                <img src='img/100ansdetour/pignon.svg' alt=''>
                100 ans de Tour
            </h1>
            <p>
                Projet de data-visualization sur les 100 ans du Tour de France . À quelques mois de la 100ème édition, la Grande Boucle a retenu tout notre intérêt. Un sujet qui plus est fascinant sur le plan des données à explorer. 100 ans de données à parcourir entre classements, parcours ou encore coureurs de légende.
            </p>
            <a id='checkTdf' href='http://100ansdetour.fr' target='_blank'>Chech the site</a>
        </div>
    </article>
    <article id='tdf-context'>
        <div class="page-content">
            <h2>
                The Context
            </h2>
            <h3>
                Un événement exceptionnel
            </h3>
            <p>
                Le Tour de France est la course cycliste la plus prestigieuse au monde. Le fait d'être la 100e édition, le Tour de France 2013 est un évènement légendaire. Ce sera une des éditions les plus mondialisées et les plus diffusées de l'histoire du Tour de France.
            </p>
            <ul>
                <li>
                    <span>Une tendance</span>
                    Le Tour est un évènement sportif récurent qui a lieu chaqué été, il s'inscrit au patrimoine national de notre culture. C'est un évènement qui se modernise et se mondialise tout en continuant à jouer sur les repères constitutifs de l’identité française. On assiste à un réel regain d'intéret pour le vélo.
                </li><!--
                !--><li>
                    <img src='img/100ansdetour/tour-de-france.svg' alt='Logo 100 ans de Tour, 100ème édition'>
                </li><!--
                !--><li>
                    <span>100 ans de données</span>
                    Cent ans que l'Hexagone vit au rythme des coups de pédale de sportifs surentrainés pour remporté la Grande boucle.<br/>
                    Cent ans de parcours, de classements et d'anecdotes, soit de nombreuses analyses et statistiques possibles.
                </li>
            </ul>
            <div id='maillot'>
                <img src='img/100ansdetour/maillot-jaune.svg' alt=''>
                <img src='img/100ansdetour/maillot-blanc.svg' alt=''>
                <img src='img/100ansdetour/maillot-vert.svg' alt=''>
                <img src='img/100ansdetour/maillot-pois.svg' alt=''>
            </div>
        </div>
    </article>

     <article id='tdf-data'>
        <div class="page-content">
            <h2>
                The data
            </h2>
            <h3>
                Des choix et des concessions
            </h3>
            <p class="dataDescription">
                La récupération de données pour les 100 ans du Tour de France a été un travail de longue haleine. Nous avons du faire des choix et des concessions. Il a été difficile de trouver les informations que nous recherchions, notamment pour les premières éditions de la Grande Boucle.
            </p>
            <ul>
                <li>
                    <span>2 142</span>
                    étapes
                </li><!--
                !--><li>
                    <span>345 093</span>
                    km parcourus
                </li><!--
                !--><li>
                    <span>8 745</span> 
                    participants
                </li>
            </ul>
            <p>
                Les sites et les internautes qui mettent à disposition les données du Tour de France, nous ont permis de constituer une base données fondamentale dans la réalisation de ce projet. Un grand merci pour eux.
            </p><!--
            !--><p>
                Nous avons créer des scripts qui nous ont permis de récupérer ces données et ensuite de faire un formatage au format Json pour constituer notre base de données.
            </p><!--
            !--><p>
                Nous avons du ensuite adapter le développement de notre interface sur la base des données collectées. L’ensemble de nos graphiques ont été réalisés avec la librairie javascript D3.            
            </p>


        </div>
    </article>

    <footer>
        <p>That’s all folk</p>
        <p>Thank you for watching</p>
    </footer>
</section>

</body>
</html>
