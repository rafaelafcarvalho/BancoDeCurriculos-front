const express = require('express');
const cors = require('cors');
// importando as rotas

const routes = require('./routes'); 
class App{
    constructor(){
        this.app = express();
        this.middlewares();
        this.routes();
    }
// os metodos que vao ser usados
    middlewares() { 
        this.app.use(express.json());
//arrow function
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*"); // quais origens são aceitas na requisição(todas)
            res.header("Access-Control-Allow-Methods", "Get, POST, PUT, DELETE"); // quais métodos são aceitos na requisição 
            res.header("Access-Control-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, X- requested-With"); // quais cabeçalhos são aceitos
            this.app.use(cors()); 
            next(); // para continuar
        })
    }

    routes() {
        //chamando as rotas
        this.app.use(routes);  
    }
}
//importando a class APP e o atributo app 
module.exports = new App().app;   