/*global kevinPortfolio, Backbone, JST*/

kevinPortfolio.Views = kevinPortfolio.Views || {};

(function () {
    'use strict';

	//------ HOME -----------//
	kevinPortfolio.Views.HomeView = Backbone.View.extend({

		homeProjectsContainer: $('.projects-container'),
		homeProjectClass: '.project',
		windowWidth: $(window).width(),
		windowHeight: $(window).height(),
    	intervalDragProject: null,
        el: $('.projects-container'),
        events: {
            "click .enter-button" : "enterProjectEvent",
        },
		initialize: function(){

			// Initialise les projets
			this.setProjectsSize();
			this.initProjectsHome();
		   	this.intervalDragProject = this.windowWidth/5;

            var that = this;
			$(window).on('resize',function(){
				that.windowResized();
            });

            $('.button-menu a').on('click', function(e){
                e.preventDefault();
                that.closeProjectEvent();
            });

        },

        setProjectsSize: function(){
            var projects = this.homeProjectsContainer.find(this.homeProjectClass);
            var projectNumber = projects.length;

            this.homeProjectsContainer.addClass('no-transition');
            // Set le conteneur pour accueillir tout les projets
            this.homeProjectsContainer.css('width', this.windowWidth*projectNumber + 'px');
            projects.css('width', this.windowWidth +'px');
            projects.css('height', this.windowHeight +'px');

        },

        // Event du resize du navigateur
        windowResized: function(){

            this.windowWidth = $(window).width();
            this.windowHeight = $(window).height();
            this.intervalDragProject = this.windowWidth/5;
            this.homeProjectsContainer.css('margin-left', -this.currentProject * this.windowWidth);
            this.setProjectsSize();

        },

        //------------- Slider Home ----------------//
        projectMapping:[],
        mousePositionX: null,
        currentProject:0,

        initProjectsHome: function(){
            var that = this;

            // Prevent le drag des images et des a
            this.homeProjectsContainer.find('img').on('dragstart',function(){return false;});
            this.homeProjectsContainer.find('a').on('dragstart',function(){return false;});

            _.each($(this.homeProjectClass), function(project){

                that.projectMapping.push($(project).attr('data-project'));

            });

            $(this.homeProjectClass).on('mousedown',function(e){

                that.mousePositionX = e.clientX;
                that.homeProjectsContainer.addClass('no-transition');

                $(document).on('mousemove', function(e){

                    var position = -that.currentProject*that.windowWidth + e.clientX-that.mousePositionX;
                    that.homeProjectsContainer.css('-webkit-transform','translate('+ position +'px, 0px)');

                });

                $(document).on('mouseup', function(e){

                    that.homeProjectsContainer.removeClass('no-transition');
                    that.sliderHandler(e);
                    $(this).unbind('mouseup');
                    $(this).unbind('mousemove');
                });

            });
        },
        sliderHandler: function(pEvent){

            if(pEvent.clientX>this.mousePositionX+200 && this.currentProject != 0){
                this.currentProject--;
            } else if(pEvent.clientX<this.mousePositionX-200 && this.currentProject != this.projectMapping.length-1){
                this.currentProject++;
            }
            this.mousePositionX = 0;

            kevinPortfolio.router.navigate( '//' + this.getActiveProjectName(), {trigger: true});

        },
        enterProjectEvent: function(e){
            e.preventDefault();
            kevinPortfolio.router.navigate('//' + this.getActiveProjectName() + '/case-study', {trigger: true})
            return false;
        },
        closeProjectEvent: function(e){
            kevinPortfolio.router.navigate('//' + this.getActiveProjectName(), {trigger: true})
            return false;
        },
        //Animation d'entré
        enterProjectAnim: function(){
            this.projectOpenned = true;
            $('.border').removeClass('close');
            $('.border').addClass('open');
            this.homeProjectsContainer.css('margin-top', -this.windowHeight+'px');
            this.homeProjectsContainer.addClass('project-container-closed');
            this.homeProjectsContainer.css('position', 'relative');
            kevinPortfolio.enterProject();
        },
        closeProjectAnim: function(){
            $('.border').removeClass('open');
            $('.border').addClass('close');
            this.homeProjectsContainer.css('margin-top', '0px');
            this.homeProjectsContainer.removeClass('project-container-closed');
            this.homeProjectsContainer.css('position', 'fixed');

            var that = this;

            this.homeProjectsContainer.one('transitionend', function(){
                that.projectOpenned = false;
                kevinPortfolio.closeProject();
            });
        },
        slideToProject: function(pProject){
            this.currentProject = this.getProjectNumberByName(pProject);
            this.homeProjectsContainer.css('-webkit-transform','translate('+ -this.currentProject * this.windowWidth +'px, 0px)');
        },
        // Helpers
        getActiveProjectName: function(){
            return this.projectMapping[this.currentProject];
        },
        getProjectNumberByName: function(pName){
            return _.indexOf(this.projectMapping, pName);
        },
        isValidProjectName: function(pName){

            if(_.indexOf(this.projectMapping, pName)>=0){
                return true;
            }

            return false;
        }
	});
})();
