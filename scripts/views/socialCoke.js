/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.socialCoke = Backbone.View.extend({

        caseStudyContainer: $('.case-study-container'),
        caseStudyElem: $('section[data-case-study="social-coke"]'),
        title: 'Social Coke',
        name: 'social-coke',
        model: null,
        pseudoPositions:{},
        $pseudoSocialCoke: $("#pseudoSocialCoke"),
        widthPseudo: 0,
        $socialCokeForm: $("#socialCokeForm"),
        $inputText: $("#socialCokeForm").find('input[type="text"]'),

        anchorsPositions:[],
        anchorsName:"socialCoke",

        initialize: function(){

            this.initEnterProjectAction();

        },
        initEnterProjectAction: function(){

            var that = this;

            var pseudoText;

            this.pseudoPositions.top = that.$inputText.offset().top;
            this.$socialCokeForm.submit(function(e){

                e.preventDefault();

                if(that.$inputText.val()){
                    pseudoText = "@"+that.$inputText.val();
                } else {
                    pseudoText = "@pseudo";
                }

                that.$pseudoSocialCoke.text(pseudoText);

                $(this).fadeOut(1000,function(){
                    that.enterProjectAnim();
                })

                return false;

            });

        },
        refreshAnchors: function(){
            this.anchorsPositions = 
            [
                ($("#socialCoke-introduction").offset().top)-1
                ,($("#socialCoke-context").offset().top)-1
                ,($("#socialCoke-idea").offset().top)-1
                ,($("#socialCoke-interest").offset().top)-1
                ,($("#socialCoke-universe").offset().top)-1
                ,($("#socialCoke-bottle").offset().top)-1
                ,($("#socialCoke-madeWith").offset().top)-1
            ];
        },
        enterProjectAnim: function(){

            var that = this;
            this.$socialCokeForm.fadeOut("slow");
            $('#date').addClass('active');
            $('.border').removeClass('close');
            $('.border').addClass('open');
            app.homeView.homeProjectsContainer.css("overflow","scroll");
            app.homeView.disableTransition();
            app.router.navigate('/'+this.name+'/case-study', {trigger: false});
            that.enterProject();
            app.homeView.homeProjectsContainer.animate({
                top: -app.homeView.windowHeight*2},
                2000, function() {
                app.homeView.enableTransition();
                // that.caseStudyElem.css("display","block");
                /* stuff to do after animation is complete */
            });
            this.caseStudyElem.css({display:"block", marginTop:app.homeView.windowHeight*2});
            that.caseStudyElem.animate({
                marginTop: "0px"},
                2000, function() {
                
                /* stuff to do after animation is complete */
            });
        },

        enterProject: function(){
            $('body').removeClass('userSelect');
            $(".button-menu").removeClass("open");
            $(".button-menu").addClass("close");
            app.setCaseStudyActive(true);
            app.initScrollAnims();
            this.refreshAnchors();
            app.refreshAnchors();
            // Analytics
            ga('send', 'event', 'Case study', 'Click', 'Social case study');

        },
        leaveProject: function(){
            var that = this;

            app.homeView.homeProjectsContainer.css({'display':'block','top':'0px'});
            this.$socialCokeForm.fadeIn("slow");
            that.caseStudyElem.css('display', 'none');
            $('body').addClass('userSelect');

        },
        enterFromRouter: function(){

            $('.border').removeClass('close');
            $('.border').addClass('open');
            this.caseStudyElem.css({display:"block", marginTop:app.homeView.windowHeight*2});
            this.enterProject();
            app.homeView.homeProjectsContainer.css('display', 'none');

        },
        getName: function(){
            return this.name;
        }
    });
})();
