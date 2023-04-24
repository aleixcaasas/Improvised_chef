const express = require('express');
const projectController = require('../controladors/c_project');
const router = express.Router();

router.get(['/home', '/'], projectController.home);
router.post('/login', projectController.login);
router.post('/loginWithGoogle', projectController.loginGoogle); 
router.post('/register', projectController.register);
router.post('/resetPassword', projectController.resetPassword);
router.post('/logout', projectController.logout);
router.post('/recipes/name', projectController.recipesName);
router.get('/recipes/random', projectController.randomRecipe);
router.post('/user/summary', projectController.getUserInfo);
//router.post('/user/ingredients', projectController.getUserIngredientList)
router.post('/user/recipes', projectController.getUserRecipeList)
router.post('/user/addRecipe', projectController.addUserRecipe)
router.get('/ingredients', projectController.ingredients);
module.exports = router;