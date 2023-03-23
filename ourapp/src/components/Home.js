import { NavLink } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";



export default function Home(){

    const[userW, setUserW] = useState({});

    onAuthStateChanged(auth, (currentuser) => {
        setUserW(currentuser);
    });

    const logOut = async () => {
        await signOut(auth);
    }

    return (
        <div>
        {
            !userW?.email && (
            <>
                <h1>IMPROVISED CHEFF</h1>
                <ul>
                    <li><NavLink to="/login" className="navegationLink">Login</NavLink></li>
                    <li><NavLink to="/register" className="navegationLink">Register</NavLink></li>
                </ul>
            </>
            )
        }

        {
            userW?.email && (
                <>
                <h1>IMPROVISED CHEFF</h1>
                <h3>User Logged In: {userW?.email}</h3>
                <button onClick={logOut}>Sign Out</button>
            </>
            )
        }
        </div>    
     );
}