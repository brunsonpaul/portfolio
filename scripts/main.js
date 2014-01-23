/*global app, $*/


window.app = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    homeView: null,
    activeProjectView: null,
    activeCaseStudy: false,

    init: function () {
        'use strict';
        this.homeView = new this.Views.HomeView();
        this.router = new this.Routers.ApplicationRouter();
        Backbone.history.start();

        this.initOpenCloseMenu();
        this.initMenuLinks();
        this.refreshAnchors();
        // $('#home').addClass('entered');

    },

    //Charge la vu provenant du router
    loadView: function(pView) {

        this.activeProjectView = pView;

        return this;

    },
    isCaseStudyActive: function() {
        return this.activeCaseStudy;
    },
    setCaseStudyActive: function(param) {
        this.activeCaseStudy = param;
        return true;
    },
    getActiveView: function(){
        return this.activeProjectView;
    },

    // Animation scroll de la page active
    positionsArticle: [],
    articles: [],
    initScrollAnims: function(){

        var that = this;

        this.articles = [];
        this.positionsArticle = [];

        this.articles = this.activeProjectView.caseStudyElem.find('.animation-on-scroll');

        _.each(this.articles, function(article){

            $article = $(article);
            that.positionsArticle.push($article.offset().top + $article.height() + parseInt($article.attr('data-start-margin')));

        });

        $(window).on('scroll', function(){

            _.each(that.positionsArticle, function(positionArticle, key){
                if(positionArticle<$(document).scrollTop() + that.homeView.windowHeight){

                    $(that.articles[key]).addClass('active');

                    delete that.positionsArticle[key];

                }

            });

        });
    },
    leaveProject: function(){


        $('.closeLayout').css('height', '100%');
        $('.closeLayout').animate({opacity:1},1000, function(){

            
            $('.border').removeClass('close');
            $('.border').addClass('open');
            app.activeProjectView.leaveProject();
            app.homeView.homeProjectsContainer.css({'top':"0px"});
            app.homeView.slideToProject(app.activeProjectView.getName());
            
            $(this).animate({opacity:0},1000, function(){

                $(".button-menu").removeClass("close");
                $(".button-menu").addClass("open");
                
                app.homeView.enableSlider();
                app.activeCaseStudy = null;
                $('body').addClass("userSelect");
                $('.closeLayout').css({height:'0%'});
                $('.border').removeClass('open');
                $('.border').addClass('close');

            });

        });
    },
    /**
        MENU
    **/
    lastActivePage:null,
    menuOpen:false,
    initOpenCloseMenu: function(){
        var that = this;
        $('.button-menu').on('click', function(e){
            e.preventDefault();
            if(that.isCaseStudyActive()){
                app.router.navigate("/"+app.activeProjectView.getName());
                that.leaveProject();
                return false;
            }
            that.openCloseMenu();
            return false;
        });

        $('body').click(function(e){
            if(that.isMenuOpen()){
                that.openCloseMenu();
            }
        });

    },
    openCloseMenu: function(){
        var $buttonMenu = $('.button-menu');
        var that = this;
        if ($buttonMenu.hasClass('open')) {
            $buttonMenu.removeClass('open');
            $buttonMenu.addClass('openMenu');

            $('#borderTop').removeClass('close');
            $('#borderTop').addClass('openMenu');
            $('#borderBottom').removeClass('close');
            $('#borderBottom').addClass('openMenu');
            $('#borderLeft').removeClass('close');
            $('#borderLeft').addClass('openMenu');
            $('#borderRight').removeClass('close');
            $('#borderRight').addClass('openMenu');

            $('menu').addClass('openMenu');
            $('.wrapper-projects-container').addClass('openMenu');
            that.menuOpen = true;
            that.homeView.disableSlider();

        } else if ($buttonMenu.hasClass('openMenu')) {
            $buttonMenu.removeClass('openMenu');
            $buttonMenu.addClass('open');

            $('#borderTop').addClass('close');
            $('#borderTop').removeClass('openMenu');
            $('#borderBottom').addClass('close');
            $('#borderBottom').removeClass('openMenu');
            $('#borderLeft').addClass('close');
            $('#borderLeft').removeClass('openMenu');
            $('#borderRight').addClass('close');
            $('#borderRight').removeClass('openMenu');

            $('menu').removeClass('openMenu');
            $('.wrapper-projects-container').removeClass('openMenu');
            that.menuOpen = false;
            that.homeView.enableSlider();
        };
    },
    updateMenu: function(pageNumber){

        var menus = $("menu nav a");
        if(this.lastActivePage){
            this.lastActivePage.removeClass('active');
        }
        this.lastActivePage = $(menus[pageNumber]);
        this.lastActivePage.addClass("active");

    },
    initMenuLinks: function(){
        var that = this;
        $("menu nav a").click(function(){
            that.updateMenu($(this).parent().index());
            that.openCloseMenu();
        });
    },
    isMenuOpen: function(){
        return this.menuOpen;
    },
    refreshAnchors: function(){
        var that = this;
        $(window).on('scroll', function(){

            _.each(that.activeProjectView.anchorsPositions, function(anchorPosition, key){

                if(($(document).scrollTop() > anchorPosition)){
                    $(".pagination." + that.activeProjectView.anchorsName +  " ul li:nth-of-type("+ (key+1) +") a").addClass("active loaded");

                } else if($(document).scrollTop() == app.activeProjectView.caseStudyElem.height() - app.homeView.windowHeight ) {

                    $(".pagination." + that.activeProjectView.anchorsName +  " ul li:nth-of-type("+ (key+1) +") a").addClass("active loaded");

                } else {

                    $(".pagination." + that.activeProjectView.anchorsName +  " ul li:nth-of-type("+ (key+1) +") a").removeClass("active loaded");
                }

            });

        });
    }
};

$(window).load(function() {

    var isNew = $('#loader').attr('data-new');

    if(isNew == 'true'){

        setTimeout(function() {
      
        $('#loader').fadeOut(1000);

        $('#home').addClass('entered');

        app.init();

        }, 6000);

    }else{

        setTimeout(function() {
      
        $('#loader').fadeOut(1000);

        $('#home').addClass('entered');
        
        app.init();

        }, 1000);

    } 
});

