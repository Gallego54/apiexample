const { Router } = require('express');
const route = Router();

const dataController = require('../controllers/data.controller')


route.get('/data', dataController.getData);

route.post('/data', dataController.createData);

route.get('/data/:id', dataController.getDataById);

route.put('/data/:id', dataController.updateData);

route.delete('/data/:id', dataController.deleteData);

module.exports = route;