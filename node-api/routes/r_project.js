const express = require('express');
const projectController = require('../controladors/c_project');
const router = express.Router();

router.get(['/home', '/'], projectController.home);
/*LOGIN & REGISTER ENDPOINTS */
router.post('/login', projectController.login);
router.post('/loginWithGoogle', projectController.loginGoogle); 
router.post('/register', projectController.register);
router.post('/resetPassword', projectController.resetPassword);
router.post('/logout', projectController.logout);

/* RECIPES ENDPOINTS */
router.post('/recipe/:recipeName', projectController.infoRecipe);
router.post('/recipes/name', projectController.recipesName);
router.get('/recipes/random', projectController.randomRecipe);

/* INGREDIENTS ENDPOINT */ 
router.post('/ingredients/name', projectController.ingredientsName);

/* USER ENDPOINTS */
router.post('/user/summary', projectController.getUserInfo);
router.post('/user/profile', projectController.getUserProfile);

router.post('/user/myKitchen', projectController.myKitchen);

router.post('/user/ingredients', projectController.getUserIngredientList);
router.post('/user/addIngredient', projectController.addUserIngredient);
router.post('/user/removeIngredient', projectController.removeUserIngredient);

router.post('/user/shoppingList', projectController.getUserShoppingList);
router.post('/user/addShoppingList', projectController.addUserShoppingList);
router.post('/user/removeShoppingList', projectController.removeUserShoppingList);

router.post('/user/recipes', projectController.getUserRecipeList);
router.post('/user/addRecipe', projectController.addUserRecipe);
router.post('/user/removeRecipe', projectController.removeUserRecipe);
router.post('/user/searchWithIngredients', projectController.searchWithIngredients);
router.post('/user/searchIngredients', projectController.getIngredientSearched);


module.exports = router;