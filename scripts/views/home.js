/*global app, Backbone, JST*/

app.Views = app.Views || {};

(function () {
    'use strict';

	//------ HOME -----------//
	app.Views.HomeView = Backbone.View.extend({

		homeProjectsContainer: $('.projects-container'),
		homeProjectClass: '.project',
		windowWidth: $(window).width(),
		windowHeight: $(window).height(),
    	intervalDragProject: null,
        events: {
            "click .enter-button" : "enterProjectEvent",
            "onkeydown document": "slideWithKeyboard"
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
            $('.enter-button').on("click", function(e){
                that.enterProjectEvent(e);
            });
            $('body').bind("keyup", function(e){
                that.slideWithKeyboard(e,that);
            });

        },

        scrollTo: function(){
           $(".pagination ul li a").click(function(e) {
                var href = $(this).attr('href');
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: $(href).offset().top
                }, 2000);
            });
        },

        setProjectsSize: function(){
            var projects = this.homeProjectsContainer.find(this.homeProjectClass);
            var projectNumber = projects.length;

            // this.homeProjectsContainer.addClass('no-transition');
            // Set le conteneur pour accueillir tout les projets
            this.homeProjectsContainer.css('width', this.windowWidth*projectNumber + 'px');
            projects.css('width', this.windowWidth +'px');
            projects.css('height', this.windowHeight +'px');
            $('#theWholePlanet').css(
                {
                    height: this.windowHeight/4.5 +'px',
                    width: this.windowHeight/4.5 +'px',
                    marginLeft:-(this.windowHeight/4.5)/2 +'px',
                    marginTop:-((this.windowHeight/4.5)/2-40) +'px',
                }
            );
            $('#theWholeSolar').css(
                {
                    height: this.windowHeight/1.38 +'px',
                    width: this.windowHeight/1.38 +'px',
                    marginLeft:-(this.windowHeight/1.38)/2 +'px',
                    marginTop:-((this.windowHeight/1.38)/2-40) +'px',
                }
            );            
            $('#theWholeFbPlanet').css(
                {
                    height: this.windowHeight/1.38 +'px',
                    width: this.windowHeight/1.38 +'px',
                    marginLeft:-(this.windowHeight/1.38)/2 +'px',
                    marginTop:-((this.windowHeight/1.38)/2-40) +'px',
                }
            );            
            $('#theWholeTwPlanet').css(
                {
                    height: this.windowHeight/1.38 +'px',
                    width: this.windowHeight/1.38 +'px',
                    marginLeft:-(this.windowHeight/1.38)/2 +'px',
                    marginTop:-((this.windowHeight/1.38)/2-40) +'px',
                }
            );          
            $('#theWholeLfPlanet').css(
                {
                    height: this.windowHeight/1.38 +'px',
                    width: this.windowHeight/1.38 +'px',
                    marginLeft:-(this.windowHeight/1.38)/2 +'px',
                    marginTop:-((this.windowHeight/1.38)/2-40) +'px',
                }
            );        
            $('#theWholeScPlanet').css(
                {
                    height: this.windowHeight/1.38 +'px',
                    width: this.windowHeight/1.38 +'px',
                    marginLeft:-(this.windowHeight/1.38)/2 +'px',
                    marginTop:-((this.windowHeight/1.38)/2-40) +'px',
                }
            );
            $('#theWholeRssPlanet').css(
                {
                    height: this.windowHeight/1.38 +'px',
                    width: this.windowHeight/1.38 +'px',
                    marginLeft:-(this.windowHeight/1.38)/2 +'px',
                    marginTop:-((this.windowHeight/1.38)/2-40) +'px',
                }
            );
            $('#theWholePinPlanet').css(
                {
                    height: this.windowHeight/1.38 +'px',
                    width: this.windowHeight/1.38 +'px',
                    marginLeft:-(this.windowHeight/1.38)/2 +'px',
                    marginTop:-((this.windowHeight/1.38)/2-40) +'px',
                }
            );
            $('#theWhole-introduction').css(
                {
                    height: this.windowHeight+'px',
                }
            );
            $('#tdf-introduction').css(
                {
                    height: this.windowHeight+'px',
                }
            );
            $('#partech-introduction').css(
                {
                    height: this.windowHeight+'px',
                }
            );

        },

        // Event du resize du navigateur
        windowResized: function(){

            this.disableTransition();
            this.windowWidth = $(window).width();
            this.windowHeight = $(window).height();
            this.intervalDragProject = this.windowWidth/5;
            this.setProjectsSize();
            var position = -this.currentProject*this.windowWidth;
            this.homeProjectsContainer.css('-webkit-transform','translate3d('+ position +'px, 0px, 0px)');
            this.enableTransition();
        },

        //------------- Slider Home ----------------//
        projectMapping:[],
        mousePositionX: null,
        currentProject:0,
        isSliderActive: true,
        initProjectsHome: function(){
            var that = this;

            this.scrollTo();

            // Prevent le drag des images et des a
            this.homeProjectsContainer.find('img').on('dragstart',function(){return false;});
            this.homeProjectsContainer.find('a').on('dragstart',function(){return false;});
            this.homeProjectsContainer.css('width','12000px');
            // Mapping des projets
            _.each($(this.homeProjectClass), function(project){
                that.projectMapping.push($(project).attr('data-project'));
            });

            // Prevent du drag des projets sur les éléments avec pour class noSlide
            $(".noSlide").on('click',function(e){e.preventDefault()});
            $(".noSlide").on('mousedown', function(e){
                that.disableSlider(e);
                $(document).on('mouseup',function(e){
                    that.enableSlider(e);
                    $(this).unbind('mouseup');
                });
            });

            $(this.homeProjectClass).on('mousedown',function(e){

                if(!that.isSliderActive) return false;
                that.mousePositionX = e.clientX;
                that.homeProjectsContainer.addClass('no-transition');

                $(document).on('mousemove', function(e){

                    var position = -that.currentProject*that.windowWidth + e.clientX-that.mousePositionX;
                    that.homeProjectsContainer.css({
                        '-webkit-transform':'translate3d('+ position +'px, 0px, 0px)',
                        '-moz-transform':'translate3d('+ position +'px, 0px, 0px)',
                        '-o-transform':'translate3d('+ position +'px, 0px, 0px)',
                        '-ms-transform':'translate3d('+ position +'px, 0px, 0px)',
                        'transform':'translate3d('+ position +'px, 0px, 0px)',
                    });

                });

                $(document).on('mouseup', function(e){

                    that.homeProjectsContainer.removeClass('no-transition');
                    that.sliderHandler(e);
                    $(this).unbind('mouseup');
                    $(this).unbind('mousemove');
                });

            });
            app.updateMenu(this.getActiveProjectNumber());
        },
        sliderHandler: function(pEvent){
            var _currentProject = this.currentProject;
            if(pEvent.clientX>this.mousePositionX+200 && this.currentProject != 0){
                this.currentProject--;
            } else if(pEvent.clientX<this.mousePositionX-200 && this.currentProject != this.projectMapping.length-1){
                this.currentProject++;
            }

            this.mousePositionX = 0;

            // Hack pour déclencher l'event du router en cas de non changement de projet
            if(this.currentProject == _currentProject){
                this.slideToProject(this.getActiveProjectName());
                return true;
            }
            this.slideToCurrentProject();


        },
        slideToCurrentProject: function(){
            this.slideToProject(this.getActiveProjectName());
            app.updateMenu(this.getActiveProjectNumber());
            Backbone.history.fragment = null;
            app.router.navigate(this.getActiveProjectName(), {trigger:true});
        },
        slideWithKeyboard: function(e, that){

            var keyCode = e.keyCode;
            
            if(app.isCaseStudyActive()){
                return true;
            }
            
            if(keyCode == 37 && this.currentProject != 0){
                that.currentProject--;
            }
            if(keyCode == 39 && this.currentProject != this.projectMapping.length-1){
                that.currentProject++;
            }
            if(keyCode == 13 && app.activeProjectView && (app.activeProjectView.getName() != 'social-coke')){
                app.activeProjectView.enterProjectAnim();
            }
            that.slideToCurrentProject();
        },
        enterProjectEvent: function(e){
            e.preventDefault();
            app.getActiveView().enterProjectAnim();
            app.updateMenu(this.getActiveProjectNumber());
            // app.router.navigate('/' + this.getActiveProjectName() + '/case-study', {trigger: true})
            return false;
        },
        closeProjectEvent: function(e){
            app.router.navigate('/' + this.getActiveProjectName(), {trigger: true})
            return false;
        },
        slideToProject: function(pProject){
            this.currentProject = this.getProjectNumberByName(pProject);
            app.updateMenu(this.getActiveProjectNumber());
            /*
                TODO PREFIXER
                 -webkit-transform -moz-transform -ms-transform -o-transform
             */
            this.homeProjectsContainer.css('-webkit-transform','translate3d('+ -this.currentProject * this.windowWidth +'px, 0px, 0px)');
        },

        // Helpers
        // Récupère le nom du projet actif en fonction de currentProject pour le routage 
        getActiveProjectNumber: function(){
            return this.currentProject;
        },
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
        },
        disableSlider: function(e){
            this.homeProjectsContainer.removeClass('dragCursor');
            this.isSliderActive = false;
        },
        enableSlider: function(e){
            this.homeProjectsContainer.addClass('dragCursor');
            this.isSliderActive = true;
        },
        disableTransition: function(){
            this.homeProjectsContainer.addClass('no-transition');
        },
        enableTransition: function(){
            this.homeProjectsContainer.removeClass('no-transition');
        }
	});
})();
