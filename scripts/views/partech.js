/*global kevinPortfolio, Backbone, JST*/

kevinPortfolio.Views = kevinPortfolio.Views || {};

(function () {
    'use strict';

    kevinPortfolio.Views.partech = Backbone.View.extend({

        el: $('.case-study-container'),
        caseStudyContainer: $('.case-study-container'),
        caseStudyElem: $('section[data-case-study="partech"]'),
        positionsArticle: [],
        articles: [],
        template: '',
        title: 'Partech',

        initialize: function(){
            this.articles = this.caseStudyElem.find('article');
        },

        enterProject: function(){

            var that = this;
            _.each(this.articles, function(article){

                that.positionsArticle.push($(article).offset().top);

            });
            $(this.articles[0]).addClass('active');
            delete this.positionsArticle[0];
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
