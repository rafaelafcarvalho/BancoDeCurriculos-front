const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require ('../Controllers/swagger.json'); 
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://raafacarvalho:uH8y5nzp4x2J!K$@cluster0.wlj6o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(routes);
app.listen('7070');