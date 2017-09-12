//import the interface for Tessel
var tessel = require('tessel');

//set led pins as outputs with initial states

var led1 = tessel.led[0].output(1);
var led2 = tessel.led[1].output(0);
var led3 = tessel.led[2].output(0)

setInterval(function() {
	//toggle the led states
	led1.toggle();
	led2.toggle();
	led3.toggle()
}, 1000);
