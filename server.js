var express = require('express');
var app = express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(express.static(__dirname+"/client"));
require("./server/config/mongoose.js");
require('./server/config/routes.js')(app);
var port=process.env.PORT || 8000;
app.listen(port, function(){
	console.log("------------------");
	console.log("-------"+port+"-------");
	console.log("------------------");
});