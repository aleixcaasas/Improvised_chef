import { useContext, createContext, useEffect, useState} from "react";
import { AuthErrorCodes, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import {provider, auth, db} from '../firebase-config';
import { addDoc, collection, getDocs, query} from "firebase/firestore";

const userContext = createContext();
export const useAuth = () => {return useContext(userContext)};

const UserAuthC = ({children}) => {
    const [error, setError] = useState("");
    const [currentUser, setUser] = useState("");

    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            console.log(user)
            if(user){
                setUser(user)
                console.log("u are logging");
            }
            else{
                //signOut(auth);
            }
        })
    }, [currentUser]);

    const SignUp = async (fullName, userName, email, password) => { 
        setError("");
        createUserWithEmailAndPassword(auth, email, password).then(
            async (result) => {
                console.log(result)
                try{
                    const docRef = await addDoc(collection(db, "users"), {
                        fullName,
                        userName,
                        email,
                        userId: `${result.user.uid}`
                    });
                    alert("Welcome");
                    console.log("Document written with ID: ", docRef.id);
                } catch(error){
                    console.error("ERROR adding doc", error);
                }
            }
        ).catch(err => {
            if(err.code === "auth/email-already-in-use"){
                setInterval(() => {
                    setError("");
                }, 5000)
                setError("email already exists")
            }
            else if (err.code === AuthErrorCodes.WEAK_PASSWORD){
                setInterval(() => {
                    setError("");
                }, 5000)
                setError("password too weak");
            }
            else {
                setError(err.message);
            }
        })
    };

    const logOut = async () =>{
        await signOut(auth);
    }

    const logInWithEmail = async (email, password) =>{
        await signInWithEmailAndPassword(auth, email, password);
    }

    const logInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
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
            }
            return true;
          } catch (error) {
            return false;
          }
    };

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

    const value = {
        SignUp,
        error,
        currentUser,
        logOut,
        logInWithEmail,
        logInWithGoogle,
        emailNotExists,
        resetPasswordEmail
    }
    
    return (
        <userContext.Provider value={value}>{children}</userContext.Provider>
    )
}

export default UserAuthC;