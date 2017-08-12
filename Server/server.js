var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var config = require('./config');
var marcas = require('./control/marcas-control');
var productos = require('./control/productos-control');

var server = express();

server.use(cors());
server.use(bodyParser.json());

//CRUD Marcas
server.get('/marcas',marcas.recuperarTodo);
server.get('/marcas/:id',marcas.recuperarXid);
server.post('/marcas',marcas.crearMarca);
server.put('/marcas/:id',marcas.actualizarMarca);
server.delete('/marcas/:id',marcas.eliminarMarca);

//CRUD Productos
server.get('/productos',productos.recuperarTodo);
server.get('/productos/:id',productos.recuperarXid);
server.post('/productos',productos.crearProducto);
server.put('/productos/:id',productos.actualizarProducto);
server.delete('/productos/:id',productos.eliminarProducto);

server.listen(config.express.port, () => 
    console.log(config.express.name + " listening port: " + config.express.port)
);