const { response } = require('express');
const { validationResult } = require('express-validator');
const { ValidatorsImpl } = require('express-validator/src/chain');

const crearUsuario =  (req, res = response) => {

    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    return res.json({
        ok: true,
        msg: 'Crear usuario /new'
    });

};

const loginUsuario = (req, res = response) => {

    const errors = validationResult( req );
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    const { email, password } = req.body;
    console.log( email, password );

    return res.json({
        ok: true,
        msg: 'Login de usuario /new'
    });

}

const revalidarToken = (req, res = response) => {

    return res.json({
        ok: true,
        msg: 'Validar token'
    });

}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}