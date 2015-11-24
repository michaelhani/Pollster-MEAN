var mongoose = require("mongoose");

var SurveySchema = new mongoose.Schema({
	title: String,
	author: String,
	options: [
		{title:String, likes: Number}, 
		{title:String, likes: Number}, 
		{title:String, likes: Number},
		{title:String, likes: Number}
	],
	created_at:{type: Date, default: Date.now}
});
mongoose.model("Survey", SurveySchema)