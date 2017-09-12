var tessel = require('tessel')
var climateLib = require('climate-si7020')

var climateSensor = climateLib.use(tessel.port['A'])

climateSensor.on('ready', function() {
  console.log('climate sensor engaged')
})

climateSensor.on('error', function(err) {
  console.log('err', err)
})
