const {signInWithEmailAndPassword} = require('firebase/auth');
const {auth} = require('../firebase/firebase-config');


var loginWithEmail = async function (email, password) {

    try{
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch(error){
        console.log(error);
        return false;
    }
    return true;
}


module.exports = loginWithEmail;
