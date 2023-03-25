import { NavLink } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import {useAuth} from '../context/UserAuthC';

export default function Home(){
    const[userW, setUserW] = useState({});
    const {logOut} = useAuth();

    onAuthStateChanged(auth, (currentuser) => {
        setUserW(currentuser);
    });

    const handleLogOut = async () => {
        await logOut();
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
                <button onClick={handleLogOut}>Sign Out</button>
            </>
            )
        }
        </div>    
     );
}