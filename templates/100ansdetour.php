<section id='tdf' data-case-study="100ansdetour">
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
                <img src='./assets/img/100ansdetour/pignon.svg' alt=''>
                100 ans de Tour
            </h1>
            <p>
                Projet de data-visualization sur les 100 ans du Tour de France . À quelques mois de la 100ème édition, la Grande Boucle a retenu tout notre intérêt. Un sujet qui plus est fascinant sur le plan des données à explorer. 100 ans de données à parcourir entre classements, parcours ou encore coureurs de légende.
            </p>
            <a id='checkTdf' href='http://100ansdetour.fr' target='_blank'>Check the site</a>
            <img id='tdf-mbp' src='./assets/img/100ansdetour/tdf-mbp.png' alt=''>
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
                    <img src='./assets/img/100ansdetour/tour-de-france.svg' alt='Logo 100 ans de Tour, 100ème édition'>
                </li><!--
                !--><li>
                    <span>100 ans de données</span>
                    Cent ans que l'Hexagone vit au rythme des coups de pédale de sportifs surentrainés pour remporté la Grande boucle.<br/>
                    Cent ans de parcours, de classements et d'anecdotes, soit de nombreuses analyses et statistiques possibles.
                </li>
            </ul>
            <div id='maillot'>
                <img src='./assets/img/100ansdetour/maillot-jaune.svg' alt=''>
                <img src='./assets/img/100ansdetour/maillot-blanc.svg' alt=''>
                <img src='./assets/img/100ansdetour/maillot-vert.svg' alt=''>
                <img src='./assets/img/100ansdetour/maillot-pois.svg' alt=''>
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
            <ul id='tdf-dataNumbers'>
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
            <p class="dataDescription">
                La récupération de données pour les 100 ans du Tour de France a été un travail de longue haleine. Nous avons du faire des choix et des concessions. Il a été difficile de trouver les informations que nous recherchions, notamment pour les premières éditions de la Grande Boucle.
            </p>
            <ul id='tdf-UI'>
                <li>
                    <img src='./assets/img/100ansdetour/tdf-ui1.png' alt=''>
                </li><!--
                !--><li>
                    <img src='./assets/img/100ansdetour/tdf-ui2.png' alt=''>
                </li><!--
                !--><li>
                    <img src='./assets/img/100ansdetour/tdf-ui3.png' alt=''>
                </li>
            </ul>
            <p>
                Les sites et les internautes mettant à disposition les données du Tour de France, nous ont permis de constituer une base données fondamentale dans la réalisation de ce projet. Un grand merci pour eux.
            </p><!--
            !--><p>
                Nous avons créer des scripts qui nous ont permis de récupérer ces données et ensuite de faire un formatage au format Json pour constituer notre base de données.
            </p><!--
            !--><p>
                Nous avons du ensuite adapter le développement de notre interface sur la base des données collectées. L’ensemble de nos graphiques ont été réalisés avec la librairie javascript D3.            
            </p>
        </div>
    </article>

    <article id='tdf-design'>
        <div class="page-content">
            <h2>
                The Design
            </h2>
            <h3>
                Un design aux couleurs du Tour
            </h3>
            <p class='design-infos'>
                Un design flat, aux couleurs du Tour de France, pour travailler en vectorielle et manipuler plus facilement les intéractions des éléments. Une interface full screen, où l'on navigue d'année en année, pour découvrir les différentes analyses de chaque éditions du Tour.
            </p>

            <div class='design-screen'>
                <img src='./assets/img/100ansdetour/home.jpg' alt=''>  
                <img src='./assets/img/100ansdetour/date.jpg' alt=''>  
                <img src='./assets/img/100ansdetour/comparative.jpg' alt=''>  
            </div> 

            <div class='design-context'>
                <span>
                    <h4>Context</h4>
                    <p>
                        La partie Context du site, permet de découvrir les différents tracés du Tour, de revivre chaque étape, les villes traversées, les kilomètres parcourus en chiffre et en images !
                    </p>
                </span><!--
                !--><img src='./assets/img/100ansdetour/context.jpg' alt=''>
            </div>
            <div class='design-steps'>
                <img src='./assets/img/100ansdetour/steps.jpg' alt=''><!--
                !--><span>
                    <h4>Steps</h4>
                    <p>
                        Chaque étape du tour est ici représentée selon sa catégorie mais également selon la distance parcourue. Retrouvez également les coureurs qui ont animé le Tour de France et leurs victoires.
                    </p>
                </span>
            </div>
            <div class='design-participation'>
                <span>
                    <h4>Participation</h4>
                    <p>
                        Les coureurs sont ici présentés selon leur pays d'origine. On mesure ainsi l'internationalisation du Tour au fil des années et le succès grandissant de la Grande Boucle..</p>
                    </p>
                </span><!--
                !--><img src='./assets/img/100ansdetour/participation.jpg' alt=''>
            </div>
            <div class='design-rank'>
                <img src='./assets/img/100ansdetour/rank.jpg' alt=''><!--
                !--><span>
                    <h4>Rating</h4>
                    <p>
                        Retrouvez l'intégralité des classements pour l'année choisie, le temps des coureurs et leur nationalité. Ainsi que les coureurs qui se sont distingués pour leur performance au général, au sprint ou en montagne.
                    </p>
                </span>
            </div>
        </div>
    </article>

    <article id='tdf-thanks'>
        <div class="page-content">
            <h2>
                Remerciements
            </h2>
            <p>
                Un remerciement très spécial à l'ensemble des sites et internautes qui mettent à disposition les données du Tour de France. Ils nous ont permis de constituer une base de données fondamentale dans la réalisation de ce projet.
                N'hésitez pas à nous contacter pour faire remonter d'éventuelles erreurs ou simplement passer le bonjour !           
            </p>
            <p>A project made with ...</p>
            <ul>
                <li>
                    <a href='http://www.sebastienlambla.fr/' target='_blank'>Sébastien Lambla</a>
                    <a href='https://twitter.com/SebLambla' target='_blank'>L</a>
                    Développement,<br/>intégration
                </li><!--
                !--><li>
                    <a href='http://bastien-lardeux.com/' target='_blank'>Bastien Lardeux</a>
                    <a href='https://twitter.com/dolly_pr4ne' target='_blank'>L</a>
                    Chef de projet,<br/>développeur d3
                </li><!--
                !--><li>
                    <a href='http://www.nicolasmatt.com/' target='_blank'>Nicolas Matt</a>
                    <a href='https://twitter.com/nicomatt89' target='_blank'>L</a>
                    Statisticien,<br/>UX design
                </li><!--
                !--><li>
                    <a href='http://florentin-monteil.com/' target='_blank'>Florentin Monteil</a>
                    <a href='https://twitter.com/FloMonteil' target='_blank'>L</a>
                    Développeur<br/>(d3, backbone...)
                </li>
            </ul>
        </div>
    </article>

    <article id='tdf-other'>
        <div class="page-content">
            <div id='tdf-tweetLeft' class='tdf-tweet'>
                Really cool dataviz on the 100 Tour de France "La grande rétrospective du Tour de France" - <a href=''>http://100ansdetour.fr/</a>  <span>#100ansdetour</span> <span>#webdesign</span>
                <b>Thibault Jorge - @madebytj</b>
            </div>            
            <div id='tdf-tweetRight' class='tdf-tweet'>
                Really cool dataviz on the 100 Tour de France "La grande rétrospective du Tour de France" - <a href=''>http://100ansdetour.fr/</a>  <span>#100ansdetour</span> <span>#webdesign</span>
                <b>Thibault Jorge - @madebytj</b>
            </div>
            <div id='tdf-twitter'>L</div>
            <ul id='tdf-award'>
                <li>
                    <a href="http://www.thefwa.com/site/100-ans-de-tour?search=tour" target="_blank">
                        <img src='./assets/img/100ansdetour/fwa.svg' alt=''>
                        <span>Site of the day</span>
                        September 07 2013
                    </a>
                </li><!--
                !--><li>
                    <a href="http://www.awwwards.com/web-design-awards/100-ans-de-tour" target="_blank">
                        <img src='./assets/img/100ansdetour/awwwards.svg' alt=''>
                        <span>Site of the day</span>
                        July 31 2013
                    </a>
                </li>
            </ul>
        </div>
    </article>

    <footer>
        <p>That’s all folk</p>
        <p>Thank you for watching</p>
    </footer>
</section>
