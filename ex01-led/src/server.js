const express= require("express")
const nunjucks = require("nunjucks")
const five = require("johnny-five");
const routes = require("./routes.js")

const server = express()

nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server.use(express.urlencoded({ extended: true }))
server.use(routes)

const board = new five.Board();
board.on("ready", () => {
  server.listen(3000, () => {
    console.log("> Acessar: http://localhost:3000")
  })
})