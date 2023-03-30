const {createUserWithEmailAndPassword} = require('firebase/auth');
const {auth, db} = require('../firebase/firebase-config');
const {addDoc, collection} = require('firebase/firestore');


var registerWithEmail = async (fullName, userName, email, password) => { 
    try{
        await createUserWithEmailAndPassword(auth, email, password).then(
            async (result) => {
                try{
                    const docRef = await addDoc(collection(db, "users"), {
                        fullName,
                        userName,
                        email,
                        userId: `${result.user.uid}`
                    });
                    console.log("Document written with ID: ", docRef.id);
                } catch(error){
                    console.error("ERROR adding doc", error);
                }
            }
        )
    }catch(e){
        return false;
    }
    return true;
};


module.exports = registerWithEmail;