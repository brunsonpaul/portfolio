/*global kevinPortfolio, Backbone*/

kevinPortfolio.Collections = kevinPortfolio.Collections || {};

(function () {
    'use strict';

    kevinPortfolio.Collections.ApplicationCollection = Backbone.Collection.extend({

        model: kevinPortfolio.Models.ApplicationModel

    });

})();
