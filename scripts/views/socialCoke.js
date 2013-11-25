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
