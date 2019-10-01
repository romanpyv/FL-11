const express = require('express');
const app = express();
const handlers = require('./handlers/car');
const bodyParser = require('body-parser');
const deleteAuth = require('./middlewares/delete-authorization');

module.exports = app;

app.use(bodyParser.json());

app.route('/car')
.get(handlers.carGet)
.post(handlers.carPost);

app.route('/car/:id')
.get(handlers.carGetById)
.put(handlers.carPutById)
.delete(deleteAuth, handlers.carDeleteById);
