const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./routes');
const cors = require('cors');

const app = express();


mongoose.connect('mongodb+srv://bancodecurriculos:bancodecurriculos@cluster0.lyquc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use(routes);
app.listen(process.env.PORT || 5000);