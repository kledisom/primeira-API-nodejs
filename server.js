const express = require('express');
const cors = require('cors')
const log = console.log;

const server = express();

server.use(express.json());
server.use(cors())

const clients = [];

server.listen(3000);

log("Conected!");

server.post("/clients", (req, res) => {
    const {id, title} = req.body;
    
    const client = {
        id,
        title,
    };

    clients.push(client);

    return res.json(client);

});

server.get("/clients", (req, res) => {

    return res.json(clients);

});