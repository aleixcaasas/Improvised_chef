const home = require('./c_home');

const {infoRecipe, recipesName, randomRecipe} = require('./c_recipes');
const {ingredientsName, getIngredientsSearched} = require('./c_ingredients');
const {getUserInfo, getUserProfile, uploadProfilePic, changePassword, editUserProfile, getUserRecipeList, getUserIngredientList, addUserIngredient, addUserRecipe, removeUserIngredient, addIngredientsRecipeShoppingList, getUserShoppingList, addUserShoppingList, removeUserShoppingList, myKitchen, removeUserRecipe, searchWithIngredients, removeRecipeIngredients } = require('./c_users');
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
            req.session.userEmail = email;
            req.session.userID = resposta.id;
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
            req.session.userEmail = email;
            req.session.userID = boolean.id;
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
            req.session.userEmail = params.email;
            req.session.userID = params.id;
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
        req.session.destroy();
        return res.status(200).send('LogOut');
    },

    actualUser : async function(req, res) {
        const { userID, userEmail } = req.session;
        return res.status(200).send({ id: userID, email: userEmail });
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
        //let id = req.body.id;
        const { userID, userEmail } = req.session;
        let response = await getUserInfo(userID);
        return res.status(response[0]).send(response[1]);
    },

    getUserProfile: async function(req, res) {
        //let id = req.body.userId;
        const { userID, userEmail } = req.session;
        let response = await getUserProfile(userID);
        return res.status(response[0]).send(response[1]);
    },

    infoRecipe: async function(req, res){
        const body = req.body;
        const recipeId = body.recipeId;
        const userId = req.session.userID;
        const userIngredients = await getUserIngredientList(userId);
        const recipeData = await infoRecipe(recipeId, userIngredients);
        if(recipeData){
            res.status(200).send(recipeData);
        }
        else{
            res.status(500).send('Recipe not exist');
        }
    },

    editUserProfile: async function(req, res) {
        const params = req.body;
        const { userID, userEmail } = req.session;
        const userName = params.userName;
        const fullName = params.fullName;
        const profilePic = req.file;
        const password = params.password;
        const confirmPassword = params.confirmPassword;
        if(profilePic){
            uploadProfilePic(userID, profilePic).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err);
            });
        }
        if(password !== undefined && confirmPassword !== undefined){
            changePassword(password, confirmPassword).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err);
            });
        }
        let response = await editUserProfile(userId, fullName, userName);
        res.status(response[0]).send(response[1]);
    },

    myKitchen: async function(req, res) {
        const { userID, userEmail } = req.session;
        const response = await myKitchen(userID);
        res.status(response[0]).send(response[1]);
    },

    getUserIngredientList: async function(req, res) {
        const { userID, userEmail } = req.session;
        const userIngredients = await getUserIngredientList(userID);
        if(userIngredients){
            res.status(200).send(userIngredients);
        }
        else{
            res.status(500).send('User not exist');
        }
    },

    addUserIngredient: async function(req, res) {
        const params = req.body;
        const { userID, userEmail } = req.session;
        const ingredientId = params.ingredientId;
        const ingredientName = params.ingredientName;
        const response = await addUserIngredient(userID, ingredientId, ingredientName);
        res.status(response[0]).send(response[1]);
    },

    removeUserIngredient: async function(req, res) {
        const params = req.body;
        const { userID, userEmail } = req.session;
        const ingredientId = params.ingredientId;
        const ingredientName = params.ingredientName;
        const response = await removeUserIngredient(userID, ingredientId, ingredientName);
        res.status(response[0]).send(response[1]);
    },

    addIngredientsRecipeShoppingList: async function(req, res) {
        const body = req.body;
        const recipeId = body.recipeId;
        const { userID, userEmail } = req.session;
        const userIngredients = await getUserIngredientList(userID);
        const recipeData = await infoRecipe(recipeId, userIngredients);
        const response = await addIngredientsRecipeShoppingList(userID, recipeData);
        res.status(response[0]).send(response[1]);
    },

    getUserShoppingList: async function(req, res) {
        const { userID, userEmail } = req.session;
        const response = await getUserShoppingList(userID);
        res.status(response[0]).send(response[1]);
    },

    addUserShoppingList: async function(req, res) {
        const { userID, userEmail } = req.session;
        const ingredientName = req.body.ingredientName;
        const ingredientId = req.body.ingredientId;
        let response = await addUserShoppingList(userID, ingredientName, ingredientId);
        return res.status(response[0]).send(response[1]);
    },

    removeUserShoppingList: async function(req, res) {
        const { userID, userEmail } = req.session;
        const ingredientName = req.body.ingredientName;
        const ingredientId = req.body.ingredientId;
        let response = await removeUserShoppingList(userID, ingredientName, ingredientId);
        return res.status(response[0]).send(response[1]);
    },

    getUserRecipeList: async function(req, res) {
        const { userID, userEmail } = req.session;
        let response = await getUserRecipeList(userID);
        return res.status(response[0]).send(response[1]);
    },

    addUserRecipe: async function(req, res) {
        const { userID, userEmail } = req.session;
        const recipeId = req.body.recipeId;
        let response = await addUserRecipe(userID, recipeId);
        return res.status(response[0]).send(response[1]);
    },
    removeUserRecipe: async function(req, res) {
        const { userID, userEmail } = req.session;
        const recipeId = req.body.recipeId;
        let response = await removeUserRecipe(userID, parseInt(recipeId));
        return res.status(response[0]).send(response[1]);
    },
    removeRecipeIngredients: async function (req, res) {
        const { userID, userEmail } = req.session;
        const recipeId = req.body.recipeId;
        let response = await removeRecipeIngredients(userID, recipeId);
        return res.status(response[0]).send(response[1]);
    },
    getIngredientSearched: async function(req, res) {
        const { userID, userEmail } = req.session;
        const list = req.body.list;
        const ingredientName = req.body.name;
        let response = await getIngredientsSearched(userID, ingredientName, list);
        return res.status(response[0]).send(response[1]);
    },
    searchWithIngredients: async function(req, res) {
        const { userID, userEmail } = req.session;
        let response = await searchWithIngredients(userID);
        return res.status(response[0]).send(response[1]);
    },
    deleteUser: async function(req, res) {
        const { userID, userEmail } = req.session;
        let response = await deleteUser(userID);
        return res.status(response[0]).send(response[1]);
    }
}

module.exports = controller;