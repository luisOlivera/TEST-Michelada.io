var knexConfig = require('../config')['knex'];
var knex = require('knex')(knexConfig);

const recuperarTodo = (req,res,next) => {
    knex.withSchema('michelada_test')
        .select('*')
        .from('marcas')
        .then(data => res.send(data))
        .catch(error => next(error));
}
    
const recuperarXid = (req,res,next) => {
    knex.withSchema('michelada_test')
        .select('*')
        .from('marcas')
        .where('id_marca',req.params.id)
        .then(data => res.send(data))
        .catch(error => next(error));
}

const crearMarca = (req,res,next) => {
    knex('marcas').withSchema('michelada_test').max('id_marca')
    .then(id => {
        knex('marcas').withSchema('michelada_test')
        .returning(['id_marca','nombre'])
        .insert({
            id_marca:Number(id[0].max) + 1,
            nombre:req.body.nombre
        })
        .then(data => res.send(data))
        .catch(error => next(error));
    })
    .catch(error => next(error));
}

const actualizarMarca = (req,res,next) => {
    knex('marcas').withSchema('michelada_test')
        .returning(['id_marca','nombre'])
        .where('id_marca',req.params.id)
        .update({
            nombre:req.body.nombre
        })
        .then(data => res.send(data))
        .catch(error => next(error));
}

const eliminarMarca = (req,res,next) => {
    knex('marcas').withSchema('michelada_test')
        .returning(['id_marca','nombre'])
        .where('id_marca',req.params.id)
        .del()
        .then(data => res.send(data))
        .catch(error => next(error));
}

module.exports = {
    recuperarTodo:recuperarTodo,
    recuperarXid:recuperarXid,
    crearMarca:crearMarca,
    actualizarMarca:actualizarMarca,
    eliminarMarca:eliminarMarca
}