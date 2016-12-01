var express = require('express');
var app = express();
var cons = require('consolidate');
// view engine setup
app.engine('html', cons.swig);
app.set('views', 'views');
app.set('view engine', 'html');

app.use(express.static('public'));

app.get('/hello',function(req,res){
	res.send("Hello Noel");
});

app.get('/home',function(req,res){
	res.render("home");
});

app.listen(8086,function(){
	console.log("Listening to http://localhost:8086");
});
