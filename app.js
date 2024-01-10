const express = require("express")
const { Server } = require("socket.io")
const { createServer } = require('node:http')
const multer = require('multer')
const path = require('path')

const app = express();
const server = createServer(app);
const io = new Server(server);


let users = [{
    tag: "hola"
}, {
    tag: "nose"
}]

//modules xbox360
//import { buscarUser } from "./modules_xbox/user/users_function.js";

const nameServer = "michi"

app.use(express.static(__dirname + "/public"))

numeber_server = 2007

//socket io

io.on('connection', (socket) => {

    //Connect user server

    socket.on("name-server", (name_server) => {
        console.log(name_server)
        socket.emit("name-server", nameServer)
        console.log(socket.id)
    })

    //register xbox live

    socket.on("resgister-user", (user)=>{

        result = buscarUser(users, user)

        socket.emit("resgister-user", result)

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


function buscarUser(user, comparativa){
    return user.findIndex(index => index.tag == comparativa.tag)
}