"use strict"
var express = require('express');
var projectController = require('../controladors/c_project');
var router = express.Router();

router.get('/home', projectController.home);
router.get('/', projectController.home);

router.post('/login', projectController.login);
router.post('/loginWithGoogle', projectController.loginGoogle); 
router.post('/register', projectController.register);



module.exports = router;