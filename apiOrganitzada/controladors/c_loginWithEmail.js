const {signInWithEmailAndPassword} = require('firebase/auth');
const {auth} = require('../firebase/firebase-config');


var loginWithEmail = async function (email, password) {

    try{
        result = await signInWithEmailAndPassword(auth, email, password);
        return {loguejat: true,
            return: result.user.uid};
    }
    catch(error){
        return false;
    }
    
    
}


module.exports = loginWithEmail;
