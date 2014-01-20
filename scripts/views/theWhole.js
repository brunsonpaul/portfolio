/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.theWhole = Backbone.View.extend({

        caseStudyContainer: $('.case-study-container'),
        caseStudyElem: $('section[data-case-study="the-whole"]'),
        title: 'The Whole',
        name: 'the-whole',
        anchorsPositions:[],
        anchorsName:"theWhole",
        initialize: function(){

        },
        initEnterProjectAction: function(){

        },
        enterProjectAnim: function(){

            var that = this;
            //Desactive le slider
            app.homeView.disableSlider();

            $("#theWholeProject").addClass("closed");
            
            $('body').removeClass('userSelect');

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
        refreshAnchors: function(){
            this.anchorsPositions = 
            [
                ($("#theWhole-introduction").offset().top)-1
                ,($("#theWhole-concept").offset().top)-1
                ,($("#theWhole-interface").offset().top)-1
                ,($("#theWhole-element").offset().top)-1
                ,($("#theWhole-madeWith").offset().top)-1
            ];
        },
        leaveProject: function(){

            $("#theWholeProject").removeClass("closed");
            $("#theWhole-introduction").removeClass("active");
            app.homeView.homeProjectsContainer.css('display', 'block');

            this.caseStudyElem.css('display', 'none');
            
            $('body').addClass('userSelect');

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
            $(".button-menu").removeClass("open");
            $(".button-menu").addClass("close");
            app.setCaseStudyActive(true);
            $("body").removeClass('userSelect');
            app.initScrollAnims();
            this.refreshAnchors();
            app.refreshAnchors();
        },
        getName: function(){
            return this.name;
        }

    });

})();
