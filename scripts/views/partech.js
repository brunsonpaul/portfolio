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

        activeAnchor: function(){
            var article2 = ($("#partech-client").offset().top)-1;
            var article3 = ($("#partech-dragScreen").offset().top)-1;
            var article4 = ($("#partech-sketch").offset().top)-1;
            var article5 = ($("#partech-mobile").offset().top)-1;
            var article6 = ($("#partech-ui").offset().top)-1;

            $(window).scroll(function(){

                if(($(document).scrollTop() == 0)&&($(document).scrollTop() < article2)){
                    $(".pagination.partech ul li:nth-of-type(1) a").addClass("active");
                    $(".pagination.partech ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(5) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(6) a").removeClass("active");
                }
                else if(($(document).scrollTop() >article2)&&($(document).scrollTop() < article3)) {
                    $(".pagination.partech ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(2) a").addClass("active");
                    $(".pagination.partech ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(5) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(6) a").removeClass("active");
                }
                else if(($(document).scrollTop() >article3)&&($(document).scrollTop() < article4)) {
                    $(".pagination.partech ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(3) a").addClass("active");
                    $(".pagination.partech ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(5) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(6) a").removeClass("active");
                }
                else if(($(document).scrollTop() >article4)&&($(document).scrollTop() < article5)) {
                    $(".pagination.partech ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(4) a").addClass("active");
                    $(".pagination.partech ul li:nth-of-type(5) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(6) a").removeClass("active");
                }
                else if(($(document).scrollTop() >article5)&&($(document).scrollTop() < article6)) {
                    $(".pagination.partech ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(5) a").addClass("active");
                    $(".pagination.partech ul li:nth-of-type(6) a").removeClass("active");
                }
                else if($(document).scrollTop() >article6) {
                    $(".pagination.partech ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(5) a").removeClass("active");
                    $(".pagination.partech ul li:nth-of-type(6) a").addClass("active");
                }
            });
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
            $('.closeLayout').css('height', '100%');
            $(".partechEnterLayout").removeClass("active");
            $('.closeLayout').animate({opacity:1},1000, function(){

                $('.border').removeClass('close');
                $('.border').addClass('open');

                $("#partech-introduction").removeClass("active");
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

            $('.border').removeClass('close');
            $('.border').addClass('open');
            this.caseStudyElem.css({display:"block"});
            this.enterProject();
            app.homeView.homeProjectsContainer.css('display', 'none');
            $("#partech-introduction").addClass("active");

        },
        enterProject: function(){

            app.setCaseStudyActive(true);
            app.initScrollAnims();
            this.dragScreen();
            this.activeAnchor();

        },
        getName: function(){
            return this.name;
        }
    });

})();
