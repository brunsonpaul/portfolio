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
        this.homeView = new this.Views.HomeView();
        this.router = new this.Routers.ApplicationRouter();
        Backbone.history.start();
    },

    //Charge la vu provenant du router
    loadView: function(pView) {

        this.activeProjectView = pView;

        return this;
    },
    enterProject: function() {
        this.activeProjectView.caseStudyElem.css('display','block');
    },
    closeProject: function() {
        this.activeProjectView.caseStudyElem.css('display','none');
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
