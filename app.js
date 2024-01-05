const express = require("express")
const { Server } = require("socket.io")
const { createServer } = require('node:http')
const multer = require('multer')
const path = require('path')

const app = express();
const server = createServer(app);
const io = new Server(server);

const nameServer = "michi"

app.use(express.static(__dirname + "/public"))

numeber_server = 2007

//socket io


io.on('connection', (socket) => {

    socket.on("name-server", (name_server) => {
        console.log(name_server)
        socket.emit("name-server", nameServer)
        console.log(socket.id)
    })

})


//Subir datos


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

app.post('/upload/', upload.single('file'), (req, res) => {
    res.send('Archivo subido con éxito.');
});


//run server

server.listen(numeber_server, () => {
    console.log("http://localhost:" + numeber_server)
})