const five = require("johnny-five")

function index(_, res) {
  res.render("index.html")
}

function acender(_, res) {
  const led = new five.Led(8)

  led.on()

  res.render("index.html")
}

function apagar(_, res) {
  const led = new five.Led(8)

  led.off()

  res.render('index.html')
}

module.exports = { index, acender, apagar }
