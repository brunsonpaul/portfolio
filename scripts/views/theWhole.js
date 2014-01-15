/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.theWhole = Backbone.View.extend({

        caseStudyContainer: $('.case-study-container'),
        caseStudyElem: $('section[data-case-study="the-whole"]'),
        title: 'The Whole',
        name: 'the-whole',
        
        initialize: function(){

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
 activeAnchor: function(){
            var article2 = ($("#theWhole-concept").offset().top)-1;
            var article3 = ($("#theWhole-interface").offset().top)-1;
            var article4 = ($("#theWhole-element").offset().top)-1;
            var article5 = ($("#theWhole-madeWith").offset().top)-1;

            $(window).scroll(function(){

                if(($(document).scrollTop() == 0)&&($(document).scrollTop() < article2)){
                    $(".pagination.theWhole ul li:nth-of-type(1) a").addClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(5) a").removeClass("active");
                }
                else if(($(document).scrollTop() >article2)&&($(document).scrollTop() < article3)) {
                    $(".pagination.theWhole ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(2) a").addClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(5) a").removeClass("active");
                }
                else if(($(document).scrollTop() >article3)&&($(document).scrollTop() < article4)) {
                    $(".pagination.theWhole ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(3) a").addClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(5) a").removeClass("active");
                }
                else if(($(document).scrollTop() >article4)&&($(document).scrollTop() < article5)) {
                    $(".pagination.theWhole ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(4) a").addClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(5) a").removeClass("active");
                }
                else if($(document).scrollTop() >article5) {
                    $(".pagination.theWhole ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.theWhole ul li:nth-of-type(5) a").addClass("active");
                }
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

            $('.border').removeClass('close');
            $('.border').addClass('open');
            this.caseStudyElem.css({display:"block"});
            this.enterProject();
            app.homeView.homeProjectsContainer.css('display', 'none');
            $("#theWhole-introduction").addClass("active");

        },
        enterProject: function(){

            app.setCaseStudyActive(true);
            app.initScrollAnims();
            this.activeAnchor();

        },
        getName: function(){
            return this.name;
        }

    });

})();
