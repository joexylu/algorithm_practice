var express = require('express');
var router = express.Router();
var tasksController = require('../controllers/tasks.controller');

router
    .post('/', tasksController.create)
    .get('/:id', tasksController.getById)
    .get('/', tasksController.getAll);

module.exports = router;
