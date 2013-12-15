/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

    app.Views.socialCoke = Backbone.View.extend({
        // el: $('#socialCokeForm'),
        // el: $('.case-study-container'),
        caseStudyContainer: $('.case-study-container'),
        caseStudyElem: $('section[data-case-study="social-coke"]'),
        template: '',
        title: 'Social Coke',
        model: null,
        initialize: function(){

            this.initEnterProjectAction();

        },
        initEnterProjectAction: function(){

            var that = this;
            var $socialCokeForm = $("#socialCokeForm");
            var $inputText = $socialCokeForm.find('input[type="text"]');
            var pseudoText;

            $socialCokeForm.submit(function(e){
                e.preventDefault();
                pseudoText = $inputText.val();
                $socialCokeForm.append('<div id="pseudoSocialCoke">'+ pseudoText +'</div>');
                return false;

            });

        },

        enterProjectAnim: function(){

            var that = this;
            $('#date').addClass('active');
            $('.border').removeClass('close');
            $('.border').addClass('open');

        },

        enterProject: function(){

            app.initScrollAnims();

        }
    });
})();
