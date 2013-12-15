app.Models = app.Models || {};

(function () {
    'use strict';

    app.Models.ProjectModel = Backbone.Model.extend({
      sayHello: function(){
        alert("HELLO");
      }        
    });

})();
