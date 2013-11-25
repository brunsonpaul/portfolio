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
        mousePositionX:0,

        initialize: function(){
            this.articles = this.caseStudyElem.find('article');
            var screenHeight = (kevinPortfolio.homeView.windowHeight - 16)
            var height = screenHeight/6;
            $('#date li').css('height', height);
            this.reinit();
            this.initEnterProjectAction();
        },

        initEnterProjectAction: function(){

            var dragCursor = $("#tdfDragCursor");
            var dragWidth = Math.round(dragCursor.width());
            var that = this;
            var slideSpace = $('#tdfDrag').width();
            var mouseMinPos = (kevinPortfolio.homeView.windowWidth - slideSpace)/2;
            var mouseMaxPos = mouseMinPos + slideSpace;
            var position;
            var startingPoint;
            var velo = $('.enter-elem img');

            dragCursor.on('mousedown', function(e){

                startingPoint = e.clientX;
                position = parseInt(dragCursor.css('margin-left').split('px')[0]);

                $(document).on('mousemove', function(e){
                    position = -(startingPoint - e.clientX);
                    velo.addClass('no-transition');
                    dragCursor.addClass('no-transition');

                    if(position>slideSpace - dragWidth){
                        velo.removeClass('no-transition');
                        dragCursor.removeClass('no-transition');
                        velo.css('margin-left', slideSpace - dragWidth + "px");
                        dragCursor.css('margin-left', slideSpace - dragWidth + "px");
                        return false;
                    } else if(position<0){
                        // enable transition
                        velo.removeClass('no-transition');
                        dragCursor.removeClass('no-transition');
                        velo.css('margin-left', 0 + "px");
                        dragCursor.css('margin-left', 0 + "px");
                        return false;
                    }

                    velo.css('margin-left', position + "px");
                    dragCursor.css('margin-left', position + "px");

                });

                $(document).on('mouseup', function(e){

                    // enable transition
                    velo.removeClass('no-transition');
                    dragCursor.removeClass('no-transition');
                    position = parseInt(dragCursor.css('margin-left').split('px')[0]);

                    $(document).unbind('mouseup');
                    $(document).unbind('mousemove');

                    // Marge d'erreur
                    if(position>slideSpace - dragWidth - 50){

                        dragCursor.css('margin-left', slideSpace - dragWidth + "px");
                        velo.css('margin-left', slideSpace - dragWidth + "px");
                        $('.border').toggleClass('close open');
                        $('#borderTop').on('webkitTransitionEnd', function(e){
                            $(this).unbind('webkitTransitionEnd');
                            that.enterProjectAnim();
                        });
                        return false;
                    }

                    dragCursor.css('margin-left', "0px");
                    velo.css('margin-left', "0px");

                });

            });
        },
        enterProjectAnim: function(){

            var that = this;
            $("#date").addClass('active');

            this.animateDate(that.enterProject);

        },
        animateDate:function(callback){
            var that = this;
            var listeElem = $("#date").find('li');
            var k = 0;
            var time = 7;
            var t = setInterval(function(){
                if(k==listeElem.length)
                {
                    clearInterval(t);
                    if(callback){
                        callback.call(that);
                    }
                    return true;
                }

                $(listeElem[k]).toggleClass("flipOn");
                k++;
                return true;
            },time);
        },
        enterProject: function(){
            var that = this;
            this.animateDate(function(){});
            this.displayProject();
            $('#tdfBgContent').css('display', 'none');
            this.caseStudyElem.css('display', 'block');
            
            _.each(this.articles, function(article){
                that.positionsArticle.push($(article).offset().top);
            });

            $(this.articles[0]).addClass('active');
            delete this.positionsArticle[0];

            this.scrollAnims();

        },
        displayProject: function(){
            kevinPortfolio.router.navigate('//100ansdetour/case-study');
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
        reinit: function(){
            // TODO
        },
        disableTransition: function($elem){
            $elem.removeClass('no-transition');
        },
        enableTransition: function($elem){
            $elem.removeClass('no-transition');
        },

    });

})();
