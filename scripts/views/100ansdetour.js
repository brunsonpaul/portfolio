/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views._100ansDeTour = Backbone.View.extend({

        caseStudyContainer: $('.case-study-container'),
        caseStudyElem: $('section[data-case-study="100ansdetour"]'),
        title: '100ans de Tour',
        name: '100ansdetour',
        mousePositionX:0,

        initialize: function(){

            var that = this;

            $('.close-button').on('click', function(e){
                e.preventDefault();
                app.router.navigate('/'+that.name, {trigger: true});
            });

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
                        //Desactive le slider
                        app.homeView.disableSlider();
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
            this.animateDate(that.enterProject, true);

        },

        etapesIncrease: function(){
            var nbEtapes = $('#nb-etapes.active');
            var nbParcours = $('#nb-parcours.active');
            var nbParticipants = $('#nb-participants.active');

            $({someValue: 0}).animate({someValue: 2001}, {
                duration: 3000,
                easing:'swing',
                step: function() { 
                  nbEtapes.text(Math.round(this.someValue));
                }
            });
            $({someValue: 0}).animate({someValue: 426068}, {
                duration: 3000,
                easing:'swing',
                step: function() { 
                  nbParcours.text(Math.round(this.someValue));
                }
            });
            $({someValue: 0}).animate({someValue: 13947}, {
                duration: 3000,
                easing:'swing',
                step: function() { 
                  nbParticipants.text(Math.round(this.someValue));
                }
            });
        },


        dataIncrease: function(){
            var that = this;
            var run = false;

            $(window).on('scroll', function(){
                if ($('#nb-etapes').hasClass('active') && run == false) {
                    that.etapesIncrease();
                    run = true;
                }
            });
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

            app.initScrollAnims();
            this.dataIncrease();
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
                    app.homeView.enableSlider();
                    app.activeCaseStudy = null;
                    $('.closeLayout').css({height:'0%'});
                    $('.border').removeClass('open');
                    $('.border').addClass('close');
                    that.velo.css('margin-left', 0 + "px");
                    that.dragCursor.css('margin-left', 0 + "px");

                });

            });
        },

        enterFromRouter: function(){
            $('.border').removeClass('close');
            $('.border').addClass('open');
            app.homeView.homeProjectsContainer.css('display', 'none');
            this.caseStudyElem.css('display', 'block');
            this.enterProject();
        },

        disableTransition: function($elem){
            $elem.removeClass('no-transition');
        },

        enableTransition: function($elem){
            $elem.addClass('no-transition');
        },

        getName: function(){
            return this.name;
        }

    });

})();
