import { useContext, createContext, useEffect, useState} from "react";
import { AuthErrorCodes, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase-config";
import { addDoc, collection} from "firebase/firestore";

const userContext = createContext();
export const useAuth = () => {return useContext(userContext)};

const UserAuthC = ({children}) => {
    const [error, setError] = useState("")
    const [currentuser, setUser] = useState("")
    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            console.log(user)
            if(user){
                setUser(user)
                console.log("u are logging")
            }
            else{
                //logout
            }
        })
    }, [currentuser])

    const SignUp = async (Fullname, userName, email, password) => { 
        setError("");
        createUserWithEmailAndPassword(auth, email, password).then(
            async (result) => {
                console.log(result)
                try{
                    const docRef = await addDoc(collection(db, "users"), {
                        Fullname,
                        userName,
                        email,
                        userId: `${result.user.uid}`
                    });
                    alert("Wellcome")
                    console.log("Document written with ID: ", docRef.id);
                } catch(e){
                    console.error("ERROR adding doc", e);
                }
            }
        ).catch(err => {
            if(err.code === "auth/email-already-in-use"){
                setInterval(() => {
                    setError("")
                }, 5000)
                setError("email already exists")
            }
            else if (err.code === AuthErrorCodes.WEAK_PASSWORD){
                setInterval(() => {
                    setError("")
                }, 5000)
                setError("password too weak")
            }
            else {
                setError(err.message)
            }
        })
    }

    const value = {
        SignUp,
        error,
        currentuser
    }
    
    return (
        <userContext.Provider value={value}>{children}</userContext.Provider>
    )
}

export default UserAuthC