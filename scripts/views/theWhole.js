/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.theWhole = Backbone.View.extend({

        caseStudyContainer: $('.case-study-container'),
        caseStudyElem: $('section[data-case-study="the-whole"]'),
        title: 'The Whole',
        name: 'the-whole',
        positionsArticle: [],
        articles: [],
        
        initialize: function(){

            this.articles = this.caseStudyElem.find('article');
            
        },
        initEnterProjectAction: function(){

        },
        enterProjectAnim: function(){

            var that = this;
            //Desactive le slider
            app.homeView.disableSlider();

            $("#theWholeProject").addClass("closed");

            $('.border').removeClass('close');
            $('.border').addClass('open');

            app.homeView.disableSlider();
            $("#borderLeft").bind("webkitTransitionEnd", function(e){

                $(this).unbind("webkitTransitionEnd");

                app.router.navigate('/'+that.name+'/case-study', {trigger: false});

                app.homeView.homeProjectsContainer.css('display', 'none');
                that.caseStudyElem.css({display:"block"});
                setTimeout(function(){$("#theWhole-introduction").addClass("active");clearTimeout(this);}, 100);
                that.enterProject();
            });

        },
        leaveProject: function(){
            var that = this;
            $('.closeLayout').css('height', '100%');
            $('.closeLayout').animate({opacity:1},1000, function(){

                $('.border').removeClass('close');
                $('.border').addClass('open');
                $("#theWholeProject").removeClass("closed");
                $("#theWhole-introduction").removeClass("active");
                app.homeView.homeProjectsContainer.css('display', 'block');

                that.caseStudyElem.css('display', 'none');

                $(this).animate({opacity:0},1000, function(){
                    app.homeView.enableSlider();
                    app.activeCaseStudy = null;
                    $('.closeLayout').css({height:'0%'});
                    $('.border').removeClass('open');
                    $('.border').addClass('close');

                });

            });
        },
        enterFromRouter: function(){

        },
        enterProject: function(){

            app.setCaseStudyActive(true);

            this.scrollAnims();

        },
        scrollAnims: function(){
            var that = this;

            _.each(this.articles, function(article){

                that.positionsArticle.push($(article).offset().top);

            });

            $(window).on('scroll', function(){

                _.each(that.positionsArticle, function(positionArticle, key){

                    if(positionArticle<$(document).scrollTop()){

                        $(that.articles[key]).addClass('active');

                        delete that.positionsArticle[key];

                    }

                });

            }); 

        },
        getName: function(){
            return this.name;
        }

    });

})();
