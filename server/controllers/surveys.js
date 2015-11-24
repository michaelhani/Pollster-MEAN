var mongoose = require("mongoose");
var survey = mongoose.model("Survey");

module.exports={
	show: function(req, res){
		survey.find({}, function(err, results){
			if(err){
				console.log(err);
			}else{
				res.json(results)
			}
		});
	},
	add: function(req, res){
		var newSurvey = new survey();
		newSurvey.title=req.body.title;
		newSurvey.author=req.body.author;
		newSurvey.options=[req.body.option1, req.body.option2, req.body.option3, req.body.option4];
		newSurvey.save(function(err, survey){
			if(err){
				console.log(err);
			}else{
				res.json({status:true});
			}
		});
	},
	showOne: function(req,res){
		survey.findOne({_id:req.params.id}, function(err, survey){
			if(err){
				console.log(err);
			}else{
				res.json(survey);
			}
		});
	},
	remove: function(req,res){
		survey.remove({_id:req.params.id}, function(err){
			if(err){
				console.log(err);
			}else{
				res.json({msg:"success"});
			}
		});
	},
	update: function(req,res){
		survey.update({"options._id":{$in:[req.params.id]}}, {$inc:{"options.$.likes":1}}, function(err){
			if(err){
				console.log(err);
			}else{
				res.json({staus:true});
			}
		});
	}
}