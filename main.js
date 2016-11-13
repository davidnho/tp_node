// console.log("Hello World");

// 3 Components of Node.js components

// 1. Import required modules
var http = require("http");
var express = require("express");

// 2. Create server
http.createServer(function (request,response) {
	response.writeHead(200,{'Content-Type': 'text/plain'});
	response.end('Hello Noel');
}).listen(8000);
console.log('Server running at http://localhost:8000');
 
// 3.  Read request and return response
	// run node main.js to run server
