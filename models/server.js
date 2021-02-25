const express = require('express');
const cors = require('cors');

class Server {

    constructor(){
        this.app = express(),
        this.PORT = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middleware();


        // rutas de la aplicacioon
        this.routes();
    }


    middleware(){
        // CORS
        this.app.use(cors())

        // Parseo y lectura del Body
        // la informacion del body la intenta convertir a json
        this.app.use(express.json());

        // Directorio público
        this.app.use( express.static('public'));

        
    }

    routes(){
        
        this.app.use(this.usuariosPath, require('../routes/user'));

    }

    listen() {
        this.app.listen( this.PORT, ()=>{
            console.log(`Servidor ejecutandose en ${this.PORT}`)
        });
    }

}


module.exports = Server