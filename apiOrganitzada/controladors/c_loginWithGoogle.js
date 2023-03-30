const {db} = require('../firebase/firebase-config');
const {addDoc, collection, getDocs, query} = require('firebase/firestore');

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
        const name = result.displayName;
        const email = result.email;
        const profilePic = result.photoURL;
        const userName = email.split('@')[0];
        const emailNotAtBD = await emailNotExists(email);

        if (!emailNotAtBD) {
          await addDoc(collection(db, "users"), {
            name,
            userName,
            profilePic,
            email,
            userId: `${result.uid}`
          });
        }
        return {loguejat: true,
                email : email,
                id: `${result.uid}`};
    } catch (error) {
        return {loguejat: false};
    }
};

module.exports = loginWithGoogle;