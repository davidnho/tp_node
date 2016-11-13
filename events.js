// import events module
var events = require("events");

// create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// create an event handler as follows
var connectHandler = function connected() {
	console.error('connection successful');

	// fire the date_received event
	eventEmitter.emit('data_received')
}

// bind the connection event with the handler
eventEmitter.on('connection',connectHandler);

// bind the received event with the anonymous function
eventEmitter.on('data_received',function(){
 console.log('data received succesfully.');
});

// Fire the connection event 
eventEmitter.emit('connection');

console.log("Program Ended.");