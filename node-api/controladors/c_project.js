const home = require('./c_home');

const {infoRecipe, recipesName, randomRecipe} = require('./c_recipes');
const {ingredientsName, getIngredientsSearched} = require('./c_ingredients');
const {getUserInfo, getUserProfile, getUserRecipeList, getUserIngredientList, addUserIngredient, addUserRecipe, removeUserIngredient, getUserShoppingList, addUserShoppingList, removeUserShoppingList, myKitchen,
    removeUserRecipe, searchWithIngredients
} = require('./c_users');
const {registerWithEmail, signOutV, loginWithGoogle, loginWithEmail, resetPasswordEmail, deleteUser} = require('./c_auth');

const controller = {
    home: function(req, res) { 
        return res.status(200).send(home);
    },

    login: async function(req, res) { 
        const params = req.body;
        const email = params.email;
        const password = params.password;
        const resposta = await loginWithEmail(email, password);
        if(resposta.id != null && resposta.loguejat) {
            return res.status(200).send({
                loguejat: true,
                email: email,
                id: resposta.id
            })
        }
        return res.status(200).send({
            loguejat: false, id: resposta.id
        })
    },

    register: async function(req, res) {
        const params = req.body;
        const fullName = params.name;
        const userName = params.userName;
        const email = params.email;
        const password = params.password;
        const boolean = await registerWithEmail(fullName, userName, email, password);
        if(boolean.loguejat){
            return res.status(200).send({
                loguejat: 'true',
                email: email,
                id: boolean.id
            })
        }
        else{
            return res.status(200).send({
                loguejat: 'false'
            }) 
        }
    },

    loginGoogle: async function(req, res){
        const body = req.body;
        const params = await loginWithGoogle(body);
        if(params.loguejat){
            return res.status(200).send({
                loguejat: 'true',
                email: params.email,
                id: params.id
            })
        }
        else{
            return res.status(200).send({
                loguejat: 'false'
            })
        }
    },

    resetPassword: async function(req, res){
        const params = await resetPasswordEmail(req.body.email);
        if(params === "Password reset email send correctly"){
            return res.status(200).send({message: params})
        }
        else{
            return res.status(500).send({message: params})
        }

    },

    logout: async function(req, res){
        console.log(req.body);
        await signOutV(req.body)
    },

    randomRecipe: async function(req, res) {
        const numRecipes = parseInt(req.query.number) || 9;
        let randomNum = []
        while (randomNum.length < numRecipes) {
            const RECIPES_NUMBER = 1378;
            let random = Math.floor(Math.random() * RECIPES_NUMBER)
          if (randomNum.indexOf(random) === -1) {
            randomNum.push(random)
          }
        }
        let response = await randomRecipe(randomNum);
        return res.status(response[0]).send(response[1]);
    },

    recipesName: async function(req, res) {
        let nameRecipe = req.body.name.toLowerCase().replace(/\s+/g, ' ').trim();
        let response = await recipesName(nameRecipe);
        return res.status(response[0]).send(response[1]);
    },

    ingredientsName: async function(req, res) {
        let response = await ingredientsName();
        return response;
    },

    getUserInfo: async function(req, res) {
        let id = req.body.id;
        let response = await getUserInfo(id);
        return res.status(response[0]).send(response[1]);
    },

    getUserProfile: async function(req, res) {
        let id = req.body.userId;
        let response = await getUserProfile(id);
    },
    infoRecipe: async function(req, res){
        const body = req.body;
        const recipeId = body.recipeId;
        const userId = body.userId;
        const userIngredients = await getUserIngredientList(userId);
        const recipeData = await infoRecipe(recipeId, userIngredients);
        if(recipeData){
            res.status(200).send(recipeData);
        }
        else{
            res.status(500).send('Recipe not exist');
        }
    },

    myKitchen: async function(req, res) {
        return await myKitchen(req, res);
    },

    getUserIngredientList: async function(req, res) {
        const params = req.body;
        const userId = params.userId;
        const userIngredients = await getUserIngredientList(userId);
        if(userIngredients){
            res.status(200).send(userIngredients);
        }
        else{
            res.status(500).send('User not exist');
        }
    },

    addUserIngredient: async function(req, res) {
        return await addUserIngredient(req, res);
    },

    removeUserIngredient: async function(req, res) {
        return await removeUserIngredient(req, res);
    },

    getUserShoppingList: async function(req, res) {
        return await getUserShoppingList(req, res);
    },

    addUserShoppingList: async function(req, res) {
        return await addUserShoppingList(req, res);
    },

    removeUserShoppingList: async function(req, res) {
        return await removeUserShoppingList(req, res);
    },

    getUserRecipeList: async function(req, res) {
        return await getUserRecipeList(req, res);
    },

    addUserRecipe: async function(req, res) {
        return await addUserRecipe(req, res);
    },
    removeUserRecipe: async function(req, res) {
        return await removeUserRecipe(req, res);
    },

    getIngredientSearched: async function(req, res) {
        return res.status(200).send(await getIngredientsSearched(req, res));
    },
    searchWithIngredients: async function(req, res) {
        return await searchWithIngredients(req, res);
    },
    deleteUser: async function(req, res) {
        const userId = req.body.userId;
        let response = await deleteUser(userId);
        return res.status(response[0]).send(response[1]);
    }
}

module.exports = controller;