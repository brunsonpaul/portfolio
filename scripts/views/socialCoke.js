/*global kevinPortfolio, Backbone, JST*/

kevinPortfolio.Views = kevinPortfolio.Views || {};

(function () {
    'use strict';

    kevinPortfolio.Views.socialCoke = Backbone.View.extend({

        el: $('.case-study-container'),
        caseStudyContainer: $('.case-study-container'),
        caseStudyElem: $('section[data-case-study="social-coke"]'),
        template: '',
        title: 'Social Coke',
        initialize: function(){

        }
    });
})();
