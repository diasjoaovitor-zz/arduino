const five = require("johnny-five")

function index(_, res) {
  return res.render("index.html", { acender: true })
}

function acender(_, res) {
  const led = new five.Led(8)
  led.on()
  return res.render("index.html", { acender: false })
}

function apagar(_, res) {
  const led = new five.Led(8)
  led.off()
  return res.render('index.html', { acender: true })
}

module.exports = { index, acender, apagar }
