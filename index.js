const express = require('express');

const log = console.log;

const server = express();

server.use(express.json());

//const clients = [{ id: 1, title: "Um novo post" }];

server.listen(4567);

log("Conected!");
//log(clients);

server.get("/clients", (req, res) => {

    return res.json(clients);

});