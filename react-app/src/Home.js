import { NavLink } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";



export default function Home(){

    const[userW, setUserW] = useState({})
    onAuthStateChanged(auth, (currentuser) => {
        setUserW(currentuser);
    });

    const logOut = async () => {
        await signOut(auth);
    }


    return ( 
        <div>
            <h1>IMPROVISED CHEFF</h1>
            <ul>
                <li><NavLink to="/login" className="navegationLink">Login</NavLink></li>
                <li><NavLink to="/register" className="navegationLink">Register</NavLink></li>
                <li><NavLink to="/loginGoogle" className="navegationLink">Login With Google</NavLink></li>
            </ul>
            <h3>User Logged In: </h3>
            {userW?.email}
            <button onClick={logOut}>Sign Out</button>
        </div>      
     );
}