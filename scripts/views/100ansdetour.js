/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views._100ansDeTour = Backbone.View.extend({

        caseStudyContainer: $('.case-study-container'),
        caseStudyElem: $('section[data-case-study="100ansdetour"]'),
        title: '100ans de Tour',
        name: '100ansdetour',
        positionsArticle: [],
        articles: [],
        mousePositionX:0,
        initialize: function(){
            var that = this;

            $('.close-button').on('click', function(e){
                e.preventDefault();
                app.router.navigate('/'+that.name, {trigger: true});

            });

            this.articles = this.caseStudyElem.find('article');
            var screenHeight = (app.homeView.windowHeight - 16)
            var height = screenHeight/6;
            $('#date li').css('height', height);
            this.initEnterProjectAction();
        },

        // Elements de la page d'accueil
        dragCursor: $("#tdfDragCursor"),
        velo: $('.enter-elem img'),
        initEnterProjectAction: function(){

            var that = this;
            var dragWidth = Math.round(that.dragCursor.width());
            var slideSpace = $('#tdfDrag').width();
            var mouseMinPos = (app.homeView.windowWidth - slideSpace)/2;
            var mouseMaxPos = mouseMinPos + slideSpace;
            var position;
            var startingPoint;

            that.dragCursor.on('mousedown', function(e){

                startingPoint = e.clientX;
                position = parseInt(that.dragCursor.css('margin-left').split('px')[0]);

                $(document).on('mousemove', function(e){
                    position = -(startingPoint - e.clientX);
                    that.velo.addClass('no-transition');
                    that.dragCursor.addClass('no-transition');

                    if(position>slideSpace - dragWidth){
                        that.velo.removeClass('no-transition');
                        that.dragCursor.removeClass('no-transition');
                        that.velo.css('margin-left', slideSpace - dragWidth + "px");
                        that.dragCursor.css('margin-left', slideSpace - dragWidth + "px");
                        return false;
                    } else if(position<0){
                        // enable transition
                        that.velo.removeClass('no-transition');
                        that.dragCursor.removeClass('no-transition');
                        that.velo.css('margin-left', 0 + "px");
                        that.dragCursor.css('margin-left', 0 + "px");
                        return false;
                    }

                    that.velo.css('margin-left', position + "px");
                    that.dragCursor.css('margin-left', position + "px");

                });

                $(document).on('mouseup', function(e){

                    // enable transition
                    that.velo.removeClass('no-transition');
                    that.dragCursor.removeClass('no-transition');
                    position = parseInt(that.dragCursor.css('margin-left').split('px')[0]);

                    $(document).unbind('mouseup');
                    $(document).unbind('mousemove');

                    // Marge d'erreur
                    if(position>slideSpace - dragWidth - 50){

                        that.dragCursor.css('margin-left', slideSpace - dragWidth + "px");
                        that.velo.css('margin-left', slideSpace - dragWidth + "px");
                        $('.border').toggleClass('close open');
                        $('#borderTop').on('webkitTransitionEnd', function(e){

                            $(this).unbind('webkitTransitionEnd');

                            app.router.navigate('/'+that.name+'/case-study', {trigger: false});
                            that.enterProjectAnim();

                        });
                        return false;
                    }

                    that.dragCursor.css('margin-left', "0px");
                    that.velo.css('margin-left', "0px");

                });

            });
        },
        enterProjectAnim: function(){

            var that = this;
            $('#date').addClass('active');
            $('.border').removeClass('close');
            $('.border').addClass('open');
            //Desactive le slider
            app.homeView.disableSlider();
            this.animateDate(that.enterProject, true);

        },
        // Direction true ouvrir, false fermer
        animateDate:function(callback, direction){
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
                if(direction){
                    $(listeElem[k]).removeClass("flipOn");
                } else {
                    $(listeElem[k]).addClass("flipOn");
                }
                k++;
                return true;
            },time);
        },
        enterProject: function(){
            var that = this;

            app.setCaseStudyActive(true);
            $('#tdfBgContent').css('display', 'none');
            this.caseStudyElem.css('display', 'block');

            this.animateDate(function(){
                app.homeView.homeProjectsContainer.css('display', 'none');
                $('#date').removeClass('active');
            }, false);

            
            _.each(this.articles, function(article){
                that.positionsArticle.push($(article).offset().top);
            });

            $(this.articles[0]).addClass('active');
            delete this.positionsArticle[0];

            this.scrollAnims();
        },

        leaveProject: function(){
            var that = this;
            $('.closeLayout').css('height', '100%');
            $('.closeLayout').animate({opacity:1},1000, function(){

                $('.border').removeClass('close');
                $('.border').addClass('open');
                $('#tdfBgContent').css('display', 'block');
                app.homeView.homeProjectsContainer.css('display', 'block');
                that.caseStudyElem.css('display', 'none');

                $(this).animate({opacity:0},1000, function(){

                    $('.closeLayout').css({height:'0%'});
                    $('.border').removeClass('open');
                    $('.border').addClass('close');
                    that.velo.css('margin-left', 0 + "px");
                    that.dragCursor.css('margin-left', 0 + "px");

                });

            });
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
        enterFromRouter: function(){
            $('.border').removeClass('close');
            $('.border').addClass('open');
            app.homeView.homeProjectsContainer.css('display', 'none');
            this.caseStudyElem.css('display', 'block');
        },
        disableTransition: function($elem){
            $elem.removeClass('no-transition');
        },
        enableTransition: function($elem){
            $elem.removeClass('no-transition');
        },
        getName: function(){
            return this.name;
        }

    });

})();
