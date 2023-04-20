const {createUserWithEmailAndPassword} = require('firebase/auth');
const {auth, db} = require('../firebase/firebase-config');
const {addDoc, collection} = require('firebase/firestore');
const profilePic = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2Fiwoxbb_user-profile-default-image-png-clipart-png-download%2F&psig=AOvVaw2zWE2hH7CE0jp7sOrTYrSv&ust=1682075554042000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIji8fCpuP4CFQAAAAAdAAAAABAE';

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