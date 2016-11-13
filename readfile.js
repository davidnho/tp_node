// main.js from the tutorial - https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm
var fs = require("fs");

// //blocking example 
// var data = fs.readFileSync("input.txt");
// console.log(data.toString());

//non-blocking example 
fs.readFile('input.txt',function(err,data){
	if(err) return console.error(err);
	console.error(data.toString());
});

console.log("Program Ended");