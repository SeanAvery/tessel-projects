// var tessel = require('tessel')
// var ambientLib = require('ambient-attx4')
//
// var ambientSensor = ambientLib.use(tessel.port['A'])
//
// ambientSensor.on('ready', function() {
//   console.log('made it here!!')
//   setInterval(function() {
//     ambientSensor.getLightLevel(function(err, data) {
//       if(err) throw new Error('### Error reading from ambient sensor', err)
//       console.log('### Light Reading', data)
//     }, 1000)
//   })
// })
//
// ambientSensor.on('error', function(err) {
//   console.log('### Ambient Sensor Error', err)
// })

// Any copyright is dedicated to the Public Domain.
// http://creativecommons.org/publicdomain/zero/1.0/

/*********************************************
This ambient module example console.logs
ambient light and sound levels and whenever a
specified light or sound level trigger is met.
*********************************************/

var tessel = require('tessel');
var ambientlib = require('ambient-attx4');

var ambient = ambientlib.use(tessel.port['A']);

ambient.on('ready', function () {
 // Get points of light and sound data.
  setInterval( function () {
    ambient.getLightLevel( function(err, lightdata) {
      if (err) throw err;
      ambient.getSoundLevel( function(err, sounddata) {
        if (err) throw err;
        console.log("Light level:", lightdata.toFixed(8), " ", "Sound Level:", sounddata.toFixed(8));
      });
    });
  }, 500); // The readings will happen every .5 seconds
});

ambient.on('error', function (err) {
  console.log(err);
});
