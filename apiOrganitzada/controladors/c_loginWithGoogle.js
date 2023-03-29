const {db} = require('../firebase/firebase-config');
const {addDoc, collection, getDocs, query} = require('firebase/firestore');
const e = require('express');

const emailNotExists = async (email) => {
    
    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);
    
    let emailExist = false;

    querySnapshot.forEach((doc) => {
      if(doc.data().email === email){
        emailExist = true;
      }
    });
    return emailExist;
}

var loginWithGoogle = async (result) => {
    
    try {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        const userName = email.split('@')[0];
       
        const emailNotAtBD = await emailNotExists(email);
        if (!emailNotAtBD) {
          await addDoc(collection(db, "users"), {
            name,
            userName,
            profilePic,
            email,
            userId: `${result.user.uid}`
          });
        }
        return {login: true,
                email : email};
    } catch (error) {
        return false;
    }
};

module.exports = loginWithGoogle;