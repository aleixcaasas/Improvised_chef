const {db, auth} = require('../firebase/firebase-config');
const {collection, getDocs, query} = require('firebase/firestore');
const {sendPasswordResetEmail} = require('firebase/auth');

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

const resetPasswordEmail = async (email) => {
    try{
        if (await emailNotExists(email)){ //email exists
            await sendPasswordResetEmail(auth,email);
            return "Password reset email send correctly";
        }
    }catch (error) {
        return String(error);
    }
    return "There is not any acount with this email";
}

module.exports = resetPasswordEmail;