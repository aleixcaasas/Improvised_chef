const {signInWithPopup} = require('firebase/auth');
const {auth, provider, db} = require('../firebase/firebase-config');
const {addDoc, collection, getDocs} = require('firebase/firestore');
const e = require('express');

const emailNotExists = async (email) => {
    
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    
    let emailExist = false;

    querySnapshot.forEach((doc) => {
      console.log(doc.data().email, email)
      if(doc.data().email === email){
        emailExist = true;
      }
    });
    return emailExist;
}

var loginWithGoogle = async () => {
    try {
        /*const result = await signInWithPopup(auth, provider);
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        const userName = email.split('@')[0];
        const emailNotAtBD = await emailNotExists(email);
        if (emailNotAtBD) {
          await addDoc(collection(db, "users"), {
            name,
            userName,
            profilePic,
            email,
            userId: `${result.user.uid}`
          });
        }*/
        return {login: true,
                email : 'pep'};
    } catch (error) {
        return false;
    }
};

module.exports = loginWithGoogle;