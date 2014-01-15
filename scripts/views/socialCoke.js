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
        initialize: function(){

            this.initEnterProjectAction();

        },
        initEnterProjectAction: function(){

            var that = this;

            var pseudoText;

            this.pseudoPositions.top = that.$inputText.offset().top;
            this.$socialCokeForm.submit(function(e){
                e.preventDefault();
                pseudoText = that.$inputText.val();

                that.$pseudoSocialCoke.text(pseudoText);
                that.$pseudoSocialCoke.css({zIndex: 1000, position:"fixed",top: that.pseudoPositions.top + 25 + "px"});
                that.widthPseudo = that.$pseudoSocialCoke.width();
                that.$pseudoSocialCoke.css({left:"50%", marginLeft: - that.widthPseudo/2 + "px"})

                that.enterProjectAnim();

                return false;

            });

        },

         activeAnchor: function(){
            var article2 = ($("#socialCoke-context").offset().top)-1;
            var article3 = ($("#socialCoke-idea").offset().top)-1;
            var article4 = ($("#socialCoke-interest").offset().top)-1;
            var article5 = ($("#socialCoke-universe").offset().top)-1;
            var article6 = ($("#socialCoke-bottle").offset().top)-1;
            var article7 = ($("#socialCoke-madeWith").offset().top)-1;

            $(window).scroll(function(){

                if(($(document).scrollTop() == 0)&&($(document).scrollTop() < article2)){
                    $(".pagination.socialCoke ul li:nth-of-type(1) a").addClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(5) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(6) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(7) a").removeClass("active");
                }
                else if(($(document).scrollTop() >article2)&&($(document).scrollTop() < article3)) {
                    $(".pagination.socialCoke ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(2) a").addClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(5) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(6) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(7) a").removeClass("active");
                }
                else if(($(document).scrollTop() >article3)&&($(document).scrollTop() < article4)) {
                    $(".pagination.socialCoke ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(3) a").addClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(5) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(6) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(7) a").removeClass("active");
                }
                else if(($(document).scrollTop() >article4)&&($(document).scrollTop() < article5)) {
                    $(".pagination.socialCoke ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(4) a").addClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(5) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(6) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(7) a").removeClass("active");
                }
                else if(($(document).scrollTop() >article5)&&($(document).scrollTop() < article6)) {
                    $(".pagination.socialCoke ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(5) a").addClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(6) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(7) a").removeClass("active");
                }
                else if(($(document).scrollTop() >article6)&&($(document).scrollTop() < article7)) {
                    $(".pagination.socialCoke ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(5) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(6) a").addClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(7) a").removeClass("active");
                }
                else if($(document).scrollTop() >article7) {
                    $(".pagination.socialCoke ul li:nth-of-type(1) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(2) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(3) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(4) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(5) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(6) a").removeClass("active");
                    $(".pagination.socialCoke ul li:nth-of-type(7) a").addClass("active");
                }
            });
        },

        enterProjectAnim: function(){

            var that = this;
            this.$socialCokeForm.fadeOut("slow");
            $('#date').addClass('active');
            $('.border').removeClass('close');
            $('.border').addClass('open');
            $('#borderLeft').bind("webkitTransitionEnd", function(e){
                $(this).unbind("webkitTransitionEnd");
                that.caseStudyElem.css("display","block");
            });

        },

        enterProject: function(){

            app.initScrollAnims();
            this.activeAnchor();

        }
    });
})();
