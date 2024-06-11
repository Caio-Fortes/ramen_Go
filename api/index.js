const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Routers
const broths = require('./routes/broths');
app.use('/broths', broths);

const proteins = require('./routes/proteins');
app.use('/proteins', proteins);

const orders = require('./routes/orders');
app.use('/orders', orders);

const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Servidor iniciado na porta ${port}`)})