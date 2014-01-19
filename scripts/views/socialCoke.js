/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.socialCoke = Backbone.View.extend({

        caseStudyContainer: $('.case-study-container'),
        caseStudyElem: $('section[data-case-study="social-coke"]'),
        title: 'Social Coke',
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
            // $('.transition-social-coke').css({height:app.homeView.windowHeight*4+"px"});
            // app.homeView.homeProjectsContainer.css("overflow","scroll");

        },
        initEnterProjectAction: function(){

            var that = this;

            var pseudoText;

            this.pseudoPositions.top = that.$inputText.offset().top;
            this.$socialCokeForm.submit(function(e){
                e.preventDefault();
                pseudoText = that.$inputText.val();

                that.$pseudoSocialCoke.text(pseudoText);
                that.$pseudoSocialCoke.css({zIndex: 1000, position:"fixed",top: that.pseudoPositions.top + 26 + "px"});
                that.widthPseudo = that.$pseudoSocialCoke.width();
                that.$pseudoSocialCoke.css({left:"50%", marginLeft: - that.widthPseudo/2 + "px"})

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
            $(".button-menu").removeClass("open");
            $(".button-menu").addClass("close");
            app.initScrollAnims();
            this.refreshAnchors();
            app.refreshAnchors();

            // Analytics
            ga('send', 'event', 'Case study', 'Click', 'Social case study');

        },

        enterFromRouter: function(){

            $('.border').removeClass('close');
            $('.border').addClass('open');
            this.caseStudyElem.css({display:"block"});
            this.enterProject();
            app.homeView.homeProjectsContainer.css('display', 'none');

        },

    });
})();
