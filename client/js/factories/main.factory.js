app.factory("mainFactory", function($http){
	var factory={};
	factory.getSurveys = function(callback){
		$http.get("/surveys").then(function(surveys){
			callback(surveys.data);
		})
	}
	factory.addSurvey = function(newSurvey, callback){
		$http.post("/surveys", newSurvey).then(function(res){
			callback();
		})
	}
	factory.showSurvey= function(id, callback){
		$http.get("/surveys/"+id).then(function(survey){
			callback(survey.data);
		})
	}
	factory.vote=function(id, callback){
		$http.put("/surveys/"+id).then(function(survey){
			callback(survey.data);
		})
	}
	factory.removeSurvey=function(survey, callback){
		$http.delete("/surveys/"+survey._id).then(function(response){
			callback();
		});
	};
	return factory;
})