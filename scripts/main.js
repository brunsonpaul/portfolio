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
        $('.projects-container').css('width', this.windowWidth*projectNumber + 'px');
        $('.projects-container .project').css('width', this.windowWidth +'px');
        $('.projects-container .project').css('height', this.windowHeight +'px');

    },

    windowResized: function(){
        this.windowWidth = $(window).width();
        this.windowHeight = $(window).height();

        this.setProjectsSize();

    },

    //Charge la vu provenant du router
    loadView: function(pView) {
        // Si on est déjà sur une page projet on supprime sa vue chargé
        if(this.activeView){
            this.activeView.remove();
        }

        this.activeView = pView;

        return this;
    }

};

$(document).ready(function () {
    'use strict';
    kevinPortfolio.init();

    headerCenter();
    paginationCenter();
    $(window).resize(headerCenter,paginationCenter);
    $(window).resize(kevinPortfolio.windowResized());

});

function headerCenter(){
    var headerHeight = $('#header-content').innerHeight();
    $("#header-content").css('margin-top',-headerHeight/2);
};

function paginationCenter(){
    var headerHeight = $('.onepage-pagination').innerHeight();
    $(".onepage-pagination ").css('margin-top',-headerHeight/2);
};