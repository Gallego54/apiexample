const dataService = require ('../services/data.service') ;
const dataController = {};

dataController.getData = (req, res) => {
    dataService.getData()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err))
}

dataController.getDataById = (req, res) => {
    const { id } = req.params;
    dataService.getDataById(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err))
}

dataController.createData = (req, res) => {
    dataService.createData(req.body)
    .then(data => res.status(200).json([{"insertId": data.insertId}]))
    .catch(err => res.status(500).send(err))
}

dataController.updateData = (req, res) => {
    const { id } = req.params;
    dataService.updateData(id, req.body)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err))
}

dataController.deleteData = (req, res) => {
    const { id } = req.params;
    dataService.deleteData(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).send(err))
}

module.exports = dataController;
