/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.socialCoke = Backbone.View.extend({

        el: $('.case-study-container'),
        caseStudyContainer: $('.case-study-container'),
        caseStudyElem: $('section[data-case-study="social-coke"]'),
        template: '',
        title: 'Social Coke',
        
        initialize: function(){

            this.articles = this.caseStudyElem.find('article');

        },

        enterProject: function(){

            app.initScrollAnims();

        }
    });
})();
