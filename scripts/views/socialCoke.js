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
            // _.bindAll(this);
            console.log("initialize");
/*            var $socialCokeForm = $("#socialCokeForm");
            $socialCokeForm.on("submit", function(e){
                e.preventDefault();
                var pseudoText = $socialCokeForm.find('input[type="text"]').val();
                alert("submit");
                $socialCokeForm.append('<div id="pseudoSocialCoke">'+ pseudoText +'</div>');
                return false;
            });
*/
            // this.initEnterProjectAction();
        },
        events:{
            "focus input": "initEnterProjectAction"
        },
       initEnterProjectAction: function(e){
            e.preventDefault();
            console.log("OKKKKK");
            return false;
/*            var that = this;
            var $socialCokeForm = $("#socialCokeForm");
            var pseudoText;
            $socialCokeForm.on("keypress", function(e){
                if(e.keyCode == 13){
                    $socialCokeForm.submit();
                }
            });*/

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
