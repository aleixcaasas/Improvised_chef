const {signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail} = require('firebase/auth');
const {auth, db} = require('../firebase/firebase-config');
const {addDoc, collection, getDocs, query, setDoc, doc} = require('firebase/firestore');
const profilePic = 'https://img.freepik.com/free-icon/user_318-563642.jpg';

const loginWithEmail = async function (email, password) {
    let result;
    try {
        result = await signInWithEmailAndPassword(auth, email, password);
        if(result.user.uid){ //comprovar
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


const emailNotExists = async (email) => {

    const q = query(collection(db, "users"));
    const querySnapshot = await getDocs(q);

    let emailExist = false;

    querySnapshot.forEach((doc) => {
      if(doc.data().email === email){
        emailExist = true;
      }
    });
    return emailExist; //modificar consulta i fer-la directe desde un select
}


const loginWithGoogle = async (result) => {

    try {
        const fullName = result.displayName;
        const email = result.email;
        const profilePic = result.photoURL;
        const userName = email.split('@')[0];
        const emailNotAtBD = await emailNotExists(email);
        let userRef = null;

        if (!emailNotAtBD) {
            let myIngredients = [];
            let shoppingList = [];
            let favoriteRecipes = [];
            userRef = await setDoc(doc(db, "users", result.uid), {
            fullName,
            userName,
            profilePic,
            email,
            userId: `${result.uid}`,
            myIngredients,
            shoppingList,
            favoriteRecipes
          });
        }

        return {loguejat: true,
                email : email,
                id: `${result.uid}`};
    } catch (error) {
        return {loguejat: false};
    }
};

const signOutV = async function (email, password) {
    await signOut(auth);
}

const registerWithEmail = async (fullName, userName, email, password) => {
    let id = null;
    try{
        await createUserWithEmailAndPassword(auth, email, password).then(
            async (result) => {
                try{
                    let myIngredients = [];
                    let shoppingList = [];
                    let favoriteRecipes = [];
                    const docRef = await setDoc(doc(db, "users", result.user.uid), {
                        fullName,
                        userName,
                        profilePic,
                        email,
                        userId: `${result.user.uid}`,
                        myIngredients,
                        shoppingList,
                        favoriteRecipes
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



module.exports = {registerWithEmail, signOutV, loginWithGoogle, loginWithEmail, resetPasswordEmail};