var tessel = require('tessel')
var climatelib = require('climate-si7020')
var relaylib = require('relay-mono')
var climate = climatelib.use(tessel.port['D'])
var relay = relaylib.use(tessel.port['C'])

climate.on('ready', function() {
  console.log('### connected to climate module')
  setImmediate(function loop () {
    climate.readTemperature('f', function (err, temp) {
      if (err) console.log('### ERROR in readTemperature', err)
      console.log('### Degrees', temp.toFixed(5))
      setTimeout(loop, 1000)
    })
  })
})
