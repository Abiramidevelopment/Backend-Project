const express = require('express');
const routes= express.Router();

const renderfilecalling = require('../services/render')
const controllerfilecalling = require('../controller/controller')

routes.get('/', renderfilecalling.indexfile)
routes.get('/form', renderfilecalling.formfile)
routes.get('/thankyou', renderfilecalling.thankyoufile)
routes.post('/api/post',controllerfilecalling.create)
module.exports= routes;