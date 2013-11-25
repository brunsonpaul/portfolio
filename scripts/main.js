/*global app, $*/


window.app = {
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
    activeCaseStudy: false,
    init: function () {
        'use strict';
        this.homeView = new this.Views.HomeView();
        this.router = new this.Routers.ApplicationRouter();
        Backbone.history.start();
        // à mettre à la fin du loader
        $('#home').addClass('entered');
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
    }
};

$(document).ready(function () {
    'use strict';
    app.init();
    
});

function paginationCenter(){
    var headerHeight = $('.onepage-pagination').innerHeight();
    $(".onepage-pagination ").css('margin-top',-headerHeight/2);
};
