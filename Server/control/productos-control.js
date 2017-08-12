var knexConfig = require('../config')['knex'];
var knex = require('knex')(knexConfig);

const recuperarTodo = (req,res,next) => {
    knex.withSchema('michelada_test')
        .select('p.id_producto','p.nombre','m.nombre as marca','p.descripcion','p.precio')
        .from('productos as p')
        .leftJoin('marcas as m', 'p.id_marca', 'm.id_marca')
        .orderBy('p.id_producto', 'asc')
        .then(data => res.send(data))
        .catch(error => next(error));
}
    
const recuperarXid = (req,res,next) => {
    knex.withSchema('michelada_test')
        .select('p.id_producto','p.nombre','m.nombre as marca','p.descripcion','p.precio')
        .from('productos as p')
        .leftJoin('marcas as m', 'p.id_marca', 'm.id_marca')
        .where('id_producto',req.params.id)
        .then(data => res.send(data))
        .catch(error => next(error));
}

const crearProducto = (req,res,next) => {
    knex('productos').withSchema('michelada_test').max('id_producto')
        .then(id => {
             knex('productos').withSchema('michelada_test')
            .returning(['id_producto','nombre','precio','id_marca'])
            .insert({
                id_producto:Number(id[0].max) + 1,
                nombre:req.body.nombre,
                id_marca:req.body.id_marca,
                descripcion:req.body.descripcion,
                precio:req.body.precio
            })
            .then(data => res.send(data))
            .catch(error => next(error));
        })
        .catch(error => next(error));
}

const actualizarProducto = (req,res,next) => {
    knex('productos').withSchema('michelada_test')
        .returning(['id_producto','nombre','precio','id_marca','descripcion'])
        .where('id_producto',req.params.id)
        .update({
            nombre:req.body.nombre,
            id_marca:req.body.id_marca,
            descripcion:req.body.descripcion,
            precio:req.body.precio
        })
        .then(data => res.send(data))
        .catch(error => next(error));
}

const eliminarProducto = (req,res,next) => {
    knex('productos').withSchema('michelada_test')
        .returning(['id_producto','nombre','precio','id_marca','descripcion'])
        .where('id_producto',req.params.id)
        .del()
        .then(data => res.send(data))
        .catch(error => next(error));
}

module.exports = {
    recuperarTodo:recuperarTodo,
    recuperarXid:recuperarXid,
    crearProducto:crearProducto,
    actualizarProducto:actualizarProducto,
    eliminarProducto:eliminarProducto
}