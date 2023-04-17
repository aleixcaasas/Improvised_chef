const { Router } = require('express');
const fs = require('fs');
const router = Router();
const recipes = [];
const ingredients = [];
const dataRecipes = '../data/parsed_recipes.json';
const dataIngredients = '../data/parsed_ingredients.json';

readFile = function(dataPath){
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return('Error al llegir arxiu JSON');
        }
        const obj = JSON.parse(data);
        if(dataPath.includes('recipes')){
            for (let i = 0; i < 5; i++) {
                const recipe = obj[i];
                let ingredients = [];
                for (let j = 0 ; j < recipe.ingredients.length ; j++){
                    const ingredient = recipe.ingredients[j];
                    ingredients.push({ id: ingredient.id, name: ingredient.name, quantity: ingredient.quantity, unit: ingredient.unit});
                }
                recipes.push({ title: recipe.title, image: recipe.image, ingredients: ingredients, id: recipe.id});
            }
        } else {
            for (let i = 0; i < 5; i++) {
                const ingredient = obj[i];
                let recipesIngredient = [];
                for (let j = 0 ; j < ingredient.recipes_in.length ; j++){
                    const recipe = ingredient.recipes_in[j];
                    recipesIngredient.push(recipe);
                }
                ingredients.push({ name: ingredient.name, id: ingredient.id, recipes_in: recipesIngredient});
            }
        }
    });
}

readFile(dataRecipes);
readFile(dataIngredients);

router.get('/recipes', async (req, res) => {
    return res.json(recipes);
});

router.post('/recipes/title', async (req, res) => {
    return res.json(recipes.filter(obj => obj.title.toString().toLowerCase().includes(req.body.title.toLowerCase())));
});

router.post('/recipes/ingredients', async (req, res) => {
    let recipesIngredients = [];
    if(req.body.ingredients.length!==0){
        recipes.forEach(recipe => {
            recipe.ingredients.forEach(ingredient => {
                if(req.body.ingredients.some(obj => obj.id === ingredient.id)){
                    recipesIngredients.push(recipe);
                }
            })
        })
    }
    const arraySinDuplicados = recipesIngredients.filter((obj, index, self) =>
        !index || !self.slice(0, index).some((o) => o.id === obj.id)
    );
    return res.json(arraySinDuplicados);
});

router.get('/ingredients', async (req, res) => {
    return res.json(ingredients);
});

router.post('/ingredients/name', async (req, res) => {
    return res.json(ingredients.filter(obj => obj.name.toString().toLowerCase().includes(req.body.name.toLowerCase())));
});

router.get('/usuario/resumen/:idUsuario', (req, res) => {
  const userId = req.params.idUsuario;

  const userSummary = {
    id: userId,
    fullname: "Aleix Casas",
    username: "aleixcasas",
    email: "aleix.casas@autonoma.cat",
    profilePic: "https://lh3.googleusercontent.com/a/AGNmyxZaJ3uhXsY-AYxmtPPd9Qv-ojRN9BfMQDk7h-SK=s96-c"
  };
  
  res.json(userSummary);
});

module.exports = router;
