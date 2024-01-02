const express = require("express")
const socket = require("socket.io")
const {createServer} = require('node:http')

const app = express()
const server = createServer(app)


const nameServer = "michi"

app.use(express.static(__dirname + "/public"))

numeber_server = 2007

server.listen(numeber_server, ()=>{
    console.log("http://localhost:" + numeber_server)
})