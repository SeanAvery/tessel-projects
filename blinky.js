//import the interface for Tessel
var tessel = require('tessel');

//set led pins as outputs with initial states

var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(0);

setInterval(function() {
	console.log("yess I am blinking!")
	//toggle the led states
	led1.toggle();
	led2.toggle();
}, 1000);