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

        },
        getName: function(){
            return this.name;
        }
    });

})();
