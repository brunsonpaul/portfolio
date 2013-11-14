/*global kevinPortfolio, Backbone, JST*/

kevinPortfolio.Views = kevinPortfolio.Views || {};

(function () {
    'use strict';

    kevinPortfolio.Views._100ansDeTour = Backbone.View.extend({

        template: $('coucou'),
        caseStudyContainer: $('.case-study-container'),
        caseStudyElem: $('section[data-case-study="100ansdetour"]'),
        title: '100ans de Tour',
        positionsArticle: [],
        articles: [],
        initialize: function(){
            this.articles = this.caseStudyElem.find('article');
        },

        enterProject: function(){

            var that = this;
            _.each(this.articles, function(article){

                that.positionsArticle.push($(article).offset().top);

            });

            this.scrollAnims();

        },
        
        scrollAnims: function(){
            var that = this;
            $(window).on('scroll', function(){

                _.each(that.positionsArticle, function(positionArticle, key){

                    if(positionArticle<$(document).scrollTop()){

                        $(that.articles[key]).addClass('active');

                        delete that.positionsArticle[key];

                    }

                });

            }); 

        },

    });

})();
