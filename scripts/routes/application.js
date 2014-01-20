/*global app, Backbone*/

app.Routers = app.Routers || {};

(function () {
    'use strict';

    app.Routers.ApplicationRouter = Backbone.Router.extend({

		routes:{
			':project':'projectHandler',
			':project/case-study':'caseStudyHandler'
		},
		projectHandler: function(project){

			if(app.homeView.isValidProjectName(project)){

				if(app.activeProjectView && app.activeCaseStudy){
					// app.activeProjectView.leaveProject();
					app.leaveProject();
				}

				this.loadView(project);
				app.homeView.slideToProject(project);

			};
		},
		caseStudyHandler:function(project){
			if(app.isCaseStudyActive()){
				// TODO
				app.activeProjectView.leaveProject();
			}
			if(app.activeProjectView){
				if(app.activeProjectView.name == project){
					app.setCaseStudyActive(true);
					app.activeProjectView.enterProjectAnim();
					return true;
				}
			}

			this.loadView(project);
			app.activeProjectView.enterFromRouter();

		},
		loadView: function(project){
			switch(project){
				case 'social-coke':
					app.loadView(new app.Views.socialCoke());
				break;
				case 'partech':
					app.loadView(new app.Views.partech());
				break;
				case 'the-whole':
					app.loadView(new app.Views.theWhole());
				break;
				case '100ansdetour':
					app.loadView(new app.Views._100ansDeTour());
				break;
				default:
					app.loadView(null);
				break; 
			}
		}
    });

})();
