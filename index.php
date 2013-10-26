<?php require ("assets/head.php"); ?>

<?php require ("assets/frame.php"); ?>
<?php //require ("assets/loader.php"); ?>

<?php //require ("assets/header.php"); ?>




<div class="projects-container">
    <div class="project _home" data-project="home">
        
    </div><!--
    --><div class="project _partech" data-project="partech">
        
    </div><!--
    --><div class="project _social-coke" data-project="social-coke">
        
    </div><!--
    --><div class="project _100ansdetour" data-project="100ansdetour">
        
    </div>
</div>
<!-- <nav class="button-menu">
    <a href="#">
        <svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="7px" viewBox="0 0 17 7.016" enable-background="new 0 0 17 7.016" xml:space="preserve">
            <rect fill="#b59663" width="18" height="1"/>
            <rect y="3" fill="#b59663" width="18" height="1"/>
            <rect y="6" fill="#b59663" width="18" height="1"/>
        </svg>
    </a>
</nav> -->
<!-- <img style='margin-left:20%; position:absolute; top:50%; left:50%;'src='img/social-coke/monkey.svg'>
<img style='position:absolute; top:20%; left:10%;'src='img/social-coke/patate.svg'>
<img style='position:absolute; top:16%; left:80%;'src='img/social-coke/cool.svg'>
<img style='position:absolute; top:30%; left:23%;'src='img/social-coke/drink.svg'>
<img style='position:absolute; top:20%; left:60%;'src='img/social-coke/point1.svg'>
<img style='position:absolute; top:77%; left:24%;'src='img/social-coke/point2.svg'>
<img style='position:absolute; top:88%; left:55%;'src='img/social-coke/point3.svg'>
<img style='position:absolute; top:34%; left:60%;'src='img/social-coke/point4.svg'> -->
<!--
<div id="partech-content">
   
    <h1>
        <span>Partech</span>
        <img src="img/partech/partech.svg" alt="Partech"> 
    </h1>
    <p>
        Corporate website for Partech, a design office specializing<br/>
        in manufactured chairlifts, in industrial<br/>
        equipment and mountain.
    </p>
    <a href="#">
        <span>View the case study</span>
        <span>View the case study</span>
    </a>
</div> !-->

    <!-- build:js scripts/vendor.js -->
    <script src="scripts/vendor/jquery/jquery.js"></script>
    <script src="scripts/vendor/underscore/underscore.js"></script>
    <script src="scripts/vendor/backbone/backbone.js"></script>
    <script src="scripts/vendor/dragdealer.js"></script>
    <!-- endbuild -->

    <!-- build:js({.tmp,app}) scripts/main.js -->
    <script src="scripts/main.js"></script>
    <script src="scripts/routes/application.js"></script>
    <script src="scripts/views/application.js"></script>
    <script src="scripts/views/100ansdetour.js"></script>
    <script src="scripts/views/converseChallenge.js"></script>
    <script src="scripts/views/partech.js"></script>
    <script src="scripts/views/socialCoke.js"></script>
    <script src="scripts/views/theWhole.js"></script>
    <script src="scripts/collections/application.js"></script>
    <!-- endbuild -->

    <script type="text/javascript">

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-29119748-1']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

    </script>

</body>
</html>
