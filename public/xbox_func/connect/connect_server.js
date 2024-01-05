const socket = io()

socket.emit("name-server", "o")

let name_server = ""

socket.on("name-server", (msg)=>{
    name_server = msg;
    document.querySelector("#name_server").textContent = "Servidor: " + name_server
})