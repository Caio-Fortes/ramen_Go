const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(cors());

//Routers
const posts = require('./routes/posts');
app.use('/', posts);

const port = process.env.PORT || 3000;

app.listen(port, () => {console.log(`Servidor iniciado na porta ${port}`)})