"use strict"
var express = require('express');
var projectController = require('../controladors/c_project');
var router = express.Router();

router.get('/home', projectController.home);
router.post('/login', projectController.login);
router.get('/', projectController.home);

module.exports = router;