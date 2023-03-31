const {signInWithEmailAndPassword} = require('firebase/auth');
const {auth} = require('../firebase/firebase-config');

const loginWithEmail = async function (email, password) {
    let result;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
        if(result.user.uid){
            return {
                loguejat: true, id: result.user.uid
            };
        }
        else{
            return {loguejat: false, id: null};
        }
    }
    catch (error) {
        return false;
    }
}

module.exports = loginWithEmail;