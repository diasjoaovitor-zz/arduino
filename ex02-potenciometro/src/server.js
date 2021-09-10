import five from 'johnny-five'

const board = new five.Board()

board.on("ready", () => {
  const potentiometer = new five.Sensor("A0")

  potentiometer.scale([0, 100]).on("change", () => {
    console.log("Valor: ", potentiometer.value.toFixed(4))
  })
})
