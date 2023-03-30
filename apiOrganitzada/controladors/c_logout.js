const {signOut} = require('firebase/auth');
const {auth} = require('../firebase/firebase-config');


var signOutV = async function (email, password) {
    await signOut(auth);
}


module.exports = signOutV;