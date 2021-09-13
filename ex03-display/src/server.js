const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const five = require('johnny-five')

const board = new five.Board()

function message(msg) {
  const lcd = new five.LCD({ pins: [13, 12, 11, 10, 9, 8] })

  lcd.print(msg)
}

app.get('/', (_, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', socket => {
  socket.on('message', msg => {
    io.emit('message', msg)
    message(msg)
  })
})

board.on("ready", () => {
  message('Aguardando...')
  http.listen(3001, () => {
    console.log(`Acesse: http://localhost:3001`)
  })
})

