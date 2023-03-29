const home = require('./c_home');
const loginWithEmail = require('./c_loginWithEmail');
const registerWithEmail = require('./c_registerWithEmail');
const loginWithGoogle = require('./c_loginWithGoogle');

var controller = {

    home: function(req, res) { 
        return res.status(200).send({
            home,
        }) 
    },

    login: function(req, res) { 
        var params = req.body;
        var email = params.email;
        var password = params.password;
        if(loginWithEmail(email, password)){
            return res.status(200).send({
                loguejat: 'true',
                email: email
            })
        }
        else{
            return res.status(400).send({
                loguejat: 'false'
            })
        }
    },

    register: function(req, res) {
        var params = req.body;
        var fullName = params.fullName;
        var userName = params.userName;
        var email = params.email;
        var password = params.password;
        if(registerWithEmail(fullName, userName, email, password)){
            return res.status(200).send({
                loguejat: 'true',
                email: email
            })
        }
        else{
            return res.status(400).send({
                loguejat: 'false'
            }) 
        }
    },

    loginGoogle: async function(req, res){
        var params = await loginWithGoogle();
        console.log(params.login);

        return res.status(200).send({
            loguejat: 'true',
            email: params.email
        })
    }
    
}

module.exports = controller;