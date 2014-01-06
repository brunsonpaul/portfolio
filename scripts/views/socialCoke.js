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

        }
    });
})();
