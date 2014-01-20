/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.partech = Backbone.View.extend({

        el: $('.case-study-container'),
        caseStudyContainer: $('.case-study-container'),
        caseStudyElem: $('section[data-case-study="partech"]'),
        template: '',
        title: 'Partech',
        name: 'partech',

        // Elements du case study
        dragCursorPartech: $(".dragCursorPartech"),
        partechScreen: $('#partechScreenImg'),

        anchorsPositions:[],
        anchorsName:"partech",
        dragScreen: function(){
            var that = this;
            var dragWidth = Math.round(that.dragCursorPartech.width());
            var slideSpace = ($('.toDrag').width())-22;
            var mouseMinPos = (app.homeView.windowWidth - slideSpace)/2;
            var mouseMaxPos = mouseMinPos + slideSpace;
            var position;
            var startingPoint;
            var dragScreenIndice = 990/slideSpace;
            
            that.dragCursorPartech.on('mousedown', function(e){
                
                startingPoint = parseInt(that.dragCursorPartech.css('margin-left').split('px')[0]);

                position = parseInt(that.dragCursorPartech.css('margin-left').split('px')[0]);

                $(document).on('mousemove', function(e){
                    var windowWidth = $(window).width();
                    if(windowWidth>slideSpace){
                        position =(e.clientX-((windowWidth-slideSpace)/2));
                    } else {
                        position =(e.clientX);
                    }

                    if(position>slideSpace - dragWidth){
                        that.dragCursorPartech.css('margin-left', slideSpace - dragWidth + "px");
                        return false;
                    } else if(position<0){
                        that.dragCursorPartech.css('margin-left', 0 + "px");
                        return false;
                    }
                    that.dragCursorPartech.css('margin-left', position + "px");
                    that.partechScreen.css('margin-left', -position/dragScreenIndice + "px");
                });
                $(document).on('mouseup', function(e){

                    position = parseInt(that.dragCursorPartech.css('margin-left').split('px')[0]);

                    $(document).unbind('mouseup');
                    $(document).unbind('mousemove');
                    
                    that.dragCursorPartech.css('margin-left', position + "px");
                    that.partechScreen.css('margin-left', -position/dragScreenIndice + "px");
                });
            });
        },
        refreshAnchors: function(){
            this.anchorsPositions = 
            [
                ($("#partech-introduction").offset().top)-1
                ,($("#partech-client").offset().top)-1
                ,($("#partech-dragScreen").offset().top)-1
                ,($("#partech-sketch").offset().top)-1
                ,($("#partech-mobile").offset().top)-1
                ,($("#partech-ui").offset().top)-1
            ];
        },
        initialize: function(){
            $("#partechProject .enter-button").on("click", this.enterProjectAnim);
        },
        enterProjectAnim: function(){

            var that = this;

            //Desactive le slider
            app.homeView.disableSlider();
            $('.border').removeClass('close');
            $('.border').addClass('open');

            app.homeView.disableSlider();
            $(".partechEnterLayout").addClass("active");
            $(".partechEnterLayout").bind("webkitTransitionEnd", function(e){

                $(this).unbind("webkitTransitionEnd");

                app.router.navigate('/'+that.getName()+'/case-study', {trigger: false});

                app.homeView.homeProjectsContainer.css('display', 'none');
                that.caseStudyElem.css({display:"block"});
                setTimeout(function(){$("#partech-introduction").addClass("active");clearTimeout(this);}, 100);
                that.enterProject();
            });

        },
        leaveProject: function(){

            var that = this;
            $(".partechEnterLayout").removeClass("active");

            $("#partech-introduction").removeClass("active");
            app.homeView.homeProjectsContainer.css('display', 'block');

            that.caseStudyElem.css('display', 'none');
            $('body').addClass('userSelect');

        },
        enterFromRouter: function(){

            $('.border').removeClass('close');
            $('.border').addClass('open');
            this.caseStudyElem.css({display:"block"});
            this.enterProject();
            app.homeView.homeProjectsContainer.css('display', 'none');
            $("#partech-introduction").addClass("active");

        },
        enterProject: function(){
            $('body').removeClass('userSelect');
            $(".button-menu").removeClass("open");
            $(".button-menu").addClass("close");
            app.setCaseStudyActive(true);
            $("body").removeClass('userSelect');
            app.initScrollAnims();
            this.dragScreen();
            this.refreshAnchors();
            app.refreshAnchors();
        },
        getName: function(){
            return this.name;
        }
    });

})();
