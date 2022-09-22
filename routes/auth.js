const { Router } = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();

// Crear un nuevo usuario
router.post( '/new', [

    check('name', 'Nombre obligatorio').not().isEmpty(),
    check('email', 'Email obligatorio').isEmail(),
    check('password', 'Contraseña obligatoria').isLength({ min: 6 }),


], crearUsuario );

// Login de usuario
router.post( '/', loginUsuario );

// Validar y revalidar token
router.get( '/renew', [
    
    // middlewares
    check('email', 'Email obligatorio').isEmail(),
    check('password', 'Contraseña obligatoria').isLength({ min: 6 })

], revalidarToken );

module.exports = router;