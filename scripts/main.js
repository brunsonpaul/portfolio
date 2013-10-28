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
    homeView: null,
    activeProjectView: null,
    init: function () {
        'use strict';
        this.router = new this.Routers.ApplicationRouter();
        Backbone.history.start();
        this.homeView = new this.Views.HomeView();
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
    
});

function paginationCenter(){
    var headerHeight = $('.onepage-pagination').innerHeight();
    $(".onepage-pagination ").css('margin-top',-headerHeight/2);
};
