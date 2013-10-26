/*global kevinPortfolio, $*/


window.kevinPortfolio = {
    Models: {

    },
    Collections: {

    },
    Views: {

    },
    Routers: {

    },
    activeView: null,
    windowWidth: $(window).width(),
    windowHeight: $(window).height(),
    homeProjectsContainer: $('.projects-container'),
    homeProjectClass: '.project',
    init: function () {
        'use strict';
        this.router = new this.Routers.ApplicationRouter();
        Backbone.history.start();

        // Initialise les projets
        this.setProjectsSize();

    },
    //------ HOME -----------//
    setProjectsSize: function(){

        var projectNumber = $('.projects-container .project').length;
        
        // Set le conteneur pour accueillir tout les projets
        this.homeProjectsContainer.css('width', this.windowWidth*projectNumber + 'px');
        this.homeProjectsContainer.find(this.homeProjectClass).css('width', this.windowWidth +'px');
        this.homeProjectsContainer.find(this.homeProjectClass).css('height', this.windowHeight +'px');

    },

    // Event du resize du navigateur
    windowResized: function(){
        this.windowWidth = $(window).width();
        this.windowHeight = $(window).height();
        $('.projects-container').css('margin-left', -this.currentProject * this.windowWidth);
        this.setProjectsSize();
    },

    //------------- Slider Home ----------------//
    projectMapping:[],
    projectIsSliding:false,
    mousePositionX: null,
    currentProject:0,
    initProjectsHome: function(){
        var that = this;

        _.each($('.project'), function(project){
            that.projectMapping.push($(project).attr('data-project'));
        });

        $('.project').on('mousedown',function(e){
            that.projectIsSliding = true;
            that.mousePositionX = e.clientX;

            $(document).on('mousemove', function(e){
                $('.projects-container').css('margin-left', -that.currentProject*that.windowWidth + e.clientX-that.mousePositionX+"px");
            });

            $(document).on('mouseup', function(e){
                if(e.clientX>that.mousePositionX+200){
                    that.slideRight();
                } else if(e.clientX<that.mousePositionX-200){
                    that.slideLeft();
                } else {
                    $('.projects-container').css('margin-left', -that.currentProject * that.windowWidth);
                }
                $(this).unbind('mouseup');
                $(this).unbind('mousemove');
                that.mousePositionX = 0;
            });


        });

    },
    slideLeft: function(){
        var nextPosition = this.currentProject+1;
        if(nextPosition < this.projectMapping.length){
            this.currentProject = nextPosition;
        }
        $('.projects-container').animate({
            marginLeft: -this.currentProject*this.windowWidth+'px'},
            500, function() {});
    },
    slideRight: function(){
        var nextPosition = this.currentProject-1;
        if(nextPosition >= 0){
            this.currentProject = nextPosition;
        }
        $('.projects-container').animate({
            marginLeft: -this.currentProject*this.windowWidth+'px'},
            500, function() {});
    },
    //Charge la vu provenant du router
    loadView: function(pView) {
        // Si on est déjà sur une page projet on supprime sa vue chargé
        if(this.activeView){
            this.activeView.remove();
        }

        this.activeView = pView;

        return this;
    },

    projectSlider: function() {

    }
};

$(document).ready(function () {
    'use strict';
    kevinPortfolio.init();
    kevinPortfolio.initProjectsHome();

    headerCenter();
    paginationCenter();

    $(window).on('resize',function(){
        kevinPortfolio.windowResized();
        headerCenter();
        paginationCenter();
    });

});

function headerCenter(){
    var headerHeight = $('#header-content').innerHeight();
    $("#header-content").css('margin-top',-headerHeight/2);
};

function paginationCenter(){
    var headerHeight = $('.onepage-pagination').innerHeight();
    $(".onepage-pagination ").css('margin-top',-headerHeight/2);
};