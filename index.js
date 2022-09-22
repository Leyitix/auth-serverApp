const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Crear el servidor/aplicación de express
const app = express();

// Directorio Público
app.use( express.static('public') );

// CORS
app.use( cors() );

// lectura y parseo del body
app.use( express.json() ); 

// Rutas
app.use( '/api/auth', require('./routes/auth.js') );


// levantamos la app de express en cualquier puerto que no sea el 4200
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})


// npm run dev
