var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var config = require('./config');
var marcas = require('./control/marcas-control');

var server = express();

server.use(cors());
server.use(bodyParser.json());

server.get('/marcas',marcas.recuperarTodo);
server.get('/marcas/:id',marcas.recuperarXid);
server.post('/marcas',marcas.crearMarca);
server.put('/marcas/:id',marcas.actualizarMarca);
server.delete('/marcas/:id',marcas.eliminarMarca);

server.listen(config.express.port, () => 
    console.log(config.express.name + " listening port: " + config.express.port)
);