const home = require('./c_home');
const loginWithEmail = require('./c_loginWithEmail');
const registerWithEmail = require('./c_registerWithEmail');
const loginWithGoogle = require('./c_loginWithGoogle');
const resetPasswordEmail = require('./c_resetPassword');
const signOutV  = require('./c_logout');
const {recipes, recipesName, randomRecipe} = require('./c_recipes');
const ingredients = require('./c_ingredients');
const getInfo = require('./c_getInfo');

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
        return res.status(200).send({  //200 conforme la peticio sha fet pero no ha donat el resultat esperat
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
            return res.status(200).send({ //POSO 200 O 400?¿?¿?¿
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
            return res.status(200).send({ //poso 200 ja que tot ha anat correcte l'unic que no s'ha loguejat
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
            return res.status(200).send({message: params})
        }

    },

    logout: async function(req, res){
        console.log(req.body);
        await signOutV(req.body)
    },

    recipes: async function(req, res) {
        return res.status(200).send(await recipes());
    },

    randomRecipe: async function(req, res) {
        return res.status(200).send(await randomRecipe(req));
    },

    recipesName: async function(req, res) {
        return res.status(200).send(await recipesName(req, res))
    },

    ingredients: function(req, res) {
        return res.status(200).send(ingredients)
    },

    getInfo: function(req, res) {
        const info = getInfo(req.body);
        return res.status(200).send(info);
    }
}

module.exports = controller;