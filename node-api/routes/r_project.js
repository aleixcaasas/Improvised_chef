const express = require('express');
const projectController = require('../controladors/c_project');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()});
const router = express.Router();

router.get(['/home', '/'], projectController.home);
/*LOGIN & REGISTER ENDPOINTS */
router.post('/login', projectController.login);
router.post('/loginWithGoogle', projectController.loginGoogle); 
router.post('/register', projectController.register);
router.post('/resetPassword', projectController.resetPassword);
router.get('/logout', projectController.logout);
router.get('/user', projectController.actualUser);

/* RECIPES ENDPOINTS */
router.post('/recipe/detail', projectController.infoRecipe);
router.post('/recipes/name', projectController.recipesName);
router.get('/recipes/random', projectController.randomRecipe);

/* INGREDIENTS ENDPOINT */ 
router.post('/ingredients/name', projectController.ingredientsName);

/* USER ENDPOINTS */
router.post('/user/summary', projectController.getUserInfo);
router.post('/user/profile', projectController.getUserProfile);
router.post('/user/edit', upload.single('profilePic'), projectController.editUserProfile);

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
router.post('/user/delete', projectController.deleteUser);


module.exports = router;