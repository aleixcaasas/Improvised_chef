const home = require('./c_home');
const loginWithEmail = require('./c_loginWithEmail');
const registerWithEmail = require('./c_registerWithEmail');
const loginWithGoogle = require('./c_loginWithGoogle');
const resetPasswordEmail = require('./c_resetPassword');
const signOutV  = require('./c_logout');

var controller = {

    home: function(req, res) { 
        return res.status(200).send({
            home,
        }) 
    },

    login: async function(req, res) { 
        var params = req.body;
        var email = params.email;
        var password = params.password;
        var resposta = await loginWithEmail(email, password);
        if(resposta.loguejat){
            return res.status(200).send({
                loguejat: 'true',
                email: email,
                id: resposta.return
            })
        }
        else{
            return res.status(200).send({  //200 conforme la peticio sha fet pero no ha donat el resultat esperat
                loguejat: 'false'
            })
        }
    },

    register: async function(req, res) {
        var params = req.body;
        var fullName = params.name;
        var userName = params.userName;
        var email = params.email;
        var password = params.password;
        var boolean = await registerWithEmail(fullName, userName, email, password);
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

        var body = req.body;
        
        var params = await loginWithGoogle(body);

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

        var params = await resetPasswordEmail(req.body.email);
        if(params === "Password reset email send correctly"){
            return res.status(200).send({
                message: params
            })
        }
        else{
            return res.status(200).send({
                message: params
            })
        }

    },

    logout: async function(req, res){

        console.log(req.body);
        var params = await signOutV(req.body)

    }
    
}

module.exports = controller;