/*global kevinPortfolio, Backbone, JST*/

kevinPortfolio.Views = kevinPortfolio.Views || {};

(function () {
    'use strict';

    kevinPortfolio.Views._100ansDeTour = Backbone.View.extend({

        template: $('coucou'),
        title: '100ans de Tour',
        initialize: function(){
        	console.log('100ans de tour');
        }

    });

})();
