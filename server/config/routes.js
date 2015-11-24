var surveys = require('../controllers/surveys.js');

module.exports=function(app){
	app.get("/surveys", function(req,res){
		surveys.show(req,res);
	});
	app.post("/surveys", function(req,res){
		surveys.add(req, res);
	});
	app.delete("/surveys/:id", function(req,res){
		surveys.remove(req,res);
	});
	app.get("/surveys/:id", function(req,res){
		surveys.showOne(req,res);
	})
	app.put('/surveys/:id', function (req, res){
		surveys.update(req,res);
	});
};