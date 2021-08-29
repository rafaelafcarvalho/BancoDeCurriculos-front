const express = require('express');
const UserController = require('../Controllers/UserController');
const routes = new express.Router();

routes.post('/register', UserController.register);
routes.get('/', (req, res)=> {
    res.send('Cadastrado!')
})

module.exports = routes;