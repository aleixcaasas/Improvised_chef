const express = require('express');
const projectController = require('../controladors/c_project');
const router = express.Router();

router.get(['/home', '/'], projectController.home);
router.post('/login', projectController.login);
router.post('/loginWithGoogle', projectController.loginGoogle); 
router.post('/register', projectController.register);
router.post('/resetPassword', projectController.resetPassword);
router.post('/logout', projectController.logout);
router.get('/recipes', projectController.recipes);
router.post('/recipes/name', projectController.recipesName);
//router.get('/ingredients', projectController.ingredients);
module.exports = router;