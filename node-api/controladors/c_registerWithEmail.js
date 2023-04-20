const {createUserWithEmailAndPassword} = require('firebase/auth');
const {auth, db} = require('../firebase/firebase-config');
const {addDoc, collection} = require('firebase/firestore');
const profilePic = 'https://img.freepik.com/free-icon/user_318-563642.jpg';

const registerWithEmail = async (fullName, userName, email, password) => {
    const id = null;
    try{
        await createUserWithEmailAndPassword(auth, email, password).then(
            async (result) => {
                try{
                    const docRef = await addDoc(collection(db, "users"), {
                        fullName,
                        userName,
                        profilePic,
                        email,
                        userId: `${result.user.uid}`
                    });
                    id = result.user.uid;
                    console.log("Document written with ID: ", docRef.id);
                } catch(error){
                    console.error("ERROR adding doc", error);
                }
            }
        )
    }
    catch(e){
        return false;
    }
    return {id: id, loguejat: true};
};

module.exports = registerWithEmail;