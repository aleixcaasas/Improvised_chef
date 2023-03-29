const home = require('./c_home');
const loginWithEmail = require('./c_loginWithEmail');

var controller = {
    home: function(req, res) { 
        return res.status(200).send({
            message: 'Benvingut a Chef Improvisado'
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
    
}

module.exports = controller;