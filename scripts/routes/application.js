/*global kevinPortfolio, Backbone*/

kevinPortfolio.Routers = kevinPortfolio.Routers || {};

(function () {
    'use strict';

    kevinPortfolio.Routers.ApplicationRouter = Backbone.Router.extend({

		routes:{
			'partech': 'partechHandler',
			'social-coke':'socialCokeHandler',
			'100ansdetour':'_100ansDeTourHandler',
		},
		partechHandler: function(){
			kevinPortfolio.loadView(new kevinPortfolio.Views.partech());
		},
		socialCokeHandler: function(){
			kevinPortfolio.loadView(new kevinPortfolio.Views.socialCoke());
		},
		_100ansDeTourHandler: function(){
			kevinPortfolio.loadView(new kevinPortfolio.Views._100ansDeTour());
		}
    });

})();
