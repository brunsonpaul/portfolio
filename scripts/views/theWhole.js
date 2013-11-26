/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.theWhole = Backbone.View.extend({

        template: $('coucou'),
        caseStudyContainer: $('.case-study-container'),
        caseStudyElem: $('section[data-case-study="the-whole"]'),
        title: 'The Whole',
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
