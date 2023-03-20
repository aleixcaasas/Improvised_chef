import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Home = () => {

    const[userW, setUserW] = useState({})
    onAuthStateChanged(auth, (currentuser) => {
        setUserW(currentuser);
    })

    const logOut = async () => {
        await signOut(auth);
    }

    return ( 
        <div>
            <h1>CHEFF IMPROVISED</h1>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <h3>User Logged In: </h3>
            {userW?.email}
            <button onClick={logOut}>Sign Out</button>
        </div>
        
     );
}
 
export default Home;