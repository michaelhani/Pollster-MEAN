app.controller("mainController", function ($scope, $location, mainFactory){
	var that = this;
	$scope.errors={};
	this.logIn=function(){
		if(this.currentUser==undefined||this.currentUser==''){
			$scope.errors={msg:"Please enter a name"};
		}else{
			$scope.errors={msg:''};
			$location.path("/main");
		}
	};
	this.logOut=function(){
		that.currentUser="";
		$scope.errors={msg:''};
		$location.path('/')
	}
	this.addSurvey= function(){
		var survey=that.newSurvey;
		if(!that.newSurvey||!that.newSurvey.title||!that.newSurvey.option1||!that.newSurvey.option2||!that.newSurvey.option3||!that.newSurvey.option4){
			$scope.errors={msg:'All fields are required'};
		}else if(that.newSurvey.option1.length<4||that.newSurvey.option2.length<4||that.newSurvey.option3.length<4||that.newSurvey.option4.length<4){
			$scope.errors={msg:'All options must be at least 3 characters long'};
		}else if(that.newSurvey.title.length<9){
			$scope.errors={msg:'Question must be at least 8 characters long'};
		}else{
			survey.option1= {title: ""+survey.option1+"", likes:0};
			survey.option2= {title: ""+survey.option2+"", likes:0};
			survey.option3= {title: ""+survey.option3+"", likes:0};
			survey.option4= {title: ""+survey.option4+"", likes:0};
			survey.author=that.currentUser;
			mainFactory.addSurvey(survey, function(res){
				that.getSurveys();
			});
			that.newSurvey={};
			$location.path("/main");
		}
	};
	this.getSurveys= function(){
		$scope.surveys=[];
		mainFactory.getSurveys(function(data){
			$scope.surveys=data;
		});
	};
	this.showSurvey= function(id){
		mainFactory.showSurvey(id,function(data){
			$scope.displaySurvey=data;
			$location.path('/survey');
		})
	};
	this.vote=function(id){
		mainFactory.vote(id, function(res){
			that.showSurvey($scope.displaySurvey._id);
		})
	};
	this.removeSurvey=function(survey){
		mainFactory.removeSurvey(survey, function(){
				that.getSurveys();
			})
		}
	this.getSurveys();
});