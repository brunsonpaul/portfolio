/*global kevinPortfolio, Backbone, JST*/

kevinPortfolio.Views = kevinPortfolio.Views || {};

(function () {
    'use strict';

    kevinPortfolio.Views.partech = Backbone.View.extend({

        template: $('partech'),
        title: 'Partech',
        initialize: function(){
        	console.log('partech');
        }

    });

})();
