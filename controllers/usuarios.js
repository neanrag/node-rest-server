const { response, request } = require('express');


const usuariosGet = (req = resquest, res = response) => {

    // const query = req.query;

    // por si no envian un parametro
    const {apikey, name="no name", query, page = 1, limit} = req.query;

    res.json({
        success: true,
        msg: 'GET API - Controlador',
        apikey,
        query,
        name,
        page,
        limit
    });

}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;

    res.json({
        success: true,
        msg: 'POST API - Controlador',
        nombre,
        edad
    });

}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        success: true,
        msg: 'PUT API - Controlador',
        id
    });

}

const usuariosDelete = (req, res = response) => {

    res.json({
        success: true,
        msg: 'DELETE API - Controlador'
    });

}

const usuariosPatch = (req, res = response) => {

    res.json({
        success: true,
        msg: 'PATCH API - Controlador'
    });

}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
    
}