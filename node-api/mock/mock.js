const { Router } = require('express');
const fs = require('fs');
const router = Router();
const recipes = [];

fs.readFile('parsed_recipes.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return('Error al llegir arxiu JSON');
    }
    const obj = JSON.parse(data);
    for (let i = 0; i < 5; i++) {
        const recipe = obj[i];
        let ingredients = [];
        for (let j = 0 ; j < recipe.ingredients.length ; j++){
            const ingredient = recipe.ingredients[j];
            ingredients.push({ id: ingredient.id, name: ingredient.name, quantity: ingredient.quantity, unit: ingredient.unit});
        }
        recipes.push({ title: recipe.title, image: recipe.image, ingredients: ingredients});
    }
});

router.get('/recipes', async (req, res) => {
    return res.json(recipes);
});

router.post('/recipes/title', async (req, res) => {
    return res.json(recipes.filter(obj => obj.title.toString().toLowerCase().includes(req.body.title.toLowerCase())));
});

router.get('/recipes/ingredients', async (req, res) => {
    let recipesIngredients = [];
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            if(req.body.ingredients.trim().split(',').includes(ingredient.name.toLowerCase())){
                recipesIngredients.push(recipe);
            }
        })
    })
    return res.json(recipesIngredients);
});

module.exports = router;